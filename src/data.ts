export interface Project {
  id: string;
  title: string;
  tagline: string;
  category: 'Mobile App' | 'Web App' | 'Windows App';
  description: string;
  extendedDescription: string;
  stack: string[];
  image: string;
  imageSize?: number;
  demoUrl?: string;
  features: string[];
  metrics?: string;
  comingSoon?: boolean;
}

export interface Certificate {
  id: string;
  title: string;
  issuer: string;
  year: string;
  category: string;
  icon: string;
  verified: boolean;
  description: string;
  url: string;
}

export interface Skill {
  name: string;
  category: 'Flutter' | 'React & Web' | 'Backend' | 'Architecture & Tools' | 'Professional';
  level: number; // 1-100
  highlight?: boolean;
}

export interface ExperienceItem {
  role: string;
  company: string;
  period: string;
  location: string;
  description: string[];
  tags?: string[];
}

export interface EducationItem {
  degree: string;
  institution: string;
  period: string;
  details: string;
}

// Flip to true to show everything related to barmajha.com again
// (nav/hero/contact links, the Barmajha project, its demo links and experience mentions).
export const SHOW_BARMAJHA = false;

export const PERSONAL_INFO = {
  name: "Omar Farouk",
  title: "Lead Software Developer",
  subtitle: "Full-Stack Developer",
  phone: "+201122195310",
  email: "o.m200233@gmail.com",
  github: "https://github.com/omarmfarouk",
  githubUsername: "@omarmfarouk",
  linkedin: "https://linkedin.com/in/omarmfarouk",
  linkedinUsername: "@omarmfarouk",
  location: "Cairo, Egypt",
  portfolio: "barmajha.com",
  portfolioUrl: "https://barmajha.com",
  avatar: "/assets/images/avatar.jpg",
  logo: "/assets/images/logo.png",
  favicon: "/assets/images/favicon.ico",
  cv: "/assets/pdfs/cv.pdf",
  summary: "Lead Software Developer at Venneir, building and maintaining the internal tools that run a large business in the dental field, using an AI-assisted workflow with Claude, Supabase, Vercel and GitHub. Before that, three years of freelance work shipping more than 10 commercial web, mobile and desktop products, from SaaS platforms and business systems to e-commerce stores, with Flutter, PHP and MySQL.",
};

export const HIGHLIGHTS = [
  {
    title: "10+ Commercial Applications",
    description: "Designed, built, and deployed across web, mobile, and desktop platforms using Flutter, PHP, and MySQL.",
    icon: "Layers",
    color: "from-cyan-500 to-blue-600"
  },
  {
    title: "SaaS Architect (Ovnix)",
    description: "Architected a full-stack affiliate SaaS with real-time conversion tracking, automated reporting, and role-based user management.",
    icon: "ServerCrash",
    color: "from-blue-600 to-indigo-600"
  },
  {
    title: "E-Commerce Expert",
    description: "Delivered a complete online retail solution for Sillia Vape, one of Egypt's leading vape retailers.",
    icon: "ShoppingBag",
    color: "from-emerald-500 to-teal-600"
  },
  {
    title: "Business Systems Developer",
    description: "Built 2 full business management platforms (gym, inventory) from requirements gathering directly to production deployment.",
    icon: "Briefcase",
    color: "from-purple-500 to-indigo-600"
  }
];

