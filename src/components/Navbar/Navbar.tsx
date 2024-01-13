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
          gap="20%"
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
            gap="1em"
            width="fit-content"
            grow={1}
          >
            {user && getGroups(user).includes("Administrator") && (
              <Link className={styles.MenuLink} to="/admin" style={{background: "var(--amplify-colors-background-info)"}}>
                <Button size="small">Admin Console</Button>
              </Link>
            )}
            <Link className={styles.MenuLink} to="/">
              <Button size="small">Dashboard</Button>
            </Link>
            {/* {user &&
              (getGroups(user).includes("Scavenger") ||
                getGroups(user).includes("Administrator")) && (
                <Link className={styles.MenuLink} to="/scavengerhunts">
                  <Button size="small">Scavenger Hunts</Button>
                </Link>
            )} */}
            {/* {user &&
              (getGroups(user).includes("Volunteer") ||
                getGroups(user).includes("Administrator")) && (
                <Link className={styles.MenuLink} to="/shop">
                  <Button size="small">Points Shop</Button>
                </Link>
              )} */}
            <Link className={styles.MenuLink} to="/datasets">
              <Button size="small">Datasets</Button>
            </Link>
            <Link className={styles.MenuLink} to="/account">
              <Button size="small">Account</Button>
            </Link>
            <Link className={styles.MenuLink} to="/settings">
              <Button size="small">Settings</Button>
            </Link>
            <Button size="small" className={styles.LogoutButton} onClick={signOut}>
              Logout
            </Button>
          </Flex>
        </Flex>
      </View>
    </div>
  );
};

export default Navbar;
