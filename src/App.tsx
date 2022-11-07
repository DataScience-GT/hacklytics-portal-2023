import React, { useEffect, useState } from "react";
import { Amplify } from "aws-amplify";
import {
  AmplifyProvider,
  Authenticator,
} from "@aws-amplify/ui-react";
import aws_exports from "./aws-exports";

import "@aws-amplify/ui-react/styles.css";
import theme from "./theme";
import logo from "./logo.svg";

// import GraphQLAPI, { GRAPHQL_AUTH_MODE } from '@aws-amplify/api-graphql';
// import { listTodos, ListTodosQuery } from './graphql'

import {BrowserRouter, Routes, Route} from 'react-router-dom';
import HomePage from "./pages/HomePage/HomePage";

Amplify.configure(aws_exports);

const formFields = {
  signUp: {
    email: {
      order:1
    },
    name: {
      order: 2,
    },
    birthdate: {
      order: 3,
    },    
    password: {
      order: 4
    },
    confirm_password: {
      order: 5
    }
  },
}

const App = () => {

  return (
    <AmplifyProvider theme={theme}>
      <Authenticator formFields={formFields}>
        {({ signOut, user }) => (
          <BrowserRouter>
            <Routes>
              <Route path="/" element={<HomePage user={user} signOut={signOut} />} />
            </Routes>
          </BrowserRouter>
        )}
      </Authenticator>
    </AmplifyProvider>
  );
};

export default App;