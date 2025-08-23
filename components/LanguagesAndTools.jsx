import languagesAndTools from "@/utils/languageandtools";
import Image from "next/image";
export default function LanguagesAndTools() {
  return (
    <section className="mb-20">
      <div className="text-center max-w-2xl mx-auto">
        <h1 className="text-5xl font-bold mb-2">Language and Tools</h1>
        <p className="text-secondary">
          We provide powerful digital solutions tailored for various industries.
        </p>
      </div>

      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 mt-8">
        {languagesAndTools.map((lt) => (
          <div
            key={lt.id}
            className="flex flex-col justify-center gap-3 items-center border border-primary dark:border-white p-5 hover:bg-card transition duration-300"
          >
            <div className="block dark:hidden w-[50px] h-[50px]">
              <Image
                src={lt.imageSrc.light || "/file.svg"}
                alt={lt.name || "languageandtools"}
                width={1000}
                height={1000}
                className="w-full h-full"
              />
            </div>
            <div className="hidden dark:block w-[50px] h-[50px]">
              <Image
                src={lt.imageSrc.dark || "/file.svg"}
                alt={lt.name || "languageandtools"}
                width={1000}
                height={1000}
                className="w-full h-full"
              />
            </div>
            <h3 className="text-black dark:text-white text-md font-medium">
              {lt.name}
            </h3>
          </div>
        ))}
      </div>
    </section>
  );
}
