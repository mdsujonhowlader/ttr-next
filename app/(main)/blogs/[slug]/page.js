import { getBlogBySlug } from "@/actions/BlogAction";
import SingleBlogContent from "@/components/blog/SingleBlogContent";
import { Suspense } from "react";
import LoadingFullApp from "../../loading";

export const dynamic = "force-dynamic";

export default async function BlogPage({ params }) {
  const blog = await getBlogBySlug(params.slug);

  if (!blog) return <p>Blog not found</p>;

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
