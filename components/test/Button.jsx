import { cn } from "@/lib/utils";
import { Button } from "@headlessui/react";

export default function TestButton({ className, type, ...props }) {
  return (
    <Button
      type={type || "button"} // default type
      className={cn(
        "w-full md:w-auto transition-all duration-300 font-semibold px-5 py-2 md:px-4 md:py-2 rounded-lg border-button cursor-pointer shadow",
        "bg-white text-black hover:bg-button hover:text-white dark:bg-gray-800 dark:text-white dark:hover:bg-button",
        className
      )}
      {...props}
    />
  );
}
