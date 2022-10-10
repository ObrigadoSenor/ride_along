import React, { useContext, useMemo } from "react";
import styled from "styled-components/native";

import { Button } from "../../atoms/button";
import { Box } from "../../molecules/Box";
import { DialogWindowContext } from "../../state/providers/dialogWindowProvider";
import { MapContext } from "../../state/providers/mapProvider";

const ThemeBox = styled(Box)`
  position: absolute;
  flex-direction: row;
  align-items: center;
  justify-content: space-around;
  top: ${({ theme }) => theme.spacings.xxl};
  right: ${({ theme }) => theme.spacings.m};
  left: ${({ theme }) => theme.spacings.m};
`;

export const useMapTheme = () => {
  const { openDialogWindow, setOpenDialogWindow } =
    useContext(DialogWindowContext);
  const { theme } = useContext(MapContext);
  const { themeData, pickedTheme, setPickedTheme } = theme || {};

  const open = openDialogWindow === "theme";

  const mapThemeBtn = (
    <Button
      onPress={() => setOpenDialogWindow(open ? "none" : "theme")}
      icons={{
        opened: "close-circle-outline",
        closed: pickedTheme.icon,
      }}
      open={open}
    />
  );

  const mapThemePickerBtns = themeData.map((theme) => (
    <Button
      key={theme.icon}
      onPress={() => setPickedTheme(theme)}
      icons={{ opened: theme.icon, closed: theme.icon }}
      disabled={pickedTheme.name === theme.name}
      transparentBg={true}
    />
  ));

  const MapTheme = useMemo(() => {
    const Theme = () => {
      return (
        <>
          {mapThemeBtn}
          {open ? <ThemeBox>{mapThemePickerBtns}</ThemeBox> : null}
        </>
      );
    };
    return Theme;
  }, [open, pickedTheme]);

  return { MapTheme, mapThemeBtn, mapThemePickerBtns, pickedTheme };
};
