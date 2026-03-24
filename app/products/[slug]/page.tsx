import { Metadata } from "next";
import { notFound } from "next/navigation";
import Link from "next/link";
import {
  products,
  getProductBySlug,
  getRelatedProducts,
} from "@/data/products";
import {
  generatePageMeta,
  generateProductSchema,
  generateFAQSchema,
  generateBreadcrumbSchema,
} from "@/lib/seo";
import { formatPrice, calculateDiscount } from "@/lib/utils";
import JsonLd from "@/components/seo/JsonLd";
import Breadcrumbs from "@/components/seo/Breadcrumbs";
import ProductCard from "@/components/products/ProductCard";
import FAQSection from "./FAQSection";

// --------------- Static params ---------------
export function generateStaticParams() {
  return products.map((p) => ({ slug: p.slug }));
}

// --------------- Metadata ---------------
type PageProps = { params: Promise<{ slug: string }> };

export async function generateMetadata({
  params,
}: PageProps): Promise<Metadata> {
  const { slug } = await params;
  const product = getProductBySlug(slug);
  if (!product) return {};

  return generatePageMeta({
    title: `${product.title} — DigiVault`,
    description: product.description,
    path: `/products/${product.slug}`,
    image: product.image,
  });
}

// --------------- Category Helpers ---------------
const categoryGradients: Record<string, string> = {
  "ai-tech": "from-violet-500 via-purple-500 to-indigo-600",
  business: "from-emerald-500 via-teal-500 to-cyan-600",
  creative: "from-amber-500 via-orange-500 to-rose-500",
};

const categoryLabels: Record<string, string> = {
  "ai-tech": "AI & Technology",
  business: "Business & Finance",
  creative: "Creative & Design",
};

const categoryIcons: Record<string, React.ReactNode> = {
  "ai-tech": (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="h-16 w-16">
      <path d="M16.5 7.5h-9v9h9v-9Z" />
      <path fillRule="evenodd" d="M8.25 2.25a.75.75 0 0 1 .75.75v.75h6v-.75a.75.75 0 0 1 1.5 0v.75h.75a3 3 0 0 1 3 3v.75h.75a.75.75 0 0 1 0 1.5h-.75v6h.75a.75.75 0 0 1 0 1.5h-.75v.75a3 3 0 0 1-3 3h-.75v.75a.75.75 0 0 1-1.5 0v-.75h-6v.75a.75.75 0 0 1-1.5 0v-.75H6a3 3 0 0 1-3-3v-.75h-.75a.75.75 0 0 1 0-1.5H3v-6h-.75a.75.75 0 0 1 0-1.5H3V6.75a3 3 0 0 1 3-3h.75V3a.75.75 0 0 1 .75-.75ZM6 5.25A1.5 1.5 0 0 0 4.5 6.75v10.5A1.5 1.5 0 0 0 6 18.75h12a1.5 1.5 0 0 0 1.5-1.5V6.75A1.5 1.5 0 0 0 18 5.25H6Z" clipRule="evenodd" />
    </svg>
  ),
  business: (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="h-16 w-16">
      <path fillRule="evenodd" d="M7.5 5.25a3 3 0 0 1 3-3h3a3 3 0 0 1 3 3v.205c.933.085 1.857.197 2.774.334 1.454.218 2.476 1.483 2.476 2.917v3.033c0 1.211-.734 2.352-1.936 2.752A24.726 24.726 0 0 1 12 15.75c-2.73 0-5.357-.442-7.814-1.259-1.202-.4-1.936-1.541-1.936-2.752V8.706c0-1.434 1.022-2.7 2.476-2.917A48.814 48.814 0 0 1 7.5 5.455V5.25Zm3-1.5a1.5 1.5 0 0 0-1.5 1.5v.058a50.056 50.056 0 0 1 6 0V5.25a1.5 1.5 0 0 0-1.5-1.5h-3Zm-4.5 9.69v2.31a1.5 1.5 0 0 0 1.5 1.5h9a1.5 1.5 0 0 0 1.5-1.5v-2.31a25.794 25.794 0 0 1-6 .69 25.794 25.794 0 0 1-6-.69Z" clipRule="evenodd" />
    </svg>
  ),
  creative: (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="h-16 w-16">
      <path fillRule="evenodd" d="M20.599 1.5c-.376 0-.743.111-1.055.32l-5.08 3.385a18.747 18.747 0 0 0-3.471 2.987 10.04 10.04 0 0 1 4.815 4.815 18.748 18.748 0 0 0 2.987-3.472l3.386-5.079A1.902 1.902 0 0 0 20.599 1.5Zm-8.3 14.025a18.76 18.76 0 0 0 1.896-1.207 8.026 8.026 0 0 0-4.513-4.513A18.75 18.75 0 0 0 8.475 11.7l-.278.5a5.26 5.26 0 0 1 3.601 3.602l.5-.278ZM6.75 13.5A3.75 3.75 0 0 0 3 17.25a1.5 1.5 0 0 1-1.601 1.497.75.75 0 0 0-.7 1.123 5.25 5.25 0 0 0 9.8-2.62 3.75 3.75 0 0 0-3.75-3.75Z" clipRule="evenodd" />
    </svg>
  ),
};

