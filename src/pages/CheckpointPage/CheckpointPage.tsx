import React, { FC, useEffect } from "react";
import styles from "./CheckpointPage.module.scss";

import { AmplifyUser, AuthEventData } from "@aws-amplify/ui";
import { View, Text } from "@aws-amplify/ui-react";
import { useParams } from "react-router-dom";

interface CheckpointPageProps {
  user?: AmplifyUser;
  signOut?: (data?: AuthEventData | undefined) => void;
}

const CheckpointPage: FC<CheckpointPageProps> = ({ user, signOut }) => {
  // get url params
  let { checkpointId } = useParams();

  useEffect(() => {
    if (!checkpointId) {
      // TODO: redirect to home page
      window.location.href = "/";
    }
  }, [checkpointId]);
  return (
    <div className={styles.CheckpointPage}>
      <View padding="medium">
        <Text>{checkpointId}</Text>
      </View>
    </div>
  );
};

export default CheckpointPage;
