import BlogCard from "./BlogCard";

export default function BlogList({ blogs }) {
  return (
    <>
      {blogs.length > 0 ? (
        blogs.map((blog) => <BlogCard key={blog.id} blog={blog} />)
      ) : (
        <p>Blog is Empty</p>
      )}
    </>
  );
}
