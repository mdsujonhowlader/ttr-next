"use client";

import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { Badge } from "@/components/ui/badge";

export default function ProjectCard({ project }) {
  return (
    <Link
      href={`/projects/${project.slug}`}
      className="group block"
    >
      <div className="relative overflow-hidden rounded-2xl bg-card transition-all duration-500 hover:shadow-xl hover:shadow-primary/10 hover:-translate-y-1">
        {/* Image Container */}
        <div className="relative aspect-[4/3] overflow-hidden bg-muted">
          {project.projectImage ? (
            <Image
              src={project.projectImage}
              alt={project.projectName}
              fill
              className="object-cover transition-transform duration-700 ease-out group-hover:scale-110"
            />
          ) : (
            <div className="flex items-center justify-center h-full text-muted-foreground text-sm">
              No Image
            </div>
          )}
          
          {/* Overlay Gradient */}
          <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
          
          {/* Hover Arrow */}
          <div className="absolute top-4 right-4 size-10 rounded-full bg-background/80 backdrop-blur-sm flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-300 translate-y-2 group-hover:translate-y-0">
            <ArrowUpRight className="size-4 text-foreground" />
          </div>
        </div>

        {/* Content */}
        <div className="p-5 space-y-3">
          {/* Category Badge */}
          <Badge 
            variant="secondary" 
            className="text-[10px] font-semibold tracking-wider uppercase px-2.5 py-1 bg-primary/10 text-primary hover:bg-primary/20 transition-colors"
          >
            {project.category}
          </Badge>

          {/* Title */}
          <h3 className="text-lg font-bold font-display text-foreground group-hover:text-primary transition-colors leading-tight">
            {project.projectName}
          </h3>

          {/* Tags */}
          {project.tags?.length > 0 && (
            <div className="flex flex-wrap gap-1.5">
              {project.tags.slice(0, 3).map((tag) => (
                <span
                  key={tag}
                  className="inline-flex items-center text-[10px] px-2 py-0.5 rounded-full bg-muted text-muted-foreground font-medium"
                >
                  {tag}
                </span>
              ))}
              {project.tags.length > 3 && (
                <span className="inline-flex items-center text-[10px] px-2 py-0.5 rounded-full text-muted-foreground">
                  +{project.tags.length - 3}
                </span>
              )}
            </div>
          )}

          {/* Description */}
          <p className="text-sm text-muted-foreground leading-relaxed line-clamp-2">
            {project.projectShortDesc}
          </p>
        </div>
      </div>
    </Link>
  );
}
