import { getServicesById } from "@/actions/servicAction";
import Image from "next/image";

export default async function SingleServicePage({ params }) {
  const { id } = await params;
  const service = await getServicesById(id);

  if (!service) {
    return <div>Service not found</div>;
  }

  return (
    <section className="my-32 overflow-auto max-w-5xl mx-auto">
      <div className="bg-white rounded-lg shadow-md">
        <h2 className="text-3xl text-center font-medium mb-4">
          {service.title}
        </h2>
        <div className="flex justify-center mb-4">
          <Image
            src={service.imageId.path}
            alt={service.title}
            width={500}
            height={300}
            className="rounded-lg"
          />
        </div>
        <div className="flex items-center mb-4">
          <Image
            src={service.iconId.path}
            alt={`${service.title} icon`}
            width={50}
            height={50}
            className="mr-4"
          />
          <p className="text-gray-600">{service.shortdescription}</p>
        </div>
        <div
          className="prose dark:prose-invert max-w-none"
          dangerouslySetInnerHTML={{ __html: service.longDescription }}
        />
      </div>
    </section>
  );
}
