import { ToastAlertProvider } from "@/context";
import { Jost } from "next/font/google";
import "../globals.css";
import Header from "./_components/Header";
import Sidebar from "./_components/Sidebar";
import { SidebarProvider } from "./_components/SidebarContext";

const jostSans = Jost({
  variable: "--font-jost-sans",
  subsets: ["latin"],
});

export const metadata = {
  title: "The Tech Resolver Dashboard",
  description: "Lets make wolrd Better",
};

export default function DashboardRootLayout({ children }) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={`${jostSans.variable}  antialiased bg-slate-100`}
      >
        <SidebarProvider>
          <div className="min-h-screen">
            <Sidebar />
            <div className="transition-all duration-300 md:ml-64">
              <Header />
              <main className="p-6">
                <ToastAlertProvider position="bottom-right" />
                {children}
              </main>
            </div>
          </div>
        </SidebarProvider>
      </body>
    </html>
  );
}
