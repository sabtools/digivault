import Link from "next/link";

export default function NotFound() {
  return (
    <main className="flex min-h-screen items-center justify-center bg-white px-4 dark:bg-gray-950">
      <div className="mx-auto max-w-md text-center">
        <p className="text-7xl font-bold text-accent sm:text-9xl">404</p>
        <h1 className="mt-4 text-3xl font-bold tracking-tight text-gray-900 dark:text-white sm:text-4xl">
          Page Not Found
        </h1>
        <p className="mt-4 text-lg leading-relaxed text-gray-500 dark:text-gray-400">
          Sorry, we could not find the page you are looking for. It may have
          been moved or no longer exists.
        </p>

        <div className="mt-8 flex flex-col items-center gap-3 sm:flex-row sm:justify-center">
          <Link href="/" className="btn-primary w-full sm:w-auto">
            Go Home
          </Link>
          <Link href="/products" className="btn-secondary w-full sm:w-auto">
            Browse Products
          </Link>
          <Link
            href="/blog"
            className="inline-flex w-full items-center justify-center px-6 py-3 text-sm font-semibold text-gray-600 transition-colors hover:text-accent dark:text-gray-400 dark:hover:text-accent-light sm:w-auto"
          >
            Read the Blog
          </Link>
        </div>
      </div>
    </main>
  );
}
