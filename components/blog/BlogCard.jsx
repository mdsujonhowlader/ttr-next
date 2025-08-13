import Image from "next/image";
import Link from "next/link";

export default function BlogCard({ blog }) {
  return (
    <>
      <div className="bg-card w-full rounded-lg">
        <Image
          src={blog?.imageId?.url}
          alt="blog Image"
          width="3000"
          height="2000"
          className="w-full rounded-t-lg"
        />
        <div className="flex flex-row justify-start gap-4 items-center mt-4 px-4">
          {blog.tags?.length > 0
            ? blog.tags.map((tagArray, index) => (
                <div
                  key={index}
                  className=" bg-primary/30  w-fit text-sm px-2 py-1 rounded-lg mb-2"
                >
                  {tagArray}
                </div>
              ))
            : null}
        </div>
        <div className="px-4 py-3 flex flex-col shadow-primary space-y-5 inset-shadow-gray-700">
          <Link
            href={`blogs/${blog?.slug}`}
            className="text-xl tracking-tight text-wrap font-bold hover:text-primary hover:underline hover:underline-offset-5"
          >
            {blog.title}
          </Link>
          <p className="line-clamp-3">{blog?.blogshortdesc}</p>
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
