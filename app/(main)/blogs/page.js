import { getBlogs } from "@/actions/BlogAction";
import BlogHeroSection from "@/components/blog/blogHeroSection";
import BlogList from "@/components/blog/BlogList";

export default async function BlogsPage() {
  const blogs = await getBlogs();

  return (
    <section className="max-w-6xl mx-auto py-20">
      <BlogHeroSection />

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 mt-16">
        <BlogList blogs={blogs} />
      </div>
    </section>
  );
}
