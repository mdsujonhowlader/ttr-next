import { getImages } from "@/actions/galleryAction";
import { getProjectTabs } from "@/actions/projectsAction";
import AddProjectForm from "./_components/AddProjectForm";

function serializeImages(images) {
  return (images || []).map((img) => ({
    _id: img._id?.toString(),
    filename: img.filename,
    url: img.url,
  }));
}

function serializeTabs(tabs) {
  if (!Array.isArray(tabs)) return [];
  return tabs.map((tab) => ({
    _id: tab.id || tab._id?.toString(),
    tabName: tab.tabName,
  }));
}

export default async function AddProjectToTabPage() {
  const [images, tabs] = await Promise.all([getImages(), getProjectTabs()]);

  return (
    <AddProjectForm
      safeImages={serializeImages(images)}
      safeTabs={serializeTabs(tabs)}
    />
  );
}
