import { createContext, useState } from "react";

export type MapOpenOverlayInterface = "whereTo" | "marker";

export interface MapOverlayWindowContextInterface {
  openMapOverlayWindow: MapOpenOverlayInterface;
  setOpenMapOverlayWindow: (d: MapOpenOverlayInterface) => void;
}

const initOpenMapOverlayWindow = "whereTo";

export const MapOverlayWindowContext =
  createContext<MapOverlayWindowContextInterface>({
    openMapOverlayWindow: initOpenMapOverlayWindow,
    setOpenMapOverlayWindow: () => {},
  });

export const MapOverlayWindowProvider = (props: any) => {
  const [openMapOverlayWindow, setOpenMapOverlayWindow] =
    useState<MapOpenOverlayInterface>(initOpenMapOverlayWindow);

  return (
    <MapOverlayWindowContext.Provider
      value={{
        openMapOverlayWindow: openMapOverlayWindow,
        setOpenMapOverlayWindow,
      }}
    >
      {props.children}
    </MapOverlayWindowContext.Provider>
  );
};
