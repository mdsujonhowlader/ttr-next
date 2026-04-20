"use client";

import { useState } from "react";
import Image from "next/image";
import { Copy, Trash2, ExternalLink, Check } from "lucide-react";
import { Button } from "@headlessui/react";
import toast from "react-hot-toast";
import { deleteImageAction } from "@/actions/gellaryAction";

function formatBytes(bytes) {
  if (!bytes) return "0 B";
  const sizes = ["B", "KB", "MB", "GB"];
  const i = Math.floor(Math.log(bytes) / Math.log(1024));
  return `${(bytes / Math.pow(1024, i)).toFixed(1)} ${sizes[i]}`;
}

export default function Gallery({ images, viewMode = "grid", onRefresh }) {
  const [copiedId, setCopiedId] = useState(null);
  const [deletingId, setDeletingId] = useState(null);

  function copyUrl(url, id) {
    navigator.clipboard.writeText(url);
    setCopiedId(id);
    toast.success("URL copied to clipboard");
    setTimeout(() => setCopiedId(null), 2000);
  }

  async function handleDelete(id) {
    if (!confirm("Are you sure you want to delete this file?")) return;
    setDeletingId(id);
    try {
      await deleteImageAction(id);
      toast.success("File deleted successfully");
      if (onRefresh) onRefresh();
    } catch (error) {
      toast.error("Failed to delete file");
    }
    setDeletingId(null);
  }

  if (!images || images.length === 0) {
    return (
      <div className="flex flex-col items-center justify-center py-20">
        <div className="w-20 h-20 bg-gray-100 dark:bg-gray-700 rounded-full flex items-center justify-center mb-4">
          <Image 
            src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' fill='none' viewBox='0 0 24 24' stroke='%239ca3af'%3E%3Cpath stroke-linecap='round' stroke-linejoin='round' stroke-width='1.5' d='M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z' /%3E%3C/svg%3E"
            width={40}
            height={40}
            alt="No images"
            className="opacity-50"
          />
        </div>
        <h3 className="text-lg font-medium text-gray-900 dark:text-white mb-2">
          No Files Yet
        </h3>
        <p className="text-gray-500 dark:text-gray-400">
          Upload files to see them here
        </p>
      </div>
    );
  }

  if (viewMode === "masonry") {
    return (
      <div className="columns-1 sm:columns-2 lg:columns-3 xl:columns-4 gap-4 space-y-4">
        {images.map((image) => (
          <div
            key={image._id}
            className="break-inside-avoid bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-xl overflow-hidden shadow-sm hover:shadow-lg transition-all group"
          >
            <div className="relative">
              <Image
                src={image.url}
                alt={image.filename}
                width={400}
                height={300}
                className="w-full object-cover"
              />
              <div className="absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center gap-2">
                <Button
                  onClick={() => copyUrl(image.url, image._id)}
                  disabled={copiedId === image._id}
                  className="p-2 bg-white/20 hover:bg-white/30 rounded-lg backdrop-blur-sm disabled:opacity-50"
                >
                  {copiedId === image._id ? (
                    <Check className="w-5 h-5 text-green-400" />
                  ) : (
                    <Copy className="w-5 h-5 text-white" />
                  )}
                </Button>
                <a
                  href={image.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-2 bg-white/20 hover:bg-white/30 rounded-lg backdrop-blur-sm"
                >
                  <ExternalLink className="w-5 h-5 text-white" />
                </a>
                <Button
                  onClick={() => handleDelete(image._id)}
                  disabled={deletingId === image._id}
                  className="p-2 bg-red-500/80 hover:bg-red-600 rounded-lg backdrop-blur-sm disabled:opacity-50"
                >
                  {deletingId === image._id ? (
                    <span className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin" />
                  ) : (
                    <Trash2 className="w-5 h-5 text-white" />
                  )}
                </Button>
              </div>
            </div>
            <div className="p-3">
              <p className="text-sm font-medium text-gray-900 dark:text-white truncate">
                {image.filename}
              </p>
              <div className="flex items-center justify-between mt-2 text-xs text-gray-500">
                <span>{image.format?.toUpperCase()}</span>
                <span>{formatBytes(image.bytes)}</span>
              </div>
            </div>
          </div>
        ))}
      </div>
    );
  }

  return (
    <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-4">
      {images.map((image) => (
        <div
          key={image._id}
          className="bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-xl overflow-hidden shadow-sm hover:shadow-lg transition-all group"
        >
          <div className="relative aspect-square bg-gray-100 dark:bg-gray-700">
            <Image
              src={image.url}
              alt={image.filename}
              fill
              className="object-cover"
            />
            <div className="absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center gap-2">
              <Button
                onClick={() => copyUrl(image.url, image._id)}
                disabled={copiedId === image._id}
                className="p-2 bg-white/20 hover:bg-white/30 rounded-lg backdrop-blur-sm disabled:opacity-50"
              >
                {copiedId === image._id ? (
                  <Check className="w-5 h-5 text-green-400" />
                ) : (
                  <Copy className="w-5 h-5 text-white" />
                )}
              </Button>
              <a
                href={image.url}
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 bg-white/20 hover:bg-white/30 rounded-lg backdrop-blur-sm"
              >
                <ExternalLink className="w-5 h-5 text-white" />
              </a>
              <Button
                onClick={() => handleDelete(image._id)}
                disabled={deletingId === image._id}
                className="p-2 bg-red-500/80 hover:bg-red-600 rounded-lg backdrop-blur-sm disabled:opacity-50"
              >
                {deletingId === image._id ? (
                  <span className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin" />
                ) : (
                  <Trash2 className="w-5 h-5 text-white" />
                )}
              </Button>
            </div>
          </div>
          <div className="p-3">
            <p className="text-sm font-medium text-gray-900 dark:text-white truncate">
              {image.filename}
            </p>
            <div className="flex items-center justify-between mt-1 text-xs text-gray-500">
              <span>{image.format?.toUpperCase()}</span>
              <span>{formatBytes(image.bytes)}</span>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}