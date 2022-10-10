import Ionicons from "@expo/vector-icons/Ionicons";
import React, { ComponentProps } from "react";
import { StyleSheet } from "react-native";
import styled from "styled-components/native";

const IconContainer = styled(Ionicons)<{ disabled: boolean }>`
  color: ${({ theme }) => theme.colors.accent};
  opacity: ${({ disabled, theme }) =>
    disabled ? theme.opacity.disabled : theme.opacity.default};
`;

type IconSizeNr = 16 | 20 | 24 | 28;

type IconSize = "s" | "m" | "l" | "xl";

export type IconNames = ComponentProps<typeof Ionicons>["name"];

interface TextInterface {
  name: IconNames;
  size?: IconSize;
  disabled?: boolean;
}

export const Icon = ({ name, size = "m", disabled = false }: TextInterface) => {
  let iconSize: IconSizeNr;
  switch (size) {
    case "s":
      iconSize = 16;
      break;
    case "m":
      iconSize = 20;
      break;
    case "l":
      iconSize = 24;
      break;
    case "xl":
    default:
      iconSize = 28;
      break;
  }
  return <IconContainer name={name} size={iconSize} disabled={disabled} />;
};
