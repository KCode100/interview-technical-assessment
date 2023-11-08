import styled from "styled-components";

import { Card, CardContent, Select } from "../layout-components";
import { useContext } from "react";
import { QuestionsContext } from "../context/QuestionsContext";
import { FilteredQuestionsContext } from "./QuestionsView";

const FilterCard = styled(Card)`
  background: linear-gradient(to right, #56ccf2 0%, #2f80ed 51%, #56ccf2 100%);
  color: white;
`;
const StyledCardContent = styled(CardContent)`
  flex-direction: row;
  flex-wrap: wrap;
  gap: 1rem;
`;
const StyledSelect = styled(Select)`
  max-width: 250px;
  margin-top: 12px;
`;
const FilterItem = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  color: ${(props) => (props.isDisabled ? "lightGrey" : "black")};
`;

export const QuestionsFilter = () => {
  const { questionsData } = useContext(QuestionsContext);
  const { setFilteredQuestions } = useContext(FilteredQuestionsContext);

  function handleSelectCategory(e) {
    const selectedCategory = e.target.value;
    const filteredQuestions =
      selectedCategory === "All"
        ? questionsData
        : questionsData.filter(
            (question) =>
              question.question_details.category === selectedCategory
          );

    setFilteredQuestions(filteredQuestions);
  }

  return (
    <FilterCard>
      <StyledCardContent>
        <FilterItem>
          Select a category
          <StyledSelect onChange={handleSelectCategory}>
            <option>All</option>
            <option>General Knowledge</option>
            <option>Entertainment: Board Games</option>
            <option>Animals</option>
            <option>Politics</option>
            <option>History</option>
            <option>Sports</option>
          </StyledSelect>
        </FilterItem>
        <FilterItem isDisabled>
          Difficulty
          <StyledSelect disabled>
            <option>All</option>
            <option>Hard</option>
            <option>Medium</option>
            <option>Easy</option>
          </StyledSelect>
        </FilterItem>
        <FilterItem isDisabled>
          Type
          <StyledSelect disabled>
            <option>All</option>
            <option>Multiple choice</option>
            <option>True/False</option>
            <option>Text</option>
          </StyledSelect>
        </FilterItem>
      </StyledCardContent>
    </FilterCard>
  );
};
