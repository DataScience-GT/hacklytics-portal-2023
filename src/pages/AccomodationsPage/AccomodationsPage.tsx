import React, { FC } from "react";
import styles from "./AccomodationsPage.module.scss";

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
} from "@aws-amplify/ui-react";

interface AccomodationsPageProps {
  user?: AmplifyUser;
  signOut?: (data?: AuthEventData | undefined) => void;
}

const AccomodationsPage: FC<AccomodationsPageProps> = ({ user, signOut }) => (
  <div className={styles.AccomodationsPage}>
    <Flex direction={"column"} padding="medium" alignItems={"center"}>
      <View width={"85%"}>
        <Heading level={3} marginBottom={"medium"} marginTop={"medium"}>
          Accomodations
        </Heading>
        <Heading level={5} marginBottom={"0.3em"} marginTop={"large"}>
          Sleeping Bags
        </Heading>
        <Text>
            You can check out a sleeping bag by going to the Klaus auditorium and requesting
            one from the front desk. 
        </Text>
        <Heading level={5} marginBottom={"0.3em"} marginTop={"large"}>
          Showers
        </Heading>
        <Text>
            Showers are available on the 3rd floor of Klaus Computing Building (student wing), 
            or at the 1st floor of the Clough Undergraduate Learning Commons (CULC).
        </Text>
      </View>
    </Flex>
  </div>
);

export default AccomodationsPage;
