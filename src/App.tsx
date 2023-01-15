import React, { useEffect, useState } from "react";
import styles from "./App.module.scss";
import { Amplify, AuthModeStrategyType } from "aws-amplify";
import { AmplifyProvider, Authenticator, View } from "@aws-amplify/ui-react";
import aws_exports from "./aws-exports";

import "@aws-amplify/ui-react/styles.css";

import { Theme, ThemeMap, ThemeContext } from "./context/ThemeContext";
import hacklytics from "./theme";

// import logo from "./logo.svg";

// import GraphQLAPI, { GRAPHQL_AUTH_MODE } from '@aws-amplify/api-graphql';
// import { listTodos, ListTodosQuery } from './graphql'

import { BrowserRouter, Routes, Route } from "react-router-dom";
import HomePage from "./pages/HomePage/HomePage";
import SettingsPage from "./pages/SettingsPage/SettingsPage";
import Navbar from "./components/Navbar/Navbar";
import AdminPage from "./pages/AdminPage/AdminPage";
import getGroups from "./misc/Groups";

Amplify.configure({
  ...aws_exports,
  DataStore: {
    authModeStrategyType: AuthModeStrategyType.MULTI_AUTH,
  },
});

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

const Services = {
  async validateCustomSignUp(formData: any) {
    if (formData["custom:gtemail"] !== "") {
      if (!formData["custom:gtemail"].endsWith("@gatech.edu")) {
        return {
          "custom:gtemail": "Must be a valid GT email address",
        };
      }
    }
  },
};

const App = () => {
  const [theme, setTheme] = useState<Theme>(
    (localStorage.getItem("hacklytics-theme") as Theme) ?? Theme.Hacklytics
  );
  const [colorMode, setColorMode] = useState<"system" | "light" | "dark">(
    (localStorage.getItem("hacklytics-color-mode") as
      | "system"
      | "light"
      | "dark") ?? "system"
  );

  useEffect(() => {
    let prevTheme = localStorage.getItem("hacklytics-theme") as Theme;
    let prevColorMode = localStorage.getItem("hacklytics-color-mode") as
      | "system"
      | "light"
      | "dark";
    if (prevTheme !== theme) {
      localStorage.setItem("hacklytics-theme", theme);
    }
    if (prevColorMode !== colorMode) {
      localStorage.setItem("hacklytics-color-mode", colorMode);
    }
  }, [colorMode, theme]);

  return (
    <AmplifyProvider
      theme={ThemeMap.get(theme) ?? hacklytics}
      colorMode={colorMode}
    >
      <ThemeContext.Provider
        value={{ theme, setTheme, colorMode, setColorMode }}
      >
        <Authenticator
          formFields={formFields}
          services={Services}
          variation="modal"
        >
          {({ signOut, user }) => {
            return (
              <BrowserRouter>
                <div id="modal-container">
                  <Navbar user={user} signOut={signOut} />
                  <Routes>
                    <Route
                      path="/*"
                      element={<HomePage user={user} signOut={signOut} />}
                    />
                    <Route
                      path="/settings"
                      element={<SettingsPage user={user} signOut={signOut} />}
                    />
                    {user && getGroups(user).includes("Administrator") && (
                      <Route
                        path="/admin/*"
                        element={<AdminPage user={user} signOut={signOut} />}
                      />
                    )}
                  </Routes>
                </div>
              </BrowserRouter>
            );
          }}
        </Authenticator>
        <View className={styles.Background}></View>
      </ThemeContext.Provider>
    </AmplifyProvider>
  );
};

export default App;
