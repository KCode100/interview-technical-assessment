import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect";
import { QuestionCard } from "../components/QuestionCard";

describe("QuestionCard", () => {
  const questionDetails = {
    category: "General Knowledge",
    type: "multiple",
    difficulty: "medium",
    question: "What is the capital of France?",
    incorrect_answers: []
  };

  beforeEach(() => {
    render(<QuestionCard questionDetails={questionDetails} />);
  });

  it("renders the question title", () => {
    const titleElement = screen.getByText("What is the capital of France?");
    expect(titleElement).toBeInTheDocument();
  });

  it("renders the category", () => {
    const categoryElement = screen.getByText("General Knowledge");
    expect(categoryElement).toBeInTheDocument();
  });

  it("renders the difficulty as a pill with the correct color", () => {
    const difficultyPill = screen.getByText("medium");
    expect(difficultyPill).toBeInTheDocument();
    expect(difficultyPill).toHaveStyle("background-color: orange");
  });
});
