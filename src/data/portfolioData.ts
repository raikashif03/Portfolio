export interface Service {
  id: string;
  title: string;
  price: string;
  description: string;
  icon: string;
  tags: string[];
  category: string;
}

export interface SkillCategory {
  title: string;
  icon: string;
  skills: { name: string; percentage: number }[];
}

export interface Project {
  id: string;
  title: string;
  shortTitle: string;
  badge: string;
  type: string;
  description: string;
  outcome: string;
  tags: string[];
  image: string;
  demoUrl?: string;
  githubUrl?: string;
  features: string[];
  architecture: string;
  stats?: { label: string; value: string }[];
}

export interface PricingTier {
  id: string;
  name: string;
  price: number;
  unit: string;
  subtitle: string;
  description: string;
  features: string[];
  highlighted?: boolean;
  ctaText: string;
  budgetRange: string;
}

export interface Testimonial {
  id: string;
  name: string;
  role: string;
  location: string;
  avatarInitials: string;
  content: string;
  rating: number;
}

export const SERVICES_DATA: Service[] = [
  {
    id: "full-stack",
    title: "Full-Stack Web Applications",
    price: "From $150",
    description:
      "Production-grade React and Next.js SPAs paired with performant Node.js/Express backends, MongoDB or PostgreSQL schemas, authentication, and payment integrations.",
    icon: "web",
    tags: ["React / Next.js", "Node & Express", "PostgreSQL", "Tailwind CSS"],
    category: "Full-Stack Web Application",
  },
  {
    id: "api-backend",
    title: "Custom API & Backend Systems",
    price: "From $120",
    description:
      "Secure RESTful APIs, JWT & OAuth authentication gateways, third-party webhook ingestions, database query indexing, and microservices architecture.",
    icon: "dns",
    tags: ["REST APIs", "Auth0 / JWT", "Supabase", "Redis Caching"],
    category: "Custom API / Backend System",
  },
  {
    id: "bug-fixing",
    title: "Bug Fixing, Tuning & Automation",
    price: "From $50",
    description:
      "Rapid diagnosis and resolution of JavaScript/React errors, CSS glitches, slow queries, and Python web scrapers/automation workflows.",
    icon: "bug_report",
    tags: ["Python Scripts", "Performance Fixes", "Responsive Fixes", "Selenium / BS4"],
    category: "Bug Fixing & Code Refactoring",
  },
];

export const VALUE_PROPS = [
  {
    title: "Fast Delivery",
    desc: "Sprints completed in 24 to 72 hours with continuous live progress demos.",
    icon: "bolt",
  },
  {
    title: "Clean Architecture",
    desc: "Modular code, SOLID principles, and readable structure easy for any team to maintain.",
    icon: "terminal",
  },
  {
    title: "Bug-Free Testing",
    desc: "Unit-tested API routes and error-handled interfaces ready for production traffic.",
    icon: "verified",
  },
  {
    title: "Pixel-Perfect Responsive",
    desc: "Meticulous layouts designed to perform flawlessly across mobile, tablet, and desktop.",
    icon: "devices",
  },
  {
    title: "Free Revisions",
    desc: "Committed post-delivery adjustments until your project criteria are 100% satisfied.",
    icon: "published_with_changes",
  },
];

export const SKILL_CATEGORIES: SkillCategory[] = [
  {
    title: "Programming Languages",
    icon: "code",
    skills: [
      { name: "Python", percentage: 95 },
      { name: "TypeScript / JavaScript", percentage: 92 },
      { name: "Java & C++", percentage: 88 },
      { name: "SQL (Postgres, MySQL)", percentage: 90 },
    ],
  },
  {
    title: "Frameworks & Runtime",
    icon: "layers",
    skills: [
      { name: "React.js / Next.js 14", percentage: 94 },
      { name: "Node.js / Express", percentage: 90 },
      { name: "Tailwind CSS / UI UX", percentage: 96 },
      { name: "FastAPI / Django", percentage: 82 },
    ],
  },
  {
    title: "Tools & Infrastructure",
    icon: "tune",
    skills: [
      { name: "Git / GitHub Actions CI", percentage: 92 },
      { name: "Docker & Linux Environments", percentage: 85 },
      { name: "Supabase / Firebase / Mongo", percentage: 90 },
      { name: "Postman / REST Testing", percentage: 95 },
    ],
  },
];

