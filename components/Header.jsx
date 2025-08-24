"use client";
import {
  Button,
  Dialog,
  DialogPanel,
  Transition,
  TransitionChild,
} from "@headlessui/react";
//import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/outline";
import { Menu, X } from "lucide-react";

import Image from "next/image";
import Link from "next/link";
import { Fragment, useState } from "react";
import ThemeToggle from "./ui/ThemeToggle";

const menu = [
  { id: 1, title: "Home", link: "/" },
  { id: 2, title: "Projects", link: "/projects" },
  { id: 3, title: "Blogs", link: "/blogs" },
  { id: 4, title: "Contact", link: "/contacts" },
  { id: 5, title: "About", link: "/about" },
  { id: 6, title: "Digital Marketing", link: "/digitalmarketing" },
];

export default function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  return (
    <>
      <header className="fixed top-0 px-4 md:px-0  py-4 sm:px-0 left-0 right-0 bg-background/50 backdrop-blur dark:bg-background/20 shadow-sm dark:border-b-gray-800 border-b border-b-gray-300 z-[50]">
        <div className="max-w-6xl mx-auto flex justify-between items-center">
          <div>
            <Link href="/">
              <Image
                className="w-25 "
                src="/logo-light.png"
                width="900"
                height="300"
                alt="Brand"
                priority
              />
            </Link>
          </div>
          <div className="hidden sm:flex justify-center space-x-3">
            {menu.map((menuItem) => (
              <Link
                className="dark:hover:bg-white/5 dark:hover:text-white hover:bg-slate-950 hover:text-white text-slate-800 dark:text-white px-3 py-2 rounded-lg transition-all duration-300  hover:underline-offset-4 font-medium"
                key={menuItem.id}
                href={menuItem.link}
              >
                {menuItem.title}
              </Link>
            ))}
          </div>
          <div className="flex items-center space-x-2">
            <ThemeToggle />
            <Button className="hidden md:flex bg-button text-primary dark:text-secondary hover:bg-button/90 transition outline-none rounded-lg px-4 py-2  cursor-pointer  font-medium">
              Schedule a Call
            </Button>

            <Button
              className="flex md:hidden"
              onClick={() => setMobileMenuOpen(true)}
            >
              <Menu className="size-6" />
            </Button>
          </div>
        </div>
        <Transition show={mobileMenuOpen} as={Fragment}>
          <Dialog onClose={setMobileMenuOpen} className="md:hidden ">
            <TransitionChild
              onClick={() => setMobileMenuOpen(false)}
              as={Fragment}
              enter="transition-opacity ease-out duration-300"
              enterFrom="opacity-0"
              enterTo="opacity-100"
              leave="transition-opacity ease-in duration-200"
              leaveFrom="opacity-100"
              leaveTo="opacity-0"
            >
              <div className="fixed inset-0 bg-black/40 backdrop-blur-sm" />
            </TransitionChild>
            <div className="fixed inset-0 z-[50] flex justify-end">
              <TransitionChild
                as={Fragment}
                enter="transition ease-in-out duration-300 transform"
                enterFrom="translate-x-full opacity-0"
                enterTo="translate-x-0 opacity-100"
                leave="transition ease-in-out duration-300 transform"
                leaveFrom="translate-x-0"
                leaveTo="translate-x-full"
              >
                <DialogPanel className="w-full max-w-xs backdrop-blur bg-background/70 h-full overflow-y-auto  ">
                  <div className="-mt-6 divide-y divide-gray-500/10">
                    <div className="space-y-2 py-6">
                      <button
                        onClick={() => setMobileMenuOpen(false)}
                        className="rounded-md p-2.5 dark:text-foreground"
                      >
                        <X className="size-6" />
                      </button>
                      <div className="flex flex-col space-y-8 pl-2.5">
                        {menu.map((menuItem) => (
                          <Link
                            className=" dark:text-foreground hover:text-red-300"
                            key={menuItem.id}
                            href={menuItem.link}
                            onClick={() => setMobileMenuOpen(false)}
                          >
                            {menuItem.title}
                          </Link>
                        ))}
                      </div>
                    </div>
                  </div>
                </DialogPanel>
              </TransitionChild>
            </div>
          </Dialog>
        </Transition>
      </header>
    </>
  );
}
