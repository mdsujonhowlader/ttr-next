"use client";
import { useState } from "react";
import UploadModal from "./UploadModal";

export default function UploadButton() {
  let [isOpen, setIsOpen] = useState(false);

  const handleModal = () => {
    setIsOpen((prev) => !prev);
  };
  return (
    <>
      <UploadModal isOpen={isOpen} setIsOpen={setIsOpen} />
      <button
        onClick={handleModal}
        className="inline-flex text-white bg-emerald-600  dark:bg-emerald-800/40 rounded-lg font-semibold tracking-tight hover:bg-emerald-800 hover:text-white  transition-colors duration-200 focus:outline-none px-4 py-2 dark:text-emerald-500"
      >
        Upload New File
      </button>
    </>
  );
}
