import Image from "next/image";
import Link from "next/link";
export default function BlogCard({ blog }) {
  return (
    <>
      <div className="dark:bg-black border bg-white dark:border-gray-800 border-gray-300 w-full rounded-lg">
        <Image
          src={blog?.imageId?.url}
          alt="blog Image"
          width="3000"
          height="2000"
          className="w-full object-cover rounded-t-lg"
        />
        <div className="flex flex-row justify-start gap-4 items-center mt-4 px-4">
          {blog.tags?.length > 0
            ? blog.tags.map((tagArray, index) => (
                <div
                  key={index}
                  className="bg-green-50 dark:bg-green-900/40 border border-green-800 text-green-600  w-fit text-sm px-3  rounded-2xl mb-2"
                >
                  {tagArray}
                </div>
              ))
            : null}
        </div>
        <div className="px-4 mb-2 flex flex-col shadow-primary space-y-2 inset-shadow-gray-700">
          {/* href={`services/${id}`} */}
          <Link
            href={`blogs/${blog.slug}`}
            prefetch={false}
            className="text-md tracking-tight text-wrap font-bold hover:text-primary hover:underline hover:underline-offset-5"
          >
            {blog.title}
          </Link>
          <p className="line-clamp-3 text-sm">{blog?.blogshortdesc}</p>
          {/* <div className="flex space-x-3 items-center">
            <Image
              src="/review/sujon.jpg"
              alt="sujon"
              className="size-7 rounded-full"
              width="2000"
              height="12000"
            />
            <div className="flex flex-col">
              <span className="text-xs text-gray-400">Author:Admin</span>
              <span className="text-xs text-gray-400">Date: 12/20/20</span>
            </div>
          </div> */}
        </div>
      </div>
    </>
  );
}
