"use client";

import React from "react";
import { motion } from "framer-motion";
import { 
  Globe, 
  Cpu, 
  Palette, 
  Settings, 
  Cloud, 
  Smartphone 
} from "lucide-react";

const services = [
  {
    title: "Web Development",
    description: "Responsive, high-performance web applications built with modern frameworks like Next.js and React.",
    icon: Globe,
    color: "text-blue-500",
    bg: "bg-blue-500/10",
  },
  {
    title: "Backend Engineering",
    description: "Robust, scalable server-side systems and APIs using Node.js, Python, and modern database solutions.",
    icon: Cpu,
    color: "text-purple-500",
    bg: "bg-purple-500/10",
  },
  {
    title: "UI/UX Design",
    description: "User-centric interface designs that are both beautiful and intuitive, focusing on optimal user experience.",
    icon: Palette,
    color: "text-pink-500",
    bg: "bg-pink-500/10",
  },
  {
    title: "Deployment & DevOps",
    description: "CI/CD pipelines, cloud orchestration (AWS/Vercel), and performance tuning for production environments.",
    icon: Cloud,
    color: "text-cyan-500",
    bg: "bg-cyan-500/10",
  },
  {
    title: "App Development",
    description: "Cross-platform mobile applications that provide a native feel on both iOS and Android devices.",
    icon: Smartphone,
    color: "text-emerald-500",
    bg: "bg-emerald-500/10",
  },
  {
    title: "Technical Consulting",
    description: "Expert advice on architecture, tech stack selection, and strategic planning for your digital product.",
    icon: Settings,
    color: "text-orange-500",
    bg: "bg-orange-500/10",
  },
];

export default function Services() {
  return (
    <section id="services" className="py-24 relative overflow-hidden">
      <div className="container mx-auto px-6">
        <div className="max-w-3xl mb-16">
          <motion.span
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="text-accent font-bold tracking-widest uppercase text-sm"
          >
            My Expertise
          </motion.span>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-4xl md:text-5xl font-bold mt-4 mb-6"
          >
            A Comprehensive Suite of <br />
            Digital Services
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="text-foreground/60 text-lg"
          >
            From initial concept to production-ready deployment, I provide 
            end-to-end solutions tailored to your business goals.
          </motion.p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service, index) => (
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
                <service.icon className={`w-8 h-8 ${service.color} group-hover:text-accent transition-colors`} />
              </div>
              <h3 className="text-2xl font-bold mb-4">{service.title}</h3>
              <p className="text-foreground/60 leading-relaxed">
                {service.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
