"use client";

import { getImages } from "@/actions/gellaryAction";
import { Button } from "@headlessui/react";
import { useEffect, useState, useMemo } from "react";
import FullScreeenLoading from "../ui-common/FullScreeenLoading";
import Gallery from "./Gallery";
import UploadButton from "./UploadButton";
import { Search, Filter, Grid3X3, LayoutGrid } from "lucide-react";

export default function GalleryWrapper() {
  const [images, setImages] = useState([]);
  const [loading, setLoading] = useState(true);
  const [search, setSearch] = useState("");
  const [sortBy, setSortBy] = useState("newest");
  const [viewMode, setViewMode] = useState("grid");

  async function fetchImages() {
    setLoading(true);
    const fetchedImages = await getImages();
    const serialized = (fetchedImages || []).map((img) => ({
      _id: img._id?.toString(),
      filename: img.filename,
      url: img.url,
      format: img.format,
      width: img.width,
      height: img.height,
      bytes: img.bytes,
      createdAt: img.createdAt?.toString(),
    }));
    setImages(serialized);
    setLoading(false);
  }

  useEffect(() => {
    fetchImages();
  }, []);

  function handleUploadSuccess() {
    fetchImages();
  }

  const filteredImages = useMemo(() => {
    let filtered = [...images];

    if (search) {
      const s = search.toLowerCase();
      filtered = filtered.filter((img) => 
        img.filename?.toLowerCase().includes(s)
      );
    }

    if (sortBy === "newest") {
      filtered.sort((a, b) => new Date(b.createdAt) - new Date(a.createdAt));
    } else if (sortBy === "oldest") {
      filtered.sort((a, b) => new Date(a.createdAt) - new Date(b.createdAt));
    } else if (sortBy === "name") {
      filtered.sort((a, b) => a.filename.localeCompare(b.filename));
    } else if (sortBy === "size") {
      filtered.sort((a, b) => (b.bytes || 0) - (a.bytes || 0));
    }

    return filtered;
  }, [images, search, sortBy]);

  if (loading) {
    return <FullScreeenLoading />;
  }

  return (
    <div className="space-y-6">
      <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
        <div>
          <h1 className="text-2xl font-bold text-gray-900 dark:text-white">
            Media Library
          </h1>
          <p className="text-gray-500 dark:text-gray-400 mt-1">
            {images.length} file{images.length !== 1 ? "s" : ""} uploaded
          </p>
        </div>
        <UploadButton onUploadSuccess={handleUploadSuccess} />
      </div>

      <div className="flex flex-col sm:flex-row gap-4">
        <div className="relative flex-1">
          <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
          <input
            type="text"
            placeholder="Search files..."
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            className="w-full pl-10 pr-4 py-2.5 bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent"
          />
        </div>
        <div className="flex gap-2">
          <select
            value={sortBy}
            onChange={(e) => setSortBy(e.target.value)}
            className="px-4 py-2.5 bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary"
          >
            <option value="newest">Newest First</option>
            <option value="oldest">Oldest First</option>
            <option value="name">Name A-Z</option>
            <option value="size">File Size</option>
          </select>
          <div className="flex bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-lg overflow-hidden">
            <button
              onClick={() => setViewMode("grid")}
              className={`p-2.5 ${viewMode === "grid" ? "bg-primary text-white" : "text-gray-500 hover:bg-gray-50"}`}
            >
              <Grid3X3 className="w-5 h-5" />
            </button>
            <button
              onClick={() => setViewMode("masonry")}
              className={`p-2.5 ${viewMode === "masonry" ? "bg-primary text-white" : "text-gray-500 hover:bg-gray-50"}`}
            >
              <LayoutGrid className="w-5 h-5" />
            </button>
          </div>
        </div>
      </div>

      <Gallery images={filteredImages} viewMode={viewMode} onRefresh={fetchImages} />
    </div>
  );
}