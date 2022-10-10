import React from "react";
import { StyleSheet, View } from "react-native";
import { Text } from "../atoms/text";
import { MapMarkersInterface } from "../hooks/map/useMapMarkers";

interface MapOverlayInterface extends MapMarkersInterface {}

export const MapOverlayMarker = ({
  description,
  coordinate,
}: MapOverlayInterface) => {
  return (
    <View style={styles.container}>
      <Text>{description}</Text>
      <Text>{`Lat: ${coordinate.latitude}`}</Text>
      <Text>{`Long: ${coordinate.longitude}`}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    width: "100%",
    height: "100%",
  },
});
