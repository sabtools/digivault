export interface Testimonial {
  name: string;
  role: string;
  content: string;
  rating: number;
  product: string;
}

export const testimonials: Testimonial[] = [
  {
    name: "Sarah Chen",
    role: "Marketing Manager",
    content:
      "The AI Prompt Pack saved me hours every week. I use it daily for writing marketing copy, emails, and social posts. Best $19 I've ever spent.",
    rating: 5,
    product: "Ultimate AI Prompt Pack",
  },
  {
    name: "Marcus Johnson",
    role: "Freelance Designer",
    content:
      "The Social Media Design Kit transformed my Instagram. Went from 500 to 5,000 followers in 3 months just by being consistent with these templates.",
    rating: 5,
    product: "Social Media Design Kit",
  },
  {
    name: "Emily Rodriguez",
    role: "Solopreneur",
    content:
      "Notion Business OS replaced Trello, Airtable, and my spreadsheet mess. Everything is in one place now. My productivity doubled overnight.",
    rating: 5,
    product: "Notion Business OS",
  },
  {
    name: "David Park",
    role: "E-commerce Owner",
    content:
      "The automation blueprints helped me automate my entire order fulfillment email sequence. I save 15+ hours per week now.",
    rating: 5,
    product: "AI Automation Blueprints",
  },
  {
    name: "Lisa Thompson",
    role: "Content Creator",
    content:
      "Finally, a financial dashboard that actually makes sense. I can see exactly where my money goes each month. The charts update automatically!",
    rating: 4,
    product: "Financial Dashboard",
  },
  {
    name: "James Wilson",
    role: "Startup Founder",
    content:
      "The Brand Identity Kit gave my startup a professional look in one weekend. We got compliments from our first investors on how polished everything looked.",
    rating: 5,
    product: "Brand Identity Kit",
  },
];
