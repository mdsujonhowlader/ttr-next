"use client";
import { getImages } from "@/actions/gellaryAction";
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
        <div className="flex justify-between  gap-4 space-y-4">
          <h3 className="text-gray-500">All Files</h3>
          <div className="flex justify-between gap-2">
            <h4>Delete Image</h4>
            <h4>Search Image by Name</h4>
          </div>
        </div>
        <Gallery images={images} />
      </div>
    </>
  );
}
