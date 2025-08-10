"use client";
import Image from "next/image";
import "swiper/css";
import { Autoplay } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";

const client = [
  {
    id: 1,
    name: "John Anderson",
    designation: "CEO ",
    company: "BrightWave Solutions",
    src: "/review/jhon.jpg",
    reviewDes:
      "Working with The Tech Resolver has been an outstanding experience. Their team is highly professional and always delivers projects on time. From website design to functionality, their expertise is clearly visible. Thank you for your excellent service!",
  },
  {
    id: 2,
    name: "Maria Lopez",
    designation: "Marketing Director",
    company: "GreenLeaf Enterprises",
    src: "/review/icon.webp",
    reviewDes:
      "The Tech Resolver created a modern, fast-loading website for our business that significantly enhanced our online presence. Their support service is excellent, providing quick assistance whenever needed.",
  },
  {
    id: 3,
    name: "David Kim",
    designation: "CTO ",
    company: "NextGen Innovations",
    src: "/review/david.jpg",
    reviewDes:
      "Prompt communication, reliability, and exceptional service are what make The Tech Resolver stand out. Their work quality exceeded our expectations. I look forward to collaborating with them again in the future.",
  },
  {
    id: 4,
    name: "Samantha Patel",
    designation: "Head of Digital Marketing",
    company: "UrbanX Corp",
    src: "/review/samanta.jpg",
    reviewDes:
      "Choosing The Tech Resolver for our digital marketing campaign and website development was the right decision. They completed the project on time and within budget. I highly recommend their services",
  },
];

export default function ReviewSection() {
  return (
    <section className="flex flex-col justify-center items-center mb-20 px-4">
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
                  className="w-10 h-10 object-cover rounded-full"
                />
                <div className="flex flex-col">
                  <h4 className="text-sm font-medium">{clientData.name}</h4>
                  <p className="text-xs text-gray-500">
                    {clientData.designation}
                  </p>
                </div>
              </div>
              <div className="text-sm text-gray-700 dark:text-gray-300 italic line-clamp-3">
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
