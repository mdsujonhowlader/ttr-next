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
      className=" bg-rose-100 border-2 text-rose-500 border-rose-500 justify-center hover:bg-rose-600/30 hover:text-black  inline-flex items-center rounded-lg gap-2 cursor-pointer font-semibold w-full text-sn px-4 py-1 text-center"
    >
      Logout
      <LogOut className="size-5 stroke-2" />
    </Button>
  );
}
