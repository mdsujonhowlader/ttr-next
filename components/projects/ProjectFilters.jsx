"use client";

import { useState, useEffect, useRef } from "react";
import { Search, X, ChevronDown } from "lucide-react";

export default function ProjectFilters({
  categories,
  tags,
  onFilterChange,
}) {
  const [search, setSearch] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("all");
  const [selectedTag, setSelectedTag] = useState("");
  const [focused, setFocused] = useState(false);
  const inputRef = useRef(null);

  useEffect(() => {
    const timeout = setTimeout(() => {
      onFilterChange({ search, category: selectedCategory, tag: selectedTag });
    }, 200);
    return () => clearTimeout(timeout);
  }, [search, selectedCategory, selectedTag, onFilterChange]);

  function clearFilters() {
    setSearch("");
    setSelectedCategory("all");
    setSelectedTag("");
  }

  const hasFilters = search || selectedCategory !== "all" || selectedTag;

  return (
    <div className="space-y-6">
      <div className="flex flex-col sm:flex-row gap-4">
        <div
          className={`relative flex-1 transition-all duration-200 ${
            focused ? "ring-1 ring-primary" : "ring-0"
          }`}
        >
          <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 text-muted-foreground" />
          <input
            ref={inputRef}
            type="text"
            placeholder="Search projects..."
            value={search}
            onFocus={() => setFocused(true)}
            onBlur={() => setFocused(false)}
            onChange={(e) => setSearch(e.target.value)}
            className="w-full pl-11 pr-4 py-3 bg-transparent border border-border text-foreground placeholder:text-muted-foreground/50 text-sm focus:outline-none transition-colors"
          />
          {search && (
            <button
              onClick={() => setSearch("")}
              className="absolute right-3 top-1/2 -translate-y-1/2 text-muted-foreground hover:text-foreground transition-colors"
            >
              <X className="w-4 h-4" />
            </button>
          )}
        </div>

        <div className="relative">
          <select
            value={selectedCategory}
            onChange={(e) => setSelectedCategory(e.target.value)}
            className="appearance-none px-4 py-3 pr-10 bg-transparent border border-border text-foreground text-sm focus:outline-none focus:ring-1 focus:ring-primary transition-colors min-w-[160px] cursor-pointer"
          >
            <option value="all">All Categories</option>
            {categories.map((cat) => (
              <option key={cat} value={cat}>
                {cat}
              </option>
            ))}
          </select>
          <ChevronDown className="absolute right-3 top-1/2 -translate-y-1/2 w-4 h-4 text-muted-foreground pointer-events-none" />
        </div>

        {hasFilters && (
          <button
            onClick={clearFilters}
            className="px-4 py-3 text-sm text-muted-foreground hover:text-foreground transition-colors border border-transparent hover:border-border"
          >
            Clear
          </button>
        )}
      </div>

      {tags.length > 0 && (
        <div className="flex flex-wrap gap-2">
          {tags.map((tag) => (
            <button
              key={tag}
              onClick={() =>
                setSelectedTag(selectedTag === tag ? "" : tag)
              }
              className={`px-3 py-1.5 text-xs font-medium transition-all duration-200 ${
                selectedTag === tag
                  ? "bg-foreground text-background"
                  : "bg-transparent text-muted-foreground border border-border hover:border-foreground hover:text-foreground"
              }`}
            >
              {tag}
            </button>
          ))}
        </div>
      )}
    </div>
  );
}
