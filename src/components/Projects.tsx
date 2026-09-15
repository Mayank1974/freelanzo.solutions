"use client";

import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { ExternalLink, Github, ChevronRight } from "lucide-react";
import { SITE_CONFIG } from "@/lib/constants";

const projects = [
  {
    title: "E-Commerce Titan Platform",
    category: "Full Stack Development",
    description: "High-performance full-stack e-commerce solution with real-time inventory tracking, Stripe payments, and admin metrics dashboard.",
    image: "https://images.unsplash.com/photo-1557821552-17105176677c?auto=format&fit=crop&q=80&w=1000",
    tech: ["Next.js", "TypeScript", "Spring Boot", "Tailwind", "Stripe"],
    type: "Web & SaaS",
    link: SITE_CONFIG.social.github,
    github: SITE_CONFIG.social.github,
    alt: "Full Stack E-Commerce SaaS Application Developed by Freelanzo Solutions",
  },
  {
    title: "EcoPulse Analytics Dashboard",
    category: "Data Visualization & Cloud",
    description: "Real-time environmental telemetry platform featuring 3D web visualizations, predictive cloud analytics, and automated alerting.",
    image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&q=80&w=1000",
    tech: ["React", "Three.js", "Spring Boot", "AWS ECS", "PostgreSQL"],
    type: "SaaS Platform",
    link: SITE_CONFIG.social.github,
    github: SITE_CONFIG.social.github,
    alt: "Analytics Dashboard Cloud Architecture by Freelanzo Solutions",
  },
  {
    title: "Lumina Social Mobile App",
    category: "Mobile First Application",
    description: "Encrypted mobile community application built for creator monetization, video streaming, and real-time socket messaging.",
    image: "https://images.unsplash.com/photo-1611162617474-5b21e879e113?auto=format&fit=crop&q=80&w=1000",
    tech: ["React Native", "Node.js", "AWS S3", "Firebase"],
    type: "Mobile App",
    link: SITE_CONFIG.social.github,
    github: SITE_CONFIG.social.github,
    alt: "React Native Mobile App Showcase by Freelanzo Solutions",
  },
];

export default function Projects() {
  return (
    <section id="projects" className="py-24 bg-foreground/[0.02]">
      <div className="container mx-auto px-6">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
          <div className="max-w-2xl">
            <motion.span
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="text-accent font-bold tracking-widest uppercase text-sm"
            >
              Portfolio & Featured Work
            </motion.span>
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="text-3xl md:text-5xl font-bold mt-4"
            >
              Full-Stack Web & SaaS Case Studies
            </motion.h2>
          </div>
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="flex gap-2"
          >
            <div className="px-4 py-2 rounded-full glass text-xs font-bold uppercase tracking-wider text-accent border-accent/20">
              Selected Showcase
            </div>
          </motion.div>
        </div>

        <div className="grid lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="group glass rounded-[2rem] overflow-hidden flex flex-col h-full border-foreground/5 hover:border-accent/40 transition-all duration-500"
            >
              {/* Image Container with Next.js Image */}
              <div className="relative h-64 overflow-hidden">
                <Image
                  src={project.image}
                  alt={project.alt}
                  fill
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                  className="object-cover transition-transform duration-700 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent pointer-events-none" />
                <div className="absolute top-4 right-4 flex gap-2">
                  <span className="px-3 py-1 bg-background/50 backdrop-blur-md rounded-full text-[10px] font-bold uppercase tracking-widest text-foreground/80 border border-foreground/10">
                    {project.type}
                  </span>
                </div>
              </div>

              {/* Content */}
              <div className="p-8 flex flex-col flex-grow">
                <span className="text-accent/60 text-xs font-bold uppercase tracking-widest mb-2">
                  {project.category}
                </span>
                <h3 className="text-2xl font-bold mb-4 group-hover:text-accent transition-colors">
                  {project.title}
                </h3>
                <p className="text-foreground/60 text-sm leading-relaxed mb-6 flex-grow">
                  {project.description}
                </p>

                {/* Tech Stack */}
                <div className="flex flex-wrap gap-2 mb-8">
                  {project.tech.map((t) => (
                    <span
                      key={t}
                      className="px-2.5 py-1 bg-foreground/5 rounded-lg text-[10px] font-medium text-foreground/60 border border-foreground/5"
                    >
                      {t}
                    </span>
                  ))}
                </div>

                {/* Fixed Working Links */}
                <div className="flex items-center gap-6 pt-6 border-t border-foreground/5">
                  <a
                    href={project.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-1.5 text-xs font-bold uppercase tracking-widest text-foreground hover:text-accent transition-colors"
                  >
                    Live Demo <ExternalLink className="w-3.5 h-3.5" />
                  </a>
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-1.5 text-xs font-bold uppercase tracking-widest text-foreground/60 hover:text-accent transition-colors"
                  >
                    Source <Github className="w-3.5 h-3.5" />
                  </a>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mt-20 text-center"
        >
          <a
            href={SITE_CONFIG.social.github}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 text-foreground/70 hover:text-accent transition-colors text-sm font-semibold group"
          >
            Explore all open-source & full-stack projects on GitHub
            <ChevronRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
          </a>
        </motion.div>
      </div>
    </section>
  );
}
