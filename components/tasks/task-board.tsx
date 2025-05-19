"use client";

import { useState } from "react";
import { TaskCard } from "@/components/tasks/task-card";
import type { Task, TaskStatus } from "@/lib/types";
import { useGetTasks } from "@/hooks/useTask";

export function TaskBoard() {
  const { tasks: mockTasks } = useGetTasks();
  const [tasks, setTasks] = useState<Task[]>(mockTasks);

  const updateTaskStatus = (taskId: string, newStatus: TaskStatus) => {
    setTasks(
      tasks.map((task) =>
        task.id === taskId ? { ...task, status: newStatus } : task,
      ),
    );
  };

  const todoTasks = tasks.filter((task) => task.status === "todo");
  const inProgressTasks = tasks.filter((task) => task.status === "in-progress");
  const doneTasks = tasks.filter((task) => task.status === "done");

  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
      <div className="space-y-4">
        <div className="flex items-center justify-between">
          <h3 className="font-semibold text-lg flex items-center">
            <span className="w-3 h-3 rounded-full bg-amber-500 mr-2"></span>
            To Do
            <span className="ml-2 text-muted-foreground text-sm">
              ({todoTasks.length})
            </span>
          </h3>
        </div>
        <div className="space-y-3">
          {todoTasks.map((task) => (
            <TaskCard
              key={task.id}
              task={task}
              onStatusChange={updateTaskStatus}
            />
          ))}
        </div>
      </div>

      <div className="space-y-4">
        <div className="flex items-center justify-between">
          <h3 className="font-semibold text-lg flex items-center">
            <span className="w-3 h-3 rounded-full bg-blue-500 mr-2"></span>
            In Progress
            <span className="ml-2 text-muted-foreground text-sm">
              ({inProgressTasks.length})
            </span>
          </h3>
        </div>
        <div className="space-y-3">
          {inProgressTasks.map((task) => (
            <TaskCard
              key={task.id}
              task={task}
              onStatusChange={updateTaskStatus}
            />
          ))}
        </div>
      </div>

      <div className="space-y-4">
        <div className="flex items-center justify-between">
          <h3 className="font-semibold text-lg flex items-center">
            <span className="w-3 h-3 rounded-full bg-green-500 mr-2"></span>
            Done
            <span className="ml-2 text-muted-foreground text-sm">
              ({doneTasks.length})
            </span>
          </h3>
        </div>
        <div className="space-y-3">
          {doneTasks.map((task) => (
            <TaskCard
              key={task.id}
              task={task}
              onStatusChange={updateTaskStatus}
            />
          ))}
        </div>
      </div>
    </div>
  );
}
