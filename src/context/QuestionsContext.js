import { createContext, useEffect, useState } from "react";

export const QuestionsContext = createContext();

export const QuestionsProvider = ({ children }) => {
  const [loading, setLoading] = useState(true);
  const [questionsData, setQuestionsData] = useState([]);

  async function fetchQuestionsData() {
    try {
      const response = await fetch("../../data/questions.json");
      if (!response.ok) {
        throw new Error("Network response was not successful");
      }

      const data = await response.json();
      setQuestionsData(data.questions);
      setLoading(false);
      console.log(data);
    } catch (error) {
      console.error("Error while fetching data:", error);
      setLoading(false);
    }
  }

  useEffect(() => {
    if (questionsData.length === 0) {
      fetchQuestionsData();
    }
  }, []);

  return (
    <QuestionsContext.Provider
      value={{ loading, questionsData, setQuestionsData }}
    >
      {children}
    </QuestionsContext.Provider>
  );
};
