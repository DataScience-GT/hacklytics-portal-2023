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
  const start = event?.start
    ? new Date(event?.start ?? "").toLocaleString(undefined, {
        // month: "short",
        // day: "numeric",
        weekday: "long",
        // year: "numeric",

        hour: "numeric",
        minute: "numeric",
        hour12: true,
      })
    : "";
  const end = event?.end
    ? new Date(event?.end ?? "").toLocaleString(undefined, {
        // month: "short",
        // day: "numeric",
        weekday: "long",
        // year: "numeric",

        hour: "numeric",
        minute: "numeric",
        hour12: true,
      })
    : "";

  let timeframe =
    event?.start && event?.end ? `${start} - ${end}` : start || end;

  // check if on the same day
  // get day of week for each
  let sameDay = false;
  let day = "";
  if (event?.start && event?.end) {
    const startDay = new Date(event?.start ?? "").getDay();
    const endDay = new Date(event?.end ?? "").getDay();
    sameDay = startDay === endDay;
    day = DayOfWeek(startDay);
  }
  if (sameDay) {
    // before ex: "Monday 12:00 PM - Monday 1:00 PM"
    // after ex: "Monday 12:00 PM - 1:00 PM"
    timeframe = timeframe.replace(` ${day}`, "");
  }

  const [now, setNow] = useState(new Date());

  useEffect(() => {
    let x = setInterval(() => {
      setNow(new Date());
    }, 10 * 1000);
    return () => {
      clearInterval(x);
    };
  });

  let until = -1;
  let untilUnit = "";
  let inProgress = false;
  if (event?.start) {
    let diff = new Date(event.start).getTime() - now.getTime();
    let x = Math.round(diff / (60 * 1000));
    if (Math.abs(x) > 0) {
      until = x;
      untilUnit = Math.abs(x) == 1 ? "minute" : "minutes";
    }
    if (x < 0 && event.end) {
      // check if in progress
      let dur = new Date(event.end).getTime() - now.getTime();
      if (dur > 0) {
        inProgress = true;
      }
    }
    x = Math.round(diff / (60 * 60 * 1000));
    if (Math.abs(x) > 0) {
      until = x;
      untilUnit = Math.abs(x) == 1 ? "hour" : "hours";
    }
    x = Math.round(diff / (24 * 60 * 60 * 1000));
    if (Math.abs(x) > 0) {
      until = x;
      untilUnit = Math.abs(x) == 1 ? "day" : "days";
    }
  }

  return (
    <div className={styles.EventCard} data-testid="EventCard">
      <Card variation="outlined" padding={"medium"}>
        {event?.start && (
          <Text
            fontWeight={400}
            style={{ filter: "invert(0.2)" }}
            fontSize="small"
          >
            {timeframe} {until > 0 ? <Badge size="small" variation="info">In {until} {untilUnit}</Badge> : (inProgress ? <Badge size="small" variation="success">In Progress</Badge> : <Badge size="small">Past</Badge>)}
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
          {event?.location}
        </Text>
        {event?.description && (
          <Divider marginTop={"medium"} marginBottom={"medium"} />
        )}
        <Text>{event?.description}</Text>
        {/* {event?.points && <Text>Points: {event?.points}</Text>} */}
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
      </Card>
    </div>
  );
};

export default EventCard;
