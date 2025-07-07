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
    <section className="grid justify-items-center gap-5 my-10 px-4">
      {/* Header */}
      <div className="space-y-3 max-w-3xl text-center">
        <h1 className="text-3xl font-bold">What our Clients Say</h1>
        <p className="text-pretty tracking-tight text-base text-gray-500">
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
        className="w-full max-w-6xl mt-8"
      >
        {client.map((clientData) => (
          <SwiperSlide key={clientData.id}>
            <div className="bg-card p-5 rounded-lg shadow-md h-full space-y-4">
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
