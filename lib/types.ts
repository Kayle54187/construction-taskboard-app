export type TaskPriority = "low" | "medium" | "high"
export type TaskStatus = "todo" | "in-progress" | "done"

export interface Task {
  id: string
  title: string
  description?: string
  priority: TaskPriority
  assignee: string
  deadline: string
  status: TaskStatus
  photoUrl?: string
}
