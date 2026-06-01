export const PERSONAL = {
  name: "Muhammad Raihan Akbar",
  title: "Fullstack Engineer",
  email: "raihanpixx2007@gmail.com",
  studentEmail: "muhammad.raihanakbar@student.upj.ac.id",
  phone: "+62-859-7455-3312",
  location: "South Tangerang City, Jakarta, Indonesia",
  tagline:
    "Information Systems undergraduate at Universitas Pembangunan Jaya. I design and ship scalable web systems end-to-end, from ERD modeling to production.",
  bio: "Muhammad Raihan Akbar is an Information Systems undergraduate at Universitas Pembangunan Jaya and a Full-Stack Engineer. He designs and ships scalable web systems end-to-end, from ERD modeling to production, with experience across React, Next.js, PostgreSQL, Prisma, Supabase, MySQL, PHP OOP, Flask middleware, LLM APIs, technical SEO, structured data, and mobile-first optimization.",
  principle: "Fast in execution, precise in structure.",
};

export const NAV_LINKS = [
  { label: "About", href: "#about" },
  { label: "Expertise", href: "#expertise" },
  { label: "Experience", href: "#experience" },
  { label: "Projects", href: "#projects" },
  { label: "Focus", href: "#business" },
  { label: "Skills", href: "#skills" },
  { label: "Contact", href: "#contact" },
];

export const HERO_BADGES = [
  "Information Systems undergraduate at Universitas Pembangunan Jaya",
  "Full-stack web development with React, Next.js, Tailwind, and PHP OOP",
  "Database design with PostgreSQL, MySQL, Supabase, and Prisma ORM",
  "AI integration with Flask middleware, OpenRouter API, and REST APIs",
];

export const STATS = [
  { value: "UPJ", label: "Information Systems" },
  { value: "ERD", label: "System Design" },
  { value: "SEO", label: "Technical SEO" },
  { value: "API", label: "AI & REST APIs" },
];

export const EXPERTISE = [
  {
    title: "Full-Stack Web Development",
    description:
      "React, Tailwind, Next.js, PHP OOP, JavaScript, HTML, CSS, and production-minded web application development.",
    icon: "stack",
  },
  {
    title: "Database Design & Management",
    description:
      "PostgreSQL, MySQL, Supabase, Prisma ORM, ERD modeling, relational data structures, and database-backed application workflows.",
    icon: "grid",
  },
  {
    title: "AI Integration & API Development",
    description:
      "Flask middleware, OpenRouter API, REST API integration, Python services, and AI-integrated application flows.",
    icon: "signal",
  },
  {
    title: "Technical SEO",
    description:
      "Crawlability audits, canonical tag implementation, structured data, on-page optimization, and mobile-first optimization.",
    icon: "pulse",
  },
  {
    title: "System Architecture",
    description:
      "System architecture planning, ERD design, OOP-based backend development, and frontend engineering with real-world application context.",
    icon: "shield",
  },
  {
    title: "Digital Marketing Strategy",
    description:
      "STP segmentation, CLV analysis, technical SEO, and targeted marketing strategy aligned with business objectives.",
    icon: "diamond",
  },
];

export const EXPERIENCE = [
  {
    title: "Fullstack Engineer",
    company: "Web Application Development",
    period: "Jan 2026 - Present",
    description:
      "Developed and maintained web-based applications using React and Next.js on the frontend, with PostgreSQL via Prisma ORM, Supabase, MySQL, and PHP OOP on the backend.",
    technologies: ["React", "Next.js", "PostgreSQL", "Prisma ORM", "Supabase", "MySQL", "PHP OOP"],
  },
  {
    title: "Digital Marketing",
    company: "PT Cipta Kreasi Buana",
    period: "Nov 2025 - Jan 2026",
    description:
      "Executed technical SEO audits covering crawlability, canonical tag implementation, and on-page optimization. Applied STP segmentation and CLV analysis to develop targeted marketing strategies aligned with business objectives.",
    technologies: ["SEO", "Canonical Tags", "On-page Optimization", "STP Segmentation", "CLV Analysis"],
  },
];

