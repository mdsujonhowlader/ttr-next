"use client";
import clsx from "clsx";
import { useFormStatus } from "react-dom";
export default function LoginButton() {
  const { pending } = useFormStatus();

  return (
    <button
      type="submit"
      disabled={pending}
      className={clsx(
        "inline-flex w-full justify-center cursor-pointer bg-button  items-center gap-2 rounded-md px-3 py-1.5 text-sm font-semibold text-white shadow-inner shadow-white/10",
        pending ? " cursor-not-allowed" : " hover:bg-button/90"
      )}
    >
      {pending ? "Logging in..." : "Login "}
      {/* test */}
    </button>
  );
}
