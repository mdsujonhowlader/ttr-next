"use client";
import { cn } from "@/lib/utils";
import { Button, Field, Input, Label } from "@headlessui/react";
import Image from "next/image";
import { useRef, useState } from "react";
import AllFileGellary from "../gallery/AllFileGellary";

export default function ThumbnailUpload({
  safeImages,
  selectedImage,
  setSelectedImage,
}) {
  const fileUploadRef = useRef(null);
  const [showGallery, setShowGallery] = useState(false);

  const handleOpenGallery = (e) => {
    e.preventDefault();
    setShowGallery(true);
  };

  const handleImageSelect = (image) => {
    setSelectedImage(image);
    setShowGallery(false);
  };

  
  return (
    <>
      <AllFileGellary
        images={safeImages}
        setShowGallery={setShowGallery}
        onSelect={handleImageSelect}
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
        {selectedImage ? (
          <div className="mt-2 border border-primary w-1/4 rounded-lg">
            <Image
              src={selectedImage.url}
              alt={selectedImage.filename}
              width={300}
              height={300}
              className="w-full h-[100px] object-cover rounded-lg"
            />
          </div>
        ) : null}
        <Input
          ref={fileUploadRef}
          name="imageId"
          type="hidden"
          value={selectedImage?._id || ""}
        />
      </Field>
    </>
  );
}
