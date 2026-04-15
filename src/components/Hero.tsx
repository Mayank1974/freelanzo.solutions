"use client";

import React from "react";
import { motion } from "framer-motion";
import { ArrowRight, ChevronRight } from "lucide-react";

export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center pt-20 overflow-hidden bg-gradient-mesh">
      {/* Background Orbs */}
      <div className="absolute top-1/4 -left-20 w-96 h-96 bg-accent/20 rounded-full blur-[120px] animate-pulse" />
      <div className="absolute bottom-1/4 -right-20 w-96 h-96 bg-accent-secondary/20 rounded-full blur-[120px] animate-pulse delay-700" />

      <div className="container mx-auto px-6 relative z-10 text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/5 border border-white/10 text-sm font-medium text-white/80 mb-8"
        >
          <span className="w-2 h-2 rounded-full bg-green-500 animate-ping" />
          Available for new projects
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="text-5xl md:text-7xl lg:text-8xl font-black tracking-tight mb-8"
        >
          Building Digital <br />
          <span className="text-gradient">Experiences</span> that Matter
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="max-w-2xl mx-auto text-lg md:text-xl text-foreground/60 mb-12 leading-relaxed"
        >
          I'm a full-stack developer specializing in building high-performance 
          web applications from initial design to final deployment. 
          Let's turn your vision into a reality.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="flex flex-col sm:flex-row items-center justify-center gap-4"
        >
          <a
            href="#contact"
            className="group px-8 py-4 bg-accent text-white rounded-2xl font-bold text-lg flex items-center gap-2 transition-all hover:scale-105 hover:bg-accent/90 shadow-[0_0_40px_-10px_rgba(168,85,247,0.5)]"
          >
            Start a Project
            <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
          </a>
          <a
            href="#projects"
            className="px-8 py-4 bg-white/5 hover:bg-white/10 text-white border border-white/10 rounded-2xl font-bold text-lg flex items-center gap-2 transition-all"
          >
            View Work
            <ChevronRight className="w-5 h-5 text-foreground/40" />
          </a>
        </motion.div>
      </div>

      {/* Hero Image Component Placeholder */}
      <motion.div
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 1, delay: 0.5 }}
        className="absolute bottom-0 left-1/2 -translate-x-1/2 w-full max-w-5xl h-[300px] bg-gradient-to-t from-background via-transparent to-transparent z-20"
      />
    </section>
  );
}
