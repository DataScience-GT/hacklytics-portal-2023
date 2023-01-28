import React, { FC, useEffect } from "react";
import styles from "./CheckpointPage.module.scss";

import { AmplifyUser, AuthEventData } from "@aws-amplify/ui";
import { View, Text } from "@aws-amplify/ui-react";
import { useParams } from "react-router-dom";
import { getScavengerHunt, listScavengerHuntCheckins } from "../../graphql";
import { API } from "aws-amplify";
import { ScavengerHuntCheckin } from "../../models";

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
      query: listScavengerHuntCheckins,
      variables: { userId: user?.username },
    });
    var oldCheckpoints = checkpoint.data.listScavengerHuntCheckins.items;
    var currentCheckpoints = oldCheckpoints.filter(
      (c: ScavengerHuntCheckin) =>
        c.checkpointID === checkpointId && c.userID === user?.username
    );

    if (currentCheckpoints.length > 0) {
      // redirect to home page
      window.location.href = "/";
      return;
    }

    // create new checkpoint
    var hunt: any = await API.graphql({
      query: getScavengerHunt,
      variables: { id: checkpointId },
    });
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
