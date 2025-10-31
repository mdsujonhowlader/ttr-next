import { getBlogs } from "@/actions/BlogAction";
import Image from "next/image";
import Link from "next/link";

export default async function BlogsPage() {
  const blogs = await getBlogs();

  return (
    <>
      <div className="flex flex-col justify-center items-center my-10 px-4">
        <div className="bg-green-400/20 px-4 py-4 rounded-md border-2 border-green-500 w-full flex justify-center items-center shadow-sm">
          <h3 className="text-xl font-bold tracking-tight text-green-600">
            Blog List
          </h3>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mt-8 w-full max-w-6xl">
          {blogs.length > 0 ? (
            blogs.map((blog) => (
              <Link
                key={blog.id}
                href={`blogs/${blog?.slug}`}
                className="flex bg-white border border-gray-200 rounded-xl overflow-hidden shadow-sm hover:shadow-md hover:-translate-y-1 transition-all duration-300"
              >
                <div className="w-2/5 h-40 sm:h-auto relative">
                  <Image
                    src={blog?.imageId?.url}
                    alt={`${blog.title} blog`}
                    fill
                    className="object-cover object-center"
                  />
                </div>
                <div className="w-3/5 p-4 flex flex-col justify-between">
                  <div>
                    <div className="block my-1 text-base sm:text-lg font-semibold hover:text-green-600 line-clamp-2">
                      {blog.title}
                    </div>
                    <p className="text-gray-600 text-sm sm:text-base line-clamp-3 mb-3">
                      {blog.blogshortdesc}
                    </p>
                    {blog.tags?.length > 0 && (
                      <div className="flex flex-wrap gap-2 mb-2">
                        {blog.tags.map((tagArray, index) => (
                          <p
                            key={index}
                            className="bg-green-100 text-green-700 w-fit text-xs px-2 py-1 rounded-md"
                          >
                            {tagArray}
                          </p>
                        ))}
                      </div>
                    )}
                  </div>

                  <div className="mt-3 text-green-600 text-sm font-medium hover:underline">
                    Read More →
                  </div>
                </div>
              </Link>
            ))
          ) : (
            <p className="text-gray-500 text-center">No Blogs Found</p>
          )}
        </div>
      </div>
    </>
  );
}
