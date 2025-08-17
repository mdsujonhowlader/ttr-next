import { getAppearances } from "@/actions/appearanceAction";
import { getImages } from "@/actions/gellaryAction";
import SiteForm from "../../_components/settings/SiteForm";

export default async function SettingsPage() {
  const safeImages = await getImages();
  const appearances = await getAppearances();
  return (
    <>
      <section className="mt-5 mb-30 z-50 overflow-auto">
        <h2 className="text-3xl text-center font-medium mb-4">
          Add{" "}
          <span className="text-gray-400 dark:text-primary">
            Appearance your UI
          </span>
        </h2>
        <SiteForm safeImages={safeImages} getAppearances={appearances} />
      </section>
    </>
  );
}
