"use client";
import { cn } from "@/lib/utils";

export default function DashboardPage() {
  return (
    <>
      <div
        className={cn(
          "flex justify-center items-center"
          // showModal && "filter blur-sm pointer-events-none select-none"
        )}
      >
        <button className="inline-flex items-center px-3 py-1 mt-4 bg-rose-200 shadow-sm rounded-lg text-rose-500 font-semibold tracking-tight border-2 border-rose-500 hover:bg-rose-500 hover:text-white transition duration-200">
          Delete user
        </button>
      </div>
    </>
  );
}
