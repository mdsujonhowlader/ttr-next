import ThemeProvider from "@/components/ui/ThemeProvider";
import { Jost } from "next/font/google";
import { Toaster } from "react-hot-toast";
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
        className={`${jostSans.variable}  antialiased`}
        cz-shortcut-listen="true"
      >
        <ThemeProvider
          attribute="class"
          defaultTheme="dark"
          enableSystem="false"
          disableTransitionOnChange
        >
          <div className="h-screen flex flex-row">
            <div className="absolute inset-0  bg-radial-[125%_125%_at_50%_90%] from-white  from-40% to-green-500  to-100% dark:[background:radial-gradient(ellipse_80%_60%_at_50%_0%,rgba(16,185,129,0.25),transparent_80%),_#000000] -z-50"></div>
            <Sidebar />
            <div className="flex flex-col w-full overflow-hidden">
              <Header />
              <main className="overflow-y-auto h-full shrink-0 w-full mx-auto ">
                {children}
              </main>
            </div>
          </div>
        </ThemeProvider>
        <Toaster position="bottom-right" />
      </body>
    </html>
  );
}
