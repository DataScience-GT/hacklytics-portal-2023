import React, { FC } from "react";
import styles from "./AdminPage.module.scss";

import { AmplifyUser, AuthEventData } from "@aws-amplify/ui";
import { View } from "@aws-amplify/ui-react";

interface AdminPageProps {
  user?: AmplifyUser;
  signOut?: (data?: AuthEventData | undefined) => void;
}

const AdminPage: FC<AdminPageProps> = ({ user, signOut }) => (
  <div className={styles.AdminPage}>
    <View padding="medium">hello</View>
  </div>
);

export default AdminPage;
