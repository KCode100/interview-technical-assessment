import {
  Card,
  CardHeader,
  CardTitle,
  CardContent,
  CardFooter,
  Pill
} from "../layout-components";
import { QuestionCardContent } from "./QuestionCardContent";

export const QuestionCard = ({ questionDetails }) => {
  const { category, type, difficulty } = questionDetails;
  return (
    <Card>
      <CardHeader>
        <CardTitle as="h3">{questionDetails.question}</CardTitle>
      </CardHeader>
      <CardContent>
        <QuestionCardContent questionDetails={questionDetails} />
      </CardContent>
      <CardFooter>
        <Pill>{category}</Pill>
        <Pill>Type: {type}</Pill>
        <Pill
          color={
            difficulty === "hard"
              ? "red"
              : difficulty === "medium"
              ? "orange"
              : "green"
          }
        >
          {difficulty}
        </Pill>
      </CardFooter>
    </Card>
  );
};
