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
  Flex,
  Heading,
} from "@aws-amplify/ui-react";
import { Link } from "react-router-dom";
import { QRCodeSVG, QRCodeCanvas } from "qrcode.react";

interface AccountPageProps {
  user?: AmplifyUser;
  signOut?: (data?: AuthEventData | undefined) => void;
}

const AccountPage: FC<AccountPageProps> = ({ user, signOut }) => (
  <div className={styles.AccountPage}>
    <Flex direction={"column"} padding={"medium"} alignItems={"center"}>
      <View width={"85%"}>
        <Heading level={3} marginBottom={"medium"} marginTop={"medium"}>
          Account
        </Heading>
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
                  <TableCell>{user.attributes.email}</TableCell>
                </TableRow>
              )}
              <TableRow>
                <TableCell>School Email</TableCell>
                <TableCell>
                  {user.attributes["custom:gtemail"] ?? "None"}
                </TableCell>
              </TableRow>
              {user.attributes?.name && (
                <TableRow>
                  <TableCell>Name</TableCell>
                  <TableCell>{user.attributes.name}</TableCell>
                </TableRow>
              )}
              {user.attributes?.birthdate && (
                <TableRow>
                  <TableCell>Birthdate</TableCell>
                  <TableCell>{user.attributes.birthdate}</TableCell>
                </TableRow>
              )}
              <TableRow>
                <TableCell>Dietary Restriction</TableCell>
                <TableCell>
                  {(user.attributes["custom:foodPreference"] &&
                    titleCaseWord(user.attributes["custom:foodPreference"])) ??
                    "None"}
                </TableCell>
              </TableRow>
            </TableBody>
          )}
        </Table>
        {/* Display the QR Code below the table if the user is available */}
        {user && user.attributes && (
          <div style={{ marginTop: "1em", textAlign: "center" }}>
            {/* The QR code value is a comma-separated string: email,sub */}
            {user && user.attributes && (
              <div style={{ marginTop: "1em", textAlign: "center" }}>
                <Heading level={4}> Check-In QR Code</Heading>
                <div
                  style={{
                    backgroundColor: "#fff",
                    padding: "16px",
                    display: "inline-block",
                    borderRadius: "8px",
                    boxShadow: "0 0 8px rgba(0,0,0,0.1)",
                  }}
                >
                  <QRCodeSVG
                    value={`${user.attributes.email},${user.attributes.sub}`}
                    size={200}
                    level="M"
                  />
                </div>
                <Text marginTop="0.5em">Present this QR code at check-in.</Text>
              </div>
            )}
          </div>
        )}
      </View>
    </Flex>
  </div>
);

function titleCaseWord(word: string) {
  if (!word) return word;
  return word[0].toUpperCase() + word.substr(1).toLowerCase();
}

export default AccountPage;
