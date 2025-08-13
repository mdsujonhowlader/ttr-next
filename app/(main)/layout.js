import Footer from "@/components/Footer";
import Header from "@/components/Header";
import ThemeProvider from "@/components/ui/ThemeProvider";
import { Inter } from "next/font/google";
import { Toaster } from "react-hot-toast";
import "../globals.css";

const interSans = Inter({
  variable: "--font-inter-sans",
  subsets: ["latin"],
});

export const metadata = {
  title: "The Tech Resolver",
  description: "Lets make wolrd Better",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={`${interSans.variable}  antialiased`}
        cz-shortcut-listen="true"
      >
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem="true"
          disableTransitionOnChange
        >
          <Header />
          <div className="absolute inset-0 -z-10 bg-radial-[125%_125%_at_50%_50%] from-white  from-40% to-green-500  to-100% dark:[background:radial-gradient(ellipse_80%_60%_at_50%_0%,rgba(16,185,129,0.25),transparent_80%),_#000000] md:mask-b-from-60%"></div>

          <main>
            {children}

            <Toaster position="bottom-right" />
          </main>
          <div
            className="absolute inset-0 -z-10 md:mask-y-from-60% opacity-15"
            style={{
              backgroundImage: `
        linear-gradient(to right, #e5e7eb 1px, transparent 1px),
        linear-gradient(to bottom, #e5e7eb 1px, transparent 1px)
      `,
              backgroundSize: "40px 40px",
            }}
          />
          <Footer />
        </ThemeProvider>
      </body>
    </html>
  );
}
