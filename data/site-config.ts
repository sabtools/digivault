export const siteConfig = {
  name: "DigiVault",
  tagline: "Premium Digital Products for Creators & Professionals",
  description:
    "Discover premium AI prompts, business templates, design resources, and productivity tools. Instant digital downloads to supercharge your workflow.",
  url: "https://digivault.vercel.app",
  ogImage: "/images/og-default.png",
  author: "DigiVault",
  email: "hello@digivault.com",
  socials: {
    twitter: "https://twitter.com/digivault",
    instagram: "https://instagram.com/digivault",
    youtube: "https://youtube.com/@digivault",
  },
  newsletter: {
    provider: "beehiiv" as const,
    leadMagnet: "Get 5 Free AI Prompt Templates",
    leadMagnetDescription:
      "Join 2,000+ creators and get our best-performing AI prompts delivered to your inbox — free.",
  },
  categories: [
    {
      slug: "ai-tech",
      name: "AI & Technology",
      description: "AI prompts, automation workflows, and tech tools",
      icon: "cpu",
    },
    {
      slug: "business",
      name: "Business & Finance",
      description:
        "Spreadsheets, business templates, and productivity systems",
      icon: "briefcase",
    },
    {
      slug: "creative",
      name: "Creative & Design",
      description: "Design templates, social media kits, and branding resources",
      icon: "palette",
    },
  ],
};

export type Category = (typeof siteConfig.categories)[number];
