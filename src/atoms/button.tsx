import { StyleProp, TouchableHighlight, ViewStyle } from "react-native";
import styled from "styled-components/native";
import { Box } from "../molecules/Box";
import { ThemeSizeTypes } from "../theme/theme";
import { Icon, IconNames } from "./icon";
import { Text } from "./text";

const Container = styled(Box)<{
  size: ButtonInterface["size"];
  transparentBg: ButtonInterface["transparentBg"];
}>`
  justify-content: center;
  height: ${({ theme, size = "l" }) => theme.sizes[size]};
  min-width: ${({ theme, size = "l" }) => theme.sizes[size]};
  ${({ transparentBg }) =>
    transparentBg ? `background-color: transparent;` : null};
`;

const BtnContainer = styled(TouchableHighlight)`
  flex-direction: row;
  align-items: center;
  justify-content: flex-start;
  padding: ${({ theme }) => `0 ${theme.spacings.m}} 0 ${theme.spacings.m}}`};
  height: 100%;
`;

const TextContainer = styled(Text)`
  padding: ${({ theme }) => `0 ${theme.spacings.m}} 0 ${theme.spacings.m}}`};
  font-size: ${({ theme }) => theme.fontSizes.l};
`;

export interface ButtonIconsInterface {
  icons: {
    opened: IconNames;
    closed: IconNames;
  };
}
export interface ButtonInterface extends ButtonIconsInterface {
  onPress: () => void;
  title?: string;
  open?: boolean;
  style?: StyleProp<ViewStyle>;
  size?: ThemeSizeTypes;
  disabled?: boolean;
  transparentBg?: boolean;
}

export const Button = ({
  onPress,
  icons,
  title,
  open,
  style,
  size,
  disabled,
  transparentBg,
}: ButtonInterface) => {
  return (
    <Container style={style} size={size} transparentBg={transparentBg}>
      <BtnContainer onPress={() => onPress()} disabled={disabled}>
        <>
          <Icon
            name={open ? icons.opened : icons.closed}
            size="l"
            disabled={disabled}
          />
          {title ? (
            <TextContainer size="l" disabled={disabled}>
              {title}
            </TextContainer>
          ) : null}
        </>
      </BtnContainer>
    </Container>
  );
};
