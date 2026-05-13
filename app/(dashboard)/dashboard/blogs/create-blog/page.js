import { getImages } from "@/actions/galleryAction";
import BlogdFromClient from "@/app/(dashboard)/_components/blogs/BlogFormClient";

export default async function CreateBlogPage() {
  const safeImages = await getImages();

  return (
    <section className="mt-5 mb-30 z-50 overflow-auto">
      <h2 className="text-3xl text-center font-medium mb-4">
        Add <span className="text-gray-400 dark:text-primary">Blog</span>
      </h2>
      <BlogdFromClient safeImages={safeImages} />
    </section>
  );
}
