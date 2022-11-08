import React, { FC } from "react";
import styles from "./HomePage.module.scss";

import { View, Text, Button, Collection, Card } from "@aws-amplify/ui-react";

import { AmplifyUser, AuthEventData } from "@aws-amplify/ui";

interface HomePageProps {
  user?: AmplifyUser;
  signOut?: (data?: AuthEventData | undefined) => void;
}

const HomePage: FC<HomePageProps> = ({ user, signOut }) => (
  <div className={styles.HomePage}>
    <View width="100%" padding="medium">
        <Card variation="outlined" maxWidth={"20em"}>
          <Text>a</Text>
        </Card>
    </View>
  </div>
);

// {user && (
//   <View width="100%" padding="1em">
//     <Text>dev Hello {user.attributes?.name}</Text>
//     {user.attributes &&
//       Object.values(user.attributes).map((attr, i) => (
//         <Text key={i}>{attr}</Text>
//       ))}
//     <Button onClick={signOut}>
//       <Text>Sign Out</Text>
//     </Button>
//   </View>
// )}

export default HomePage;
