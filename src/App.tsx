import React from "react";
import { Amplify } from "aws-amplify";
import { AmplifyProvider, Authenticator } from "@aws-amplify/ui-react";
import aws_exports from "./aws-exports";

import "@aws-amplify/ui-react/styles.css";
import theme from "./theme";
// import logo from "./logo.svg";

// import GraphQLAPI, { GRAPHQL_AUTH_MODE } from '@aws-amplify/api-graphql';
// import { listTodos, ListTodosQuery } from './graphql'

import { BrowserRouter, Routes, Route } from "react-router-dom";
import HomePage from "./pages/HomePage/HomePage";

Amplify.configure(aws_exports);

const formFields = {
  signUp: {
    email: {
      order: 1,
    },
    gtemail: {
      order: 2,
      placeholder: "GT Email (optional)",
      isRequired: false,
      name: "custom:gtemail",
      type: "email",
      // errorMessage: "",
      // onChange: (e: React.ChangeEvent<HTMLInputElement>) => {console.log(e.currentTarget.value)}
    },
    name: {
      order: 3,
      isRequired: true,
    },
    birthdate: {
      order: 4,
      isRequired: true,
    },
    password: {
      order: 5,
    },
    confirm_password: {
      order: 6,
    },
  },
};

const App = () => {
  return (
    <AmplifyProvider theme={theme}>
      <Authenticator formFields={formFields}>
        {({ signOut, user }) => {
          const groups = user?.getSignInUserSession()?.getAccessToken().payload[
            "cognito:groups"
          ];
          if (groups?.includes("Administrator")) {
            // user is an admin
            console.log("Admin!");
          }
          return (
            <BrowserRouter>
              <Routes>
                <Route
                  path="/"
                  element={<HomePage user={user} signOut={signOut} />}
                />
              </Routes>
            </BrowserRouter>
          );
        }}
      </Authenticator>
    </AmplifyProvider>
  );
};

export default App;
