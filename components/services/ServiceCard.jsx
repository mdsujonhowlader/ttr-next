"use client";
import { motion } from "motion/react";
import Image from "next/image";
import Link from "next/link";

export default function ServiceCard({ title, shortdescription, iconUrl, id }) {
  return (
    <motion.div
      initial={{ opacity: 0, translateY: 50 }}
      whileInView={{ opacity: 1, translateY: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.8 }}
      className="bg-white shadow-xs p-4 rounded-lg border border-gray-200 transition-colors duration-300 hover:border-primary  dark:bg-black dark:border-gray-800 "
    >
      <div className="flex flex-col justify-between items-start space-y-2">
        <Image
          src={iconUrl || "/icons/next.svg"}
          alt={`${title} icon`}
          width={24}
          height={24}
          className="object-contain"
        />

        <h3 className="text-xl font-semibold tracking-tight text-left line-clamp-1">
          {title}
        </h3>
        <p className="text-base text-secondary line-clamp-2">
          {shortdescription}
        </p>
        <Link className=" hover:underline text-primary" href={`services/${id}`}>
          Learn More
        </Link>
      </div>
    </motion.div>
  );
}
