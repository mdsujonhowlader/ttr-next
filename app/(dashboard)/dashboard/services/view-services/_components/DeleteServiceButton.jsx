"use client";

import { Button } from "@headlessui/react";
import { Trash2 } from "lucide-react";
import { deleteService } from "@/actions/servicAction";
import toast from "react-hot-toast";
import { useState } from "react";

export default function DeleteServiceButton({ id }) {
  const [loading, setLoading] = useState(false);

  async function handleDelete() {
    if (!confirm("Are you sure you want to delete this service?")) return;
    
    setLoading(true);
    const res = await deleteService(id);
    setLoading(false);
    
    if (res.success) {
      toast.success(res.msg);
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
      {loading ? "Deleting..." : "Delete"}
    </Button>
  );
}