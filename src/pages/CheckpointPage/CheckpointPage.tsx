import React, { FC, useEffect } from "react";
import styles from "./CheckpointPage.module.scss";

import { AmplifyUser, AuthEventData } from "@aws-amplify/ui";
import { View, Text, Flex, Button } from "@aws-amplify/ui-react";
import { useParams } from "react-router-dom";
import {
  getPoints,
  getScavengerHunt,
  listPoints,
  listScavengerHuntCheckins,
} from "../../graphql/queries";
import {
  createPoints,
  createScavengerHuntCheckin,
  updatePoints,
} from "../../graphql/mutations";
import { API } from "aws-amplify";
import { ScavengerHuntCheckin } from "../../models";
import Status from "../../Types/Status";
import StatusAlert from "../../components/StatusAlert/StatusAlert";

interface CheckpointPageProps {
  user?: AmplifyUser;
  signOut?: (data?: AuthEventData | undefined) => void;
}

const CheckpointPage: FC<CheckpointPageProps> = ({ user, signOut }) => {
  // get url params
  let { checkpointId } = useParams();

  const [status, setStatus] = React.useState<Status>({
    show: false,
  });

  const [loading, setLoading] = React.useState<boolean>(false);

  const validateCheckpoint = async () => {
    if (!checkpointId) {
      // redirect to home page
      window.location.href = "/";
      return;
    }
    // get checkpoint from db
    var checkpoint: any = await API.graphql({
      query: listScavengerHuntCheckins,
       variables: {
        filter: {userID: {eq: user?.username}},
        limit: 1000
      },
    });
    console.log(checkpoint)
    var oldCheckpoints = checkpoint.data.listScavengerHuntCheckins.items;
    var currentCheckpoints = oldCheckpoints.filter(
      (c: ScavengerHuntCheckin) =>
        c.checkpointID === checkpointId && c.userID === user?.username
    );

    if (currentCheckpoints.length > 0) {
      // redirect to home page
      setStatus({
        show: true,
        message: `You have already claimed points for this checkpoint!`,
        type: "error",
      });
      setLoading(false);
      return;
    }

    // create new checkpoint
    var huntResult: any = await API.graphql({
      query: getScavengerHunt,
      variables: { id: checkpointId },
    });

    var hunt = huntResult.data.getScavengerHunt;

    console.log(hunt);

    if (!hunt) {
      // hunt does not exist
      setStatus({
        show: true,
        message: `Checkpoint does not exist!`,
        type: "error",
      });
      setLoading(false);
      return;
    }

    // check if the hunt is open
    if (!hunt.status) {
      // hunt is not open
      setStatus({
        show: true,
        message: `Checkpoint is not open!`,
        type: "error",
      });
      setLoading(false);
      return;
    }

    // create new checkpoint
    let res: any = await API.graphql({
      query: createScavengerHuntCheckin,
      variables: {
        input: {
          checkpointID: checkpointId,
          userID: user?.username,
        },
      },
    });

    // if success
    if (res.data.createScavengerHuntCheckin) {
      // add points to users
      // create new points
      let points: any = await API.graphql({
        query: createPoints,
        variables: {
          input: {
            userID: user?.username,
            userName: user?.attributes?.name,
            points: hunt.points,
          },
        },
      });
      if (points.errors) {
        setStatus({
          show: true,
          message: `Error claiming points!`,
          type: "error",
        });
        setLoading(false);
        return;
      } else {
        setStatus({
          show: true,
          message: `You have claimed ${hunt.points} points!`,
          type: "success",
        });
        setLoading(false);
        return;
      }
    }
  };

  return (
    <div className={styles.CheckpointPage}>
      <View padding="medium" height={"80vh"}>
        <Flex
          direction="column"
          justifyContent={"center"}
          alignItems={"center"}
          height={"100%"}
        >
          <Button
            onClick={() => {
              setStatus({ show: false });
              setLoading(true);
              validateCheckpoint();
            }}
            isLoading={loading}
            variation="primary"
            loadingText="Claiming Points..."
          >
            Claim Points!
          </Button>
          <StatusAlert status={status} />
        </Flex>
      </View>
    </div>
  );
};

export default CheckpointPage;
