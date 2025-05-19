import { DashboardHeader } from "@/components/dashboard/dashboard-header"
import { DashboardStats } from "@/components/dashboard/dashboard-stats"
import { TaskBoard } from "@/components/tasks/task-board"
import { Shell } from "@/components/shell"

export default function DashboardPage() {
  return (
    <Shell>
      <DashboardHeader />
      <DashboardStats />
      <TaskBoard />
    </Shell>
  )
}
