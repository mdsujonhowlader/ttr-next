import BlogCard from "./BlogCard";
import { PenTool } from "lucide-react";

export default function BlogList({ blogs }) {
  if (blogs.length === 0) {
    return (
      <div className="col-span-full text-center py-20">
        <div className="w-20 h-20 bg-muted rounded-full flex items-center justify-center mx-auto mb-4">
          <PenTool className="w-10 h-10 text-muted-foreground" />
        </div>
        <h3 className="text-xl font-medium text-foreground mb-2">No Blogs Yet</h3>
        <p className="text-muted-foreground">Check back soon for our latest articles!</p>
      </div>
    );
  }

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
      {blogs.map((blog) => (
        <BlogCard key={blog.id} blog={blog} />
      ))}
    </div>
  );
}
