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
            className="flex justify-center items-center border border-primary dark:border-white p-5 hover:bg-card transition duration-300"
          >
            <Image
              src={lt.imageSrc}
              alt="languageandtools"
              width="1000"
              height="1000"
              className="w-[100px] "
            />
          </div>
        ))}
      </div>
    </section>
  );
}
