import React, { FC, useEffect, useState } from "react";
import styles from "./AdminPage.module.scss";
// import GLOBAL from "../../GLOBAL.module.scss";
import Modal from "react-modal";

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

import { API, DataStore } from "aws-amplify";
import {
  getAdminSettings,
  listEventRSVPS,
  listEvents,
} from "../../graphql/queries";
import { updateAdminSettings, deleteEvent } from "../../graphql/mutations";
import { AdminSettings, Checkin, EagerEvent, Event } from "../../models/index";
import { CreateEvent, UpdateEvent, DeleteEvent, DeleteAllEmails, DeleteAllEvents } from "../../ui-components";
import { toast } from "react-toastify";
import { ListCheckins, sub_query } from "../../graphql/customQueries";

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

  // settings --------------------
  const [settingsModalOpen, setSettingsModalOpen] = React.useState(window.location.pathname.includes("/admin/settings"));
  const [settingStatus, setSettingStatus] = React.useState<Status>({ show: false });
  const [adminSettings, setAdminSettings] = useState<AdminSettings>({ id: "0" });
  const [settingsLoading, setSettingsLoading] = useState<boolean>(true);

  //events --------------------
  const [events, setEvents] = useState<Event[]>([]);
  const [eventCheckins, setEventCheckins] = useState<Map<string, string[]>>(new Map());
  const [loadingEventCheckins, setLoadingEventCheckins] = useState<boolean>(true);
  const [filteredEvents, setFilteredEvents] = useState<Event[]>([]);
  const [eventsLoading, setEventsLoading] = useState<boolean>(true);
  const [eventSearch, setEventSearch] = useState<string>("");
  const [eventPage, setEventPage] = useState<number>(1);
  const [eventPageSize, setEventPageSize] = useState<number>(localStorage.getItem("eventPageSize")
      ? parseInt(localStorage.getItem("eventPageSize") as string) : 10);

  const [createEventModalOpen, setCreateEventModalOpen] = useState<boolean>(false);
  const [createEventStatus, setCreateEventStatus] = useState<Status>({ show: false });
  const [deleteEventModalOpen, setDeleteEventModalOpen] = useState(false);
  const [showDeleteAllEventsModal, setShowDeleteAllEventsModal] = useState(false);
  const [eventAction, setEventAction] = useState<"delete" | "edit" | "">("");

  const [editEventModalOpen, setEditEventModalOpen] = useState<boolean>(false);
  const [eventEditing, setEventEditing] = useState<EagerEvent>({} as EagerEvent);
  const [editEventStatus, setEditEventStatus] = useState<Status>({ show: false });
  const [eventRsvps, setEventRsvps] = useState<Map<string, string[]>>(new Map());
  const [loadingRsvps, setLoadingRsvps] = useState<boolean>(true);
  const [showEventRsvps, setShowEventRsvps] = useState<boolean>(false);
  const [eventChosen, setEventChosen] = useState<Event>({} as Event);
  const [usernameSearch, setUsernameSearch] = useState<string>("");
  const [usernamePage, setUsernamePage] = useState<number>(1);
  const [usernamePageSize, setUsernamePageSize] = useState<number>(localStorage.getItem("usernamePageSize")
      ? parseInt(localStorage.getItem("usernamePageSize") as string) : 10);
  const [filteredUsernames, setFilteredUsernames] = useState<string[]>([]);

  const [checkinSearch, setCheckinSearch] = useState<string>("");
  const [checkinPage, setCheckinPage] = useState<number>(1);
  const [checkinPageSize, setCheckinPageSize] = useState<number>(localStorage.getItem("checkingPageSize")
      ? parseInt(localStorage.getItem("checkinPageSize") as string) : 10);
  const [filteredCheckins, setFilteredCheckins] = useState<string[]>([]);
  const [showCheckins, setShowCheckins] = useState<boolean>(false);

  // participants
  const [participantPage, setParticipantPage] = useState<number>(1);
  const [participantPageSize, setParticipantPageSize] = useState<number>(5);
  const [showDeleteAllEmailsModal, setShowDeleteAllEmailsModal] = useState<boolean>(false);
  const [participantEmailsField, setParticipantEmailsField] = useState<string>("");

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
    })
  }, []);

  useEffect(() => {
    setFilteredEvents(
      events.filter((x) => `${x.name} ${x.description} ${x.location} ${x.status ? "open" : "closed"} ${x.points}`
          .toLowerCase()
          .includes(eventSearch)
      )
    );
    setFilteredUsernames(
      eventRsvps.get(eventChosen.id)?.filter((x) => 
          x.toLowerCase()
          .includes(usernameSearch)) || []
    );
    setFilteredCheckins(
      eventCheckins.get(eventChosen.id)?.filter((x) => 
          x.toLowerCase()
          .includes(checkinSearch)) || []
    );
  }, [events, eventSearch, eventRsvps, eventChosen, usernameSearch, 
    checkinSearch, eventCheckins]);

  const loadRsvps = async (callback?: () => void) => {
    const res: any = await API.graphql({
      query: listEventRSVPS,
      variables: {
        id: process.env.REACT_APP_HACKLYTICS_ADMIN_SETTINGS_ID,
        limit: 1000,
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
  }

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
            _version: (newSettings as any)._version
          },
        },
        authMode: "AMAZON_COGNITO_USER_POOLS",
      });

      if (res.errors) {
        setSettingStatus({ show: true, type: "error", message: "Could not update settings" });
      } else {
        setAdminSettings(res.data.updateAdminSettings);
        setSettingStatus({ show: true, type: "success", message: "Settings saved" });
      }
    } catch (err) {
      setSettingStatus({ show: true, type: "error", message: "Could not update settings" });
    }
  };

  // events --------------------
  const deleteMyEvent = async () => {
    await API.graphql({
      query: deleteEvent,
      variables: {
        input: {
          id: eventEditing.id,
          _version: (eventEditing as any)._version
        },
      },
      authMode: "AMAZON_COGNITO_USER_POOLS",
    });
    window.location.reload();
  }

  const deleteSpecificEvent = async (eventID: string, eventVersion: number) => {
    await API.graphql({
      query: deleteEvent,
      variables: {
        input: {
          id: eventID,
          _version: eventVersion
        },
      },
      authMode: "AMAZON_COGNITO_USER_POOLS",
    });
  }

  const deleteAllEvents = async () => {
    for (const event of events) {
      deleteSpecificEvent(event.id, (event as any)._version);
    }
    window.location.reload();
  }

  const loadEvents = async (callback?: () => void) => {
    const res: any = await API.graphql({
      query: listEvents,
      variables: {
        id: process.env.REACT_APP_HACKLYTICS_ADMIN_SETTINGS_ID,
        limit: 1000,
      },
      authMode: "AMAZON_COGNITO_USER_POOLS",
    });
    setEvents(res.data.listEvents.items);
    if (callback) callback();
  };

  const loadEventCheckins = async (callback?: () => void) => {
    const res: any = await API.graphql({
      query: ListCheckins,
      variables: {
        id: process.env.REACT_APP_HACKLYTICS_ADMIN_SETTINGS_ID,
        limit: 10000,
      },
      authMode: "AMAZON_COGNITO_USER_POOLS",
    });
    let checkins = res.data.listCheckins.items;
    let map: Map<string, string[]> = new Map();
    for (const checkin of checkins) {
      let eventID: string = checkin.event.id;
      let username: string = checkin.userName;
      let record = map.get(eventID) || [];
      record.push(username);
      map.set(eventID, record);
    }
    setEventCheckins(map);

    // subscribe to new checkins
    const subscription: any = API.graphql({
      query: sub_query,
      authMode: "AMAZON_COGNITO_USER_POOLS",
    });
    subscription.subscribe({
      next: (eventData: any) => {
        let checkin: Checkin = eventData.value.data.onCreateCheckin;
        let arr = eventCheckins.get(checkin.event.id) ?? [];
        let username: string = checkin.userName;
        arr.push(username);
        setEventCheckins(new Map(eventCheckins.set(checkin.event.id, arr)));
      },
    });
    if (callback) callback();
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
  }

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
  }

  const clickEvent = async (event: Event) => {
    if (eventAction === "") return;
    if (eventAction === "edit") {
      const ev = await DataStore.query(Event, (e) =>
        e.id("eq", event.id)
      );
      if (!ev) return;
      setEventEditing(ev[0]);
      setEditEventModalOpen(true);
    } else if (eventAction === "delete") {
      const ev = await DataStore.query(Event, (e) =>
        e.id("eq", event.id)
      );
      if (!ev) return;
      setEventEditing(ev[0]);
      setDeleteEventModalOpen(true);
    }
    setEventAction("");
  }

  const clickSearch = (e: any) => {
    setEventSearch(e.target.value.toLowerCase());
    let maxPages = Math.ceil(filteredEvents.length / eventPageSize);
    if (eventPage > maxPages && maxPages !== 0) {
      setEventPage(maxPages);
    }
    if (eventPage < 1) {
      setEventPage(1);
    }
  }

  const deselectSearch = () => {
    setEventSearch("");
    if (eventPage < 1) {
      setEventPage(1);
    }
  }

  const addParticipants = () => {
    if (!participantEmailsField) {
      setSettingStatus({ show: true, type: "error", message: "No emails entered" });
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
    saveSettings({ ...adminSettings, participantEmails: [
        ...(adminSettings?.participantEmails ?? []),
        ...newEmails,
      ],
    });
    let field = document.getElementById("participantEmails");
    if (field) {
      (field as HTMLTextAreaElement).value = "";
    }
  }

  const removeEmail = (email: string) => {
    let newEmails = adminSettings?.participantEmails?.filter((e) => e !== email);
    saveSettings({ ...adminSettings, participantEmails: newEmails });
  }

  function clickSearchUsername(e: React.ChangeEvent<HTMLInputElement>): void {
    setUsernameSearch(e.target.value.toLowerCase());
    let maxPages = Math.ceil(filteredUsernames.length / usernamePageSize);
    if (usernamePage > maxPages && maxPages !== 0) {
      setUsernamePage(maxPages);
    }
    if (usernamePage < 1) {
      setUsernamePage(1);
    }
  }

  function deselectSearchUsername(): void {
    setUsernameSearch("");
    if (usernamePage < 1) {
      setUsernamePage(1);
    }
  }

  function clickSearchCheckin(e: React.ChangeEvent<HTMLInputElement>): void {
    setCheckinSearch(e.target.value.toLowerCase());
    let maxPages = Math.ceil(filteredCheckins.length / checkinPageSize);
    if (checkinPage > maxPages && maxPages !== 0) {
      setCheckinPage(maxPages);
    }
    if (checkinPage < 1) {
      setCheckinPage(1);
    }
  }

  function deselectSearchCheckin(): void {
    setCheckinSearch("");
    if (checkinPage < 1) {
      setCheckinPage(1);
    }
  }

  return (
    <div className={styles.AdminPage}>
      <View padding="medium">
        <Button onClick={() => {
          window.history.pushState({}, "Admin Settings", "/admin/settings");
          setSettingsModalOpen(true);
        }}>
          Open Settings
        </Button>
        <Heading level={3} marginBottom={"medium"} marginTop={"medium"}>Events</Heading>
        <Flex direction={"row"} gap={"medium"} marginBottom={"medium"} wrap={"wrap"}>
          <SearchField 
            label="" 
            labelHidden={true} 
            placeholder={"Search"} 
            onChange={(e) => clickSearch(e)} 
            onClear={() => deselectSearch()} 
            isDisabled={eventsLoading || events.length === 0}
          />
          <Button onClick={() => setCreateEventModalOpen(true)} isDisabled={eventsLoading}>Create</Button>
          <ToggleButton 
            isDisabled={eventsLoading || events.length === 0} 
            onClick={() => clickEdit()} 
            isPressed={eventAction === "edit"}>
              Edit
          </ToggleButton>
          <ToggleButton 
            isDisabled={eventsLoading || events.length === 0} 
            onClick={() => clickDelete()} 
            isPressed={eventAction === "delete"}>
              Delete
            </ToggleButton>
          <Button isDisabled={eventsLoading || events.length === 0} onClick={() => setShowDeleteAllEventsModal(true)}>Delete All</Button>
        </Flex>
        {eventsLoading ? (
          <Flex direction={"row"} alignItems={"center"} justifyContent={"center"}>
            <Loader size="large" />
          </Flex>
        ) : (
          <Flex direction={"column"}>
            <View maxWidth={"100vw"} overflow={"auto"}>
              <Table highlightOnHover={events.length >= 1 && eventAction !== ""}>
                <TableHead>
                  <TableRow>
                    <TableCell as="th" style={{ width: '150px' }}>Event Name</TableCell>
                    <TableCell as="th" style={{ width: '350px' }}>Description</TableCell>
                    <TableCell as="th">Location</TableCell>
                    <TableCell as="th">Start</TableCell>
                    <TableCell as="th">End</TableCell>
                    <TableCell as="th">Status</TableCell>
                    <TableCell as="th">Points</TableCell>
                    <TableCell as="th">Check-ins</TableCell>
                    <TableCell as="th">RSVPs</TableCell>
                  </TableRow>
                </TableHead>
                <TableBody border={eventAction !== "" ? "2px solid gray" : ""} boxShadow={eventAction !== "" ? "5px 5px 5px white" : "none"}>
                  {events.length <= 0 || !events.length ? (
                    <>
                      <TableRow>
                        <TableCell colSpan={7} onClick={() => setCreateEventModalOpen(true)}>
                          <Text style={{ textAlign: "center" }}>Create an event to get started</Text>
                        </TableCell>
                      </TableRow>
                    </>
                  ) : (
                    <>
                      {filteredEvents.slice((eventPage - 1) * eventPageSize, (eventPage - 1) * eventPageSize + eventPageSize)
                        .map((event) => (
                          <TableRow key={event.id} onClick={() => clickEvent(event)}>
                            <TableCell>{event.name}</TableCell>
                            <TableCell>{event.description ?? <Badge>Undefined</Badge>}</TableCell>
                            <TableCell>{event.location ?? <Badge>Undefined</Badge>}</TableCell>
                            <TableCell>{new Date(event.start ?? "").toLocaleString(undefined, {
                                month: "short",
                                day: "numeric",
                                hour: "numeric",
                                minute: "numeric",
                                hour12: true,
                              }) ?? <Badge>Undefined</Badge>}
                            </TableCell>
                            <TableCell>{new Date(event.end ?? "").toLocaleString(undefined, {
                                month: "short",
                                day: "numeric",
                                hour: "numeric",
                                minute: "numeric",
                                hour12: true,
                              }) ?? <Badge>Undefined</Badge>}
                            </TableCell>
                            <TableCell>
                              {event.status ? (
                                <Badge variation="success">Open</Badge>
                              ) : (
                                <Badge variation="error">Closed</Badge>
                              )}
                            </TableCell>
                            <TableCell>{event.points ?? <Badge>Undefined</Badge>}</TableCell>
                            <TableCell>
                              {!loadingEventCheckins ? (
                                eventCheckins.get(event.id)?.length ?? 0
                              ) : (
                                <Loader size="small" />
                              )}
                              {" "}
                              <a className={styles.link} onClick={() => {
                                setShowCheckins(true);
                                setEventChosen(event);
                              }}>
                                  (See all)
                              </a>
                            </TableCell>
                            <TableCell>
                              {!loadingRsvps ? (
                                eventRsvps.get(event.id)?.length ?? 0
                              ) : (
                                <Loader size="small" />
                              )}
                              {" "}
                              <a className={styles.link} onClick={() => {
                                setShowEventRsvps(true);
                                setEventChosen(event);
                              }}>
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
            <Flex direction={"row"} justifyContent={"center"} alignItems={"center"} gap={"large"}>
              <Pagination
                currentPage={eventPage}
                totalPages={Math.ceil(filteredEvents.length / eventPageSize)}
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
                    <SwitchField label="Hacklytics Open?" isChecked={adminSettings?.hacklyticsOpen ?? false} onChange={(e) => saveSettings({...adminSettings, hacklyticsOpen: e.target.checked })}/>
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
                    <Heading marginTop={"medium"} textAlign={"left"} width={"100%"}>Participant Emails</Heading>
                    <Button width="fit-content" size="small" onClick={() => setShowDeleteAllEmailsModal(true)}>Remove All Emails</Button>
                    <Text fontSize={"0.9em"} textAlign={"left"} width={"100%"}>
                      Number of registered participants: {adminSettings && adminSettings.participantEmails 
                        && adminSettings.participantEmails.length}
                    </Text>
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
                              <Text textAlign={"center"}>No participant emails found</Text>
                            </TableCell>
                          </TableRow>
                        ) : (
                          adminSettings?.participantEmails.slice((participantPage - 1) * participantPageSize,
                              (participantPage - 1) * participantPageSize + participantPageSize).map((email) => (
                            <TableRow key={email}>
                              <TableCell>{email}</TableCell>
                              <TableCell>
                                <Button size="small" onClick={() => removeEmail(email || "")}>Remove</Button>
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
                      <Button onClick={() => (document.getElementById("participantEmails") as HTMLTextAreaElement).value = ""}>Clear/Button</Button>
                      <Button onClick={() => addParticipants()}>Add Participants</Button>
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
        <Modal
          contentLabel="Create Event Modal"
          isOpen={createEventModalOpen}
          onRequestClose={() => {
            setCreateEventModalOpen(false);
          }}
          appElement={document.getElementById("modal-container") as HTMLElement}
          parentSelector={() => document.getElementById("modal-container")!}
          style={modalFormStyle}
        >
          <StatusAlert status={createEventStatus} />
          <CreateEvent
            onCancel={() => {
              setCreateEventModalOpen(false);
            }}
            onSubmit={(fields) => {
              const updatedFields: any = {};
              Object.keys(fields).forEach((key) => {
                if (typeof fields[key as keyof typeof fields] === "string") {
                  updatedFields[key] = (fields[key as keyof typeof fields] as string).trim();
                } else {
                  updatedFields[key] = fields[key as keyof typeof fields];
                }
              });
              return updatedFields;
            }}
            onSuccess={(fields) => {
              setCreateEventModalOpen(false);
              setEvents([...events, fields as Event]);
            }}
            onError={(error) => {
              console.error(error);
              setCreateEventStatus({ show: true, type: "error", message: "Error creating event" });
            }}
          />
        </Modal>

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
                  updatedFields[key] = (fields[key as keyof typeof fields] as string).trim();
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
              setEditEventStatus({ show: true, type: "error", message: "Error editing event" });
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
          <Heading marginBottom={"1em"} level={4}>Showing all RSVPS for {eventChosen.name ?? <Badge>Undefined</Badge>}</Heading>
          <SearchField 
            label="" 
            labelHidden={true} 
            placeholder={"Search username"} 
            onChange={(e) => clickSearchUsername(e)} 
            onClear={() => deselectSearchUsername()} 
            isDisabled={loadingRsvps || eventRsvps.get(eventChosen.id)?.length === 0}
          />
          <Flex marginTop={"medium"} direction={"row"} justifyContent={"flex-start"} gap={"1em"} wrap={"wrap"}>
            {!eventRsvps.get(eventChosen.id) || eventRsvps.get(eventChosen.id)?.length == 0 ? (
              <Text>No RSVPs for this event.</Text>
            ) : (
              <>
              <Table>
                <TableHead>
                  <TableRow>
                    <TableCell as="th" style={{ width: '150px' }}>Username</TableCell>
                  </TableRow>
                </TableHead>
                <TableBody>
                  {filteredUsernames.slice((usernamePage - 1) * usernamePageSize, (usernamePage - 1) * usernamePageSize + usernamePageSize)
                    .map((username) => (
                      <TableRow key={username}>
                          <TableCell>{username}</TableCell>
                        </TableRow>
                    ))
                  }
                </TableBody>
              </Table>
              <Flex direction={"row"} justifyContent={"center"} alignItems={"center"} gap={"large"}>
                  <Pagination
                    currentPage={usernamePage}
                    totalPages={Math.ceil(filteredUsernames.length / usernamePageSize)}
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
                        localStorage.setItem("usernamePageSize", e.target.value);
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
          <Heading marginBottom={"1em"} level={4}>Showing all Checkins for {eventChosen.name ?? <Badge>Undefined</Badge>}</Heading>
          <SearchField 
            label="" 
            labelHidden={true} 
            placeholder={"Search username"} 
            onChange={(e) => clickSearchCheckin(e)} 
            onClear={() => deselectSearchCheckin()} 
            isDisabled={loadingEventCheckins || eventCheckins.get(eventChosen.id)?.length === 0}
          />
          <Flex marginTop={"medium"} direction={"row"} justifyContent={"flex-start"} gap={"1em"} wrap={"wrap"}>
            {!eventCheckins.get(eventChosen.id) || eventCheckins.get(eventChosen.id)?.length == 0 ? (
              <Text>No checkins for this event.</Text>
            ) : (
              <>
              <Table>
                <TableHead>
                  <TableRow>
                    <TableCell as="th" style={{ width: '150px' }}>Username</TableCell>
                  </TableRow>
                </TableHead>
                <TableBody>
                  {filteredCheckins.slice((checkinPage - 1) * checkinPageSize, (checkinPage - 1) * checkinPageSize + checkinPageSize)
                    .map((username) => (
                      <TableRow key={username}>
                          <TableCell>{username}</TableCell>
                        </TableRow>
                    ))
                  }
                </TableBody>
              </Table>
              <Flex direction={"row"} justifyContent={"center"} alignItems={"center"} gap={"large"}>
                  <Pagination
                    currentPage={checkinPage}
                    totalPages={Math.ceil(filteredCheckins.length / checkinPageSize)}
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
