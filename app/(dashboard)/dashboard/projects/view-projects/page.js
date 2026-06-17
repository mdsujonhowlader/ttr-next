import { getProjectTabs } from "@/actions/projectsAction";
import Image from "next/image";
import Link from "next/link";
import { Plus, Edit, Trash2, Folder, FileImage } from "lucide-react";
import DeleteProjectTabButton from "./_components/DeleteProjectTabButton";
import BackfillButton from "./_components/BackfillButton";

function serializeTabs(tabs) {
  if (!Array.isArray(tabs)) return [];
  return tabs.map((tab) => ({
    _id: tab.id || tab._id?.toString(),
    tabName: tab.tabName,
    tabShortDes: tab.tabShortDes,
    tabIcon: tab.tabIcon
      ? { _id: tab.tabIcon._id?.toString(), url: tab.tabIcon.url }
      : null,
    projects: (tab.projects || []).map((p) => ({
      slug: p.slug,
      projectImage: p.projectImage?.url || p.projectImage,
      projectName: p.projectName,
      projectShortDesc: p.projectShortDesc,
      tags: p.tags || [],
    })),
  }));
}

export default async function ViewProjectsPage() {
  const tabs = await getProjectTabs();
  const serializedTabs = serializeTabs(tabs);

  return (
    <section className="z-20">
      <div className="flex justify-between items-center mb-8">
        <div>
          <h1 className="text-2xl font-bold text-gray-900 dark:text-white">
            Projects
          </h1>
          <p className="text-gray-500 dark:text-gray-400 mt-1">
            Manage your project categories ({serializedTabs.length})
          </p>
        </div>
        <div className="flex items-center gap-3">
          <BackfillButton />
          <Link
            href="/dashboard/projects/add-project-to-tab"
            className="flex items-center gap-2 px-4 py-2 bg-emerald-600 text-white rounded-lg hover:bg-emerald-700 transition-colors"
          >
            <FileImage className="w-4 h-4" />
            Add Project
          </Link>
          <Link
            href="/dashboard/projects/add-project"
            className="flex items-center gap-2 px-4 py-2 bg-primary text-white rounded-lg hover:bg-primary/90 transition-colors"
          >
            <Plus className="w-4 h-4" />
            Add Category
          </Link>
        </div>
      </div>

      {serializedTabs.length > 0 ? (
        <div className="space-y-8">
          {serializedTabs.map((tab) => (
            <div
              key={tab._id}
              className="bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-xl overflow-hidden"
            >
              <div className="p-5 border-b border-gray-200 dark:border-gray-700 flex items-center justify-between">
                <div className="flex items-center gap-4">
                  {tab.tabIcon?.url ? (
                    <div className="w-12 h-12 relative rounded-lg overflow-hidden bg-gray-100">
                      <Image
                        src={tab.tabIcon.url}
                        alt={tab.tabName}
                        fill
                        className="object-cover"
                      />
                    </div>
                  ) : (
                    <div className="w-12 h-12 flex items-center justify-center bg-gray-100 dark:bg-gray-700 rounded-lg">
                      <Folder className="w-6 h-6 text-gray-400" />
                    </div>
                  )}
                  <div>
                    <h3 className="text-lg font-semibold text-gray-900 dark:text-white">
                      {tab.tabName}
                    </h3>
                    <p className="text-sm text-gray-500 dark:text-gray-400">
                      {tab.projects?.length || 0} projects
                    </p>
                  </div>
                </div>
                <div className="flex items-center gap-2">
                  <Link
                    href={`/dashboard/projects/edit-project/${tab._id}`}
                    className="flex items-center gap-1 px-3 py-2 bg-blue-600 text-white text-sm rounded-lg hover:bg-blue-700 transition-colors"
                  >
                    <Edit className="w-4 h-4" />
                    Edit
                  </Link>
                  <DeleteProjectTabButton tabId={tab._id} tabName={tab.tabName} />
                </div>
              </div>

              {tab.projects?.length > 0 ? (
                <div className="p-5 grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4">
                  {tab.projects.map((project, index) => (
                    <div
                      key={project.slug || index}
                      className="relative aspect-square bg-gray-100 dark:bg-gray-700 rounded-lg overflow-hidden group"
                    >
                      {project.projectImage ? (
                        <Image
                          src={project.projectImage}
                          alt={project.projectName}
                          fill
                          className="object-cover"
                        />
                      ) : (
                        <div className="flex items-center justify-center h-full text-gray-400">
                          No Image
                        </div>
                      )}
                      <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity">
                        <div className="absolute bottom-0 left-0 right-0 p-3">
                          <p className="text-white text-sm font-medium truncate">
                            {project.projectName}
                          </p>
                          {project.tags?.length > 0 && (
                            <div className="flex flex-wrap gap-1 mt-1">
                              {project.tags.slice(0, 2).map((tag) => (
                                <span
                                  key={tag}
                                  className="text-[10px] px-1.5 py-0.5 bg-white/20 rounded"
                                >
                                  {tag}
                                </span>
                              ))}
                            </div>
                          )}
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              ) : (
                <div className="p-8 text-center text-gray-500">
                  No projects in this category yet
                </div>
              )}
            </div>
          ))}
        </div>
      ) : (
        <div className="flex flex-col items-center justify-center py-20">
          <div className="w-16 h-16 bg-gray-100 dark:bg-gray-700 rounded-full flex items-center justify-center mb-4">
            <Folder className="w-8 h-8 text-gray-400" />
          </div>
          <h3 className="text-lg font-medium text-gray-900 dark:text-white mb-2">
            No Project Categories Yet
          </h3>
          <p className="text-gray-500 dark:text-gray-400 mb-6">
            Get started by creating your first project category
          </p>
          <Link
            href="/dashboard/projects/add-project"
            className="flex items-center gap-2 px-4 py-2 bg-primary text-white rounded-lg hover:bg-primary/90 transition-colors"
          >
            <Plus className="w-4 h-4" />
            Add Category
          </Link>
        </div>
      )}
    </section>
  );
}
