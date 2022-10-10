import React, { useContext } from "react";
import { Dimensions, View } from "react-native";
import styled from "styled-components/native";
import { Button, ButtonIconsInterface } from "../atoms/button";
import { Text } from "../atoms/text";
import {
  MapOpenOverlayInterface,
  MapOverlayWindowContext,
} from "../state/providers/mapOverlayWindowProvider";
import { Box } from "./Box";

const StyledBox = styled(Box)`
  position: absolute;
  bottom: ${({ theme }) => theme.spacings.m};
  left: ${({ theme }) => theme.spacings.m};
  right: ${({ theme }) => theme.spacings.m};
  padding: ${({ theme }) => theme.spacings.s};
  max-height: ${() => Dimensions.get("window").height * 0.8}px;
`;

const Header = styled.View`
  align-items: center;
  justify-content: space-between;
  flex-direction: row;
  width: 100%;
`;

const Children = styled.View`
  padding: ${({ theme }) => theme.spacings.s};
`;

const TabsContainer = styled.View`
  align-items: center;
  justify-content: space-around;
  flex-direction: row;
  width: 100%;
`;

export interface MapOverlayTabsInterface extends ButtonIconsInterface {
  content: JSX.Element | JSX.Element[];
  title: string;
  type: MapOpenOverlayInterface;
}

interface MapOverlayInterface {
  children: any;
  title?: string;
  tabs?: MapOverlayTabsInterface[];
}

export const MapOverlay = ({
  children,
  title,
  tabs = [],
}: MapOverlayInterface) => {
  const { openMapOverlayWindow, setOpenMapOverlayWindow } = useContext(
    MapOverlayWindowContext
  );

  const renderHeader = (
    <Header>
      <Text type="header">{title}</Text>
    </Header>
  );

  const renderTabs = (
    <TabsContainer>
      {tabs.map(({ content, type, ...rest }) => (
        <View>
          <Button
            disabled={type === openMapOverlayWindow}
            onPress={() => setOpenMapOverlayWindow(type)}
            {...rest}
          />
        </View>
      ))}
    </TabsContainer>
  );

  return (
    <StyledBox>
      {/* {renderHeader} */}
      {/* {renderTabs} */}
      {<Children>{children}</Children>}
    </StyledBox>
  );
};
