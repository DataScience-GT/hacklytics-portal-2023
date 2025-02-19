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
import { Auth } from "aws-amplify";
import { createCheckin, createPoints } from "../../graphql/mutations";
import { listEvents, listCheckins } from "../../graphql/queries";
import { Event } from "../../models";

const QRScanCheckIn: React.FC = () => {
  const [qrResult, setQRResult] = useState<string>("");
  const [error, setError] = useState<string>("");
  const [scanned, setScanned] = useState<boolean>(false);
  const [events, setEvents] = useState<Event[]>([]);
  const [selectedEventId, setSelectedEventId] = useState<string>("");
  const [loadingEvents, setLoadingEvents] = useState<boolean>(false);
  const [message, setMessage] = useState<string>("");
  const [messageColor, setMessageColor] = useState<string>("");

  // New state for check-ins map
  const [eventCheckinsMap, setEventCheckinsMap] = useState<
    Map<string, { [userSub: string]: string }>
  >(new Map());

  // Load all events
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

  // Load check-ins map (same logic as in your admin page)
  useEffect(() => {
    const loadEventCheckins = async () => {
      try {
        const res: any = await API.graphql({
          query: listCheckins,
          variables: {
            // Using your admin settings id here. Make sure this fits your schema.
            id: process.env.REACT_APP_HACKLYTICS_ADMIN_SETTINGS_ID,
            limit: 10000,
          },
          authMode: "AMAZON_COGNITO_USER_POOLS",
        });
        const checkins = res.data.listCheckins.items;
        const map: Map<string, { [userSub: string]: string }> = new Map();
        for (const checkin of checkins) {
          if (!checkin) continue;
          const eventID: string = checkin.eventCheckinsId;
          const username: string = checkin.userName;
          const sub: string = checkin.user;
          const record = map.get(eventID) || {};
          record[sub] = username;
          map.set(eventID, record);
        }
        setEventCheckinsMap(map);
      } catch (err) {
        console.error("Error loading check-ins map:", err);
      }
    };
    loadEventCheckins();
  }, []);

  // Handle QR reader result
  const handleResult = (result: any, err: any) => {
    if (result) {
      setQRResult(result.text);
      setScanned(true);
      setError("");
      setMessage("");
    }
    if (err && !result) {
      console.error("QR scan error:", err);
      setError("QR scan error. Please try again.");
    }
  };

  // Helper: Create points record for the user
  const createIndividualPoints = async (
    userId: string,
    userEmail: string,
    points: number
  ) => {
    try {
      await API.graphql(
        graphqlOperation(createPoints, {
          input: { userID: userId, userName: userEmail, points },
        })
      );
    } catch (err) {
      console.error("Error creating points:", err);
    }
  };

  // Helper: Log all check-in records for a given event (for debugging)
  const logAllCheckInsForEvent = async (eventId: string) => {
    try {
      const res: any = await API.graphql(
        graphqlOperation(listCheckins, {
          filter: { eventCheckinsId: { eq: eventId } },
        })
      );
      // console.log(
      //   "All check-in records for event",
      //   eventId,
      //   res.data.listCheckins.items
      // );
    } catch (err) {
      console.error("Error fetching check-in records:", err);
    }
  };

  // Handle QR check-in process
  const handleQRCheckIn = async () => {
    if (loadingEvents || events.length === 0) {
      setError("Data is still loading, please wait.");
      return;
    }

    try {
      // Expect QR result in format: "email,sub"
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
      if (!selectedEvent) {
        setError("Selected event not found.");
        return;
      }
      const eventName = selectedEvent.name;
      const pointsToAward = selectedEvent.points ?? 10;

      // Use the check-ins map to determine if this user has already been scanned
      const checkinsForEvent = eventCheckinsMap.get(selectedEventId) || {};
      if (checkinsForEvent[userSub]) {
        setMessage(
          `${userEmail} has already been checked in for event "${eventName}".`
        );
        setMessageColor("red");
        await logAllCheckInsForEvent(selectedEventId);
        return;
      }

      // Create the check-in record
      const checkinInput = {
        createdBy: userSub,
        createdByName: userEmail,
        user: userSub,
        userName: userEmail,
        eventCheckinsId: selectedEventId,
      };
      const result: any = await API.graphql(
        graphqlOperation(createCheckin, { input: checkinInput })
      );
      console.log("QR check-in successful:", result);

      // Propagate points
      await createIndividualPoints(userSub, userEmail, pointsToAward);

      setMessage(
        `${userEmail} successfully checked in for event "${eventName}".`
      );
      setMessageColor("green");
      setError("");
      setScanned(true);

      // Optionally, reload the check-ins map after a successful check-in
      // so that subsequent scans reflect the new state
      const res: any = await API.graphql({
        query: listCheckins,
        variables: {
          id: process.env.REACT_APP_HACKLYTICS_ADMIN_SETTINGS_ID,
          limit: 10000,
        },
        authMode: "AMAZON_COGNITO_USER_POOLS",
      });
      const checkins = res.data.listCheckins.items;
      const map: Map<string, { [userSub: string]: string }> = new Map();
      for (const checkin of checkins) {
        if (!checkin) continue;
        const eventID: string = checkin.eventCheckinsId;
        const username: string = checkin.userName;
        const sub: string = checkin.user;
        const record = map.get(eventID) || {};
        record[sub] = username;
        map.set(eventID, record);
      }
      setEventCheckinsMap(map);

      // Debug: log updated check-in records for the event
      await logAllCheckInsForEvent(selectedEventId);
    } catch (err) {
      console.error("QR check-in failed:", err);
      setError("Error processing QR code. Please try again.");
    }
  };

  return (
    <View padding="medium">
      <Heading level={3}>QR Code Scanner & Check-In</Heading>
      {error && <Text color="red">{error}</Text>}
      {message && <Text color={messageColor}>{message}</Text>}
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
                setMessage("");
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
