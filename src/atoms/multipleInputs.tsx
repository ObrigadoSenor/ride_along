import React from "react";
import styled from "styled-components/native";
import { InputContainer, InputInner, InputInterface } from "./input";

export const MultipleInputsContainer = styled(InputContainer)`
  flex-direction: row;
`;

export const Container = styled.View<{
  end: boolean;
  size: string;
}>`
  width: ${({ size }) => size};
  border-right-width: ${({ end }) => (end ? 0 : 1)}px;
  border-right-color: ${({ theme, end }) =>
    end ? `transparent` : theme.colors.accent};
`;

export const OverrideInput = styled(InputInner)`
  width: 100%;
`;

interface MultipleInputsInterface {
  sizes: string[];
  inputs: InputInterface[];
}

export const MultipleInputs = ({
  inputs = [],
  sizes = [],
}: MultipleInputsInterface) => {
  const renderInputs = () =>
    inputs.map((input, index) => (
      <Container
        key={input.title}
        end={index >= inputs.length - 1}
        size={sizes[index] || "auto"}
      >
        <OverrideInput {...input} />
      </Container>
    ));

  return <MultipleInputsContainer>{renderInputs()}</MultipleInputsContainer>;
};
