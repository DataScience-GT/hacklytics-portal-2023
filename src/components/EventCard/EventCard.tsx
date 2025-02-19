import {
  Badge,
  Button,
  Card,
  Divider,
  Heading,
  Text,
} from "@aws-amplify/ui-react";
import React, { FC, useEffect, useState } from "react";
import styles from "./EventCard.module.scss";
import { Event } from "../../models";
import { DayOfWeek } from "../../misc/DaysOfWeek";
import CheckInModal from "./CheckInModal";
import { API, Auth, graphqlOperation } from "aws-amplify";
import { listCheckins } from "../../graphql/queries";

interface EventCardProps {
  event?: Event;
  isRSVPed?: boolean;
  onRSVP?: () => void;
  onCancelRSVP?: () => void;
  currentlyRSVPing?: boolean;
}

const EventCard: FC<EventCardProps> = ({
  event,
  isRSVPed,
  onRSVP,
  currentlyRSVPing,
}: EventCardProps) => {
  const [showCheckInModal, setShowCheckInModal] = useState(false);
  const [isCheckedIn, setIsCheckedIn] = useState(false);
  const [eventCheckinsMap, setEventCheckinsMap] = useState<
    Map<string, { [userSub: string]: string }>
  >(new Map());

  // Calculate timeframe, sameDay, day, etc.
  const start = event?.start
    ? new Date(event.start).toLocaleString(undefined, {
        weekday: "long",
        hour: "numeric",
        minute: "numeric",
        hour12: true,
      })
    : "";
  const end = event?.end
    ? new Date(event.end).toLocaleString(undefined, {
        weekday: "long",
        hour: "numeric",
        minute: "numeric",
        hour12: true,
      })
    : "";

  let timeframe =
    event?.start && event?.end ? `${start} - ${end}` : start || end;

  let sameDay = false;
  let day = "";
  if (event?.start && event?.end) {
    const startDay = new Date(event.start).getDay();
    const endDay = new Date(event.end).getDay();
    sameDay = startDay === endDay;
    day = DayOfWeek(startDay);
  }
  if (sameDay) {
    timeframe = timeframe.replace(` ${day}`, "");
  }

  const [now, setNow] = useState(new Date());
  useEffect(() => {
    const interval = setInterval(() => {
      setNow(new Date());
    }, 10 * 1000);
    return () => clearInterval(interval);
  }, []);

  let until = -1;
  let untilUnit = "";
  let inProgress = false;
  if (event?.start) {
    let diff = new Date(event.start).getTime() - now.getTime();
    let x = Math.round(diff / (60 * 1000));
    if (Math.abs(x) > 0) {
      until = x;
      untilUnit = Math.abs(x) === 1 ? "minute" : "minutes";
    }
    if (x < 0 && event.end) {
      let dur = new Date(event.end).getTime() - now.getTime();
      if (dur > 0) {
        inProgress = true;
      }
    }
    x = Math.round(diff / (60 * 60 * 1000));
    if (Math.abs(x) > 0) {
      until = x;
      untilUnit = Math.abs(x) === 1 ? "hour" : "hours";
    }
    x = Math.round(diff / (24 * 60 * 60 * 1000));
    if (Math.abs(x) > 0) {
      until = x;
      untilUnit = Math.abs(x) === 1 ? "day" : "days";
    }
  }

  // Reuse the admin page query logic to load all check-ins into a map.
  useEffect(() => {
    const loadEventCheckins = async () => {
      const res: any = await API.graphql({
        query: listCheckins,
        variables: {
          id: process.env.REACT_APP_HACKLYTICS_ADMIN_SETTINGS_ID,
          limit: 10000,
        },
        authMode: "AMAZON_COGNITO_USER_POOLS",
      });
      const checkins = res.data.listCheckins.items;
      // console.log("Loaded check-ins for event:", checkins);
      const map: Map<string, { [userSub: string]: string }> = new Map();
      for (const checkin of checkins) {
        if (!checkin) continue;
        // Ensure these field names match your schema!
        const eventID: string = checkin.eventCheckinsId;
        const username: string = checkin.userName;
        const sub: string = checkin.user;
        const record = map.get(eventID) || {};
        // console.log("Adding check-in record:", eventID, sub, username);
        record[sub] = username;
        map.set(eventID, record);
      }
      setEventCheckinsMap(map);
    };

    loadEventCheckins();
  }, []);

  // Now check if the current user is checked in for this event.
  useEffect(() => {
    const checkCurrentUserCheckIn = async () => {
      if (!event) return;
      try {
        const currentUser = await Auth.currentAuthenticatedUser();
        const userSub = currentUser.attributes.sub;
        const checkinsForEvent = eventCheckinsMap.get(event.id);
        if (checkinsForEvent && checkinsForEvent[userSub]) {
          setIsCheckedIn(true);
        } else {
          setIsCheckedIn(false);
        }
      } catch (err) {
        console.error("Error checking current user check-in:", err);
      }
    };

    checkCurrentUserCheckIn();
  }, [event, eventCheckinsMap]);

  // New logging effect: Print all participants for the event.
  useEffect(() => {
    const logParticipants = async () => {
      if (event) {
        try {
          const filter = { eventCheckinsId: { eq: event.id } };
          const response: any = await API.graphql(
            graphqlOperation(listCheckins, { filter })
          );
          const items = response.data.listCheckins.items;
          // console.log(
          //   `Participants for event ${event.id} (${event.name}):`,
          //   items
          // );
        } catch (err) {
          console.error(
            `Error logging participants for event ${event?.id}:`,
            err
          );
        }
      }
    };

    logParticipants();
  }, [event]);

  return (
    <div className={styles.EventCard} data-testid="EventCard">
      <Card variation="outlined" padding={"medium"}>
        {event?.start && (
          <Text
            fontWeight={400}
            style={{ filter: "invert(0.2)" }}
            fontSize="small"
          >
            {timeframe}{" "}
            {until > 0 ? (
              <Badge size="small" variation="info">
                In {until} {untilUnit}
              </Badge>
            ) : inProgress ? (
              <Badge size="small" variation="success">
                In Progress
              </Badge>
            ) : (
              <Badge size="small">Past</Badge>
            )}
          </Text>
        )}
        <Heading level={4} paddingTop="2px" paddingBottom={"2px"}>
          {event?.name}
        </Heading>
        <Text
          fontWeight={400}
          style={{ filter: "invert(0.2)" }}
          fontSize="small"
        >
          {event?.location} | {event?.points}{" "}
          {event?.points === 1 ? "point" : "points"}
        </Text>
        {event?.description && (
          <Divider marginTop={"medium"} marginBottom={"medium"} />
        )}
        <Text>{event?.description}</Text>
        {onRSVP && (
          <Button
            width={"100%"}
            marginTop="medium"
            borderRadius={"100px"}
            onClick={onRSVP}
            isLoading={currentlyRSVPing}
            loadingText={isRSVPed ? "Cancelling RSVP" : "RSVPing"}
          >
            {isRSVPed ? "Cancel RSVP" : "RSVP"}
          </Button>
        )}
        {inProgress ? (
          isCheckedIn ? (
            <Button
              width="100%"
              marginTop="small"
              borderRadius="100px"
              variation="primary"
              isDisabled
            >
              Checked In
            </Button>
          ) : (
            <Button
              width="100%"
              marginTop="small"
              borderRadius="100px"
              variation="primary"
              onClick={() => setShowCheckInModal(true)}
            >
              Check In
            </Button>
          )
        ) : isCheckedIn ? (
          <Button
            width="100%"
            marginTop="small"
            borderRadius="100px"
            variation="primary"
            isDisabled
            style={{ opacity: 0.5 }}
          >
            Attended
          </Button>
        ) : null}
      </Card>
      {showCheckInModal && event && (
        <CheckInModal
          isOpen={showCheckInModal}
          event={event}
          onClose={() => setShowCheckInModal(false)}
          onSuccess={() => {
            console.log("Checked-in at event");
            setShowCheckInModal(false);
            setIsCheckedIn(true);
          }}
        />
      )}
    </div>
  );
};

export default EventCard;
