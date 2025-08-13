import { getBlogBySlug } from "@/actions/BlogAction";
import Image from "next/image";

export default async function BlogPage({ params }) {
  const { slug } = await params;
  const blog = await getBlogBySlug(slug);

  return (
    <section className="my-32 overflow-auto max-w-5xl mx-auto">
      <div className="dark:bg-black bg-white text-black dark:text-white rounded-lg shadow-md py-7 border dark:border-gray-800 px-4">
        <h2 className="text-3xl text-center  font-medium mb-4">{blog.title}</h2>
        <div className="flex justify-center mb-4">
          <Image
            src={blog?.imageId?.url}
            alt={blog.title}
            width={500}
            height={300}
            className="rounded-lg"
          />
        </div>
        <div className="flex items-center mb-4">
          <p className="text-gray-600">{blog.title}</p>
        </div>
        <div className="flex items-center mb-4">
          <p className="text-gray-600">{blog.blogshortdesc}</p>
        </div>
        <div
          className="prose dark:prose-invert max-w-none"
          dangerouslySetInnerHTML={{ __html: blog.bloglongDescription }}
        />
      </div>
    </section>
  );
}
