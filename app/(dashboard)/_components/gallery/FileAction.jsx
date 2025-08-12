"use client";
import { deleteImageAction } from "@/actions/gellaryAction";
import ConfirmModal from "@/components/common/ConfirmModal";
import { toastify } from "@/lib/toastalert";
import { Popover, PopoverButton, PopoverPanel } from "@headlessui/react";
import { BadgeAlert, EllipsisVertical, Trash } from "lucide-react";
import { useState, useTransition } from "react";

export default function FileAction({ imageId, onDelete }) {
  const [openConfirm, setOpenConfirm] = useState(false);
  const [isPending, startTransition] = useTransition();

  async function handleDeleteConfirm() {
    startTransition(async () => {
      await deleteImageAction(imageId);
      setOpenConfirm(false);
      if (onDelete) onDelete(imageId);
      toastify.error("Deleted successfully");
    });
  }
  return (
    <>
      <div>
        <Popover className="relative">
          <PopoverButton className="border-none outline-0 cursor-pointer">
            <EllipsisVertical color="white" size={24} />
          </PopoverButton>
          <PopoverPanel
            anchor="bottom end"
            className="rounded-md flex flex-col bg-white px-2 py-3 shadow-lg ring-1 ring-gray-200 ring-opacity-5  text-gray-700 "
          >
            <button
              onClick={() => setOpenConfirm(true)}
              className="w-full px-2 py-1 inline-flex items-center gap-1  text-md hover:bg-gray-100 rounded transition-all duration-150"
            >
              <Trash size={18} /> Delete
            </button>
            <button className="w-full inline-flex items-center gap-1 px-2 py-1 text-md hover:bg-gray-100 rounded transition-all duration-150">
              <BadgeAlert size={18} /> Details info
            </button>
          </PopoverPanel>
        </Popover>
      </div>
      <ConfirmModal
        open={openConfirm}
        onClose={() => setOpenConfirm(false)}
        onConfirm={handleDeleteConfirm}
        title="Confirm Deletion"
        message="Are you sure you want to delete this file? This action cannot be undone."
        isPending={isPending}
      />
    </>
  );
}
