import { Popover, PopoverButton, PopoverPanel } from "@headlessui/react";
import { User } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import LogoutAdminButton from "./LogoutAdminButton";

export default function ProfileIcon() {
  return (
    <>
      <Popover className="relative">
        <PopoverButton className="outline-none rounded-full">
          <Image
            src="/icons/user-1.jpg"
            alt="profile icon"
            width="100"
            height="100"
            className="w-10 h-10 rounded-full cursor-pointer"
          />
        </PopoverButton>
        <PopoverPanel
          anchor="bottom"
          className="flex flex-col bg-white rounded-lg shadow-2xl mt-4 -ml-4 p-2 "
        >
          <Link
            href="dashboard/profile"
            className=" hover:bg-gray-50 px-4 py-2 inline-flex justify-center items-center gap-2 cursor-pointer font-medium w-full text-sm"
          >
            <span>My Profile</span>
            <User className="size-4 stroke-2   text-gray-500" />
          </Link>
          <div className="w-full  border-t border-t-gray-300  mt-2"></div>
          <LogoutAdminButton />
        </PopoverPanel>
      </Popover>
    </>
  );
}
