import { getProjectBySlug, getAllProjects } from "@/actions/projectsAction";
import Image from "next/image";
import Link from "next/link";
import { ArrowLeft, ArrowUpRight, Tag, Layers, ArrowRight } from "lucide-react";
import { notFound } from "next/navigation";

export const dynamic = "force-dynamic";

export async function generateMetadata({ params }) {
  const { slug } = await params;
  const project = await getProjectBySlug(slug);

  if (!project) {
    return { title: "Project Not Found - The Tech Resolver" };
  }

  return {
    title: `${project.projectName} - The Tech Resolver`,
    description: project.projectShortDesc,
    openGraph: project.projectImage
      ? { images: [project.projectImage] }
      : undefined,
  };
}

export default async function ProjectDetailPage({ params }) {
  const { slug } = await params;
  const project = await getProjectBySlug(slug);

  if (!project) {
    notFound();
  }

  const allProjects = await getAllProjects();
  const related = allProjects
    .filter(
      (p) =>
        p.slug !== slug &&
        (p.category === project.category ||
          p.tags?.some((t) => project.tags?.includes(t)))
    )
    .slice(0, 3);

  const projectIndex = allProjects.findIndex((p) => p.slug === slug);
  const prevProject =
    projectIndex > 0 ? allProjects[projectIndex - 1] : null;
  const nextProject =
    projectIndex < allProjects.length - 1
      ? allProjects[projectIndex + 1]
      : null;

  return (
    <div className="min-h-screen">
      {/* Navigation */}
      <div className="border-b border-border">
        <div className="max-w-6xl mx-auto px-4 flex items-center justify-between h-14">
          <Link
            href="/projects"
            className="inline-flex items-center gap-2 text-sm text-muted-foreground hover:text-foreground transition-colors group"
          >
            <ArrowLeft className="w-4 h-4 group-hover:-translate-x-1 transition-transform" />
            All Projects
          </Link>
          <div className="flex items-center gap-4 text-sm text-muted-foreground">
            {prevProject && (
              <Link
                href={`/projects/${prevProject.slug}`}
                className="hover:text-foreground transition-colors"
              >
                Previous
              </Link>
            )}
            {nextProject && (
              <Link
                href={`/projects/${nextProject.slug}`}
                className="hover:text-foreground transition-colors"
              >
                Next
              </Link>
            )}
          </div>
        </div>
      </div>

      {/* Hero */}
      <section className="max-w-6xl mx-auto px-4 pt-8 pb-12">
        <div className="relative aspect-[21/10] overflow-hidden bg-muted border border-border rounded-md">
          {project.projectImage ? (
            <Image
              src={project.projectImage}
              alt={project.projectName}
              fill
              className="object-cover"
              priority
            />
          ) : (
            <div className="flex items-center justify-center h-full text-muted-foreground">
              No Image
            </div>
          )}
          <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent" />
          <div className="absolute bottom-0 left-0 right-0 p-8 md:p-12">
            <span className="inline-block text-xs font-medium text-primary tracking-[0.15em] uppercase mb-3">
              {project.category}
            </span>
            <h1 className="text-3xl md:text-5xl lg:text-6xl font-bold font-display text-white leading-[1.05] tracking-tight max-w-3xl">
              {project.projectName}
            </h1>
          </div>
        </div>
      </section>

      {/* Metadata Bar */}
      <section className="max-w-6xl mx-auto px-4 pb-12">
        <div className="border-y border-border divide-y divide-border">
          <div className="flex flex-wrap items-center gap-8 py-4 text-sm">
            <div className="flex items-center gap-2">
              <Layers className="w-4 h-4 text-muted-foreground" />
              <span className="text-muted-foreground">Category:</span>
              <span className="text-foreground font-medium">
                {project.category}
              </span>
            </div>
            {project.tags?.length > 0 && (
              <div className="flex items-center gap-2">
                <Tag className="w-4 h-4 text-muted-foreground" />
                <span className="text-muted-foreground">Technologies:</span>
                <span className="text-foreground font-medium">
                  {project.tags.length}
                </span>
              </div>
            )}
          </div>
        </div>
      </section>

      {/* Content */}
      <section className="max-w-6xl mx-auto px-4 pb-20">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12 lg:gap-16">
          {/* Main */}
          <div className="lg:col-span-2 space-y-8">
            <div>
              <p className="text-lg md:text-xl text-foreground leading-relaxed font-medium">
                {project.projectShortDesc}
              </p>
            </div>

            {project.projectLongDesc && (
              <div className="space-y-6">
                <div className="w-12 h-0.5 bg-primary" />
                <div className="text-muted-foreground leading-relaxed whitespace-pre-line text-[15px] space-y-4">
                  {project.projectLongDesc.split("\n").map((paragraph, i) => (
                    <p key={i}>{paragraph}</p>
                  ))}
                </div>
              </div>
            )}
          </div>

          {/* Sidebar */}
          <aside className="space-y-10">
            {project.tags?.length > 0 && (
              <div>
                <h3 className="text-xs font-medium tracking-[0.15em] uppercase text-muted-foreground mb-4">
                  Tech Stack
                </h3>
                <div className="flex flex-wrap gap-2">
                  {project.tags.map((tag) => (
                    <span
                      key={tag}
                      className="inline-flex items-center gap-1.5 text-sm px-3 py-1.5 border border-border text-foreground hover:border-primary transition-colors"
                    >
                      <span className="w-1.5 h-1.5 rounded-full bg-primary" />
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            )}

            {project.projectImage && (
              <div>
                <h3 className="text-xs font-medium tracking-[0.15em] uppercase text-muted-foreground mb-4">
                  Preview
                </h3>
                <div className="relative aspect-video overflow-hidden border border-border">
                  <Image
                    src={project.projectImage}
                    alt={project.projectName}
                    fill
                    className="object-cover"
                  />
                </div>
              </div>
            )}

            <div className="space-y-3">
              <h3 className="text-xs font-medium tracking-[0.15em] uppercase text-muted-foreground">
                Let&apos;s Work Together
              </h3>
              <p className="text-sm text-muted-foreground">
                Have a similar project in mind? Let&apos;s discuss how we can
                bring your ideas to life.
              </p>
              <Link
                href="/contacts"
                className="inline-flex items-center gap-2 px-5 py-3 bg-foreground text-background text-sm font-medium hover:opacity-90 transition-opacity"
              >
                Start a Project
                <ArrowUpRight className="w-4 h-4" />
              </Link>
            </div>
          </aside>
        </div>
      </section>

      {/* Project Navigation */}
      {(prevProject || nextProject) && (
        <section className="max-w-6xl mx-auto px-4 pb-20">
          <div className="border-t border-border pt-12">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {prevProject ? (
                <Link
                  href={`/projects/${prevProject.slug}`}
                  className="group border border-border hover:border-primary transition-colors p-6 rounded-md"
                >
                  <span className="text-xs text-muted-foreground">
                    Previous Project
                  </span>
                  <div className="flex items-center justify-between mt-2">
                    <span className="text-base font-bold font-display text-foreground group-hover:text-primary transition-colors">
                      {prevProject.projectName}
                    </span>
                    <ArrowLeft className="w-5 h-5 text-muted-foreground group-hover:text-primary transition-colors" />
                  </div>
                </Link>
              ) : (
                <div />
              )}
              {nextProject ? (
                <Link
                  href={`/projects/${nextProject.slug}`}
                  className="group border border-border hover:border-primary transition-colors p-6 text-right rounded-md"
                >
                  <span className="text-xs text-muted-foreground">
                    Next Project
                  </span>
                  <div className="flex items-center justify-between mt-2">
                    <span />
                    <span className="text-base font-bold font-display text-foreground group-hover:text-primary transition-colors">
                      {nextProject.projectName}
                    </span>
                    <ArrowRight className="w-5 h-5 text-muted-foreground group-hover:text-primary transition-colors" />
                  </div>
                </Link>
              ) : (
                <div />
              )}
            </div>
          </div>
        </section>
      )}

      {/* CTA */}
      <section className="border-t border-border">
        <div className="max-w-6xl mx-auto px-4 py-20 text-center">
          <h2 className="text-3xl md:text-4xl font-bold font-display text-foreground leading-tight max-w-xl mx-auto">
            Have a project in mind?
          </h2>
          <p className="text-muted-foreground mt-4 max-w-md mx-auto">
            Let&apos;s discuss your ideas and create something remarkable
            together.
          </p>
          <Link
            href="/contacts"
            className="inline-flex items-center gap-2 px-6 py-3 mt-8 bg-foreground text-background text-sm font-medium hover:opacity-90 transition-opacity"
          >
            Get in Touch
            <ArrowUpRight className="w-4 h-4" />
          </Link>
        </div>
      </section>

      {/* Related */}
      {related.length > 0 && (
        <section className="border-t border-border">
          <div className="max-w-6xl mx-auto px-4 py-16">
            <h2 className="text-xs font-medium tracking-[0.15em] uppercase text-muted-foreground mb-8">
              Related Work
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
              {related.map((p) => (
                <Link
                  key={p.slug}
                  href={`/projects/${p.slug}`}
                  className="group block border border-border hover:border-primary transition-colors rounded-md overflow-hidden"
                >
                  <div className="relative aspect-[4/3] bg-muted">
                    {p.projectImage ? (
                      <Image
                        src={p.projectImage}
                        alt={p.projectName}
                        fill
                        className="object-cover transition-all duration-500 group-hover:scale-105"
                      />
                    ) : (
                      <div className="flex items-center justify-center h-full text-muted-foreground text-sm">
                        No Image
                      </div>
                    )}
                  </div>
                  <div className="p-5 space-y-2">
                    <span className="text-xs font-medium text-primary tracking-wider uppercase">
                      {p.category}
                    </span>
                    <h3 className="text-base font-bold font-display text-foreground group-hover:text-primary transition-colors">
                      {p.projectName}
                    </h3>
                    <p className="text-sm text-muted-foreground line-clamp-2">
                      {p.projectShortDesc}
                    </p>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </section>
      )}
    </div>
  );
}
