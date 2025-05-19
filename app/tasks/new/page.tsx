import { TaskForm } from "@/components/tasks/task-form"
import { Shell } from "@/components/shell"

export default function NewTaskPage() {
  return (
    <Shell>
      <div className="flex items-center justify-between mb-6">
        <h1 className="text-2xl font-bold tracking-tight">Create New Task</h1>
      </div>
      <TaskForm />
    </Shell>
  )
}
