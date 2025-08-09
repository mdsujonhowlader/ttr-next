"use client";
import Image from "next/image";
import "swiper/css";
import { Autoplay } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";

const client = [
  {
    id: 1,
    name: "Tanvirul Islam",
    designation: "Co Founder & CEO",
    company: "YOYO Ltd.",
    src: "/review/icon.webp",
    reviewDes:
      "We deliver end-to-end digital solutions to streamline operations, boost revenue, and drive long-term growth.",
  },
  {
    id: 2,
    name: "Himel Nakib",
    designation: "Co Founder & CEO",
    company: "ZOZO Ltd.",
    src: "/review/icon.webp",
    reviewDes:
      "We deliver end-to-end digital solutions to streamline operations, boost revenue, and drive long-term growth.",
  },
  {
    id: 3,
    name: "Sujon Howlader",
    designation: "Founder & CEO",
    company: "Mega Digital",
    src: "/review/sujon.jpg",
    reviewDes:
      "We deliver end-to-end digital solutions to streamline operations, boost revenue, and drive long-term growth.",
  },
  {
    id: 4,
    name: "Sujon Howlader",
    designation: "Founder & CEO",
    company: "Mega Digital",
    src: "/review/sujon.jpg",
    reviewDes:
      "We deliver end-to-end digital solutions to streamline operations, boost revenue, and drive long-term growth.",
  },
];

export default function ReviewSection() {
  return (
    <section className="flex flex-col justify-center items-center my-20 px-4">
      {/* Header */}
      <div className="space-y-3 max-w-3xl">
        <h1 className="text-5xl font-bold text-center">What our Clients Say</h1>
        <p className="text-pretty tracking-tight text-base text-gray-500 text-center">
          Our honorable clients reviewed our work. Read this before placing your
          order.
        </p>
      </div>

      {/* Swiper Slider */}
      <Swiper
        slidesPerView={1}
        spaceBetween={20}
        loop={true}
        autoplay={{ delay: 4000, disableOnInteraction: false }}
        breakpoints={{
          768: {
            slidesPerView: 3,
          },
        }}
        modules={[Autoplay]}
        className="w-full max-w-6xl my-8"
      >
        {client.map((clientData) => (
          <SwiperSlide key={clientData.id}>
            <div className="bg-white border border-gray-100 shadow-xs  p-5 rounded-lg h-full space-y-4 dark:bg-black dark:border-gray-800">
              <div className="flex items-center space-x-3">
                <Image
                  src={clientData.src}
                  alt="reviewer"
                  width={40}
                  height={40}
                  className="w-10 h-10 rounded-full"
                />
                <div className="flex flex-col">
                  <h4 className="text-sm font-medium">{clientData.name}</h4>
                  <p className="text-xs text-gray-500">
                    {clientData.designation}
                  </p>
                </div>
              </div>
              <div className="text-sm text-gray-700 dark:text-gray-300 italic">
                “{clientData.reviewDes}”
              </div>
              <p className="text-sm text-primary font-semibold">
                {clientData.company}
              </p>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </section>
  );
}