export const SKILLS: Skill[] = [
  // Flutter & Mobile
  { name: "Flutter Development", category: "Flutter", level: 95, highlight: true },
  { name: "Dart", category: "Flutter", level: 92, highlight: true },
  { name: "BLoC Architecture", category: "Flutter", level: 90, highlight: true },
  { name: "Responsive Mobile UI", category: "Flutter", level: 90 },
  { name: "Desktop App (Windows)", category: "Flutter", level: 88 },
  
  // PHP & Backend
  { name: "PHP Development", category: "Backend", level: 92, highlight: true },
  { name: "MySQL Database Management", category: "Backend", level: 90, highlight: true },
  { name: "REST API Integration", category: "Backend", level: 94, highlight: true },
  { name: "Database Schema Design", category: "Backend", level: 88 },
  { name: "Backend Infrastructure", category: "Backend", level: 85 },
  
  { name: "Laravel", category: "Backend", level: 88, highlight: true },
  { name: "Laravel Middleware, Auth & Eloquent ORM", category: "Backend", level: 85 },
  { name: "Serverless Backends (Supabase Edge Functions, Vercel Functions)", category: "Backend", level: 85, highlight: true },

  // React & Web
  { name: "React", category: "React & Web", level: 88, highlight: true },
  { name: "TypeScript", category: "React & Web", level: 85 },
  { name: "Vite", category: "React & Web", level: 85 },
  { name: "Tailwind CSS", category: "React & Web", level: 88 },

  // Architecture & Tools
  { name: "Clean Code", category: "Architecture & Tools", level: 90, highlight: true },
  { name: "Debugging & Troubleshooting", category: "Architecture & Tools", level: 92 },
  { name: "Requirement Analysis", category: "Architecture & Tools", level: 88 },
  { name: "Computer Networking (CCNA)", category: "Architecture & Tools", level: 85 },
  { name: "Python", category: "Architecture & Tools", level: 80 },
  { name: "AI-Assisted Development (Claude)", category: "Architecture & Tools", level: 92, highlight: true },
  { name: "Supabase", category: "Architecture & Tools", level: 88, highlight: true },
  { name: "Vercel Deployments", category: "Architecture & Tools", level: 88 },
  { name: "Git & GitHub", category: "Architecture & Tools", level: 90 },
  
  // Professional
  { name: "Problem Solving", category: "Professional", level: 95 },
  { name: "Strong Communication", category: "Professional", level: 90 },
  { name: "Adaptability", category: "Professional", level: 92 },
  { name: "Teamwork & Collaboration", category: "Professional", level: 90 },
];

export const EXPERIENCE: ExperienceItem[] = [
  {
    role: "Lead Software Developer",
    company: "Venneir",
    period: "2026 - Present",
    location: "Remote",
    description: [
      "Lead software development for a large business in the dental field, owning its internal tooling end to end.",
      "Build new internal tools and maintain and extend existing ones to streamline day-to-day operations.",
      "Run an AI-assisted development workflow with Claude, shipping on Supabase (database, auth, storage) and Vercel.",
      "Manage source control, code review, and deployments through GitHub."
    ],
    tags: ["Internal Tools", "Supabase", "Vercel", "AI-Assisted Dev"]
  },
  {
    role: "Freelance Software Developer",
    company: SHOW_BARMAJHA ? "Self-Employed / Barmajha Hub" : "Self-Employed",
    period: "2023 - 2026",
    location: "Cairo, Egypt",
    description: [
      "Engineered 10+ commercial applications across mobile (Android/iOS), web, and Windows desktop.",
      "Architected and deployed Ovnix.io, an enterprise-level affiliate marketing SaaS managing thousands of conversion transactions.",
      ...(SHOW_BARMAJHA ? ["Founded Barmajha.com, delivering bespoke software solutions, client management, and API architectures."] : []),
      "Collaborated with business owners to gather requirements, design database schemas, and deliver polished end-to-end products."
    ],
    tags: ["Flutter", "PHP & Laravel", "MySQL", "Full-Stack"]
  }
];

export const EDUCATION: EducationItem[] = [
  {
    degree: "Bachelor of Engineering in Communications and Electronics",
    institution: "New Cairo Academy",
    period: "2021 - 2026",
    details: "Focusing on embedded systems, network communications, signal processing, and advanced software engineering principles."
  }
];

export const CERTIFICATES: Certificate[] = [
  {
    id: "flutter-diploma",
    title: "Flutter Diploma",
    issuer: "MEC Academy",
    year: "2023",
    category: "Mobile Development",
    icon: "Smartphone",
    verified: true,
    url: '/assets/certs/mec_flutter_deploma.pdf',
    description: "Comprehensive training in cross-platform mobile app development with Flutter & Dart, state management (BLoC), and API communication."
  },
  {
    id: "mobile-networks",
    title: "Mobile Networks Diploma",
    issuer: "Engovation",
    year: "2024",
    category: "Telecommunications",
    icon: "Radio",
    verified: true, url: '/assets/certs/ees_mobile_networks.pdf',
    description: "In-depth study of cellular network architectures, wireless transmission protocols, and modern telecommunication systems."
  },
  {
    id: "ccna-course",
    title: "CCNA Course",
    issuer: "ICG Innovation",
    year: "2023",
    category: "Networking",
    icon: "Network",
    verified: true, url: '/assets/certs/icg_ccna.pdf',
    description: "Mastered routing and switching fundamentals, network security protocols, IP addressing, and enterprise LAN/WAN configurations."
  },
  {
    id: "python-diploma",
    title: "Python 2 Levels Diploma",
    issuer: "Professionals",
    year: "2025",
    category: "Programming",
    icon: "Code",
    verified: true, url: '/assets/certs/python.pdf',
    description: "Advanced Python programming covering object-oriented design, data manipulation, scripting, and backend automation workflows."
  }
];

