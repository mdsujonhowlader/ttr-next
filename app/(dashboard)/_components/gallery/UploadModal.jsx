"use client";
import { uploadImages } from "@/actions/gellaryAction";
import {
  Dialog,
  DialogPanel,
  DialogTitle,
  Field,
  Input,
  Label,
  Transition,
  TransitionChild,
} from "@headlessui/react";
import { Fragment, useTransition } from "react";
import toast from "react-hot-toast";
export default function UploadModal({ isOpen, setIsOpen }) {
  const [isPending, startTransition] = useTransition();

  async function handleFormSubmit(formData) {
    const res = await uploadImages(formData);

    if (res.success) {
      onSubmitComplete();
    } else {
      toast.error("Upload failed!");
    }
  }
  function onSubmitComplete() {
    toast.success("Upload successful!");
    setIsOpen(false);
  }
  return (
    <Transition show={isOpen} as={Fragment}>
      <Dialog
        as="div"
        className="relative z-50"
        onClose={() => setIsOpen(false)}
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

        {/* Panel */}
        <div className="fixed inset-0  flex items-center justify-center ">
          <TransitionChild
            as={Fragment}
            enter="ease-out duration-300"
            enterFrom="opacity-0 scale-95"
            enterTo="opacity-100 scale-100"
            leave="ease-in duration-200"
            leaveFrom="opacity-100 scale-100"
            leaveTo="opacity-0 scale-95"
          >
            <DialogPanel className="w-full max-w-lg space-y-8 rounded-lg border border-gray-200 bg-white shadow-xl px-10 py-10 ">
              <DialogTitle className="text-xl text-gray-500 font-bold">
                Upload Image
              </DialogTitle>
              <form action={handleFormSubmit}>
                <Field>
                  <Label className=" font-medium text-gray-500"></Label>
                  <Input
                    type="file"
                    name="image"
                    accept="image/*"
                    onChange={(e) => {
                      startTransition(() => {
                        e.target.form.requestSubmit();
                      });
                    }}
                    disabled={isPending}
                    className="bg-none border-none text-gray-500 p-2 rounded-lg cursor-pointer hover:text-gray-600 hover:underline transition-colors duration-200"
                  />
                </Field>
              </form>

              <div className="flex gap-4 ">
                <button
                  onClick={() => setIsOpen(false)}
                  className="px-4 py-2 bg-emerald-600 text-white rounded hover:bg-emerald-700 transition-colors duration-300"
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
