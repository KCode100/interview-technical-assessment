import React, { useContext, useState } from "react";
import styled from "styled-components";

import {
  AddQuestionButton,
  Card,
  Input,
  Label,
  Select
} from "../layout-components";
import { QuestionsContext } from "../context/QuestionsContext";
import generateRandomId from "../utils/generateRandomId";

const FormCard = styled(Card)`
  flex: 1;
  align-self: flex-start;
  padding: 1.8rem 1.2rem;
`;

const Form = styled.form`
  display: flex;
  flex-direction: column;
  gap: 1.2rem;
`;

const RadioButtons = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;
`;

export const QuestionSetup = () => {
  const { questionsData, setQuestionsData } = useContext(QuestionsContext);
  const [formData, setFormData] = useState({
    question: "",
    type: "multiple",
    correct_answer: "",
    incorrect_answers: ["", "", ""],
    difficulty: "easy",
    category: "General Knowledge"
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // Validation for all question types
    if (formData.question.trim() === "") {
      alert("Please enter a question.");
      return;
    }

    if (formData.difficulty.trim() === "") {
      alert("Please enter the difficulty.");
      return;
    }

    if (formData.correct_answer.trim() === "") {
      alert("Please enter the answer.");
      return;
    }

    if (formData.type === "multiple") {
      // Additional validation for Multiple choice questions
      const hasEmptyIncorrectAnswers = formData.incorrect_answers.some(
        (answer) => answer.trim() === ""
      );

      if (hasEmptyIncorrectAnswers) {
        alert("Please enter all incorrect answers.");
        return;
      }
    }

    // Create a new question object based on formData
    const newQuestion = {
      question_id: generateRandomId(),
      question_details: {
        category: formData.category,
        type: formData.type,
        difficulty: formData.difficulty,
        question: formData.question,
        correct_answer: formData.correct_answer
      }
    };

    if (formData.type === "multiple") {
      newQuestion.question_details.incorrect_answers =
        formData.incorrect_answers;
    }
    setQuestionsData([newQuestion, ...questionsData]);
    // Reset the form data for the next entry
    setFormData({
      question: "",
      type: "multiple",
      correct_answer: "",
      incorrect_answers: ["", "", ""],
      difficulty: "easy",
      category: "General Knowledge"
    });
  };

  return (
    <FormCard>
      <Form onSubmit={handleSubmit}>
        <Label>
          New question
          <Input
            type="text"
            name="question"
            value={formData.question}
            onChange={handleInputChange}
          />
        </Label>
        <Label>
          Category
          <Select
            name="category"
            value={formData.category}
            onChange={handleInputChange}
          >
            <option>General Knowledge</option>
            <option>Entertainment: Board Games</option>
            <option>Animals</option>
            <option>Politics</option>
            <option>History</option>
            <option>Sports</option>
          </Select>
        </Label>
        <Label>
          Question type
          <Select
            name="type"
            value={formData.type}
            onChange={handleInputChange}
          >
            <option value="multiple">Multiple choice</option>
            <option value="boolean">True/False</option>
            <option value="text">Text</option>
          </Select>
        </Label>
        <Label>
          Difficulty
          <Select
            name="difficulty"
            value={formData.difficulty}
            onChange={handleInputChange}
          >
            <option value="easy">Easy</option>
            <option value="medium">Medium</option>
            <option value="hard">Hard</option>
          </Select>
        </Label>
        {(formData.type === "multiple" || formData.type === "text") && (
          <Label>
            Correct answer
            <Input
              type="text"
              name="correct_answer"
              value={formData.correct_answer}
              onChange={handleInputChange}
            />
          </Label>
        )}
        {formData.type === "boolean" && (
          <>
            Correct answer
            <RadioButtons>
              <label>
                <input
                  type="radio"
                  name="correct_answer"
                  value="true"
                  checked={formData.correct_answer === "true"}
                  onChange={handleInputChange}
                />
                True
              </label>
              <label>
                <input
                  type="radio"
                  name="correct_answer"
                  value="false"
                  checked={formData.correct_answer === "false"}
                  onChange={handleInputChange}
                />
                False
              </label>
            </RadioButtons>
          </>
        )}
        {formData.type === "multiple" && (
          <>
            <Label>
              Incorrect answer 1
              <Input
                type="text"
                name="incorrect_answers"
                value={formData.incorrect_answers[0]}
                onChange={(e) => {
                  const updatedAnswers = [...formData.incorrect_answers];
                  updatedAnswers[0] = e.target.value;
                  setFormData({
                    ...formData,
                    incorrect_answers: updatedAnswers
                  });
                }}
              />
            </Label>
            <Label>
              Incorrect answer 2
              <Input
                type="text"
                name="incorrect_answers"
                value={formData.incorrect_answers[1]}
                onChange={(e) => {
                  const updatedAnswers = [...formData.incorrect_answers];
                  updatedAnswers[1] = e.target.value;
                  setFormData({
                    ...formData,
                    incorrect_answers: updatedAnswers
                  });
                }}
              />
            </Label>
            <Label>
              Incorrect answer 3
              <Input
                type="text"
                name="incorrect_answers"
                value={formData.incorrect_answers[2]}
                onChange={(e) => {
                  const updatedAnswers = [...formData.incorrect_answers];
                  updatedAnswers[2] = e.target.value;
                  setFormData({
                    ...formData,
                    incorrect_answers: updatedAnswers
                  });
                }}
              />
            </Label>
          </>
        )}
        <AddQuestionButton type="submit">Add to questions</AddQuestionButton>
      </Form>
    </FormCard>
  );
};
