import { getServices } from "@/actions/servicAction";
import ServiceCard from "./ServiceCard";
export default async function WhatWeDoSection() {
  const services = await getServices();

  return (
    <section className="my-20">
      <h2 className="tracking-tight text-5xl font-bold mb-2 text-center">
        What We Do?
      </h2>
      <p className="text-base  text-gray-400 mb-4 text-center">
        From custom websites to performance marketing, our team follows a proven
        process to ensure efficiency.
      </p>

      <div className="grid grid-cols-1 sm:grid-cols-4 md:grid-cols-4 lg:grid-cols-3 items-center gap-4">
        {services.length > 0 ? (
          services.map((service) => (
            <ServiceCard
              key={service.id}
              id={service.id}
              title={service?.title}
              shortdescription={service.shortdescription}
              iconUrl={service.iconId?.url}
            />
          ))
        ) : (
          <p>Not service Found</p>
        )}
      </div>
    </section>
  );
}
