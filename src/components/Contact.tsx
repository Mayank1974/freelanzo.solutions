"use client";

import React from "react";
import { motion } from "framer-motion";
import { Mail, MessageSquare, Phone, MapPin, Send, Github, Linkedin, Twitter } from "lucide-react";

export default function Contact() {
  return (
    <section id="contact" className="py-24 relative overflow-hidden">
      {/* Background elements */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-full bg-gradient-to-b from-transparent via-accent/[0.03] to-transparent pointer-events-none" />

      <div className="container mx-auto px-6 relative z-10">
        <div className="grid lg:grid-cols-2 gap-20">
          {/* Left Column: Info */}
          <div>
            <motion.span
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="text-accent font-bold tracking-widest uppercase text-sm"
            >
              Get in Touch
            </motion.span>
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="text-4xl md:text-5xl font-bold mt-4 mb-8"
            >
              Ready to Start Your <br />
              <span className="text-gradient">Next Project?</span>
            </motion.h2>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              className="text-foreground/60 text-lg mb-12 max-w-md"
            >
              I'm always open to discussing new projects, creative ideas or
              opportunities to be part of your visions.
            </motion.p>

            <div className="space-y-8">
              {[
                { icon: Mail, label: "Email", value: "FreelanzoSolutions@gmail.com", href: "mailto:freelanzosolutions@gmail.com" },
                { icon: MessageSquare, label: "WhatsApp", value: "+91 8607112350", href: "https://wa.me/8607112350" },
                { icon: MapPin, label: "Location", value: "Remote / Worldwide", href: "#" },
              ].map((item, index) => (
                <motion.a
                  key={item.label}
                  href={item.href}
                  initial={{ opacity: 0, y: 10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.3 + index * 0.1 }}
                  className="flex items-center gap-6 group"
                >
                  <div className="p-4 bg-white/5 rounded-2xl group-hover:bg-accent/20 group-hover:scale-110 transition-all duration-300">
                    <item.icon className="w-6 h-6 text-accent" />
                  </div>
                   <p className="text-xs font-bold uppercase tracking-widest text-foreground/40 mb-1">
                      {item.label}
                    </p>
                    <p className="text-xl font-medium group-hover:text-accent transition-colors">
                      {item.value}
                    </p>
                  </div>
                </motion.a>
              ))}
            </div>

            {/* Social Links */}
            <div className="flex gap-4 mt-16 text-foreground/40">
              {[Github, Linkedin, Twitter].map((Icon, i) => (
                <motion.a
                  key={i}
                  href="#"
                  whileHover={{ y: -3, color: "var(--accent)" }}
                  className="p-3 bg-white/5 rounded-xl hover:bg-white/10 transition-all"
                >
                  <Icon className="w-5 h-5" />
                </motion.a>
              ))}
            </div>
          </div>

          {/* Right Column: Form */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="glass p-8 md:p-12 rounded-[2.5rem] relative"
          >
            <form className="space-y-6">
              <div className="grid md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <label className="text-xs font-bold uppercase tracking-widest text-foreground/40 ml-1">
                    Your Name
                  </label>
                  <input
                    type="text"
                    placeholder="John Doe"
                    className="w-full bg-white/5 border border-white/10 rounded-2xl px-6 py-4 focus:outline-none focus:border-accent/50 transition-colors"
                  />
                </div>
                <div className="space-y-2">
                  <label className="text-xs font-bold uppercase tracking-widest text-foreground/40 ml-1">
                    Email Address
                  </label>
                  <input
                    type="email"
                    placeholder="john@example.com"
                    className="w-full bg-white/5 border border-white/10 rounded-2xl px-6 py-4 focus:outline-none focus:border-accent/50 transition-colors"
                  />
                </div>
              </div>

              <div className="space-y-2">
                <label className="text-xs font-bold uppercase tracking-widest text-foreground/40 ml-1">
                  Subject
                </label>
                <select className="w-full bg-white/5 border border-white/10 rounded-2xl px-6 py-4 focus:outline-none focus:border-accent/50 transition-colors appearance-none">
                  <option>Web Development</option>
                  <option>UI/UX Design</option>
                  <option>Consulting</option>
                  <option>Other</option>
                </select>
              </div>

              <div className="space-y-2">
                <label className="text-xs font-bold uppercase tracking-widest text-foreground/40 ml-1">
                  Message
                </label>
                <textarea
                  rows={4}
                  placeholder="How can I help you?"
                  className="w-full bg-white/5 border border-white/10 rounded-2xl px-6 py-4 focus:outline-none focus:border-accent/50 transition-colors resize-none"
                />
              </div>

              <button
                type="submit"
                className="w-full py-5 bg-accent text-white rounded-2xl font-bold flex items-center justify-center gap-3 transition-all hover:scale-[1.02] active:scale-[0.98] shadow-[0_20px_40px_-10px_rgba(168,85,247,0.3)] group"
              >
                Send Message
                <Send className="w-5 h-5 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
              </button>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
