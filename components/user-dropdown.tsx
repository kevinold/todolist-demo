"use client"

import { Avatar, AvatarFallback, AvatarImage } from "@radix-ui/react-avatar"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@radix-ui/react-dropdown-menu"

import { Button } from "./ui/button"

export default function UserDropown() {
  return (
    <DropdownMenu className="ml-auto">
      <DropdownMenuTrigger asChild>
        <Button
          className="ml-auto h-8 w-8 rounded-full border border-gray-200 dark:border-gray-800"
          size="icon"
          variant="ghost"
        >
          <Avatar>
            <AvatarImage alt="Avatar" src="/placeholder-user.jpg" />
            <AvatarFallback>U</AvatarFallback>
          </Avatar>
          <span className="sr-only">Toggle user menu</span>
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent align="end">
        <DropdownMenuLabel>My Account</DropdownMenuLabel>
        <DropdownMenuSeparator />
        <DropdownMenuItem>Settings</DropdownMenuItem>
        <DropdownMenuItem>Support</DropdownMenuItem>
        <DropdownMenuSeparator />
        <DropdownMenuItem>Logout</DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  )
}
