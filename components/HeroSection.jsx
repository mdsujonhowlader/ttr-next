import { cn } from "@/lib/utils";
import { Button } from "@headlessui/react";

const busineses = [
  {
    id: 1,
    businessName: "Corporate",
    color: "rose",
  },
  {
    id: 2,
    businessName: "POS System",
    color: "blue",
  },
  {
    id: 3,
    businessName: "Education",
    color: "orange",
  },
  {
    id: 4,
    businessName: "Real Estate",
    color: "purple",
  },
  {
    id: 5,
    businessName: "Ecommerce ",
    color: "emerald",
  },
  {
    id: 6,
    businessName: "CMS System",
    color: "whtie",
  },
];

const styleMap = {
  rose: "dark:bg-rose-900/20 border-rose-400",
  blue: "dark:bg-blue-900/20 border-blue-400",
  orange: "dark:bg-orange-900/20 border-orange-400",
  purple: "dark:bg-purple-900/20 border-purple-400",
  emerald: "dark:bg-emerald-900/20 border-emerald-400",
  white: "dark:bg-white border-white",
};

const textColorStyle = {
  rose: "text-rose-400",
  blue: "text-blue-400",
  orange: "text-orange-400",
  purple: "text-purple-400",
  emerald: "text-emerald-400",
  white: "text-white",
};

export default function HeroSection({ appearances }) {
  return (
    <section className="flex flex-col justify-center items-center  space-y-10 md:space-y-8">
      <div className="dark:bg-badge/20 bg-badge px-4 py-1 text-white rounded-lg shadow">
        <h4 className="text-sm md:text-md tracking-tight font-medium">
          Welcome to Tech Resoolver{" "}
          <span className="ml-2" aria-hidden="true">
            &rarr;
          </span>
        </h4>
      </div>
      <h1 className="w-4/4 md:w-4/5  font-bold md:font-bold text-4xl tracking-tight  md:text-5xl leading-normal uppercase text-center">
        Today Started Journey{" "}
        {/* className={cn(`text-[${appearances.primaryColor || "#1d4ed8"}]`)} */}
        <span style={{ color: appearances?.primaryColor || "#1d4ed8" }}>
          with us
        </span>
      </h1>
      <div>
        <div className="grid grid-cols-2 overflow-x-auto md:grid-cols-6 justify-items-center items-center gap-x-3 gap-y-3 sm:gap-x-3 ">
          {busineses.map((busines) => (
            <div
              key={busines.id}
              className={cn(
                "text-center rounded-full border-2  text-sm px-5 py-2 ",
                styleMap[busines.color]
              )}
            >
              <h5
                className={cn(
                  "font-semibold text-md  tracking-tight",
                  textColorStyle[busines.color]
                )}
              >
                {busines.businessName}
              </h5>
            </div>
          ))}
        </div>
      </div>
      <p className="text-lg md:text-xl w-8/9 md:w-3/4 tracking-tight text-center text-secondary ">
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sint excepturi
        amet incidunt dolores soluta atque qui illum doloribus, quam, possimus.
      </p>
      <div className="flex flex-col md:flex-row justify-center items-center gap-2 w-full">
        <Button className="bg-button w-full md:w-auto transition-all duration-300  font-medium text-white px-5 py-2 md:px-4 md:py-2 rounded-lg hover:bg-button/90 cursor-pointer  ">
          Get Free Consultancy
        </Button>
        <Button
          className={cn(
            "w-full md:w-auto transition-all  duration-300 font-medium text-black  bg-white shadow hover:text-white px-5 py-2 md:px-4 md:py-2 rounded-lg border-button cursor-pointer hover:bg-button"
          )}
          style={{ color: appearances?.primaryColor || "#1d4ed8" }}
        >
          See running projects
        </Button>
      </div>
    </section>
  );
}
