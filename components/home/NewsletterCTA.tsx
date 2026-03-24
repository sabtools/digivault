"use client";

import { useState, type FormEvent } from "react";

export default function NewsletterCTA() {
  const [email, setEmail] = useState("");
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle");
  const [errorMessage, setErrorMessage] = useState("");

  async function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    if (!email.trim()) return;

    setStatus("loading");
    setErrorMessage("");

    try {
      // Simulated API call — replace with real endpoint
      await new Promise((resolve) => setTimeout(resolve, 800));

      // Simulate success
      setStatus("success");
      setEmail("");
    } catch {
      setStatus("error");
      setErrorMessage("Something went wrong. Please try again.");
    }
  }

  return (
    <section className="relative isolate overflow-hidden bg-gradient-to-br from-indigo-600 via-purple-600 to-indigo-700 py-20 dark:from-indigo-800 dark:via-purple-800 dark:to-indigo-900 sm:py-28">
      {/* Decorative blobs */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -right-20 -top-20 h-[400px] w-[400px] rounded-full bg-white/10 blur-3xl"
      />
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -bottom-20 -left-20 h-[350px] w-[350px] rounded-full bg-white/10 blur-3xl"
      />

      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="text-3xl font-bold tracking-tight text-white sm:text-4xl">
            Get Our Free Resource Kit
          </h2>
          <p className="mt-4 text-lg leading-relaxed text-indigo-100">
            Subscribe and receive a free starter pack with 50 AI prompts, 10
            Notion templates, and a social media content calendar — delivered
            straight to your inbox.
          </p>

          {status === "success" ? (
            <div className="mt-8 rounded-xl border border-white/20 bg-white/10 px-6 py-5 backdrop-blur-sm">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth={2}
                strokeLinecap="round"
                strokeLinejoin="round"
                className="mx-auto h-8 w-8 text-emerald-300"
              >
                <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14" />
                <polyline points="22 4 12 14.01 9 11.01" />
              </svg>
              <p className="mt-3 text-sm font-medium text-white">
                You&apos;re in! Check your inbox for the free resource kit.
              </p>
            </div>
          ) : (
            <form
              onSubmit={handleSubmit}
              className="mt-8 flex flex-col gap-3 sm:flex-row sm:justify-center"
            >
              <label htmlFor="newsletter-email" className="sr-only">
                Email address
              </label>
              <input
                id="newsletter-email"
                type="email"
                required
                placeholder="Enter your email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="h-12 w-full rounded-xl border border-white/20 bg-white/10 px-4 text-sm text-white placeholder-indigo-200 backdrop-blur-sm transition-colors focus:border-white/40 focus:outline-none focus:ring-2 focus:ring-white/25 sm:max-w-sm"
              />
              <button
                type="submit"
                disabled={status === "loading"}
                className="inline-flex h-12 items-center justify-center rounded-xl bg-white px-8 text-sm font-semibold text-indigo-700 shadow-lg transition-all hover:bg-indigo-50 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white disabled:cursor-not-allowed disabled:opacity-70"
              >
                {status === "loading" ? (
                  <svg
                    className="h-5 w-5 animate-spin"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                  >
                    <circle
                      className="opacity-25"
                      cx="12"
                      cy="12"
                      r="10"
                      stroke="currentColor"
                      strokeWidth="4"
                    />
                    <path
                      className="opacity-75"
                      fill="currentColor"
                      d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4z"
                    />
                  </svg>
                ) : (
                  "Subscribe"
                )}
              </button>
            </form>
          )}

          {status === "error" && (
            <p className="mt-3 text-sm text-red-200">{errorMessage}</p>
          )}

          <p className="mt-5 text-sm text-indigo-200">
            Join 2,000+ creators who get weekly tips and resources. No spam,
            unsubscribe anytime.
          </p>
        </div>
      </div>
    </section>
  );
}
