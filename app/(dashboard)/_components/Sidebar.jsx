"use client";

import {
  Disclosure,
  DisclosureButton,
  DisclosurePanel,
} from "@headlessui/react";
import {
  ChevronDown,
  Eye,
  FileImage,
  FolderCog,
  LayoutDashboard,
  Plus,
  Settings,
} from "lucide-react";
import Image from "next/image";
import Link from "next/link";

export default function Sidebar() {
  return (
    <div
      className="hidden  h-full
     md:flex flex-col space-y-5  shadow-sm"
    >
      {/* Logo */}
      <div className="self-center p-4">
        <Link href="/dashboard">
          <Image
            className="w-30 object-cover"
            src="/logo-light.png"
            width={900}
            height={300}
            alt="Brand"
            priority
          />
        </Link>
      </div>

      {/* Navigation */}
      <ul className="space-y-2 px-4 pb-6">
        <li>
          <Link
            href="/dashboard"
            className="flex items-center gap-2 font-medium tracking-tight py-2 hover:text-primary"
          >
            <LayoutDashboard className="size-5 stroke-2 " aria-hidden />
            Dashboard
          </Link>
        </li>

        <Disclosure>
          <DisclosureButton className="group flex justify-between items-center w-full py-2 text-left transition-transform duration-500 font-medium hover:text-primary overflow-hidden focus:outline-none">
            <div className="font-medium tracking-tight flex items-center gap-2">
              <FolderCog className="size-5 stroke-2" aria-hidden />
              Service
            </div>
            <ChevronDown className="size-5 transition-transform duration-500 group-data-open:rotate-180" />
          </DisclosureButton>
          <DisclosurePanel
            transition
            as="ul"
            className="ml-4 pl-2 border-l-2 border-primary space-y-2  transition duration-500 ease-out data-closed:-translate-y-6 data-closed:opacity-0"
          >
            <li>
              <Link
                href="/dashboard/add-service"
                className="block py-1 font-medium hover:text-primary"
              >
                <span className="flex items-center gap-2">
                  <Plus size="15" className="stroke-2" /> Add Service
                </span>
              </Link>
            </li>
            <li>
              <Link
                href="/dashboard/services"
                className="block py-1 font-medium hover:text-primary"
              >
                <span className="flex items-center gap-2">
                  <Eye size="15" /> View Service
                </span>
              </Link>
            </li>
          </DisclosurePanel>
        </Disclosure>

        <li className="transition-colors duration-300 ">
          <Link
            href="/dashboard/settings"
            className=" py-2 font-medium flex items-center gap-2 tracking-tight hover:text-primary"
          >
            <Settings className="size-5 stroke-2" aria-hidden />
            Settings
          </Link>
        </li>
        <li className="transition-colors duration-300">
          <Link
            href="/dashboard/upload-files"
            className=" py-2 font-medium hover:text-primary  flex items-center gap-2"
          >
            <FileImage className="size-5 stroke-2" aria-hidden />
            Upload Files
          </Link>
        </li>
      </ul>
    </div>
  );
}
