import React, { FC, useEffect, useState } from "react";
import styles from "./HomePage.module.scss";

import { View, Text, Card } from "@aws-amplify/ui-react";

import { AmplifyUser, AuthEventData } from "@aws-amplify/ui";

import { listTodos } from "../../graphql";
import { API, graphqlOperation } from "aws-amplify";
import { Todo } from "../../models";

interface HomePageProps {
  user?: AmplifyUser;
  signOut?: (data?: AuthEventData | undefined) => void;
}

const HomePage: FC<HomePageProps> = ({ user, signOut }) => {
  const [notes, setNotes] = useState<Todo[]>();
  useEffect(() => {
    fetchNotes();
  }, []);
  const fetchNotes = async () => {
    const notesData: any = await API.graphql(graphqlOperation(listTodos));
    setNotes(notesData.data.listTodos.items);
  };

  return (
    <div className={styles.HomePage}>
      <View width="100%" padding="medium">
        {notes &&
          notes.map((n, i) => (
            <Card key={i} variation="outlined" maxWidth={"20em"}>
              <Text>{n.name}</Text>
              <Text>{n.description}</Text>
            </Card>
          ))}
      </View>
    </div>
  );
};

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
