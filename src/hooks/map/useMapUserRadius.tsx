import Slider from "@react-native-community/slider";
import React, { useContext, useMemo } from "react";
import { Circle } from "react-native-maps";
import styled from "styled-components/native";

import { Button } from "../../atoms/button";
import { Box } from "../../molecules/Box";
import { DialogWindowContext } from "../../state/providers/dialogWindowProvider";
import { MapContext } from "../../state/providers/mapProvider";
import { UserLocationInterface } from "../../state/providers/markerProvider";
import { ThemeContext } from "../../state/providers/themeProvider";

const UserRadiusBox = styled(Box)`
  position: absolute;
  align-items: center;
  justify-content: flex-start;
  top: ${({ theme }) => theme.spacings.xxl};
  right: ${({ theme }) => theme.spacings.m};
  left: ${({ theme }) => theme.spacings.m};
`;

const UserRadiusSlider = styled(Slider)`
  width: 100%;
  height: ${({ theme }) => theme.sizes.l};
`;

interface UseMapUserRadiusInterface {
  userLocation: UserLocationInterface;
}

export const useMapUserRadius = ({
  userLocation,
}: UseMapUserRadiusInterface) => {
  const { openDialogWindow, setOpenDialogWindow } =
    useContext(DialogWindowContext);

  const { pickedTheme } = useContext(ThemeContext);

  const { userRadius } = useContext(MapContext);
  const { value, setUserRadiusValue } = userRadius || {};

  const open = openDialogWindow === "radius";

  const mapUserRadiusBtn = (
    <Button
      onPress={() => setOpenDialogWindow(open ? "none" : "radius")}
      icons={{
        opened: "close-circle-outline",
        closed: "radio-button-on",
      }}
      open={open}
    />
  );

  const mapUserRadiusSlider = (
    <UserRadiusSlider
      minimumValue={250}
      maximumValue={1000}
      minimumTrackTintColor={pickedTheme.theme.colors.accent}
      maximumTrackTintColor={pickedTheme.theme.colors.accentAlpha}
      value={value}
      onSlidingComplete={(v: number) => setUserRadiusValue(v)}
    />
  );

  const mapUserRadiusCircle = () => (
    <Circle
      key="map-user-radius-circle"
      center={userLocation}
      radius={value}
      strokeWidth={3}
      strokeColor={pickedTheme.theme.colors.accent}
      fillColor={pickedTheme.theme.colors.accentAlpha}
    />
  );

  const MapUserRadius = useMemo(() => {
    const Theme = () => {
      return (
        <>
          {mapUserRadiusBtn}
          {open ? <UserRadiusBox>{mapUserRadiusSlider}</UserRadiusBox> : null}
        </>
      );
    };
    return Theme;
  }, [open, value]);

  return {
    mapUserRadiusCircle,
    MapUserRadius,
    mapUserRadiusBtn,
    mapUserRadiusSlider,
  };
};
