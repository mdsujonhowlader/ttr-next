"use client";
import { Button } from "@headlessui/react";
import { LogOut } from "lucide-react";
export default function LogoutAdminButton() {
  async function handleLogout() {
    await fetch("/api/auth/logout", { method: "POST" });
    window.location.href = "/login";
  }
  return (
    <Button
      onClick={handleLogout}
      className="inline-flex mt-2 justify-start hover:bg-gray-50 items-center  gap-2 cursor-pointer font-medium w-full text-sm px-4 py-2"
    >
      Logout
      <LogOut className="size-3 stroke-1" />
    </Button>
  );
}
