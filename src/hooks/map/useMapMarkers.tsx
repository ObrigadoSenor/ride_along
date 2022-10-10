import React, { useContext, useMemo, useState } from "react";
import { Circle, Marker } from "react-native-maps";
import { MarkerContext } from "../../state/providers/markerProvider";
import { ThemeContext } from "../../state/providers/themeProvider";

export interface MapCoordinateInterface {
  latitude: number;
  longitude: number;
}
export interface MapMarkersInterface {
  coordinate: MapCoordinateInterface;
  title: string;
  description: string;
  id: string;
  draggable?: boolean;
}

export interface UseMapMarkersInterface {}

const radius = 50;

export const useMapMarkers = () => {
  const { pickedTheme } = useContext(ThemeContext);

  const { markerData, setMarkerData } = useContext(MarkerContext);

  const [focusedMapMarker, setFocusedMapMarker] = useState<
    MapMarkersInterface | undefined
  >(undefined);

  const onMarkerPress = (coords: MapCoordinateInterface) => {
    const marker = markerData.find(
      ({ coordinate }) =>
        coordinate.latitude === coords.latitude &&
        coordinate.longitude === coords.longitude
    );
    setFocusedMapMarker(marker);
  };

  const MapMarkers = useMemo(() => {
    const RenderMapMarkers = () => {
      return (
        <>
          {markerData.map(({ id, coordinate }) => (
            // <Marker
            //   key={marker.id}
            //   onPress={({ nativeEvent }) =>
            //     onMarkerPress(nativeEvent.coordinate)
            //   }
            //   {...marker}
            // />
            <Circle
              key={id}
              center={{ ...coordinate }}
              radius={radius}
              strokeWidth={radius}
              strokeColor={pickedTheme.theme.colors.accent}
              fillColor={pickedTheme.theme.colors.accent}
              onPress={({ nativeEvent }) =>
                onMarkerPress(nativeEvent.coordinate)
              }
            />
          ))}
        </>
      );
    };
    return RenderMapMarkers;
  }, [markerData, pickedTheme, radius]);

  return { MapMarkers, setMarkerData, focusedMapMarker };
};
