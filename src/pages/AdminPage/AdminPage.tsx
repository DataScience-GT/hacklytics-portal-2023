import React, { FC, useEffect, useState } from "react";
import styles from "./AdminPage.module.scss";
// import GLOBAL from "../../GLOBAL.module.scss";
import Modal from "react-modal";

import { UserData, User } from "../../misc/Interfaces";
import CreateEventModal from "./CreateEventModal";
import { sub_query } from "../../misc/CustomQueries";
import { AmplifyUser, AuthEventData } from "@aws-amplify/ui";
import {
  View,
  SwitchField,
  Button,
  Flex,
  Tabs,
  TabItem,
  Text,
  Loader,
  Table,
  TableHead,
  TableRow,
  TableCell,
  TableBody,
  Badge,
  Heading,
  ToggleButton,
  Pagination,
  SelectField,
  SearchField,
  TextAreaField,
} from "@aws-amplify/ui-react";
import modalStyle, { modalFormStyle } from "../../misc/ModalStyle";
import Status from "../../Types/Status";
import StatusAlert from "../../components/StatusAlert/StatusAlert";
import QRScan from "./QRScan"; // Adjust the path as needed

import { API, DataStore } from "aws-amplify";
import {
  getAdminSettings,
  listEventRSVPS,
  listEvents,
  listCheckins,
  listUsers,
} from "../../graphql/queries";
import { updateAdminSettings, deleteEvent } from "../../graphql/mutations";
import { AdminSettings, Checkin, EagerEvent, Event } from "../../models/index";
import {
  CreateEvent,
  UpdateEvent,
  DeleteEvent,
  DeleteAllEmails,
  DeleteAllEvents,
} from "../../ui-components";
import { toast } from "react-toastify";

interface AdminPageProps {
  user?: AmplifyUser;
  signOut?: (data?: AuthEventData | undefined) => void;
}

const SettingTabMap = new Map<string, number>([
  ["/admin/settings/general", 0],
  ["/admin/settings/participants", 1],
  ["/admin/settings/event", 1],
]);

