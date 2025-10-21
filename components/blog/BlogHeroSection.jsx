"use client";
import { cn } from "@/lib/utils";
import { Button } from "@headlessui/react";
import { motion } from "motion/react";
import Image from "next/image";
export default function BlogHeroSection() {
  return (
    <>
      <motion.div
        initial={{ opacity: 0, translateY: 40 }}
        whileInView={{ opacity: 1, translateY: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
        className="rounded-lg border-1 border-zinc-300 dark:border-gray-800 grid grid-cols-1 md:grid-cols-2 gap-6 px-6 py-10 bg-zinc-50 dark:bg-black/50 relative mb-10"
      >
        {/* Text Section */}
        <div className="space-y-4 sm:mt-4">
          <h1 className="text-3xl md:text-5xl font-black tracking-tight leading-tight">
            Welcome to The Tech Resolver&apos;s Blog Page
          </h1>
          <p className="leading-relaxed text-gray-600 dark:text-gray-300 text-sm md:text-base">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eius
            accusantium magnam optio nam adipisci qui dignissimos.
          </p>
          <Button
            className={cn(
              "inline-flex px-4 py-2 font-semibold items-center justify-center bg-green-50 dark:bg-green-900 border-2 border-green-500 text-green-500 rounded-lg hover:bg-green-500 hover:text-white transition-colors duration-300"
            )}
          >
            Learn More
          </Button>
        </div>

        {/* Image Section */}
        <div className="flex items-end sm:justify-end">
          <Image
            src="/Dashboard-bro.svg"
            alt="Dashboard SVG Icon"
            width={500}
            height={400}
            className="object-contain max-w-xs"
          />
        </div>
      </motion.div>
    </>
  );
}
