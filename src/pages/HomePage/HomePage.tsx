import React, { FC, useEffect, useState } from "react";
import styles from "./HomePage.module.scss";

import {
  View,
  Text,
  Loader,
  Flex,
  Card,
  Heading,
  Alert,
} from "@aws-amplify/ui-react";

import { AmplifyUser, AuthEventData } from "@aws-amplify/ui";
import { API, DataStore } from "aws-amplify";
import {
  createEventRSVP,
  deleteEventRSVP,
  getAdminSettings,
  getPoints,
  listEventRSVPS,
  listEvents,
  listPoints,
} from "../../graphql";
import { AdminSettings, Event, EventRSVP, Points } from "../../models/index";
import HacklyticsCard from "../../components/HacklyticsCard/HacklyticsCard";
import EventCard from "../../components/EventCard/EventCard";
import getGroups from "../../misc/Groups";
import StatusAlert from "../../components/StatusAlert/StatusAlert";

// import { listTodos } from "../../graphql";
// import { API, graphqlOperation } from "aws-amplify";

interface HomePageProps {
  user?: AmplifyUser;
  signOut?: (data?: AuthEventData | undefined) => void;
}

const HomePage: FC<HomePageProps> = ({ user, signOut }) => {
  const [adminSettings, setAdminSettings] = useState<AdminSettings>({
    id: "0",
  });
  const [settingsLoading, setSettingsLoading] = useState(true);

  const [points, setPoints] = useState<number>(0);
  const [pointsLoading, setPointsLoading] = useState(true);

  const [events, setEvents] = useState<Event[]>([]);
  const [eventsLoading, setEventsLoading] = useState(true);

  const [eventRSVPs, setEventRSVPs] = useState<EventRSVP[]>([]);
  const [eventRSVPsLoading, setEventRSVPsLoading] = useState(true);
  const [currentlyRSVPing, setCurrentlyRSVPing] = useState(false);

  const [userAccess, setUserAccess] = useState<boolean>(false);

  useEffect(() => {
    loadSettings(() => {
      setSettingsLoading(false);
    });
    loadPoints(() => {
      setPointsLoading(false);
    });
    loadEvents(() => {
      setEventsLoading(false);
    });
    loadEventRSVPs(() => {
      setEventRSVPsLoading(false);
    });
  }, []);

  const loadSettings = async (callback?: () => void) => {
    const res: any = await API.graphql({
      query: getAdminSettings,
      variables: {
        id: process.env.REACT_APP_HACKLYTICS_ADMIN_SETTINGS_ID,
      },
      authMode: "AMAZON_COGNITO_USER_POOLS",
    });
    setAdminSettings(res.data.getAdminSettings);
    let settings = res.data.getAdminSettings;
    if (
      settings &&
      settings.participantEmails &&
      user &&
      user.attributes &&
      user.attributes.email &&
      settings.participantEmails
        .map((x: String) => x.toLowerCase())
        .includes(user.attributes.email.toLowerCase())
    ) {
      setUserAccess(true);
    } else {
      // check if school email is in participant emails
      if (
        user &&
        user.attributes &&
        user.attributes["custom:schoolEmail"] &&
        settings.participantEmails
          .map((x: String) => x.toLowerCase())
          .includes(user.attributes["custom:schoolEmail"].toLowerCase())
      ) {
        setUserAccess(true);
      }
      // check if admin
      else if (
        user &&
        (getGroups(user).includes("Administrator") ||
          getGroups(user).includes("Volunteer"))
      ) {
        setUserAccess(true);
      } else {
        setUserAccess(false);
      }
    }

    if (callback) callback();
  };

  const loadPoints = async (callback?: () => void) => {
    // get points for user
    const res: any = await API.graphql({
      query: listPoints,
      variables: {
        filter: {userID: {eq: user?.username}},
        limit: 1000
      },
      authMode: "AMAZON_COGNITO_USER_POOLS",
    });

    let items = res.data.listPoints.items;

    if (items.length > 0) {
      let points = 0;
      items.forEach((item: Points) => {
        points += item.points;
      });
    } else {
      setPoints(0);
    }

    if (callback) callback();
  };

  const loadEvents = async (callback: () => void) => {
    const res: any = await API.graphql({
      query: listEvents,
      variables: {
        limit: 1000,
      },
      authMode: "AMAZON_COGNITO_USER_POOLS",
    });
    let items = res.data.listEvents.items;

    // sort events by start time
    items.sort((a: Event, b: Event) => {
      // if no start time, set to really far in the past
      let a1 = new Date(a.start ?? "june 2000");
      let b1 = new Date(b.start ?? "june 2000");
      return a1.getTime() - b1.getTime();
    });

    if (items.length > 0) {
      setEvents(items);
    }

    if (callback) callback();
  };

  const loadEventRSVPs = async (callback: () => void) => {
    const res = await DataStore.query(EventRSVP, (e) =>
      e.userID("eq", user?.attributes?.sub ?? "")
    );

    setEventRSVPs(res);
    if (callback) callback();
  };

  return (
    <div className={styles.HomePage}>
      <View width="100%" padding="medium">
        {settingsLoading ||
        pointsLoading ||
        eventsLoading ||
        eventRSVPsLoading ? (
          <Flex
            direction={"column"}
            justifyContent={"center"}
            alignItems={"center"}
          >
            <Loader size={"large"} />
          </Flex>
        ) : adminSettings.hacklyticsOpen && userAccess ? (
          // hacklytics is open :D (started)
          <Flex direction={"column"} gap={"medium"} paddingLeft={"1em"} paddingRight={"1em"}>
            <Card width="20%"variation="outlined" paddingLeft="2em" borderRadius="5em">
              <Flex direction={"row"} justifyContent={"space-between"}>
                <div>
                  <Heading level={4}>Points</Heading>
                  <Text>You have {points} points.</Text>
                </div>
              </Flex>
            </Card>
            <Heading level={3} marginBottom={"medium"} marginTop={"medium"}>Schedule</Heading>
            <Flex direction={"row"} gap={"medium"} wrap={"wrap"} justifyContent={"space-evenly"}>
              {events.map((event, i) => (
                <EventCard
                  event={event}
                  key={i}
                  currentlyRSVPing={currentlyRSVPing}
                  isRSVPed={
                    eventRSVPs.filter((x) => x.eventID === event.id).length >= 1
                  }
                  onRSVP={
                    event.canRSVP
                      ? async () => {
                          setCurrentlyRSVPing(true);
                          if (
                            eventRSVPs.filter((x) => x.eventID === event.id)
                              .length >= 1
                          ) {
                            let rsvp = eventRSVPs.find(
                              (x) => x.eventID === event.id
                            );
                            const toDelete = await DataStore.query(
                              EventRSVP,
                              rsvp?.id ?? ""
                            );
                            if (toDelete) DataStore.delete(toDelete);
                            setEventRSVPs(
                              eventRSVPs.filter((x) => x.eventID !== event.id)
                            );
                            setCurrentlyRSVPing(false);
                          } else {
                            let rsvp: any = await API.graphql({
                              query: createEventRSVP,
                              variables: {
                                input: {
                                  userID: user?.attributes?.sub,
                                  userName: user?.attributes?.name,
                                  eventID: event.id,
                                },
                              },
                              authMode: "AMAZON_COGNITO_USER_POOLS",
                            });
                            setEventRSVPs([
                              ...eventRSVPs,
                              rsvp.data.createEventRSVP,
                            ]);
                            setCurrentlyRSVPing(false);
                          }
                        }
                      : undefined
                  }
                />
              ))}
            </Flex>
          </Flex>
        ) : (
          <>
            <HacklyticsCard loading={settingsLoading} access={userAccess} />
            {!userAccess && (
              <StatusAlert
                status={{
                  show: true,
                  type: "error",
                  message:
                    "You currently have not been confirmed to participate in Hacklytics. " 
                    + "Please contact us at info@hacklytics.io if you believe this is a mistake.",
                }}
              />
            )}
          </>
        )}
      </View>
    </div>
  );
};

// {user && (
//   <View width="100%" padding="1em">
//     <Text>dev Hello {user.attributes?.name}</Text>
//     {user.attributes &&
//       Object.values(user.attributes).map((attr, i) => (
//         <Text key={i}>{attr}</Text>
//       ))}
//     <Button onClick={signOut}>
//       <Text>Sign Out</Text>
//     </Button>
//   </View>
// )}

export default HomePage;
