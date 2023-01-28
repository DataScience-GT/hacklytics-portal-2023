import React, { FC } from "react";
import styles from "./ScavengerHuntPage.module.scss";

import Modal from "react-modal";
import { AmplifyUser, AuthEventData } from "@aws-amplify/ui";

interface ScavengerHuntPageProps {
  user?: AmplifyUser;
  signOut?: (data?: AuthEventData | undefined) => void;
}

const ScavengerHuntPage: FC<ScavengerHuntPageProps> = ({
  user,
  signOut,
}: ScavengerHuntPageProps) => (
  <div className={styles.ScavengerHuntPage}>ScavengerHuntPage Component</div>
);

export default ScavengerHuntPage;
