export const dynamic = "force-dynamic";
import { getBlogs } from "@/actions/BlogAction";
import LoadingFullApp from "@/app/(dashboard)/Loading";
import BlogHeroSection from "@/components/blog/BlogHeroSection";

import BlogList from "@/components/blog/BlogList";
import { Suspense } from "react";

export default async function BlogsPage() {
  const blogs = await getBlogs();

  return (
    <section className="max-w-6xl mx-auto py-20">
      <BlogHeroSection />
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 mt-16">
        <Suspense fallback={<LoadingFullApp />}>
          <BlogList blogs={blogs} />
        </Suspense>
      </div>
    </section>
  );
}
