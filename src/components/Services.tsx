"use client";

import React from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import { 
  Globe, 
  Cpu, 
  ShieldCheck,
  Zap,
  Layers,
  Activity,
  Palette,
  Smartphone,
  Cloud,
  Settings,
  Shield,
  Layout,
  ArrowRight
} from "lucide-react";

interface Service {
  slug?: string;
  title: string;
  description: string;
  icon: any;
  color: string;
  bg: string;
  category: string;
}

const services: Service[] = [
  // Product Strategy & Realization
  {
    slug: "full-stack-development",
    title: "Full-Stack Web & SaaS Realization",
    description: "End-to-end full-stack web engineering using React, Next.js, Spring Boot, and scalable cloud architectures.",
    icon: Globe,
    color: "text-blue-500",
    bg: "bg-blue-500/10",
    category: "Product Strategy & Realization"
  },
  {
    title: "UI/UX Design & Prototyping",
    description: "User-centric interface designs that convert, combining sleek modern aesthetics with intuitive UX.",
    icon: Palette,
    color: "text-pink-500",
    bg: "bg-pink-500/10",
    category: "Product Strategy & Realization"
  },
  {
    title: "Rapid MVP Development",
    description: "Transform complex business concepts into launch-ready MVPs in 2-4 weeks to validate market fit.",
    icon: Zap,
    color: "text-orange-500",
    bg: "bg-orange-500/10",
    category: "Product Strategy & Realization"
  },
  {
    title: "Mobile App Development",
    description: "Cross-platform mobile apps for iOS and Android with React Native and performant backend APIs.",
    icon: Smartphone,
    color: "text-emerald-500",
    bg: "bg-emerald-500/10",
    category: "Product Strategy & Realization"
  },

  // Core Engineering & Systems
  {
    slug: "web-development",
    title: "React & Next.js Development",
    description: "High-performance, SEO-optimized web applications built with modern Server Components and TypeScript.",
    icon: Layout,
    color: "text-blue-400",
    bg: "bg-blue-400/10",
    category: "Core Engineering & Systems"
  },
  {
    slug: "backend-engineering",
    title: "Spring Boot & Backend APIs",
    description: "Scalable backend microservices, REST/GraphQL APIs, and database engineering using Java Spring Boot.",
    icon: Cpu,
    color: "text-cyan-500",
    bg: "bg-cyan-500/10",
    category: "Core Engineering & Systems"
  },
  {
    title: "Scalable Architecture",
    description: "Distributed system design, relational & NoSQL database optimization for high-traffic platforms.",
    icon: Layers,
    color: "text-purple-500",
    bg: "bg-purple-500/10",
    category: "Core Engineering & Systems"
  },
  {
    title: "Enterprise Consulting",
    description: "Strategic code audits, system refactoring, and architectural advice to scale tech stacks.",
    icon: Settings,
    color: "text-amber-500",
    bg: "bg-amber-500/10",
    category: "Core Engineering & Systems"
  },

  // Security & Operational Excellence
  {
    slug: "cloud-devops",
    title: "AWS Cloud & DevOps Engineering",
    description: "Automated CI/CD pipelines, Docker containerization, AWS cloud setup (EC2, S3, RDS), and SSL security.",
    icon: Cloud,
    color: "text-sky-500",
    bg: "bg-sky-500/10",
    category: "Security & Operational Excellence"
  },
  {
    title: "Operational Excellence",
    description: "Comprehensive security hardening and cloud-native strategy for 99.9% production reliability.",
    icon: ShieldCheck,
    color: "text-green-500",
    bg: "bg-green-500/10",
    category: "Security & Operational Excellence"
  },
  {
    title: "Core Web Vitals & Speed Audits",
    description: "In-depth performance tuning to optimize LCP, CLS, FID/INP, and achieve 95+ Lighthouse scores.",
    icon: Activity,
    color: "text-rose-500",
    bg: "bg-rose-500/10",
    category: "Security & Operational Excellence"
  },
  {
    title: "Cybersecurity & Hardening",
    description: "Vulnerability assessments, encrypted data layers, and OWASP security compliance for web apps.",
    icon: Shield,
    color: "text-indigo-500",
    bg: "bg-indigo-500/10",
    category: "Security & Operational Excellence"
  },
];

const categories = Array.from(new Set(services.map(s => s.category)));

export default function Services() {
  return (
    <section id="services" className="py-24 relative overflow-hidden bg-background">
      <div className="container mx-auto px-6">
        <div className="max-w-3xl mb-16">
          <motion.span
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="text-accent font-bold tracking-widest uppercase text-sm"
          >
            Capabilities & Services
          </motion.span>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-3xl md:text-5xl font-bold mt-4 mb-6"
          >
            Full-Stack Software Engineering Services
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="text-foreground/60 text-lg"
          >
            Freelanzo Solutions combines strategic product engineering with deep technical expertise in React, Next.js, Spring Boot, and AWS to build secure, scalable digital products.
          </motion.p>
        </div>

        <div className="space-y-20">
          {categories.map((category) => (
            <div key={category}>
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="flex items-center gap-4 mb-10"
              >
                <div className="h-px flex-grow bg-foreground/10" />
                <h3 className="text-lg md:text-xl font-bold uppercase tracking-[0.2em] text-accent/80">
                  {category}
                </h3>
                <div className="h-px flex-grow bg-foreground/10" />
              </motion.div>

              <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
                {services
                  .filter(s => s.category === category)
                  .map((service, index) => {
                    const CardContent = (
                      <>
                        <div className={`p-4 rounded-2xl w-fit mb-6 ${service.bg} transition-colors group-hover:bg-accent/20`}>
                          <service.icon className={`w-6 h-6 ${service.color} group-hover:text-accent transition-colors`} />
                        </div>
                        <h4 className="text-xl font-bold mb-3 group-hover:text-accent transition-colors">{service.title}</h4>
                        <p className="text-foreground/60 text-sm leading-relaxed mb-4">
                          {service.description}
                        </p>
                        {service.slug && (
                          <div className="mt-auto pt-4 flex items-center gap-1.5 text-xs font-bold uppercase tracking-wider text-accent group-hover:translate-x-1 transition-transform">
                            Learn More <ArrowRight className="w-3.5 h-3.5" />
                          </div>
                        )}
                      </>
                    );

                    return (
                      <motion.div
                        key={service.title}
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: index * 0.05 }}
                        whileHover={{ y: -5 }}
                        className="glass p-8 rounded-3xl group flex flex-col justify-between transition-all duration-300 hover:border-accent/40"
                      >
                        {service.slug ? (
                          <Link href={`/services/${service.slug}`} className="flex flex-col h-full justify-between">
                            {CardContent}
                          </Link>
                        ) : (
                          <div>{CardContent}</div>
                        )}
                      </motion.div>
                    );
                  })}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
