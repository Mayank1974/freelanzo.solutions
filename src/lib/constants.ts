export const SITE_CONFIG = {
  name: "Freelanzo Solutions",
  legalName: "Freelanzo Solutions",
  title: "Freelance Full-Stack Development Services | Freelanzo Solutions",
  description:
    "Hire expert freelance full-stack developers specializing in React, Next.js, Spring Boot, & AWS. Scalable web & SaaS solutions built for startups.",
  url: process.env.NEXT_PUBLIC_SITE_URL || "https://www.freelanzosolutions.online",
  ogImage: "/images/og-image.png",
  contact: {
    email: "FreelanzoSolutions@gmail.com",
    phone: "+91 8607112350",
    phoneRaw: "918607112350",
    whatsapp: "https://wa.me/918607112350",
    location: "Remote / Worldwide",
  },
  social: {
    github: "https://github.com/Mayank1974",
    linkedin: "https://www.linkedin.com/company/freelanzo-solutions/",
    twitter: "https://twitter.com/FreelanzoSol",
  },
  keywords: [
    "Freelance Full Stack Developer",
    "Freelanzo Solutions",
    "React Developer Freelancer",
    "Next.js Development Services",
    "Spring Boot Development",
    "AWS Cloud Infrastructure",
    "SaaS MVP Development",
    "Web Application Development",
    "Full Stack Freelancer India",
    "Hire Full Stack Engineer",
  ],
};

export interface ServiceDetail {
  slug: string;
  title: string;
  shortDesc: string;
  fullDesc: string;
  category: string;
  iconName: string;
  features: string[];
  techStack: string[];
  metaTitle: string;
  metaDescription: string;
}

