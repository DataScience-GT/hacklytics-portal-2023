import React, { FC, useEffect, useState } from "react";
import styles from "./Navbar.module.scss";

import { AmplifyUser, AuthEventData } from "@aws-amplify/ui";

import {
  Heading,
  View,
  Image,
  Flex,
  Menu,
  MenuItem,
  Divider,
  Button,
} from "@aws-amplify/ui-react";

import { Link } from "react-router-dom";

import logo from "../../assets/images/DSGT/square-logo.png";

interface NavbarProps {
  user?: AmplifyUser;
  signOut?: (data?: AuthEventData | undefined) => void;
}

const Navbar: FC<NavbarProps> = ({ user, signOut }) => {
  const [groups, setGroups] = useState<string[]>([]);
  useEffect(() => {
    const g = user?.getSignInUserSession()?.getAccessToken().payload[
      "cognito:groups"
    ];
    if (g) setGroups(g);
  }, []);
  return (
    <div data-testid="Navbar">
      <View
        as="header"
        className={styles.Navbar}
        width="100vw"
        padding="medium"
      >
        <Flex
          direction={"row"}
          justifyContent="space-between"
          alignItems="center"
          gap="0.5em"
          height="100%"
          width="100%"
        >
          <Flex
            direction={"row"}
            justifyContent="flex-start"
            alignItems="center"
            gap="0.5em"
            height="100%"
            width="fit-content"
          >
            <Link to="/" style={{ textDecoration: "none" }}>
              <Flex
                direction={"row"}
                justifyContent="flex-start"
                alignItems="center"
                gap="0.5em"
                height="100%"
                width="fit-content"
              >
                <Image className={styles.Logo} alt="DSGT Logo" src={logo} />
                <Heading className={styles.DSGT} level={4}>
                  DSGT
                </Heading>
              </Flex>
            </Link>
          </Flex>
          <Flex
            direction={"row"}
            justifyContent="flex-end"
            alignItems="center"
            gap="1em"
            height="100%"
            width="fit-content"
            grow={1}
          >
            {groups.includes("Administrator") && (
              <Link to="/admin" style={{ textDecoration: "none" }}>
                <Button size="small">Admin Console</Button>
              </Link>
            )}
            <View width="fit-content">
              <Menu menuAlign="end">
                <Link className={styles.MenuLink} to="/">
                  <MenuItem>Dashboard</MenuItem>
                </Link>
                <Link className={styles.MenuLink} to="/account">
                  <MenuItem>Account</MenuItem>
                </Link>
                <Link className={styles.MenuLink} to="/settings">
                  <MenuItem>Settings</MenuItem>
                </Link>
                <Divider />
                <MenuItem className={styles.LogoutButton} onClick={signOut}>
                  Logout
                </MenuItem>
              </Menu>
            </View>
          </Flex>
        </Flex>
      </View>
    </div>
  );
};

export default Navbar;
