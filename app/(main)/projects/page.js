export const metadata = {
  title: "Projects - The Tech Resolver",
  description: "A curated collection of work across digital products, web applications, and brand experiences.",
};

import { getAllProjects } from "@/actions/projectsAction";
import ProjectHero from "@/components/projects/ProjectHero";
import ProjectsClient from "./ProjectsClient";

export const dynamic = "force-dynamic";

export default async function ProjectsPage() {
  const projects = await getAllProjects();
  const categories = [...new Set(projects.map((p) => p.category))];
  const allTags = [...new Set(projects.flatMap((p) => p.tags || []))].sort();

  return (
    <div className="min-h-screen">
      <ProjectHero
        totalProjects={projects.length}
        totalCategories={categories.length}
      />
      <section className="max-w-6xl mx-auto px-4 pb-32">
        <ProjectsClient
          projects={projects}
          categories={categories}
          allTags={allTags}
        />
      </section>
    </div>
  );
}
