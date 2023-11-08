import styled from "styled-components";

export const Label = styled.label`
  display: flex;
  flex-direction: column;
  gap: 0.8rem;
  color: ${(props) => (props.isDisabled ? "lightGrey" : "black")};
`;

export const Input = styled.input`
  padding: 0.8rem;
  background: #fff;
  border: 1px solid #e0e0e0;
  border-radius: 6px;
  width: 100%;
`;

export const Select = styled.select`
  padding: 0.8rem;
  background: #fff;
  border: 1px solid #e0e0e0;
  border-radius: 6px;
`;
