"use client"

import Link from "next/link"
import { usePathname } from "next/navigation"
import { cn } from "@/lib/utils"
import { Button } from "@/components/ui/button"
import { HardHat, LayoutDashboard, ListTodo, Plus } from "lucide-react"

export function MainNav() {
  const pathname = usePathname()

  return (
    <div className="flex gap-6 md:gap-10">
      <Link href="/" className="hidden items-center space-x-2 md:flex">
        <HardHat className="h-6 w-6" />
        <span className="hidden font-bold sm:inline-block">Site Taskboard</span>
      </Link>
      <nav className="hidden gap-6 md:flex">
        <Link
          href="/dashboard"
          className={cn(
            "flex items-center text-sm font-medium text-muted-foreground transition-colors hover:text-primary",
            pathname === "/dashboard" && "text-primary",
          )}
        >
          <LayoutDashboard className="mr-1 h-4 w-4" />
          Dashboard
        </Link>
        <Link
          href="/tasks"
          className={cn(
            "flex items-center text-sm font-medium text-muted-foreground transition-colors hover:text-primary",
            pathname === "/tasks" && "text-primary",
          )}
        >
          <ListTodo className="mr-1 h-4 w-4" />
          Tasks
        </Link>
      </nav>
      <Button asChild size="sm" className="hidden md:flex">
        <Link href="/tasks/new">
          <Plus className="mr-1 h-4 w-4" />
          New Task
        </Link>
      </Button>
    </div>
  )
}
