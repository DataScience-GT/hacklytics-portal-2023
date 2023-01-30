import React, { FC } from "react";
import styles from "./HacklyticsCard.module.scss";

import { Badge, Card, Heading, Text } from "@aws-amplify/ui-react";

interface HacklyticsCardProps {}

const HacklyticsCard: FC<HacklyticsCardProps> = () => (
  <div className={styles.HacklyticsCard} data-testid="HacklyticsCard">
    <Card padding="medium" variation="outlined">
      <Heading level={4}>Hacklytics 2023</Heading>
      <Text>February 10-12</Text>
      <Text>
        Your status: <Badge variation="success">Confirmed</Badge>
      </Text>
    </Card>
  </div>
);

export default HacklyticsCard;