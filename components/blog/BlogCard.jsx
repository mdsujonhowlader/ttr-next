import Image from "next/image";
import Link from "next/link";
export default function BlogCard({ blog }) {
  return (
    <>
      <Link
        href={`blogs/${blog.slug}`}
        className="dark:bg-black border bg-white dark:border-gray-800 border-gray-300 w-full rounded-lg"
      >
        <Image
          src={blog?.imageId?.url}
          alt="blog Image"
          width="3000"
          height="2000"
          className="w-full object-cover rounded-t-lg"
        />
        <div className="flex flex-row justify-start gap-2 items-center mt-4 px-4">
          {blog.tags?.length > 0
            ? blog.tags.map((tagArray, index) => (
                <div
                  key={index}
                  className="bg-zinc-50 border-zinc-200 dark:bg-zinc-900 border dark:border-zinc-600 text-gray-40 font-medium  text-xs px-3 py-1 rounded-full mb-2"
                >
                  {tagArray}
                </div>
              ))
            : null}
        </div>
        <div className="px-4 mb-2 flex flex-col shadow-primary space-y-2 inset-shadow-gray-700">
          <h2
            href={`blogs/${blog.slug}`}
            className="text-md tracking-tight truncate font-bold hover:text-primary "
          >
            {blog.title}
          </h2>
          <p className="line-clamp-3 text-sm mb-4">{blog?.blogshortdesc}</p>
        </div>
      </Link>
    </>
  );
}