export const SERVICES_DATA: ServiceDetail[] = [
  {
    slug: "full-stack-development",
    title: "Full-Stack Web & SaaS Development",
    shortDesc:
      "End-to-end full-stack web engineering using React, Next.js, Spring Boot, and cloud architecture.",
    fullDesc:
      "Transform your product vision into a high-performance, scalable web or SaaS application. We architect robust backend microservices with Spring Boot/Node.js, build sleek interactive user interfaces with React and Next.js, and deploy resilient cloud infrastructures on AWS.",
    category: "Product Strategy & Realization",
    iconName: "Globe",
    features: [
      "Custom SaaS & Web App Architecture",
      "React & Next.js Server-Side Rendering (SSR/SSG)",
      "Spring Boot RESTful & GraphQL APIs",
      "Database Modeling (PostgreSQL, MongoDB, Prisma)",
      "Secure Authentication & Payment Gateways (Stripe)",
    ],
    techStack: ["React", "Next.js", "TypeScript", "Spring Boot", "AWS", "PostgreSQL"],
    metaTitle: "Full-Stack Web & SaaS Development Services | Freelanzo Solutions",
    metaDescription:
      "Build scalable SaaS & web apps with our full-stack development services in React, Next.js, Spring Boot, and AWS. Request a free quote today!",
  },
  {
    slug: "web-development",
    title: "Modern Frontend Web Development",
    shortDesc:
      "High-speed, SEO-optimized, pixel-perfect frontend web development using React and Next.js.",
    fullDesc:
      "Deliver blazing-fast digital experiences that impress users and rank at the top of search engines. We write clean, modular, and maintainable TypeScript code with responsive Tailwind CSS layouts and fluid micro-animations.",
    category: "Core Engineering & Systems",
    iconName: "Layout",
    features: [
      "Next.js App Router & Server Components",
      "Core Web Vitals Optimization (LCP, CLS, FID/INP)",
      "Responsive & Mobile-First UI/UX Implementation",
      "Dynamic Animations with Framer Motion",
      "Accessibility (WCAG 2.1) & SEO Best Practices",
    ],
    techStack: ["Next.js", "React", "TypeScript", "Tailwind CSS", "Framer Motion"],
    metaTitle: "React & Next.js Frontend Development | Freelanzo Solutions",
    metaDescription:
      "Hire top-tier React and Next.js frontend developers for fast, responsive, and SEO-optimized web applications. Get a free technical consultation!",
  },
  {
    slug: "backend-engineering",
    title: "Backend Engineering & API Systems",
    shortDesc:
      "Enterprise-grade backend architectures, microservices, and secure REST/GraphQL APIs.",
    fullDesc:
      "Build reliable, secure, and scalable backend infrastructure capable of handling millions of requests. We build high-throughput APIs using Java Spring Boot, Node.js, and Python, integrated with relational and NoSQL databases.",
    category: "Core Engineering & Systems",
    iconName: "Cpu",
    features: [
      "Spring Boot & Node.js Microservices",
      "RESTful API & GraphQL Development",
      "Database Optimization & Caching (Redis, PostgreSQL)",
      "Third-Party API Integrations (Stripe, Twilio, SendGrid)",
      "Comprehensive Unit & Integration Testing",
    ],
    techStack: ["Spring Boot", "Java", "Node.js", "Python", "PostgreSQL", "Redis"],
    metaTitle: "Spring Boot & Backend API Development | Freelanzo Solutions",
    metaDescription:
      "Enterprise backend engineering & API development services with Spring Boot and Node.js. Build scalable, secure server architectures.",
  },
  {
    slug: "cloud-devops",
    title: "AWS Cloud Infrastructure & DevOps",
    shortDesc:
      "Automated CI/CD pipelines, AWS cloud orchestration, serverless setups, and security hardening.",
    fullDesc:
      "Deploy your application with 99.9% uptime confidence. We manage complete AWS cloud architecture setup (EC2, ECS, S3, RDS, CloudFront), automated Docker deployments, GitHub Actions CI/CD, and SSL/security hardening.",
    category: "Security & Operational Excellence",
    iconName: "Cloud",
    features: [
      "AWS Infrastructure Management & Cost Optimization",
      "Docker Containerization & Kubernetes / ECS",
      "Automated CI/CD Pipelines (GitHub Actions)",
      "SSL, DNS, & Security Hardening",
      "24/7 Monitoring & Automated Backups",
    ],
    techStack: ["AWS", "Docker", "GitHub Actions", "Vercel", "Nginx", "CloudFront"],
    metaTitle: "AWS Cloud & DevOps Services | Freelanzo Solutions",
    metaDescription:
      "Deploy and scale your app with confidence. Expert AWS cloud infrastructure, CI/CD pipeline, and DevOps services for startups and tech companies.",
  },
];

export const FAQ_DATA = [
  {
    question: "What technologies does Freelanzo Solutions specialize in?",
    answer:
      "We specialize in full-stack web and SaaS development using React, Next.js, TypeScript, Spring Boot (Java), Node.js, Python, PostgreSQL, and AWS cloud infrastructure.",
  },
  {
    question: "How fast can you deliver an MVP or production web app?",
    answer:
      "Depending on project scope, our rapid prototyping and full-stack development workflow allows us to ship fully functional MVPs in 2 to 6 weeks.",
  },
  {
    question: "What pricing models do you offer for freelance development?",
    answer:
      "We offer flexible pricing options including fixed-price project quotes, milestone-based payments, and monthly dedicated developer retainer models.",
  },
  {
    question: "How do you handle deployment, cloud setup, and post-launch maintenance?",
    answer:
      "We provide end-to-end service. We set up automated CI/CD pipelines, configure AWS or Vercel cloud environments, implement security hardening, and offer ongoing maintenance contracts.",
  },
  {
    question: "Do you sign Non-Disclosure Agreements (NDAs) before project discussions?",
    answer:
      "Yes, absolutely. We prioritize your intellectual property and privacy. We are happy to sign an NDA prior to discussing project specs or reviewing proprietary code.",
  },
];
