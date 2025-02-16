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
import { createCheckin } from "../../graphql/mutations";
import { listEvents } from "../../graphql/queries";
import { Event } from "../../models";

const QRScanCheckIn: React.FC = () => {
  const [qrResult, setQRResult] = useState<string>("");
  const [error, setError] = useState<string>("");
  const [scanned, setScanned] = useState<boolean>(false);
  const [events, setEvents] = useState<Event[]>([]);
  const [selectedEventId, setSelectedEventId] = useState<string>("");
  const [loadingEvents, setLoadingEvents] = useState<boolean>(false);

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

  // QR reader result handler
  const handleResult = (result: any, error: any) => {
    if (result) {
      // For example, assume the QR code returns a CSV string: "email,sub"
      setQRResult(result.text);
      setScanned(true);
      setError("");
    }
    if (error) {
      console.info("QR scan error:", error);
      // Optionally, set error only if no valid result exists
      if (!result) {
        setError("QR scan error. Please try again.");
      }
    }
  };

  // When the admin clicks "Check In", use the scanned data and selected event
  const handleQRCheckIn = async () => {
    try {
      // For this example, assume the scanned result is CSV: "email,sub"
      const parts = qrResult.split(",");
      if (parts.length < 2) {
        setError("Invalid QR code format.");
        return;
      }
      const userEmail = parts[0].trim();
      const userSub = parts[1].trim();

      const checkinInput = {
        createdBy: userSub,
        createdByName: userEmail,
        user: userSub,
        userName: userEmail,
        eventCheckinsId: selectedEventId, // from the dropdown
      };

      const result: any = await API.graphql(
        graphqlOperation(createCheckin, { input: checkinInput })
      );
      console.log("QR check-in successful:", result);
      // Reset for a new scan
      setQRResult("");
      setScanned(false);
      setError("");
    } catch (err) {
      console.error("QR check-in failed:", err);
      setError("Error processing QR code. Please try again.");
    }
  };

  return (
    <View padding="medium">
      <Heading level={3}>QR Code Scanner & Check-In</Heading>
      {error && <Text color="red">{error}</Text>}
      {!scanned ? (
        <QrReader
          onResult={handleResult}
          constraints={{ video: { facingMode: "environment" } }}
          style={{ width: "100%" }}
        />
      ) : (
        <Flex direction="column" gap="medium">
          <Text>Scanned Result: {qrResult}</Text>
          <SelectField
            label="Select Event"
            onChange={(e) => setSelectedEventId(e.target.value)}
            value={selectedEventId}
            isDisabled={loadingEvents} // disable while loading
          >
            {events.map((event) => (
              <option key={event.id} value={event.id}>
                {event.name}
              </option>
            ))}
          </SelectField>

          <Flex direction="row" gap="medium">
            <Button onClick={handleQRCheckIn} variation="primary">
              Check In
            </Button>
            <Button
              onClick={() => {
                setQRResult("");
                setScanned(false);
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
