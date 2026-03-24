import { Metadata } from "next";
import { notFound } from "next/navigation";
import Link from "next/link";
import { getBlogPostBySlug, blogPosts } from "@/data/blog-posts";
import { getProductBySlug } from "@/data/products";
import JsonLd from "@/components/seo/JsonLd";
import Breadcrumbs from "@/components/seo/Breadcrumbs";
import {
  generateArticleSchema,
  generateBreadcrumbSchema,
  generatePageMeta,
} from "@/lib/seo";
import { formatDate } from "@/lib/utils";

// --------------- Static params ---------------
export function generateStaticParams() {
  return blogPosts.map((p) => ({ slug: p.slug }));
}

// --------------- Metadata ---------------
type PageProps = { params: Promise<{ slug: string }> };

export async function generateMetadata({
  params,
}: PageProps): Promise<Metadata> {
  const { slug } = await params;
  const post = getBlogPostBySlug(slug);
  if (!post) return {};

  return generatePageMeta({
    title: post.title,
    description: post.description,
    path: `/blog/${post.slug}`,
    image: post.image,
    type: "article",
  });
}

// --------------- Category config ---------------
const categoryConfig: Record<
  "ai-tech" | "business" | "creative",
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

// --------------- Content renderer ---------------
function renderContent(content: string) {
  const lines = content.split("\n");
  const elements: React.ReactNode[] = [];
  let key = 0;

  for (let i = 0; i < lines.length; i++) {
    const line = lines[i];

    if (line.startsWith("### ")) {
      elements.push(
        <h3
          key={key++}
          className="mb-3 mt-8 text-xl font-bold text-gray-900 dark:text-white"
        >
          {line.replace("### ", "")}
        </h3>
      );
    } else if (line.startsWith("## ")) {
      elements.push(
        <h2
          key={key++}
          className="mb-4 mt-10 text-2xl font-bold text-gray-900 dark:text-white"
        >
          {line.replace("## ", "")}
        </h2>
      );
    } else if (line.startsWith("- **")) {
      elements.push(
        <li key={key++} className="ml-4 text-gray-600 dark:text-gray-300">
          {renderInlineMarkdown(line.replace("- ", ""))}
        </li>
      );
    } else if (line.trim() === "") {
      continue;
    } else {
      elements.push(
        <p
          key={key++}
          className="mb-4 leading-relaxed text-gray-600 dark:text-gray-300"
        >
          {renderInlineMarkdown(line)}
        </p>
      );
    }
  }

  return elements;
}

function renderInlineMarkdown(text: string): React.ReactNode {
  const parts = text.split(/(\*\*[^*]+\*\*)/g);
  return parts.map((part, i) => {
    if (part.startsWith("**") && part.endsWith("**")) {
      return (
        <strong key={i} className="font-semibold text-gray-900 dark:text-white">
          {part.slice(2, -2)}
        </strong>
      );
    }
    return part;
  });
}

