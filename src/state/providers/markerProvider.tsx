import { createContext, useEffect, useState } from "react";
import { useForegroundLocation } from "../../hooks/location/useForegroundLocation";
import { MapMarkersInterface } from "../../hooks/map/useMapMarkers";
import * as Location from "expo-location";

export interface UserLocationInterface {
  latitude: Location.LocationObjectCoords["latitude"];
  longitude: Location.LocationObjectCoords["longitude"];
}

export interface MarkerContextInterface {
  markerData: MapMarkersInterface[];
  setMarkerData: (d: MapMarkersInterface[]) => void;
  userLocation: UserLocationInterface;
}

const fakeMarkers = (latitude?: number, longitude?: number) => {
  const markers: MapMarkersInterface[] = [
    {
      coordinate: {
        longitude: longitude != undefined ? longitude + 0.1 : 0,
        latitude: latitude != undefined ? latitude + 0.1 : 0,
      },
      title: "Title marker 1",
      description: "Desc marker 1",
      id: "one",
    },
    {
      coordinate: {
        longitude: longitude != undefined ? longitude - 0.1 : 0,
        latitude: latitude != undefined ? latitude + 0.05 : 0,
      },
      title: "Title marker 2",
      description: "Desc marker 2",
      id: "two",
    },
    {
      coordinate: {
        longitude: longitude != undefined ? longitude + 0.1 : 0,
        latitude: latitude != undefined ? latitude - 0.05 : 0,
      },
      title: "Title marker 3",
      description: "Desc marker 3",
      id: "three",
    },
  ];
  return markers;
};

export const MarkerContext = createContext<MarkerContextInterface>({
  markerData: fakeMarkers(),
  setMarkerData: () => {},
  userLocation: { longitude: 0, latitude: 0 },
});

export const MarkerProvider = (props: any) => {
  const { location } = useForegroundLocation();
  const { latitude = 0, longitude = 0 } = location || {};

  const [markerData, setMarkerData] = useState(
    fakeMarkers(latitude, longitude)
  );

  useEffect(() => {
    setMarkerData(fakeMarkers(latitude, longitude));
  }, [location]);

  return (
    <MarkerContext.Provider
      value={{
        markerData,
        setMarkerData,
        userLocation: { latitude, longitude },
      }}
    >
      {props.children}
    </MarkerContext.Provider>
  );
};
