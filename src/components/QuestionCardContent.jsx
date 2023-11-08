import {
  MultipleChoiceOption,
  TextOption,
  TrueOrFalseOption
} from "./AnswerOptions";
import shuffleArray from "../utils/shuffleArray";

export const QuestionCardContent = ({ questionDetails }) => {
  const { type, correct_answer, incorrect_answers } = questionDetails;

  if (type === "multiple") {
    const allAnswersShuffled = shuffleArray([
      ...incorrect_answers,
      correct_answer
    ]);

    return <MultipleChoiceOption allAnswersShuffled={allAnswersShuffled} />;
  }

  if (type === "boolean") {
    return <TrueOrFalseOption />;
  }

  if (type === "text") {
    return <TextOption />;
  }
};
