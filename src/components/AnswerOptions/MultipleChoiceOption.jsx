import styled from "styled-components";

import { Col } from "../../layout-components";

const Label = styled.label`
  font-size: 16px;
  margin: 0.5rem 0.8rem;
  padding: 0rem 0.5rem;
`;

const Checkbox = styled.input`
  margin-right: 0.5rem;
  text-align: start;
`;

const LabelledCheckbox = ({
  inputType,
  name,
  inputValue,
  labelText,
  checked
}) => {
  return (
    <Label>
      <Checkbox
        type={inputType}
        name={name}
        value={inputValue}
        checked={checked}
      />
      {labelText}
    </Label>
  );
};

export const MultipleChoiceOption = ({ allAnswersShuffled }) => {
  // TODO: Add work here
  return (
    <>
      <Col>
        {allAnswersShuffled.map((answer, index) => (
          <LabelledCheckbox
            key={index}
            labelText={answer}
            inputType="checkbox"
            name={answer}
            inputValue={answer}
          />
        ))}
      </Col>
    </>
  );
};
