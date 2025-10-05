import Image from "next/image";
const logos = [
  "/company/gmg.png",
  "/company/omnigo.png",
  "/company/smarterservices.png",
  "/company/omnigo.png",
  "/company/smarterservices.png",
  "/company/smarterservices.png",
  "/company/smarterservices.png",
];
export default function BrandCompany() {
  return (
    <section className="mb-20">
      <h2 className="tracking-tight text-5xl text-center text-green-400 font-bold my-6">
        Who Trust us
      </h2>
      <p className="text-base  text-gray-400 mb-4 text-left  md:text-center">
        From startups to established companies — our clients trust us to bring
        their digital visions to life.
      </p>
      <div className=" flex overflow-hidden  space-x-16 [mask-image:linear-gradient(to_left,transparent,black_25%,black_85%,transparent)]">
        <div className="md:my-4 animate-loop-scroll flex items-center  space-x-16 min-w-0">
          {logos.map((src, i) => (
            <div
              key={i}
              className="bg-white  dark:border-gray-800 border-1 border-gray-100 shadow-sm fill-white px-3 rounded-lg self-center py-1 flex-shrink-0"
            >
              <Image
                src={src}
                width={2000}
                height={1000}
                className="w-44 "
                alt="company"
              />
            </div>
          ))}
        </div>
        <div
          className="md:my-4 flex items-center space-x-16 min-w-0 opacity-0"
          aria-hidden="true"
        >
          {logos.map((src, i) => (
            <div
              key={i}
              className="bg-white fill-white  px-3 rounded-lg self-center py-1 flex-shrink-0"
            >
              <Image
                src={src}
                width={2000}
                height={1000}
                className="w-44 object-contain"
                alt="company"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
