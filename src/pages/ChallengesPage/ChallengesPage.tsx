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
} from "@aws-amplify/ui-react";

interface DatasetPageProps {
  user?: AmplifyUser;
  signOut?: (data?: AuthEventData | undefined) => void;
}

const ChallengesPage: FC<DatasetPageProps> = ({ user, signOut }) => (
  <div className={styles.ChallengesPage}>
    <Flex direction={"column"} padding="medium" alignItems={"center"}>
      <View width={"85%"}>
        <Heading level={3} marginBottom={"medium"} marginTop={"medium"}>
          Challenges
        </Heading>
        <Table>
          <TableHead>
            <TableRow>
              <TableCell as="th" width={"400px"}>Challenge</TableCell>
              <TableCell as="th" width={"400px"}>Description</TableCell>
              <TableCell as="th">Prizes</TableCell>
            </TableRow>
          </TableHead>
          <TableBody className={styles.ChallengesTableBody}>
            <TableRow>
              <TableCell>National Security Agency Challenge</TableCell>
              <TableCell></TableCell>
              <TableCell>1st: $500. 2nd: $300. 3rd: $200.</TableCell>
            </TableRow>
            <TableRow>
              <TableCell>Elevance Healthcare Challenge</TableCell>
              <TableCell></TableCell>
              <TableCell>1st: Job Interview</TableCell>
            </TableRow>
            <TableRow>
              <TableCell>Traversaal AI Challenge</TableCell>
              <TableCell></TableCell>
              <TableCell></TableCell>
            </TableRow>
            <TableRow>
              <TableCell>Assurant Challenge</TableCell>
              <TableCell></TableCell>
              <TableCell></TableCell>
            </TableRow>
            <TableRow>
              <TableCell>Archetype AI Challenge</TableCell>
              <TableCell></TableCell>
              <TableCell></TableCell>
            </TableRow>
            <TableRow>
              <TableCell>Best Use of Intel Developer Cloud</TableCell>
              <TableCell></TableCell>
              <TableCell></TableCell>
            </TableRow>
            <TableRow>
              <TableCell>Best Use of MongoDB Atlas</TableCell>
              <TableCell></TableCell>
              <TableCell></TableCell>
            </TableRow>
            <TableRow>
              <TableCell>Best Use of Taipy</TableCell>
              <TableCell></TableCell>
              <TableCell></TableCell>
            </TableRow>
            <TableRow>
              <TableCell>Best Use of Starknet</TableCell>
              <TableCell></TableCell>
              <TableCell></TableCell>
            </TableRow>
            <TableRow>
              <TableCell>Best AI Application Built with Cloudflare</TableCell>
              <TableCell></TableCell>
              <TableCell></TableCell>
            </TableRow>
          </TableBody>
        </Table>
      </View>
    </Flex>
  </div>
);

export default ChallengesPage;
