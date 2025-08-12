"use client";
import FullScreenLoader from "@/app/(dashboard)/_components/ui-common/FullscreenLoader";
import { Dialog, DialogPanel, DialogTitle } from "@headlessui/react";

export default function ConfirmModal({
  open,
  onClose,
  onConfirm,
  title,
  message,
  isPending,
}) {
  return (
    <>
      {isPending && <FullScreenLoader loading={isPending} />}
      <Dialog open={open} onClose={onClose} className="relative z-50">
        {/* Overlay */}
        <div
          className="fixed inset-0 bg-black/50 backdrop-blur-xs"
          aria-hidden="true"
        />

        {/* Modal Content */}
        <div className="fixed inset-0 flex items-center justify-center p-4">
          <DialogPanel className="w-full max-w-sm rounded-lg bg-white shadow-lg">
            <DialogTitle className="text-lg font-semibold px-5 pt-5">
              {title}
            </DialogTitle>
            <p className="px-5 py-2 text-gray-600">{message}</p>

            <div className="flex justify-end gap-2 px-5 pb-5 pt-2">
              <button
                onClick={onClose}
                className="px-4 py-2 rounded-md bg-gray-100 hover:bg-gray-200 transition"
              >
                Cancel
              </button>
              <button
                onClick={() => {
                  onConfirm();
                }}
                className="px-4 py-2 rounded-md bg-red-500 text-white hover:bg-red-600 transition"
              >
                {isPending ? "deleting..." : "Confirm"}
              </button>
            </div>
          </DialogPanel>
        </div>
      </Dialog>
    </>
  );
}
