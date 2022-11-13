import { Alert } from "@aws-amplify/ui-react";
import React, { FC } from "react";
import Status from "../../Types/Status";
import styles from "./StatusAlert.module.scss";

interface StatusAlertProps {
  status?: Status;
}

const StatusAlert: FC<StatusAlertProps> = ({ status }) => (
  <div className={styles.StatusAlert} data-testid="StatusAlert">
    {status && status.show && (
      <Alert
        variation={status.type}
        isDismissible={status.isDismissible}
        hasIcon={status.hasIcon}
      >
        {status.message}
      </Alert>
    )}
  </div>
);

export default StatusAlert;
