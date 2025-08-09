"use client";
import { Button } from "@headlessui/react";
import { useRouter } from "next/navigation";

import { logoutAdmin } from "@/actions/loginAction";
import { LogOut } from "lucide-react";
export default function LogoutAdminButton() {
  const router = useRouter();
  async function handleLogout() {
    await logoutAdmin();
    router.push("/login");
  }
  return (
    <Button
      onClick={handleLogout}
      className=" bg-rose-600 justify-center hover:bg-rose-600/80 text-white inline-flex items-center rounded-lg gap-2 cursor-pointer font-semibold w-full px-4 py-2 text-center"
    >
      Logout
      <LogOut className="size-5 stroke-2" />
    </Button>
  );
}
