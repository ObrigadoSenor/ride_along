import React, { useContext, useMemo } from "react";
import styled from "styled-components/native";

import { Button } from "../../atoms/button";
import { Panel } from "../../molecules/Panel";
import {
  ThemeContext,
  ThemeDataInterface,
} from "../../state/providers/themeProvider";

const ThemeBox = styled(Panel)`
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
`;

interface UseThemeBtnsInterface {
  setPickedTheme: (t: ThemeDataInterface) => void;
  pickedTheme: ThemeDataInterface;
}

export const useThemeBtns = ({
  setPickedTheme,
  pickedTheme,
}: UseThemeBtnsInterface) => {
  const { themeData } = useContext(ThemeContext);

  const themePickerBtns = themeData.map((theme) => (
    <Button
      key={theme.icon}
      onPress={() => setPickedTheme(theme)}
      icons={{ opened: theme.icon, closed: theme.icon }}
      disabled={pickedTheme.name === theme.name}
      transparentBg={true}
    />
  ));

  const ThemePickerBtns = useMemo(() => {
    return () => <ThemeBox title="Theme">{themePickerBtns}</ThemeBox>;
  }, [themeData, pickedTheme]);

  return { ThemePickerBtns };
};
