import { Metadata } from "next";
import Hero from "@/components/home/Hero";
import FeaturedProducts from "@/components/home/FeaturedProducts";
import HowItWorks from "@/components/home/HowItWorks";
import Testimonials from "@/components/home/Testimonials";
import NewsletterCTA from "@/components/home/NewsletterCTA";
import JsonLd from "@/components/seo/JsonLd";
import {
  generateOrganizationSchema,
  generateWebsiteSchema,
  generatePageMeta,
} from "@/lib/seo";

export const metadata: Metadata = generatePageMeta({
  title: "DigiVault — Premium Digital Products for Creators & Professionals",
  description:
    "Discover premium AI prompts, business templates, design resources, and productivity tools. Instant digital downloads to supercharge your workflow.",
  path: "/",
});

export default function HomePage() {
  return (
    <>
      <JsonLd data={generateOrganizationSchema()} />
      <JsonLd data={generateWebsiteSchema()} />
      <Hero />
      <FeaturedProducts />
      <HowItWorks />
      <Testimonials />
      <NewsletterCTA />
    </>
  );
}
