import React, { useContext } from "react";
import styled from "styled-components/native";
import { useThemeBtns } from "../hooks/theme/useThemeBtns";

import { Screen } from "../molecules/Screen";
import { ThemeContext } from "../state/providers/themeProvider";
import { Profile } from "./Profile";

const Container = styled(Screen)`
  width: 100%;
  padding: ${({ theme }) => theme.spacings.m};
`;

export const Settings = () => {
  const { pickedTheme, setPickedTheme } = useContext(ThemeContext);

  const { ThemePickerBtns } = useThemeBtns({ setPickedTheme, pickedTheme });
  return (
    <Container>
      <Profile />
      <ThemePickerBtns />
    </Container>
  );
};
