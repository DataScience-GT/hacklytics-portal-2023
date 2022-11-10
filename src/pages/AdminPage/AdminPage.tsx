import React, { FC, useEffect } from "react";
import styles from "./AdminPage.module.scss";
import Modal from "react-modal";

import { AmplifyUser, AuthEventData } from "@aws-amplify/ui";
import {
  Heading,
  View,
  SwitchField,
  Button,
  Alert,
} from "@aws-amplify/ui-react";
import modalStyle from "../../Scripts/ModalStyle";
import Status from "../../Types/Status";
import StatusAlert from "../../components/StatusAlert/StatusAlert";

interface AdminPageProps {
  user?: AmplifyUser;
  signOut?: (data?: AuthEventData | undefined) => void;
}

const AdminPage: FC<AdminPageProps> = ({ user, signOut }) => {
  // settings --------------------
  const [settingsModalOpen, setSettingsModalOpen] = React.useState(
    window.location.pathname === "/admin/settings"
  );
  const [status, setStatus] = React.useState<Status>({
    show: false,
    type: "error",
    message: "asd asd asd ",
  });

  const [eventActive, setEventActive] = React.useState(false);

  const saveSettings = (e: React.ChangeEvent): boolean => {
    console.log(e.currentTarget);
    return false;
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
          <Heading level={5}>Admin Settings</Heading>
          <SwitchField
            label="Event Open?"
            isChecked={eventActive}
            onChange={(e) => {
              setEventActive(e.currentTarget.checked);
              saveSettings(e);
            }}
          />
          <StatusAlert status={status} />
        </Modal>
      </View>
    </div>
  );
};

export default AdminPage;
