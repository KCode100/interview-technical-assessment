import { Body, PageHeader, GlobalStyles } from "./layout-components";
import { QuestionBuilderContent } from "./components";
import { QuestionsProvider } from "./context/QuestionsContext";

export const App = () => {
  return (
    <>
      <PageHeader />
      <Body>
        <QuestionsProvider>
          <QuestionBuilderContent />
        </QuestionsProvider>
      </Body>
      <GlobalStyles />
    </>
  );
};
