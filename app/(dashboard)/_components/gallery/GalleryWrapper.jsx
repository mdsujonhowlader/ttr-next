"use client";
import { getImages } from "@/actions/gellaryAction";
import { cn } from "@/lib/utils";
import { Button, Input, Select } from "@headlessui/react";
import { useEffect, useState } from "react";
import FullScreeenLoading from "../ui-common/FullScreeenLoading";
import Gallery from "./Gallery";
import UploadButton from "./UploadButton";

export default function GalleryWrapper() {
  const [images, setImages] = useState([]);
  const [loading, setLoading] = useState(true);

  async function fetchImages() {
    setLoading(true);
    const fetchedImages = await getImages();
    setImages(fetchedImages);
    setLoading(false);
  }

  useEffect(() => {
    fetchImages();
  }, []);

  function handleUploadSuccess() {
    fetchImages();
  }

  if (loading) {
    return <FullScreeenLoading />;
  }

  return (
    <>
      <div className="flex justify-between items-center">
        <h2 className="text-xl text-gray-600 font-semibold tracking-tight">
          All uploaded files
        </h2>
        <UploadButton onUploadSuccess={handleUploadSuccess} />
      </div>

      <div className="bg-white border border-gray-300  rounded-lg p-5 overflow-auto">
        <h3 className="text-gray-500 mb-5">All Files</h3>
        <div className="flex justify-between gap-4 space-y-4">
          <div>
            <Select
              className="
          block w-full appearance-none rounded-lg border border-gray-200 bg-white
          px-4 py-2 pr-10 text-sm font-medium text-gray-700
          shadow-sm focus:outline-none focus:ring-2 focus:ring-green-400 focus:border-transparent
          transition-shadow duration-150
        "
            >
              <option value="default">Sort By</option>
              <option value="date">Date Uploaded</option>
              <option value="name">File Name</option>
              <option value="size">File Size</option>
            </Select>
          </div>
          <div className="flex justify-between gap-2">
            <Input
              className={cn(
                "mt-1 block w-full rounded-lg border-none  bg-black/5 px-3 py-2 text-md text-gray-600",
                "focus:not-data-focus:outline-none data-focus:outline-2 data-focus:-outline-offset-2 data-focus:outline-primary"
              )}
              type="text"
              placeholder="Search By Image Name.."
            />
            <Button
              type="submit"
              className="cursor-pointer items-center gap-2 rounded-md bg-button px-3  text-sm font-semibold text-white shadow-inner shadow-white/10 focus:not-data-focus:outline-none data-focus:outline data-focus:outline-white data-hover:bg-button/90 data-open:bg-button/95"
            >
              Search
            </Button>
          </div>
        </div>
        <Gallery images={images} />
      </div>
    </>
  );
}
