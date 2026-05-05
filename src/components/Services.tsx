"use client";

import React from "react";
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
  Layout
} from "lucide-react";

interface Service {
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
    title: "Product Realization",
    description: "End-to-end development focused on rapid market entry and exceptional user experience.",
    icon: Globe,
    color: "text-blue-500",
    bg: "bg-blue-500/10",
    category: "Product Strategy & Realization"
  },
  {
    title: "UI/UX Design",
    description: "User-centric interface designs that are both beautiful and intuitive, focusing on optimal UX.",
    icon: Palette,
    color: "text-pink-500",
    bg: "bg-pink-500/10",
    category: "Product Strategy & Realization"
  },
  {
    title: "Rapid Prototyping",
    description: "Turning complex concepts into functional MVPs in weeks to validate ideas with real users.",
    icon: Zap,
    color: "text-orange-500",
    bg: "bg-orange-500/10",
    category: "Product Strategy & Realization"
  },
  {
    title: "App Development",
    description: "Cross-platform mobile applications providing a native feel on both iOS and Android.",
    icon: Smartphone,
    color: "text-emerald-500",
    bg: "bg-emerald-500/10",
    category: "Product Strategy & Realization"
  },

  // Core Engineering & Systems
  {
    title: "Robust Foundations",
    description: "High-performance architectures and scalable database systems built for mission-critical loads.",
    icon: Layers,
    color: "text-purple-500",
    bg: "bg-purple-500/10",
    category: "Core Engineering & Systems"
  },
  {
    title: "Backend Engineering",
    description: "Robust, scalable server-side systems and APIs using Node.js, Spring Boot, and Python.",
    icon: Cpu,
    color: "text-cyan-500",
    bg: "bg-cyan-500/10",
    category: "Core Engineering & Systems"
  },
  {
    title: "Web Development",
    description: "Responsive web applications built with modern frameworks like Next.js and React.",
    icon: Layout,
    color: "text-blue-400",
    bg: "bg-blue-400/10",
    category: "Core Engineering & Systems"
  },
  {
    title: "Enterprise Architecture",
    description: "Strategic consulting to design systems that are maintainable, extensible, and future-proof.",
    icon: Settings,
    color: "text-amber-500",
    bg: "bg-amber-500/10",
    category: "Core Engineering & Systems"
  },

  // Security & Operational Excellence
  {
    title: "Operational Excellence",
    description: "Comprehensive security hardening and cloud-native strategy for 99.9% production reliability.",
    icon: ShieldCheck,
    color: "text-green-500",
    bg: "bg-green-500/10",
    category: "Security & Operational Excellence"
  },
  {
    title: "Deployment & DevOps",
    description: "CI/CD pipelines, cloud orchestration (AWS/Vercel), and performance tuning for production.",
    icon: Cloud,
    color: "text-sky-500",
    bg: "bg-sky-500/10",
    category: "Security & Operational Excellence"
  },
  {
    title: "Performance Audits",
    description: "Analysis to identify bottlenecks, optimize load times, and improve overall security posture.",
    icon: Activity,
    color: "text-rose-500",
    bg: "bg-rose-500/10",
    category: "Security & Operational Excellence"
  },
  {
    title: "Cybersecurity & Hardening",
    description: "Advanced protection layers and security audits to safeguard your business and user data.",
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
            Capabilities
          </motion.span>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-4xl md:text-5xl font-bold mt-4 mb-6"
          >
            Strategic Engineering <br />
            Meet Technical Precision
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="text-foreground/60 text-lg"
          >
            We combine strategic product engineering with deep technical expertise 
            to build secure, scalable, and high-performance digital solutions.
          </motion.p>
        </div>

        <div className="space-y-20">
          {categories.map((category, catIndex) => (
            <div key={category}>
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="flex items-center gap-4 mb-10"
              >
                <div className="h-px flex-grow bg-foreground/10" />
                <h3 className="text-xl font-bold uppercase tracking-[0.2em] text-accent/80">
                  {category}
                </h3>
                <div className="h-px flex-grow bg-foreground/10" />
              </motion.div>

              <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
                {services
                  .filter(s => s.category === category)
                  .map((service, index) => (
                    <motion.div
                      key={service.title}
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true }}
                      transition={{ delay: index * 0.1 }}
                      whileHover={{ y: -5 }}
                      className="glass p-8 rounded-3xl group cursor-default transition-all duration-300 hover:border-accent/40"
                    >
                      <div className={`p-4 rounded-2xl w-fit mb-6 ${service.bg} transition-colors group-hover:bg-accent/20`}>
                        <service.icon className={`w-6 h-6 ${service.color} group-hover:text-accent transition-colors`} />
                      </div>
                      <h4 className="text-xl font-bold mb-3">{service.title}</h4>
                      <p className="text-foreground/60 text-sm leading-relaxed">
                        {service.description}
                      </p>
                    </motion.div>
                  ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
