import React, { FC } from "react";
import styles from "./CheckpointPage.module.scss";

import { AmplifyUser, AuthEventData } from "@aws-amplify/ui";
import { View, Text } from "@aws-amplify/ui-react";

interface CheckpointPageProps {
  user?: AmplifyUser;
  signOut?: (data?: AuthEventData | undefined) => void;
}

const CheckpointPage: FC<CheckpointPageProps> = ({ user, signOut }) => (
  <div className={styles.CheckpointPage}>
    <View padding="medium">
      <Text>checkpoint</Text>
    </View>
  </div>
);

export default CheckpointPage;
