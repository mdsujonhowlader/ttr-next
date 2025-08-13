import { getBlogs } from "@/actions/BlogAction";
import BlogList from "@/components/blog/BlogList";

export default async function BlogsPage() {
  const blogs = await getBlogs();

  return (
    <section className="max-w-5xl mx-auto py-20">
      <div className="absolute inset-0 bg-radial-[125%_125%_at_50%_90%] from-white  from-40% to-green-500  to-100% dark:[background:radial-gradient(ellipse_80%_60%_at_50%_0%,rgba(16,185,129,0.25),transparent_80%),_#000000] mask-b-from-20% -z-50"></div>
      <div className=" rounded-lg p-4 leading-10 relative">
        <div className="absolute inset-0  rounded-lg z-0"></div>
        <div className="absolute inset-0  rounded-lg z-10"></div>
        <div className="relative z-20">
          <h1 className="text-left sm:text-center text--3xl sm:text-4xl md:text-5xl font-bold tracking-tight">
            All Blogs
          </h1>
          <p className="text-gray-500 text-left md:text-center">
            Reading our resarch for development
          </p>
        </div>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 mt-16">
        <BlogList blogs={blogs} />
      </div>
    </section>
  );
}
