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

  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkIsMobile = () => {
      setIsMobile(window.innerWidth < 576);
    };
    checkIsMobile();
    window.addEventListener('resize', checkIsMobile);
    return () => {
      window.removeEventListener('resize', checkIsMobile);
    };
  }, []);

  return (
    <div data-testid="Footer">
        <View as="footer" className={styles.Footer} width="100vw" padding="medium">
            {isMobile ? (
                <>
                <Flex marginTop={"2em"} marginBottom={"4em"} direction={"column"} justifyContent={"center"}>
                    <Flex direction={"row"} alignItems={"center"}>
                        <img src={hacklytics} alt="hacklytics" width="40em"/>
                        <Heading level={4}>Data Science @ GT</Heading>
                    </Flex>
                    <a className={styles.Link} href="https://datasciencegt.org/" target="_blank">About Us</a>
                    <a className={styles.Link} href="https://www.linkedin.com/company/dsgt/" target="_blank">LinkedIn</a>
                    <a className={styles.Link} href="https://github.com/DataScience-GT" target="_blank">Github</a>
                    <a className={styles.Link} href="mailto:info@hacklytics.io" target="_blank">Contact</a>
                    <a className={styles.Link} href="https://static.mlh.io/docs/mlh-code-of-conduct.pdf" target="_blank">MLH Code of Conduct</a>
                </Flex>
                </>
            ) : (
                <>
                <Flex marginTop={"2em"} marginBottom={"4em"} direction={"row"} justifyContent={"space-between"} alignItems={"center"}>
                    <Flex direction={"row"} paddingRight={"3em"} alignItems={"center"}>
                        <img src={hacklytics} alt="hacklytics" width="40em"/>
                        <Heading level={4}>Data Science @ GT</Heading>
                    </Flex>
                    <a className={styles.Link} href="https://datasciencegt.org/" target="_blank">About Us</a>
                    <a className={styles.Link} href="https://www.linkedin.com/company/dsgt/" target="_blank">LinkedIn</a>
                    <a className={styles.Link} href="https://github.com/DataScience-GT" target="_blank">Github</a>
                    <a className={styles.Link} href="mailto:info@hacklytics.io" target="_blank">Contact</a>
                    <a className={styles.Link} href="https://static.mlh.io/docs/mlh-code-of-conduct.pdf" target="_blank">MLH Code of Conduct</a>
                    <Flex direction={"row"} paddingLeft={"3em"} alignItems={"center"}>
                        <Text>&#169; 2024 DSGT.</Text>
                    </Flex>
                </Flex>
                </>
            )}
        </View>
    </div>
  );
};

export default Footer;
