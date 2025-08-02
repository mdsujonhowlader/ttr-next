"use client";
import { Button } from "@headlessui/react";
import { useRouter } from "next/navigation";

import { logoutAdmin } from "@/actions/loginAction";
export default function LogoutAdminButton() {
  const router = useRouter();
  async function handleLogout() {
    await logoutAdmin();
    router.push("/login");
  }
  return (
    <Button
      onClick={handleLogout}
      className="hover:bg-primary dark:text-white text-gray-600 cursor-pointer font-semibold w-full px-4 py-2 text-left"
    >
      Logout
    </Button>
  );
}
