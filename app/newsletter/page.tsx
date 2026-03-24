import { Metadata } from "next";
import { generatePageMeta } from "@/lib/seo";
import SignupForm from "@/components/newsletter/SignupForm";

export const metadata: Metadata = generatePageMeta({
  title: "Newsletter — DigiVault",
  description:
    "Subscribe to the DigiVault newsletter for weekly AI tips, free templates, and early access to new digital products for creators and professionals.",
  path: "/newsletter",
});

const cards = [
  {
    title: "Weekly Tips",
    description:
      "Curated insights on AI tools, productivity hacks, and business strategies delivered every Tuesday.",
    icon: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth={1.5}
        strokeLinecap="round"
        strokeLinejoin="round"
        className="h-7 w-7"
      >
        <path d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
      </svg>
    ),
  },
  {
    title: "Free Resources",
    description:
      "Exclusive templates, cheat sheets, and toolkits you can download and use right away — no strings attached.",
    icon: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth={1.5}
        strokeLinecap="round"
        strokeLinejoin="round"
        className="h-7 w-7"
      >
        <path d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
      </svg>
    ),
  },
  {
    title: "Early Access",
    description:
      "Be the first to know about new product launches, get subscriber-only discounts, and shape what we build next.",
    icon: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth={1.5}
        strokeLinecap="round"
        strokeLinejoin="round"
        className="h-7 w-7"
      >
        <path d="M13 10V3L4 14h7v7l9-11h-7z" />
      </svg>
    ),
  },
];

const pastTopics = [
  "How to use ChatGPT for content repurposing in 2025",
  "5 Notion templates every solopreneur needs",
  "Building a digital product business from scratch",
  "AI image generation: tools, prompts, and workflows",
  "The creator economy playbook: monetising your skills",
  "Automating your business with Make and Zapier",
  "Email marketing strategies that actually convert",
  "Designing digital products that sell on autopilot",
];

export default function NewsletterPage() {
  return (
    <main className="min-h-screen bg-white dark:bg-gray-950">
      {/* Hero */}
      <section className="border-b border-gray-100 bg-gradient-to-b from-gray-50 to-white pb-16 pt-28 dark:border-gray-800 dark:from-gray-900 dark:to-gray-950 sm:pb-20 sm:pt-32">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-2xl text-center">
            <h1 className="text-4xl font-bold tracking-tight text-gray-900 dark:text-white sm:text-5xl">
              Stay Ahead of the Curve
            </h1>
            <p className="mt-4 text-lg leading-relaxed text-gray-600 dark:text-gray-400">
              Get weekly insights on AI tools, digital product strategies, and
              creator-economy trends — plus free templates and resources
              delivered straight to your inbox.
            </p>
          </div>

          <div className="mt-10">
            <SignupForm />
          </div>
        </div>
      </section>

      {/* What You'll Get */}
      <section className="py-16 sm:py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <h2 className="text-center text-3xl font-bold tracking-tight text-gray-900 dark:text-white sm:text-4xl">
            What You&apos;ll Get
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-center text-lg text-gray-600 dark:text-gray-400">
            Every issue is packed with actionable content to help you build,
            grow, and earn more.
          </p>

          <div className="mt-12 grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
            {cards.map((card) => (
              <div
                key={card.title}
                className="rounded-2xl border border-gray-200 bg-white p-8 transition-shadow hover:shadow-lg dark:border-gray-800 dark:bg-gray-900"
              >
                <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-indigo-100 text-indigo-600 dark:bg-indigo-900/50 dark:text-indigo-400">
                  {card.icon}
                </div>
                <h3 className="mt-5 text-lg font-semibold text-gray-900 dark:text-white">
                  {card.title}
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-gray-600 dark:text-gray-400">
                  {card.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Past Topics */}
      <section className="border-t border-gray-100 bg-gray-50 py-16 dark:border-gray-800 dark:bg-gray-900/50 sm:py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-2xl">
            <h2 className="text-center text-3xl font-bold tracking-tight text-gray-900 dark:text-white sm:text-4xl">
              Past Topics
            </h2>
            <p className="mt-4 text-center text-lg text-gray-600 dark:text-gray-400">
              A sample of what our subscribers have received recently.
            </p>

            <ul className="mt-10 space-y-4">
              {pastTopics.map((topic) => (
                <li
                  key={topic}
                  className="flex items-start gap-3 text-gray-700 dark:text-gray-300"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                    className="mt-0.5 h-5 w-5 flex-shrink-0 text-indigo-600 dark:text-indigo-400"
                  >
                    <path
                      fillRule="evenodd"
                      d="M16.704 4.153a.75.75 0 01.143 1.052l-8 10.5a.75.75 0 01-1.127.075l-4.5-4.5a.75.75 0 011.06-1.06l3.894 3.893 7.48-9.817a.75.75 0 011.05-.143z"
                      clipRule="evenodd"
                    />
                  </svg>
                  <span className="text-sm leading-relaxed">{topic}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>
    </main>
  );
}
