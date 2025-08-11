import { Transition } from "@headlessui/react";
import clsx from "clsx";

export default function ({ show }) {
  return (
    <>
      <Transition show={show}>
        <div
          className={clsx(
            " bg-white absolute top-0 left-1/2 p-4 rounded-lg shadow-2xl ",
            [
              // Base styles
              "absolute  border border-gray-300 transition ease-in-out",
              // Shared closed styles
              "data-closed:opacity-0",
              // Entering styles
              "data-enter:duration-200 data-enter:data-closed:-translate-y-full data-enter:blur-xl",
              // Leaving styles
              "data-leave:duration-300 data-leave:data-closed:translate-y-full",
            ]
          )}
        >
          <h3 className="text-black font-semibold tracking-tight text-2xl w-3/4">
            Are you sure to Delete?
          </h3>
          <div className="flex space-x-2">
            <button className="inline-flex items-center px-3 py-1 mt-4 bg-rose-200 shadow-sm rounded-lg text-rose-500 font-semibold tracking-tight border-2 border-rose-500 hover:bg-rose-500 hover:text-white transition duration-200">
              Delete user
            </button>
            <button className="inline-flex items-center px-3 py-1 mt-4 bg-emerald-200 shadow-sm rounded-lg text-emerald-500 font-semibold tracking-tight border-2 border-emerald-500 hover:bg-emerald-500 hover:text-white transition duration-200">
              Cancel
            </button>
          </div>
        </div>
      </Transition>
    </>
  );
}
