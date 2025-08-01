import { createContext } from "react";

export const QuizContext = createContext();

export const QuizProvider = ({ children }) => {
  const value = { name: "Quiz Context" }; // Example value, replace with actual state management logic
  return <QuizContext.Provider value={value}>{children}</QuizContext.Provider>;
};
