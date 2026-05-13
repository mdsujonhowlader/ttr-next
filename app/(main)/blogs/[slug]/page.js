import { getBlogBySlug } from "@/actions/BlogAction";
import SingleBlogContent from "@/components/blog/SingleBlogContent";
import { Suspense } from "react";
import LoadingFullApp from "../../loading";

export const dynamic = "force-dynamic";

export async function generateMetadata({ params }) {
  const { slug } = await params;
  const blog = await getBlogBySlug(slug);
  if (!blog || blog.error) return { title: "Blog Not Found - The Tech Resolver" };
  return {
    title: `${blog.title} - The Tech Resolver`,
    description: blog.blogshortdesc,
  };
}

export default async function BlogPage({ params }) {
  const { slug } = await params;
  const blog = await getBlogBySlug(slug);

  if (!blog || blog.error) return <p>Blog not found</p>;

  const plainBlog = {
    ...blog,
    _id: undefined,
    imageId: blog.imageId
      ? {
          id: blog.imageId._id.toString(),
          url: blog.imageId.url,
        }
      : null,
  };

  return (
    <>
      <Suspense fallback={<LoadingFullApp />}>
        <SingleBlogContent blog={plainBlog} />
      </Suspense>
    </>
  );
}
