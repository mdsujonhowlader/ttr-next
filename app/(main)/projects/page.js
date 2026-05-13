import { getProjectTabs } from "@/actions/projectsAction";
import Image from "next/image";
import Link from "next/link";
import { Eye, ArrowRight } from "lucide-react";

function serializeTabs(tabs) {
  if (!tabs || !Array.isArray(tabs)) return [];

  return tabs.map((tab, tabIndex) => {
    const tabId = tab.id || (tab._id && (typeof tab._id === 'string' ? tab._id : tab._id.toString())) || `tab-${tabIndex}`;

    return {
      id: tabId,
      tabName: tab.tabName,
      tabShortDes: tab.tabShortDes,
      tabIcon: tab.tabIcon
        ? { _id: tab.tabIcon._id?.toString(), url: tab.tabIcon.url }
        : null,
      projects: (tab.projects || []).map((p, pIndex) => {
        const projectId = p._id?.toString() || `project-${tabIndex}-${pIndex}`;
        return {
          id: projectId,
          projectImage: p.projectImage?.url,
          projectName: p.projectName,
          projectShortDesc: p.projectShortDesc,
        };
      }),
    };
  });
}

export default async function ProjectsPage() {
  const tabs = await getProjectTabs();
  const serializedTabs = serializeTabs(tabs);

  const allProjects = serializedTabs.flatMap((tab) =>
    (tab.projects || []).map((project) => ({
      ...project,
      category: tab.tabName,
    }))
  );

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900">
      {/* Hero Section */}
      <section className="relative py-20 px-4 bg-gradient-to-br from-primary/10 via-primary/5 to-transparent">
        <div className="max-w-6xl mx-auto text-center">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-4">
            Our <span className="text-primary">Projects</span>
          </h1>
          <p className="text-lg text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
            Explore our portfolio of innovative solutions and successful collaborations
            with clients worldwide.
          </p>
        </div>
      </section>

      {/* Tabs Section */}
      <section className="max-w-6xl mx-auto px-4 py-12">
        {serializedTabs.length > 0 ? (
          <>
            {/* Category Tabs */}
            <div className="flex flex-wrap gap-3 mb-12 justify-center">
              {serializedTabs.map((tab) => {
                const Icon = tab.tabIcon?.url ? (
                  <div className="w-8 h-8 relative rounded-lg overflow-hidden">
                    <Image src={tab.tabIcon.url} alt={tab.tabName} fill className="object-cover" />
                  </div>
                ) : null;
                return (
                  <Link
                    key={tab.id}
                    href={`#${tab.tabName.toLowerCase().replace(/\s+/g, "-")}`}
                    className="flex items-center gap-2 px-4 py-2 bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-full hover:border-primary hover:text-primary transition-colors"
                  >
                    {Icon}
                    <span className="font-medium">{tab.tabName}</span>
                    <span className="text-xs bg-gray-100 dark:bg-gray-700 px-2 py-0.5 rounded-full">
                      {tab.projects?.length || 0}
                    </span>
                  </Link>
                );
              })}
            </div>

            {/* Projects by Category */}
            {serializedTabs.map((tab) => (
              <div
                key={tab.id}
                id={tab.tabName.toLowerCase().replace(/\s+/g, "-")}
                className="mb-16"
              >
                <div className="flex items-center gap-4 mb-6">
                  {tab.tabIcon?.url && (
                    <div className="w-12 h-12 relative rounded-xl overflow-hidden">
                      <Image
                        src={tab.tabIcon.url}
                        alt={tab.tabName}
                        fill
                        className="object-cover"
                      />
                    </div>
                  )}
                  <div>
                    <h2 className="text-2xl font-bold text-gray-900 dark:text-white">
                      {tab.tabName}
                    </h2>
                    <p className="text-gray-500 dark:text-gray-400">
                      {tab.tabShortDes}
                    </p>
                  </div>
                </div>

                {tab.projects?.length > 0 ? (
                  <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                    {tab.projects.map((project) => (
                      <div
                        key={project.id}
                        className="bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300 group"
                      >
                        <div className="relative h-56 bg-gray-100 dark:bg-gray-700">
                          {project.projectImage ? (
                            <Image
                              src={project.projectImage}
                              alt={project.projectName}
                              fill
                              className="object-cover group-hover:scale-105 transition-transform duration-500"
                            />
                          ) : (
                            <div className="flex items-center justify-center h-full text-gray-400">
                              No Image
                            </div>
                          )}
                          <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity">
                            <div className="absolute bottom-4 left-4 right-4">
                              <span className="inline-flex items-center gap-1 text-white text-sm font-medium">
                                <Eye className="w-4 h-4" />
                                View Details
                              </span>
                            </div>
                          </div>
                        </div>
                        <div className="p-5">
                          <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-2 group-hover:text-primary transition-colors">
                            {project.projectName}
                          </h3>
                          <p className="text-gray-600 dark:text-gray-300 text-sm line-clamp-2 mb-4">
                            {project.projectShortDesc}
                          </p>
                          <span className="text-primary text-sm font-medium inline-flex items-center gap-1">
                            View Project
                            <ArrowRight className="w-4 h-4" />
                          </span>
                        </div>
                      </div>
                    ))}
                  </div>
                ) : (
                  <div className="text-center py-12 text-gray-500">
                    No projects in this category yet
                  </div>
                )}
              </div>
            ))}
          </>
        ) : (
          <div className="text-center py-20">
            <div className="w-20 h-20 bg-gray-100 dark:bg-gray-700 rounded-full flex items-center justify-center mx-auto mb-4">
              <Eye className="w-10 h-10 text-gray-400" />
            </div>
            <h3 className="text-xl font-medium text-gray-900 dark:text-white mb-2">
              No Projects Yet
            </h3>
            <p className="text-gray-500">
              Check back soon for our latest work!
            </p>
          </div>
        )}
      </section>

      {/* CTA Section */}
      <section className="py-16 px-4 bg-primary text-white">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-2xl md:text-3xl font-bold mb-4">
            Have a project in mind?
          </h2>
          <p className="text-white/80 mb-6">
            Let&apos;s discuss your ideas and bring them to life.
          </p>
          <Link
            href="/contact"
            className="inline-flex items-center gap-2 px-6 py-3 bg-white text-primary font-semibold rounded-lg hover:bg-gray-100 transition-colors"
          >
            Start a Project
            <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
      </section>
    </div>
  );
}