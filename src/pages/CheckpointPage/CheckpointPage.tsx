import React, { FC, useEffect } from "react";
import styles from "./CheckpointPage.module.scss";

import { AmplifyUser, AuthEventData } from "@aws-amplify/ui";
import { View, Text, Flex, Button } from "@aws-amplify/ui-react";
import { useParams } from "react-router-dom";
import {
  createPoints,
  createScavengerHuntCheckin,
  getPoints,
  getScavengerHunt,
  listPoints,
  listScavengerHuntCheckins,
  updatePoints,
} from "../../graphql";
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
      variables: { userId: user?.username },
    });
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
      // check if user's points already exist
      let pointsResult: any = await API.graphql({
        query: listPoints,
        variables: { userID: user?.username },
      });

      var points = pointsResult.data.listPoints.items;

      if (points.length <= 0) {
        // create points
        let res: any = await API.graphql({
          query: createPoints,
          variables: {
            input: {
              userID: user?.username,
              points: hunt.points,
              userName: user?.attributes?.name ?? "",
            },
          },
        });
        if (res.data.createPoints) {
          setStatus({
            show: true,
            message: `You have claimed ${hunt.points} points!`,
            type: "success",
          });
          setLoading(false);
        }
      } else {
        points[0].points += hunt.points;
        // update points
        let res: any = await API.graphql({
          query: updatePoints,
          variables: {
            input: {
              ...points[0],
              createdAt: undefined,
              updatedAt: undefined,
              _deleted: undefined,
              _lastChangedAt: undefined,
            },
          },
        });
        if (res.data.updatePoints) {
          setStatus({
            show: true,
            message: `You have claimed ${hunt.points} points!`,
            type: "success",
          });
          setLoading(false);
        }
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
