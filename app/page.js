import BrandCompany from "@/components/BrandCompany";
import HeroSection from "@/components/HeroSection";
import OurProduct from "@/components/OurProduct";
import ReviewSection from "@/components/ReviewSection";
import WhatWeDoSection from "@/components/WhatWeDoSection";
import { LaravelIcon, NextIcon } from "@/utils/svg-util";
import Image from "next/image";
export default function Home() {
  return (
    <>
      <div className="relative h-screen">
        {/* Background Image */}
        <div className="absolute inset-0 bg-[url('/bg-zigzag.jpg')] bg-cover bg-center bg-no-repeat bg-transparent opacity-10 z-0"></div>
        <div className="absolute top-1/5 left-1/6 sm:left-1/7 lg:left-3/7 -translate-x-1/2 z-10 shadow-2xl">
          <Image
            src="/icons/js.svg"
            className="size-6 animate-bounce pointer-events-none rounded-md shadow-2xl rotate-12"
            alt="javascript icon"
            width="100"
            height="100"
          />
        </div>
        <div className="absolute top-1/5 left-4/5 sm:left-4/7 lg:left-4/7 z-10 shadow-2xl animate-bounce">
          <NextIcon />
        </div>
        <div className="absolute top-1/6 sm:top-2/10 left-1/2 sm:left-4/8 z-10 shadow-2xl animate-bounce">
          <LaravelIcon />
        </div>
        <div className="absolute top-1/3 left-2/7 right-0   bg-blue-500/60 dark:bg-blue-500/60 w-44 h-44 rounded-full  blur-3xl opacity-40 z-10"></div>
        <div className="absolute top-1/3 left-2/6 right-0   bg-[#87DE58] w-44 h-44 rounded-full blur-3xl opacity-55 z-10"></div>
        <div className="absolute top-1/3 left-2/5 right-0  bg-purple-600/70 dark:bg-purple-600/60 w-44 h-44 rounded-full blur-3xl  opacity-40 z-10"></div>
        {/* Dark Overlay */}
        <div className="absolute inset-0 bg-background/95 dark:bg-background/50 z-[5]"></div>

        {/* Hero Content */}
        <div className="relative z-20 pt-16 px-4 h-full flex justify-center items-center">
          <HeroSection />
        </div>
      </div>
      <div className="max-w-5xl mx-auto px-4 md:px-0">
        <BrandCompany />
        <WhatWeDoSection />
        <OurProduct />
        <ReviewSection />
      </div>
    </>
  );
}
