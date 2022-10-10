import React from "react";
import {
  KeyboardTypeOptions,
  StyleProp,
  TextInput as RNTextInput,
  ViewStyle,
} from "react-native";
import styled from "styled-components/native";
import { Text } from "./text";

export const InputContainer = styled.View`
  border: ${({ theme }) => `1px solid ${theme.colors.accent}`};
  margin: ${({ theme }) => theme.spacings.xs};
  border-radius: ${({ theme }) => theme.radius.s};
`;

const TextContainer = styled(Text)`
  position: absolute;
  color: ${({ theme }) => theme.colors.text.secondary};
  top: ${({ theme }) => theme.spacings.s};
  left: ${({ theme }) => theme.spacings.m};
  font-size: ${({ theme }) => theme.fontSizes.s};
`;

const TextInput = styled(RNTextInput).attrs(({ theme }) => ({
  placeholderTextColor: theme.colors.text.placeholder,
}))`
  color: ${({ theme }) => theme.colors.text.secondary};
  padding: ${({ theme }) => theme.spacings.m};
  padding-top: ${({ theme }) => theme.spacings.l};
  &::placeholder,
  &::-webkit-input-placeholder {
    color: red;
  }
  &:-ms-input-placeholder {
    color: red;
  }
`;

export interface InputInterface {
  value: string;
  placeholder: string;
  onChangeText: (t: string) => void;
  title?: string;
  keyboardType?: KeyboardTypeOptions;
  double?: boolean;
  style?: StyleProp<ViewStyle>;
}

export const Input = ({ ...rest }: InputInterface) => {
  return (
    <InputContainer style={rest.style}>
      <InputInner {...rest} />
    </InputContainer>
  );
};

export const InputInner = ({ value, ...rest }: InputInterface) => {
  const t = rest.title || rest.placeholder;
  return (
    <>
      {value == "" ? null : <TextContainer>{t}</TextContainer>}
      <TextInput value={value} {...rest} />
    </>
  );
};

interface MultipleInputInterface {
  inputs: InputInterface[];
}

export const Inputs = ({ inputs }: MultipleInputInterface) => {
  const renderInnputs = () => (
    <>
      {inputs.map((input) => {
        return <Input key={input.title} {...input} />;
      })}
    </>
  );
  return renderInnputs();
};
