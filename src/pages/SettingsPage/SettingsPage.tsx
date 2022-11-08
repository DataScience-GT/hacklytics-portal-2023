import React, { FC, useContext, useState } from "react";
import styles from "./SettingsPage.module.scss";

import { AmplifyUser, AuthEventData } from "@aws-amplify/ui";

import { ToggleButtonGroup, ToggleButton, Text } from "@aws-amplify/ui-react";

import { Theme, ThemeContext } from "../../context/ThemeContext";

interface SettingsPageProps {
  user?: AmplifyUser;
  signOut?: (data?: AuthEventData | undefined) => void;
}

const SettingsPage: FC<SettingsPageProps> = ({ user, signOut }) => {
  const { theme, setTheme, colorMode, setColorMode } = useContext(ThemeContext);
  return (
    <div className={styles.SettingsPage}>
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
    </div>
  );
};

export default SettingsPage;
