"use client";

import { Transition } from "@headlessui/react";
import clsx from "clsx";
import { CheckCircle, XCircle } from "lucide-react";
import { Fragment, useEffect, useState } from "react";

export default function Toast({ message, type = "success", duration = 3000 }) {
  const [show, setShow] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => setShow(false), duration);
    return () => clearTimeout(timer);
  }, [duration]);

  return (
    <div className="fixed bottom-6 right-6 z-50">
      <Transition
        as={Fragment}
        show={show}
        enter="transform transition ease-out duration-300"
        enterFrom="translate-y-4 opacity-0"
        enterTo="translate-y-0 opacity-100"
        leave="transition ease-in duration-200 transform"
        leaveFrom="opacity-100"
        leaveTo="opacity-0"
      >
        <div
          className={clsx(
            "flex items-center gap-3 px-4 py-3 rounded-lg shadow-lg text-white",
            type === "success" ? "bg-green-600" : "bg-red-600"
          )}
        >
          {type === "success" ? (
            <CheckCircle className="w-5 h-5 text-white" />
          ) : (
            <XCircle className="w-5 h-5 text-white" />
          )}
          <p className="text-sm">{message}</p>
        </div>
      </Transition>
    </div>
  );
}
