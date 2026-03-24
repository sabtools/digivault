import { Metadata } from "next";
import { generatePageMeta } from "@/lib/seo";
import BlogList from "@/components/blog/BlogList";

export const metadata: Metadata = generatePageMeta({
  title: "Blog — Tips, Guides & Resources",
  description:
    "Explore our blog for actionable tips, in-depth guides, and curated resources designed for creators and professionals. Level up your workflow today.",
  path: "/blog",
});

export default function BlogPage() {
  return (
    <main className="min-h-screen bg-white dark:bg-gray-950">
      {/* Hero header */}
      <section className="border-b border-gray-100 bg-gradient-to-b from-gray-50 to-white pb-12 pt-28 dark:border-gray-800 dark:from-gray-900 dark:to-gray-950 sm:pb-16 sm:pt-32">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-2xl text-center">
            <h1 className="text-4xl font-bold tracking-tight text-gray-900 dark:text-white sm:text-5xl">
              Blog — Tips, Guides & Resources
            </h1>
            <p className="mt-4 text-lg leading-relaxed text-gray-600 dark:text-gray-400">
              Actionable content for creators and professionals. Learn how to
              leverage AI, streamline your business, and build a standout brand.
            </p>
          </div>
        </div>
      </section>

      {/* Blog grid */}
      <section className="py-12 sm:py-16">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <BlogList />
        </div>
      </section>
    </main>
  );
}
