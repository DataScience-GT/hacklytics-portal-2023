import React, { FC } from "react";
import styles from "./ChallengesPage.module.scss";

import { AmplifyUser, AuthEventData } from "@aws-amplify/ui";
import {
  View,
  Heading,
  Table,
  TableHead,
  TableCell,
  TableRow,
  TableBody,
  Text,
  Flex,
  TabItem,
  Tabs,
} from "@aws-amplify/ui-react";

interface DatasetPageProps {
  user?: AmplifyUser;
  signOut?: (data?: AuthEventData | undefined) => void;
}

const ChallengesTabMap = new Map<string, number>([
  ["/nsa", 0],
  ["/elevance", 1],
  ["/traversaalai", 2],
]);

const ChallengesPage: FC<DatasetPageProps> = ({ user, signOut }) => (
  <div className={styles.ChallengesPage}>
    <Flex direction={"column"} padding="medium" alignItems={"center"}>
      <View width={"85%"}>
        <Heading level={3} marginBottom={"medium"} marginTop={"medium"}>
          Challenges
        </Heading>
        <Tabs 
          spacing="relative" 
          defaultIndex={ChallengesTabMap.get(window.location.pathname) ?? 0} 
          grow={1}
          onChange={(index: string | number) => {
            let ChallengesTabMapRev = Array.from(ChallengesTabMap.keys());
            let i = parseInt(index as string);
            window.history.pushState({}, "Challenge", ChallengesTabMapRev[i]);
          }}
          width={"70%"}
        >
          <TabItem title="National Security Agency" width="10%">
            <Heading marginTop={"1em"} level={4}>National Security Agency Challenge</Heading>
            <Text>
              Cybersecurity relies on monitoring devices and networks to determine if systems 
              are being attacked or used maliciously. There are a wide variety of data sources ranging from 
              system logs, program binaries, network flow records, and packet data. Since this type of data 
              has privacy implications and noise, there are many challenges to developing analytics via data 
              science.
          
              In this track, you will use data science to detect anomalies in 3 challenge data sets, each 
              increasing in difficulty: login, DNS, and netflow. Each challenge description explains the cybersecurity 
              concepts needed to complete the challenge. May the best defender win!
            </Text>
          </TabItem>
        </Tabs>
      </View>
    </Flex>
  </div>
);

export default ChallengesPage;
