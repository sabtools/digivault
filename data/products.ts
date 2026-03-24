export interface Product {
  slug: string;
  title: string;
  description: string;
  longDescription: string;
  price: number;
  originalPrice?: number;
  category: "ai-tech" | "business" | "creative";
  tags: string[];
  features: string[];
  whatsIncluded: string[];
  image: string;
  gumroadUrl: string;
  featured: boolean;
  rating: number;
  reviews: number;
  faq: { question: string; answer: string }[];
}

export const products: Product[] = [
  {
    slug: "ultimate-ai-prompt-pack",
    title: "Ultimate AI Prompt Pack — 500+ Prompts",
    description:
      "500+ battle-tested AI prompts for ChatGPT, Claude & Midjourney. Covers marketing, coding, writing, business, and creative work.",
    longDescription:
      "Stop wasting hours crafting the perfect prompt. This collection of 500+ expertly engineered prompts covers every use case — from marketing copy and blog writing to code debugging and business strategy. Each prompt is tested, refined, and organized by category for instant use. Works with ChatGPT, Claude, Gemini, and more.",
    price: 19,
    originalPrice: 39,
    category: "ai-tech",
    tags: ["AI", "ChatGPT", "Prompts", "Productivity"],
    features: [
      "500+ ready-to-use prompts",
      "Organized by 12 categories",
      "Works with ChatGPT, Claude, Gemini",
      "Lifetime free updates",
      "Copy-paste format",
    ],
    whatsIncluded: [
      "PDF guide with all 500+ prompts",
      "Notion template with searchable database",
      "Google Sheet version",
      "Quick-start tutorial",
    ],
    image: "/images/products/ai-prompt-pack.svg",
    gumroadUrl: "https://gumroad.com/l/ai-prompts",
    featured: true,
    rating: 4.9,
    reviews: 347,
    faq: [
      {
        question: "Which AI tools do these prompts work with?",
        answer:
          "All prompts work with ChatGPT (GPT-4), Claude, Gemini, and any major AI chatbot. They are model-agnostic.",
      },
      {
        question: "Do I get free updates?",
        answer:
          "Yes! You get lifetime free updates. We add 50+ new prompts every quarter.",
      },
      {
        question: "Is this a one-time purchase?",
        answer:
          "Yes, pay once and access forever. No subscriptions, no hidden fees.",
      },
    ],
  },
  {
    slug: "notion-business-os",
    title: "Notion Business OS — All-in-One Workspace",
    description:
      "Complete Notion system for running your entire business. CRM, project management, finance tracker, and team wiki in one template.",
    longDescription:
      "Replace 5+ SaaS tools with one powerful Notion workspace. This all-in-one Business OS includes a CRM with pipeline tracking, project management with Kanban boards, financial dashboard, content calendar, team wiki, and automated workflows. Designed for solopreneurs, freelancers, and small teams.",
    price: 29,
    originalPrice: 59,
    category: "business",
    tags: ["Notion", "Business", "Productivity", "CRM"],
    features: [
      "CRM with deal pipeline",
      "Project management with Kanban",
      "Financial tracker & invoicing",
      "Content calendar",
      "Team wiki & SOPs",
    ],
    whatsIncluded: [
      "Notion template (one-click duplicate)",
      "Video setup walkthrough",
      "Customization guide",
      "30-day email support",
    ],
    image: "/images/products/notion-business.svg",
    gumroadUrl: "https://gumroad.com/l/notion-business",
    featured: true,
    rating: 4.8,
    reviews: 213,
    faq: [
      {
        question: "Do I need Notion Pro?",
        answer:
          "No! This works perfectly on Notion's free plan. No paid plan required.",
      },
      {
        question: "Can I customize it?",
        answer:
          "Absolutely. Everything is fully customizable — add, remove, or modify any section to match your workflow.",
      },
      {
        question: "How do I get the template?",
        answer:
          "After purchase, you'll get a link to duplicate the template directly into your Notion workspace. Takes 30 seconds.",
      },
    ],
  },
  {
    slug: "social-media-design-kit",
    title: "Social Media Design Kit — 200+ Templates",
    description:
      "200+ stunning Canva templates for Instagram, TikTok, LinkedIn & Twitter. Fully editable, on-brand designs in minutes.",
    longDescription:
      "Elevate your social media presence with 200+ professionally designed templates. Covers Instagram posts, stories, reels covers, TikTok thumbnails, LinkedIn carousels, and Twitter headers. All templates are fully editable in Canva (free version works). Just drag, drop, customize, and post.",
    price: 24,
    originalPrice: 49,
    category: "creative",
    tags: ["Design", "Social Media", "Canva", "Templates"],
    features: [
      "200+ editable Canva templates",
      "Instagram, TikTok, LinkedIn, Twitter",
      "Consistent brand aesthetic",
      "Works with free Canva",
      "New templates added monthly",
    ],
    whatsIncluded: [
      "200+ Canva template links",
      "Brand color customization guide",
      "Content calendar template",
      "Best posting times cheat sheet",
    ],
    image: "/images/products/social-media-kit.svg",
    gumroadUrl: "https://gumroad.com/l/social-media-kit",
    featured: true,
    rating: 4.7,
    reviews: 189,
    faq: [
      {
        question: "Do I need Canva Pro?",
        answer:
          "No! All templates work with the free version of Canva. Some premium elements can be swapped for free alternatives.",
      },
      {
        question: "Can I use these for client work?",
        answer:
          "Yes! You get a commercial license. Use them for your own brand or client projects.",
      },
    ],
  },
  {
    slug: "ai-automation-blueprints",
    title: "AI Automation Blueprints — 50 Workflows",
    description:
      "50 copy-paste automation workflows for Make.com & Zapier. Automate email, social media, lead gen, and data processing.",
    longDescription:
      "Save 20+ hours per week with 50 battle-tested automation workflows. Each blueprint includes step-by-step setup instructions, screenshots, and ready-to-import JSON files for Make.com and Zapier. Covers email automation, social media scheduling, lead generation, CRM updates, and data processing.",
    price: 34,
    originalPrice: 69,
    category: "ai-tech",
    tags: ["Automation", "Make.com", "Zapier", "No-Code"],
    features: [
      "50 ready-to-import workflows",
      "Make.com & Zapier compatible",
      "Step-by-step video guides",
      "JSON import files included",
      "Quarterly new workflows",
    ],
    whatsIncluded: [
      "50 automation blueprint PDFs",
      "JSON import files for each workflow",
      "Video tutorials",
      "Private community access",
    ],
    image: "/images/products/automation-blueprints.svg",
    gumroadUrl: "https://gumroad.com/l/automation-blueprints",
    featured: true,
    rating: 4.9,
    reviews: 156,
    faq: [
      {
        question: "Do I need coding skills?",
        answer:
          "Not at all. Every workflow is no-code and uses drag-and-drop platforms like Make.com and Zapier.",
      },
      {
        question: "Are the tools free?",
        answer:
          "Make.com and Zapier both have free tiers that support most of these workflows. Some advanced ones may need a paid plan.",
      },
    ],
  },
  {
    slug: "financial-dashboard-spreadsheet",
    title: "Financial Dashboard — Google Sheets Template",
    description:
      "Track income, expenses, investments & net worth with automated charts and dashboards. Works in Google Sheets.",
    longDescription:
      "Take control of your finances with this comprehensive Google Sheets dashboard. Automatically tracks income, expenses, savings rate, investment portfolio, and net worth over time. Features beautiful auto-updating charts, monthly/yearly summaries, budget vs actual comparison, and tax-ready categories.",
    price: 14,
    originalPrice: 29,
    category: "business",
    tags: ["Finance", "Google Sheets", "Budget", "Dashboard"],
    features: [
      "Automated income & expense tracking",
      "Investment portfolio tracker",
      "Net worth calculator",
      "Monthly & yearly dashboards",
      "Tax-ready categories",
    ],
    whatsIncluded: [
      "Google Sheets template",
      "Setup video tutorial",
      "Category customization guide",
      "Sample data for reference",
    ],
    image: "/images/products/financial-dashboard.svg",
    gumroadUrl: "https://gumroad.com/l/financial-dashboard",
    featured: false,
    rating: 4.8,
    reviews: 278,
    faq: [
      {
        question: "Does it work in Excel?",
        answer:
          "It's optimized for Google Sheets (free), but can be downloaded as .xlsx for Excel with minor formula adjustments.",
      },
    ],
  },
  {
    slug: "brand-identity-kit",
    title: "Brand Identity Kit — Complete Branding Package",
    description:
      "Everything you need to build a professional brand. Logo templates, color palettes, typography guides, and brand guidelines.",
    longDescription:
      "Build a cohesive, professional brand identity from scratch. This kit includes 50+ customizable logo templates, curated color palette combinations, typography pairing guides, brand guideline templates, and social media brand assets. Perfect for startups, freelancers, and personal brands.",
    price: 19,
    originalPrice: 39,
    category: "creative",
    tags: ["Branding", "Logo", "Design", "Identity"],
    features: [
      "50+ logo templates (Canva & Figma)",
      "30 curated color palettes",
      "Typography pairing guide",
      "Brand guidelines template",
      "Social media brand kit",
    ],
    whatsIncluded: [
      "Logo templates (Canva + Figma)",
      "Color palette swatches",
      "Typography guide PDF",
      "Brand guidelines template",
      "Icon & pattern pack",
    ],
    image: "/images/products/brand-identity.svg",
    gumroadUrl: "https://gumroad.com/l/brand-identity",
    featured: true,
    rating: 4.6,
    reviews: 134,
    faq: [
      {
        question: "Can I use these commercially?",
        answer:
          "Yes! Full commercial license included. Use for your brand, clients, or products.",
      },
    ],
  },
  {
    slug: "chatgpt-business-bundle",
    title: "ChatGPT Business Bundle — 100 Custom GPTs",
    description:
      "100 pre-built custom GPT configurations for business tasks. Marketing, sales, HR, customer support & more.",
    longDescription:
      "Supercharge your business with 100 custom GPT configurations. Each GPT is pre-configured with expert system prompts for specific business tasks — from writing marketing emails and sales scripts to generating HR policies and customer support responses. Just copy the system prompt into ChatGPT and start using immediately.",
    price: 24,
    originalPrice: 49,
    category: "ai-tech",
    tags: ["ChatGPT", "Business", "AI", "Custom GPTs"],
    features: [
      "100 pre-built GPT configurations",
      "Covers 10 business departments",
      "Copy-paste system prompts",
      "Performance-optimized prompts",
      "Regular updates with new GPTs",
    ],
    whatsIncluded: [
      "100 GPT system prompts (PDF + Notion)",
      "Department-wise organization guide",
      "Best practices handbook",
      "Video tutorial on custom GPTs",
    ],
    image: "/images/products/chatgpt-bundle.svg",
    gumroadUrl: "https://gumroad.com/l/chatgpt-bundle",
    featured: false,
    rating: 4.8,
    reviews: 201,
    faq: [
      {
        question: "Do I need ChatGPT Plus?",
        answer:
          "The system prompts work with both free and Plus versions. Custom GPTs feature requires Plus, but you can paste prompts directly into free ChatGPT.",
      },
    ],
  },
  {
    slug: "freelancer-client-system",
    title: "Freelancer Client System — Notion Template",
    description:
      "Manage clients, projects, invoices & proposals in one Notion workspace. Built for freelancers and consultants.",
    longDescription:
      "The ultimate client management system for freelancers. Track leads, send proposals, manage active projects, log time, generate invoices, and store client communications — all from one Notion dashboard. Includes automated formulas for revenue tracking and project profitability analysis.",
    price: 19,
    originalPrice: 39,
    category: "business",
    tags: ["Freelance", "Notion", "Client Management", "Invoicing"],
    features: [
      "Client CRM with lead tracking",
      "Proposal & contract templates",
      "Time tracking dashboard",
      "Invoice generator",
      "Revenue & profitability analytics",
    ],
    whatsIncluded: [
      "Notion template",
      "5 proposal templates",
      "3 contract templates",
      "Setup video guide",
    ],
    image: "/images/products/freelancer-system.svg",
    gumroadUrl: "https://gumroad.com/l/freelancer-system",
    featured: false,
    rating: 4.7,
    reviews: 167,
    faq: [
      {
        question: "Is this suitable for agencies?",
        answer:
          "It's designed for solo freelancers and small teams (1-5 people). For larger agencies, you may need additional customization.",
      },
    ],
  },
];

export function getProductBySlug(slug: string): Product | undefined {
  return products.find((p) => p.slug === slug);
}

export function getFeaturedProducts(): Product[] {
  return products.filter((p) => p.featured);
}

export function getProductsByCategory(category: string): Product[] {
  return products.filter((p) => p.category === category);
}

export function getRelatedProducts(
  currentSlug: string,
  limit = 3
): Product[] {
  const current = getProductBySlug(currentSlug);
  if (!current) return [];
  return products
    .filter((p) => p.slug !== currentSlug && p.category === current.category)
    .slice(0, limit);
}
