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
const sideMenu = [
  {
    id: 1,
    menuName: "Dashboard",
    href: "/dashboard",
    icon: <LayoutDashboard className="size-5 stroke-2" aria-hidden />,
    children: [],
  },
  {
    id: 2,
    menuName: "Services",
    href: "/dashboard/services",
    icon: <FolderCog className="size-5 stroke-2" aria-hidden />,
    children: [
      {
        id: 50,
        menuName: "Add Service",
        href: "/dashboard/services/add-service",
        icon: <Plus size="15" className="stroke-2" />,
      },
      {
        id: 51,
        menuName: "View Services",
        href: "/dashboard/services/view-services",
        icon: <Eye size="15" />,
      },
    ],
  },
  {
    id: 3,
    menuName: "Settings",
    href: "/dashboard/settings",
    icon: <Settings className="size-5 stroke-2" aria-hidden />,
    children: [],
  },
  {
    id: 4,
    menuName: "Upload Files",
    href: "/dashboard/upload-files",
    icon: <FileImage className="size-5 stroke-2" aria-hidden />,
    children: [],
  },
  {
    id: 5,
    menuName: "Blogs",
    icon: <FolderCog className="size-5 stroke-2" aria-hidden />,
    children: [
      {
        id: 52,
        menuName: "Create Blogs",
        href: "/dashboard/blogs/create-blog",
        icon: <Plus size="15" className="stroke-2" />,
      },
      {
        id: 53,
        menuName: "View Blogs",
        href: "/dashboard/blogs/view-blogs",
        icon: <Eye size="15" className="stroke-2" />,
      },
    ],
  },
];
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
        {sideMenu.map((menu) => {
          return (
            <li key={menu.id} className="transition-colors duration-300 ">
              {menu.children.length > 0 ? (
                <Disclosure>
                  <DisclosureButton className="group flex justify-between items-center w-full py-2 text-left transition-transform duration-500 font-medium hover:text-primary overflow-hidden focus:outline-none">
                    <div className="font-medium tracking-tight flex items-center gap-2">
                      {menu.icon}
                      {menu.menuName}
                    </div>
                    <ChevronDown className="size-5 transition-transform duration-500 group-data-open:rotate-180" />
                  </DisclosureButton>
                  <DisclosurePanel
                    transition
                    as="ul"
                    className="ml-4 pl-2 border-l-2 border-primary space-y-2  transition duration-500 ease-out data-closed:-translate-y-6 data-closed:opacity-0"
                  >
                    <li className="transition-colors duration-300 ">
                      {menu.children.map((child) => (
                        <Link
                          key={child.id}
                          href={child.href}
                          className="block py-1 font-medium hover:text-primary"
                        >
                          <span className="flex items-center gap-2">
                            {child.icon} {child.menuName}
                          </span>
                        </Link>
                      ))}
                    </li>
                  </DisclosurePanel>
                </Disclosure>
              ) : (
                <Link
                  href={menu.href}
                  className="flex items-center gap-2 font-medium tracking-tight py-2 hover:text-primary"
                >
                  {menu.icon}
                  {menu.menuName}
                </Link>
              )}
            </li>
          );
        })}
      </ul>
    </div>
  );
}
