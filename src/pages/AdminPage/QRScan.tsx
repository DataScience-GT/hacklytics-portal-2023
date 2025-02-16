// src/pages/QRScanCheckIn.tsx
import React, { useState, useEffect } from "react";
import {
  View,
  Heading,
  Text,
  Button,
  Flex,
  SelectField,
} from "@aws-amplify/ui-react";
import { QrReader } from "@blackbox-vision/react-qr-reader";
import { API, graphqlOperation } from "aws-amplify";
import { createCheckin, createPoints } from "../../graphql/mutations";
import { listEvents } from "../../graphql/queries";
import { Event } from "../../models";

const QRScanCheckIn: React.FC = () => {
  const [qrResult, setQRResult] = useState<string>("");
  const [error, setError] = useState<string>("");
  const [scanned, setScanned] = useState<boolean>(false);
  const [events, setEvents] = useState<Event[]>([]);
  const [selectedEventId, setSelectedEventId] = useState<string>("");
  const [loadingEvents, setLoadingEvents] = useState<boolean>(false);
  const [successMessage, setSuccessMessage] = useState<string>("");

  // Load available events for the dropdown
  useEffect(() => {
    const fetchEvents = async () => {
      try {
        setLoadingEvents(true);
        const res: any = await API.graphql(
          graphqlOperation(listEvents, { filter: { _deleted: { ne: true } } })
        );
        if (res.data?.listEvents?.items) {
          const eventsData: Event[] = res.data.listEvents.items;
          setEvents(eventsData);
          if (eventsData.length > 0) {
            setSelectedEventId(eventsData[0].id);
          }
        }
        setLoadingEvents(false);
      } catch (err) {
        console.error("Error loading events:", err);
        setLoadingEvents(false);
      }
    };
    fetchEvents();
  }, []);

  // Handle QR reader result
  const handleResult = (result: any, error: any) => {
    if (result) {
      // Assume the QR code returns a CSV string: "email,sub"
      setQRResult(result.text);
      setScanned(true);
      setError("");
      setSuccessMessage("");
    }
    if (error && !result) {
      console.info("QR scan error:", error);
      setError("Please Scan Again");
    }
  };

  // Helper function to propagate points using the createPoints mutation
  const createIndividualPoints = async (
    id: string,
    email: string,
    points: number
  ) => {
    try {
      await API.graphql(
        graphqlOperation(createPoints, {
          input: {
            userID: id,
            userName: email,
            points: points,
          },
        })
      );
    } catch (err) {
      console.error("Error creating points:", err);
    }
  };

  // Handle check-in via QR code
  const handleQRCheckIn = async () => {
    try {
      // Expecting QR result in format "email,sub"
      const parts = qrResult.split(",");
      if (parts.length < 2) {
        setError("Invalid QR code format.");
        return;
      }
      const userEmail = parts[0].trim();
      const userSub = parts[1].trim();

      const selectedEvent = events.find(
        (event) => event.id === selectedEventId
      );
      const eventName = selectedEvent ? selectedEvent.name : "Unknown Event";
      // Use the event's points attribute, fallback to 10 if not provided
      const pointsToAward = selectedEvent?.points ?? 10;

      const checkinInput = {
        createdBy: userSub,
        createdByName: userEmail,
        user: userSub,
        userName: userEmail,
        eventCheckinsId: selectedEventId,
      };

      // Create the check-in record
      const checkinRes: any = await API.graphql(
        graphqlOperation(createCheckin, { input: checkinInput })
      );
      console.log("QR check-in successful:", checkinRes);

      // Propagate points for the check-in using the event's points value :3
      await createIndividualPoints(userSub, userEmail, pointsToAward);

      setSuccessMessage(
        `${userEmail} successfully scanned for event "${eventName}".`
      );
      setError("");
      setScanned(true);
    } catch (err) {
      console.error("QR check-in failed:", err);
      setError("Error processing QR code. Please try again.");
    }
  };

  return (
    <View padding="medium">
      <Heading level={3}>QR Code Scanner & Check-In</Heading>
      {error && <Text color="red">{error}</Text>}
      {successMessage && <Text color="green">{successMessage}</Text>}
      {!scanned ? (
        <QrReader
          onResult={handleResult}
          constraints={{ video: { facingMode: "environment" } }}
          style={{ width: "100%" }}
        />
      ) : (
        <Flex direction="column" gap="medium">
          {qrResult && <Text>Scanned Result: {qrResult}</Text>}
          <SelectField
            label="Select Event"
            onChange={(e) => setSelectedEventId(e.target.value)}
            value={selectedEventId}
            isDisabled={loadingEvents}
          >
            {events.map((event) => (
              <option key={event.id} value={event.id}>
                {event.name}
              </option>
            ))}
          </SelectField>
          <Flex direction="row" gap="medium">
            <Button onClick={handleQRCheckIn} variation="primary">
              Check In via QR
            </Button>
            <Button
              onClick={() => {
                setQRResult("");
                setScanned(false);
                setSuccessMessage("");
                setError("");
              }}
            >
              Scan Again
            </Button>
          </Flex>
        </Flex>
      )}
    </View>
  );
};

export default QRScanCheckIn;
