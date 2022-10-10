import { useContext } from "react";
import styled from "styled-components/native";
import { Box } from "../../molecules/Box";

import {
  DialogWindowContext,
  OpenDialogInterface,
} from "../../state/providers/dialogWindowProvider";
import { MarkerContext } from "../../state/providers/markerProvider";
import { useMapTheme } from "./useMapTheme";
import { useMapUserRadius } from "./useMapUserRadius";

const TopPanelBtnsContainer = styled.View`
  position: absolute;
  flex-direction: row;
  align-items: center;
  justify-content: flex-end;
  top: ${({ theme }) => theme.spacings.xl};
  right: ${({ theme }) => theme.spacings.m};
  left: ${({ theme }) => theme.spacings.m};
`;

const TopPanelContentContainer = styled(Box)`
  position: absolute;
  align-items: center;
  flex-direction: row;
  justify-content: space-around;
  top: ${({ theme }) => theme.spacings.xxl};
  right: ${({ theme }) => theme.spacings.m};
  left: ${({ theme }) => theme.spacings.m};
`;

const TopPanelBtnContainer = styled.View`
  margin-left: ${({ theme }) => theme.spacings.m};
`;

export const useMapTopPanel = () => {
  const { openDialogWindow } = useContext(DialogWindowContext);
  const { userLocation } = useContext(MarkerContext);
  const { mapThemeBtn, mapThemePickerBtns } = useMapTheme();
  const { mapUserRadiusBtn, mapUserRadiusSlider } = useMapUserRadius({
    userLocation,
  });

  const topPanelBtns = [mapUserRadiusBtn, mapThemeBtn];

  const topPanelContent: {
    content: JSX.Element | JSX.Element[];
    type: OpenDialogInterface;
  }[] = [
    {
      content: mapThemePickerBtns,
      type: "theme",
    },
    {
      content: mapUserRadiusSlider,
      type: "radius",
    },
  ];

  const renderTopPanelBtns = (
    <TopPanelBtnsContainer>
      {topPanelBtns.map((btn) => (
        <TopPanelBtnContainer>{btn}</TopPanelBtnContainer>
      ))}
    </TopPanelBtnsContainer>
  );

  const renderTopPanelContent = (
    <TopPanelContentContainer>
      {topPanelContent.map(({ content, type }) =>
        type === openDialogWindow ? content : null
      )}
    </TopPanelContentContainer>
  );

  return {
    renderTopPanelBtns,
    renderTopPanelContent:
      openDialogWindow === "none" ? null : renderTopPanelContent,
  };
};
