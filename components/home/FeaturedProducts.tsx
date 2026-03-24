import Link from "next/link";
import { getFeaturedProducts } from "@/data/products";
import ProductCard from "@/components/products/ProductCard";

export default function FeaturedProducts() {
  const products = getFeaturedProducts();

  return (
    <section className="bg-gray-50 py-20 dark:bg-gray-900 sm:py-28">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="text-3xl font-bold tracking-tight text-gray-900 dark:text-white sm:text-4xl">
            Featured Products
          </h2>
          <p className="mt-4 text-lg text-gray-600 dark:text-gray-400">
            Hand-picked digital products trusted by thousands of creators and
            professionals worldwide.
          </p>
        </div>

        {/* Product grid */}
        <div className="mt-12 grid grid-cols-1 gap-6 sm:mt-16 sm:grid-cols-2 lg:grid-cols-3 lg:gap-8">
          {products.map((product) => (
            <ProductCard key={product.slug} product={product} />
          ))}
        </div>

        {/* View all link */}
        <div className="mt-12 text-center sm:mt-16">
          <Link
            href="/products"
            className="inline-flex items-center gap-2 text-sm font-semibold text-indigo-600 transition-colors hover:text-indigo-700 dark:text-indigo-400 dark:hover:text-indigo-300"
          >
            View All Products
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 20 20"
              fill="currentColor"
              className="h-4 w-4"
            >
              <path
                fillRule="evenodd"
                d="M3 10a.75.75 0 0 1 .75-.75h10.638l-3.96-3.72a.75.75 0 1 1 1.024-1.06l5.25 4.93a.75.75 0 0 1 0 1.06l-5.25 4.93a.75.75 0 1 1-1.024-1.06l3.96-3.72H3.75A.75.75 0 0 1 3 10Z"
                clipRule="evenodd"
              />
            </svg>
          </Link>
        </div>
      </div>
    </section>
  );
}
