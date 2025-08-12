import Image from "next/image";
import Link from "next/link";

export default function Card({ title, shortdescription, iconUrl, id }) {
  return (
    <div className="bg-white shadow-sm p-4 rounded-lg border border-gray-200 transition-colors duration-300 hover:border-primary  dark:bg-black dark:border-gray-800 ">
      <div className="flex flex-col justify-between items-start  space-y-2">
        <Image
          src={iconUrl}
          alt={`${title} icon`}
          width={24}
          height={24}
          className="object-contain"
        />

        <h3 className="text-xl font-semibold tracking-tight text-left line-clamp-1">
          {title}
        </h3>
        <p className="text-base text-secondary line-clamp-2">
          {shortdescription}
        </p>
        <Link className=" hover:underline text-primary" href={`services/${id}`}>
          Learn More
        </Link>
      </div>
    </div>
  );
}
