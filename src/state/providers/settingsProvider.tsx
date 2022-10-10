import { createContext, useState } from "react";

interface SettingsDataInterface {}

export interface SettingsContextInterface {
  settingsData: SettingsDataInterface;
  setSettingsData: (d: SettingsDataInterface) => void;
}

const initSettingsData: SettingsDataInterface = {};

export const SettingsContext = createContext<SettingsContextInterface>({
  settingsData: initSettingsData,
  setSettingsData: () => {},
});

export const SettingsProvider = (props: any) => {
  const [settingsData, setSettingsData] = useState(initSettingsData);

  return (
    <SettingsContext.Provider
      value={{
        settingsData,
        setSettingsData,
      }}
    >
      {props.children}
    </SettingsContext.Provider>
  );
};
