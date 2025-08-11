import Image from "next/image";
import ImageAction from "./ImageAction";

export default function Gallery({ images }) {
  return (
    <div className="drop-shadow-xs py-2 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
      {images?.map((image) => (
        <div
          key={image._id}
          className="bg-white/20 cursor-pointer border hover:border-primary flex flex-col justify-center items-center py-2 border-gray-300 rounded-lg"
        >
          <div className="relative w-50 h-30 rounded-md group ">
            <Image
              src={image.url}
              width={160}
              height={120}
              alt={`${image.filename} image`}
              className="object-cover w-full h-full rounded-md group-hover:bg-gray-50"
              priority
            />
            <div className="absolute inset-0 bg-black/20 bg-opacity-30 opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-md"></div>

            <div className="absolute right-2 top-1/5 -translate-y-1/2 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
              <ImageAction />
            </div>
          </div>
          <h3 className="mt-2 px-4 text-sm text-gray-500 break-words w-full line-clamp-2">
            {image.filename}
          </h3>
        </div>
      ))}
    </div>
  );
}
