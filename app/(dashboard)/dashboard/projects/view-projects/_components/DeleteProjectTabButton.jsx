"use client";

import { Button } from "@headlessui/react";
import { Trash2 } from "lucide-react";
import { deleteProjectTab } from "@/actions/projectsAction";
import toast from "react-hot-toast";
import { useState } from "react";

export default function DeleteProjectTabButton({ tabId, tabName }) {
  const [loading, setLoading] = useState(false);

  async function handleDelete() {
    if (!confirm(`Are you sure you want to delete "${tabName}"? All projects in this category will be deleted.`)) return;
    
    setLoading(true);
    const res = await deleteProjectTab(tabId);
    setLoading(false);
    
    if (res.success) {
      toast.success(res.msg);
      window.location.reload();
    } else {
      toast.error(res.msg);
    }
  }

  return (
    <Button
      onClick={handleDelete}
      disabled={loading}
      className="flex items-center justify-center gap-1 px-3 py-2 bg-red-600 text-white text-sm rounded-lg hover:bg-red-700 transition-colors disabled:opacity-50"
    >
      <Trash2 className="w-4 h-4" />
      {loading ? "..." : "Delete"}
    </Button>
  );
}