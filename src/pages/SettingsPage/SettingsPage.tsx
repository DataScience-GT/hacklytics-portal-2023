import React, { FC, useState } from "react";
import styles from "./SettingsPage.module.scss";

import { AmplifyUser, AuthEventData } from "@aws-amplify/ui";

import { ToggleButtonGroup, ToggleButton, Text } from "@aws-amplify/ui-react";

interface SettingsPageProps {
  user?: AmplifyUser;
  signOut?: (data?: AuthEventData | undefined) => void;
}

const SettingsPage: FC<SettingsPageProps> = ({ user, signOut }) => {
  const [colorMode, setColorMode] = useState("system");
  return (
    <div className={styles.SettingsPage}>
      <ToggleButtonGroup
        value={colorMode}
        isExclusive
        onChange={(value) => setColorMode(value.toString())}
      >
        <ToggleButton value="light">Light</ToggleButton>
        <ToggleButton value="dark">Dark</ToggleButton>
        <ToggleButton value="system">System</ToggleButton>
      </ToggleButtonGroup>
      <Text>Color Mode: {colorMode}</Text>
    </div>
  );
};

export default SettingsPage;
