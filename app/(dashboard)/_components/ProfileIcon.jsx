import { Popover, PopoverButton, PopoverPanel } from "@headlessui/react";
import Image from "next/image";
import Link from "next/link";
import LogoutAdminButton from "./LogoutAdminButton";

export default function ProfileIcon() {
  return (
    <>
      <Popover className="relative ">
        <PopoverButton className="outline-none rounded-full">
          <Image
            src="/icons/next.svg"
            alt="profile icon"
            width="100"
            height="100"
            className=" w-10 h-10 rounded-full cursor-pointer border-2 border-white   outline-none"
          />
        </PopoverButton>
        <PopoverPanel
          anchor="bottom"
          className="flex flex-col bg-white  dark:bg-gray-700 w-[200px] rounded-lg  shadow-2xl mt-4 -ml-5"
        >
          <Link
            href="dashboard/profile"
            className="hover:bg-primary w-full dark:text-white text-gray-600 font-semibold py-2 px-4"
          >
            {" "}
            Profile
          </Link>
          <LogoutAdminButton />
        </PopoverPanel>
      </Popover>
    </>
  );
}
