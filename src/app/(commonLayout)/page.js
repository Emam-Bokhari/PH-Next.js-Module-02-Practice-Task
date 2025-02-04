import Image from "next/image";
import bannerImage from "@/assets/banner.jpg";
import BlogCard from "@/components/posts/BlogCard";
import NavigationButton from "@/components/shared/NavigationButton";

export default async function HomePage() {
  const response = await fetch("https://jsonplaceholder.typicode.com/posts", {
    next: { revalidate: 30 },
  });
  const posts = await response.json();
  console.log(posts);
  return (
    <div>
      <Image
        src={bannerImage}
        alt="Food Banner"
        priority
        sizes="100vw"
        style={{
          width: "100%",
          height: "auto",
        }}
      />
      <div className="grid grid-cols-3 gap-10 my-10">
        {posts?.slice(0, 3)?.map((item) => (
          <BlogCard key={item.id} blog={item} />
        ))}
      </div>
      <div className="text-center my-4">
        <NavigationButton label="See More" route="/blogs" />
      </div>
    </div>
  );
}
