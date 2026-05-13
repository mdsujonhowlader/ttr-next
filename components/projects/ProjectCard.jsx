import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";

export default function ProjectCard({ project }) {
  return (
    <Link
      href={`/projects/${project.slug}`}
      className="group block relative border border-border hover:border-primary transition-colors duration-300 rounded-md overflow-hidden"
    >
      <div className="relative aspect-[4/3] bg-muted">
        {project.projectImage ? (
          <Image
            src={project.projectImage}
            alt={project.projectName}
            fill
            className="object-cover transition-all duration-700 group-hover:scale-105"
          />
        ) : (
          <div className="flex items-center justify-center h-full text-muted-foreground text-sm">
            No Image
          </div>
        )}
        <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
      </div>

      <div className="p-5 space-y-3">
        <div className="flex items-start justify-between gap-4">
          <div className="space-y-1 min-w-0">
            <span className="inline-block text-xs font-medium text-primary tracking-wider uppercase">
              {project.category}
            </span>
            <h3 className="text-lg font-bold font-display text-foreground group-hover:text-primary transition-colors leading-tight">
              {project.projectName}
            </h3>
          </div>
          <ArrowUpRight className="w-5 h-5 text-muted-foreground group-hover:text-primary transition-colors flex-shrink-0 mt-1" />
        </div>

        {project.tags?.length > 0 && (
          <div className="flex flex-wrap gap-1.5">
            {project.tags.slice(0, 3).map((tag) => (
              <span
                key={tag}
                className="text-[11px] px-2 py-0.5 bg-muted text-muted-foreground font-medium"
              >
                {tag}
              </span>
            ))}
            {project.tags.length > 3 && (
              <span className="text-[11px] px-2 py-0.5 text-muted-foreground">
                +{project.tags.length - 3}
              </span>
            )}
          </div>
        )}

        <p className="text-sm text-muted-foreground leading-relaxed line-clamp-2">
          {project.projectShortDesc}
        </p>
      </div>
    </Link>
  );
}
