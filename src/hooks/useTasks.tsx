import { useContext } from "react";
import { TaskContext } from "../context/TasksContext";

export const useTasks = () => {
  const context = useContext(TaskContext);

  return context;
};