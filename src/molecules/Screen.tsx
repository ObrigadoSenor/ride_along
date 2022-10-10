import React from "react";
import { StyleProp, ViewStyle } from "react-native";
import styled from "styled-components/native";

const ViewContainer = styled.View`
  background-color: ${({ theme }) => theme.colors.primary};
  width: 100%;
  height: 100%;
`;

interface ScreenInterface {
  children: any;
  style?: StyleProp<ViewStyle>;
}

export const Screen = ({ children, style }: ScreenInterface) => {
  return <ViewContainer style={style}>{children}</ViewContainer>;
};
