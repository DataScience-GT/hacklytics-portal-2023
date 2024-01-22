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
              <TableCell as="th">Challenge</TableCell>
              <TableCell as="th">Description</TableCell>
              <TableCell as="th">Prizes</TableCell>
            </TableRow>
          </TableHead>
          <TableBody className={styles.ChallengesTableBody}>
            <TableRow>
              <TableCell>Sports</TableCell>
              <TableCell>
                
              </TableCell>
            </TableRow>
            <TableRow>
              <TableCell>Healthcare</TableCell>
              <TableCell>

              </TableCell>
            </TableRow>
            <TableRow>
              <TableCell>Generative AI</TableCell>
              <TableCell>
                
              </TableCell>
            </TableRow>
            <TableRow>
              <TableCell>Finance</TableCell>
              <TableCell>
                
              </TableCell>
            </TableRow>
          </TableBody>
        </Table>
      </View>
    </Flex>
  </div>
);

export default ChallengesPage;
