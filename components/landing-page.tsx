"use client";
import { Navbar } from "./navbar";
import { Dashboard } from "./dashboard";
import Sidebar from "./sidebar";
import { Separator } from "./ui/separator";

export function LandingPage() {
  return (
    <div className="flex min-h-screen bg-background">
      <div className="flex flex-col">
        <div className="flex items-center gap-2 pt-4 px-2 pb-1">
          <div className="h-8 w-8 rounded-lg bg-primary/10">
            <svg
              className=" h-8 w-8 p-2 text-primary"
              fill="none"
              height="24"
              stroke="currentColor"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              viewBox="0 0 24 24"
              width="24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path d="M12 2H2v10l9.29 9.29c.94.94 2.48.94 3.42 0l6.58-6.58c.94-.94.94-2.48 0-3.42L12 2Z" />
              <path d="M7 7h.01" />
            </svg>
          </div>
          <span className="text-lg font-semibold">Power Analytics</span>
        </div>
        <Separator />
        <Sidebar />
      </div>
      <div className="flex flex-col w-full">
        <div className="flex w-full">
          <Navbar />
        </div>
        <Dashboard />
      </div>
    </div>
  );
}
