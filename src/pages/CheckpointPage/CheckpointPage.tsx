import React, { FC, useEffect } from "react";
import styles from "./CheckpointPage.module.scss";

import { AmplifyUser, AuthEventData } from "@aws-amplify/ui";
import { View, Text } from "@aws-amplify/ui-react";
import { useParams } from "react-router-dom";
import { getScavengerHunt } from "../../graphql";
import { API } from "aws-amplify";

interface CheckpointPageProps {
  user?: AmplifyUser;
  signOut?: (data?: AuthEventData | undefined) => void;
}

const CheckpointPage: FC<CheckpointPageProps> = ({ user, signOut }) => {
  // get url params
  let { checkpointId } = useParams();

  useEffect(() => {
    validateCheckpoint();
  }, [checkpointId]);

  const validateCheckpoint = async () => {
    if (!checkpointId) {
      // redirect to home page
      window.location.href = "/";
      return;
    }
    // get checkpoint from db
    var checkpoint: any = await API.graphql({
      query: getScavengerHunt,
      variables: { id: checkpointId },
    });

    console.log(checkpoint);
  };

  return (
    <div className={styles.CheckpointPage}>
      <View padding="medium">
        <Text>{checkpointId}</Text>
      </View>
    </div>
  );
};

export default CheckpointPage;
