import Image from "next/image";
import Link from "next/link";
import { Calendar, ArrowRight } from "lucide-react";

export default function BlogCard({ blog }) {
  return (
    <Link
      href={`blogs/${blog.slug}`}
      className="group border border-border rounded-xl overflow-hidden hover:shadow-lg transition-all duration-300 bg-card"
    >
      <div className="relative h-48 overflow-hidden">
        <Image
          src={blog?.imageId?.url}
          alt={blog.title}
          fill
          className="object-cover group-hover:scale-105 transition-transform duration-500"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity">
          <div className="absolute bottom-4 left-4 right-4">
            <span className="inline-flex items-center gap-2 text-white text-sm font-medium">
              Read Article <ArrowRight className="w-4 h-4" />
            </span>
          </div>
        </div>
      </div>
      <div className="p-4 space-y-3">
        <div className="flex flex-wrap gap-2">
          {blog.tags?.slice(0, 2).map((tag, index) => (
            <span
              key={index}
              className="text-xs font-medium px-2 py-1 bg-secondary/20 text-secondary rounded-full"
            >
              {tag}
            </span>
          ))}
        </div>
        <h2 className="text-lg font-semibold tracking-tight group-hover:text-primary transition-colors line-clamp-2">
          {blog.title}
        </h2>
        <p className="text-sm text-muted-foreground line-clamp-2">
          {blog?.blogshortdesc}
        </p>
        {blog.createdAt && (
          <div className="flex items-center gap-2 text-xs text-muted-foreground pt-2 border-t border-border">
            <Calendar className="w-3 h-3" />
            <span>{new Date(blog.createdAt).toLocaleDateString()}</span>
          </div>
        )}
      </div>
    </Link>
  );
}
