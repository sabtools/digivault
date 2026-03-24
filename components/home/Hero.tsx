"use client";

import Link from "next/link";
import { motion } from "framer-motion";

const stats = [
  { label: "Products", value: "500+" },
  { label: "Customers", value: "10,000+" },
  { label: "Average Rating", value: "4.8\u2605" },
];

export default function Hero() {
  return (
    <section className="relative isolate overflow-hidden bg-white dark:bg-gray-950">
      {/* Animated gradient blobs */}
      <motion.div
        aria-hidden="true"
        className="pointer-events-none absolute -top-40 left-1/2 -z-10 h-[600px] w-[600px] -translate-x-1/2 rounded-full bg-gradient-to-tr from-indigo-400 to-purple-500 opacity-20 blur-3xl dark:from-indigo-600 dark:to-purple-700 dark:opacity-15"
        animate={{ scale: [1, 1.15, 1], x: ["-50%", "-45%", "-50%"] }}
        transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
      />
      <motion.div
        aria-hidden="true"
        className="pointer-events-none absolute -bottom-32 right-0 -z-10 h-[500px] w-[500px] rounded-full bg-gradient-to-bl from-cyan-400 to-indigo-500 opacity-15 blur-3xl dark:from-cyan-600 dark:to-indigo-700 dark:opacity-10"
        animate={{ scale: [1, 1.1, 1], y: ["0%", "-5%", "0%"] }}
        transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
      />
      <motion.div
        aria-hidden="true"
        className="pointer-events-none absolute left-10 top-1/2 -z-10 h-[350px] w-[350px] rounded-full bg-gradient-to-r from-pink-400 to-rose-500 opacity-10 blur-3xl dark:from-pink-600 dark:to-rose-700 dark:opacity-[0.07]"
        animate={{ scale: [1, 1.2, 1], y: ["-50%", "-55%", "-50%"] }}
        transition={{ duration: 12, repeat: Infinity, ease: "easeInOut" }}
      />

      <div className="mx-auto max-w-7xl px-4 pb-20 pt-24 sm:px-6 sm:pb-28 sm:pt-32 lg:px-8 lg:pb-32 lg:pt-40">
        <div className="mx-auto max-w-3xl text-center">
          <motion.h1
            className="text-4xl font-extrabold tracking-tight text-gray-900 dark:text-white sm:text-5xl lg:text-6xl"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            Premium Digital Products for{" "}
            <span className="bg-gradient-to-r from-indigo-600 to-purple-600 bg-clip-text text-transparent dark:from-indigo-400 dark:to-purple-400">
              Creators &amp; Professionals
            </span>
          </motion.h1>

          <motion.p
            className="mt-6 text-lg leading-relaxed text-gray-600 dark:text-gray-400 sm:text-xl"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.15 }}
          >
            Discover curated AI prompts, Notion templates, design kits, and
            automation blueprints to supercharge your workflow and grow your
            business.
          </motion.p>

          <motion.div
            className="mt-10 flex flex-col items-center gap-4 sm:flex-row sm:justify-center"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
          >
            <Link
              href="/products"
              className="inline-flex h-12 items-center justify-center rounded-xl bg-indigo-600 px-8 text-sm font-semibold text-white shadow-lg shadow-indigo-500/25 transition-all hover:bg-indigo-700 hover:shadow-indigo-500/40 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600 dark:shadow-indigo-500/10 dark:hover:shadow-indigo-500/20"
            >
              Browse Products
            </Link>
            <Link
              href="/newsletter"
              className="inline-flex h-12 items-center justify-center rounded-xl border border-gray-300 bg-white px-8 text-sm font-semibold text-gray-700 transition-all hover:bg-gray-50 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600 dark:border-gray-700 dark:bg-gray-900 dark:text-gray-200 dark:hover:bg-gray-800"
            >
              Get Free Resources
            </Link>
          </motion.div>
        </div>

        {/* Stats row */}
        <motion.div
          className="mx-auto mt-16 grid max-w-2xl grid-cols-1 gap-6 sm:mt-20 sm:grid-cols-3 sm:gap-8"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.45 }}
        >
          {stats.map((stat) => (
            <div
              key={stat.label}
              className="flex flex-col items-center rounded-2xl border border-gray-200 bg-white/60 px-6 py-5 backdrop-blur-sm dark:border-gray-800 dark:bg-gray-900/60"
            >
              <span className="text-2xl font-bold text-gray-900 dark:text-white sm:text-3xl">
                {stat.value}
              </span>
              <span className="mt-1 text-sm text-gray-500 dark:text-gray-400">
                {stat.label}
              </span>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
