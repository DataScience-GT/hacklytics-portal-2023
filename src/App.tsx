import React, { useEffect, useState } from "react";
import styles from "./App.module.scss";

import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

import { Amplify, Auth, AuthModeStrategyType } from "aws-amplify";
import {
  AmplifyProvider,
  Authenticator,
  CheckboxField,
  SelectField,
  SwitchField,
  useAuthenticator,
  View,
  Image,
  useTheme,
  Text,
  Heading
} from "@aws-amplify/ui-react";
import aws_exports from "./aws-exports";

import "@aws-amplify/ui-react/styles.css";

import { Theme, ThemeMap, ThemeContext } from "./context/ThemeContext";
import hacklytics from "./theme";
import logo from "./assets/images/Hacklytics/hacklytics2024.png";

// import logo from "./logo.svg";

// import GraphQLAPI, { GRAPHQL_AUTH_MODE } from '@aws-amplify/api-graphql';
// import { listTodos, ListTodosQuery } from './graphql'

import { BrowserRouter, Routes, Route } from "react-router-dom";
import HomePage from "./pages/HomePage/HomePage";
import SettingsPage from "./pages/SettingsPage/SettingsPage";
import Navbar from "./components/Navbar/Navbar";
import AdminPage from "./pages/AdminPage/AdminPage";
import getGroups from "./misc/Groups";
import ScavengerHuntPage from "./pages/ScavengerHuntPage/ScavengerHuntPage";
import CheckpointPage from "./pages/CheckpointPage/CheckpointPage";
import AccountPage from "./pages/AccountPage/AccountPage";
import DatasetPage from "./pages/DatasetPage/DatasetPage";
import ShopPage from "./pages/ShopPage/ShopPage";

import { I18n } from 'aws-amplify';
import { translations } from '@aws-amplify/ui-react';
I18n.putVocabularies(translations);
I18n.setLanguage('en');

Amplify.configure({
  ...aws_exports,
  DataStore: {
    authModeStrategyType: AuthModeStrategyType.MULTI_AUTH,
  },
});

I18n.putVocabulariesForLanguage('en', {
  'Sign In': 'Login', // Tab header
  'Sign in': 'Log in', // Button label
  'Sign in to your account': 'Welcome Back!',
  Username: 'Enter your username', // Username label
  Password: 'Enter your password', // Password label
  'Forgot your password?': 'Reset Password',
});

const formFields = {
  signUp: {
    email: {
      order: 1,
      isRequired: true,
    },
    schoolEmail: {
      order: 2,
      placeholder: "School email (optional)",
      isRequired: false,
      name: "custom:schoolEmail",
      type: "email",
    },
    name: {
      order: 3,
      isRequired: true,
      placeholder: "Name",
    },
    password: {
      order: 4,
    },
    confirm_password: {
      order: 5,
    },
    birthdate: {
      order: 6,
      isRequired: true,
      label: "Birthdate",
      labelHidden: false,
    },
  },
};

const components = {
  Header() {
    const { tokens } = useTheme();
    return (
      <View textAlign="center" padding={tokens.space.large}>
        <Image
          alt="hacklytics logo"
          src={logo}
          width={200}
          height={200} 
        />
        <h1>Hacklytics 2024 Portal</h1>
        <Text>View scheduling, RSVP, datasets and more</Text>
      </View>
    );
  },
  Footer() {
    const { tokens } = useTheme();
    return (
      <View textAlign="center" padding={tokens.space.large}>
        <Text color={tokens.colors.neutral[80]}>
          &copy; All Rights Reserved
        </Text>
      </View>
    );
  },
  SignUp: {
    FormFields() {
      const { validationErrors } = useAuthenticator();
      return (
        <>
          <Authenticator.SignUp.FormFields />
          <SelectField
            name="custom:foodPreference"
            label="Dietary Restrictions:"
          >
            <option value="none">None</option>
            <option value="vegetarian">Vegetarian</option>
            <option value="vegan">Vegan</option>
          </SelectField>
          <CheckboxField
            errorMessage="You must agree to the Terms & Conditions"
            hasError={!!validationErrors.terms1}
            label={"I agree to the Terms & Conditions below."}
            name={"terms1"}
            value={"yes"}
            isRequired={true}
          />
          <a
            target="_blank"
            rel="noreferrer"
            href="https://github.com/DataScience-GT/hacklytics-portal-2023/blob/main/waiver.md"
            style={{ color: "var(--amplify-colors-font-active)" }}
          >
            Terms & Conditions
          </a>
        </>
      );
    },
  },
}

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
    <>
      <AmplifyProvider
        theme={ThemeMap.get(theme) ?? hacklytics}
        colorMode={colorMode}
      >
        <ThemeContext.Provider value={{ theme, setTheme, colorMode, setColorMode }}>
          <Authenticator
            formFields={formFields}
            services={Services}
            components={components}
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
                        path="/account"
                        element={<AccountPage user={user} signOut={signOut} />}
                      />
                      <Route
                        path="/datasets"
                        element={<DatasetPage user={user} signOut={signOut} />}
                      />
                      <Route
                        path="/settings"
                        element={<SettingsPage user={user} signOut={signOut} />}
                      />
                      {user &&
                        (getGroups(user).includes("Administrator") ||
                          getGroups(user).includes("Volunteer")) && (
                          <Route
                            path="/shop/*"
                            element={
                              <ShopPage user={user} signOut={signOut} />
                            }
                          />
                        )}
                      {user && getGroups(user).includes("Administrator") && (
                        <Route
                          path="/admin/*"
                          element={<AdminPage user={user} signOut={signOut} />}
                        />
                      )}
                      {user &&
                        (getGroups(user).includes("Administrator") ||
                          getGroups(user).includes("Scavenger")) && (
                          <Route
                            path="/scavengerhunts/*"
                            element={
                              <ScavengerHuntPage
                                user={user}
                                signOut={signOut}
                              />
                            }
                          />
                        )}
                      <Route
                        path="/checkpoint/:checkpointId"
                        element={
                          <CheckpointPage user={user} signOut={signOut} />
                        }
                      />
                    </Routes>
                  </div>
                </BrowserRouter>
              );
            }}
          </Authenticator>
        </ThemeContext.Provider>
      </AmplifyProvider>
    </>
  );
};

export default App;
