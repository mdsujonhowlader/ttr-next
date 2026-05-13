"use client";

import { backfillProjectSlugs } from "@/actions/projectsAction";
import { useState } from "react";
import toast from "react-hot-toast";
import { RefreshCw } from "lucide-react";

export default function BackfillButton() {
  const [loading, setLoading] = useState(false);

  async function handleClick() {
    setLoading(true);
    const res = await backfillProjectSlugs();
    setLoading(false);
    if (res.success) {
      toast.success(res.msg);
      window.location.reload();
    } else {
      toast.error(res.msg);
    }
  }

  return (
    <button
      onClick={handleClick}
      disabled={loading}
      className="flex items-center gap-2 px-3 py-2 text-sm text-yellow-700 bg-yellow-50 dark:text-yellow-300 dark:bg-yellow-900/20 rounded-lg hover:bg-yellow-100 dark:hover:bg-yellow-900/30 transition-colors disabled:opacity-50"
    >
      <RefreshCw className={`w-4 h-4 ${loading ? "animate-spin" : ""}`} />
      {loading ? "Fixing..." : "Fix Missing Slugs"}
    </button>
  );
}
