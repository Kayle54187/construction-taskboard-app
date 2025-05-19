import { Button } from "@/components/ui/button"
import Link from "next/link"
import { Plus } from "lucide-react"

export function DashboardHeader() {
  return (
    <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between mb-6">
      <h1 className="text-2xl font-bold tracking-tight">Dashboard</h1>
      <Button asChild className="sm:w-auto w-full">
        <Link href="/tasks/new">
          <Plus className="mr-1 h-4 w-4" />
          New Task
        </Link>
      </Button>
    </div>
  )
}
