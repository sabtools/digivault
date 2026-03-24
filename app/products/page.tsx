import { Metadata } from "next";
import { generatePageMeta } from "@/lib/seo";
import ProductGrid from "@/components/products/ProductGrid";

export const metadata: Metadata = generatePageMeta({
  title: "All Products — DigiVault",
  description:
    "Browse our collection of premium digital products. AI prompts, business templates, design resources, and productivity tools for creators and professionals.",
  path: "/products",
});

export default function ProductsPage() {
  return (
    <main className="min-h-screen bg-white dark:bg-gray-950">
      {/* Hero header */}
      <section className="border-b border-gray-100 bg-gradient-to-b from-gray-50 to-white pb-12 pt-28 dark:border-gray-800 dark:from-gray-900 dark:to-gray-950 sm:pb-16 sm:pt-32">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-2xl text-center">
            <h1 className="text-4xl font-bold tracking-tight text-gray-900 dark:text-white sm:text-5xl">
              All Products
            </h1>
            <p className="mt-4 text-lg leading-relaxed text-gray-600 dark:text-gray-400">
              Premium digital products crafted to help you work smarter, build
              faster, and grow your business. Instant download after purchase.
            </p>
          </div>
        </div>
      </section>

      {/* Product grid */}
      <section className="py-12 sm:py-16">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <ProductGrid />
        </div>
      </section>
    </main>
  );
}
