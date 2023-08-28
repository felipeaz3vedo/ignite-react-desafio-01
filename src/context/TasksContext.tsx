import {
  Dispatch,
  ReactNode,
  SetStateAction,
  createContext,
  useState,
} from "react";

type Task = {
  id: string;
  name: string;
  isCompleted: boolean;
};

interface ITaskContext {
  tasks: Task[];
  setTasks: Dispatch<SetStateAction<Task[] | []>>;
  addTask: (name: string) => void;
  toggleStatus: (id: string) => void;
  removeTask: (id: string) => void;
}

interface ITaskContextProvider {
  children: ReactNode;
}

export const TaskContext = createContext({} as ITaskContext);

export function TaskContextProvider({ children }: ITaskContextProvider) {
  const [tasks, setTasks] = useState<Task[] | []>([]);

  const addTask = (name: string) => {
    const newTask = {
      id: String(crypto.randomUUID()),
      name,
      isCompleted: false,
    };

    setTasks([...tasks, newTask]);
  };

  const toggleStatus = (id: string) => {
    const updatedTasks = tasks.map(task => {
      if (task.id === id)
        return {
          ...task,
          isCompleted: !task.isCompleted,
        };

      return task;
    });

    setTasks(updatedTasks);
  };

  const removeTask = (id: string) => {
    setTasks(tasks.filter(task => task.id !== id));
  };

  return (
    <TaskContext.Provider
      value={{ tasks, setTasks, addTask, toggleStatus, removeTask }}
    >
      {children}
    </TaskContext.Provider>
  );
}
