// Single source of truth for all portfolio content.
// Real, NDA-safe content mapped onto the VietHQ handoff design.

export const profile = {
  name: "Ha Quoc Viet",
  brandPre: "Viet",
  brandPost: "HQ",
  mark: "V",
  kicker: "★ Full-Stack Engineer · Ha Noi, VN",
  roles: ["Full-Stack Developer", "Tech Lead", "API Architect"],
  location: "Ha Noi, Vietnam",
  email: "viethq00@gmail.com",
  phone: "+84 83 536 6950",
  cvHref: "/assets/CV_HaQuocViet_SeniorFullstack.pdf",
  avatar: "/assets/avatarfacebook.jpg",
  yearsBadge: "6+",
  availability: "Available for work",
};

export const socials = [
  { label: "GitHub", href: "https://github.com/viethq00" },
  { label: "LinkedIn", href: "https://www.linkedin.com/in/viethq00/" },
  { label: "Email", href: "mailto:viethq00@gmail.com" },
];

// Hero stats ticker — conservative, defensible numbers (no fabricated metrics).
export const heroTicker = [
  { count: 6, suffix: "+", label: "// years experience" },
  { count: 9, suffix: "+", label: "// projects shipped" },
  { count: 6, suffix: "", label: "// industries served" },
  { count: 2, suffix: "", label: "// languages EN / VI" },
];

export const services = [
  {
    num: "/01",
    title: "Front-End Engineering",
    desc: "Accessible, responsive interfaces in React & Next.js with crisp interactions and rock-solid performance budgets.",
    chips: ["React", "Next.js", "TypeScript"],
  },
  {
    num: "/02",
    title: "Back-End & APIs",
    desc: "Scalable services with Node & NestJS. Clean REST contracts, queues (Kafka), caching (Redis) and solid data modeling.",
    chips: ["Node", "NestJS", "PostgreSQL"],
  },
  {
    num: "/03",
    title: "DevOps & Cloud",
    desc: "Dockerized deployments, CI/CD pipelines and AWS infra (Lambda, EventBridge, ECS) so releases stay repeatable and observable.",
    chips: ["Docker", "AWS", "CI/CD"],
  },
  {
    num: "/04",
    title: "Tech Leadership",
    desc: "Leading cross-functional squads, setting standards, reviewing code and turning fuzzy requirements into shippable roadmaps.",
    chips: ["Architecture", "Mentoring", "Reviews"],
  },
];

// Metrics band — honest figures.
export const metrics = [
  { count: 6, suffix: "+", label: "Years of experience", icon: "clock" },
  { count: 9, suffix: "+", label: "Projects shipped", icon: "box" },
  { count: 6, suffix: "+", label: "Clients & teams", icon: "heart" },
  { count: 2, suffix: "", label: "Languages · EN / VI", icon: "globe" },
];

export const aboutFacts = [
  { k: "Name", v: "Ha Quoc Viet" },
  { k: "Role", v: "Full-Stack / Tech Lead", acc: true },
  { k: "Based in", v: "Ha Noi, Vietnam" },
  { k: "Experience", v: "6+ years" },
  { k: "Focus", v: "Web · APIs · Cloud" },
  { k: "Status", v: "Open to work", acc: true },
];

export const education = {
  year: "2018 — 2023",
  degree: "B.Sc. Computer & Information Science",
  school: "Advanced Program · VNU University of Science, Ha Noi",
};

