"use client";

import { useState, useCallback, useMemo } from "react";
import ProjectFilters from "@/components/projects/ProjectFilters";
import ProjectGrid from "@/components/projects/ProjectGrid";

export default function ProjectsClient({ projects, categories, allTags }) {
  const [filters, setFilters] = useState({
    search: "",
    category: "all",
    tag: "",
  });

  const handleFilterChange = useCallback((newFilters) => {
    setFilters(newFilters);
  }, []);

  const filtered = useMemo(() => {
    let result = [...projects];

    if (filters.search) {
      const s = filters.search.toLowerCase();
      result = result.filter(
        (p) =>
          p.projectName?.toLowerCase().includes(s) ||
          p.projectShortDesc?.toLowerCase().includes(s) ||
          p.category?.toLowerCase().includes(s) ||
          p.tags?.some((t) => t.toLowerCase().includes(s))
      );
    }

    if (filters.category !== "all") {
      result = result.filter((p) => p.category === filters.category);
    }

    if (filters.tag) {
      result = result.filter((p) => p.tags?.includes(filters.tag));
    }

    return result;
  }, [projects, filters]);

  return (
    <div className="flex flex-col gap-12">
      <ProjectFilters
        categories={categories}
        tags={allTags}
        onFilterChange={handleFilterChange}
      />

      <ProjectGrid projects={filtered} />
    </div>
  );
}
