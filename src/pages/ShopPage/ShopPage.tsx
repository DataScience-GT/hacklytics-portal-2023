import React, { FC, useEffect } from "react";
import styles from "./ShopPage.module.scss";

import { AmplifyUser, AuthEventData } from "@aws-amplify/ui";
import { ClaimShirt, Points } from "../../models";
import { createClaimShirt, listClaimShirts, listPoints } from "../../graphql";
import { API } from "aws-amplify";
import {
  Button,
  Heading,
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableRow,
  View,
  Text,
  SearchField,
  Flex,
} from "@aws-amplify/ui-react";

interface ShopPageProps {
  user?: AmplifyUser;
  signOut?: (data?: AuthEventData | undefined) => void;
}

const ShopPage: FC<ShopPageProps> = ({ user, signOut }) => {
  const [points, setPoints] = React.useState<Points[]>([]);
  const [loadingPoints, setLoadingPoints] = React.useState<boolean>(true);

  const [shirtsClaimed, setShirtsClaimed] = React.useState<ClaimShirt[]>([]);
  const [loadingShirtsClaimed, setLoadingShirtsClaimed] =
    React.useState<boolean>(true);

  const [tryingToClaimShirt, setTryingToClaimShirt] =
    React.useState<boolean>(false);

  const [shopSearch, setShopSearch] = React.useState<string>("");
  const [filteredPoints, setFilteredPoints] = React.useState<Points[]>([]);

  useEffect(() => {
    loadPoints(() => {
      setLoadingPoints(false);
    });
    loadShirtsClaimed(() => {
      setLoadingShirtsClaimed(false);
    });
  }, []);

  useEffect(() => {
    setFilteredPoints(
      points.filter((x) =>
        (x.userName ?? "").toLowerCase().includes(shopSearch)
      )
    );
  }, [points, shopSearch]);

  const loadPoints = async (callback?: () => void) => {
    const res: any = await API.graphql({
      query: listPoints,
      authMode: "AMAZON_COGNITO_USER_POOLS",
    });
    let points: Points[] = res.data.listPoints.items;
    // merge the points by user id
    let finalPoints: Points[] = [];
    for (var p in points) {
      let point = points[p];
      let existingPoint = finalPoints.find((p) => p.userID === point.userID);
      if (existingPoint) {
        existingPoint = new Points({
          userID: existingPoint.userID,
          userName: existingPoint.userName,
          points: existingPoint.points + point.points,
        });
      } else {
        finalPoints.push(point);
      }
    }
    setPoints(finalPoints);

    if (callback) {
      callback();
    }
  };

  const loadShirtsClaimed = async (callback?: () => void) => {
    const res: any = await API.graphql({
      query: listClaimShirts,
      authMode: "AMAZON_COGNITO_USER_POOLS",
    });
    setShirtsClaimed(res.data.listClaimShirts.items);
    if (callback) {
      callback();
    }
  };

  const claimShirt = async (point: Points) => {
    const res: any = await API.graphql({
      query: createClaimShirt,
      variables: {
        input: {
          userID: point.userID,
          userName: point.userName,
        },
      },
      authMode: "AMAZON_COGNITO_USER_POOLS",
    });
    console.log(res);
    setTryingToClaimShirt(false);
    loadShirtsClaimed();
  };

  return (
    <div className={styles.ShopPage}>
      <View padding={"medium"}>
        <Heading level={3} marginBottom={"medium"} marginTop={"medium"}>
          Points Shop
        </Heading>
        <Flex
          direction={"row"}
          gap={"medium"}
          marginBottom={"medium"}
          wrap={"wrap"}
        >
          <SearchField
            label=""
            labelHidden={true}
            placeholder={"Search"}
            onChange={(e) => {
              setShopSearch(e.target.value.toLowerCase());
              // let maxPages = Math.ceil(filteredEvents.length / eventPageSize);
              // if (eventPage > maxPages && maxPages !== 0) {
              //   setEventPage(maxPages);
              // }

              // if (eventPage < 1) {
              //   setEventPage(1);
              // }
            }}
            onClear={() => {
              setShopSearch("");
              // if (eventPage < 1) {
              //   setEventPage(1);
              // }
            }}
            isDisabled={loadingPoints || points.length === 0}
          />
        </Flex>
        {loadingPoints || loadingShirtsClaimed ? (
          <Text>Loading...</Text>
        ) : points.length <= 0 ? (
          <Table>
            <TableHead>
              <TableRow>
                <TableCell as="th">Participant</TableCell>
                <TableCell as="th">Points</TableCell>
                <TableCell as="th">Claim Shirt</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              <TableRow>
                <TableCell colSpan={3}>No points yet :(</TableCell>
              </TableRow>
            </TableBody>
          </Table>
        ) : (
          <Table>
            <TableHead>
              <TableRow>
                <TableCell as="th">Participant</TableCell>
                <TableCell as="th">Points</TableCell>
                <TableCell as="th">Claim Shirt</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {filteredPoints.map((point) => (
                <TableRow key={point.id}>
                  <TableCell>{point.userName}</TableCell>
                  <TableCell>{point.points}</TableCell>
                  <TableCell>
                    {shirtsClaimed.filter((x) => x.userID === point.userID)
                      .length > 0 ? (
                      <Button disabled={true}>Claimed</Button>
                    ) : (
                      <Button
                        onClick={() => {
                          claimShirt(point);
                          setTryingToClaimShirt(true);
                        }}
                        isLoading={tryingToClaimShirt}
                        loadingText="Claiming"
                      >
                        Claim
                      </Button>
                    )}
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        )}
      </View>
    </div>
  );
};

export default ShopPage;
