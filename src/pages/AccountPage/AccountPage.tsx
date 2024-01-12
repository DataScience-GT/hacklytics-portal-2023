import React, { FC } from "react";
import styles from "./AccountPage.module.scss";

import { AmplifyUser, AuthEventData } from "@aws-amplify/ui";
import {
  Button,
  View,
  Text,
  Table,
  TableHead,
  TableCell,
  TableBody,
  TableRow,
} from "@aws-amplify/ui-react";
import { Link } from "react-router-dom";

interface AccountPageProps {
  user?: AmplifyUser;
  signOut?: (data?: AuthEventData | undefined) => void;
}

const AccountPage: FC<AccountPageProps> = ({ user, signOut }) => (
  <div className={styles.AccountPage}>
    <View padding="medium">
      <Link to="/" style={{ color: "var(--amplify-colors-font-active)" }}>
        Return to Dashboard
      </Link>
      <Table marginTop={"medium"}>
        <TableHead>
          <TableCell as="th">Attribute</TableCell>
          <TableCell as="th">Value</TableCell>
        </TableHead>
        {user && user.attributes && (
          <TableBody>
            {user.attributes?.email && (
              <TableRow>
                <TableCell>Email</TableCell>
                <TableCell>{user?.attributes?.email}</TableCell>
              </TableRow>
            )}
            <TableRow>
                <TableCell>School Email</TableCell>
                <TableCell>
                {(user?.attributes["custom:gtemail"] &&
                  user?.attributes["custom:gtemail"]) ??
                  "None"}
              </TableCell>
              </TableRow>
            {user.attributes?.name && (
              <TableRow>
                <TableCell>Name</TableCell>
                <TableCell>{user?.attributes?.name}</TableCell>
              </TableRow>
            )}
            {user.attributes?.birthdate && (
              <TableRow>
                <TableCell>Birthdate</TableCell>
                <TableCell>{user?.attributes?.birthdate}</TableCell>
              </TableRow>
            )}
            <TableRow>
              <TableCell>Dietary Restriction</TableCell>
              <TableCell>
                {(user?.attributes["custom:foodPreference"] &&
                  titleCaseWord(user?.attributes["custom:foodPreference"])) ??
                  "None"}
              </TableCell>
            </TableRow>
          </TableBody>
        )}
      </Table>
    </View>
  </div>
);

function titleCaseWord(word: string) {
  if (!word) return word;
  return word[0].toUpperCase() + word.substr(1).toLowerCase();
}

export default AccountPage;
