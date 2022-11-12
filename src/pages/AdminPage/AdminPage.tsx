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
} from "@aws-amplify/ui-react";
import modalStyle from "../../misc/ModalStyle";
import Status from "../../Types/Status";
import StatusAlert from "../../components/StatusAlert/StatusAlert";

import { API, graphqlOperation } from "aws-amplify";
import { getAdminSettings } from "../../graphql/queries";
import { updateAdminSettings } from "../../graphql/mutations";
import { AdminSettings } from "../../models/index";

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

  useEffect(() => {
    loadSettings();
  }, []);

  const loadSettings = async () => {
    const res: any = await API.graphql({
      query: getAdminSettings,
      variables: {
        id: "9996afdb-c7e7-46fc-bfae-b0939b9027d0",
      },
      authMode: "AMAZON_COGNITO_USER_POOLS",
    });
    setAdminSettings(res.data.getAdminSettings);
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
                <Flex direction={"column"} alignItems="center">
                  <SwitchField
                    label="Event Open?"
                    isChecked={adminSettings?.eventStarted ?? false}
                    onChange={(e) => {
                      saveSettings(e, {
                        ...adminSettings,
                        eventStarted: e.target.checked,
                      });
                    }}
                  />
                  {settingStatus.show && <StatusAlert status={settingStatus} />}
                </Flex>
              </TabItem>
              <TabItem title="Event">
                <Flex direction={"column"} alignItems="center">
                  <Text as="p">hello</Text>
                </Flex>
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
      </View>
    </div>
  );
};

export default AdminPage;
