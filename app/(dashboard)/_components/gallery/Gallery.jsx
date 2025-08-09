import Image from "next/image";

export default function Gallery({ images }) {
  return (
    <div className="drop-shadow-xs p-2 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
      {images?.map((image) => (
        <div
          key={image._id}
          className="bg-white/20 cursor-pointer  border hover:border-primary flex flex-col justify-center items-center p-2 border-gray-300 rounded-lg"
        >
          <div className="w-50  hover- h-30 overflow-hidden rounded-md">
            <Image
              src={image.path}
              width={160}
              height={120}
              alt={image.filename}
              className="object-cover w-full h-full rounded-md"
            />
          </div>
          <h3 className="mt-2 text-sm text-white break-words w-full">
            {image.filename}
          </h3>
        </div>
      ))}
    </div>
  );
}
