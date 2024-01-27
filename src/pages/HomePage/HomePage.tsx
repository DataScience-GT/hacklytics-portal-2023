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
  Tabs,
  TabItem,
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
  const [pastEvents, setPastEvents] = useState<Event[]>([]);
  const [currentEvents, setCurrentEvents] = useState<Event[]>([]);
  const [futureEvents, setFutureEvents] = useState<Event[]>([]);
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

  const ScheduleTabMap = new Map<string, number>([
    ["/schedule/itemized", 0],
    ["/schedule/full", 1],
  ]);

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
    if (settings && settings.participantEmails && user && user.attributes && user.attributes.email && settings.participantEmails
        .map((x: String) => x.toLowerCase()).includes(user.attributes.email.toLowerCase())) {
      setUserAccess(true);
    } else {
      // check if school email is in participant emails
      if (user && user.attributes && user.attributes["custom:schoolEmail"] && settings.participantEmails
          .map((x: String) => x.toLowerCase()).includes(user.attributes["custom:schoolEmail"].toLowerCase())) {
        setUserAccess(true);
      } else if (user && (getGroups(user).includes("Administrator") || getGroups(user).includes("Volunteer"))) {
        setUserAccess(true);
      } else {
        setUserAccess(false);
      }
    }

    if (callback) callback();
  };

  const loadPoints = async (callback?: () => void) => {
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

    items.sort((a: Event, b: Event) => {
      let a1 = new Date(a.start ?? "june 2000");
      let b1 = new Date(b.start ?? "june 2000");
      return a1.getTime() - b1.getTime();
    });

    let now = new Date();
    let pastEvents: Event[] = [];
    let currentEvents: Event[] = [];
    let futureEvents: Event[] = [];
    // current events are 0-6 hours into the future
    for (const event of items) {
      let time = new Date(event.start) ?? "june 2000";
      if (time.getTime() < now.getTime()) {
        pastEvents.push(event);
      } else if (time.getTime() >= now.getTime() && time.getTime() < now.getTime() + (60 * 60 * 1000 * 6)) {
        currentEvents.push(event);
      } else {
        futureEvents.push(event);
      }
    }
    setPastEvents(pastEvents);
    setCurrentEvents(currentEvents);
    setFutureEvents(futureEvents);
    setEvents(items);

    if (callback) callback();
  };

  const loadEventRSVPs = async (callback: () => void) => {
    const res = await DataStore.query(EventRSVP, (e) =>
      e.userID("eq", user?.attributes?.sub ?? "")
    );
    setEventRSVPs(res);
    if (callback) callback();
  };

  const onRsvp = async (event: Event) => {
    setCurrentlyRSVPing(true);
    if (eventRSVPs.filter((x) => x.eventID === event.id).length >= 1) {
      let rsvp = eventRSVPs.find((x) => x.eventID === event.id);
      const toDelete = await DataStore.query(EventRSVP, rsvp?.id ?? "");
      if (toDelete) DataStore.delete(toDelete);
      setEventRSVPs(eventRSVPs.filter((x) => x.eventID !== event.id));
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

  return (
    <div className={styles.HomePage}>
      <View width="100%" padding="medium">
          {settingsLoading 
          || pointsLoading 
          || eventsLoading 
          || eventRSVPsLoading 
        ? (
          <Flex direction={"column"} justifyContent={"center"} alignItems={"center"}>
            <Loader size={"large"} />
          </Flex>
        ) : (adminSettings.hacklyticsOpen && userAccess) || (user && (getGroups(user).includes("Administrator"))) ? (
          <Flex direction={"column"} gap={"medium"} paddingLeft={"1em"} paddingRight={"1em"}>
            <Flex direction={"column"} alignItems={"center"}>
              <View width={"85%"}>
                <Card variation={"outlined"} borderRadius={"3em"} width={"fit-content"} marginBottom={"1em"}>
                  <Flex direction={"row"} padding={"0 1em"}>
                    <div>
                      <Heading level={4}>Points</Heading>
                      <Text>You have {points} points.</Text>
                    </div>
                  </Flex>
                </Card>
                <Flex justifyContent={"flex-start"} direction={"row"} gap={"0em"} padding={"0.5em"} wrap={"wrap"} marginBottom={"1em"}>
                  <Text marginRight={"1em"} color={"var(--amplify-colors-border-primary)"}>Quick Links</Text>
                  <a className={styles.link} href="https://hacklytics.io/" target="_blank">Hacklytics Website</a>
                  <a className={styles.link} href="https://discord.gg/tTGfeWBf" target="_blank">Hacklytics Discord</a>
                  <a className={styles.link} href="https://docs.google.com/spreadsheets/d/1LiAXDE3JOKj1vxMY7tIkaY_o9urTQGinPkJqb0q4Vm8/edit#gid=0" target="_blank">Hacklytics Prizes</a>
                  <a className={styles.link} href="https://hacklytics-2024.devpost.com/" target="_blank">DevPost</a>
                  <a className={styles.link} href="https://datasciencegt.org/" target="_blank">DSGT Website</a>
                  <a className={styles.link} href="https://join.slack.com/t/datasciencegt/shared_invite/zt-29yzp7it3-kyS4baNNIfu5M2c27ekzhA" target="_blank">DSGT Slack</a>
                </Flex>
                <Tabs spacing="relative" defaultIndex={ScheduleTabMap.get(window.location.pathname) ?? 0} grow={1}
                  onChange={(index: string | number) => {
                    let ScheduleTabMapRev = Array.from(ScheduleTabMap.keys());
                    let i = parseInt(index as string);
                    window.history.pushState({}, "Schedule", ScheduleTabMapRev[i]);
                  }}
                >
                  <TabItem title="Itemized Schedule">
                    <Heading level={3} marginTop={"large"} marginBottom={"medium"}>Current events</Heading>
                    <Flex direction={"row"} gap={"medium"} wrap={"wrap"} justifyContent={"flex-start"} marginBottom={"medium"}>
                      {currentEvents.length == 0 ? (
                        <Text>No events happening now.</Text>
                      ) : (
                        <>
                          {currentEvents.map((event, i) => (
                            <EventCard
                              event={event}
                              key={i}
                              currentlyRSVPing={currentlyRSVPing}
                              isRSVPed={eventRSVPs.filter((x) => x.eventID === event.id).length >= 1}
                              onRSVP={event.canRSVP ? () => onRsvp(event) : undefined} 
                            />
                          ))}
                        </>
                      )}
                    </Flex>
                    <Heading level={3} marginTop={"large"} marginBottom={"medium"}>Future events</Heading>
                    <Flex direction={"row"} gap={"medium"} wrap={"wrap"} justifyContent={"flex-start"} marginBottom={"medium"}>
                      {futureEvents.length == 0 ? (
                        <Text>No events in the future.</Text>
                      ) : (
                        <>
                          {futureEvents.map((event, i) => (
                            <EventCard
                              event={event}
                              key={i}
                              currentlyRSVPing={currentlyRSVPing}
                              isRSVPed={eventRSVPs.filter((x) => x.eventID === event.id).length >= 1}
                              onRSVP={event.canRSVP ? () => onRsvp(event) : undefined} 
                            />
                          ))}
                        </>
                      )}
                    </Flex>
                    <Heading level={3} marginTop={"large"} marginBottom={"medium"}>Previous events</Heading>
                    <Flex direction={"row"} gap={"medium"} wrap={"wrap"} justifyContent={"flex-start"} marginBottom={"medium"}>
                      {pastEvents.length == 0 ? (
                        <Text>No events have ended yet.</Text>
                      ) : (
                        <>
                          {pastEvents.map((event, i) => (
                            <EventCard
                              event={event}
                              key={i}
                              currentlyRSVPing={currentlyRSVPing}
                              isRSVPed={eventRSVPs.filter((x) => x.eventID === event.id).length >= 1}
                              onRSVP={event.canRSVP ? () => onRsvp(event) : undefined} 
                            />
                        ))}
                        </>
                      )}
                    </Flex>
                  </TabItem>
                  <TabItem title="Full Schedule">
                    <Heading level={3} marginTop={"medium"} marginBottom={"medium"}>All events</Heading>
                    <Flex direction={"row"} gap={"medium"} wrap={"wrap"} justifyContent={"flex-start"} marginBottom={"medium"}>
                      {events.length == 0 ? (
                        <Text>No events.</Text>
                      ) : (
                        <>
                          {events.map((event, i) => (
                            <EventCard
                              event={event}
                              key={i}
                              currentlyRSVPing={currentlyRSVPing}
                              isRSVPed={eventRSVPs.filter((x) => x.eventID === event.id).length >= 1}
                              onRSVP={event.canRSVP ? () => onRsvp(event) : undefined} 
                            />
                          ))}
                        </>
                      )}
                    </Flex>
                  </TabItem>
                </Tabs>
              </View>
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

export default HomePage;