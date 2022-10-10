import React, { useContext, useMemo } from "react";

import { Dimensions } from "react-native";
import MapView, { PROVIDER_GOOGLE } from "react-native-maps";
import styled from "styled-components/native";
import { useMapMarkers } from "../hooks/map/useMapMarkers";
import { useMapTheme } from "../hooks/map/useMapTheme";
import { useMapTopPanel } from "../hooks/map/useMapTopPanel";
import { useMapUserRadius } from "../hooks/map/useMapUserRadius";
import { MapOverlay, MapOverlayTabsInterface } from "../molecules/MapOverlay";
import { MapOverlayMarker } from "../molecules/MapOverlayMarker";
import { WhereTo } from "../molecules/WhereTo";
import { MarkerContext } from "../state/providers/markerProvider";

const Container = styled.View`
  flex: 1;
  background-color: ${({ theme }) => theme.colors.primary};
  align-items: center;
  justify-content: center;
`;

const MapContainer = styled(MapView)`
  width: ${() => Dimensions.get("window").width};
  height: ${() => Dimensions.get("window").height};
`;

export const Map = () => {
  const { userLocation } = useContext(MarkerContext);
  const { MapMarkers, focusedMapMarker } = useMapMarkers();
  const { pickedTheme } = useMapTheme();
  const { mapUserRadiusCircle } = useMapUserRadius({
    userLocation,
  });

  const latLngDelta = {
    latitudeDelta: Dimensions.get("window").height / 10000,
    longitudeDelta: Dimensions.get("window").width / 10000,
  };

  const { renderTopPanelBtns, renderTopPanelContent } = useMapTopPanel();

  const renderMap = useMemo(() => {
    const M = () => {
      return (
        <MapContainer
          initialRegion={{
            ...latLngDelta,
            ...userLocation,
          }}
          provider={PROVIDER_GOOGLE}
          customMapStyle={pickedTheme.map}
          showsUserLocation={true}
          followsUserLocation={true}
        >
          <MapMarkers />
          {mapUserRadiusCircle()}
        </MapContainer>
      );
    };
    return M;
  }, [
    userLocation,
    latLngDelta,
    MapMarkers,
    pickedTheme,
    mapUserRadiusCircle(),
  ]);

  const tabs: MapOverlayTabsInterface[] = [
    {
      content: <></>,
      title: "Where to",
      type: "whereTo",
      icons: {
        opened: "add",
        closed: "add",
      },
    },
    {
      content: <></>,
      title: "Markers",
      type: "marker",
      icons: {
        opened: "add",
        closed: "add",
      },
    },
  ];

  return (
    <Container>
      {renderMap()}
      {renderTopPanelBtns}
      {renderTopPanelContent}
      <MapOverlay tabs={tabs} title={focusedMapMarker?.title}>
        {focusedMapMarker ? (
          <MapOverlayMarker {...focusedMapMarker} />
        ) : (
          <WhereTo />
        )}
      </MapOverlay>
    </Container>
  );
};