export const experience = [
  {
    current: true,
    role: "Full-Stack Developer & Tech Lead",
    company: "CMC Global",
    date: "2025 — Present",
    meta: "Leading a 12-person cross-functional squad",
    desc: "Own architecture and delivery for an Australian clean-energy fintech — vendor webhook management and open-banking income-detection with retry mechanisms. Drive standards, review code and mentor engineers.",
    tags: ["Next.js", "NestJS", "AWS", "Leadership"],
  },
  {
    role: "Senior Software Engineer",
    company: "FPT Software",
    date: "2024 — Present",
    meta: "Retail computer-vision platform",
    desc: "Primary engineer across an 8-service TypeScript monorepo turning in-store camera & IoT feeds into shopper analytics — backend APIs, ops & reporting apps, and an image-ingest pipeline.",
    tags: ["TypeScript", "Express 5", "React 19", "MongoDB"],
  },
  {
    role: "Full-Stack Developer",
    company: "MXV Exchange",
    date: "2023 — 2025",
    meta: "High-volume commodities trading platform",
    desc: "Designed microservices for high-volume transactions with real-time data processing. Built order management end-to-end with Kafka and Redis.",
    tags: ["NestJS", "Next.js", "Kafka", "Redis"],
  },
  {
    role: "Freelance Developer",
    company: "Freelance",
    date: "2023 — 2025",
    meta: "Admin systems & loyalty mini-app",
    desc: "Built an admin management system for an FMCG brand and a loyalty mini-app for a pharma brand — UI components, AWS integrations and backend performance work.",
    tags: ["NestJS", "React.js", "AWS", "PostgreSQL"],
  },
  {
    role: "Back-End Developer",
    company: "Amai Content",
    date: "2021 — 2023",
    meta: "Social media management platform",
    desc: "Built payment integrations (major Vietnamese banks), Messenger API messaging and Google Business integrations on a high-throughput service layer.",
    tags: ["Express.js", "MySQL", "MongoDB"],
  },
  {
    role: "Back-End Developer",
    company: "JUSEI Master",
    date: "2021",
    meta: "EdTech exam-prep platform",
    desc: "Developed data-analysis features and optimized scalable MongoDB schemas for large datasets on a national-exam prep application.",
    tags: ["TypeScript", "NestJS", "MongoDB"],
  },
];

// Tech-stack tiles — `key` maps to a react-icon in components/sections/TechStack.jsx
export const techStack = [
  { key: "typescript", name: "TypeScript" },
  { key: "javascript", name: "JavaScript" },
  { key: "react", name: "React" },
  { key: "reactnative", name: "React Native" },
  { key: "nextjs", name: "Next.js" },
  { key: "nodejs", name: "Node.js" },
  { key: "nestjs", name: "NestJS" },
  { key: "express", name: "Express" },
  { key: "postgresql", name: "PostgreSQL" },
  { key: "mongodb", name: "MongoDB" },
  { key: "redis", name: "Redis" },
  { key: "mysql", name: "MySQL" },
  { key: "docker", name: "Docker" },
  { key: "aws", name: "AWS" },
  { key: "tailwind", name: "Tailwind" },
  { key: "git", name: "Git" },
];

export const techTags = [
  "Claude", "Claude Code", "Apache Kafka", "DynamoDB", "AWS Lambda",
  "AWS EventBridge", "Terraform", "Nginx", "Puppeteer", "Selenium",
  "GitLab", "Jira", "Agile / Scrum",
];

// Featured project (flagship). Stats are structural facts, not invented metrics.
export const featured = {
  role: "Tech Lead · Full-Stack",
  name: "Open-Banking Income Engine",
  tagline: "★ FEATURED PROJECT",
  desc: "Detecting income from raw bank-transaction data for an Australian clean-energy fintech, via Australia's Consumer Data Right. A multi-phase algorithm — category filtering, weighted-similarity clustering, single-assignment to prevent double-counting, frequency detection and confidence scoring — turns noisy transactions into normalized, auditable monthly income. Led a 12-person squad on a Next.js + NestJS + AWS stack.",
  terminal: [
    [["c", "$ "], ["g", "income-engine"], ["", " analyze --cdr"]],
    [["c", "› "], ["", "cluster "], ["y", "transactions"], ["", " … "], ["g", "ok"]],
    [["c", "› "], ["", "detect "], ["y", "weekly|fortnightly|monthly"], ["", " … "], ["g", "ok"]],
    [["c", "› "], ["", "confidence scoring … "], ["g", "ok"]],
    [["g", "✓ "], ["", "normalized monthly income · auditable"]],
  ],
  stats: [
    { v: "6-phase", l: "algorithm" },
    { v: "CDR", l: "open banking" },
    { v: "AWS", l: "event-driven" },
  ],
  tags: ["Next.js", "NestJS", "AWS", "PostgreSQL"],
};
// TODO(viet): add verified metrics (e.g. ~90% regular-income accuracy, ~80% less manual review) once confirmed — see portfolio-improvements.md Appendix A.

