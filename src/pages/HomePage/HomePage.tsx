import React, { FC } from 'react';
import styles from './HomePage.module.scss';

import { Amplify } from "aws-amplify";
import {
  View,
  Text,
  Button

} from "@aws-amplify/ui-react";

import { AmplifyUser, AuthEventData } from '@aws-amplify/ui';

interface HomePageProps {
  user?: AmplifyUser,
  signOut?: (data?: AuthEventData | undefined) => void
}

const HomePage: FC<HomePageProps> = ({user, signOut}) => (
  <div className={styles.HomePage}>
    {user && (
              <View width="100%">
                <Text>Hello {user.attributes?.email}</Text>
                <Button onClick={signOut}>
                  <Text>Sign Out</Text>
                </Button>
              </View>
            )}
  </div>
);

export default HomePage;
