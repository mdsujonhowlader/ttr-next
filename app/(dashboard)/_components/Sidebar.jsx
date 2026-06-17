"use client";

import { usePathname, useRouter } from "next/navigation";
import {
  Disclosure,
  DisclosureButton,
  DisclosurePanel,
} from "@headlessui/react";
import {
  ChevronDown,
  LayoutDashboard,
  Settings,
  FileImage,
  Newspaper,
  Plus,
  Eye,
  Wrench,
  LogOut,
} from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { useSidebar } from "./SidebarContext";

const menuItems = [
  {
    title: "Overview",
    items: [
      {
        name: "Dashboard",
        href: "/dashboard",
        icon: LayoutDashboard,
      },
    ],
  },
  {
    title: "Manage",
    items: [
      {
        name: "Services",
        icon: Wrench,
        children: [
          { name: "Add Service", href: "/dashboard/services/add-service", icon: Plus },
          { name: "View Services", href: "/dashboard/services/view-services", icon: Eye },
        ],
      },
      {
        name: "Projects",
        icon: Wrench,
        children: [
          { name: "Add Category", href: "/dashboard/projects/add-project", icon: Plus },
          { name: "Add Project", href: "/dashboard/projects/add-project-to-tab", icon: Plus },
          { name: "View Projects", href: "/dashboard/projects/view-projects", icon: Eye },
        ],
      },
      {
        name: "Blogs",
        icon: Newspaper,
        children: [
          { name: "Create Blog", href: "/dashboard/blogs/create-blog", icon: Plus },
          { name: "View Blogs", href: "/dashboard/blogs/view-blogs", icon: Eye },
        ],
      },
      {
        name: "Upload Files",
        icon: FileImage,
        href: "/dashboard/upload-files",
      },
      {
        name: "Settings",
        icon: Settings,
        href: "/dashboard/settings",
      },
    ],
  },
];

export default function Sidebar() {
  const { open, width } = useSidebar();
  const pathname = usePathname();
  const router = useRouter();

  async function handleLogout() {
    const { logoutAdmin } = await import("@/actions/loginAction");
    const res = await logoutAdmin();
    if (res.success) {
      router.push("/login");
    }
  }

  const isActive = (href) => {
    if (!href) return false;
    return pathname === href || pathname.startsWith(href + "/");
  };

  return (
    <aside
      className="hidden md:flex flex-col h-screen fixed left-0 top-0 z-40 border-r border-gray-100 dark:border-gray-700 bg-white dark:bg-gray-800"
      style={{ width: `${width}px` }}
    >
      <div className="flex flex-col h-full">
        {/* Logo */}
        <div className="h-16 flex items-center px-4 border-b border-gray-100 dark:border-gray-700">
          <Link href="/dashboard" className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-primary to-primary/70 flex items-center justify-center shadow-lg shadow-primary/30">
              <span className="text-white font-bold text-xl">T</span>
            </div>
            {open && (
              <span className="font-bold text-lg text-gray-800 dark:text-white">
                TechResol
              </span>
            )}
          </Link>
        </div>

        {/* Menu */}
        <div className="flex-1 overflow-y-auto py-4">
          {menuItems.map((section, sectionIdx) => (
            <div key={section.title} className="px-3 mb-4">
              {open && (
                <p className="px-3 mb-2 text-xs font-semibold text-gray-400 uppercase tracking-wider">
                  {section.title}
                </p>
              )}
              <ul className="space-y-1">
                {section.items.map((item) => {
                  const Icon = item.icon;
                  const active = isActive(item.href);
                  const hasActiveChild = item.children?.some((child) => isActive(child?.href));

                  if (item.children) {
                    return (
                      <li key={item.name}>
                        <Disclosure defaultOpen={hasActiveChild}>
                          <DisclosureButton
                            className={`group w-full flex items-center gap-3 px-3 py-2.5 rounded-xl text-sm font-medium transition-all duration-200 ${
                              hasActiveChild
                                ? "bg-primary/10 text-primary"
                                : "text-gray-600 dark:text-gray-300 hover:bg-gray-50 dark:hover:bg-gray-700 hover:text-gray-900 dark:hover:text-white"
                            }`}
                          >
                            <div
                              className={`w-8 h-8 rounded-lg flex items-center justify-center transition-colors ${
                                hasActiveChild
                                  ? "bg-primary text-white"
                                  : "bg-gray-100 dark:bg-gray-700 group-hover:bg-primary/10 group-hover:text-primary"
                              }`}
                            >
                              <Icon className="w-4 h-4" />
                            </div>
                            {open && (
                              <>
                                <span className="flex-1 text-left">{item.name}</span>
                                <ChevronDown className="w-4 h-4 transition-transform duration-200 group-data-open:rotate-180" />
                              </>
                            )}
                          </DisclosureButton>
                          {open && (
                            <DisclosurePanel className="ml-4 pl-4 mt-1 space-y-1 border-l-2 border-gray-100 dark:border-gray-700">
                              {item.children.map((child) => {
                                const ChildIcon = child.icon;
                                const childActive = isActive(child.href);
                                return (
                                  <Link
                                    key={child.name}
                                    href={child.href}
                                    className={`flex items-center gap-3 px-3 py-2 rounded-lg text-sm font-medium transition-colors ${
                                      childActive
                                        ? "text-primary bg-primary/10"
                                        : "text-gray-500 hover:text-gray-900 dark:text-gray-400 dark:hover:text-white hover:bg-gray-50 dark:hover:bg-gray-700"
                                    }`}
                                  >
                                    <ChildIcon className="w-4 h-4" />
                                    <span>{child.name}</span>
                                  </Link>
                                );
                              })}
                            </DisclosurePanel>
                          )}
                        </Disclosure>
                      </li>
                    );
                  }

                  return (
                    <li key={item.name}>
                      <Link
                        href={item.href}
                        className={`flex items-center gap-3 px-3 py-2.5 rounded-xl text-sm font-medium transition-all duration-200 ${
                          active
                            ? "bg-primary text-white shadow-lg shadow-primary/25"
                            : "text-gray-600 dark:text-gray-300 hover:bg-gray-50 dark:hover:bg-gray-700 hover:text-gray-900 dark:hover:text-white"
                        }`}
                      >
                        <div
                          className={`w-8 h-8 rounded-lg flex items-center justify-center transition-colors ${
                            active
                              ? "bg-white/20"
                              : "bg-gray-100 dark:bg-gray-700 group-hover:bg-primary/10 group-hover:text-primary"
                          }`}
                        >
                          <Icon className="w-4 h-4" />
                        </div>
                        {open && <span>{item.name}</span>}
                      </Link>
                    </li>
                  );
                })}
              </ul>
            </div>
          ))}
        </div>

        {/* Footer */}
        <div className="p-3 border-t border-gray-100 dark:border-gray-700">
          <button
            onClick={handleLogout}
            className={`flex items-center gap-3 px-3 py-2.5 rounded-xl text-sm font-medium text-red-600 hover:bg-red-50 dark:hover:bg-red-900/20 transition-colors w-full ${
              !open && "justify-center"
            }`}
          >
            <LogOut className="w-5 h-5" />
            {open && <span>Logout</span>}
          </button>
        </div>
      </div>
    </aside>
  );
}