import { getBlogs } from "@/actions/BlogAction";
import BlogHeroSection from "@/components/blog/BlogHeroSection";
import BlogList from "@/components/blog/BlogList";
import { Suspense } from "react";
import LoadingFullApp from "@/app/(dashboard)/Loading";

export default async function BlogsPage() {
  const blogs = await getBlogs();

  return (
    <div className="min-h-screen">
      <BlogHeroSection />
      <section className="max-w-6xl mx-auto px-4 py-12">
        <div className="mb-8">
          <h2 className="text-2xl font-bold text-foreground">Latest Articles</h2>
          <p className="text-muted-foreground mt-1">Explore our recent blog posts and articles</p>
        </div>
        <Suspense fallback={<LoadingFullApp />}>
          <BlogList blogs={blogs} />
        </Suspense>
      </section>
    </div>
  );
}
