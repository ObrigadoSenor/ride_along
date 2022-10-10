import { createContext, useState } from "react";
import { MapStyleElement } from "react-native-maps";
import {
  darkMap,
  retroMap,
  silverMap,
} from "../../../assets/maps/googleOverlay";
import { IconNames } from "../../atoms/icon";
import { ThemeTemplateInterface } from "../../theme/theme";
import { themeDark } from "../../theme/themeDark";
import { themeLight } from "../../theme/themeLight";

export type ThemeNames = "dark" | "light" | "retro";

export interface ThemeDataInterface {
  icon: IconNames;
  map: MapStyleElement[];
  name: ThemeNames;
  theme: ThemeTemplateInterface;
}

export interface ThemeContextInterface {
  themeData: ThemeDataInterface[];
  pickedTheme: ThemeDataInterface;
  setPickedTheme: (d: ThemeDataInterface) => void;
}

export const initThemeData: ThemeDataInterface[] = [
  {
    icon: "moon",
    map: darkMap,
    name: "dark",
    theme: themeDark,
  },
  {
    icon: "sunny",
    map: silverMap,
    name: "light",
    theme: themeLight,
  },
  {
    icon: "contrast",
    map: retroMap,
    name: "retro",
    theme: themeLight,
  },
];

const initPickedTheme = initThemeData[0];

export const ThemeContext = createContext<ThemeContextInterface>({
  themeData: initThemeData,
  pickedTheme: initPickedTheme,
  setPickedTheme: () => {},
});

export const ThemeProvider = (props: any) => {
  const [pickedTheme, setPickedTheme] = useState(initPickedTheme);

  return (
    <ThemeContext.Provider
      value={{
        themeData: initThemeData,
        pickedTheme,
        setPickedTheme,
      }}
    >
      {props.children}
    </ThemeContext.Provider>
  );
};
