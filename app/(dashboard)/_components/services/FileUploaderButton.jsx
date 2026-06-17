"use client";

import { Button, Input } from "@headlessui/react";
import Image from "next/image";
import { useState } from "react";
import { X, ImageIcon } from "lucide-react";
import AllFileGellary from "../gallery/AllFileGellary";

export default function FileUploaderButton({
  safeImages,
  selectedImage,
  setSelectedImage,
}) {
  const [showGallery, setShowGallery] = useState(false);

  function handleImageSelect(image) {
    setSelectedImage(image);
    setShowGallery(false);
  }

  function handleClear() {
    setSelectedImage(null);
  }

  console.log(safeImages);
  
  return (
    <>
      <AllFileGellary
        images={safeImages}
        setShowGallery={setShowGallery}
        onSelect={handleImageSelect}
        showGallery={showGallery}
      />

      {selectedImage ? (
        <div className="relative w-full h-48 bg-gray-100 dark:bg-gray-700 rounded-xl overflow-hidden border-2 border-dashed border-gray-200 dark:border-gray-600">
          <Image
            src={selectedImage.url}
            alt={selectedImage.filename}
            fill
            className="object-cover"
          />
          <div className="absolute inset-0 bg-black/50 opacity-0 hover:opacity-100 transition-opacity flex items-center justify-center gap-2">
            <button
              type="button"
              onClick={() => setShowGallery(true)}
              className="px-4 py-2 bg-white/20 hover:bg-white/30 rounded-lg backdrop-blur-sm text-white text-sm"
            >
              Change
            </button>
            <button
              type="button"
              onClick={handleClear}
              className="p-2 bg-red-500/80 hover:bg-red-600 rounded-lg"
            >
              <X className="w-4 h-4 text-white" />
            </button>
          </div>
          <Input
            name="imageId"
            type="hidden"
            value={selectedImage._id}
          />
        </div>
      ) : (
        <button
          type="button"
          onClick={() => setShowGallery(true)}
          className="w-full h-48 flex flex-col items-center justify-center gap-3 bg-gray-50 dark:bg-gray-700 rounded-xl border-2 border-dashed border-gray-200 dark:border-gray-600 hover:border-primary hover:bg-gray-100 dark:hover:bg-gray-600 transition-colors"
        >
          <ImageIcon className="w-10 h-10 text-gray-400" />
          <span className="text-sm text-gray-500">Click to select image</span>
        </button>
      )}
    </>
  );
}