"use client";

import { motion } from "motion/react";

export default function ProjectHero({ totalProjects, totalCategories }) {
  return (
    <section className="pt-32 pb-16 px-4">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: [0.25, 0.1, 0.25, 1] }}
          className="max-w-3xl"
        >
          {/* Label */}
          <motion.span
            initial={{ opacity: 0, x: -10 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="inline-flex items-center gap-2 text-xs font-semibold tracking-widest uppercase text-primary mb-6"
          >
            <span className="w-8 h-px bg-primary" />
            Portfolio
          </motion.span>

          {/* Heading */}
          <h1 className="text-5xl sm:text-6xl md:text-7xl font-bold font-display leading-[0.95] tracking-tight text-foreground mb-6">
            Selected
            <br />
            <span className="text-primary">Projects</span>
          </h1>

          {/* Description */}
          <p className="text-base sm:text-lg text-muted-foreground max-w-xl leading-relaxed">
            A curated collection of work across digital products, web
            applications, and brand experiences.
          </p>

          {/* Stats */}
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="flex items-center gap-10 mt-12"
          >
            <div className="flex flex-col">
              <span className="text-3xl font-bold font-display text-foreground">
                {String(totalProjects).padStart(2, "0")}
              </span>
              <span className="text-xs text-muted-foreground mt-1 font-medium">
                Total Projects
              </span>
            </div>
            <div className="w-px h-12 bg-border" />
            <div className="flex flex-col">
              <span className="text-3xl font-bold font-display text-foreground">
                {String(totalCategories).padStart(2, "0")}
              </span>
              <span className="text-xs text-muted-foreground mt-1 font-medium">
                Categories
              </span>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
