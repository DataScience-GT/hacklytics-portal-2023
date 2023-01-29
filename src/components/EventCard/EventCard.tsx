import { Badge, Card, Heading, Text } from "@aws-amplify/ui-react";
import React, { FC } from "react";
import styles from "./EventCard.module.scss";
import { Event } from "../../models";
import { DayOfWeek } from "../../misc/DaysOfWeek";

interface EventCardProps {
  event?: Event;
}

const EventCard: FC<EventCardProps> = ({ event }: EventCardProps) => {
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
        <Heading level={4}>
          {event?.name}{" "}
          <Badge variation={event?.status ? "success" : "error"}>
            {event?.status ? "Open" : "Closed"}
          </Badge>
        </Heading>
        <Text fontWeight={400}>{timeframe}</Text>
        <Text>{event?.location}</Text>
        <Text>{event?.description}</Text>
        {event?.points && <Text>Points: {event?.points}</Text>}
      </Card>
    </div>
  );
};

export default EventCard;
