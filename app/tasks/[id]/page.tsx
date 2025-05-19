import { TaskForm } from "@/components/tasks/task-form"
import { Shell } from "@/components/shell"

export default function EditTaskPage({ params }: { params: { id: string } }) {
  return (
    <Shell>
      <div className="flex items-center justify-between mb-6">
        <h1 className="text-2xl font-bold tracking-tight">Edit Task</h1>
      </div>
      <TaskForm taskId={params.id} />
    </Shell>
  )
}
