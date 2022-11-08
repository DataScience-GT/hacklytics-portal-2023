import { createContext, useContext } from "react";
import { hacklytics, synthwave, terminal, classic } from "../theme";
import { Theme as AmpTheme } from "@aws-amplify/ui-react";

export enum Theme {
  Hacklytics = "hacklytics",
  Synthwave = "synthwave",
  Terminal = "terminal",
  Classic = "classic",
}

export const ThemeMap = new Map<Theme, AmpTheme>([
  [Theme.Hacklytics, hacklytics],
  [Theme.Synthwave, synthwave],
  [Theme.Terminal, terminal],
  [Theme.Classic, classic],
]);

export type ThemeContextType = {
  theme: Theme;
  setTheme: (Theme: Theme) => void;
  colorMode: "light" | "dark" | "system";
  setColorMode: (colorMode: "light" | "dark" | "system") => void;
};

export const ThemeContext = createContext<ThemeContextType>({
  theme: Theme.Hacklytics,
  setTheme: (theme) => console.warn("no theme provider"),
  colorMode: "system",
  setColorMode: (colorMode) => console.warn("no colorMode provider"),
});

export const useTheme = () => useContext(ThemeContext);
