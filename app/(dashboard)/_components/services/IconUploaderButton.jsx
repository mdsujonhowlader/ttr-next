"use client";
import { cn } from "@/lib/utils";
import { Button, Field, Input, Label } from "@headlessui/react";
import Image from "next/image";
import { useRef, useState } from "react";
import AllFileGellary from "../gallery/AllFileGellary";

export default function IconUploaderButton({
  safeImages,
  selectedIcon,
  setSelectedIcon,
}) {
  const iconUploadRef = useRef(null);
  const [showGallery, setShowGallery] = useState(false);

  const handleOpenGallery = (e) => {
    e.preventDefault();
    setShowGallery(true);
  };

  const handleIconSelect = (image) => {
    setSelectedIcon(image);
    setShowGallery(false);
  };

  return (
    <>
      <AllFileGellary
        images={safeImages}
        setShowGallery={setShowGallery}
        onSelect={handleIconSelect}
        showGallery={showGallery}
      />

      <Field as="div" className="flex flex-col w-full mb-5">
        <Label className="text-sm/6 font-medium text-gray-500">
          Service Image
        </Label>
        <Button
          type="button"
          className={cn(
            "mt-1 block w-full rounded-lg border-none bg-black/5 px-3 py-2 text-md text-gray-600",
            "focus:not-data-focus:outline-none data-focus:outline-2 data-focus:-outline-offset-2 data-focus:outline-primary"
          )}
          onClick={handleOpenGallery}
        >
          Choose from gallery
        </Button>
        {selectedIcon ? (
          <div className="mt-2 border border-primary w-1/4 rounded-lg">
            <Image
              src={selectedIcon.url}
              alt={selectedIcon.filename}
              width={300}
              height={300}
              className="w-full h-[100px] object-cover rounded-lg"
            />
          </div>
        ) : null}
        <Input
          ref={iconUploadRef}
          name="iconId"
          type="hidden"
          value={selectedIcon?._id || ""}
        />
      </Field>
    </>
  );
}
