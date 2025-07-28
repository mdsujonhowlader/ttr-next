import BrandCompany from "@/components/BrandCompany";
import HeroSection from "@/components/HeroSection";
import LanguagesAndTools from "@/components/LanguagesAndTools";
import OurProduct from "@/components/OurProduct";
import ReviewSection from "@/components/ReviewSection";
import WhatWeDoSection from "@/components/WhatWeDoSection";
import { NextIcon } from "@/utils/svg-util";
import Image from "next/image";
export default function Home() {
  return (
    <>
      <div className="relative h-screen">
        {/* Background Image */}
        <div className="absolute inset-0 bg-[url('/bg-zigzag.jpg')]  bg-cover bg-center bg-no-repeat opacity-20 mask-b-from-5%"></div>
        {/* <div className="absolute inset-0 bg-radial-[125%_125%_at_50%_90%] from-white dark:from-black/80 from-40% to-green-400 dark:to-primary to-100% mask-b-from-10%  "></div> */}

        {/* <div className="absolute inset-0 z-0 bg-[radial-gradient(ellipse_80%_60%_at_50%_0%, rgba(16, 185, 129, 0.25), bg-transparent 70%), #000000]"></div> */}
        {/* <div className=" absolute inset-0 z-0 bg-radial-[ellipse_80%_60%_at_50%_0%] from-emerald-500 bg-transparent to-50% bg-back mask-b-from-20%"></div> */}
        {/* <div
          className="absolute inset-0 z-0 bg-radial-[ellipse_80%_60%_at_50%_0%] 
             from-emerald-500 from-0% to-transparent to-70% 
             "
        ></div> */}
        <div className="absolute inset-0 z-0 bg-radial-[125%_125%_at_50%_90%] from-white  from-40% to-green-500  to-100% dark:[background:radial-gradient(ellipse_80%_60%_at_50%_0%,rgba(16,185,129,0.25),transparent_80%),_#000000] md:mask-b-from-60%"></div>

        {/* <div
          className="absolute inset-0 z-0"
          style={{
            background:
              "radial-gradient(ellipse 80% 60% at 50% 0%, rgba(16, 185, 129, 0.25), transparent 70%), #000000",
          }}
        /> */}

        {/* <div
          className="absolute inset-0 z-0"
          style={{
            backgroundImage: `
        radial-gradient(125% 125% at 50% 90%, #ffffff 40%, #10b981 100%)
      `,
            backgroundSize: "100% 100%",
          }}
        /> */}
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
        {/* <div className="absolute top-1/6 sm:top-2/10 left-1/2 sm:left-6/8 z-10 shadow-2xl animate-bounce">
          <LaravelIcon />
        </div> */}
        {/* <div
          className="absolute inset-0
              bg-radial-[at_50%_75%]
              from-emerald-200
              dark:to-slate-900
              to-slate-50
              to-95%  opacity-25 "
        ></div> */}
        {/* <div className="absolute inset-0   bg-blue-500/60 dark:bg-emerald-500/60 w-44 h-44 rounded-full  blur-3xl opacity-40 z-10"></div>
        <div className="absolute top-2/2 -left-40 right-0  bg-green-400 w-44 h-44 rounded-full blur-3xl opacity-55 -z-10"></div>
        <div className="absolute top-0  right-0  bg-green-600/70 dark:bg-green-600/60 w-44 h-44 rounded-full blur-3xl  opacity-40 z-10"></div> */}
        {/* Dark Overlay */}
        {/* <div className="absolute inset-0 bg-background/95 dark:bg-background/50 z-[5]"></div> */}

        {/* Hero Content */}
        <div className="relative z-20 px-4 md:pt-10 h-full flex justify-center  items-center">
          <HeroSection />
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
