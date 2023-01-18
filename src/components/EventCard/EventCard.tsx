import { Badge, Card, Heading, Text } from "@aws-amplify/ui-react";
import React, { FC } from "react";
import styles from "./EventCard.module.scss";
import { Event } from "../../models";

interface EventCardProps {
  event?: Event;
}

const EventCard: FC<EventCardProps> = ({ event }: EventCardProps) => {
  const start = event?.start
    ? new Date(event?.start ?? "").toLocaleString(undefined, {
        month: "short",
        day: "numeric",
        // year: "numeric",

        hour: "numeric",
        minute: "numeric",
        hour12: true,
      })
    : "";
  const end = event?.end
    ? new Date(event?.end ?? "").toLocaleString(undefined, {
        month: "short",
        day: "numeric",
        // year: "numeric",

        hour: "numeric",
        minute: "numeric",
        hour12: true,
      })
    : "";
  return (
    <div className={styles.EventCard} data-testid="EventCard">
      <Card variation="outlined" padding={"medium"}>
        <Heading level={4}>
          {event?.name}{" "}
          <Badge variation={event?.status ? "success" : "error"}>
            {event?.status ? "Open" : "Closed"}
          </Badge>
        </Heading>
        <Text fontWeight={400}>
          {start && end ? `${start} - ${end}` : start || end}
        </Text>
        <Text>{event?.location}</Text>
        <Text>{event?.description}</Text>
      </Card>
    </div>
  );
};

export default EventCard;
