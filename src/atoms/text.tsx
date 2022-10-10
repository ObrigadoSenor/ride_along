import React from "react";
import styled from "styled-components/native";
import { StyleProp, Text as RCText, TextStyle } from "react-native";
import { ThemeSizeTypes } from "../theme/theme";

const TextContainer = styled(RCText)<{
  size?: ThemeSizeTypes;
  disabled?: boolean;
}>`
  font-size: ${({ size = "m", theme }) => theme.fontSizes[size]};
  color: ${({ disabled, theme }) =>
    disabled ? theme.colors.text.disabled : theme.colors.text.secondary};
`;

type TextType = "small" | "body" | "header" | "sub-header";

interface TextInterface {
  children: any;
  type?: TextType;
  style?: StyleProp<TextStyle>;
  disabled?: boolean;
  size?: ThemeSizeTypes;
}

export const Text = ({
  children,
  type,
  style,
  size,
  disabled,
}: TextInterface) => {
  return (
    <TextContainer disabled={disabled} size={size} style={style}>
      {children}
    </TextContainer>
  );
};
