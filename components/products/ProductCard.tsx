import Link from "next/link";
import { Product } from "@/data/products";
import { formatPrice, calculateDiscount } from "@/lib/utils";

const categoryConfig: Record<
  Product["category"],
  { label: string; color: string; gradient: string; icon: React.ReactNode }
> = {
  "ai-tech": {
    label: "AI & Technology",
    color: "bg-violet-100 text-violet-700 dark:bg-violet-900/40 dark:text-violet-300",
    gradient: "from-violet-500 via-purple-500 to-indigo-600",
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="h-10 w-10">
        <path d="M16.5 7.5h-9v9h9v-9Z" />
        <path fillRule="evenodd" d="M8.25 2.25a.75.75 0 0 1 .75.75v.75h6v-.75a.75.75 0 0 1 1.5 0v.75h.75a3 3 0 0 1 3 3v.75h.75a.75.75 0 0 1 0 1.5h-.75v6h.75a.75.75 0 0 1 0 1.5h-.75v.75a3 3 0 0 1-3 3h-.75v.75a.75.75 0 0 1-1.5 0v-.75h-6v.75a.75.75 0 0 1-1.5 0v-.75H6a3 3 0 0 1-3-3v-.75h-.75a.75.75 0 0 1 0-1.5H3v-6h-.75a.75.75 0 0 1 0-1.5H3V6.75a3 3 0 0 1 3-3h.75V3a.75.75 0 0 1 .75-.75ZM6 5.25A1.5 1.5 0 0 0 4.5 6.75v10.5A1.5 1.5 0 0 0 6 18.75h12a1.5 1.5 0 0 0 1.5-1.5V6.75A1.5 1.5 0 0 0 18 5.25H6Z" clipRule="evenodd" />
      </svg>
    ),
  },
  business: {
    label: "Business & Finance",
    color: "bg-emerald-100 text-emerald-700 dark:bg-emerald-900/40 dark:text-emerald-300",
    gradient: "from-emerald-500 via-teal-500 to-cyan-600",
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="h-10 w-10">
        <path fillRule="evenodd" d="M7.5 5.25a3 3 0 0 1 3-3h3a3 3 0 0 1 3 3v.205c.933.085 1.857.197 2.774.334 1.454.218 2.476 1.483 2.476 2.917v3.033c0 1.211-.734 2.352-1.936 2.752A24.726 24.726 0 0 1 12 15.75c-2.73 0-5.357-.442-7.814-1.259-1.202-.4-1.936-1.541-1.936-2.752V8.706c0-1.434 1.022-2.7 2.476-2.917A48.814 48.814 0 0 1 7.5 5.455V5.25Zm3-1.5a1.5 1.5 0 0 0-1.5 1.5v.058a50.056 50.056 0 0 1 6 0V5.25a1.5 1.5 0 0 0-1.5-1.5h-3Zm-4.5 9.69v2.31a1.5 1.5 0 0 0 1.5 1.5h9a1.5 1.5 0 0 0 1.5-1.5v-2.31a25.794 25.794 0 0 1-6 .69 25.794 25.794 0 0 1-6-.69Z" clipRule="evenodd" />
      </svg>
    ),
  },
  creative: {
    label: "Creative & Design",
    color: "bg-amber-100 text-amber-700 dark:bg-amber-900/40 dark:text-amber-300",
    gradient: "from-amber-500 via-orange-500 to-rose-500",
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="h-10 w-10">
        <path fillRule="evenodd" d="M20.599 1.5c-.376 0-.743.111-1.055.32l-5.08 3.385a18.747 18.747 0 0 0-3.471 2.987 10.04 10.04 0 0 1 4.815 4.815 18.748 18.748 0 0 0 2.987-3.472l3.386-5.079A1.902 1.902 0 0 0 20.599 1.5Zm-8.3 14.025a18.76 18.76 0 0 0 1.896-1.207 8.026 8.026 0 0 0-4.513-4.513A18.75 18.75 0 0 0 8.475 11.7l-.278.5a5.26 5.26 0 0 1 3.601 3.602l.5-.278ZM6.75 13.5A3.75 3.75 0 0 0 3 17.25a1.5 1.5 0 0 1-1.601 1.497.75.75 0 0 0-.7 1.123 5.25 5.25 0 0 0 9.8-2.62 3.75 3.75 0 0 0-3.75-3.75Z" clipRule="evenodd" />
      </svg>
    ),
  },
};

function StarRating({ rating, reviews }: { rating: number; reviews: number }) {
  return (
    <div className="flex items-center gap-1.5">
      <div className="flex items-center">
        {[1, 2, 3, 4, 5].map((star) => (
          <svg
            key={star}
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 20 20"
            fill="currentColor"
            className={`h-4 w-4 ${
              star <= Math.round(rating)
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
      <span className="text-sm font-medium text-gray-600 dark:text-gray-400">
        {rating}
      </span>
      <span className="text-sm text-gray-400 dark:text-gray-500">
        ({reviews})
      </span>
    </div>
  );
}

export default function ProductCard({ product }: { product: Product }) {
  const config = categoryConfig[product.category];
  const discount = product.originalPrice
    ? calculateDiscount(product.price, product.originalPrice)
    : null;

  return (
    <Link href={`/products/${product.slug}`} className="group block">
      <div className="card-hover overflow-hidden rounded-2xl border border-gray-200 bg-white dark:border-gray-700/50 dark:bg-gray-800/50">
        {/* Image placeholder */}
        <div
          className={`relative flex h-48 items-center justify-center bg-gradient-to-br ${config.gradient} sm:h-52`}
        >
          <div className="text-white/80 transition-transform duration-300 group-hover:scale-110">
            {config.icon}
          </div>
          {discount && (
            <span className="absolute right-3 top-3 rounded-full bg-red-500 px-2.5 py-1 text-xs font-bold text-white shadow-lg">
              -{discount}%
            </span>
          )}
        </div>

        {/* Content */}
        <div className="p-5 sm:p-6">
          {/* Category badge */}
          <span
            className={`inline-block rounded-full px-3 py-1 text-xs font-semibold ${config.color}`}
          >
            {config.label}
          </span>

          {/* Title */}
          <h3 className="mt-3 text-lg font-bold leading-snug text-gray-900 transition-colors group-hover:text-accent dark:text-white dark:group-hover:text-accent-light">
            {product.title}
          </h3>

          {/* Description */}
          <p className="mt-2 line-clamp-2 text-sm leading-relaxed text-gray-500 dark:text-gray-400">
            {product.description}
          </p>

          {/* Rating */}
          <div className="mt-3">
            <StarRating rating={product.rating} reviews={product.reviews} />
          </div>

          {/* Price + Button */}
          <div className="mt-4 flex items-center justify-between">
            <div className="flex items-baseline gap-2">
              <span className="text-2xl font-bold text-gray-900 dark:text-white">
                {formatPrice(product.price)}
              </span>
              {product.originalPrice && (
                <span className="text-sm text-gray-400 line-through dark:text-gray-500">
                  {formatPrice(product.originalPrice)}
                </span>
              )}
            </div>
            <span className="rounded-xl bg-accent/10 px-4 py-2 text-sm font-semibold text-accent transition-colors group-hover:bg-accent group-hover:text-white dark:bg-accent/20">
              Buy Now
            </span>
          </div>
        </div>
      </div>
    </Link>
  );
}
