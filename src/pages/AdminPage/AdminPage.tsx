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
} from "@aws-amplify/ui-react";
import modalStyle, { modalFormStyle } from "../../misc/ModalStyle";
import Status from "../../Types/Status";
import StatusAlert from "../../components/StatusAlert/StatusAlert";

import { API } from "aws-amplify";
import { getAdminSettings, listEvents } from "../../graphql/queries";
import { updateAdminSettings } from "../../graphql/mutations";
import { AdminSettings, Event } from "../../models/index";
import { CreateEvent } from "../../ui-components";

interface AdminPageProps {
  user?: AmplifyUser;
  signOut?: (data?: AuthEventData | undefined) => void;
}

const SettingTabMap = new Map<string, number>([
  ["/admin/settings/general", 0],
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
  const [eventsLoading, setEventsLoading] = useState(true);

  const [createEventModalOpen, setCreateEventModalOpen] = useState(false);
  const [createEventStatus, setCreateEventStatus] = useState<Status>({
    show: false,
  });

  useEffect(() => {
    loadSettings(() => {
      setSettingsLoading(false);
    });
    loadEvents(() => {
      setEventsLoading(false);
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
    if (callback) callback();
  };

  const saveSettings = async (
    e: React.ChangeEvent,
    newSettings: AdminSettings
  ) => {
    // hide status alert
    setSettingStatus({ show: false });
    // attempt to update the graphql database
    try {
      const res: any = await API.graphql({
        query: updateAdminSettings,
        variables: {
          input: {
            ...newSettings,
            createdAt: undefined,
            updatedAt: undefined,
            _deleted: undefined,
            _lastChangedAt: undefined,
          },
        },
        authMode: "AMAZON_COGNITO_USER_POOLS",
      });

      //check for errors
      if (res.errors) {
        //errors
        setSettingStatus({
          show: true,
          type: "error",
          message: "Could not update settings",
        });
        return;
      } else {
        //success
        // update the local state
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
  const loadEvents = async (callback?: () => void) => {
    const res: any = await API.graphql({
      query: listEvents,
      variables: {
        id: process.env.REACT_APP_HACKLYTICS_ADMIN_SETTINGS_ID,
      },
      authMode: "AMAZON_COGNITO_USER_POOLS",
    });
    setEvents(res.data.listEvents.items);
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

        {eventsLoading ? (
          <Flex
            direction={"row"}
            alignItems={"center"}
            justifyContent={"center"}
          >
            <Loader size="large" />
          </Flex>
        ) : (
          <Table highlightOnHover={events.length >= 1}>
            <TableHead>
              <TableRow>
                <TableCell as="th">Event Name</TableCell>
                <TableCell as="th">Description</TableCell>
                <TableCell as="th">Location</TableCell>
                <TableCell as="th">Start</TableCell>
                <TableCell as="th">End</TableCell>
                <TableCell as="th">Status</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {events.length <= 0 ? (
                <>
                  <TableRow>
                    <TableCell
                      colSpan={6}
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
                  <TableRow>
                    <TableCell
                      colSpan={6}
                      onClick={() => {
                        setCreateEventModalOpen(true);
                      }}
                    >
                      <Heading level={5} style={{ textAlign: "center" }}>
                        Create a new event
                      </Heading>
                    </TableCell>
                  </TableRow>
                  {events.map((event) => (
                    <TableRow
                      key={event.id}
                      onClick={() => {
                        alert("clicked " + event.id);
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
                        {new Date(event.start ?? "").toLocaleString(undefined, {
                          month: "short",
                          day: "numeric",
                          // year: "numeric",

                          hour: "numeric",
                          minute: "numeric",
                          hour12: true,
                        }) ?? <Badge>Undefined</Badge>}
                      </TableCell>
                      <TableCell>
                        {new Date(event.end ?? "").toLocaleString(undefined, {
                          month: "short",
                          day: "numeric",
                          // year: "numeric",

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
                    </TableRow>
                  ))}
                </>
              )}
            </TableBody>
          </Table>
        )}

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
                        saveSettings(e, {
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
              <TabItem title="Event">
                {settingsLoading ? (
                  <Flex direction={"column"} alignItems="center">
                    <Loader size="large" />
                  </Flex>
                ) : (
                  <Flex direction={"column"} alignItems="center">
                    <Text as="p">hello</Text>
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
            onCancel={() => {
              setCreateEventModalOpen(false);
            }}
            onSuccess={(fields) => {
              // create new event in database
              // console.log(fields);

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
      </View>
    </div>
  );
};

export default AdminPage;
