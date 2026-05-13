"use client";
import { uploadImages } from "@/actions/galleryAction";
import { toastify } from "@/lib/toastalert";
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
import { Fragment, useRef, useTransition } from "react";
export default function UploadModal({ isOpen, setIsOpen, onUploadSuccess }) {
  const [isPending, startTransition] = useTransition();
  const inputRef = useRef(null);

  async function handleFormSubmit(formData) {
    const res = await uploadImages(formData);

    if (res.success) {
      onUploadSuccess(res);
      onSubmitComplete();
    } else {
      toastify.error("Upload failed!");
    }
  }
  function onSubmitComplete() {
    toastify.success("Upload successful!");
    setIsOpen(false);
  }

  function handleButtonClick() {
    if (inputRef.current) {
      inputRef.current.click();
    }
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
                <Field className="border-2 border-dashed border-gray-300 flex justify-center items-center flex-col gap-4 py-8 rounded-2xl">
                  <Label className="font-semibold text-md tracking-tight">
                    Choose a File from your Gellary
                  </Label>
                  <p className="text-gray-600 text-sm">JPG,PNG,JPEG</p>
                  <Input
                    ref={inputRef}
                    type="file"
                    name="image"
                    accept="image/*"
                    onChange={(e) => {
                      startTransition(() => {
                        e.target.form.requestSubmit();
                      });
                    }}
                    disabled={isPending}
                    required
                    className="hidden"
                  />
                  <button
                    type="button"
                    onClick={handleButtonClick}
                    disabled={isPending}
                    className="px-3 py-1 bg-white shadow-xs border-2 cursor-pointer border-gray-200 text-black rounded-xl hover:bg-gray-100 transition duration-200 disabled:text-gray-300"
                  >
                    {isPending ? "File Uploading...." : "Browse File"}
                  </button>
                </Field>
                {/* <Field>
                  <Input
                    type="file"
                    name="image"
                    accept="image/*"
                    disabled={isPending}
                    required
                    className="bg-none border-none text-gray-500 p-2 rounded-lg cursor-pointer hover:text-gray-600 hover:underline transition-colors duration-200"
                  />
                </Field> */}
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
