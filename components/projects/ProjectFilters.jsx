"use client";

import { useState, useEffect } from "react";
import { Search, X, SlidersHorizontal } from "lucide-react";
import { Input } from "@/components/ui/input";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Button } from "@/components/ui/button";

export default function ProjectFilters({
  categories,
  tags,
  onFilterChange,
}) {
  const [search, setSearch] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("all");
  const [selectedTag, setSelectedTag] = useState("");

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
    <div className="flex flex-col gap-8">
      {/* Search Row */}
      <div className="relative max-w-md">
        <Search className="absolute left-0 top-1/2 -translate-y-1/2 size-4 text-muted-foreground" />
        <Input
          type="text"
          placeholder="Search..."
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          className="pl-8 pr-8 h-10 bg-transparent border-0 border-b border-border rounded-none focus-visible:ring-0 focus-visible:border-b-primary transition-colors"
        />
        {search && (
          <button
            onClick={() => setSearch("")}
            className="absolute right-0 top-1/2 -translate-y-1/2 text-muted-foreground hover:text-foreground transition-colors"
          >
            <X className="size-3.5" />
          </button>
        )}
      </div>

      {/* Category and Tags Row */}
      <div className="flex flex-col sm:flex-row sm:items-center gap-4">
        {/* Category Filter */}
        <div className="flex items-center gap-2">
          <SlidersHorizontal className="size-3.5 text-muted-foreground" />
          <Select value={selectedCategory} onValueChange={setSelectedCategory}>
            <SelectTrigger className="w-auto h-8 bg-transparent border-0 text-xs font-medium text-muted-foreground hover:text-foreground focus:ring-0 px-0">
              <SelectValue placeholder="All" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="all">All</SelectItem>
              {categories.map((cat) => (
                <SelectItem key={cat} value={cat}>
                  {cat}
                </SelectItem>
              ))}
            </SelectContent>
          </Select>
        </div>

        {/* Divider */}
        {tags.length > 0 && (
          <div className="hidden sm:block w-px h-4 bg-border" />
        )}

        {/* Tags */}
        {tags.length > 0 && (
          <div className="flex flex-wrap items-center gap-1.5">
            {tags.map((tag) => (
              <button
                key={tag}
                onClick={() => setSelectedTag(selectedTag === tag ? "" : tag)}
                className={`px-2.5 py-1 text-[11px] font-medium rounded-full transition-all duration-200 ${
                  selectedTag === tag
                    ? "bg-foreground text-background"
                    : "text-muted-foreground hover:text-foreground hover:bg-muted/80"
                }`}
              >
                {tag}
              </button>
            ))}
          </div>
        )}

        {/* Clear */}
        {hasFilters && (
          <Button
            variant="ghost"
            size="sm"
            onClick={clearFilters}
            className="h-7 px-2 text-[11px] text-muted-foreground hover:text-foreground ml-auto"
          >
            Clear
          </Button>
        )}
      </div>
    </div>
  );
}
