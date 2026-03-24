import Link from "next/link";
import { BlogPost } from "@/data/blog-posts";
import { formatDate } from "@/lib/utils";

const categoryConfig: Record<
  BlogPost["category"],
  { label: string; color: string; gradient: string }
> = {
  "ai-tech": {
    label: "AI & Technology",
    color:
      "bg-violet-100 text-violet-700 dark:bg-violet-900/40 dark:text-violet-300",
    gradient: "from-violet-500 via-purple-500 to-indigo-600",
  },
  business: {
    label: "Business & Finance",
    color:
      "bg-emerald-100 text-emerald-700 dark:bg-emerald-900/40 dark:text-emerald-300",
    gradient: "from-emerald-500 via-teal-500 to-cyan-600",
  },
  creative: {
    label: "Creative & Design",
    color:
      "bg-amber-100 text-amber-700 dark:bg-amber-900/40 dark:text-amber-300",
    gradient: "from-amber-500 via-orange-500 to-rose-500",
  },
};

export default function BlogCard({ post }: { post: BlogPost }) {
  const config = categoryConfig[post.category];

  return (
    <Link href={`/blog/${post.slug}`} className="group block">
      <div className="card-hover overflow-hidden rounded-2xl border border-gray-200 bg-white dark:border-gray-700/50 dark:bg-gray-800/50">
        {/* Gradient placeholder image */}
        <div
          className={`relative flex h-48 items-center justify-center bg-gradient-to-br ${config.gradient} sm:h-52`}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            fill="currentColor"
            className="h-10 w-10 text-white/80 transition-transform duration-300 group-hover:scale-110"
          >
            <path
              fillRule="evenodd"
              d="M4.125 3C3.089 3 2.25 3.84 2.25 4.875V18a3 3 0 0 0 3 3h15a3 3 0 0 0 3-3V4.875C23.25 3.839 22.41 3 21.375 3H4.125ZM12 9.75a.75.75 0 0 0 0 1.5h1.5a.75.75 0 0 0 0-1.5H12Zm-.75-2.25a.75.75 0 0 1 .75-.75h1.5a.75.75 0 0 1 0 1.5H12a.75.75 0 0 1-.75-.75ZM6 12.75a.75.75 0 0 0 0 1.5h7.5a.75.75 0 0 0 0-1.5H6Zm-.75 3.75a.75.75 0 0 1 .75-.75h7.5a.75.75 0 0 1 0 1.5H6a.75.75 0 0 1-.75-.75ZM6 6.75a.75.75 0 0 0-.75.75v3c0 .414.336.75.75.75h3a.75.75 0 0 0 .75-.75v-3A.75.75 0 0 0 9 6.75H6Z"
              clipRule="evenodd"
            />
          </svg>
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
            {post.title}
          </h3>

          {/* Description (truncated) */}
          <p className="mt-2 line-clamp-2 text-sm leading-relaxed text-gray-500 dark:text-gray-400">
            {post.description}
          </p>

          {/* Meta: reading time + date */}
          <div className="mt-4 flex items-center gap-3 text-xs text-gray-400 dark:text-gray-500">
            <span className="flex items-center gap-1">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 20 20"
                fill="currentColor"
                className="h-3.5 w-3.5"
              >
                <path
                  fillRule="evenodd"
                  d="M10 18a8 8 0 1 0 0-16 8 8 0 0 0 0 16Zm.75-13a.75.75 0 0 0-1.5 0v5c0 .414.336.75.75.75h4a.75.75 0 0 0 0-1.5h-3.25V5Z"
                  clipRule="evenodd"
                />
              </svg>
              {post.readingTime} min read
            </span>
            <span>{formatDate(post.publishedAt)}</span>
          </div>
        </div>
      </div>
    </Link>
  );
}