// --------------- Page ---------------
export default async function ProductPage({ params }: PageProps) {
  const { slug } = await params;
  const product = getProductBySlug(slug);
  if (!product) notFound();

  const relatedProducts = getRelatedProducts(slug, 3);
  const discount = product.originalPrice
    ? calculateDiscount(product.price, product.originalPrice)
    : null;

  const breadcrumbItems = [
    { name: "Home", url: "/" },
    { name: "Products", url: "/products" },
    { name: product.title, url: `/products/${product.slug}` },
  ];

  return (
    <main className="min-h-screen bg-white dark:bg-gray-950">
      {/* JSON-LD Schemas */}
      <JsonLd data={generateProductSchema(product)} />
      <JsonLd data={generateFAQSchema(product.faq)} />
      <JsonLd data={generateBreadcrumbSchema(breadcrumbItems)} />

      {/* Hero Section */}
      <section className="border-b border-gray-100 pt-24 dark:border-gray-800 sm:pt-28">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          {/* Breadcrumbs */}
          <Breadcrumbs items={breadcrumbItems} />

          <div className="grid gap-10 pb-12 lg:grid-cols-2 lg:gap-16 lg:pb-16">
            {/* Product Image Placeholder */}
            <div
              className={`flex items-center justify-center rounded-2xl bg-gradient-to-br ${categoryGradients[product.category]} aspect-[4/3] shadow-xl shadow-black/10`}
            >
              <div className="text-white/80">
                {categoryIcons[product.category]}
              </div>
            </div>

            {/* Product Info */}
            <div className="flex flex-col justify-center">
              {/* Category badge */}
              <span className="mb-4 inline-block w-fit rounded-full bg-accent/10 px-3.5 py-1.5 text-xs font-semibold text-accent dark:bg-accent/20 dark:text-accent-light">
                {categoryLabels[product.category]}
              </span>

              {/* Title */}
              <h1 className="text-3xl font-bold tracking-tight text-gray-900 dark:text-white sm:text-4xl lg:text-5xl">
                {product.title}
              </h1>

              {/* Description */}
              <p className="mt-4 text-lg leading-relaxed text-gray-600 dark:text-gray-400">
                {product.longDescription}
              </p>

              {/* Rating */}
              <div className="mt-5 flex items-center gap-2">
                <div className="flex items-center">
                  {[1, 2, 3, 4, 5].map((star) => (
                    <svg
                      key={star}
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 20 20"
                      fill="currentColor"
                      className={`h-5 w-5 ${
                        star <= Math.round(product.rating)
                          ? "text-amber-400"
                          : "text-gray-300 dark:text-gray-600"
                      }`}
                    >
                      <path
                        fillRule="evenodd"
                        d="M10.868 2.884c-.321-.772-1.415-.772-1.736 0l-1.83 4.401-4.753.381c-.833.067-1.171 1.107-.536 1.651l3.62 3.102-1.106 4.637c-.194.813.691 1.456 1.405 1.02L10 15.591l4.069 2.485c.713.436 1.598-.207 1.404-1.02l-1.106-4.637 3.62-3.102c.635-.544.297-1.584-.536-1.65l-4.752-.382-1.831-4.401Z"
                        clipRule="evenodd"
                      />
                    </svg>
                  ))}
                </div>
                <span className="text-sm font-semibold text-gray-700 dark:text-gray-300">
                  {product.rating}
                </span>
                <span className="text-sm text-gray-500 dark:text-gray-400">
                  ({product.reviews} reviews)
                </span>
              </div>

              {/* Price */}
              <div className="mt-6 flex items-baseline gap-3">
                <span className="text-4xl font-bold text-gray-900 dark:text-white">
                  {formatPrice(product.price)}
                </span>
                {product.originalPrice && (
                  <>
                    <span className="text-xl text-gray-400 line-through dark:text-gray-500">
                      {formatPrice(product.originalPrice)}
                    </span>
                    <span className="rounded-full bg-red-100 px-2.5 py-0.5 text-sm font-bold text-red-600 dark:bg-red-900/30 dark:text-red-400">
                      Save {discount}%
                    </span>
                  </>
                )}
              </div>

              {/* CTA */}
              <a
                href={product.gumroadUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-primary mt-8 w-full gap-2 text-center sm:w-auto"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                  className="h-5 w-5"
                >
                  <path
                    fillRule="evenodd"
                    d="M2.5 7.5a5 5 0 0 1 10 0v.5H15a1 1 0 0 1 1 1v6a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V9a1 1 0 0 1 1-1h2.5v-.5a2.5 2.5 0 0 0-5 0A.75.75 0 0 1 1 7.5Zm7 0v.5h-3v-.5a1.5 1.5 0 0 1 3 0Z"
                    clipRule="evenodd"
                  />
                </svg>
                Buy Now &mdash; {formatPrice(product.price)}
              </a>

              {/* Trust */}
              <div className="mt-5 flex flex-wrap gap-4 text-xs text-gray-500 dark:text-gray-400">
                <span className="flex items-center gap-1">
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="h-4 w-4 text-green-500">
                    <path fillRule="evenodd" d="M16.403 12.652a3 3 0 0 0 0-5.304 3 3 0 0 0-3.75-3.751 3 3 0 0 0-5.305 0 3 3 0 0 0-3.751 3.75 3 3 0 0 0 0 5.305 3 3 0 0 0 3.75 3.751 3 3 0 0 0 5.305 0 3 3 0 0 0 3.751-3.75Zm-2.546-4.46a.75.75 0 0 0-1.214-.882l-3.483 4.79-1.88-1.88a.75.75 0 1 0-1.06 1.061l2.5 2.5a.75.75 0 0 0 1.137-.089l4-5.5Z" clipRule="evenodd" />
                  </svg>
                  Instant Download
                </span>
                <span className="flex items-center gap-1">
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="h-4 w-4 text-green-500">
                    <path fillRule="evenodd" d="M16.403 12.652a3 3 0 0 0 0-5.304 3 3 0 0 0-3.75-3.751 3 3 0 0 0-5.305 0 3 3 0 0 0-3.751 3.75 3 3 0 0 0 0 5.305 3 3 0 0 0 3.75 3.751 3 3 0 0 0 5.305 0 3 3 0 0 0 3.751-3.75Zm-2.546-4.46a.75.75 0 0 0-1.214-.882l-3.483 4.79-1.88-1.88a.75.75 0 1 0-1.06 1.061l2.5 2.5a.75.75 0 0 0 1.137-.089l4-5.5Z" clipRule="evenodd" />
                  </svg>
                  Lifetime Access
                </span>
                <span className="flex items-center gap-1">
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="h-4 w-4 text-green-500">
                    <path fillRule="evenodd" d="M16.403 12.652a3 3 0 0 0 0-5.304 3 3 0 0 0-3.75-3.751 3 3 0 0 0-5.305 0 3 3 0 0 0-3.751 3.75 3 3 0 0 0 0 5.305 3 3 0 0 0 3.75 3.751 3 3 0 0 0 5.305 0 3 3 0 0 0 3.751-3.75Zm-2.546-4.46a.75.75 0 0 0-1.214-.882l-3.483 4.79-1.88-1.88a.75.75 0 1 0-1.06 1.061l2.5 2.5a.75.75 0 0 0 1.137-.089l4-5.5Z" clipRule="evenodd" />
                  </svg>
                  Free Updates
                </span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Details Section */}
      <section className="py-12 sm:py-16">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid gap-12 lg:grid-cols-2 lg:gap-16">
            {/* Features */}
            <div>
              <h2 className="text-2xl font-bold text-gray-900 dark:text-white">
                Features
              </h2>
              <ul className="mt-6 space-y-4">
                {product.features.map((feature) => (
                  <li key={feature} className="flex items-start gap-3">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 20 20"
                      fill="currentColor"
                      className="mt-0.5 h-5 w-5 shrink-0 text-accent dark:text-accent-light"
                    >
                      <path
                        fillRule="evenodd"
                        d="M10 18a8 8 0 1 0 0-16 8 8 0 0 0 0 16Zm3.857-9.809a.75.75 0 0 0-1.214-.882l-3.483 4.79-1.88-1.88a.75.75 0 1 0-1.06 1.061l2.5 2.5a.75.75 0 0 0 1.137-.089l4-5.5Z"
                        clipRule="evenodd"
                      />
                    </svg>
                    <span className="text-gray-700 dark:text-gray-300">
                      {feature}
                    </span>
                  </li>
                ))}
              </ul>
            </div>

            {/* What's Included */}
            <div>
              <h2 className="text-2xl font-bold text-gray-900 dark:text-white">
                What&apos;s Included
              </h2>
              <ul className="mt-6 space-y-4">
                {product.whatsIncluded.map((item) => (
                  <li key={item} className="flex items-start gap-3">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 20 20"
                      fill="currentColor"
                      className="mt-0.5 h-5 w-5 shrink-0 text-emerald-500"
                    >
                      <path d="M10 2a.75.75 0 0 1 .75.75v5.59l1.95-2.1a.75.75 0 1 1 1.1 1.02l-3.25 3.5a.75.75 0 0 1-1.1 0L6.2 7.26a.75.75 0 1 1 1.1-1.02l1.95 2.1V2.75A.75.75 0 0 1 10 2ZM3 12a1 1 0 0 1 1-1h3a1 1 0 1 1 0 2H5v4h10v-4h-2a1 1 0 1 1 0-2h3a1 1 0 0 1 1 1v5a1 1 0 0 1-1 1H4a1 1 0 0 1-1-1v-5Z" />
                    </svg>
                    <span className="text-gray-700 dark:text-gray-300">
                      {item}
                    </span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      {product.faq.length > 0 && (
        <section className="border-t border-gray-100 bg-gray-50 py-12 dark:border-gray-800 dark:bg-gray-900 sm:py-16">
          <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8">
            <h2 className="text-center text-2xl font-bold text-gray-900 dark:text-white sm:text-3xl">
              Frequently Asked Questions
            </h2>
            <div className="mt-8 sm:mt-10">
              <FAQSection faqs={product.faq} />
            </div>
          </div>
        </section>
      )}

      {/* Related Products */}
      {relatedProducts.length > 0 && (
        <section className="border-t border-gray-100 py-12 dark:border-gray-800 sm:py-16">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <h2 className="text-2xl font-bold text-gray-900 dark:text-white sm:text-3xl">
              Related Products
            </h2>
            <div className="mt-8 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3 lg:gap-8">
              {relatedProducts.map((rp) => (
                <ProductCard key={rp.slug} product={rp} />
              ))}
            </div>
            <div className="mt-10 text-center">
              <Link
                href="/products"
                className="text-sm font-semibold text-accent transition-colors hover:text-accent-hover dark:text-accent-light"
              >
                View All Products &rarr;
              </Link>
            </div>
          </div>
        </section>
      )}
    </main>
  );
}
