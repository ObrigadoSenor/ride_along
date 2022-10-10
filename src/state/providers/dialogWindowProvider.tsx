import { createContext, useState } from "react";

export type OpenDialogInterface =
  | "profile"
  | "menu"
  | "theme"
  | "radius"
  | "none";

export interface DialowgWindowContextInterface {
  openDialogWindow: OpenDialogInterface;
  setOpenDialogWindow: (d: OpenDialogInterface) => void;
}

const initOpenDialogWindow = "none";

export const DialogWindowContext = createContext<DialowgWindowContextInterface>(
  {
    openDialogWindow: initOpenDialogWindow,
    setOpenDialogWindow: () => {},
  }
);

export const DialogWindowProvider = (props: any) => {
  const [openDialogWindow, setOpenDialogWindow] =
    useState<OpenDialogInterface>(initOpenDialogWindow);

  return (
    <DialogWindowContext.Provider
      value={{
        openDialogWindow: openDialogWindow,
        setOpenDialogWindow,
      }}
    >
      {props.children}
    </DialogWindowContext.Provider>
  );
};
