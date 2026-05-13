"use client";

import { motion } from "motion/react";

export default function ProjectHero({ totalProjects, totalCategories }) {
  return (
    <section className="pt-32 pb-20 px-4">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: [0.25, 0.1, 0.25, 1] }}
          className="max-w-3xl"
        >
          <span className="inline-block text-xs font-medium tracking-[0.2em] uppercase text-primary mb-6">
            Portfolio
          </span>
          <h1 className="text-5xl sm:text-6xl md:text-7xl font-bold font-display leading-[0.95] tracking-tight text-foreground mb-6">
            Selected
            <br />
            <span className="text-primary">Projects</span>
          </h1>
          <p className="text-base sm:text-lg text-muted-foreground max-w-xl leading-relaxed">
            A curated collection of work across digital products, web
            applications, and brand experiences.
          </p>
          <div className="flex items-center gap-8 mt-10">
            <div>
              <span className="text-2xl font-bold font-display text-foreground">
                {String(totalProjects).padStart(2, "0")}
              </span>
              <span className="block text-xs text-muted-foreground mt-0.5">
                Total Projects
              </span>
            </div>
            <div className="w-px h-10 bg-border" />
            <div>
              <span className="text-2xl font-bold font-display text-foreground">
                {String(totalCategories).padStart(2, "0")}
              </span>
              <span className="block text-xs text-muted-foreground mt-0.5">
                Categories
              </span>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
