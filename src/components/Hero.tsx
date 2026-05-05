"use client";

import React from "react";
import { motion } from "framer-motion";
import { ArrowRight, Play, CheckCircle2, Star, Zap } from "lucide-react";

export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center pt-32 pb-20 overflow-hidden bg-gradient-mesh">
      {/* Background Grid & Orbs */}
      <div className="absolute inset-0 bg-grid-pattern pointer-events-none opacity-50 dark:opacity-100" />
      <div className="absolute top-1/4 -left-20 w-96 h-96 bg-accent/20 rounded-full blur-[120px] animate-pulse" />
      <div className="absolute bottom-1/4 -right-20 w-96 h-96 bg-accent-secondary/20 rounded-full blur-[120px] animate-pulse delay-700" />

      <div className="container mx-auto px-6 relative z-10">
        <div className="grid lg:grid-cols-2 gap-16 lg:gap-8 items-center">

          {/* Left Column: Content */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            className="max-w-2xl"
          >
            {/* Company Intro Badge */}
            <div className="inline-flex items-center gap-3 px-4 py-2 rounded-full bg-foreground/5 border border-foreground/10 backdrop-blur-md mb-8">
              <div className="relative flex h-2.5 w-2.5">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-green-500"></span>
              </div>
              <span className="text-sm font-medium text-foreground/80">
                Your Dedicated Product Engineering Team
              </span>
            </div>

            {/* Headline */}
            <h1 className="text-5xl md:text-6xl lg:text-7xl font-black tracking-tight mb-6 leading-[1.1]">
              Build & Launch Your Startup in <br className="hidden md:block" />
              <span className="text-gradient font-extrabold italic">Weeks, Not Months.</span>
            </h1>

            {/* Subheading */}
            <p className="text-lg md:text-xl text-foreground/60 mb-10 leading-relaxed max-w-xl">
              Stop managing fragmented teams. We provide the end-to-end engineering, scalable architecture, and SaaS expertise you need to turn your vision into a production-ready product.
            </p>

            {/* CTAs */}
            <div className="flex flex-col sm:flex-row items-center gap-4 mb-4">
              <a
                href="#contact"
                className="w-full sm:w-auto px-8 py-4 bg-accent text-white rounded-xl font-bold text-lg flex items-center justify-center gap-2 transition-all hover:scale-105 hover:bg-accent/90 shadow-[0_0_60px_-15px_rgba(168,85,247,0.6)] group"
              >
                Book Free Call
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </a>
              <a
                href="#projects"
                className="w-full sm:w-auto px-8 py-4 bg-foreground/5 hover:bg-foreground/10 text-foreground border border-foreground/10 rounded-xl font-bold text-lg flex items-center justify-center gap-2 transition-all group"
              >
                <Play className="w-5 h-5 text-foreground/60 group-hover:text-foreground transition-colors" />
                View Projects
              </a>
            </div>

            {/* Microcopy */}
            <div className="flex items-center gap-2 text-sm text-foreground/50 mb-12 ml-2">
              <CheckCircle2 className="w-4 h-4 text-accent animate-pulse" />
              <span>Free 15-min call. No commitment.</span>
            </div>

            {/* Trust Signals */}
            <div className="pt-8 border-t border-foreground/10 flex flex-col sm:flex-row items-start sm:items-center gap-4 sm:gap-6 text-sm font-medium text-foreground/60">
              <div className="flex items-center gap-2">
                <Star className="w-4 h-4 text-amber-400 fill-amber-400" />
                <span>10+ Projects Delivered</span>
              </div>
              <div className="hidden sm:block w-1 h-1 rounded-full bg-foreground/20" />
              <div>Full Stack Expertise</div>
              <div className="hidden sm:block w-1 h-1 rounded-full bg-foreground/20" />
              <div className="text-foreground/40">React • Spring Boot • AWS</div>
            </div>
          </motion.div>

          {/* Right Column: Visual Mockup */}
          <motion.div
            initial={{ opacity: 0, x: 30, rotateY: -10 }}
            animate={{ opacity: 1, x: 0, rotateY: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="relative lg:ml-10 perspective-[2000px]"
          >
            {/* Mockup Container with 3D feel */}
            <div className="relative rounded-2xl overflow-hidden border border-foreground/10 shadow-[0_0_80px_-20px_rgba(168,85,247,0.4)] glass transform-gpu transition-transform hover:rotate-y-[5deg] hover:rotate-x-[5deg] duration-500 group-hover:shadow-[0_0_100px_-20px_rgba(168,85,247,0.6)]">
              {/* Fake Browser Header */}
              <div className="bg-background/80 backdrop-blur-md border-b border-foreground/10 px-4 py-3 flex items-center gap-2">
                <div className="flex gap-1.5">
                  <div className="w-3 h-3 rounded-full bg-red-500/80" />
                  <div className="w-3 h-3 rounded-full bg-amber-500/80" />
                  <div className="w-3 h-3 rounded-full bg-green-500/80" />
                </div>
                <div className="ml-4 px-3 py-1 rounded-md bg-foreground/5 text-xs text-foreground/40 font-mono w-48 truncate">
                  app.freelanzosolutions.com
                </div>
              </div>

              {/* Image */}
              <div className="relative aspect-[1/1] sm:aspect-[4/3] w-full bg-black/50">
                <img
                  src="/images/saas-dashboard.png"
                  alt="SaaS Dashboard Interface"
                  className="absolute inset-0 w-full h-full object-cover object-top opacity-90"
                />
                {/* Overlay gradient for extra premium feel */}
                <div className="absolute inset-0 bg-gradient-to-tr from-accent/10 via-transparent to-accent-secondary/10 pointer-events-none" />
              </div>
            </div>

            {/* Floating decorative elements */}
            <motion.div
              animate={{ y: [0, -10, 0] }}
              transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
              className="absolute -bottom-6 -left-6 p-4 glass rounded-xl border border-foreground/10 shadow-xl hidden md:block"
            >
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-lg bg-green-500/20 flex items-center justify-center">
                  <Zap className="w-5 h-5 text-green-500" />
                </div>
                <div>
                  <div className="text-xs text-foreground/60 font-medium">Performance</div>
                  <div className="text-sm font-bold text-foreground">99.9% Uptime</div>
                </div>
              </div>
            </motion.div>
          </motion.div>

        </div>
      </div>
    </section>
  );
}
