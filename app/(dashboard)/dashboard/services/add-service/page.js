import { getImages } from "@/actions/gellaryAction";
import ServiceFormClient from "../../../_components/services/ServiceFormClient";
export default async function ServiceLayout() {
  const safeImages = await getImages();

  return (
    <section className="mt-5 mb-30 z-50 overflow-auto">
      <h2 className="text-3xl text-center font-medium mb-4">
        Add <span className="text-gray-400 dark:text-primary">Service</span>
      </h2>
      <ServiceFormClient safeImages={safeImages} />
    </section>
  );
}