export const PROJECTS = [
  {
    title: "Business Enhancement CRM Platform",
    folderLabel: "CRM Platform",
    category: "CRM Platform",
    stack: ["React.js", "PostgreSQL", "RESTful APIs", "Vercel"],
    description:
      "A centralized CRM ecosystem for customer relationship management, operational workflows, and business intelligence processes.",
    status: "Project Brief",
    accent: "#4a9eff",
    overview:
      "The Business Enhancement CRM Platform was developed to streamline customer relationship management, operational workflows, and business intelligence processes within a centralized digital ecosystem.",
    architecture:
      "The system separates frontend, backend services, and database layers for maintainability and scalability. It is structured around modular business domains so future expansion into ERP functionality, analytics modules, and workflow automation remains possible.",
    methods:
      "Designed using component-driven development and relational data modeling. Business workflows were translated into structured entities and service layers to maintain consistency across customer management, reporting, and operational modules.",
    responsibilities:
      "Translated CRM workflows into frontend modules, dashboard surfaces, relational entities, and API-ready service boundaries.",
    challenges:
      "Maintaining consistency between customer records, reporting flows, and operational modules while keeping the architecture open for ERP and automation expansion.",
    roadmap:
      "Extend the CRM foundation into ERP modules, analytics services, workflow automation, and deeper business intelligence dashboards.",
    diagram: ["React Dashboard", "RESTful APIs", "Business Services", "PostgreSQL Data Model", "Vercel Delivery"],
    concepts: [
      "Customer Relationship Management",
      "RESTful API Architecture",
      "Relational Database Design",
      "Dashboard Engineering",
      "Data Modeling",
      "Scalable Application Architecture",
      "Business Process Automation",
      "Responsive Web Applications",
    ],
    images: [
      "/projectIMG/CRM Platform/image.png",
      "/projectIMG/CRM Platform/image copy.png",
      "/projectIMG/CRM Platform/image copy 2.png",
      "/projectIMG/CRM Platform/image copy 3.png",
      "/projectIMG/CRM Platform/image copy 4.png",
      "/projectIMG/CRM Platform/image copy 5.png",
      "/projectIMG/CRM Platform/image copy 6.png",
      "/projectIMG/CRM Platform/image copy 7.png",
    ],
  },
  {
    title: "PT Cipta Kreasi Buana Corporate Platform",
    folderLabel: "Corporate Platform",
    category: "Corporate Platform",
    stack: ["React.js", "JavaScript", "Cloudflare", "Vercel"],
    description:
      "A corporate digital presence and business communication hub built to support credibility, visibility, and marketing initiatives.",
    status: "Live",
    accent: "#63f7c9",
    link: "https://www.ptciptakreasibuana.com/",
    overview:
      "The PT Cipta Kreasi Buana Corporate Platform serves as the company's digital presence and business communication hub, strengthening brand credibility and online visibility through a modern web architecture.",
    architecture:
      "The platform follows a performance-oriented frontend architecture focused on SEO, maintainability, and responsive user experiences. It is prepared for future integrations such as customer inquiries, lead generation pipelines, and business analytics services.",
    methods:
      "The implementation emphasizes clean component architecture, performance optimization, and SEO-first development practices with attention to page speed, accessibility, responsive design, and maintainable code organization.",
    responsibilities:
      "Built reusable frontend components, optimized responsive pages, supported technical SEO, and prepared the platform for lead generation and analytics integrations.",
    challenges:
      "Balancing brand credibility, page speed, SEO structure, accessibility, and maintainable frontend organization inside one corporate platform.",
    roadmap:
      "Add customer inquiry flows, lead generation pipelines, business analytics services, and deeper Cloudflare-backed performance tuning.",
    diagram: ["React Components", "SEO Pages", "Cloudflare Edge", "Vercel Deployment", "Future Lead Pipeline"],
    concepts: [
      "Component-Based Architecture",
      "SEO Engineering",
      "Performance Optimization",
      "Responsive Design Systems",
      "Edge Deployment",
      "CDN Optimization",
      "Technical SEO",
      "Modern Frontend Development",
    ],
    images: [
      "/projectIMG/companyprofilePTCIPTAKREASIBUANA/image.png",
      "/projectIMG/companyprofilePTCIPTAKREASIBUANA/image copy.png",
      "/projectIMG/companyprofilePTCIPTAKREASIBUANA/image copy 2.png",
      "/projectIMG/companyprofilePTCIPTAKREASIBUANA/image copy 3.png",
    ],
  },
  {
    title: "UPJ AI Chatbot & RAG Knowledge System",
    folderLabel: "RAG Knowledge System",
    category: "AI Knowledge System",
    stack: ["Next.js", "Python", "Flask", "OpenRouter API", "PostgreSQL", "Vector Embeddings"],
    description:
      "An AI knowledge retrieval system for university information using RAG, semantic search, and context-aware response orchestration.",
    status: "Project Brief",
    accent: "#f6c36a",
    overview:
      "The UPJ AI Chatbot & RAG Knowledge System was developed to provide intelligent access to university-related information through natural language interactions grounded in institutional knowledge.",
    architecture:
      "The system follows a Retrieval-Augmented Generation pipeline where user queries are transformed into vector embeddings, matched against indexed knowledge repositories through semantic search, enriched with context, and processed by a Large Language Model.",
    methods:
      "Implemented with document chunking, embedding generation, semantic retrieval, context injection, and response orchestration so knowledge sources can be processed into machine-readable representations for context-aware generation.",
    responsibilities:
      "Designed the RAG workflow, API orchestration layer, semantic retrieval flow, prompt context strategy, and frontend interaction surface.",
    challenges:
      "Grounding responses in institutional knowledge, retrieving relevant context, and keeping AI output useful for university-related information access.",
    roadmap:
      "Add larger indexed knowledge repositories, source management, response review workflows, analytics, and admin tools for updating institutional content.",
    diagram: ["Next.js Chat UI", "Flask API", "Embedding Pipeline", "Vector Retrieval", "OpenRouter LLM", "Grounded Response"],
    concepts: [
      "Retrieval-Augmented Generation",
      "Semantic Search",
      "Vector Embeddings",
      "Knowledge Retrieval Systems",
      "AI Agent Workflows",
      "API Orchestration",
      "Prompt Engineering",
      "Context Injection",
      "Information Retrieval Pipelines",
      "Large Language Model Integration",
    ],
    images: ["/projectIMG/chatbotAiUPJ/image.png"],
  },
];

