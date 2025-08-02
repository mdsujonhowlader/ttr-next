import { getImages } from "@/actions/gellaryAction";
import {
  Dialog,
  DialogPanel,
  DialogTitle,
  Transition,
  TransitionChild,
} from "@headlessui/react";
import { Fragment, useEffect, useState } from "react";
import Gallery from "./Gallery";

export default function ServiceImageModal({ isOpen, setIsOpen }) {
  const [images, setImages] = useState([]);

  useEffect(() => {
    const fetchImages = async () => {
      const res = await getImages();
      setImages(res);
    };

    if (isOpen) fetchImages(); // Modal খুললেই ডেটা আনা হবে
  }, [isOpen]);

  return (
    <Transition show={isOpen} as={Fragment}>
      <Dialog as="div" className="relative " onClose={() => setIsOpen(false)}>
        {/* Backdrop */}
        <TransitionChild
          as={Fragment}
          enter="ease-out duration-300"
          enterFrom="opacity-0"
          enterTo="opacity-100"
          leave="ease-in duration-200"
          leaveFrom="opacity-100"
          leaveTo="opacity-0"
        >
          <div className="fixed inset-0 bg-black/50 backdrop-blur-xs" />
        </TransitionChild>

        {/* Panel */}
        <div className="fixed inset-0  flex items-center overflow-scroll  justify-center ">
          <TransitionChild
            as={Fragment}
            enter="ease-out duration-300"
            enterFrom="opacity-0 scale-95"
            enterTo="opacity-100 scale-100"
            leave="ease-in duration-200"
            leaveFrom="opacity-100 scale-100"
            leaveTo="opacity-0 scale-95"
          >
            <DialogPanel className="w-full max-h-[80vh] overflow-y-auto  md:w-2/3 space-y-8 rounded-lg border border-primary bg-black shadow-xl px-10 py-10 ">
              <DialogTitle className="text-xl text-white font-bold">
                Upload Image
              </DialogTitle>

              <Gallery images={images} />

              <div className="flex gap-4 ">
                <button
                  onClick={() => setIsOpen(false)}
                  className="px-4 py-2 bg-rose-600 rounded hover:bg-rose-700"
                >
                  Cancel
                </button>
              </div>
            </DialogPanel>
          </TransitionChild>
        </div>
      </Dialog>
    </Transition>
  );
}
