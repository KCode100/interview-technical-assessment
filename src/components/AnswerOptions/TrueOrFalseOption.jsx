import React from "react";

import styled from "styled-components";

import { Col } from "../../layout-components";

const Row = styled.div`
  display: flex;
  flex-direction: row;
`;

const Label = styled.label`
  margin-left: 1rem;
  margin: 0.5rem 0.8rem;
  padding: 0rem 0.5rem;
`;

const RadioButton = styled.input`
  margin-right: 0.5rem;
  text-align: end;
`;

const LabelledRadioButton = ({ labelText, inputType, name, inputValue }) => (
  <Row>
    <Label>
      <RadioButton type={inputType} name={name} value={inputValue} />
      {labelText}
    </Label>
  </Row>
);

export const TrueOrFalseOption = () => {
  // TODO: Add work here
  return (
    <Col>
      <LabelledRadioButton
        labelText="True"
        inputType="radio"
        name="radio-button"
        inputValue="true"
      />
      <LabelledRadioButton
        labelText="False"
        inputType="radio"
        name="radio-button"
        inputValue="true"
      />
    </Col>
  );
};
