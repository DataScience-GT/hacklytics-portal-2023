import React, { useState } from "react";
import { Amplify } from "aws-amplify";
import { AmplifyProvider, Authenticator } from "@aws-amplify/ui-react";
import aws_exports from "./aws-exports";

import "@aws-amplify/ui-react/styles.css";

import { Theme, ThemeMap, ThemeContext } from "./context/ThemeContext";
import { Theme as AmpTheme } from "@aws-amplify/ui-react";
import hacklytics from "./theme";

// import logo from "./logo.svg";

// import GraphQLAPI, { GRAPHQL_AUTH_MODE } from '@aws-amplify/api-graphql';
// import { listTodos, ListTodosQuery } from './graphql'

import { BrowserRouter, Routes, Route } from "react-router-dom";
import HomePage from "./pages/HomePage/HomePage";
import SettingsPage from "./pages/SettingsPage/SettingsPage";
import Navbar from "./components/Navbar/Navbar";

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
  const [theme, setTheme] = useState(Theme.Default);
  const [colorMode, setColorMode] = useState<"system" | "light" | "dark">(
    "system"
  );

  const [ampTheme, setAmpTheme] = useState<AmpTheme>(
    ThemeMap.get(theme) ?? hacklytics
  );

  return (
    <AmplifyProvider theme={ampTheme} colorMode={colorMode}>
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
              <Navbar user={user} signOut={signOut} />
              <Routes>
                <Route
                  path="/*"
                  element={<HomePage user={user} signOut={signOut} />}
                />
                <Route path="/settings" element={<SettingsPage />} />
              </Routes>
            </BrowserRouter>
          );
        }}
      </Authenticator>
    </AmplifyProvider>
  );
};

export default App;
