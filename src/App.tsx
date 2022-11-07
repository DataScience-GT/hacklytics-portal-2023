import React, { useEffect, useState } from "react";
import { Amplify } from "aws-amplify";
import {
  AmplifyProvider,
  Authenticator,
  Button,
  Flex,
  Image,
  Text,
  View,
} from "@aws-amplify/ui-react";
import aws_exports from "./aws-exports";

import "@aws-amplify/ui-react/styles.css";
import theme from "./theme";
import logo from "./logo.svg";

import GraphQLAPI, { GRAPHQL_AUTH_MODE } from '@aws-amplify/api-graphql';
import { listTodos, ListTodosQuery } from './graphql'

Amplify.configure(aws_exports);


const App = () => {
  const [todos, setTodos] = useState<ListTodosQuery>();

  useEffect(() => {
    fetchTodos();
  }, []);

  const fetchTodos = async () => {
    try {
      const response = (await GraphQLAPI.graphql({
        query: listTodos,
        authMode: GRAPHQL_AUTH_MODE.API_KEY
      })) as { data: ListTodosQuery }
      console.log(response.data.listTodos?.items)
      if (response.data && response.data.listTodos) {
        setTodos(response.data);
      }
    } catch (error) {
      console.log(error);
    }
  };

  // async function fetchNotes() {
  //   const apiData = await API.graphql({ query: listNotes });
  //   const notesFromAPI = apiData.data.listNotes.items;
  //   setNotes(notesFromAPI);
  // }

  // async function createNote(event) {
  //   event.preventDefault();
  //   const form = new FormData(event.target);
  //   const data = {
  //     name: form.get("name"),
  //     description: form.get("description"),
  //   };
  //   await API.graphql({
  //     query: createNoteMutation,
  //     variables: { input: data },
  //   });
  //   fetchNotes();
  //   event.target.reset();
  // }

  // async function deleteNote({ id }) {
  //   const newNotes = notes.filter((note) => note.id !== id);
  //   setNotes(newNotes);
  //   await API.graphql({
  //     query: deleteNoteMutation,
  //     variables: { input: { id } },
  //   });
  // }

  return (
    <AmplifyProvider theme={theme}>
      <Authenticator>
        {({ signOut, user }) => (
          <Flex
            direction="column"
            justifyContent="flex-start"
            alignItems="center"
            alignContent="flex-start"
            wrap="nowrap"
            gap="1rem"
            textAlign="center"
          >
            <View width="100%">
              <Image src={logo} alt="logo" width={240} height={240} />
            </View>

            {user && (
              <View width="100%">
                <Text>Hello {user.username}</Text>
                <Button onClick={signOut}>
                  <Text>Sign Out</Text>
                </Button>
              </View>
            )}

            <View width="100%">
              <Text>
                Edit <code>src/App.tsx</code> and save to reload.
              </Text>
            </View>
          </Flex>
        )}
      </Authenticator>
    </AmplifyProvider>
  );
};

export default App;