"use client";

import {
  Disclosure,
  DisclosureButton,
  DisclosurePanel,
} from "@headlessui/react";
import { ChevronDown, Eye, Plus } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

export default function Sidebar() {
  return (
    <div className="hidden w-64 h-auto md:flex flex-col space-y-5 bg-background/50 backdrop-blur dark:bg-background/20 shadow-lg border-r border-r-primary">
      {/* Logo */}
      <div className="self-center   w-full p-4">
        <Link href="/dashboard">
          <Image
            className="w-25"
            src="/logo-light.png"
            width="900"
            height="300"
            alt="Brand"
          />
        </Link>
      </div>

      {/* Navigation */}
      <ul className="space-y-2 px-4 pb-6">
        <li>
          <Link href="/dashboard" className="block py-2 hover:text-primary">
            Dashboard
          </Link>
        </li>

        {/* Collapsible Service Menu */}
        <Disclosure>
          <DisclosureButton className="group flex justify-between items-center w-full py-2 text-left text-sm font-medium hover:text-primary focus:outline-none">
            <span>Service</span>
            <ChevronDown className="w-5 h-5  transition-transform duration-500 group-data-open:rotate-180" />
          </DisclosureButton>
          <DisclosurePanel
            as="ul"
            className="ml-4 pl-2 border-l border-primary space-y-2"
          >
            <li>
              <Link
                href="/dashboard/add-service"
                className="block py-1 text-sm hover:text-primary"
              >
                <span className="flex items-center gap-2">
                  <Plus size="15" /> Add Service
                </span>
              </Link>
            </li>
            <li>
              <Link
                href="/dashboard/services"
                className="block py-1 text-sm hover:text-primary"
              >
                <span className="flex items-center gap-2">
                  <Eye size="15" /> View Service
                </span>
              </Link>
            </li>
          </DisclosurePanel>
        </Disclosure>

        <li>
          <Link
            href="/dashboard/settings"
            className="block py-2 hover:text-primary"
          >
            Settings
          </Link>
        </li>
        <li>
          <Link
            href="/dashboard/upload-files"
            className="block py-2 hover:text-primary"
          >
            Upload Files
          </Link>
        </li>
      </ul>
    </div>
  );
}
