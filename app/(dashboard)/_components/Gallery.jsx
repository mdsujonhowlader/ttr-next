import Image from "next/image";

export default function Gallery() {
  return (
    <div className="bg-white/85 drop-shadow-xs border-1 border-gray-300 rounded-lg p-2">
      <div className="my-2">
        <Image
          src="/products/billing.webp"
          width={3000}
          height={3000}
          alt="billing"
          className="w-full h-full rounded-lg"
        />
      </div>
      <h3 className="text-black">filename.jpg</h3>
    </div>
  );
}
