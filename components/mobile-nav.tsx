"use client"

import Link from "next/link"
import { usePathname } from "next/navigation"
import { Button } from "@/components/ui/button"
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet"
import { HardHat, LayoutDashboard, ListTodo, Menu, Plus } from "lucide-react"
import { cn } from "@/lib/utils"

interface MobileNavProps {
  isOpen: boolean
  onOpenChange: (open: boolean) => void
}

export function MobileNav({ isOpen, onOpenChange }: MobileNavProps) {
  const pathname = usePathname()

  return (
    <div className="md:hidden">
      <Sheet open={isOpen} onOpenChange={onOpenChange}>
        <SheetTrigger asChild>
          <Button variant="ghost" size="icon" className="md:hidden">
            <Menu className="h-5 w-5" />
            <span className="sr-only">Toggle menu</span>
          </Button>
        </SheetTrigger>
        <SheetContent side="left" className="pr-0">
          <div className="px-7">
            <Link href="/" className="flex items-center space-x-2" onClick={() => onOpenChange(false)}>
              <HardHat className="h-6 w-6" />
              <span className="font-bold">Site Taskboard</span>
            </Link>
          </div>
          <div className="mt-8 px-7">
            <Button asChild size="sm" className="w-full">
              <Link href="/tasks/new" onClick={() => onOpenChange(false)}>
                <Plus className="mr-1 h-4 w-4" />
                New Task
              </Link>
            </Button>
          </div>
          <nav className="mt-6 flex flex-col gap-4 px-2">
            <Link
              href="/dashboard"
              onClick={() => onOpenChange(false)}
              className={cn(
                "flex items-center gap-2 px-5 py-2 text-base font-medium transition-colors hover:text-primary",
                pathname === "/dashboard" && "text-primary",
              )}
            >
              <LayoutDashboard className="h-5 w-5" />
              Dashboard
            </Link>
            <Link
              href="/tasks"
              onClick={() => onOpenChange(false)}
              className={cn(
                "flex items-center gap-2 px-5 py-2 text-base font-medium transition-colors hover:text-primary",
                pathname === "/tasks" && "text-primary",
              )}
            >
              <ListTodo className="h-5 w-5" />
              Tasks
            </Link>
          </nav>
        </SheetContent>
      </Sheet>
      <Link href="/" className="flex items-center space-x-2 md:hidden">
        <HardHat className="h-6 w-6" />
      </Link>
    </div>
  )
}
