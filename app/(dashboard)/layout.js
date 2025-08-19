import { ToastAlertProvider } from "@/context";
import { Jost } from "next/font/google";
import "../globals.css";
import Header from "./_components/Header";
import Sidebar from "./_components/Sidebar";

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
        cz-shortcut-listen="true"
      >
        <div className="h-screen w-full flex flex-row">
          <div className="basis-1/5 bg-white">
            <Sidebar />
          </div>
          <div className="flex flex-col basis-4/5 overflow-hidden">
            <Header />
            <main className="overflow-y-auto  h-full shrink-0 ">
              {/* <Toaster position="bottom-right" /> */}
              <ToastAlertProvider position="bottom-right" />
              {children}
            </main>
          </div>
        </div>
      </body>
    </html>
  );
}