// --------------- Page ---------------
export default async function BlogPostPage({ params }: PageProps) {
  const { slug } = await params;
  const post = getBlogPostBySlug(slug);

  if (!post) {
    notFound();
  }

  const config = categoryConfig[post.category];

  const breadcrumbItems = [
    { name: "Home", url: "/" },
    { name: "Blog", url: "/blog" },
    { name: post.title, url: `/blog/${post.slug}` },
  ];

  // Resolve related products
  const relatedProducts = post.relatedProducts
    .map((slug) => getProductBySlug(slug))
    .filter(Boolean);

  return (
    <main className="min-h-screen bg-white dark:bg-gray-950">
      {/* JSON-LD */}
      <JsonLd data={generateArticleSchema(post)} />
      <JsonLd data={generateBreadcrumbSchema(breadcrumbItems)} />

      <article className="pb-16 pt-28 sm:pt-32">
        <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8">
          {/* Breadcrumbs */}
          <Breadcrumbs items={breadcrumbItems} />

          {/* Article header */}
          <header className="mb-10">
            <span
              className={`inline-block rounded-full px-3 py-1 text-xs font-semibold ${config.color}`}
            >
              {config.label}
            </span>

            <h1 className="mt-4 text-3xl font-bold tracking-tight text-gray-900 dark:text-white sm:text-4xl lg:text-5xl">
              {post.title}
            </h1>

            <div className="mt-4 flex flex-wrap items-center gap-4 text-sm text-gray-500 dark:text-gray-400">
              <span>{formatDate(post.publishedAt)}</span>
              <span className="h-1 w-1 rounded-full bg-gray-300 dark:bg-gray-600" />
              <span>{post.readingTime} min read</span>
              <span className="h-1 w-1 rounded-full bg-gray-300 dark:bg-gray-600" />
              <span>{post.author}</span>
            </div>
          </header>

          {/* Gradient hero image */}
          <div
            className={`mb-10 flex h-56 items-center justify-center rounded-2xl bg-gradient-to-br ${config.gradient} sm:h-72`}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="currentColor"
              className="h-16 w-16 text-white/80"
            >
              <path
                fillRule="evenodd"
                d="M4.125 3C3.089 3 2.25 3.84 2.25 4.875V18a3 3 0 0 0 3 3h15a3 3 0 0 0 3-3V4.875C23.25 3.839 22.41 3 21.375 3H4.125ZM12 9.75a.75.75 0 0 0 0 1.5h1.5a.75.75 0 0 0 0-1.5H12Zm-.75-2.25a.75.75 0 0 1 .75-.75h1.5a.75.75 0 0 1 0 1.5H12a.75.75 0 0 1-.75-.75ZM6 12.75a.75.75 0 0 0 0 1.5h7.5a.75.75 0 0 0 0-1.5H6Zm-.75 3.75a.75.75 0 0 1 .75-.75h7.5a.75.75 0 0 1 0 1.5H6a.75.75 0 0 1-.75-.75ZM6 6.75a.75.75 0 0 0-.75.75v3c0 .414.336.75.75.75h3a.75.75 0 0 0 .75-.75v-3A.75.75 0 0 0 9 6.75H6Z"
                clipRule="evenodd"
              />
            </svg>
          </div>

          {/* Article body */}
          <div className="prose-custom">{renderContent(post.content)}</div>
        </div>

        {/* Related Products */}
        {relatedProducts.length > 0 && (
          <section className="mt-16 border-t border-gray-100 pt-12 dark:border-gray-800">
            <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
              <h2 className="mb-8 text-center text-2xl font-bold text-gray-900 dark:text-white sm:text-3xl">
                Related Products
              </h2>
              <div className="mx-auto grid max-w-5xl grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
                {relatedProducts.map((product) =>
                  product ? (
                    <Link
                      key={product.slug}
                      href={`/products/${product.slug}`}
                      className="group block"
                    >
                      <div className="card-hover overflow-hidden rounded-2xl border border-gray-200 bg-white dark:border-gray-700/50 dark:bg-gray-800/50">
                        <div
                          className={`flex h-40 items-center justify-center bg-gradient-to-br ${
                            categoryConfig[product.category].gradient
                          }`}
                        >
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            viewBox="0 0 24 24"
                            fill="currentColor"
                            className="h-8 w-8 text-white/80"
                          >
                            <path
                              fillRule="evenodd"
                              d="M7.5 6v.75H5.513c-.96 0-1.764.724-1.865 1.679l-1.263 12A1.875 1.875 0 0 0 4.25 22.5h15.5a1.875 1.875 0 0 0 1.865-2.071l-1.263-12a1.875 1.875 0 0 0-1.865-1.679H16.5V6a4.5 4.5 0 1 0-9 0ZM12 3a3 3 0 0 0-3 3v.75h6V6a3 3 0 0 0-3-3Zm-3 8.25a3 3 0 1 0 6 0v-.75a.75.75 0 0 1 1.5 0v.75a4.5 4.5 0 1 1-9 0v-.75a.75.75 0 0 1 1.5 0v.75Z"
                              clipRule="evenodd"
                            />
                          </svg>
                        </div>
                        <div className="p-5">
                          <h3 className="font-bold text-gray-900 transition-colors group-hover:text-accent dark:text-white dark:group-hover:text-accent-light">
                            {product.title}
                          </h3>
                          <p className="mt-1 line-clamp-2 text-sm text-gray-500 dark:text-gray-400">
                            {product.description}
                          </p>
                          <p className="mt-3 text-lg font-bold text-gray-900 dark:text-white">
                            ${product.price}
                          </p>
                        </div>
                      </div>
                    </Link>
                  ) : null
                )}
              </div>
            </div>
          </section>
        )}
      </article>
    </main>
  );
}
