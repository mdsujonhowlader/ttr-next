import { getServices } from "@/actions/servicAction";
import Image from "next/image";
import Link from "next/link";
import { Edit, Plus } from "lucide-react";
import DeleteServiceButton from "./_components/DeleteServiceButton";

function serializeServices(services) {
  return services.map((service) => ({
    _id: service._id?.toString(),
    title: service.title,
    shortdescription: service.shortdescription,
    iconId: service.iconId ? {
      _id: service.iconId._id?.toString(),
      url: service.iconId.url,
    } : null,
  }));
}

export default async function ServicesPage() {
  const services = await getServices();
  const serializedServices = serializeServices(services);

  return (
    <section className="mt-10 px-4 z-20">
      <div className="flex justify-between items-center mb-8">
        <div>
          <h1 className="text-2xl font-bold text-gray-900 dark:text-white">
            Services
          </h1>
          <p className="text-gray-500 dark:text-gray-400 mt-1">
            Manage your services
          </p>
        </div>
        <Link
          href="/dashboard/services/add-service"
          className="flex items-center gap-2 px-4 py-2 bg-primary text-white rounded-lg hover:bg-primary/90 transition-colors"
        >
          <Plus className="w-4 h-4" />
          Add Service
        </Link>
      </div>

      {services.length > 0 ? (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service) => (
            <div
              key={service._id}
              className="bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-xl overflow-hidden shadow-sm hover:shadow-md transition-all duration-300"
            >
              <div className="relative h-40 bg-gray-100 dark:bg-gray-700">
                {service.iconId?.url ? (
                  <Image
                    src={service.iconId.url}
                    alt={service.title}
                    fill
                    className="object-contain p-4"
                  />
                ) : (
                  <div className="flex items-center justify-center h-full text-gray-400">
                    No Icon
                  </div>
                )}
              </div>
              <div className="p-5">
                <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-2 line-clamp-1">
                  {service.title}
                </h3>
                <p className="text-gray-600 dark:text-gray-300 text-sm line-clamp-2 mb-4">
                  {service.shortdescription}
                </p>
                <div className="flex gap-2">
                  <Link
                    href={`/dashboard/services/edit-service/${service._id}`}
                    className="flex-1 flex items-center justify-center gap-1 px-3 py-2 bg-blue-600 text-white text-sm rounded-lg hover:bg-blue-700 transition-colors"
                  >
                    <Edit className="w-4 h-4" />
                    Edit
                  </Link>
                  <DeleteServiceButton id={service._id} />
                </div>
              </div>
            </div>
          ))}
        </div>
      ) : (
        <div className="flex flex-col items-center justify-center py-20">
          <div className="w-16 h-16 bg-gray-100 dark:bg-gray-700 rounded-full flex items-center justify-center mb-4">
            <Plus className="w-8 h-8 text-gray-400" />
          </div>
          <h3 className="text-lg font-medium text-gray-900 dark:text-white mb-2">
            No Services Yet
          </h3>
          <p className="text-gray-500 dark:text-gray-400 mb-6">
            Get started by creating your first service
          </p>
          <Link
            href="/dashboard/services/add-service"
            className="flex items-center gap-2 px-4 py-2 bg-primary text-white rounded-lg hover:bg-primary/90 transition-colors"
          >
            <Plus className="w-4 h-4" />
            Add Service
          </Link>
        </div>
      )}
    </section>
  );
}