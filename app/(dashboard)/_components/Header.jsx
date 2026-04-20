"use client";

import { Button } from "@headlessui/react";
import { AlignRight, PanelLeftClose, PanelLeftOpen } from "lucide-react";
import ProfileIcon from "./ProfileIcon";
import { useSidebar } from "./SidebarContext";

export default function HeaderDashboard() {
  const { open, setOpen } = useSidebar();

  return (
    <header className="w-full bg-white backdrop-blur dark:bg-background/20 shadow-sm flex items-center px-6 py-2">
      <Button
        onClick={() => setOpen(!open)}
        className="hover:text-primary cursor-pointer p-2 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-700 transition-colors"
      >
        {open ? <PanelLeftClose className="w-5 h-5" /> : <PanelLeftOpen className="w-5 h-5" />}
      </Button>
      <div className="ml-auto">
        <ProfileIcon />
      </div>
    </header>
  );
}
