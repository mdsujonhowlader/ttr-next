import Image from "next/image";
import Link from "next/link";

export default function BrandCompany() {
  return (
    <section className="mx-auto">
      <div className="w-2/3 sm:w-1/2 lg:w-1/3 mx-auto text-center mb-5 mt-5">
        <h2 className=" tracking-tight text-3xl font-bold mb-2">
          Who Trust us
        </h2>
      </div>

      <div className="grid grid-cols-3 justify-items-center items-center md:grid-cols-6 gap-x-6 md:my-4">
        <div className="bg-card px-3 rounded-lg self-center py-1 ">
          <Image
            src="/company/gmg.png"
            width="2000"
            height="1000"
            className="w-14"
            alt="company"
          />
        </div>
        <div className="bg-card px-3 rounded-lg self-center py-1 ">
          <Image
            src="/company/omnigo.png"
            width="2000"
            height="1000"
            className="w-20"
            alt="company"
          />
        </div>
        <div className="bg-card px-3 rounded-lg self-center py-1 ">
          <Image
            src="/company/smarterservices.png"
            width="2000"
            height="1000"
            className="w-30"
            alt="company"
          />
        </div>
        <div className="bg-card px-3 rounded-lg self-center py-1 ">
          <Image
            src="/company/gmg.png"
            width="2000"
            height="1000"
            className="w-14"
            alt="company"
          />
        </div>
        <div className="bg-card px-3 rounded-lg self-center py-1 ">
          <Image
            src="/company/omnigo.png"
            width="2000"
            height="1000"
            className="w-20"
            alt="company"
          />
        </div>
        <div className="bg-card px-3 rounded-lg self-center py-1 ">
          <Image
            src="/company/smarterservices.png"
            width="2000"
            height="1000"
            className="w-30"
            alt="company"
          />
        </div>
      </div>

      <div className="mt-10 text-center">
        <Link
          className="inline-flex items-center transition-all duration-300 gap-x-2 text-sm font-medium border border-button hover:bg-button rounded-lg  px-4 py-2  hover:text-white focus:outline-hidden focus:bg-button dark:focus:bg-primary dark:hover:bg-primary dark:border-primary"
          href="#"
        >
          Read Case Studies
          <svg
            className="shrink-0 size-4"
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <path d="m9 18 6-6-6-6" />
          </svg>
        </Link>
      </div>
    </section>
  );
}
