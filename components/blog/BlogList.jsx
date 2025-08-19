import { Suspense } from "react";
import BlogCard from "./BlogCard";

export default function BlogList({ blogs }) {
  return (
    <>
      {blogs.length > 0 ? (
        blogs.map((blog) => (
          <Suspense key={blog.id} fallback={<p>Loading...</p>}>
            <BlogCard blog={blog} />
          </Suspense>
        ))
      ) : (
        <p>Blog is Empty</p>
      )}
    </>
  );
}
