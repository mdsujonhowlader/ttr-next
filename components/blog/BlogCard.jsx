import Image from "next/image";
import Link from "next/link";
import { Calendar, ArrowUpRight } from "lucide-react";

export default function BlogCard({ blog }) {
  return (
    <Link
      href={`blogs/${blog.slug}`}
      className="group relative block rounded-md overflow-hidden bg-card border border-border hover:border-primary transition-colors duration-300"
    >
      <div className="relative aspect-[4/5]">
        <Image
          src={blog?.imageId?.url}
          alt={blog.title}
          fill
          className="object-cover transition-all duration-700 group-hover:scale-105"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-black/10" />

        <div className="absolute top-4 left-4 right-4 flex flex-wrap gap-2">
          {blog.tags?.slice(0, 2).map((tag, index) => (
            <span
              key={index}
              className="text-[11px] font-medium px-2.5 py-1 bg-white/20 backdrop-blur-sm text-white rounded-md"
            >
              {tag}
            </span>
          ))}
        </div>

        <div className="absolute bottom-16 left-4 right-4 space-y-2">
          <h2 className="text-lg font-bold font-display text-white leading-tight group-hover:text-primary transition-colors line-clamp-2">
            {blog.title}
          </h2>
          <p className="text-sm text-white/70 line-clamp-2 leading-relaxed">
            {blog?.blogshortdesc}
          </p>
        </div>
      </div>

      <div className="flex items-center justify-between px-4 py-3 bg-[var(--button)]">
        {blog.createdAt && (
          <div className="flex items-center gap-2 text-xs text-white/80">
            <Calendar className="w-3.5 h-3.5" />
            <span>{new Date(blog.createdAt).toLocaleDateString()}</span>
          </div>
        )}
        <span className="flex items-center gap-1 text-xs font-medium text-white/90 group-hover:text-white transition-colors">
          Read Article
          <ArrowUpRight className="w-3.5 h-3.5 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
        </span>
      </div>
    </Link>
  );
}
