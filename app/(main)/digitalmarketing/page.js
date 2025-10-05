import Image from "next/image";
import Link from "next/link";

export default function DigitalMarketing() {
  return (
    <section className="pt-24 max-w-6xl mx-auto">
      <div className="bg-green-800 relative  mx-auto overflow-hidden sm:rounded-2xl">
        <Image
          className="absolute inset-0 h-full w-full object-cover opacity-40"
          src="/digitalmarketing.jpg"
          alt="People working on laptops"
          width={1000}
          height={800}
        />
        <div className="absolute inset-0 bg-gradient-to-br from-green-800 via-green-800 to-transparent opacity-90"></div>
        <div className="relative max-w-2xl mx-auto text-center py-16 px-4 sm:py-20 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-extrabold text-gray-100 sm:text-4xl">
            <span className="block">Elevate Your Brand With Expert</span>
            <span className="block">Web & Digital Marketing</span>
          </h2>
          <p className="mt-4 text-lg leading-6 text-green-200">
            Welcome to The Tech Resolver where we specialize in revolutionizing
            your online presence through expert Web and digital marketing
            solutions.
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
                Our Case Studies{" "}
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