export const PROJECT_PLACEHOLDER = {
  title: "Project visual asset pending.",
  description:
    "This project has verified written content, but no matching image was found in public/projectIMG. It will not reuse screenshots from another project.",
  tags: ["Verified project text", "Image not provided", "No mismatched screenshots"],
};

export const SKILLS = [
  "React",
  "Tailwind",
  "Next.js",
  "PHP OOP",
  "PostgreSQL",
  "Prisma ORM",
  "Supabase",
  "MySQL",
  "Flask",
  "OpenRouter API",
  "REST API",
  "Technical SEO",
  "Mobile-first Optimization",
  "Structured Data",
  "System Architecture",
  "ERD Design",
  "STP Segmentation",
  "CLV Analysis",
  "VS Code",
  "HTML",
  "CSS",
  "Python",
  "PHP",
  "JavaScript",
];

export const ENGINEERING_DECK = [
  {
    category: "Frontend",
    items: ["React", "Next.js", "Tailwind", "HTML", "CSS", "JavaScript", "Mobile-first Optimization"],
  },
  {
    category: "Backend",
    items: ["PHP OOP", "Flask", "Python", "REST API", "OpenRouter API"],
  },
  {
    category: "Database",
    items: ["PostgreSQL", "Prisma ORM", "Supabase", "MySQL", "ERD Design"],
  },
  {
    category: "AI & APIs",
    items: ["Flask Middleware", "LLM APIs", "AI-integrated Applications", "REST API Development"],
  },
  {
    category: "SEO & Strategy",
    items: ["Technical SEO", "Structured Data", "Canonical Tags", "Crawlability", "STP Segmentation", "CLV Analysis"],
  },
];

export const CERTIFICATIONS = [
  {
    name: "University of Pembangunan Jaya",
    issuer: "Information Systems Undergraduate",
    date: "Aug 2025 - Present",
    description:
      "Actively engaged in project-based learning covering system design, web development, and database management.",
  },
  {
    name: "Academic System Design Practice",
    issuer: "Universitas Pembangunan Jaya",
    date: "Current",
    description:
      "Completed academic assignments spanning ERD design, OOP-based backend development, and frontend engineering with real-world application context.",
  },
];

export const FOCUS_AREAS = [
  {
    title: "End-to-End Web Systems",
    description: "Frontend implementation, backend structure, database modeling, and production-minded application delivery.",
  },
  {
    title: "Database & ERD Design",
    description: "Relational modeling with PostgreSQL, MySQL, Supabase, Prisma ORM, and structured system planning.",
  },
  {
    title: "AI Integration",
    description: "Flask middleware, OpenRouter API, REST APIs, and LLM-powered application features.",
  },
  {
    title: "SEO & Mobile-first Execution",
    description: "Technical SEO, crawlability, canonical tags, structured data, on-page optimization, and mobile-first delivery.",
  },
];

export const SOCIAL_LINKS = [
  { platform: "LinkedIn", url: "https://www.linkedin.com/in/raihan-akbar-89925422a/" },
  { platform: "Primary Email", url: `mailto:${PERSONAL.email}` },
  { platform: "Student Email", url: `mailto:${PERSONAL.studentEmail}` },
  { platform: "Phone", url: `tel:${PERSONAL.phone.replaceAll("-", "")}` },
];
