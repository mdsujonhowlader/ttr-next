import { Popover, PopoverButton, PopoverPanel } from "@headlessui/react";
import { UserIcon } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import LogoutAdminButton from "./LogoutAdminButton";

export default function ProfileIcon() {
  return (
    <>
      <Popover className="relative ">
        <PopoverButton className="outline-none rounded-full">
          <Image
            src="/icons/user-1.jpg"
            alt="profile icon"
            width="100"
            height="100"
            className=" w-10 h-10 rounded-full cursor-pointer border-2 border-white   outline-none"
          />
        </PopoverButton>
        <PopoverPanel
          anchor="bottom"
          className="flex flex-col bg-white w-[200px] rounded-lg  shadow-2xl mt-4 -ml-5"
        >
          <h4
            className="text-center font-bold uppercase tracking-tight text-gray-400 my-3
          "
          >
            Account
          </h4>
          <Link
            href="dashboard/profile"
            className="hover:bg-gray-50 w-full inline-flex items-center gap-2 dark:text-white text-gray-600 font-semibold py-2 px-4"
          >
            <UserIcon className="size-4 stroke-primary/80 stroke-3 " />
            My Profile
          </Link>
          <div className="px-4 py-4">
            <LogoutAdminButton />
          </div>
        </PopoverPanel>
      </Popover>
    </>
  );
}
