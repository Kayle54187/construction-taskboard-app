"use client";

import { mockTasks } from "@/lib/mock-data";
import { Task } from "@/lib/types";
import { createContext, useContext, useState } from "react";

type ITaskContext = {
  tasks: Task[];
  createTask: (task: Task) => void;
};

const TaskContext = createContext<ITaskContext | undefined>(undefined);

export const TasksProvider = ({ children }: { children: React.ReactNode }) => {
  const [tasks, setTasks] = useState(mockTasks);
  const createTask = (task: Task) => {
    setTasks((prevTasks) => [...prevTasks, task]);
  };
  return (
    <TaskContext
      value={{
        tasks: tasks,
        createTask: createTask,
      }}
    >
      {children}
    </TaskContext>
  );
};

export function useGetTasks() {
  const context = useContext(TaskContext);
  if (!context) {
    throw new Error("useGetTasks must be used within a TasksManagement");
  }
  return context;
}
