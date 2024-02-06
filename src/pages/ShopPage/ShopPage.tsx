import React, { FC, useEffect } from "react";
import styles from "./ShopPage.module.scss";

import { AmplifyUser, AuthEventData } from "@aws-amplify/ui";
import { ClaimHoodie, ClaimShirt, ClaimSleepingBag, Points } from "../../models";
import { listClaimHoodies, listClaimShirts, listClaimSleepingBags, listPoints, listUsers } from "../../graphql/queries";
import { createClaimHoodie, createClaimShirt, createClaimSleepingBag } from "../../graphql/mutations";
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
import { User, UserData } from "../../misc/Interfaces";

interface ShopPageProps {
  user?: AmplifyUser;
  signOut?: (data?: AuthEventData | undefined) => void;
}

const ShopPage: FC<ShopPageProps> = ({ user, signOut }) => {
  
  const [points, setPoints] = React.useState<Points[]>([]);
  const [loadingPoints, setLoadingPoints] = React.useState<boolean>(true);

  const [shirtsClaimed, setShirtsClaimed] = React.useState<ClaimShirt[]>([]);
  const [loadingShirtsClaimed, setLoadingShirtsClaimed] = React.useState<boolean>(true);
  const [hoodiesClaimed, setHoodiesClaimed] = React.useState<ClaimHoodie[]>([]);
  const [loadingHoodiesClaimed, setLoadingHoodiesClaimed] = React.useState<boolean>(true);
  const [sleepingBagsClaimed, setSleepingBagsClaimed] = React.useState<ClaimSleepingBag[]>([]);
  const [loadingSleepingBagsClaimed, setLoadingSleepingBagsClaimed] = React.useState<boolean>(true);

  const [tryingToClaimShirt, setTryingToClaimShirt] = React.useState<boolean>(false);
  const [tryingToClaimHoodie, setTryingToClaimHoodie] = React.useState<boolean>(false);
  const [tryingToClaimSleepingBag, setTryingToClaimSleepingBag] = React.useState<boolean>(false);

  const [shopSearch, setShopSearch] = React.useState<string>("");
  const [filteredUsers, setFilteredUsers] = React.useState<string[]>([]);

  const [userList, setUserList] = React.useState<string[]>([]);
  const [usersLoading, setUsersLoading] = React.useState<boolean>(true);

  useEffect(() => {
    loadPoints(() => {
      setLoadingPoints(false);
    });
    loadShirtsClaimed(() => {
      setLoadingShirtsClaimed(false);
    });
    loadHoodiesClaimed(() => {
      setLoadingHoodiesClaimed(false);
    })
    loadSleepingBagsClaimed(() => {
      setLoadingSleepingBagsClaimed(false);
    })
    loadUsers(() => {
      setUsersLoading(false);
    })
  }, []);

  useEffect(() => {
    setFilteredUsers(
      userList.filter((x) =>
        (x ?? "").toLowerCase().includes(shopSearch)
      )
    );
  }, [userList, shopSearch]);

  const loadUsers = async (callback?: () => void) => {
    const res: any = await API.graphql({
      query: listUsers,
      authMode: "AMAZON_COGNITO_USER_POOLS",
    });
    let userData: UserData = JSON.parse(res.data.listUsers);
    const usersList: string[] = [];
    userData.body.users.forEach((user: User) => {
      usersList.push(user.Attributes[0].Value);
    });
    setUserList(usersList);
    if (callback) callback();
  }

  const loadPoints = async (callback?: () => void) => {
    const res: any = await API.graphql({
      query: listPoints,
      variables: {
        filter: {_deleted: {ne: true}},
        limit: 10000
      },
      authMode: "AMAZON_COGNITO_USER_POOLS",
    });
    let points: Points[] = res.data.listPoints.items;
    let finalpoints: Map<String, Points> = new Map()
    for (var p in points) {
      let point = points[p];
      let existing = finalpoints.get(point.userID);
      if (existing) {
        finalpoints.set(point.userID, new Points({
            userID: point.userID,
            userName: point.userName,
            points: existing.points + point.points
        }))
      } else {
        finalpoints.set(point.userID, point)
      }
    }
    setPoints(Array.from(finalpoints.values()));

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

  const loadHoodiesClaimed = async (callback?: () => void) => {
    const res: any = await API.graphql({
      query: listClaimHoodies,
      authMode: "AMAZON_COGNITO_USER_POOLS",
    });
    setHoodiesClaimed(res.data.listClaimHoodies.items);
    if (callback) {
      callback();
    }
  };

  const loadSleepingBagsClaimed = async (callback?: () => void) => {
    const res: any = await API.graphql({
      query: listClaimSleepingBags,
      authMode: "AMAZON_COGNITO_USER_POOLS",
    });
    setSleepingBagsClaimed(res.data.listClaimSleepingBags.items);
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
          timestamp: new Date()
        },
      },
      authMode: "AMAZON_COGNITO_USER_POOLS",
    });
    setTryingToClaimShirt(false);
    loadShirtsClaimed();
  };

  const claimHoodie = async (point: Points) => {
    const res: any = await API.graphql({
      query: createClaimHoodie,
      variables: {
        input: {
          userID: point.userID,
          userName: point.userName,
          timestamp: new Date()
        },
      },
      authMode: "AMAZON_COGNITO_USER_POOLS",
    });
    setTryingToClaimHoodie(false);
    loadHoodiesClaimed();
  };

  const claimSleepingBag = async (point: Points) => {
    const res: any = await API.graphql({
      query: createClaimSleepingBag,
      variables: {
        input: {
          userID: point.userID,
          userName: point.userName,
          timestamp: new Date()
        },
      },
      authMode: "AMAZON_COGNITO_USER_POOLS",
    });
    setTryingToClaimSleepingBag(false);
    loadSleepingBagsClaimed();
  };

  return (
    <div className={styles.ShopPage}>
      <Flex direction={"column"} padding={"medium"} alignItems={"center"}>
        <View width={"85%"}>
          <Heading level={3} marginBottom={"medium"} marginTop={"medium"}>
            Points Shop
          </Heading>
          <Flex direction={"row"} gap={"medium"} marginBottom={"medium"} wrap={"wrap"}>
            <SearchField
              label=""
              labelHidden={true}
              placeholder={"Search"}
              onChange={(e) => {
                setShopSearch(e.target.value.toLowerCase());
              }}
              onClear={() => {
                setShopSearch("");
              }}
              isDisabled={loadingPoints || points.length === 0}
            />
          </Flex>
          <Text>Shirts claimed {shirtsClaimed.length}</Text>
          <Text>Hoodies claimed {hoodiesClaimed.length}</Text>
          <Text marginBottom={"medium"}>Sleeping bags claimed {sleepingBagsClaimed.length}</Text>

          {loadingPoints || loadingShirtsClaimed || loadingHoodiesClaimed || loadingSleepingBagsClaimed || usersLoading ? (
            <Text>Loading...</Text>
          ) : userList.length <= 0 ? (
            <Table>
              <TableHead>
                <TableRow>
                  <TableCell as="th">Participant</TableCell>
                  <TableCell as="th">Points</TableCell>
                  <TableCell as="th">Claim Shirt</TableCell>
                  <TableCell as="th">Claim Hoodie</TableCell>
                  <TableCell as="th">Claim Sleeping Bag</TableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                <TableRow>
                  <TableCell colSpan={4}>No points yet.</TableCell>
                </TableRow>
              </TableBody>
            </Table>
          ) : (
            <Table>
              <TableHead>
                <TableRow>
                  <TableCell as="th" width={"20%"}>Participant</TableCell>
                  <TableCell as="th" width={"20%"}>Points</TableCell>
                  <TableCell as="th" width={"20%"}>Claim Shirt</TableCell>
                  <TableCell as="th" width={"20%"}>Claim Hoodie</TableCell>
                  <TableCell as="th" width={"20%"}>Claim Sleeping Bag</TableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                {filteredUsers.map((user) => (
                  <TableRow key={user}>
                    <TableCell>{user}</TableCell>
                    {/* <TableCell>
                      {points.filter((x) => x.userID === point.userID)
                        .length > 0 ? (
                          <>
                            <Button disabled={true}>Claimed</Button>
                          </>
                      ) : (
                        <Button
                          onClick={() => {
                            claimShirt(point);
                            setTryingToClaimShirt(true);
                          }}
                          isLoading={tryingToClaimShirt}
                          loadingText="Claiming"
                          isDisabled={point.points < 5}
                        >
                          Claim
                        </Button>
                      )}
                    </TableCell> */}
                    {/*
                    <TableCell>
                      {shirtsClaimed.filter((x) => x.userID === point.userID)
                        .length > 0 ? (
                          <>
                            <Button disabled={true}>Claimed</Button>
                          </>
                      ) : (
                        <Button
                          onClick={() => {
                            claimShirt(point);
                            setTryingToClaimShirt(true);
                          }}
                          isLoading={tryingToClaimShirt}
                          loadingText="Claiming"
                          isDisabled={point.points < 5}
                        >
                          Claim
                        </Button>
                      )}
                    </TableCell>
                    <TableCell>
                      {hoodiesClaimed.filter((x) => x.userID === point.userID)
                        .length > 0 ? (
                          <>
                            <Button disabled={true}>Claimed</Button>
                          </>
                      ) : (
                        <Button
                          onClick={() => {
                            claimHoodie(point);
                            setTryingToClaimHoodie(true);
                          }}
                          isLoading={tryingToClaimHoodie}
                          loadingText="Claiming"
                          isDisabled={point.points < 20}
                        >
                          Claim
                        </Button>
                      )}
                    </TableCell>
                    <TableCell>
                      {sleepingBagsClaimed.filter((x) => x.userID === point.userID)
                        .length > 0 ? (
                          <>
                            <Button disabled={true}>Claimed</Button>
                          </>
                      ) : (
                        <Button
                          onClick={() => {
                            claimSleepingBag(point);
                            setTryingToClaimHoodie(true);
                          }}
                          isLoading={tryingToClaimHoodie}
                          loadingText="Claiming"
                        >
                          Claim
                        </Button>
                      )}
                    </TableCell> */}
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          )}
        </View>
      </Flex>
    </div>
  );
};

export default ShopPage;
