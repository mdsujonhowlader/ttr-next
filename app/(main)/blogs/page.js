import Image from "next/image";
import Link from "next/link";

export default function BlogsPage() {
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
        <div className="bg-card w-full rounded-lg">
          <Image
            src="/bg-zigzag.jpg"
            alt="blog Image"
            width="3000"
            height="2000"
            className="w-full rounded-t-lg"
          />

          <div className="px-4 py-3 flex flex-col shadow-primary space-y-5 inset-shadow-gray-700">
            <div className="bg-primary/30 inline-block w-fit text-sm px-2 py-1 rounded-lg mb-2">
              web development
            </div>
            <Link
              href="#"
              className="text-xl tracking-tight text-wrap font-bold hover:text-primary hover:underline hover:underline-offset-5"
            >
              Here Title iof Blogs asdasd sadsal asdlasdl kfdk kdmf cxc
            </Link>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Unde,
              reiciendis dicta quia, soluta nisi...
            </p>
            <div className="flex space-x-3 items-center">
              <Image
                src="/review/sujon.jpg"
                alt="sujon"
                className="size-7 rounded-full"
                width="2000"
                height="12000"
              />
              <div className="flex flex-col">
                <span className="text-xs text-gray-400">Author:Sujon</span>
                <span className="text-xs text-gray-400">Date: 12/20/20</span>
              </div>
            </div>
          </div>
        </div>
        <div className="bg-card w-full rounded-lg">
          <Image
            src="/bg-zigzag.jpg"
            alt="blog Image"
            width="3000"
            height="2000"
            className="w-full rounded-t-lg"
          />

          <div className="px-4 py-3 flex flex-col shadow-primary space-y-5 inset-shadow-gray-700">
            <div className="bg-primary/30 inline-block w-fit text-sm px-2 py-1 rounded-lg mb-2">
              Database Administration
            </div>
            <Link
              href="#"
              className="text-xl tracking-tight text-wrap font-bold hover:text-primary hover:underline hover:underline-offset-5"
            >
              Here Title iof Blogs asdasd sadsal asdlasdl kfdk kdmf cxc
            </Link>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Unde,
              reiciendis dicta quia, soluta nisi...
            </p>
            <div className="flex space-x-3 items-center">
              <Image
                src="/review/sujon.jpg"
                alt="sujon"
                className="size-7 rounded-full"
                width="2000"
                height="12000"
              />
              <div className="flex flex-col">
                <span className="text-xs text-gray-400">Author:Tanvir</span>
                <span className="text-xs text-gray-400">Date: 12/20/20</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
