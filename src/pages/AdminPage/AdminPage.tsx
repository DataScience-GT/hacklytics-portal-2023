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
  listEvents,
} from "../../graphql/queries";
import { updateAdminSettings, deleteEvent } from "../../graphql/mutations";
import { AdminSettings, Checkin, EagerEvent, Event } from "../../models/index";
import { CreateEvent, UpdateEvent, DeleteEvent, DeleteAllEmails, DeleteAllEvents } from "../../ui-components";
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
  // settings --------------------
  const [settingsModalOpen, setSettingsModalOpen] = React.useState(
    window.location.pathname.includes("/admin/settings")
  );
  const [settingStatus, setSettingStatus] = React.useState<Status>({
    show: false,
  });
  const [adminSettings, setAdminSettings] = useState<AdminSettings>({
    id: "0",
  });
  const [settingsLoading, setSettingsLoading] = useState(true);

  //events --------------------
  const [events, setEvents] = useState<Event[]>([]);
  const [eventCheckins, setEventCheckins] = useState<Map<String, number>>(
    new Map()
  );
  const [loadingEventCheckins, setLoadingEventCheckins] =
    useState<boolean>(true);
  const [filteredEvents, setFilteredEvents] = useState<Event[]>([]);
  const [eventsLoading, setEventsLoading] = useState(true);

  const [eventSearch, setEventSearch] = useState<string>("");

  const [eventPage, setEventPage] = useState<number>(1);
  const [eventPageSize, setEventPageSize] = useState<number>(
    localStorage.getItem("eventPageSize")
      ? parseInt(localStorage.getItem("eventPageSize") as string)
      : 10
  );

  const [createEventModalOpen, setCreateEventModalOpen] = useState(false);
  const [createEventStatus, setCreateEventStatus] = useState<Status>({
    show: false,
  });
  const [deleteEventModalOpen, setDeleteEventModalOpen] = useState(false);
  const [deleteEventStatus, setDeleteEventStatus] = useState<Status>({
    show: false,
  });
  const [showDeleteAllEventsModal, setShowDeleteAllEventsModal] = useState(false);

  const [eventAction, setEventAction] = useState<"delete" | "edit" | "">("");

  const [editEventModalOpen, setEditEventModalOpen] = useState(false);
  const [eventEditing, setEventEditing] = useState<EagerEvent>(
    {} as EagerEvent
  );
  const [editEventStatus, setEditEventStatus] = useState<Status>({
    show: false,
  });

  // participants
  const [participantPage, setParticipantPage] = useState<number>(1);
  const [participantPageSize, setParticipantPageSize] = useState<number>(5);
  const [showDeleteAllEmailsModal, setShowDeleteAllEmailsModal] = useState(false);

  const [participantEmailsField, setParticipantEmailsField] =
    useState<string>("");

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
        setSettingStatus({
          show: true,
          type: "error",
          message: "Could not update settings",
        });
        return;
      } else {
        setAdminSettings(res.data.updateAdminSettings);
        setSettingStatus({
          show: true,
          type: "success",
          message: "Settings saved",
        });
      }
    } catch (err) {
      console.error(err);
      setSettingStatus({
        show: true,
        type: "error",
        message: "Could not update settings",
      });
    }
  };

  // events --------------------
  const deleteMyEvent = async (callback?: () => void) => {
    const res: any = await API.graphql({
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
    const res: any = await API.graphql({
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

  const deleteAllEvents = async (callback?: () => void) => {
    try {
      for (const event of events) {
        deleteSpecificEvent(event.id, (event as any)._version);
      }
      window.location.reload();
    } catch (error) {
      console.log(error);
    }
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
    const query = `query ListCheckins {
      listCheckins {
        items {

          event {
            id
          }
        }
      }
    }
    `;
    const res: any = await API.graphql({
      query: query,
      variables: {
        id: process.env.REACT_APP_HACKLYTICS_ADMIN_SETTINGS_ID,
        limit: 10000,
      },
      authMode: "AMAZON_COGNITO_USER_POOLS",
    });
    let checkins1 = res.data.listCheckins.items;
    for (var c in checkins1) {
      // get the current value of c.eventID in the map

      let checkin: Checkin = checkins1[c];
      let count = eventCheckins.get(checkin.event.id) ?? 0;
      setEventCheckins(new Map(eventCheckins.set(checkin.event.id, count + 1)));
    }
    // subscribe to new checkins
    const sub_query = `
    subscription OnCreateCheckin {
      onCreateCheckin {
        event {
          id
        }
      }
    }
    `;
    const subscription: any = API.graphql({
      query: sub_query,
      authMode: "AMAZON_COGNITO_USER_POOLS",
    });
    subscription.subscribe({
      next: (eventData: any) => {
        let checkin: Checkin = eventData.value.data.onCreateCheckin;
        let count = eventCheckins.get(checkin.event.id) ?? 0;
        setEventCheckins(
          new Map(eventCheckins.set(checkin.event.id, count + 1))
        );
      },
    });
    if (callback) callback();
  };

  return (
    <div className={styles.AdminPage}>
      <View padding="medium">
        <Button
          onClick={(e) => {
            window.history.pushState({}, "Admin Settings", "/admin/settings");
            setSettingsModalOpen(true);
          }}
        >
          Open Settings
        </Button>
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
              let maxPages = Math.ceil(filteredEvents.length / eventPageSize);
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
            onClick={(e) => {
              // window.history.pushState({}, "Admin Settings", "/admin/settings");
              setCreateEventModalOpen(true);
            }}
            isDisabled={eventsLoading}
          >
            Create
          </Button>
          <ToggleButton
            isDisabled={eventsLoading || events.length === 0}
            onClick={(e) => {
              // window.history.pushState({}, "Admin Settings", "/admin/settings");
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
            }}
            isPressed={eventAction === "edit"}
          >
            Edit
          </ToggleButton>
          <ToggleButton
            isDisabled={eventsLoading || events.length === 0}
            onClick={(e) => {
              // window.history.pushState({}, "Admin Settings", "/admin/settings");
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
            }}
            isPressed={eventAction === "delete"}
          >
            Delete
          </ToggleButton>
          <Button 
            isDisabled={eventsLoading || events.length === 0}
            onClick={() => {
            setShowDeleteAllEventsModal(true);
          }}>
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
                    <TableCell as="th">Event Name</TableCell>
                    <TableCell as="th">Description</TableCell>
                    <TableCell as="th">Location</TableCell>
                    <TableCell as="th">Start</TableCell>
                    <TableCell as="th">End</TableCell>
                    <TableCell as="th">Status</TableCell>
                    <TableCell as="th">Points</TableCell>
                    <TableCell as="th">Check-ins</TableCell>
                    <TableCell as="th">Requires RSVP</TableCell>
                  </TableRow>
                </TableHead>
                <TableBody
                  border={eventAction !== "" ? "2px solid gray" : ""}
                  boxShadow={eventAction !== "" ? "5px 5px 5px white" : "none"}
                >
                  {events.length <= 0 ? (
                    <>
                      <TableRow>
                        <TableCell
                          colSpan={7}
                          onClick={() => {
                            setCreateEventModalOpen(true);
                          }}
                        >
                          <Text style={{ textAlign: "center" }}>
                            Create an event to get started
                          </Text>
                        </TableCell>
                      </TableRow>
                    </>
                  ) : (
                    <>
                      {!events.length && (
                        <TableRow>
                          <TableCell
                            colSpan={7}
                            // onClick={() => {
                            //   setCreateEventModalOpen(true);
                            // }}
                          >
                            <Text style={{ textAlign: "center" }}>
                              Create an event to get started
                            </Text>
                          </TableCell>
                        </TableRow>
                      )}
                      {filteredEvents
                        .slice(
                          (eventPage - 1) * eventPageSize,
                          (eventPage - 1) * eventPageSize + eventPageSize
                        )
                        .map((event) => (
                          <TableRow
                            key={event.id}
                            onClick={async () => {
                              if (eventAction === "") {
                                return;
                              }
                              if (eventAction === "edit") {
                                const ev = await DataStore.query(Event, (e) =>
                                  e.id("eq", event.id)
                                );
                                if (!ev) return;

                                setEventEditing(ev[0]);
                                console.log(ev);
                                setEditEventModalOpen(true);
                              } else if (eventAction === "delete") {
                                // show delete modal
                                const ev = await DataStore.query(Event, (e) =>
                                  e.id("eq", event.id)
                                );
                                if (!ev) return;
                                setEventEditing(ev[0]);
                                console.log(ev);
                                setDeleteEventModalOpen(true);
                              }
                              setEventAction("");
                            }}
                          >
                            <TableCell>{event.name}</TableCell>
                            <TableCell>
                              {event.description ?? <Badge>Undefined</Badge>}
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
                                  // year: "numeric",

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
                                  // year: "numeric",

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
                                eventCheckins.get(event.id) ?? 0
                              ) : (
                                <Loader size="small" />
                              )}
                            </TableCell>
                            <TableCell>
                              {event.requireRSVP ? "True" : "False"}
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
                    // update local storage
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

        {/* Applicant table */}

        {/* <Heading level={3} marginBottom={"medium"} marginTop={"medium"}>
          Applicants
        </Heading>
        <Button
          onClick={(e) => {
            window.history.pushState({}, "Admin Settings", "/admin/settings");
          }}
        >
          Add Applicants
        </Button> */}

        {/* SETTINGS MODAL */}

        <Modal
          isOpen={settingsModalOpen}
          onRequestClose={() => {
            // set the window history state to /admin
            window.history.pushState({}, "Admin", "/admin");
            setSettingsModalOpen(false);
          }}
          onAfterClose={() => {
            // get the current settings
            loadSettings();
            // reset status
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
                      onChange={(e) => {
                        saveSettings({
                          ...adminSettings,
                          hacklyticsOpen: e.target.checked,
                        });
                      }}
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
                    <Heading marginTop={"medium"} textAlign={"left"} width={"100%"}>
                      Participant Emails
                    </Heading>
                    <Button width="fit-content" size="small" onClick={(e) => {
                      setShowDeleteAllEmailsModal(true);
                    }}>
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
                                    // variation="warning"
                                    size="small"
                                    onClick={(e) => {
                                      // remove the email from the list
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
                    <Flex dir={"row"} justifyContent={"space-between"}>
                      <Button
                        onClick={(e) => {
                          let field =
                            document.getElementById("participantEmails");
                          if (field) {
                            (field as HTMLTextAreaElement).value = "";
                          }
                        }}
                      >
                        Clear
                      </Button>
                      <Button
                        onClick={(e) => {
                          if (!participantEmailsField) {
                            setSettingStatus({
                              show: true,
                              type: "error",
                              message: "No emails entered",
                            });
                            return;
                          }

                          let newEmails: string[] = [];
                          // check if comma separated
                          if (participantEmailsField.includes(",")) {
                            // split by comma
                            newEmails = participantEmailsField.split(",");
                          } else {
                            // split by new line
                            newEmails = participantEmailsField.split("\n");
                          }
                          // remove empty strings
                          newEmails = newEmails.filter((email) => email !== "");
                          newEmails = newEmails.map((email) =>
                            email.trim().toLowerCase()
                          );

                          // save the settings
                          saveSettings({
                            ...adminSettings,
                            participantEmails: [
                              ...(adminSettings?.participantEmails ?? []),
                              ...newEmails,
                            ],
                          });

                          // clear the field

                          let field =
                            document.getElementById("participantEmails");
                          if (field) {
                            (field as HTMLTextAreaElement).value = "";
                          }
                        }}
                      >
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
                  updatedFields[key] = (
                    fields[key as keyof typeof fields] as string
                  ).trim();
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
              setCreateEventStatus({
                show: true,
                type: "error",
                message: "Error creating event",
              });
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
              // Example function to trim all string inputs
              // console.log(fields);
              // return fields;
              const updatedFields: any = {};
              //foreach field that is a string, trim it
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
            // onCancel={() => {
            //   setEditEventModalOpen(false);
            // }}
            onSuccess={(fields) => {
              // create new event in database
              // console.log(fields);
              let newEvent = { ...eventEditing, ...fields };
              setEditEventModalOpen(false);
              let x = [...events];
              // remove eventEditing from events
              x = x.map((e) => (e.id === eventEditing.id ? newEvent : e));
              setEvents(x);
            }}
            onError={(error) => {
              console.error(error);
              setEditEventStatus({
                show: true,
                type: "error",
                message: "Error updating event",
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
              saveSettings({
                ...adminSettings,
                participantEmails: [],
              });
              setShowDeleteAllEmailsModal(false);
            }}
            onCancel={() => {
              setShowDeleteAllEmailsModal(false);
            }}
          />
        </Modal>
      </View>
    </div>
  );
};

export default AdminPage;
