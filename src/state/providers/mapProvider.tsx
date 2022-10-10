import { createContext, useContext, useEffect, useState } from "react";
import {
  initThemeData,
  ThemeContext,
  ThemeContextInterface,
} from "./themeProvider";

export interface MapContextInterface {
  theme: ThemeContextInterface;
  userRadius: {
    value: number;
    setUserRadiusValue: (d: number) => void;
  };
}

const initUserRadiusValue: number = 2500;

export const MapContext = createContext<MapContextInterface>({
  theme: {
    themeData: initThemeData,
    pickedTheme: initThemeData[0],
    setPickedTheme: () => {},
  },
  userRadius: {
    value: initUserRadiusValue,
    setUserRadiusValue: () => {},
  },
});

export const MapProvider = (props: any) => {
  const { pickedTheme: themeContextPickedTheme } = useContext(ThemeContext);
  const [pickedTheme, setPickedTheme] = useState(themeContextPickedTheme);

  useEffect(() => {
    setPickedTheme(themeContextPickedTheme);
  }, [themeContextPickedTheme]);

  const [userRadiusValue, setUserRadiusValue] =
    useState<number>(initUserRadiusValue);

  return (
    <MapContext.Provider
      value={{
        theme: {
          themeData: initThemeData,
          pickedTheme,
          setPickedTheme,
        },
        userRadius: {
          value: userRadiusValue,
          setUserRadiusValue,
        },
      }}
    >
      {props.children}
    </MapContext.Provider>
  );
};
