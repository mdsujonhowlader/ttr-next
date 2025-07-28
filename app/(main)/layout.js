import Footer from "@/components/Footer";
import Header from "@/components/Header";
import ThemeProvider from "@/components/ui/ThemeProvider";
import { Jost } from "next/font/google";
import "../globals.css";

const jostSans = Jost({
  variable: "--font-jost-sans",
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
        className={`${jostSans.variable}  antialiased`}
        cz-shortcut-listen="true"
      >
        <ThemeProvider
          attribute="class"
          defaultTheme="dark"
          enableSystem="false"
          disableTransitionOnChange
        >
          <Header />

          <main>{children}</main>
          <Footer />
        </ThemeProvider>
      </body>
    </html>
  );
}