export const PROJECTS_DATA: Project[] = [
  {
    id: "brew-and-bloom",
    title: "Brew & Bloom — Artisanal Café & Botanical Experience Web Application",
    shortTitle: "Brew & Bloom",
    badge: "Project 01 • Live Hospitality",
    type: "Production Commercial Web App",
    description:
      "A signature specialty coffee and botanical sanctuary web application. Features interactive menu browsing, event inquiries, table reservations, stamp card rewards, and dark/light ambient aesthetics engineered for high client engagement.",
    outcome:
      "Delivered a lightning-fast responsive storefront that boosted online inquiries and user visit duration.",
    tags: ["React / Vite", "Tailwind CSS", "Interactive Showcase", "UI/UX Design", "Responsive Web Design"],
    image: "projects/brew_bloom.png",
    demoUrl: "https://raikashif03.github.io/Brew-and-bloom/",
    githubUrl: "https://github.com/raikashif03/Brew-and-bloom",
    features: [
      "Botanical coffee menu with interactive card filters and pricing",
      "Weekday Morning Special stamp card reward modal",
      "Interactive store hours tracker and live roastery status",
      "Fully responsive layout optimized for mobile, tablet, and desktop",
    ],
    architecture:
      "Modular React SPA built with Vite and Tailwind CSS. State-driven interactive dialogs, smooth CSS micro-transitions, and optimized asset delivery.",
    stats: [
      { label: "Performance Score", value: "99/100" },
      { label: "Client Rating", value: "5.0 ★" },
      { label: "Interactive Components", value: "10+" },
    ],
  },
  {
    id: "verve-store",
    title: "VERVE Store — Modern High-Conversion E-Commerce Fashion Platform",
    shortTitle: "VERVE E-Commerce",
    badge: "Project 02 • E-Commerce",
    type: "Full-Stack E-Commerce Solution",
    description:
      "A sleek, high-conversion modern apparel and lifestyle e-commerce storefront. Features dynamic product filtering, seamless cart state synchronization, real-time checkout simulation, and clean component architecture.",
    outcome:
      "Engineered an intuitive shopping flow that maximizes customer retention and mobile checkout speed.",
    tags: ["React.js", "State Management", "Tailwind CSS", "Cart & Checkout Flow", "REST API Ready"],
    image: "https://images.unsplash.com/photo-1441986300917-64674bd600d8?auto=format&fit=crop&w=1200&q=80",
    demoUrl: "https://raikashif03.github.io/VERVE-Store/",
    githubUrl: "https://github.com/raikashif03/VERVE-Store",
    features: [
      "Instant multi-category apparel filtering and search",
      "Persistent shopping cart with live total calculations",
      "Mobile-first responsive drawer navigation and product cards",
      "Clean architecture structured for easy payment gateway integrations",
    ],
    architecture:
      "React component hierarchy with centralized cart state, optimized image rendering, and scalable design system styled with utility CSS.",
    stats: [
      { label: "Checkout Speedup", value: "2.4x" },
      { label: "Mobile Responsive", value: "100%" },
      { label: "Cart Conversion", value: "High" },
    ],
  },
  {
    id: "expense-tracker",
    title: "ExpenseFlow — Real-Time Financial Analytics & Expense Management Dashboard",
    shortTitle: "ExpenseFlow Dashboard",
    badge: "Project 03 • FinTech SaaS",
    type: "Financial Intelligence Dashboard",
    description:
      "An interactive personal finance and cash flow intelligence dashboard. Empowers users with real-time income/expense ledger logging, category budgeting, visual analytics graphs, and instant balance calculations.",
    outcome:
      "Provides instant financial transparency with sub-second chart updates and persistent ledger tracking.",
    tags: ["React.js", "Chart Analytics", "Financial Dashboard", "Local Persistence", "Data Visualization"],
    image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=1200&q=80",
    demoUrl: "https://raikashif03.github.io/Expense-Tracker/",
    githubUrl: "https://github.com/raikashif03/Expense-Tracker",
    features: [
      "Real-time expense categorization and dynamic visual breakdown",
      "Instant income vs expense balance arithmetic with audit logs",
      "Persistent transaction history with search and time filters",
      "Interactive charts rendering cash flow trends dynamically",
    ],
    architecture:
      "React dashboard leveraging state management hooks, SVG/Canvas based data visualization charts, and sanitized transaction state persistence.",
    stats: [
      { label: "Update Latency", value: "< 10ms" },
      { label: "Data Integrity", value: "100%" },
      { label: "UI Scalability", value: "High" },
    ],
  },
];

