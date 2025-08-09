import { Button } from "@headlessui/react";
import { AlignRight } from "lucide-react";
import ProfileIcon from "./ProfileIcon";

export default function HeaderDashboard() {
  return (
    <header className="w-full bg-white backdrop-blur dark:bg-background/20 shadow-sm flex items-center  px-6 py-2">
      <Button className="inline-flex hover:text-primary cursor-pointer">
        <AlignRight />
      </Button>
      <div className="ml-auto flex items-center justify-center space-x-4">
        <ProfileIcon />
      </div>
    </header>
  );
}
