import React, { FC, useContext } from "react";
import styles from "./SettingsPage.module.scss";
import GLOBAL from "../../GLOBAL.module.scss";

import { AmplifyUser, AuthEventData } from "@aws-amplify/ui";
import { Auth } from "aws-amplify";

import {
  ToggleButtonGroup,
  ToggleButton,
  View,
  Button,
  Flex,
  Heading
} from "@aws-amplify/ui-react";

import { Theme, ThemeContext } from "../../context/ThemeContext";

interface SettingsPageProps {
  user?: AmplifyUser;
  signOut?: (data?: AuthEventData | undefined) => void;
}

const SettingsPage: FC<SettingsPageProps> = ({ user, signOut }) => {
  const { theme, setTheme, colorMode, setColorMode } = useContext(ThemeContext);
  return (
    <div className={styles.SettingsPage}>
      <Flex direction={"column"} padding={"medium"} alignItems={"center"}>
        <View width={"85%"}>
          <Flex direction="column" gap={"1em"}>
            <View>
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
            </View>
            <View>
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
            <View>
              <Button
                className={GLOBAL.Danger}
                onClick={() => {
                  //global sign out
                  Auth.signOut({ global: true });
                }}
                variation="primary"
              >
                Global Logout
              </Button>
            </View>
            <View>
              <Button
                className={GLOBAL.Danger}
                onClick={signOut}
                variation="primary"
              >
                Logout
              </Button>
            </View>
          </Flex>
        </View>
      </Flex>
    </div>
  );
};

export default SettingsPage;
