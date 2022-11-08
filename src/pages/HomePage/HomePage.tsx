import React, { FC } from "react";
import styles from "./HomePage.module.scss";

import { View, Text, Button } from "@aws-amplify/ui-react";

import { AmplifyUser, AuthEventData } from "@aws-amplify/ui";
import Navbar from "../../components/Navbar/Navbar";

interface HomePageProps {
  user?: AmplifyUser;
  signOut?: (data?: AuthEventData | undefined) => void;
}

const HomePage: FC<HomePageProps> = ({ user, signOut }) => (
  <div className={styles.HomePage}>
    <Navbar user={user} signOut={signOut}/>
    {user && (
      <View width="100%">
        <Text>Hello {user.attributes?.name}</Text>
        {user.attributes &&
          Object.values(user.attributes).map((attr, i) => (
            <Text key={i}>{attr}</Text>
          ))}
        <Button onClick={signOut}>
          <Text>Sign Out</Text>
        </Button>
      </View>
    )}
  </div>
);

export default HomePage;
