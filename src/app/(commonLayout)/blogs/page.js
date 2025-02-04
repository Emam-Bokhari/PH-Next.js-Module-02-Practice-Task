import BlogCard from "@/components/posts/BlogCard";

export default async function BlogsPage() {
  const response = await fetch("https://jsonplaceholder.typicode.com/posts", {
    cache: "no-store",
  });
  const posts = await response.json();
  return (
    <div className="grid grid-cols-3 gap-10 my-10">
      {posts?.slice(0, 6)?.map((blog) => (
        <BlogCard key={blog.id} blog={blog} />
      ))}
    </div>
  );
}
