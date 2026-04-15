"use client";

import React from "react";
import { motion } from "framer-motion";
import { ExternalLink, Github, Monitor, Server, Smartphone } from "lucide-react";

const projects = [
  {
    title: "E-Commerce Titan",
    category: "Full Stack Development",
    description: "A high-performance e-commerce platform with real-time inventory, secure payments (Stripe), and admin dashboard.",
    image: "https://images.unsplash.com/photo-1557821552-17105176677c?auto=format&fit=crop&q=80&w=1000",
    tech: ["Next.js", "TypeScript", "Tailwind", "Prisma", "Stripe"],
    type: "Web",
    link: "#",
    github: "#",
  },
  {
    title: "EcoPulse Dashboard",
    category: "Data Visualization",
    description: "Real-time environmental monitoring dashboard with interactive 3D visualizations and predictive analytics.",
    image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&q=80&w=1000",
    tech: ["React", "Three.js", "D3.js", "Node.js", "FastAPI"],
    type: "SaaS",
    link: "#",
    github: "#",
  },
  {
    title: "Lumina Social App",
    category: "Mobile First Application",
    description: "Fast, encrypted messaging app focused on creator communities and digital content sharing.",
    image: "https://images.unsplash.com/photo-1611162617474-5b21e879e113?auto=format&fit=crop&q=80&w=1000",
    tech: ["React Native", "Firebase", "Zustand", "Express"],
    type: "Mobile",
    link: "#",
    github: "#",
  },
];

export default function Projects() {
  return (
    <section id="projects" className="py-24 bg-white/[0.02]">
      <div className="container mx-auto px-6">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
          <div className="max-w-2xl">
            <motion.span
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="text-accent font-bold tracking-widest uppercase text-sm"
            >
              Selected Work
            </motion.span>
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="text-4xl md:text-5xl font-bold mt-4"
            >
              Bringing Ideas to Life Through <br />
              Code & Design
            </motion.h2>
          </div>
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="flex gap-2"
          >
            <div className="px-4 py-2 rounded-full glass text-xs font-bold uppercase tracking-wider text-accent border-accent/20">
              Showcasing All
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
              className="group glass rounded-[2rem] overflow-hidden flex flex-col h-full border-white/5 hover:border-accent/40 transition-all duration-500"
            >
              {/* Image Container */}
              <div className="relative h-64 overflow-hidden">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent" />
                <div className="absolute top-4 right-4 flex gap-2">
                  <span className="px-3 py-1 bg-black/50 backdrop-blur-md rounded-full text-[10px] font-bold uppercase tracking-widest text-white/80 border border-white/10">
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
                      className="px-2.5 py-1 bg-white/5 rounded-lg text-[10px] font-medium text-foreground/40 border border-white/5"
                    >
                      {t}
                    </span>
                  ))}
                </div>

                {/* Actions */}
                <div className="flex items-center gap-4 pt-6 border-t border-white/5">
                  <a
                    href={project.link}
                    className="flex items-center gap-1.5 text-xs font-bold uppercase tracking-widest text-foreground hover:text-accent transition-colors"
                  >
                    Live Demo <ExternalLink className="w-3 h-3" />
                  </a>
                  <a
                    href={project.github}
                    className="flex items-center gap-1.5 text-xs font-bold uppercase tracking-widest text-foreground/40 hover:text-accent transition-colors"
                  >
                    Source <Github className="w-3 h-3" />
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
            href="#"
            className="inline-flex items-center gap-2 text-foreground/60 hover:text-white transition-colors text-sm font-semibold group"
          >
            Explore all projects on GitHub
            <ChevronRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
          </a>
        </motion.div>
      </div>
    </section>
  );
}

import { ChevronRight } from "lucide-react";
