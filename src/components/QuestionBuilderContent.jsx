import styled from "styled-components";
import { QuestionSetup } from "./QuestionSetup";
import { QuestionsView } from "./QuestionsView";

const StyledWrapper = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  max-width: 1200px;
  gap: 1rem;
  padding: 1rem;
  margin: auto;
`;

export const QuestionBuilderContent = () => {
  return (
    <StyledWrapper>
      <QuestionSetup />
      <QuestionsView />
    </StyledWrapper>
  );
};
