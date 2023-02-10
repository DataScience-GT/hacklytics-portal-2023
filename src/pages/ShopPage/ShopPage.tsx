import React, { FC } from "react";
import styles from "./ShopPage.module.scss";

import { AmplifyUser, AuthEventData } from "@aws-amplify/ui";

interface ShopPageProps {
  user?: AmplifyUser;
  signOut?: (data?: AuthEventData | undefined) => void;
}

const ShopPage: FC<ShopPageProps> = ({ user, signOut }) => (
  <div className={styles.ShopPage}>ShopPage Component</div>
);

export default ShopPage;
