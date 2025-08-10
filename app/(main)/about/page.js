import ReviewSection from "@/components/ReviewSection";
import { Award, Blocks, ListTodo, Users } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

const experiances = [
  {
    id: 1,
    duration: 2,
    icon: <ListTodo size={50} color="white" />,
    subject: "Years of Experiance",
  },
  {
    id: 2,
    duration: 10,
    icon: <Blocks size={50} color="white" />,
    subject: "Complete projects",
  },
  {
    id: 3,
    duration: 12,
    icon: <Users size={50} color="white" />,
    subject: "Team members",
  },
  {
    id: 4,
    duration: 3,
    icon: <Award size={50} color="white" />,
    subject: "Total award wins",
  },
];

export default function AboutPage() {
  return (
    <section className="my-20 mx-auto space-y-8">
      <div className="bg-green-600 relative max-w-5xl mx-auto overflow-hidden sm:rounded-2xl">
        <Image
          className="absolute inset-0 h-full w-full object-cover opacity-30"
          src="/developer-team.jpg"
          alt="People working on laptops"
          width={1000}
          height={800}
        />
        <div className="absolute inset-0 bg-gradient-to-br from-green-600 via-green-600 to-transparent opacity-90"></div>
        <div className="relative max-w-2xl mx-auto text-center py-16 px-4 sm:py-20 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-extrabold text-gray-100 sm:text-4xl">
            <span className="block">Our Main Goal is to</span>
            <span className="block">Satisfied Local & Global Clients</span>
          </h2>
          <p className="mt-4 text-lg leading-6 text-green-200">
            Committed to delivering outstanding results for clients everywhere.
            Our focus is on quality, trust, and continuous improvement.
          </p>
          <div className="mt-10 max-w-sm mx-auto sm:max-w-none sm:flex sm:justify-center">
            <div className="space-y-4 sm:space-y-0 sm:mx-auto sm:inline-grid sm:grid-cols-2 sm:gap-5">
              <Link
                href="/contacts"
                className="text-green-600 bg-white hover:bg-white/90 flex items-center justify-center px-4 py-3 border border-transparent text-base font-medium rounded-md shadow-sm sm:px-8"
              >
                {" "}
                Contact with us{" "}
              </Link>
              <Link
                href="#"
                className="text-white bg-green-600 hover:bg-green-600/80 flex items-center justify-center px-4 py-3 border border-transparent text-base font-medium rounded-md shadow-sm   sm:px-8"
              >
                {" "}
                Our Project{" "}
              </Link>
            </div>
          </div>
        </div>
      </div>
      <div className="bg-green-600">
        <div className="max-w-5xl grid grid-cols-4 py-8 gap-4 mx-auto">
          {experiances.map((experiance) => (
            <div className="flex items-center gap-3" key={experiance.id}>
              <div className="bg-green-900 rounded-2xl p-2">
                {experiance.icon}
              </div>
              <div>
                <h2 className="text-4xl text-white font-extrabold">
                  {experiance.duration < 10
                    ? "0" + experiance.duration + "+"
                    : experiance.duration + "+"}
                </h2>
                <span className="text-white tracking-tight">
                  {experiance.subject}
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
      <div className="max-w-5xl mx-auto my-30">
        <div className="grid grid-cols-2 justify-items-between items-start gap-4 mb-40">
          <div className="relative">
            <Image
              src="/teams/tanvir.jpg"
              alt="Tanvir"
              width={1000}
              height={1000}
              className="w-[400px] h-[400px] relative object-cover rounded-2xl z-10"
            />
            <div className="absolute bg-green-300 w-[400px] h-[400px] left-[10%] bottom-[10%] rounded-2xl"></div>
          </div>
          <div className="border-l-2 border-green-600 p-4">
            <p>
              The future of software development is bright and filled with
              limitless possibilities. Emerging technologies like artificial
              intelligence, machine learning, cloud computing, and automation
              are fundamentally transforming the way we build solutions. As a
              seasoned developer, I believe these advancements will not only
              enable us to create faster and smarter applications but also open
              doors to innovative ideas that can solve complex problems . I am
              committed to embracing these challenges and leveraging technology
              and creativity to pioneer new horizons in the industry.
            </p>
            <h2 className="font-semibold text-black dark:text-white mt-8">
              Md. Tanvirul Islam Tanvir
            </h2>
            <p className="text-black dark:text-white text-sm">
              Co-Founder & CEO
            </p>
            <p className="text-black dark:text-white text-sm">
              The tech resolver
            </p>
          </div>
        </div>
        <div className="grid grid-cols-2 justify-end items-start gap-6 mb-40">
          <div className="border-r-2 border-green-600 p-6">
            <p>
              The landscape of software development is evolving rapidly, driven
              by groundbreaking innovations and emerging technologies. With
              advancements in artificial intelligence, blockchain, cloud
              infrastructure, and automation, we are witnessing a paradigm shift
              in how applications are designed and delivered. As an experienced
              developer, I see these trends empowering us to build more
              scalable, secure, and intelligent solutions that address
              real-world challenges. I am dedicated to harnessing these
              technologies responsibly to push the boundaries of what’s possible
              and drive meaningful progress in the tech industry.
            </p>
            <h2 className="font-semibold text-black dark:text-white mt-8">
              Md. Sujon Howlader
            </h2>
            <p className="text-black dark:text-white text-sm">
              Co-Founder & CTO
            </p>
            <p className="text-black dark:text-white text-sm">
              The tech resolver
            </p>
          </div>
          {/* <Image
            src="/teams/tanvir.jpg"
            alt="Tanvir"
            width={1000}
            height={1000}
            className="w-[400px] h-[400px]  object-cover rounded-2xl  z-10"
          /> */}
          <div className="relative self-end">
            <div className="relative bg-green-300 w-[400px] h-[400px] left-[10%] right-[10] top-[10%] rounded-2xl"></div>
            <Image
              src="/teams/sujon.jpg"
              alt="Sujon"
              width={1000}
              height={1000}
              className="w-[400px] grayscale h-[400px] absolute object-cover rounded-2xl left-[20%] -right-[10] -top-[10%] z-10"
            />
          </div>
        </div>
      </div>
      {/* Our Vision, mission, Goal section here */}
      {/* Our Ethics Excelence here */}
      {/* Our Excelent Team  here(optional) */}
      <div className="max-w-5xl mx-auto">
        <ReviewSection />
      </div>
    </section>
  );
}