export const projects = [
  {
    n: "02",
    cat: "fullstack",
    role: "Senior Engineer · Full-Stack",
    name: "Retail Computer-Vision Platform",
    company: "— Retail Analytics",
    desc: "Retail computer-vision platform turning in-store camera & IoT feeds into shopper analytics — primary engineer across an 8-service TypeScript monorepo with a real-time image-ingest pipeline.",
    tags: ["TypeScript", "React 19", "Express 5", "MongoDB"],
    badges: [{ t: "team", cls: "team" }],
    live: "",
    code: "",
  },
  {
    n: "03",
    cat: "fullstack",
    role: "Full-Stack Developer",
    name: "Commodities Trading App",
    company: "— Trading Platform",
    desc: "Real-time commodities trading app built end-to-end, handling high-frequency data with Kafka and Redis from order management to mobile.",
    tags: ["Next.js", "React Native", "Kafka", "Redis"],
    badges: [{ t: "● live", cls: "live" }, { t: "team", cls: "team" }],
    live: "",
    code: "",
  },
  {
    n: "04",
    cat: "fullstack",
    role: "Full-Stack Developer",
    name: "Commodities Exchange",
    company: "— Trading",
    desc: "Microservices architecture for high-volume energy & agricultural commodities trading, with real-time data processing and a React Native app.",
    tags: ["NestJS", "Next.js", "Kafka", "PostgreSQL"],
    badges: [{ t: "● live", cls: "live" }, { t: "team", cls: "team" }],
    live: "",
    code: "",
  },
  {
    n: "05",
    cat: "freelance",
    role: "Freelance",
    name: "FMCG Admin Platform",
    company: "— E-commerce",
    desc: "Admin management system for an FMCG brand — UI components, AWS integrations and backend performance work, from data model to deployment.",
    tags: ["NestJS", "React.js", "AWS", "PostgreSQL"],
    badges: [{ t: "solo", cls: "solo" }],
    live: "",
    code: "",
  },
  {
    n: "06",
    cat: "freelance",
    role: "Freelance",
    name: "Pharma Loyalty Mini-App",
    company: "— Pharma",
    desc: "Loyalty mini-app for a pharma brand — refactored backend logic, fixed critical bugs and improved system performance for a smoother UX.",
    tags: ["NestJS", "React.js", "Redis"],
    badges: [{ t: "solo", cls: "solo" }],
    live: "",
    code: "",
  },
  {
    n: "07",
    cat: "fullstack",
    role: "Full-Stack Developer",
    name: "Eco E-commerce Store",
    company: "— E-commerce",
    desc: "Full e-commerce backend and storefront for an eco-friendly bamboo brand, built on MongoDB and Next.js.",
    tags: ["Next.js", "Express.js", "MongoDB", "Nginx"],
    badges: [{ t: "solo", cls: "solo" }],
    live: "",
    code: "",
  },
  {
    n: "08",
    cat: "backend",
    role: "Back-End Developer",
    name: "Social Media Platform",
    company: "— Social",
    desc: "Social media management platform with bank payment integrations (major Vietnamese banks) and real-time Messenger messaging.",
    tags: ["Express.js", "MySQL", "MongoDB"],
    badges: [{ t: "● live", cls: "live" }, { t: "team", cls: "team" }],
    live: "",
    code: "",
  },
  {
    n: "09",
    cat: "backend",
    role: "Back-End Developer",
    name: "Exam-Prep Platform",
    company: "— EdTech",
    desc: "Data-analysis features and scalable MongoDB schemas for a national-exam prep platform handling large datasets.",
    tags: ["TypeScript", "NestJS", "MongoDB"],
    badges: [{ t: "team", cls: "team" }],
    live: "",
    code: "",
  },
];

export const workFilters = [
  { f: "all", label: "All" },
  { f: "fullstack", label: "Full-Stack" },
  { f: "backend", label: "Back-End" },
  { f: "freelance", label: "Freelance" },
];

// Testimonials intentionally empty — real quotes to be supplied (no fabricated endorsements).
export const testimonials = [];

export const projectTypes = [
  "Full-stack build",
  "Front-end",
  "Back-end / API",
  "Consulting / Lead",
  "Full-time role",
];

export const contactInfo = [
  { icon: "phone", k: "Phone", v: "+84 83 536 6950", href: "tel:+84835366950" },
  { icon: "email", k: "Email", v: "viethq00@gmail.com", href: "mailto:viethq00@gmail.com" },
  { icon: "location", k: "Location", v: "Ha Noi, Vietnam", href: "" },
];

export const navLinks = [
  { n: "01", id: "services", label: "Services" },
  { n: "02", id: "about", label: "About" },
  { n: "03", id: "experience", label: "Experience" },
  { n: "04", id: "work", label: "Work" },
  { n: "05", id: "stack", label: "Stack" },
  { n: "06", id: "contact", label: "Contact" },
];
