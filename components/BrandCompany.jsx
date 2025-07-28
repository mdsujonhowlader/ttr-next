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
    <section className="md:my-10">
      <div className="mx-auto text-center">
        <h2 className=" tracking-tight text-5xl text-green-400 font-bold my-5">
          Who Trust us
        </h2>
      </div>

      <div className="flex overflow-hidden space-x-16 ">
        <div className="md:my-4 animate-loop-scroll flex items-center  space-x-16 min-w-0">
          {logos.map((src, i) => (
            <div
              key={i}
              className="bg-card fill-white px-3 rounded-lg self-center py-1 flex-shrink-0"
            >
              <Image
                src={src}
                width={2000}
                height={1000}
                className="w-44 filter  grayscale brightness-125 contrast-125"
                alt="company"
              />
            </div>
          ))}
        </div>
        <div
          className="md:my-4 animate-loop-scroll flex items-center space-x-16 min-w-0 opacity-0"
          aria-hidden="true"
        >
          {logos.map((src, i) => (
            <div
              key={i}
              className="bg-card fill-white px-3 rounded-lg self-center py-1 flex-shrink-0"
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
      </div>
    </section>
  );
}
