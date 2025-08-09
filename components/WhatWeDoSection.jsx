import { Briefcase } from "lucide-react";
import Link from "next/link";

const categorySection = [
  {
    id: 1,
    title: "Business Solution",
    desc: "We deliver end-to-end digital solutions to streamline operations, boost revenue, and drive long-term growth.",
    link: "/learn-more",
  },
  {
    id: 2,
    title: "Web Design & Developement",
    desc: "We deliver end-to-end digital solutions to streamline operations, boost revenue, and drive long-term growth.",
    link: "/learn-more",
  },
  {
    id: 3,
    title: "Meta Marketing",
    desc: "We deliver end-to-end digital solutions to streamline operations, boost revenue, and drive long-term growth.",
    link: "/learn-more",
  },
  {
    id: 4,
    title: "SEO Optimization",
    desc: "We deliver end-to-end digital solutions to streamline operations, boost revenue, and drive long-term growth.",
    link: "/learn-more",
  },
  {
    id: 5,
    title: "AI  Solution",
    desc: "We deliver end-to-end digital solutions to streamline operations, boost revenue, and drive long-term growth.",
    link: "/learn-more",
  },
  {
    id: 6,
    title: "Busienss Consultancy",
    desc: "We deliver end-to-end digital solutions to streamline operations, boost revenue, and drive long-term growth.",
    link: "/learn-more",
  },
];
export default function WhatWeDoSection() {
  return (
    <section className="mb-20">
      <h2 className="tracking-tight text-5xl font-bold mb-2 text-left md:text-center">
        What We Do?
      </h2>
      <p className="text-base  text-gray-400 mb-4 text-left  md:text-center">
        From custom websites to performance marketing, our team follows a proven
        process to ensure efficiency.
      </p>

      <div className="grid grid-cols-1 md:grid-cols-3 justify-items-center  items-center gap-4">
        {categorySection.map((category) => (
          <div
            key={category.id}
            className="bg-white shadow-sm  flex flex-col justify-center items-start space-y-4 h-full overflow-hidden p-4 rounded-lg border border-gray-200 transition-colors duration-300 hover:border-primary  dark:bg-black dark:border-gray-800"
          >
            <Briefcase className="w-6 h-6 text-primary dark:text-secondary" />
            <h3 className="text-xl font-semibold tracking-tight text-left flex-grow">
              {category.title}
            </h3>
            <p className="text-base text-secondary ">{category.desc}</p>
            <Link className=" hover:underline" href={category.link}>
              Learn More
            </Link>
          </div>
        ))}
      </div>
    </section>
  );
}
