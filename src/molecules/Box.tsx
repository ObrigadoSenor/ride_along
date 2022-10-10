import React from "react";
import {
  KeyboardAvoidingView,
  StyleProp,
  ViewStyle,
  Platform,
} from "react-native";
import styled from "styled-components/native";

const Container = styled.View`
  background-color: ${({ theme }) => theme.colors.primary};
  border-radius: ${({ theme }) => theme.radius.m};
  min-height: ${({ theme }) => theme.sizes.m};
  min-width: ${({ theme }) => theme.sizes.m};
`;

const ScrollContainer = styled.ScrollView`
  background-color: ${({ theme }) => theme.colors.primary};
  border-radius: ${({ theme }) => theme.radius.l};
`;

const KeboardContainer = styled(KeyboardAvoidingView)`
  background-color: ${({ theme }) => theme.colors.modal};
  border-radius: ${({ theme }) => theme.radius.l};
`;

interface BoxInterface {
  children: any;
  style?: StyleProp<ViewStyle>;
  avoidKeyboard?: boolean;
  scrollView?: boolean;
}

export const Box = ({
  children,
  style,
  avoidKeyboard,
  scrollView,
}: BoxInterface) => {
  const keyboard = (
    <KeboardContainer
      behavior={Platform.OS === "ios" ? "position" : "height"}
      style={style}
    >
      {children}
    </KeboardContainer>
  );
  const scroll = (
    <ScrollContainer contentContainerStyle={style}>{children}</ScrollContainer>
  );
  const def = <Container style={style}>{children}</Container>;

  return avoidKeyboard ? keyboard : scrollView ? scroll : def;
};
