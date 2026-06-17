"use client";

import { motion } from "motion/react";
import ProjectCard from "./ProjectCard";
import { FolderOpen } from "lucide-react";

const containerVariants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.08,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.5, ease: [0.25, 0.1, 0.25, 1] },
  },
};

export default function ProjectGrid({ projects }) {
  if (!projects || projects.length === 0) {
    return (
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        className="flex flex-col items-center justify-center py-20 text-center"
      >
        <div className="size-16 rounded-full bg-muted flex items-center justify-center mb-4">
          <FolderOpen className="size-7 text-muted-foreground" />
        </div>
        <p className="text-muted-foreground font-medium">No projects found</p>
        <p className="text-sm text-muted-foreground/70 mt-1">
          Try adjusting your filters or search query
        </p>
      </motion.div>
    );
  }

  return (
    <motion.div
      variants={containerVariants}
      initial="hidden"
      animate="visible"
      className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6"
    >
      {projects.map((project, index) => (
        <motion.div key={project.slug || project.id || index} variants={itemVariants}>
          <ProjectCard project={project} />
        </motion.div>
      ))}
    </motion.div>
  );
}
