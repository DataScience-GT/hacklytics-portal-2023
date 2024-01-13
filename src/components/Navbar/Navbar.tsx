import React, { FC } from "react";
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

// import logo from "../../assets/images/DSGT/square-logo.png";
import logo from "../../assets/images/Hacklytics/hacklytics2024.png";
import getGroups from "../../misc/Groups";

interface NavbarProps {
  user?: AmplifyUser;
  signOut?: (data?: AuthEventData | undefined) => void;
}

const Navbar: FC<NavbarProps> = ({ user, signOut }) => {
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
                  Hacklytics 2024
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
            {/* {user &&
              (getGroups(user).includes("Scavenger") ||
                getGroups(user).includes("Administrator")) && (
                <Link to="/scavengerhunts" style={{ textDecoration: "none" }}>
                  <Button size="small">Scavenger Hunts</Button>
                </Link>
              )} */}
            {user && getGroups(user).includes("Administrator") && (
              <Link to="/admin" style={{ textDecoration: "none" }}>
                <Button size="small">Admin Console</Button>
              </Link>
            )}
            <View width="fit-content">
              <Menu menuAlign="end">
                <Link className={styles.MenuLink} to="/">
                  <MenuItem>Dashboard</MenuItem>
                </Link>
                {user &&
                  (getGroups(user).includes("Scavenger") ||
                    getGroups(user).includes("Administrator")) && (
                    <Link className={styles.MenuLink} to="/scavengerhunts">
                      <MenuItem>Scavenger Hunts</MenuItem>
                    </Link>
                  )}
                {user &&
                  (getGroups(user).includes("Volunteer") ||
                    getGroups(user).includes("Administrator")) && (
                    <Link className={styles.MenuLink} to="/shop">
                      <MenuItem>Points Shop</MenuItem>
                    </Link>
                  )}
                <Link className={styles.MenuLink} to="/datasets">
                  <MenuItem>Datasets</MenuItem>
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
