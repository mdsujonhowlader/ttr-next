"use client";

import { cn } from "@/lib/utils";
import { Button } from "@headlessui/react";
import {
  FacebookIcon,
  Instagram,
  Linkedin,
  TwitterIcon,
  Youtube,
} from "lucide-react";
import { motion } from "motion/react";
import Image from "next/image";
import Link from "next/link";
export default function ContactPage() {
  return (
    <section className="max-w-6xl relative py-28 mx-auto ">
      <motion.div
        initial={{ opacity: 0, translateY: 40 }}
        whileInView={{ opacity: 1, translateY: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
        className="rounded-lg border-2 border-green-300 dark:border-gray-700 grid grid-cols-1 md:grid-cols-2 gap-6 px-6 py-10 bg-green-50 dark:bg-black/50 relative mb-10"
      >
        {/* Text Section */}
        <div className="space-y-4 sm:mt-4">
          <h1 className="text-3xl md:text-5xl font-black tracking-tight leading-tight">
            Welcome to The Tech Resolver&apos;s Contact Page
          </h1>
          <p className="leading-relaxed text-gray-600 dark:text-gray-300 text-sm md:text-base">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eius
            accusantium magnam optio nam adipisci qui dignissimos.
          </p>
          <Button
            className={cn(
              "inline-flex px-4 py-2 font-semibold items-center justify-center bg-green-50 dark:bg-green-900 border-2 border-green-500 text-green-600 rounded-lg hover:bg-green-500 hover:text-white transition-colors duration-300"
            )}
          >
            Learn More
          </Button>
        </div>

        {/* Image Section */}
        <div className="flex items-end sm:justify-end">
          <Image
            src="/ContactUs.svg"
            alt="ContactUs SVG Icon"
            width={500}
            height={400}
            className="object-contain max-w-xs"
          />
        </div>
      </motion.div>

      {/* Contact Form + Map */}
      <div className="space-y-10">
        {/* Contact Form */}
        <div className="flex justify-between items-start gap-4">
          <div className="bg-white border-gray-300 dark:bg-black  w-2xl border dark:border-gray-800 px-4 py-8 rounded-2xl space-y-5">
            <div>
              <label className="block text-sm font-medium text-foreground">
                Your Name
              </label>
              <input
                type="text"
                placeholder="Enter your name"
                className="mt-1 w-full rounded-md border border-primary bg-background px-4 py-3 outline-none"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-foreground">
                Your Email
              </label>
              <input
                type="email"
                placeholder="Enter your email"
                className="mt-1 w-full rounded-md border border-primary bg-background px-4 py-3 outline-none"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-foreground">
                Your Message
              </label>
              <textarea
                rows={5}
                placeholder="Write your message..."
                className="mt-1 w-full rounded-md border border-primary bg-background px-4 py-3 outline-none resize-none"
              ></textarea>
            </div>
            <button className="px-6 py-3 bg-button text-background rounded-md hover:bg-button/90 transition">
              Send Message
            </button>
          </div>
          <div className="flex flex-col items-start h-full">
            <h3 className="text-4xl font-bold leading-tight tracking-tight">
              Don&apos;t Hesitate to contact us
            </h3>
            <p className="leading-8 text-gray-500 dark:text-gray-400">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempora
              rem pariatur aperiam a dolores dolorem vel quis.
            </p>
            <div className="grid grid-cols-2 gap-4 mt-5">
              <div className="flex  rounded-2xl px-4 py-2 items-center gap-4 bg-white dark:bg-black border-2 border-green-300 dark:border-gray-800">
                {/* Icon */}
                <div className="bg-green-100 dark:bg-green-800/30 p-2 rounded-full flex items-center justify-center">
                  <Image
                    src="/icons/address.svg"
                    alt="addressIcon"
                    width={40}
                    height={40}
                    className="rounded-full object-contain"
                  />
                </div>

                {/* Text */}
                <div>
                  <h4 className="text-xl font-bold text-black dark:text-white">
                    Office
                  </h4>
                  <p className="text-sm text-gray-500 dark:text-gray-300">
                    Banasree Block-D, Dhaka
                  </p>
                </div>
              </div>
              <div className="flex rounded-2xl px-4 py-2 items-center gap-4 bg-white dark:bg-black border-2 border-green-300 dark:border-gray-800">
                {/* Icon */}
                <div className="bg-green-100 dark:bg-green-800/30 p-2 rounded-full flex items-center justify-center">
                  <Image
                    src="/icons/phone.svg"
                    alt="phone icon"
                    width={40}
                    height={40}
                    className="rounded-full object-contain"
                  />
                </div>

                {/* Text */}
                <div>
                  <h4 className="text-xl font-bold text-black dark:text-white">
                    Phone
                  </h4>
                  <p className="text-sm  text-gray-500 dark:text-gray-300">
                    +880-198989899
                  </p>
                </div>
              </div>
              <div className="flex  rounded-2xl px-4 py-2 items-center gap-4 bg-white dark:bg-black border-2 border-green-300 dark:border-gray-800">
                {/* Icon */}
                <div className="bg-green-100 dark:bg-green-800/30 p-2 rounded-full flex items-center justify-center">
                  <Image
                    src="/icons/hours.svg"
                    alt="addressIcon"
                    width={40}
                    height={40}
                    className="rounded-full object-contain"
                  />
                </div>

                {/* Text */}
                <div>
                  <h4 className="text-xl font-bold text-black dark:text-white">
                    Work hours
                  </h4>
                  <p className="text-sm text-gray-500 dark:text-gray-300">
                    Everyday 09 am - 07 pm
                  </p>
                </div>
              </div>
              <div className="flex  rounded-2xl px-4 py-2 items-center gap-4 bg-white dark:bg-black border-2 border-green-300 dark:border-gray-800">
                {/* Icon */}
                <div className="bg-green-100 dark:bg-green-800/30 p-2 rounded-full flex items-center justify-center">
                  <Image
                    src="/icons/mail.svg"
                    alt="addressIcon"
                    width={40}
                    height={40}
                    className="rounded-full object-contain"
                  />
                </div>

                {/* Text */}
                <div>
                  <h4 className="text-xl font-bold text-black dark:text-white">
                    Email
                  </h4>
                  <p className="text-sm text-gray-500 dark:text-gray-300">
                    thetechresolver@support.com
                  </p>
                </div>
              </div>
            </div>
            <div className="mt-auto pt-40 flex justify-between items-start w-full">
              <div className="font-bold text-2xl mb-4">
                <h2>Social Media:</h2>
              </div>
              <div className="flex gap-4">
                <Link
                  href="https://facebook.com"
                  target="_blank"
                  className="w-8 h-8 bg-green-100  dark:bg-green-900/40 rounded-lg inline-flex justify-center items-center transform hover:scale-110 transition duration-300 ease-in-out"
                >
                  <FacebookIcon className="w-4 h-4  text-white stroke-green-600" />
                </Link>
                <Link
                  href="https://twitter.com"
                  target="_blank"
                  className="w-8 h-8 bg-green-100 dark:bg-green-900/40  inline-flex justify-center items-center rounded-lg transform hover:scale-110 transition duration-300 ease-in-out"
                >
                  <TwitterIcon className="w-4 h-4  text-white stroke-green-600" />
                </Link>
                <Link
                  href="https://instagram.com"
                  target="_blank"
                  className="w-8 h-8 bg-green-100 dark:bg-green-900/40 inline-flex justify-center items-center rounded-lg transform hover:scale-110 transition duration-300 ease-in-out"
                >
                  <Instagram className="w-4 h-4 text-white stroke-green-600" />
                </Link>
                <Link
                  href="https://linkedin.com"
                  target="_blank"
                  className="w-8 h-8 bg-green-100 dark:bg-green-900/40 inline-flex justify-center items-center rounded-lg transform hover:scale-110 transition duration-300 ease-in-out"
                >
                  <Linkedin className="w-4 h-4 text-white stroke-green-600" />
                </Link>
                <Link
                  href="https://youtube.com"
                  target="_blank"
                  className="w-8 h-8 bg-green-100 dark:bg-green-900/40 inline-flex justify-center items-center rounded-lg transform hover:scale-110 transition duration-300 ease-in-out"
                >
                  <Youtube className="w-4 h-4 text-white stroke-green-600" />
                </Link>
              </div>
            </div>
          </div>
        </div>
        <div className="w-full h-[400px] rounded-md overflow-hidden shadow-md">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d116818.17319103966!2d90.42195359999997!3d23.798396199999996!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e0!3m2!1sen!2sbd!4v1751821993479!5m2!1sen!2sbd"
            width="600"
            height="450"
            style={{ border: 0 }}
            allowFullScreen=""
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            className="w-full"
          ></iframe>
        </div>
      </div>
    </section>
  );
}
