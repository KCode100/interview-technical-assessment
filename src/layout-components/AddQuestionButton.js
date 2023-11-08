import styled from "styled-components";

export const AddQuestionButton = styled.button`
  display: flex;
  color: white;
  cursor: pointer;
  padding: 0.65rem 1rem;
  background: linear-gradient(90deg, #ee6352, #e3e944, #ee6352);
  background-size: 300%;
  background-position: left;
  transition: background-position 350ms;
  border-radius: 4px;
  border: 1px solid transparent;
  width: fit-content;
  &:focus {
    border: 1px solid blue;
  }
  &:hover {
    background-position: right;
  }
`;
