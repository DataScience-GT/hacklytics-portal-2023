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

  // When the event changes, check if the current user is already checked in
  useEffect(() => {
    const checkUserCheckIn = async () => {
      if (event) {
        try {
          const currentUser = await Auth.currentAuthenticatedUser();
          const filter = {
            eventCheckinsId: { eq: event.id },
            user: { eq: currentUser.attributes.sub },
          };
          const response: any = await API.graphql(
            graphqlOperation(listCheckins, { filter })
          );
          const items = response.data.listCheckins.items;
          if (items && items.length > 0) {
            setIsCheckedIn(true);
          } else {
            setIsCheckedIn(false);
          }
        } catch (err) {
          console.error("Error checking check-in status:", err);
        }
      }
    };

    checkUserCheckIn();
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