const ALL_PROJECTS: Project[] = [
{
  id: "orthokeep",
  title: "OrthoKeep",
  tagline: "Practice Record & Imaging Suite for Orthodontists",
  category: "Web App",
  description: "SaaS platform giving orthodontists who work across multiple clinics one personal record for every patient, treatment plan, aligner stage and payment.",
  extendedDescription: "OrthoKeep is built around a simple idea: patients follow the doctor, not the clinic. The doctor owns the account, sets which clinic they're at each day, and picks up any patient mid-treatment from any chair. It ships with four in-browser analysis workspaces — cephalometric tracing, facial analysis, a 3D intraoral scan viewer and CBCT — all reading from the same patient library, with no plug-ins or third-party uploads.",
  stack: ["SaaS", "Web App", "3D STL Viewer", "Medical Imaging", "Bilingual EN / AR"],
  image: "/assets/projects/orthokeep.webp",
  demoUrl: "https://orthokeep.com",
  metrics: "18 cephalometric analyses from a single 40-landmark tracing",
  features: [
    "Multi-clinic weekly schedule with per-location appointment lists",
    "Patient records with treatment plans, aligner stage tracking and payments",
    "Ceph analyser: 40 landmarks, 18 analyses (Steiner, Downs, Tweed, Ricketts, McNamara…) with film calibration",
    "Facial analysis on profile & frontal photos (facial thirds, nasolabial angle, symmetry)",
    "In-browser 3D intraoral scan viewer (binary/ASCII STL) with on-mesh measurement",
    "90-day free trial and single all-inclusive pricing"
  ]
},
{
  id: "madania",
  title: "Madania",
  tagline: "Payment Solutions Website (Saudi Arabia)",
  category: "Web App",
  description: "Arabic-first marketing site for a Saudi payment-solutions provider, helping stores, platforms, apps and booking services choose and integrate the right payment methods.",
  extendedDescription: "Madania helps Saudi businesses accept payments through mada, Visa, Mastercard, Apple Pay, Tabby and Tamara. The site walks merchants from their needs to a live integration, and includes an interactive checkout simulator that lets visitors preview the customer payment experience before signing up.",
  stack: ["Responsive Web", "RTL Arabic UI", "Interactive Checkout Demo", "SEO Optimized"],
  image: "/assets/projects/madania.webp",
  demoUrl: "https://madania.sa/",
  metrics: "Interactive checkout preview covering 6 local payment methods",
  features: [
    "Interactive store checkout simulator (mada, Apple Pay, Tabby, Tamara…)",
    "Solution pages tailored to e-stores, platforms, apps and bookings",
    "Four-step onboarding journey from discovery to live payments",
    "WhatsApp contact integration for instant sales conversations",
    "Fully RTL, mobile-first Arabic design"
  ]
},
{
  id: "nbarmej",
  title: "Nbarmej",
  tagline: "Software Agency Website & Quote Builder",
  category: "Web App",
  description: "Conversion-focused website for a Saudi software agency offering websites, e-stores, mobile apps and custom ERP systems.",
  extendedDescription: "Nbarmej's site is designed to turn visitors into leads: it explains services clearly, showcases case studies, lists transparent starting prices, and includes a quote builder that packages the visitor's needs, budget and timeline into a ready-to-send WhatsApp request — no sign-up forms.",
  stack: ["Responsive Web", "RTL Arabic UI", "WhatsApp Integration", "SEO", "Dark Mode"],
  image: "/assets/projects/nbarmej.webp",
  demoUrl: "https://nbarmej.com/",
  metrics: "120+ projects delivered on time by the agency",
  features: [
    "Service catalog: websites, e-stores (Salla, Zid), mobile apps, ERP/CRM, branding, SEO",
    "Portfolio previews with 'build me something similar' calls to action",
    "Transparent starting-price tiers",
    "Quote builder that sends a structured request straight to WhatsApp",
    "Light / dark theme toggle"
  ]
},
{
  id: "tabalah",
  title: "Tabalah Academy",
  tagline: "Sports Academy Member App",
  category: "Mobile App",
  description: "Bilingual mobile app for Tabalah Sports Club letting players browse sports and packages, subscribe, track attendance and check in with a personal QR code.",
  extendedDescription: "Built for Tabalah Sports Academy in Saudi Arabia, the app covers the full member journey: browse sports (football, padel, swimming…) and their packages, subscribe or join free trials, follow subscription progress, see today's sessions and coaches, and check in at training with a personal QR code. ",
  stack: ["Flutter", "Dart", "REST API", "QR Check-in", "Arabic / English", "Light & Dark Themes"],
  image: "/assets/projects/tabalah.webp",
  comingSoon: true,
  features: [
    "Sports & packages catalog with pricing, duration, capacity and coach",
    "Subscriptions with progress rings and status (active, pending payment, ended)",
    "Personal QR code for coach-scanned attendance",
    "Home dashboard: attendance rate, active packages, today's sessions",
    "Player profile with body metrics, emergency contact and member ID",
    "Transactions history and AR/EN language switch"
  ]
},
{
  id: "dawatoday",
  title: "Dawa Today",
  tagline: "Egyptian Drugs Reference & AI-Powered Prescription Scanner",
  category: "Mobile App",
  description: "Comprehensive Egyptian drugs directory platform with intelligent medicine search, alternative drug discovery, price tracking, and prescription scanning.",
  extendedDescription: "Dawa Today is a commercial-grade pharmaceutical information solution deployed for patients and healthcare users. Designed from ground-up requirements to production, it enables seamless medicine lookups via a high-performance semantic search, manages active ingredient filtering, tracks official pricing updates, and generates comprehensive digital medical leaflets.",
  stack: ["Flutter", "Dart", "BLoC", "SQFLite", "REST API", "AI-Powered OCR Scanning"],
  image: "/assets/projects/dawa.webp",
  demoUrl: "https://dawatoday.barmajha.com",
  metrics: "Full pharmaceutical guidance from active ingredient to price matching",
  features: [
    "Instant medicine lookup by brand name, commercial title, or chemical component",
    "Smart Alternative Finder matching drugs with identical active ingredients and concentrations",
    "Up-to-date pricing database with automated market fluctuation tracking",
    "Comprehensive digital leaflets covering precise indications, dosages, and contraindications",
    "AI-Powered OCR Scanning for instant prescription lookup and analysis",
    "Offline database capability with offline sync for instant drug availability"
  ]
},
{
  id: "cayobrand",
  title: "Cayo Brand",
  tagline: "E-Commerce Wear Store",
  category: "Web App",
  description: "Designed and developed the full online Store for an emerging fashion and streetwear brand in Egypt, featuring seamless catalog browsing, shopping cart workflows, and interactive customer engagement.",
  extendedDescription: "Cayo Brand required a high-performance, visually striking e-commerce experience tailored to Egypt's fast-growing fashion market. The custom web application delivers ultra-fast product filtering by size/color, dynamic collection layouts, frictionless checkout steps, and an integrated admin panel for instant stock and order tracking.",
  stack: ["PHP", "MySQL", "JavaScript", "Responsive HTML5", "Tailwind CSS", "SEO Optimized"],
  image: "/assets/projects/cayo.webp",
  demoUrl: "https://cayobrand.shop",
  metrics: "Powering thousands of localized Wear transactions and retail shoppers",
  features: [
    "Dynamic product catalog with multi-variant configuration (sizes, colorways, stock limits)",
    "Frictionless, mobile-first one-page checkout optimized for high conversion rates",
    "Real-time order status tracking with automated SMS order confirmations",
    "Custom coupon code system and dynamic bundle/seasonal promotional discounts",
    "Secure administrative backend for rapid inventory management, pricing, and sales metrics",
    "Highly optimized asset delivery for lightning-fast image loading and SEO indexing"
  ]
},
  {
    
    id: "ovnix",
    title: "Ovnix.io",
    tagline: "Affiliate Marketing SaaS",
    category: "Web App",
    description: "Full-stack publisher monetization platform with real-time conversion tracking, finance analytics, automated newsletter mailer, and role-based user management.",
    extendedDescription: "Ovnix is an enterprise-ready affiliate marketing platform engineered to handle real-time conversion postbacks and publisher payouts. Features a robust PHP & MySQL backend with lightning-fast query execution, paired with an elegant Flutter admin dashboard for live oversight. Built specifically to handle high concurrency with automated reporting pipelines.",
    stack: ["PHP", "MySQL", "Flutter Dashboard", "REST API", "Tailwind CSS", "Chart.js", "Cron Automation"],
    image: "/assets/projects/ovnix.webp",
    imageSize: 80,
    demoUrl: "https://ovnix.io",
    metrics: "Handles thousands of real-time conversion postbacks",
    features: [
      "Real-time conversion tracking & postback engine",
      "Comprehensive finance analytics & revenue charts",
      "Automated newsletter mailer & publisher broadcast system",
      "Granular role-based user permissions (Admin, Manager, Publisher)",
      "Secure REST API endpoints for external merchant integrations",
      "Flutter-built mobile companion admin app"
    ]
  },
  {
    id: "trifit",
    title: "Tri-Fit",
    tagline: "Gym & Sports Club Management",
    category: "Mobile App",
    description: "Comprehensive sports club management platform with member subscriptions, QR attendance tracking, trainer scheduling, sales, and financial reporting.",
    extendedDescription: "Tri-Fit is a commercial-grade gym management solution deployed for active fitness centers. Designed from ground-up requirements to production, it enables seamless member check-ins via instant QR scanning, manages trainer calendars, tracks membership renewals, and generates granular financial statements.",
    stack: ["Flutter", "Dart", "BLoC", "PHP Backend", "MySQL", "QR Scanner", "PDF Reports"],
    image: "/assets/projects/trifit.webp",
    demoUrl: "https://play.google.com/store/apps/details?id=com.barmajha.trifit",
    metrics: "Full business automation from check-in to balance sheets",
    features: [
      "Instant Member QR Code check-in and attendance logging",
      "Active subscription tracking with automated expiry alerts",
      "Personal trainer booking and customized shift scheduling",
      "Point of sale for supplements and gym merchandise",
      "Full exportable financial reporting (Daily, Monthly, Annual)",
      "Multi-branch capability with centralized cloud sync"
    ]
  },
  {
    id: "cashiery",
    title: "Cashiery",
    tagline: "Store & Inventory Management System",
    category: "Mobile App",
    description: "Complete management system for small businesses, handling customers, suppliers, inventory, sales, financial reporting, and staff management.",
    extendedDescription: "Cashiery empowers small-to-medium retail stores with an intuitive point-of-sale and back-office inventory suite. Designed with offline-first capabilities and robust cloud synchronization, it ensures uninterrupted business operations even during network outages.",
    stack: ["Flutter", "SQLite", "PHP API", "MySQL", "Barcode Scanning", "Thermal Printer Integration"],
    image:"/assets/projects/cashiery.webp",
    demoUrl: "https://cashiery.barmajha.com",
    metrics: "Optimized for fast checkout and stock auditing",
    features: [
      "Fast barcode and SKU scanning for rapid checkout",
      "Real-time inventory stock level alerts and supplier reorders",
      "Comprehensive customer debt tracking and payment history",
      "Bluetooth thermal printer support for instant receipt generation",
      "Staff shift management and cashier access controls",
      "Detailed profit and loss accounting analytics"
    ]
  },
  {
    id: "silliavape",
    title: "Sillia Vape",
    tagline: "E-Commerce Store",
    category: "Web App",
    description: "Designed and developed the full online store for a leading vape retailer in Egypt, including product listings, user interface, shopping cart workflow, and customer engagement.",
    extendedDescription: "Sillia Vape required a high-performance e-commerce experience tailored to the Egyptian market. The custom web application provides lightning-fast product filtering, age verification, smooth checkout steps, and an admin panel to manage orders and stock instantly.",
    stack: ["PHP", "MySQL", "JavaScript", "Responsive HTML5", "SEO Optimized"],
  image: "/assets/projects/sillia.webp",
    demoUrl: "https://silliavape.com",
    metrics: "Serving thousands of Egyptian online retail shoppers",
    features: [
      "Dynamic product catalog with multi-variant options (flavors, nicotine levels)",
      "Frictionless one-page checkout optimized for mobile conversions",
      "Order status tracking with automated SMS/Email notifications",
      "Custom discount code engine and bundle promotional deals",
      "Secure administrative backend for stock and price updates",
      "Optimized page load speeds and SEO indexing"
    ]
  },
  {
    id: "volty",
    title: "Volty",
    tagline: "Smart Home Energy Management System",
    category: "Mobile App",
    description: "AI-powered management platform designed for Egyptian homes to monitor real-time electricity consumption, control devices remotely, and provide analytics.",
    extendedDescription: "Volty tackles the challenge of energy efficiency in modern Egyptian households. By connecting with smart IoT meters, it displays real-time kilowatt usage, predicts electricity tariff tiers, and offers AI-driven recommendations to minimize monthly bills.",
    stack: ["Flutter", "Dart", "BLoC", "IoT Protocol", "Real-time WebSockets", "Custom Charts"],
    image: "/assets/projects/volty.webp",
    demoUrl: "https://play.google.com/store/apps/details?id=com.barmajha.volty.app",
    metrics: "Real-time IoT telemetry & predictive cost analytics",
    features: [
      "Live power consumption telemetry displayed in interactive charts",
      "Remote appliance toggle switch (On/Off) via secure IoT relay",
      "Tariff calculation engine customized for Egyptian electricity slabs",
      "AI cost-saving tips based on historical household usage patterns",
      "Abnormal power spike alerts to prevent electrical hazards",
      "Multi-room grouping and schedule automation"
    ]
  },
  {
    id: "barmajha",
    title: "Barmajha.com",
    tagline: "Software Solutions & Development Hub",
    category: "Web App",
    description: "Founded and developed a professional platform offering SaaS solutions, custom web and mobile apps, and business management systems.",
    extendedDescription: "Barmajha.com serves as both a commercial agency portal and a software product showcase. It highlights bespoke solutions, offers client onboarding portals, and acts as the central hub for deployed business management systems.",
    stack: ["HTML", "CSS","JavaScript", "Modern UI/UX"],
   image: "/assets/projects/barmajha.webp",
    demoUrl: "https://barmajha.com",
    metrics: "Central hub for custom SaaS and client management",
    features: [
      "Interactive showcase of deployed commercial products",
      "Client inquiry and project estimation calculator",
      "Secure client portal for checking project development milestones",
      "Integrated blog and technical articles repository",
      "High-converting landing pages with responsive design"
    ]
  },
  {
    id: "copycat",
    title: "CopyCat+",
    tagline: "Smart Clipboard Manager",
    category: "Windows App",
    description: "Created a Windows desktop application that automatically tracks and stores copied text with source tracking, search, stats, and duplicate detection.",
    extendedDescription: "CopyCat+ is a native desktop productivity tool built using Flutter Desktop for Windows. It runs quietly in the system tray, capturing clipboard history instantly. With advanced searching algorithms, users can retrieve snippets copied days or weeks prior in milliseconds.",
    stack: ["Flutter Desktop", "Windows API", "SQLite", "System Tray", "Hotkeys Integration"],
    image: "/assets/projects/copycat.webp",
    demoUrl: "https://barmajha.com/projects/copycat/",
    metrics: "Lightning fast clipboard retrieval & duplicate filtering",
    features: [
      "Automatic background clipboard listening and storage",
      "Source tracking (logs which application text was copied from)",
      "Instant full-text search across thousands of saved items",
      "Duplicate detection to prevent database clutter",
      "Global customizable keyboard shortcuts for quick snippet pasting",
      "Detailed productivity analytics (most copied words, daily counts)"
    ]
  }
];

const isBarmajhaUrl = (url?: string) => !!url && /^https?:\/\/([a-z0-9-]+\.)*barmajha\.com/i.test(url);

export const PROJECTS: Project[] = SHOW_BARMAJHA
  ? ALL_PROJECTS
  : ALL_PROJECTS
      .filter(p => p.id !== 'barmajha')
      .map(p => (isBarmajhaUrl(p.demoUrl) ? { ...p, demoUrl: undefined } : p));
