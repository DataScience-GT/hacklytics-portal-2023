import {
  Badge,
  Button,
  Card,
  Divider,
  Heading,
  Text,
} from "@aws-amplify/ui-react";
import React, { FC } from "react";
import styles from "./EventCard.module.scss";
import { Event } from "../../models";
import { DayOfWeek } from "../../misc/DaysOfWeek";

interface EventCardProps {
  event?: Event;
  isRSVPed?: boolean;
  onRSVP?: () => void;
  onCancelRSVP?: () => void;
}

const EventCard: FC<EventCardProps> = ({
  event,
  isRSVPed,
  onRSVP,
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
  return (
    <div className={styles.EventCard} data-testid="EventCard">
      <Card variation="outlined" padding={"medium"}>
        <Text
          fontWeight={400}
          style={{ filter: "invert(0.2)" }}
          fontSize="small"
        >
          {timeframe}
        </Text>
        <Heading level={4} paddingTop="2px" paddingBottom={"2px"}>
          {event?.name}
          {/* {" "} */}
          {/* <Badge variation={event?.status ? "success" : "error"}>
            {event?.status ? "Open" : "Closed"}
          </Badge> */}
        </Heading>
        <Text
          fontWeight={400}
          style={{ filter: "invert(0.2)" }}
          fontSize="small"
        >
          {event?.location}
        </Text>
        <Divider marginTop={"medium"} marginBottom={"medium"} />
        <Text>{event?.description}</Text>
        {/* {event?.points && <Text>Points: {event?.points}</Text>} */}
        {onRSVP && (
          <Button
            width={"100%"}
            marginTop="medium"
            borderRadius={"100px"}
            onClick={onRSVP}
          >
            {isRSVPed ? "Cancel RSVP" : "RSVP"}
          </Button>
        )}
      </Card>
    </div>
  );
};

export default EventCard;
