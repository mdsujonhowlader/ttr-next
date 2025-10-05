"use client";
import { cn } from "@/lib/utils";
import { Button } from "@headlessui/react";
import { motion } from "motion/react";
import Link from "next/link";

const businesses = [
  {
    id: 1,
    businessName: "Corporate",
    color: "rose",
  },
  {
    id: 2,
    businessName: "POS System",
    color: "blue",
  },
  {
    id: 3,
    businessName: "Education",
    color: "orange",
  },
  {
    id: 4,
    businessName: "Real Estate",
    color: "purple",
  },
  {
    id: 5,
    businessName: "Ecommerce",
    color: "emerald",
  },
  {
    id: 6,
    businessName: "CMS System",
    color: "whtie",
  },
];

const styleMap = {
  rose: "dark:bg-rose-900/20 border-rose-400",
  blue: "dark:bg-blue-900/20 border-blue-400",
  orange: "dark:bg-orange-900/20 border-orange-400",
  purple: "dark:bg-purple-900/20 border-purple-400",
  emerald: "dark:bg-emerald-900/20 border-emerald-400",
  white: "dark:bg-white border-white",
};

const textColorStyle = {
  rose: "text-rose-400",
  blue: "text-blue-400",
  orange: "text-orange-400",
  purple: "text-purple-400",
  emerald: "text-emerald-400",
  white: "text-white",
};

export default function HeroSection({ appearances }) {
  const appearanceMap = Object.fromEntries(
    appearances.map((item) => [item.type, item.value])
  );
  return (
    <section className="flex flex-col justify-center items-center space-y-8 md:space-y-8">
      <motion.div
        initial={{ opacity: 0, translateY: 10 }}
        whileInView={{ opacity: 1, translateY: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
        className="dark:bg-primary/50  bg-zinc-100 border border-zinc-200 dark:border-primary/80 px-4 py-1 rounded-full"
      >
        <h4 className="text-sm md:text-md dark:text-white text-black font-medium">
          <span>⚡</span>
          Welcome to Tech Resoolver{" "}
          <span className="ml-2 font-bold" aria-hidden="true">
            &rarr;
          </span>
        </h4>
      </motion.div>

      <motion.h1
        initial={{ opacity: 0, translateY: 20 }}
        whileInView={{ opacity: 1, translateY: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
        className=" font-black text-4xl tracking-tight md:text-6xl leading-normal  text-center"
      >
        {/* className="bg-gradient-to-r from-emerald-800 via-emerald-600/80 to-emerald-400/60 bg-clip-text text-transparent" */}
        <span>Today Started Journey</span>{" "}
        <span style={{ color: appearanceMap?.primaryColor || "red" }}>
          with us
        </span>
      </motion.h1>
      <motion.div
        initial={{ opacity: 0, translateY: 30 }}
        whileInView={{ opacity: 1, translateY: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
        className="grid grid-cols-3 overflow-x-auto md:grid-cols-6 justify-items-center items-center gap-x-2 gap-y-2 sm:gap-x-2 "
      >
        {businesses.map((business) => (
          <div
            key={business.id}
            className={cn(
              "text-center rounded-full border-2  px-4 py-2",
              styleMap[business.color]
            )}
          >
            <h5
              className={cn(
                "font-semibold text-xs tracking-tight",
                textColorStyle[business.color]
              )}
            >
              {business.businessName}
            </h5>
          </div>
        ))}
      </motion.div>
      <motion.p
        initial={{ opacity: 0, translateY: 40 }}
        whileInView={{ opacity: 1, translateY: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
        className="text-lg md:text-md w-8/9 md:w-3/4 leading-relaxed text-center text-secondary"
      >
        We’re a full-service web and digital agency helping businesses grow
        through custom websites, marketing, and tech automation.
      </motion.p>
      <motion.div
        initial={{ opacity: 0, translateY: 50 }}
        whileInView={{ opacity: 1, translateY: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
        className="flex flex-col md:flex-row justify-center items-center gap-6 w-full"
      >
        <Link
          href="/contacts"
          className="bg-button w-full inline-flex  justify-center items-center md:w-auto transition-all duration-300 text-center font-semibold text-white px-5 py-2 md:px-4 md:py-2 rounded-lg hover:bg-button/90 cursor-pointer  "
        >
          Get Free Consultancy
        </Link>
        {/* style={{ color: appearanceMap?.secondaryColor || "red" }} */}
        <Button
          className={cn(
            "w-full md:w-auto transition-all  duration-300 font-semibold text-black  bg-white shadow hover:text-white px-5 py-2 md:px-4 md:py-2 rounded-lg border-button cursor-pointer hover:bg-button"
          )}
        >
          See running projects
        </Button>
      </motion.div>
    </section>
  );
}
