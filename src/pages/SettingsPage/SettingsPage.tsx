import React, { FC } from 'react';
import styles from './SettingsPage.module.scss';

import { AmplifyUser, AuthEventData } from "@aws-amplify/ui";

interface SettingsPageProps {
  user?: AmplifyUser;
  signOut?: (data?: AuthEventData | undefined) => void;
}

const SettingsPage: FC<SettingsPageProps> = ({user, signOut}) => (
  <div className={styles.SettingsPage}>
    SettingsPage Component
  </div>
);

export default SettingsPage;
