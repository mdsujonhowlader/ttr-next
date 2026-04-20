"use client";

import { Button } from "@headlessui/react";
import { Trash2 } from "lucide-react";
import { deleteBlogById } from "@/actions/BlogAction";
import toast from "react-hot-toast";
import { useState } from "react";

export default function DeleteBlogButton({ id }) {
  const [loading, setLoading] = useState(false);

  async function handleDelete() {
    if (!confirm("Are you sure you want to delete this blog?")) return;
    
    setLoading(true);
    const res = await deleteBlogById(id);
    setLoading(false);
    
    if (res?.error) {
      toast.error(res.error);
    } else {
      toast.success("Blog deleted successfully");
      window.location.reload();
    }
  }

  return (
    <Button
      onClick={handleDelete}
      disabled={loading}
      className="flex items-center justify-center gap-1 px-3 py-2 bg-red-600 text-white text-sm rounded-lg hover:bg-red-700 transition-colors disabled:opacity-50"
    >
      <Trash2 className="w-4 h-4" />
      {loading ? "..." : ""}
    </Button>
  );
}