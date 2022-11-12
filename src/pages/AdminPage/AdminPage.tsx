import React, { FC } from "react";
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
import { Link } from "react-router-dom";

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

  const [status, setStatus] = React.useState<Status>({
    show: false,
  });

  const [eventActive, setEventActive] = React.useState(false);

  const saveSettings = (e: React.ChangeEvent, checked: boolean) => {
    setStatus({
      show: false,
      message: "",
    });
    console.log(e.currentTarget);
    if (checked) {
      setStatus({
        show: true,
        type: "success",
        message: "Settings saved",
        isDismissible: true,
      });
    }
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
            >
              <TabItem
                title="General"
                onClick={() => {
                  window.history.pushState(
                    {},
                    "Admin Settings",
                    "/admin/settings/general"
                  );
                }}
              >
                <Flex direction={"column"} alignItems="center">
                  <SwitchField
                    label="Event Open?"
                    isChecked={eventActive}
                    onChange={(e) => {
                      setEventActive(e.currentTarget.checked);
                      saveSettings(e, e.currentTarget.checked);
                    }}
                  />
                  <StatusAlert status={status} />
                </Flex>
              </TabItem>
              <TabItem
                title="Event"
                onClick={() => {
                  window.history.pushState(
                    {},
                    "Event Settings",
                    "/admin/settings/event"
                  );
                }}
              >
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
