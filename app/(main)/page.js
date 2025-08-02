import { getAppearances } from "@/actions/appearanceAction";
import BrandCompany from "@/components/BrandCompany";
import HeroSection from "@/components/HeroSection";
import LanguagesAndTools from "@/components/LanguagesAndTools";
import OurProduct from "@/components/OurProduct";
import ReviewSection from "@/components/ReviewSection";
import WhatWeDoSection from "@/components/WhatWeDoSection";
import { NextIcon } from "@/utils/svg-util";
import Image from "next/image";
export default async function Home() {
  const appearances = await getAppearances();
  return (
    <>
      <div className="relative h-screen">
        {/* Background Image */}
        <div className="absolute inset-0 bg-[url('/bg-zigzag.jpg')]  bg-cover bg-center bg-no-repeat opacity-20 mask-b-from-5%"></div>

        <div className="absolute inset-0 z-0 bg-radial-[125%_125%_at_50%_50%] from-white  from-40% to-green-500  to-100% dark:[background:radial-gradient(ellipse_80%_60%_at_50%_0%,rgba(16,185,129,0.25),transparent_80%),_#000000] md:mask-b-from-60%"></div>

        <div className="absolute top-1/8 sm:top-2/5  md:top-2/5  left-2/6 sm:left-1/3 lg:left-1/7  z-10 shadow-2xl">
          <Image
            src="/icons/js.svg"
            className="size-10 animate-bounce pointer-events-none rounded-md shadow-2xl rotate-12"
            alt="javascript icon"
            width="100"
            height="100"
          />
        </div>
        <div className="absolute top-1/8 sm:top-2/5  md:top-2/5  left-4/6 sm:left-4/7 lg:left-6/7 z-10 shadow-2xl animate-bounce">
          <NextIcon />
        </div>

        <div className="relative z-20 px-4 md:pt-10 h-full flex justify-center  items-center">
          <HeroSection appearances={appearances} />
        </div>
      </div>
      <div className="max-w-5xl mx-auto px-4 md:px-0 ">
        <BrandCompany />
        <WhatWeDoSection />
        <OurProduct />
        <ReviewSection />
        <LanguagesAndTools />
      </div>
    </>
  );
}