const AdminPage: FC<AdminPageProps> = ({ user, signOut }) => {
  // settings
  const [settingsModalOpen, setSettingsModalOpen] = React.useState(
    window.location.pathname.includes("/admin/settings")
  );
  const [settingStatus, setSettingStatus] = React.useState<Status>({
    show: false,
  });
  const [adminSettings, setAdminSettings] = useState<AdminSettings>({
    id: "0",
  });
  const [settingsLoading, setSettingsLoading] = useState<boolean>(true);

  // events
  const [events, setEvents] = useState<Event[]>([]);
  const [eventsLoading, setEventsLoading] = useState<boolean>(true);
  const [filteredEvents, setFilteredEvents] = useState<Event[]>([]);
  const [eventSearch, setEventSearch] = useState<string>("");
  const [eventPage, setEventPage] = useState<number>(1);
  const [eventPageSize, setEventPageSize] = useState<number>(
    localStorage.getItem("eventPageSize")
      ? parseInt(localStorage.getItem("eventPageSize") as string)
      : 10
  );

  // checkins
  const [eventChosen, setEventChosen] = useState<Event>({} as Event);
  const [eventCheckins, setEventCheckins] = useState<
    Map<string, { [userid: string]: any }>
  >(new Map());
  const [loadingEventCheckins, setLoadingEventCheckins] =
    useState<boolean>(true);
  const [checkinSearch, setCheckinSearch] = useState<string>("");
  const [checkinPage, setCheckinPage] = useState<number>(1);
  const [checkinPageSize, setCheckinPageSize] = useState<number>(
    localStorage.getItem("checkingPageSize")
      ? parseInt(localStorage.getItem("checkinPageSize") as string)
      : 10
  );
  const [filteredCheckins, setFilteredCheckins] = useState<{
    [userid: string]: any;
  }>({});
  const [showCheckins, setShowCheckins] = useState<boolean>(false);

  // rsvps
  const [eventRsvps, setEventRsvps] = useState<Map<string, string[]>>(
    new Map()
  );
  const [loadingRsvps, setLoadingRsvps] = useState<boolean>(true);
  const [showEventRsvps, setShowEventRsvps] = useState<boolean>(false);
  const [usernameSearch, setUsernameSearch] = useState<string>("");
  const [usernamePage, setUsernamePage] = useState<number>(1);
  const [usernamePageSize, setUsernamePageSize] = useState<number>(
    localStorage.getItem("usernamePageSize")
      ? parseInt(localStorage.getItem("usernamePageSize") as string)
      : 10
  );
  const [filteredUsernames, setFilteredUsernames] = useState<string[]>([]);

  // modals & status
  const [createEventModalOpen, setCreateEventModalOpen] =
    useState<boolean>(false);
  const [createEventStatus, setCreateEventStatus] = useState<Status>({
    show: false,
  });
  const [deleteEventModalOpen, setDeleteEventModalOpen] = useState(false);
  const [showDeleteAllEventsModal, setShowDeleteAllEventsModal] =
    useState(false);
  const [eventAction, setEventAction] = useState<"delete" | "edit" | "">("");
  const [editEventModalOpen, setEditEventModalOpen] = useState<boolean>(false);
  const [eventEditing, setEventEditing] = useState<EagerEvent>(
    {} as EagerEvent
  );
  const [editEventStatus, setEditEventStatus] = useState<Status>({
    show: false,
  });

  // participants
  const [participantPage, setParticipantPage] = useState<number>(1);
  const [participantPageSize, setParticipantPageSize] = useState<number>(5);
  const [showDeleteAllEmailsModal, setShowDeleteAllEmailsModal] =
    useState<boolean>(false);
  const [participantEmailsField, setParticipantEmailsField] =
    useState<string>("");

  // users
  const [users, setUsers] = useState<{ [name: string]: any }>({});
  const [usersLoading, setUsersLoading] = useState<boolean>(true);
  const [userSearch, setUserSearch] = useState<string>("");
  const [userPage, setUserPage] = useState<number>(1);
  const [userPageSize, setUserPageSize] = useState<number>(
    localStorage.getItem("userPageSize")
      ? parseInt(localStorage.getItem("userPageSize") as string)
      : 10
  );
  const [filteredUsers, setFilteredUsers] = useState<{ [name: string]: any }>(
    {}
  );

  useEffect(() => {
    loadSettings(() => {
      setSettingsLoading(false);
    });
    loadEvents(() => {
      setEventsLoading(false);
    });
    loadEventCheckins(() => {
      setLoadingEventCheckins(false);
    });
    loadRsvps(() => {
      setLoadingRsvps(false);
    });
    loadUsers(() => {
      setUsersLoading(false);
    });
  }, []);

  useEffect(() => {
    setFilteredEvents(
      events.filter((x) =>
        `${x.name} ${x.description} ${x.location} ${
          x.status ? "open" : "closed"
        } ${x.points}`
          .toLowerCase()
          .includes(eventSearch)
      )
    );
  }, [events, eventSearch]);

  // LOGGING REMOVE BEFORE DEPLOYMENT
  useEffect(() => {
    console.log("Current events:", events);
  }, [events]);

  useEffect(() => {
    setFilteredUsernames(
      eventRsvps
        .get(eventChosen.id)
        ?.filter((x) => x.toLowerCase().includes(usernameSearch)) || []
    );
  }, [eventRsvps, eventChosen, usernameSearch]);

  useEffect(() => {
    const filteredDict: { [userid: string]: any } = {};
    let usersDict: any = eventCheckins.get(eventChosen.id) ?? {};

    for (const userID in usersDict) {
      if (
        usersDict[userID].toLowerCase().includes(checkinSearch.toLowerCase())
      ) {
        filteredDict[userID] = usersDict[userID];
      }
    }
    setFilteredCheckins(filteredDict);
  }, [eventCheckins, eventChosen, checkinSearch]);

  useEffect(() => {
    const filteredDict: { [key: string]: any } = {};
    for (const key in users) {
      if (key.toLowerCase().includes(userSearch.toLowerCase())) {
        filteredDict[key] = users[key];
      }
    }
    setFilteredUsers(filteredDict);
  }, [users, userSearch]);

  const loadUsers = async (callback?: () => void) => {
    const res: any = await API.graphql({
      query: listUsers,
      authMode: "AMAZON_COGNITO_USER_POOLS",
    });
    let userData: UserData = JSON.parse(res.data.listUsers);

    const usersDict: { [name: string]: any } = {};
    userData.body.users.forEach((user: User) => {
      const userInfo: any = {};
      // Extract relevant information
      user.Attributes.forEach((attribute) => {
        userInfo[attribute.Name] = attribute.Value;
      });
      userInfo["UserCreateDate"] = user.UserCreateDate;
      userInfo["UserLastModifiedDate"] = user.UserLastModifiedDate;
      usersDict[userInfo.name] = userInfo;
    });
    setUsers(usersDict);
    if (callback) callback();
  };

  const loadRsvps = async (callback?: () => void) => {
    const res: any = await API.graphql({
      query: listEventRSVPS,
      variables: {
        filter: { _deleted: { ne: true } },
        id: process.env.REACT_APP_HACKLYTICS_ADMIN_SETTINGS_ID,
        limit: 10000,
      },
      authMode: "AMAZON_COGNITO_USER_POOLS",
    });
    let rsvps = res.data.listEventRSVPS.items;
    let map: Map<string, string[]> = new Map();
    for (const rsvp of rsvps) {
      let eventID: string = rsvp.eventID;
      let username: string = rsvp.userName;
      let record = map.get(eventID) || [];
      record.push(username);
      map.set(eventID, record);
    }
    setEventRsvps(map);
    if (callback) callback();
  };

  // settings --------------------
  const loadSettings = async (callback?: () => void) => {
    const res: any = await API.graphql({
      query: getAdminSettings,
      variables: {
        id: process.env.REACT_APP_HACKLYTICS_ADMIN_SETTINGS_ID,
      },
      authMode: "AMAZON_COGNITO_USER_POOLS",
    });
    setAdminSettings(res.data.getAdminSettings);
    if (callback) callback();
  };

  const saveSettings = async (newSettings: AdminSettings) => {
    setSettingStatus({ show: false });
    try {
      const res: any = await API.graphql({
        query: updateAdminSettings,
        variables: {
          input: {
            id: newSettings.id,
            hacklyticsOpen: newSettings.hacklyticsOpen,
            participantEmails: newSettings.participantEmails,
            _version: (newSettings as any)._version,
          },
        },
        authMode: "AMAZON_COGNITO_USER_POOLS",
      });

      if (res.errors) {
        setSettingStatus({
          show: true,
          type: "error",
          message: "Could not update settings",
        });
      } else {
        setAdminSettings(res.data.updateAdminSettings);
        setSettingStatus({
          show: true,
          type: "success",
          message: "Settings saved",
        });
      }
    } catch (err) {
      setSettingStatus({
        show: true,
        type: "error",
        message: "Could not update settings",
      });
    }
  };

  // events --------------------
  const deleteMyEvent = async () => {
    await API.graphql({
      query: deleteEvent,
      variables: {
        input: {
          id: eventEditing.id,
          _version: (eventEditing as any)._version,
        },
      },
      authMode: "AMAZON_COGNITO_USER_POOLS",
    });
    window.location.reload();
  };

  const deleteSpecificEvent = async (eventID: string, eventVersion: number) => {
    await API.graphql({
      query: deleteEvent,
      variables: {
        input: {
          id: eventID,
          _version: eventVersion,
        },
      },
      authMode: "AMAZON_COGNITO_USER_POOLS",
    });
  };
  const deleteAllEvents = async () => {
    for (const event of events) {
      deleteSpecificEvent(event.id, (event as any)._version);
    }
    window.location.reload();
  };

  const loadEvents = async (callback?: () => void) => {
    const res: any = await API.graphql({
      query: listEvents,
      variables: {
        filter: { _deleted: { ne: true } },
        id: process.env.REACT_APP_HACKLYTICS_ADMIN_SETTINGS_ID,
        limit: 10000,
      },
      authMode: "AMAZON_COGNITO_USER_POOLS",
    });
    setEvents(res.data.listEvents.items);
    if (callback) callback();
  };

  const loadEventCheckins = async (callback?: () => void) => {
    const res: any = await API.graphql({
      query: listCheckins,
      variables: {
        id: process.env.REACT_APP_HACKLYTICS_ADMIN_SETTINGS_ID,
        limit: 10000,
      },
      authMode: "AMAZON_COGNITO_USER_POOLS",
    });
    let checkins = res.data.listCheckins.items;
    let map: Map<string, { [name: string]: any }> = new Map();
    for (const checkin of checkins) {
      if (checkin === null) continue;
      let eventID: string = checkin.eventCheckinsId;
      let username: string = checkin.userName;
      let sub: string = checkin.user;
      let record = map.get(eventID) || {};
      record[sub] = username;
      map.set(eventID, record);
    }
    setEventCheckins(map);
    if (callback) callback();
  };

  const copyAllUserIDs = () => {
    const userIDs = Object.keys(filteredCheckins);
    if (userIDs.length > 0) {
      const userIDsString = userIDs.join(",");
      navigator.clipboard
        .writeText(userIDsString)
        .then(() => {
          alert("User IDs copied to clipboard: " + userIDsString);
        })
        .catch((error) => {
          console.error("Unable to copy text: ", error);
          alert("Failed to copy user IDs to clipboard.");
        });
    } else {
      alert("No user IDs to copy!");
    }
  };

  const copyAllUsernames = () => {
    const userNames = Object.values(filteredCheckins);
    if (userNames.length > 0) {
      const concat = userNames.join(",");
      navigator.clipboard
        .writeText(concat)
        .then(() => {
          alert("User IDs copied to clipboard: " + concat);
        })
        .catch((error) => {
          console.error("Unable to copy text: ", error);
          alert("Failed to copy user IDs to clipboard.");
        });
    } else {
      alert("No user IDs to copy!");
    }
  };

  const clickEdit = () => {
    if (eventAction === "edit") {
      setEventAction("");
      return;
    }
    setEventAction("edit");
    toast.info("Select an event to edit", {
      position: "top-center",
      autoClose: 5000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "light",
    });
  };

  const clickDelete = () => {
    if (eventAction === "delete") {
      setEventAction("");
      return;
    }
    setEventAction("delete");
    toast.info("Select an event to delete", {
      position: "top-center",
      autoClose: 5000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "light",
    });
  };

  const clickEvent = async (event: Event) => {
    if (eventAction === "") return;
    if (eventAction === "edit") {
      const ev = await DataStore.query(Event, (e) => e.id("eq", event.id));
      if (!ev) return;
      setEventEditing(ev[0]);
      setEditEventModalOpen(true);
    } else if (eventAction === "delete") {
      const ev = await DataStore.query(Event, (e) => e.id("eq", event.id));
      if (!ev) return;
      setEventEditing(ev[0]);
      setDeleteEventModalOpen(true);
    }
    setEventAction("");
  };

  const addParticipants = () => {
    if (!participantEmailsField) {
      setSettingStatus({
        show: true,
        type: "error",
        message: "No emails entered",
      });
      return;
    }
    let newEmails: string[] = [];
    if (participantEmailsField.includes(",")) {
      newEmails = participantEmailsField.split(",");
    } else {
      newEmails = participantEmailsField.split("\n");
    }
    newEmails = newEmails.filter((email) => email !== "");
    newEmails = newEmails.map((email) => email.trim().toLowerCase());
    saveSettings({
      ...adminSettings,
      participantEmails: [
        ...(adminSettings?.participantEmails ?? []),
        ...newEmails,
      ],
    });
    let field = document.getElementById("participantEmails");
    if (field) {
      (field as HTMLTextAreaElement).value = "";
    }
  };

  const EventsUsersTabMap = new Map<string, number>([
    ["/view/events", 0],
    ["/view/users", 1],
    ["/view/qr-scan", 2],
  ]);

  return (
    <div className={styles.AdminPage}>
      <View padding="medium" width={"85%"}>
        <Button
          onClick={() => {
            window.history.pushState({}, "Admin Settings", "/admin/settings");
            setSettingsModalOpen(true);
          }}
          marginBottom={"1em"}
        >
          Open Settings
        </Button>
        <Tabs
          spacing="relative"
          defaultIndex={EventsUsersTabMap.get(window.location.pathname) ?? 0}
          grow={1}
          onChange={(index: string | number) => {
            let EventsTabMapRev = Array.from(EventsUsersTabMap.keys());
            let i = parseInt(index as string);
            window.history.pushState({}, "View", EventsTabMapRev[i]);
          }}
          width={"50%"}
        >
          <TabItem title="Events" width="50%">
            <Heading level={3} marginBottom={"medium"} marginTop={"medium"}>
              Events
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
                  setEventSearch(e.target.value.toLowerCase());
                  let maxPages = Math.ceil(
                    filteredEvents.length / eventPageSize
                  );
                  if (eventPage > maxPages && maxPages !== 0) {
                    setEventPage(maxPages);
                  }
                  if (eventPage < 1) {
                    setEventPage(1);
                  }
                }}
                onClear={() => {
                  setEventSearch("");
                  if (eventPage < 1) {
                    setEventPage(1);
                  }
                }}
                isDisabled={eventsLoading || events.length === 0}
              />
              <Button
                onClick={() => setCreateEventModalOpen(true)}
                isDisabled={eventsLoading}
              >
                Create
              </Button>
              <ToggleButton
                isDisabled={eventsLoading || events.length === 0}
                onClick={() => clickEdit()}
                isPressed={eventAction === "edit"}
              >
                Edit
              </ToggleButton>
              <ToggleButton
                isDisabled={eventsLoading || events.length === 0}
                onClick={() => clickDelete()}
                isPressed={eventAction === "delete"}
              >
                Delete
              </ToggleButton>
              <Button
                isDisabled={eventsLoading || events.length === 0}
                onClick={() => setShowDeleteAllEventsModal(true)}
              >
                Delete All
              </Button>
            </Flex>
            {eventsLoading ? (
              <Flex
                direction={"row"}
                alignItems={"center"}
                justifyContent={"center"}
              >
                <Loader size="large" />
              </Flex>
            ) : (
              <Flex direction={"column"}>
                <View maxWidth={"100vw"} overflow={"auto"}>
                  <Table
                    highlightOnHover={events.length >= 1 && eventAction !== ""}
                  >
                    <TableHead>
                      <TableRow>
                        <TableCell as="th" style={{ width: "150px" }}>
                          Event Name
                        </TableCell>
                        <TableCell as="th" style={{ width: "300px" }}>
                          Description
                        </TableCell>
                        <TableCell as="th">Location</TableCell>
                        <TableCell as="th">Start</TableCell>
                        <TableCell as="th">End</TableCell>
                        <TableCell as="th">Status</TableCell>
                        <TableCell as="th">Points</TableCell>
                        <TableCell as="th" style={{ width: "120px" }}>
                          Check-ins
                        </TableCell>
                        <TableCell as="th" style={{ width: "120px" }}>
                          RSVPs
                        </TableCell>
                      </TableRow>
                    </TableHead>
                    <TableBody
                      border={eventAction !== "" ? "2px solid gray" : ""}
                      boxShadow={
                        eventAction !== "" ? "5px 5px 5px white" : "none"
                      }
                    >
                      {events.length <= 0 || !events.length ? (
                        <>
                          <TableRow>
                            <TableCell
                              colSpan={7}
                              onClick={() => setCreateEventModalOpen(true)}
                            >
                              <Text style={{ textAlign: "center" }}>
                                Create an event to get started
                              </Text>
                            </TableCell>
                          </TableRow>
                        </>
                      ) : (
                        <>
                          {filteredEvents
                            .slice(
                              (eventPage - 1) * eventPageSize,
                              (eventPage - 1) * eventPageSize + eventPageSize
                            )
                            .map((event) => (
                              <TableRow
                                key={event.id}
                                onClick={() => clickEvent(event)}
                              >
                                <TableCell>{event.name}</TableCell>
                                <TableCell>
                                  {event.description ?? (
                                    <Badge>Undefined</Badge>
                                  )}
                                </TableCell>
                                <TableCell>
                                  {event.location ?? <Badge>Undefined</Badge>}
                                </TableCell>
                                <TableCell>
                                  {new Date(event.start ?? "").toLocaleString(
                                    undefined,
                                    {
                                      month: "short",
                                      day: "numeric",
                                      hour: "numeric",
                                      minute: "numeric",
                                      hour12: true,
                                    }
                                  ) ?? <Badge>Undefined</Badge>}
                                </TableCell>
                                <TableCell>
                                  {new Date(event.end ?? "").toLocaleString(
                                    undefined,
                                    {
                                      month: "short",
                                      day: "numeric",
                                      hour: "numeric",
                                      minute: "numeric",
                                      hour12: true,
                                    }
                                  ) ?? <Badge>Undefined</Badge>}
                                </TableCell>
                                <TableCell>
                                  {event.status ? (
                                    <Badge variation="success">Open</Badge>
                                  ) : (
                                    <Badge variation="error">Closed</Badge>
                                  )}
                                </TableCell>
                                <TableCell>
                                  {event.points ?? <Badge>Undefined</Badge>}
                                </TableCell>
                                <TableCell>
                                  {!loadingEventCheckins ? (
                                    Object.keys(
                                      eventCheckins.get(event.id) ?? {}
                                    ).length ?? 0
                                  ) : (
                                    <Loader size="small" />
                                  )}{" "}
                                  <a
                                    className={styles.link}
                                    onClick={() => {
                                      setShowCheckins(true);
                                      setEventChosen(event);
                                    }}
                                  >
                                    (See all)
                                  </a>
                                </TableCell>
                                <TableCell>
                                  {!loadingRsvps ? (
                                    eventRsvps.get(event.id)?.length ?? 0
                                  ) : (
                                    <Loader size="small" />
                                  )}{" "}
                                  <a
                                    className={styles.link}
                                    onClick={() => {
                                      setShowEventRsvps(true);
                                      setEventChosen(event);
                                    }}
                                  >
                                    (See all)
                                  </a>
                                </TableCell>
                              </TableRow>
                            ))}
                        </>
                      )}
                    </TableBody>
                  </Table>
                </View>
                <Flex
                  direction={"row"}
                  justifyContent={"center"}
                  alignItems={"center"}
                  gap={"large"}
                >
                  <Pagination
                    currentPage={eventPage}
                    totalPages={Math.ceil(
                      filteredEvents.length / eventPageSize
                    )}
                    siblingCount={1}
                    onChange={(newPageIndex, previousPageIndex) => {
                      setEventPage(newPageIndex);
                    }}
                    onNext={() => {
                      setEventPage(eventPage + 1);
                    }}
                    onPrevious={() => {
                      setEventPage(eventPage - 1);
                    }}
                  />
                  <Flex direction={"row"} alignItems={"center"}>
                    <SelectField
                      label=""
                      labelHidden={true}
                      onChange={(e) => {
                        setEventPageSize(parseInt(e.target.value));
                        localStorage.setItem("eventPageSize", e.target.value);
                      }}
                      defaultValue={eventPageSize.toString()}
                      size={"small"}
                    >
                      <option value={1}>1</option>
                      <option value={5}>5</option>
                      <option value={10}>10</option>
                      <option value={20}>20</option>
                      <option value={30}>30</option>
                    </SelectField>
                    <Text>events per page</Text>
                  </Flex>
                </Flex>
              </Flex>
            )}
          </TabItem>
          <TabItem title="Users" width="50%">
            {usersLoading ? (
              <Flex
                marginTop={"1em"}
                direction={"row"}
                alignItems={"center"}
                justifyContent={"center"}
              >
                <Loader size="large" />
              </Flex>
            ) : (
              <>
                <Heading level={3} marginBottom={"medium"} marginTop={"medium"}>
                  Users
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
                    placeholder={"Search Users"}
                    onChange={(e) => {
                      setUserSearch(e.target.value.toLowerCase());
                      let maxPages = Math.ceil(
                        Object.keys(filteredUsers).length / userPageSize
                      );
                      if (userPage > maxPages && maxPages !== 0) {
                        setUserPage(maxPages);
                      } else if (userPage < 1) {
                        setUserPage(1);
                      }
                    }}
                    onClear={() => {
                      setUserSearch("");
                      if (userPage < 1) {
                        setUserPage(1);
                      }
                    }}
                    width={"30%"}
                    isDisabled={usersLoading}
                  />
                  <Text
                    style={{
                      background: "var(--amplify-colors-background-secondary)",
                      padding: "0.5em",
                      width: "fit-content",
                    }}
                  >
                    Number of users: {Object.keys(filteredUsers).length}
                  </Text>
                  <Table>
                    <TableHead>
                      <TableRow>
                        <TableCell as="th" style={{ width: "20%" }}>
                          Name
                        </TableCell>
                        <TableCell as="th" style={{ width: "20%" }}>
                          Email
                        </TableCell>
                        <TableCell as="th" style={{ width: "20%" }}>
                          School email
                        </TableCell>
                        <TableCell as="th" style={{ width: "20%" }}>
                          Creation Date
                        </TableCell>
                        <TableCell as="th" style={{ width: "20%" }}>
                          Last Modified Date
                        </TableCell>
                      </TableRow>
                    </TableHead>
                    <TableBody>
                      {Object.keys(users).length <= 0 ||
                      !Object.keys(users).length ? (
                        <>
                          <TableRow>
                            <TableCell colSpan={4}>
                              <Text style={{ textAlign: "center" }}>
                                No users were found.
                              </Text>
                            </TableCell>
                          </TableRow>
                        </>
                      ) : (
                        <>
                          {Object.values(filteredUsers)
                            .slice(
                              (userPage - 1) * userPageSize,
                              (userPage - 1) * userPageSize + userPageSize
                            )
                            .map((user) => (
                              <TableRow key={user.sub}>
                                <TableCell>{user.name}</TableCell>
                                <TableCell>{user.email}</TableCell>
                                <TableCell>
                                  {user["custom:gtemail"] ?? (
                                    <Badge>Undefined</Badge>
                                  )}
                                </TableCell>
                                <TableCell>
                                  {new Date(
                                    user.UserCreateDate ?? ""
                                  ).toLocaleString(undefined, {
                                    month: "short",
                                    day: "numeric",
                                    hour: "numeric",
                                    minute: "numeric",
                                    hour12: true,
                                  }) ?? <Badge>Undefined</Badge>}
                                </TableCell>
                                <TableCell>
                                  {new Date(
                                    user.UserLastModifiedDate ?? ""
                                  ).toLocaleString(undefined, {
                                    month: "short",
                                    day: "numeric",
                                    hour: "numeric",
                                    minute: "numeric",
                                    hour12: true,
                                  }) ?? <Badge>Undefined</Badge>}
                                </TableCell>
                              </TableRow>
                            ))}
                        </>
                      )}
                    </TableBody>
                  </Table>
                  <Flex
                    direction={"row"}
                    justifyContent={"center"}
                    alignItems={"center"}
                    gap={"large"}
                  >
                    <Pagination
                      currentPage={userPage}
                      totalPages={Math.ceil(
                        Object.keys(filteredUsers).length / userPageSize
                      )}
                      siblingCount={1}
                      onChange={(newPageIndex, previousPageIndex) => {
                        setUserPage(newPageIndex);
                      }}
                      onNext={() => {
                        setUserPage(userPage + 1);
                      }}
                      onPrevious={() => {
                        setUserPage(userPage - 1);
                      }}
                    />
                    <Flex direction={"row"} alignItems={"center"}>
                      <SelectField
                        label=""
                        labelHidden={true}
                        onChange={(e) => {
                          setUserPageSize(parseInt(e.target.value));
                          localStorage.setItem("userPageSize", e.target.value);
                        }}
                        defaultValue={userPageSize.toString()}
                        size={"small"}
                      >
                        <option value={1}>1</option>
                        <option value={5}>5</option>
                        <option value={10}>10</option>
                        <option value={20}>20</option>
                        <option value={30}>30</option>
                      </SelectField>
                      <Text>users per page</Text>
                    </Flex>
                  </Flex>
                </Flex>
              </>
            )}
          </TabItem>
          <TabItem title="QR Scan" width="50%">
            <QRScan />
          </TabItem>
        </Tabs>
        {/* SETTINGS MODAL */}
        <Modal
          isOpen={settingsModalOpen}
          onRequestClose={() => {
            window.history.pushState({}, "Admin", "/admin");
            setSettingsModalOpen(false);
          }}
          onAfterClose={() => {
            loadSettings();
            setSettingStatus({
              show: false,
            });
          }}
          contentLabel="Admin Settings Modal"
          appElement={document.getElementById("modal-container") as HTMLElement}
          parentSelector={() => document.getElementById("modal-container")!}
          style={modalStyle}
        >
          <Flex direction="column" justifyContent={"space-between"}>
            <Tabs
              spacing="relative"
              defaultIndex={SettingTabMap.get(window.location.pathname) ?? 0}
              grow={1}
              onChange={(index: string | number) => {
                let SettingTabMapRev = Array.from(SettingTabMap.keys());
                let i = parseInt(index as string);
                window.history.pushState({}, "Settings", SettingTabMapRev[i]);
              }}
            >
              <TabItem title="General">
                {settingsLoading ? (
                  <Flex direction={"column"} alignItems="center">
                    <Loader size="large" />
                  </Flex>
                ) : (
                  <Flex direction={"column"} alignItems="center">
                    <SwitchField
                      label="Hacklytics Open?"
                      isChecked={adminSettings?.hacklyticsOpen ?? false}
                      onChange={(e) =>
                        saveSettings({
                          ...adminSettings,
                          hacklyticsOpen: e.target.checked,
                        })
                      }
                    />
                    {settingStatus.show && (
                      <StatusAlert status={settingStatus} />
                    )}
                  </Flex>
                )}
              </TabItem>
              <TabItem title="Participants">
                {settingsLoading ? (
                  <Flex direction={"column"} alignItems="center">
                    <Loader size="large" />
                  </Flex>
                ) : (
                  <Flex direction={"column"}>
                    <Heading
                      marginTop={"medium"}
                      textAlign={"left"}
                      width={"100%"}
                    >
                      Participant Emails
                    </Heading>
                    <Button
                      width="fit-content"
                      size="small"
                      onClick={() => {
                        setShowDeleteAllEmailsModal(true);
                      }}
                    >
                      Remove All Emails
                    </Button>
                    <Table size="small">
                      <TableHead>
                        <TableRow>
                          <TableCell as={"th"}>Email</TableCell>
                          <TableCell as={"th"}>Action</TableCell>
                        </TableRow>
                      </TableHead>
                      <TableBody>
                        {!adminSettings?.participantEmails ||
                        adminSettings?.participantEmails.length <= 0 ? (
                          <TableRow>
                            <TableCell colSpan={2}>
                              <Text textAlign={"center"}>
                                No participant emails found
                              </Text>
                            </TableCell>
                          </TableRow>
                        ) : (
                          adminSettings?.participantEmails
                            .slice(
                              (participantPage - 1) * participantPageSize,
                              (participantPage - 1) * participantPageSize +
                                participantPageSize
                            )
                            .map((email) => (
                              <TableRow key={email}>
                                <TableCell>{email}</TableCell>
                                <TableCell>
                                  <Button
                                    size="small"
                                    onClick={() => {
                                      let newEmails =
                                        adminSettings?.participantEmails?.filter(
                                          (e) => e !== email
                                        );
                                      saveSettings({
                                        ...adminSettings,
                                        participantEmails: newEmails,
                                      });
                                    }}
                                  >
                                    Remove
                                  </Button>
                                </TableCell>
                              </TableRow>
                            ))
                        )}
                      </TableBody>
                    </Table>
                    <Pagination
                      currentPage={participantPage}
                      totalPages={Math.ceil(
                        (adminSettings?.participantEmails?.length ?? 0) /
                          participantPageSize
                      )}
                      siblingCount={1}
                      onChange={(newPageIndex, previousPageIndex) => {
                        setParticipantPage(newPageIndex);
                      }}
                      onNext={() => {
                        setParticipantPage(participantPage + 1);
                      }}
                      onPrevious={() => {
                        setParticipantPage(participantPage - 1);
                      }}
                    />
                    <TextAreaField
                      id="participantEmails"
                      label="Emails"
                      labelHidden={true}
                      width={"100%"}
                      placeholder={"Enter participant emails here"}
                      onChange={(e) => {
                        setParticipantEmailsField(e.currentTarget.value);
                      }}
                    />
                    <Flex direction={"row"} justifyContent={"space-between"}>
                      <Button
                        onClick={() =>
                          ((
                            document.getElementById(
                              "participantEmails"
                            ) as HTMLTextAreaElement
                          ).value = "")
                        }
                      >
                        Clear/Button
                      </Button>
                      <Button onClick={() => addParticipants()}>
                        Add Participants
                      </Button>
                    </Flex>
                    {settingStatus.show && (
                      <StatusAlert status={settingStatus} />
                    )}
                  </Flex>
                )}
              </TabItem>
            </Tabs>
            <Flex direction={"row"} justifyContent="flex-end">
              <Button
                onClick={() => {
                  window.history.pushState({}, "Admin", "/admin");
                  setSettingsModalOpen(false);
                }}
              >
                Close
              </Button>
            </Flex>
          </Flex>
        </Modal>
        {/* CREATE EVENT MODAL */}
        <CreateEventModal
          createEventModalOpen={createEventModalOpen}
          setCreateEventModalOpen={setCreateEventModalOpen}
          events={events}
          setEvents={setEvents}
          setCreateEventStatus={setCreateEventStatus}
        />

        {/* EDIT EVENT MODAL */}
        <Modal
          contentLabel="Edit Event Modal"
          isOpen={editEventModalOpen}
          onRequestClose={() => {
            setEditEventModalOpen(false);
          }}
          appElement={document.getElementById("modal-container") as HTMLElement}
          parentSelector={() => document.getElementById("modal-container")!}
          style={modalFormStyle}
        >
          <StatusAlert status={editEventStatus} />
          <UpdateEvent
            event={eventEditing}
            onSubmit={(fields) => {
              const updatedFields: any = {};
              Object.keys(fields).forEach((key) => {
                if (typeof fields[key as keyof typeof fields] === "string") {
                  updatedFields[key] = (
                    fields[key as keyof typeof fields] as string
                  ).trim();
                } else {
                  updatedFields[key] = fields[key as keyof typeof fields];
                }
              });
              return updatedFields;
            }}
            onCancel={() => {
              setEditEventModalOpen(false);
            }}
            onSuccess={(fields) => {
              let newEvent = { ...eventEditing, ...fields };
              setEditEventModalOpen(false);
              let x = [...events];
              x = x.map((e) => (e.id === eventEditing.id ? newEvent : e));
              setEvents(x);
            }}
            onError={(error) => {
              console.error(error);
              setEditEventStatus({
                show: true,
                type: "error",
                message: "Error editing event",
              });
            }}
          />
        </Modal>
        {/* DELETE EVENT MODAL */}
        <Modal
          contentLabel="Delete Event Modal"
          isOpen={deleteEventModalOpen}
          onRequestClose={() => {
            setDeleteEventModalOpen(false);
          }}
          appElement={document.getElementById("modal-container") as HTMLElement}
          parentSelector={() => document.getElementById("modal-container")!}
          style={modalFormStyle}
        >
          <DeleteEvent
            onSubmit={() => {
              deleteMyEvent();
              setDeleteEventModalOpen(false);
            }}
            onCancel={() => {
              setDeleteEventModalOpen(false);
            }}
          />
        </Modal>
        {/* DELETE ALL EVENTS MODAL */}
        <Modal
          contentLabel="Delete All Events Modal"
          isOpen={showDeleteAllEventsModal}
          onRequestClose={() => {
            setShowDeleteAllEventsModal(false);
          }}
          appElement={document.getElementById("modal-container") as HTMLElement}
          parentSelector={() => document.getElementById("modal-container")!}
          style={modalFormStyle}
        >
          <DeleteAllEvents
            onSubmit={() => {
              deleteAllEvents();
              setShowDeleteAllEventsModal(false);
            }}
            onCancel={() => {
              setShowDeleteAllEventsModal(false);
            }}
          />
        </Modal>
        {/* DELETE ALL EMAILS MODAL */}
        <Modal
          contentLabel="Delete All Emails Modal"
          isOpen={showDeleteAllEmailsModal}
          onRequestClose={() => {
            setShowDeleteAllEmailsModal(false);
          }}
          appElement={document.getElementById("modal-container") as HTMLElement}
          parentSelector={() => document.getElementById("modal-container")!}
          style={modalFormStyle}
        >
          <DeleteAllEmails
            onSubmit={() => {
              saveSettings({ ...adminSettings, participantEmails: [] });
              setShowDeleteAllEmailsModal(false);
            }}
            onCancel={() => {
              setShowDeleteAllEmailsModal(false);
            }}
          />
        </Modal>
        {/* SHOW EVENT RSVPS MODAL */}
        <Modal
          contentLabel="Show Event Rsvps Modal"
          isOpen={showEventRsvps}
          onRequestClose={() => {
            setShowEventRsvps(false);
          }}
          appElement={document.getElementById("modal-container") as HTMLElement}
          parentSelector={() => document.getElementById("modal-container")!}
          style={modalFormStyle}
        >
          <Heading marginBottom={"1em"} level={4}>
            Showing all RSVPS for {eventChosen.name ?? <Badge>Undefined</Badge>}
          </Heading>
          <SearchField
            label=""
            labelHidden={true}
            placeholder={"Search username"}
            onChange={(e) => {
              setUsernameSearch(e.target.value.toLowerCase());
              let maxPages = Math.ceil(
                filteredUsernames.length / usernamePageSize
              );
              if (usernamePage > maxPages && maxPages !== 0) {
                setUsernamePage(maxPages);
              }
              if (usernamePage < 1) {
                setUsernamePage(1);
              }
            }}
            onClear={() => {
              setUsernameSearch("");
              if (usernamePage < 1) {
                setUsernamePage(1);
              }
            }}
            isDisabled={
              loadingRsvps || eventRsvps.get(eventChosen.id)?.length === 0
            }
          />
          <Flex
            marginTop={"medium"}
            direction={"row"}
            justifyContent={"flex-start"}
            gap={"1em"}
            wrap={"wrap"}
          >
            {!eventRsvps.get(eventChosen.id) ||
            eventRsvps.get(eventChosen.id)?.length == 0 ? (
              <Text>No RSVPs for this event.</Text>
            ) : (
              <>
                <Table>
                  <TableHead>
                    <TableRow>
                      <TableCell as="th" style={{ width: "150px" }}>
                        Username
                      </TableCell>
                    </TableRow>
                  </TableHead>
                  <TableBody>
                    {filteredUsernames
                      .slice(
                        (usernamePage - 1) * usernamePageSize,
                        (usernamePage - 1) * usernamePageSize + usernamePageSize
                      )
                      .map((username) => (
                        <TableRow key={username}>
                          <TableCell>{username}</TableCell>
                        </TableRow>
                      ))}
                  </TableBody>
                </Table>
                <Flex
                  direction={"row"}
                  justifyContent={"center"}
                  alignItems={"center"}
                  gap={"large"}
                >
                  <Pagination
                    currentPage={usernamePage}
                    totalPages={Math.ceil(
                      filteredUsernames.length / usernamePageSize
                    )}
                    siblingCount={1}
                    onChange={(newPageIndex, previousPageIndex) => {
                      setUsernamePage(newPageIndex);
                    }}
                    onNext={() => {
                      setUsernamePage(usernamePage + 1);
                    }}
                    onPrevious={() => {
                      setUsernamePage(usernamePage - 1);
                    }}
                  />
                  <Flex direction={"row"} alignItems={"center"}>
                    <SelectField
                      label=""
                      labelHidden={true}
                      onChange={(e) => {
                        setUsernamePageSize(parseInt(e.target.value));
                        localStorage.setItem(
                          "usernamePageSize",
                          e.target.value
                        );
                      }}
                      defaultValue={usernamePageSize.toString()}
                      size={"small"}
                    >
                      <option value={1}>1</option>
                      <option value={5}>5</option>
                      <option value={10}>10</option>
                      <option value={20}>20</option>
                      <option value={30}>30</option>
                    </SelectField>
                    <Text>usernames per page</Text>
                  </Flex>
                </Flex>
              </>
            )}
          </Flex>
        </Modal>
        {/* SHOW EVENT CHECKINS MODAL */}
        <Modal
          contentLabel="Show Event Checkins Modal"
          isOpen={showCheckins}
          onRequestClose={() => {
            setShowCheckins(false);
          }}
          appElement={document.getElementById("modal-container") as HTMLElement}
          parentSelector={() => document.getElementById("modal-container")!}
          style={modalFormStyle}
        >
          <Heading marginBottom={"1em"} level={4}>
            Showing all Checkins for{" "}
            {eventChosen.name ?? <Badge>Undefined</Badge>}
          </Heading>
          <Button
            width="fit-content"
            size="small"
            onClick={() => copyAllUserIDs()}
            marginBottom={"1em"}
          >
            Copy user IDs
          </Button>
          <Button
            width="fit-content"
            size="small"
            onClick={() => copyAllUsernames()}
            marginBottom={"1em"}
          >
            Copy user usernames
          </Button>
          <SearchField
            label=""
            labelHidden={true}
            placeholder={"Search username"}
            onChange={(e) => {
              setCheckinSearch(e.target.value.toLowerCase());
              let maxPages = Math.ceil(
                filteredCheckins.length / checkinPageSize
              );
              if (checkinPage > maxPages && maxPages !== 0) {
                setCheckinPage(maxPages);
              }
              if (checkinPage < 1) {
                setCheckinPage(1);
              }
            }}
            onClear={() => {
              setCheckinSearch("");
              if (checkinPage < 1) {
                setCheckinPage(1);
              }
            }}
            isDisabled={
              loadingEventCheckins ||
              Object.keys(eventCheckins.get(eventChosen.id) ?? {}).length == 0
            }
          />
          <Flex
            marginTop={"medium"}
            direction={"row"}
            justifyContent={"flex-start"}
            gap={"1em"}
            wrap={"wrap"}
          >
            {!eventCheckins.get(eventChosen.id) ||
            Object.keys(eventCheckins.get(eventChosen.id) ?? {}).length == 0 ? (
              <Text>No checkins for this event.</Text>
            ) : (
              <>
                <Table>
                  <TableHead>
                    <TableRow>
                      <TableCell as="th" style={{ width: "150px" }}>
                        User ID
                      </TableCell>
                      <TableCell as="th" style={{ width: "150px" }}>
                        User name
                      </TableCell>
                    </TableRow>
                  </TableHead>
                  <TableBody>
                    {Object.keys(filteredCheckins)
                      .slice(
                        (userPage - 1) * userPageSize,
                        (userPage - 1) * userPageSize + userPageSize
                      )
                      .map((user) => (
                        <TableRow key={user}>
                          <TableCell>{user}</TableCell>
                          <TableCell>{filteredCheckins[user]}</TableCell>
                        </TableRow>
                      ))}
                  </TableBody>
                </Table>
                <Flex
                  direction={"row"}
                  justifyContent={"center"}
                  alignItems={"center"}
                  gap={"large"}
                >
                  <Pagination
                    currentPage={checkinPage}
                    totalPages={Math.ceil(
                      filteredCheckins.length / checkinPageSize
                    )}
                    siblingCount={1}
                    onChange={(newPageIndex, previousPageIndex) => {
                      setCheckinPage(newPageIndex);
                    }}
                    onNext={() => {
                      setCheckinPage(checkinPage + 1);
                    }}
                    onPrevious={() => {
                      setCheckinPage(checkinPage - 1);
                    }}
                  />
                  <Flex direction={"row"} alignItems={"center"}>
                    <SelectField
                      label=""
                      labelHidden={true}
                      onChange={(e) => {
                        setCheckinPageSize(parseInt(e.target.value));
                        localStorage.setItem("checkinPageSize", e.target.value);
                      }}
                      defaultValue={checkinPageSize.toString()}
                      size={"small"}
                    >
                      <option value={1}>1</option>
                      <option value={5}>5</option>
                      <option value={10}>10</option>
                      <option value={20}>20</option>
                      <option value={30}>30</option>
                    </SelectField>
                    <Text>usernames per page</Text>
                  </Flex>
                </Flex>
              </>
            )}
          </Flex>
        </Modal>
      </View>
    </div>
  );
};

export default AdminPage;
