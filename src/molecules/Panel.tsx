import React from "react";
import {
  KeyboardAvoidingView,
  StyleProp,
  ViewStyle,
  Platform,
  View,
} from "react-native";
import styled from "styled-components/native";
import { Text } from "../atoms/text";

const ViewContainer = styled.View`
  background-color: ${({ theme }) => theme.colors.primary};
  margin: ${({ theme }) => theme.spacings.m};
  min-height: ${({ theme }) => theme.sizes.m};
  min-width: ${({ theme }) => theme.sizes.m};
`;

const ScrollContainer = styled.ScrollView`
  background-color: ${({ theme }) => theme.colors.primary};
  margin: ${({ theme }) => theme.spacings.m};
`;

const KeboardContainer = styled(KeyboardAvoidingView)`
  background-color: ${({ theme }) => theme.colors.primary};
  margin: ${({ theme }) => theme.spacings.m};
`;

interface PanelInterface {
  children: any;
  style?: StyleProp<ViewStyle>;
  avoidKeyboard?: boolean;
  scrollView?: boolean;
  title?: string;
}

export const Panel = ({
  children,
  style,
  avoidKeyboard,
  scrollView,
  title,
}: PanelInterface) => {
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
  const def = <ViewContainer style={style}>{children}</ViewContainer>;

  const content = avoidKeyboard ? keyboard : scrollView ? scroll : def;

  return title === undefined ? (
    content
  ) : (
    <View>
      <Text size="l">{title}</Text>
      {content}
    </View>
  );
};
