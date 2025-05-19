"use client"

import { useState } from "react"
import Link from "next/link"
import Image from "next/image"
import { format } from "date-fns"
import type { Task, TaskStatus } from "@/lib/types"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardFooter } from "@/components/ui/card"
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from "@/components/ui/dropdown-menu"
import { AlertCircle, Calendar, ChevronDown, Edit, ImageIcon, MoreHorizontal, User } from "lucide-react"

interface TaskCardProps {
  task: Task
  onStatusChange: (taskId: string, newStatus: TaskStatus) => void
}

export function TaskCard({ task, onStatusChange }: TaskCardProps) {
  const [isImageOpen, setIsImageOpen] = useState(false)

  const priorityColors = {
    high: "bg-red-100 text-red-800 hover:bg-red-100",
    medium: "bg-amber-100 text-amber-800 hover:bg-amber-100",
    low: "bg-green-100 text-green-800 hover:bg-green-100",
  }

  const statusOptions: { value: TaskStatus; label: string }[] = [
    { value: "todo", label: "To Do" },
    { value: "in-progress", label: "In Progress" },
    { value: "done", label: "Done" },
  ]

  return (
    <Card className="overflow-hidden">
      <CardContent className="p-4">
        <div className="flex justify-between items-start mb-2">
          <h4 className="font-medium text-base line-clamp-2">{task.title}</h4>
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <Button variant="ghost" size="icon" className="h-8 w-8">
                <MoreHorizontal className="h-4 w-4" />
                <span className="sr-only">Actions</span>
              </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent align="end">
              <DropdownMenuItem asChild>
                <Link href={`/tasks/${task.id}`}>
                  <Edit className="mr-2 h-4 w-4" />
                  Edit
                </Link>
              </DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>
        </div>

        <div className="flex flex-wrap gap-2 mb-3">
          <Badge variant="outline" className={priorityColors[task.priority]}>
            <AlertCircle className="mr-1 h-3 w-3" />
            {task.priority.charAt(0).toUpperCase() + task.priority.slice(1)}
          </Badge>

          {task.photoUrl && (
            <Badge variant="outline" className="cursor-pointer" onClick={() => setIsImageOpen(!isImageOpen)}>
              <ImageIcon className="mr-1 h-3 w-3" />
              Photo
            </Badge>
          )}
        </div>

        {isImageOpen && task.photoUrl && (
          <div className="mb-3 relative">
            <Image
              src={task.photoUrl || "/placeholder.svg"}
              alt="Task photo"
              width={300}
              height={200}
              className="rounded-md w-full h-auto object-cover"
            />
          </div>
        )}

        <div className="flex items-center text-sm text-muted-foreground mb-1">
          <User className="mr-1 h-3.5 w-3.5" />
          <span>{task.assignee}</span>
        </div>

        <div className="flex items-center text-sm text-muted-foreground">
          <Calendar className="mr-1 h-3.5 w-3.5" />
          <span>Due {format(new Date(task.deadline), "MMM d, yyyy")}</span>
        </div>
      </CardContent>

      <CardFooter className="p-4 pt-0 flex justify-between">
        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <Button variant="outline" size="sm" className="w-full">
              <span>{statusOptions.find((option) => option.value === task.status)?.label}</span>
              <ChevronDown className="ml-2 h-4 w-4" />
            </Button>
          </DropdownMenuTrigger>
          <DropdownMenuContent>
            {statusOptions.map((option) => (
              <DropdownMenuItem
                key={option.value}
                onClick={() => onStatusChange(task.id, option.value)}
                disabled={option.value === task.status}
              >
                {option.label}
              </DropdownMenuItem>
            ))}
          </DropdownMenuContent>
        </DropdownMenu>
      </CardFooter>
    </Card>
  )
}
