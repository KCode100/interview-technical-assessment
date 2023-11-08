import styled from "styled-components";
import { createContext, useContext, useEffect, useState } from "react";
import { QuestionCard } from "./QuestionCard";
import { QuestionsFilter } from "./QuestionsFilter";
import { Container, LoadingSpinner } from "../layout-components";
import { QuestionsContext } from "../context/QuestionsContext";

const ListWrapper = styled(Container)`
  flex: 2;
  align-self: flex-start;
  margin: 0;
`;

export const FilteredQuestionsContext = createContext();

export const QuestionsView = () => {
  const { loading, questionsData } = useContext(QuestionsContext);
  const [filteredQuestions, setFilteredQuestions] = useState([]);

  useEffect(() => {
    setFilteredQuestions(questionsData);
  }, [questionsData]);

  return (
    <ListWrapper>
      <FilteredQuestionsContext.Provider
        value={{ filteredQuestions, setFilteredQuestions }}
      >
        <QuestionsFilter />
        {loading && <LoadingSpinner />}
        {filteredQuestions &&
          filteredQuestions.map((question) => (
            <QuestionCard
              key={question.question_id}
              questionDetails={question.question_details}
            />
          ))}
      </FilteredQuestionsContext.Provider>
    </ListWrapper>
  );
};
