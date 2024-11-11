"use client";

import { Bell, Grid, Moon, Search, Settings } from "lucide-react";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Input } from "@/components/ui/input";

export function Navbar() {
  return (
    <header className="flex h-14 items-center gap-4 border-b bg-background px-6 w-full">
      <div className="relative flex-1 max-w-md">
        <Search className="absolute left-2.5 top-2.5 h-4 w-4 text-muted-foreground" />
        <Input
          type="search"
          placeholder="Search here..."
          className="pl-8 bg-background"
        />
      </div>
      <Button variant="ghost" size="icon" className="ml-auto">
        <Grid className="h-5 w-5" />
        <span className="sr-only">Toggle menu</span>
      </Button>
      <DropdownMenu>
        <DropdownMenuTrigger asChild>
          <Button variant="ghost" className="flex items-center gap-2">
            <Avatar className="h-8 w-8">
              <AvatarImage src="/placeholder.svg" alt="User" />
              <AvatarFallback>JD</AvatarFallback>
            </Avatar>
            <span className="text-sm font-medium">JohnathanDoe</span>
          </Button>
        </DropdownMenuTrigger>
        <DropdownMenuContent align="end" className="w-56">
          <DropdownMenuLabel>My Account</DropdownMenuLabel>
          <DropdownMenuSeparator />
          <DropdownMenuItem>Profile</DropdownMenuItem>
          <DropdownMenuItem>Settings</DropdownMenuItem>
          <DropdownMenuItem>Notifications</DropdownMenuItem>
          <DropdownMenuSeparator />
          <DropdownMenuItem>Log out</DropdownMenuItem>
        </DropdownMenuContent>
      </DropdownMenu>
      <Button variant="ghost" size="icon">
        <Moon className="h-5 w-5" />
        <span className="sr-only">Toggle theme</span>
      </Button>
      <Button variant="ghost" size="icon">
        <Bell className="h-5 w-5" />
        <span className="sr-only">Notifications</span>
      </Button>
      <Button variant="ghost" size="icon">
        <Settings className="h-5 w-5" />
        <span className="sr-only">Settings</span>
      </Button>
    </header>
  );
}