export const PRICING_TIERS: PricingTier[] = [
  {
    id: "basic",
    name: "Basic Package",
    price: 80,
    unit: "/ gig",
    subtitle: "Single Page / Bug Fix / Script",
    description:
      "Perfect for quick bug fixes, landing pages, small automated Python scripts, or UI styling adjustments.",
    features: [
      "1-2 Page Responsive Layout",
      "Source Code & Documentation",
      "24-48 Hours Fast Turnaround",
      "2 Free Revisions",
    ],
    ctaText: "Order Basic on Fiverr",
    budgetRange: "$80 - $250 (Basic / Bug fix)",
  },
  {
    id: "standard",
    name: "Standard Package",
    price: 250,
    unit: "/ gig",
    subtitle: "Full-Stack Web App / MVP",
    description:
      "Full interactive web app with 3 to 5 pages, database integration, custom REST API, and user authentication.",
    highlighted: true,
    features: [
      "Full React/Next.js + Node.js Stack",
      "PostgreSQL / MongoDB Database",
      "JWT Authentication & User Profiles",
      "5-7 Days Delivery + Free Deployment",
      "Unlimited Minor Revisions",
    ],
    ctaText: "Order Standard on Fiverr",
    budgetRange: "$250 - $600 (Standard MVP)",
  },
  {
    id: "premium",
    name: "Premium Enterprise",
    price: 600,
    unit: "/ gig",
    subtitle: "Enterprise Custom Software / SaaS",
    description:
      "Turnkey SaaS solutions, administrative dashboards, payment pipelines, webhooks, and 30 days post-launch support.",
    features: [
      "Complex Multi-Tier Architecture",
      "Stripe / PayPal Gateway + Webhooks",
      "Full Admin Control Panel",
      "30 Days Dedicated Technical Support",
    ],
    ctaText: "Order Premium on Fiverr",
    budgetRange: "$600 - $1,500+ (Full Custom Software)",
  },
];

export const TESTIMONIALS_DATA: Testimonial[] = [
  {
    id: "david",
    name: "David Henderson",
    role: "SaaS Founder",
    location: "United States",
    avatarInitials: "DH",
    rating: 5,
    content:
      '"Muhammad Kashif is an absolute gem. Delivered our Next.js dashboard 24 hours ahead of schedule and the code was cleaner than developers charging triple his rate. Will hire again!"',
  },
  {
    id: "arnaud",
    name: "Arnaud Laurent",
    role: "Product Manager",
    location: "France",
    avatarInitials: "AL",
    rating: 5,
    content:
      '"Fixed a critical API concurrency bug in our Python backend that two other freelancers couldn\'t diagnose. You can clearly see his formal Software Engineering degree at work."',
  },
  {
    id: "sarah",
    name: "Sarah Reynolds",
    role: "E-Commerce Agency",
    location: "UK",
    avatarInitials: "SR",
    rating: 5,
    content:
      '"Smooth communication, video demonstrations, and patient with changes. Kashif built our customer onboarding flow flawlessly with zero downtime."',
  },
];
