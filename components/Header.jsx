"use client";
import {
  Dialog,
  DialogPanel,
  Transition,
  TransitionChild,
} from "@headlessui/react";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/outline";
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
];

export default function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  return (
    <>
      <header className="fixed top-0 px-4 sm:px-0 left-0 right-0 bg-background/50 backdrop-blur dark:bg-background/20 shadow-lg border-b border-b-primary z-[50]">
        <div className="max-w-5xl mx-auto flex justify-between items-center">
          <div>
            <Link href="/">
              <Image
                className="w-15 "
                src="/logo-our-final.png"
                width="900"
                height="300"
                alt="Brand"
              />
            </Link>
          </div>
          <div className="hidden sm:flex justify-center space-x-4">
            {menu.map((menuItem) => (
              <Link
                className="hover:underline hover:text-primary  hover:underline-offset-4 font-medium"
                key={menuItem.id}
                href={menuItem.link}
              >
                {menuItem.title}
              </Link>
            ))}
          </div>
          <div className="flex items-center space-x-2">
            <ThemeToggle />
            <button
              type="button"
              className="hidden sm:flex text-foreground cursor-pointer hover:text-primary font-medium"
            >
              Login <span aria-hidden="true">&rarr;</span>
            </button>

            <button
              className="flex md:hidden"
              type="button"
              onClick={() => setMobileMenuOpen(true)}
            >
              <Bars3Icon className="size-6" />
            </button>
          </div>
        </div>
        <Transition show={mobileMenuOpen} as={Fragment} className="md:hidden">
          <Dialog
            open={mobileMenuOpen}
            onClose={setMobileMenuOpen}
            className="md:hidden "
          >
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
                enter="transition-all ease-in-out duration-300 transform"
                enterFrom="translate-x-full"
                enterTo="translate-x-0"
                leave="transition-all ease-in-out duration-300 transform"
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
                        <XMarkIcon className="size-6" />
                      </button>
                      <div className="flex flex-col space-y-2 pl-2.5">
                        {menu.map((menuItem) => (
                          <Link
                            className=" dark:text-foreground hover:text-red-300"
                            key={menuItem.id}
                            href={menuItem.link}
                          >
                            {menuItem.title}
                          </Link>
                        ))}
                      </div>
                    </div>
                    <div className="p-2.5">
                      <button className="dark:text-foreground hover:text-primary">
                        Login <span aria-hidden="true">&rarr;</span>
                      </button>
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
