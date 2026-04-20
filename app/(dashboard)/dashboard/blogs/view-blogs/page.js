import { getBlogs } from "@/actions/BlogAction";
import Link from "next/link";
import { Plus } from "lucide-react";
import BlogFilters from "./_components/BlogFilters";

function serializeBlogs(blogs) {
  return blogs.map((blog) => ({
    _id: blog._id?.toString(),
    title: blog.title,
    slug: blog.slug,
    blogshortdesc: blog.blogshortdesc,
    tags: blog.tags || [],
    createdAt: blog.createdAt?.toString(),
    imageId: blog.imageId ? {
      _id: blog.imageId._id?.toString(),
      url: blog.imageId.url,
    } : null,
  }));
}

export default async function BlogsPage() {
  const blogs = await getBlogs();
  const serializedBlogs = serializeBlogs(blogs);

  return (
    <section className="z-20">
      <div className="flex justify-between items-center mb-8">
        <div>
          <h1 className="text-2xl font-bold text-gray-900 dark:text-white">
            Blogs
          </h1>
          <p className="text-gray-500 dark:text-gray-400 mt-1">
            Manage your blog posts ({blogs.length})
          </p>
        </div>
        <Link
          href="/dashboard/blogs/create-blog"
          className="flex items-center gap-2 px-4 py-2 bg-primary text-white rounded-lg hover:bg-primary/90 transition-colors"
        >
          <Plus className="w-4 h-4" />
          Add Blog
        </Link>
      </div>

      {blogs.length > 0 ? (
        <BlogFilters initialBlogs={serializedBlogs} />
      ) : (
        <div className="flex flex-col items-center justify-center py-20">
          <div className="w-16 h-16 bg-gray-100 dark:bg-gray-700 rounded-full flex items-center justify-center mb-4">
            <Plus className="w-8 h-8 text-gray-400" />
          </div>
          <h3 className="text-lg font-medium text-gray-900 dark:text-white mb-2">
            No Blogs Yet
          </h3>
          <p className="text-gray-500 dark:text-gray-400 mb-6">
            Get started by creating your first blog post
          </p>
          <Link
            href="/dashboard/blogs/create-blog"
            className="flex items-center gap-2 px-4 py-2 bg-primary text-white rounded-lg hover:bg-primary/90 transition-colors"
          >
            <Plus className="w-4 h-4" />
            Create Blog
          </Link>
        </div>
      )}
    </section>
  );
}