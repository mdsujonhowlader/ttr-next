import { BriefcaseIcon } from "@heroicons/react/24/outline";
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
    title: "Ads Campaign",
    desc: "We deliver end-to-end digital solutions to streamline operations, boost revenue, and drive long-term growth.",
    link: "/learn-more",
  },
  {
    id: 3,
    title: "Bug Fixing",
    desc: "We deliver end-to-end digital solutions to streamline operations, boost revenue, and drive long-term growth.",
    link: "/learn-more",
  },
  {
    id: 4,
    title: "SEO Optimization",
    desc: "We deliver end-to-end digital solutions to streamline operations, boost revenue, and drive long-term growth.",
    link: "/learn-more",
  },
];
export default function WhatWeDoSection() {
  return (
    <section className="my-12 flex flex-col space-y-5">
      <h2 className=" tracking-wide text-3xl font-bold mb-2 text-left md:text-center">
        What We Do?
      </h2>
      <p className="text-base   text-gray-600 mb-4 text-left  md:text-center">
        From custom websites to performance marketing, our team follows a proven
        process to ensure efficiency.
      </p>

      <div className="grid grid-cols-1 md:grid-cols-4 justify-items-center items-center md:gap-x-2 gap-y-2">
        {categorySection.map((category) => (
          <div
            key={category.id}
            className="bg-card flex flex-col justify-center items-start space-y-4 p-5 rounded-md border border-transparent transition-colors duration-300 hover:border-border dark:hover:border-border "
          >
            <BriefcaseIcon className="w-6 h-6 text-primary" />
            <h3 className="text-2xl font-semibold text-left">
              {category.title}
            </h3>
            <p className="text-base text-secondary">{category.desc}</p>
            <Link className=" hover:underline" href={category.link}>
              Learn More
            </Link>
          </div>
        ))}
      </div>
    </section>
  );
}
