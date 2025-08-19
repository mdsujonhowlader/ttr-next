import { getBlogs } from "@/actions/BlogAction";
import { Button } from "@headlessui/react";
import { Ellipsis } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

export default async function BlogsPage() {
  const blogs = await getBlogs();

  return (
    <>
      <div className="flex flex-col justify-center items-center my-10 px-4">
        <div className="bg-green-400/20 px-4 py-4 rounded-2xl border-2 border-green-500 w-full flex justify-center items-center">
          <h3 className="text-xl font-bold tracking-tight text-green-500">
            Blog list
          </h3>
        </div>

        <div className="grid grid-cols-4 gap-4  mt-7">
          {blogs.length > 0 ? (
            blogs.map((blog) => (
              <div
                key={blog.id}
                className="flex justify-center flex-col items-center bg-white border-1 border-gray-200 rounded-2xl p-4"
              >
                <Button className="cursor-pointer self-end py-2">
                  <Ellipsis />
                </Button>
                <div>
                  <Image
                    src={blog?.imageId?.url}
                    alt={`${blog.title} blog`}
                    width={600}
                    height={600}
                    className="w-[200px] h-[100px] object-cover rounded-2xl"
                  />
                </div>
                <div className="mt-5">
                  <div className="flex justify-center items-center gap-4 text-gray-600 dark:text-gray-200">
                    {blog.tags?.length > 0
                      ? blog.tags.map((tagArray, index) => (
                          <p
                            key={index}
                            className=" bg-primary/30  w-fit text-sm px-2 py-1 rounded-lg mb-2"
                          >
                            {tagArray}
                          </p>
                        ))
                      : null}
                  </div>

                  <Link
                    href={`blogs/${blog?.slug}`}
                    className="my-1 hover:text-green-500 line-clamp-2 font-medium"
                  >
                    {blog.title}
                  </Link>
                  <p className="line-clamp-3 text-base">{blog.blogshortdesc}</p>
                </div>
              </div>
            ))
          ) : (
            <p>No Blogs Found</p>
          )}
        </div>
      </div>
    </>
  );
}
