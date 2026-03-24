import { blogPosts } from "@/data/blog-posts";
import BlogCard from "./BlogCard";

export default function BlogList() {
  return (
    <div className="grid grid-cols-1 gap-6 sm:gap-8 md:grid-cols-2 lg:grid-cols-3">
      {blogPosts.map((post) => (
        <BlogCard key={post.slug} post={post} />
      ))}
    </div>
  );
}
