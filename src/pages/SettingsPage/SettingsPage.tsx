import React, { FC, useContext, useEffect, useState } from "react";
import styles from "./SettingsPage.module.scss";

import { AmplifyUser, AuthEventData } from "@aws-amplify/ui";

import {
  ToggleButtonGroup,
  ToggleButton,
  Text,
  View,
} from "@aws-amplify/ui-react";
import { CognitoUserSession } from "amazon-cognito-identity-js";

import { Theme, ThemeContext } from "../../context/ThemeContext";

interface SettingsPageProps {
  user?: AmplifyUser;
  signOut?: (data?: AuthEventData | undefined) => void;
}

const SettingsPage: FC<SettingsPageProps> = ({ user, signOut }) => {
  const { theme, setTheme, colorMode, setColorMode } = useContext(ThemeContext);
  useEffect(() => {
    console.log(user)
    user?.listDevices(10, null, {
      onSuccess: (result) => {
        console.log(result);
      },
      onFailure: (err) => {
        console.log(err);
      }
    })
  }, []);
  return (
    <div className={styles.SettingsPage}>
      <View width="100%" padding="1em">
        <ToggleButtonGroup
          value={theme}
          isExclusive
          onChange={(value) => setTheme(value.toString() as Theme)}
        >
          {Object.values(Theme).map((t, i) => (
            <ToggleButton
              key={i}
              value={t}
              style={{ textTransform: "capitalize" }}
            >
              {t}
            </ToggleButton>
          ))}
        </ToggleButtonGroup>
        <ToggleButtonGroup
          value={colorMode}
          isExclusive
          onChange={(value) =>
            setColorMode(value.toString() as "system" | "light" | "dark")
          }
        >
          <ToggleButton value="light">Light</ToggleButton>
          <ToggleButton value="dark">Dark</ToggleButton>
          <ToggleButton value="system">System</ToggleButton>
        </ToggleButtonGroup>
      </View>
    </div>
  );
};

export default SettingsPage;
