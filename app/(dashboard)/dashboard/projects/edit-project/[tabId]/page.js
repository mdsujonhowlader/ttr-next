import { getProjectsByTab } from "@/actions/projectsAction";
import { getImages } from "@/actions/galleryAction";
import ManageTabProjects from "./_components/ManageTabProjects";
import { notFound } from "next/navigation";

function serializeTab(tab) {
  if (!tab) return null;
  return {
    _id: tab.id || tab._id?.toString(),
    tabName: tab.tabName,
    tabSlug: tab.tabSlug,
    tabShortDes: tab.tabShortDes,
    tabIcon: tab.tabIcon
      ? { url: tab.tabIcon.url }
      : null,
    projects: (tab.projects || []).map((p) => ({
      slug: p.slug,
      projectImage: p.projectImage?.url || p.projectImage,
      projectName: p.projectName,
      projectShortDesc: p.projectShortDesc,
      projectLongDesc: p.projectLongDesc || "",
      tags: p.tags || [],
    })),
  };
}

function serializeImages(images) {
  return (images || []).map((img) => ({
    _id: img._id?.toString(),
    filename: img.filename,
    url: img.url,
  }));
}

export default async function EditProjectPage({ params }) {
  const { tabId } = await params;
  const [tab, images] = await Promise.all([
    getProjectsByTab(tabId),
    getImages(),
  ]);

  const serializedTab = serializeTab(tab);

  if (!serializedTab) {
    notFound();
  }

  return (
    <ManageTabProjects
      tab={serializedTab}
      safeImages={serializeImages(images)}
    />
  );
}
