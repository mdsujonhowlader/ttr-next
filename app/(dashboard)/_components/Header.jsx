import ThemeToggle from "@/components/ui/ThemeToggle";
import ProfileIcon from "./ProfileIcon";

export default function HeaderDashboard() {
  return (
    <header className="w-full h-44 bg-background/50 backdrop-blur dark:bg-background/20 shadow-lg border-b border-b-primary flex items-center  px-6 py-4">
      <div className="ml-auto flex items-center justify-center space-x-4">
        <ThemeToggle />
        <ProfileIcon />
      </div>
    </header>
  );
}
