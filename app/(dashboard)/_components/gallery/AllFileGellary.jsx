"use client";
import {
  Dialog,
  DialogPanel,
  DialogTitle,
  Transition,
  TransitionChild,
} from "@headlessui/react";
import Image from "next/image";
import { Fragment, Suspense } from "react";
import CardSkleton from "../ui-common/CardSkleton";

export default function AllFileGellary({
  images,
  onSelect,
  showGallery,
  setShowGallery,
}) {
  return (
    <Transition as={Fragment} show={showGallery}>
      <Dialog
        as="div"
        className="relative z-50"
        onClose={() => setShowGallery(false)}
      >
        <TransitionChild
          as={Fragment}
          enter="ease-out duration-300"
          enterFrom="opacity-0"
          enterTo="opacity-100"
          leave="ease-in duration-200"
          leaveFrom="opacity-100"
          leaveTo="opacity-0"
        >
          <div className="fixed inset-0 backdrop-blur-xs" />
        </TransitionChild>
        <div className="fixed inset-0 z-50 bg-black/50 flex items-center justify-center">
          <TransitionChild
            as={Fragment}
            enter="ease-out duration-300"
            enterFrom="opacity-0 scale-95"
            enterTo="opacity-100 scale-100"
            leave="ease-in duration-200"
            leaveFrom="opacity-100 scale-100"
            leaveTo="opacity-0 scale-95"
          >
            <DialogPanel className="bg-white rounded-lg w-[90%] max-w-5xl max-h-[90%] overflow-auto shadow-lg p-6 space-y-6">
              <div className="flex justify-between items-center">
                <DialogTitle className="text-2xl font-medium tracking-tight ">
                  Select an Image/Icon
                </DialogTitle>
                <button
                  onClick={() => setShowGallery(false)}
                  className="mt-4 text-sm cursor-pointer text-rose-500 px-4 py-2 rounded-lg  bg-rose-50  hover:bg-rose-100"
                >
                  Cancel
                </button>
              </div>

              <div className="grid grid-cols-4 gap-4">
                {images.map((img) => (
                  <Suspense key={img._id} fallback={<CardSkleton />}>
                    <div
                      className="cursor-pointer bg-white shadow-sm border border-gray-200 rounded-md hover:ring-2 ring-primary"
                      onClick={() => onSelect(img)}
                    >
                      <Image
                        src={img.path}
                        alt={img.filename}
                        width={100}
                        height={100}
                        className="rounded-md object-cover w-full h-[200px]"
                      />
                    </div>
                  </Suspense>
                ))}
              </div>
            </DialogPanel>
          </TransitionChild>
        </div>
      </Dialog>
    </Transition>
  );
}
