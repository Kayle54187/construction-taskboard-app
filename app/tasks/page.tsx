import { TasksHeader } from "@/components/tasks/tasks-header"
import { TaskBoard } from "@/components/tasks/task-board"
import { Shell } from "@/components/shell"

export default function TasksPage() {
  return (
    <Shell>
      <TasksHeader />
      <TaskBoard />
    </Shell>
  )
}
