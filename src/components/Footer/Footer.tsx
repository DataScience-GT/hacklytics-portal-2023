import React, { FC, useEffect, useState } from "react";
import styles from "./Footer.module.scss";

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
  Text
} from "@aws-amplify/ui-react";

import { Link } from "react-router-dom";

// import logo from "../../assets/images/DSGT/square-logo.png";
import logo from "../../assets/images/Hacklytics/hacklytics2024.png";
import hacklytics from "../../assets/images/DSGT/apple-touch-icon.png";


interface FooterProps {
  user?: AmplifyUser;
  signOut?: (data?: AuthEventData | undefined) => void;
}

const Footer: FC<FooterProps> = ({ user, signOut }) => {

  return (
    <div data-testid="Footer">
        <View as="footer" className={styles.Footer} width="100vw" padding="medium">
            <Flex marginTop={"3em"} marginBottom={"3em"} direction={"row"} justifyContent={"space-between"} alignItems={"center"}>
                <Flex direction={"row"} paddingRight={"3em"}>
                    <img src={hacklytics} alt="hacklytics" width="40em"/>
                    <Heading level={3}>DSGT</Heading>
                </Flex>
                <a className={styles.Link} href="https://datasciencegt.org/" target="_blank">About Us</a>
                <a className={styles.Link} href="https://www.linkedin.com/company/dsgt/" target="_blank">LinkedIn</a>
                <a className={styles.Link} href="https://github.com/DataScience-GT" target="_blank">Github</a>
                <a className={styles.Link} href="mailto:info@hacklytics.io" target="_blank">Contact</a>
                <a className={styles.Link} href="https://static.mlh.io/docs/mlh-code-of-conduct.pdf">MLH Code of Conduct</a>
            </Flex>
        </View>
    </div>
  );
};

export default Footer;
