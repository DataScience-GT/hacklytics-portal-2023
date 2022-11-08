import React, { FC } from 'react';
import styles from './SettingsPage.module.scss';

interface SettingsPageProps {}

const SettingsPage: FC<SettingsPageProps> = () => (
  <div className={styles.SettingsPage}>
    SettingsPage Component
  </div>
);

export default SettingsPage;
