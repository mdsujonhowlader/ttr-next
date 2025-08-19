"use client";
import { updateAppearance } from "@/actions/appearanceAction";
import { cn } from "@/lib/utils";
import { Button, Field, Input, Label } from "@headlessui/react";
import Image from "next/image";
import { useState } from "react";
import AllFileGellary from "../gallery/AllFileGellary";
export default function SiteForm({ safeImages, getAppearances }) {
  const [selectedImage, setSelectedImage] = useState(null);
  const [showGallery, setShowGallery] = useState(false);

  const appearanceMap = Object.fromEntries(
    getAppearances.map((item) => [item.type, item.value])
  );

  const handleOpenGellary = (e) => {
    e.preventDefault();
    setShowGallery(true);
  };

  const handleImageSelect = (image) => {
    setSelectedImage(image.url);
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
      <form
        action={updateAppearance}
        className="flex flex-col justify-center items-center mx-auto w-1/2 bg-white p-4 rounded-lg"
      >
        <Field as="div" className="flex flex-col w-full">
          <Label className=" font-medium text-gray-500">Primary Color</Label>
          <Input
            name="type[]"
            type="text"
            value="primaryColor"
            hidden
            readOnly
            className={cn(
              "mt-1 block w-full rounded-lg border-none  bg-white/30 px-3 py-2 text-md text-gray-600",
              "focus:not-data-focus:outline-none data-focus:outline-2 data-focus:-outline-offset-2 data-focus:outline-primary"
            )}
          />
        </Field>

        <Field as="div" className="flex flex-col w-full mb-5">
          <Input
            name="value[]"
            type="text"
            className={cn(
              "mt-3 block w-full rounded-lg border-none dark:bg-white/5  bg-black/10 px-3 py-1.5 text-sm/6 dark:text-white text-black",
              "focus:not-data-focus:outline-none data-focus:outline-2 data-focus:-outline-offset-2 data-focus:outline-primary"
            )}
            defaultValue={appearanceMap?.primaryColor}
          />
        </Field>
        <Field as="div" className="flex flex-col w-full ">
          <Label className="text-sm/6 font-medium dark:text-white text-black">
            Secondary Color
          </Label>
          <Input
            name="type[]"
            type="text"
            value="secondaryColor"
            hidden
            readOnly
            className={cn(
              "mt-3 block w-full rounded-lg border-none dark:bg-white/5  bg-black/10 px-3 py-1.5 text-sm/6 dark:text-white text-black",
              "focus:not-data-focus:outline-none data-focus:outline-2 data-focus:-outline-offset-2 data-focus:outline-primary"
            )}
          />
        </Field>

        <Field as="div" className="flex flex-col w-full mb-5">
          <Input
            name="value[]"
            type="text"
            className={cn(
              "mt-3 block w-full rounded-lg border-none dark:bg-white/5  bg-black/10 px-3 py-1.5 text-sm/6 dark:text-white text-black",
              "focus:not-data-focus:outline-none data-focus:outline-2 data-focus:-outline-offset-2 data-focus:outline-primary"
            )}
            defaultValue={appearanceMap?.secondaryColor}
          />
        </Field>
        <Field as="div" className="flex flex-col w-full ">
          <Label className="text-sm/6 font-medium dark:text-white text-black">
            Header Logo
          </Label>
          <Input
            name="type[]"
            type="text"
            value="headerLogo"
            hidden
            readOnly
            className={cn(
              "mt-3 block w-full rounded-lg border-none dark:bg-white/5  bg-black/10 px-3 py-1.5 text-sm/6 dark:text-white text-black",
              "focus:not-data-focus:outline-none data-focus:outline-2 data-focus:-outline-offset-2 data-focus:outline-primary"
            )}
          />
        </Field>

        <Field as="div" className="flex flex-col w-full mb-5">
          <Button
            type="button"
            className={cn(
              "mt-1 block w-full rounded-lg border-none bg-black/5 px-3 py-2 text-md text-gray-600",
              "focus:not-data-focus:outline-none data-focus:outline-2 data-focus:-outline-offset-2 data-focus:outline-primary"
            )}
            onClick={handleOpenGellary}
          >
            Choose from gallery
          </Button>

          <Input
            name="value[]"
            type="text"
            className={cn(
              "mt-3 block w-full rounded-lg border-none dark:bg-white/5  bg-black/10 px-3 py-1.5 text-sm/6 dark:text-white text-black",
              "focus:not-data-focus:outline-none data-focus:outline-2 data-focus:-outline-offset-2 data-focus:outline-primary"
            )}
            hidden
            readOnly
            value={selectedImage || ""}
          />
        </Field>
        <div className="mt-2 bg-gray-100 border border-primary w-full rounded-lg my-4">
          <Image
            src={
              selectedImage
                ? selectedImage
                : appearanceMap?.headerLogo || "/placeholder.png"
            }
            alt="image"
            width={300}
            height={300}
            className="w-full h-[100px] object-cover rounded-lg"
          />
        </div>
        <Button
          type="submit"
          className="inline-flex w-full justify-center cursor-pointer items-center gap-2 rounded-md bg-button px-3 py-1.5 text-sm/6 font-semibold text-white shadow-inner shadow-white/10 focus:not-data-focus:outline-none data-focus:outline data-focus:outline-white data-hover:bg-button/90 data-open:bg-button/95"
        >
          Update Settings
        </Button>
      </form>
    </>
  );
}
