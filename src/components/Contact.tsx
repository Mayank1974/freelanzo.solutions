"use client";

import React, { useState } from "react";
import { motion } from "framer-motion";
import { Mail, MessageSquare, MapPin, Send, Github, Linkedin, Twitter } from "lucide-react";
import { SITE_CONFIG } from "@/lib/constants";

export default function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "Web Development",
    message: ""
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);
  const [error, setError] = useState("");

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setError("");

    try {
      const response = await fetch("https://formspree.io/f/mjglwzra", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        setIsSuccess(true);
        setFormData({ name: "", email: "", subject: "Web Development", message: "" });
        setTimeout(() => setIsSuccess(false), 5000);
      } else {
        const data = await response.json();
        if (Object.hasOwn(data, "errors")) {
          setError(data["errors"].map((err: any) => err["message"]).join(", "));
        } else {
          setError("Oops! There was a problem submitting your form.");
        }
      }
    } catch (err) {
      setError("Oops! There was a problem submitting your form.");
    } finally {
      setIsSubmitting(false);
    }
  };

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
              <span className="text-gradient">Next Full-Stack Project?</span>
            </motion.h2>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              className="text-foreground/60 text-lg mb-12 max-w-md"
            >
              We're always open to discussing new projects, technical consultations, or long-term software engineering partnerships.
            </motion.p>

            <div className="space-y-8">
              {[
                {
                  icon: Mail,
                  label: "Email Us",
                  value: SITE_CONFIG.contact.email,
                  href: `mailto:${SITE_CONFIG.contact.email}`,
                  title: "Send an email to Freelanzo Solutions",
                },
                {
                  icon: MessageSquare,
                  label: "WhatsApp",
                  value: SITE_CONFIG.contact.phone,
                  href: SITE_CONFIG.contact.whatsapp,
                  title: "Chat with Freelanzo Solutions on WhatsApp",
                },
                {
                  icon: MapPin,
                  label: "Location",
                  value: SITE_CONFIG.contact.location,
                  href: "#",
                  title: "Freelanzo Solutions Location",
                },
              ].map((item, index) => (
                <motion.a
                  key={item.label}
                  href={item.href}
                  title={item.title}
                  target={item.href.startsWith("http") ? "_blank" : undefined}
                  rel={item.href.startsWith("http") ? "noopener noreferrer" : undefined}
                  initial={{ opacity: 0, y: 10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.3 + index * 0.1 }}
                  className="flex items-center gap-6 group"
                >
                  <div className="p-4 bg-foreground/5 rounded-2xl group-hover:bg-accent/20 group-hover:scale-110 transition-all duration-300">
                    <item.icon className="w-6 h-6 text-accent" />
                  </div>
                  <div>
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
              {[
                { Icon: Github, href: SITE_CONFIG.social.github, label: "GitHub Profile" },
                { Icon: Linkedin, href: SITE_CONFIG.social.linkedin, label: "LinkedIn Page" },
                { Icon: Twitter, href: SITE_CONFIG.social.twitter, label: "Twitter Profile" }
              ].map(({ Icon, href, label }, i) => (
                <motion.a
                  key={i}
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={label}
                  whileHover={{ y: -3, color: "var(--accent)" }}
                  className="p-3 bg-foreground/5 rounded-xl hover:bg-foreground/10 transition-all cursor-pointer"
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
            <form className="space-y-6" onSubmit={handleSubmit}>
              <div className="grid md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <label htmlFor="name" className="text-xs font-bold uppercase tracking-widest text-foreground/40 ml-1">
                    Your Name
                  </label>
                  <input
                    id="name"
                    type="text"
                    name="name"
                    required
                    value={formData.name}
                    onChange={handleChange}
                    placeholder="John Doe"
                    className="w-full bg-foreground/5 border border-foreground/10 rounded-2xl px-6 py-4 focus:outline-none focus:border-accent/50 transition-colors"
                  />
                </div>
                <div className="space-y-2">
                  <label htmlFor="email" className="text-xs font-bold uppercase tracking-widest text-foreground/40 ml-1">
                    Email Address
                  </label>
                  <input
                    id="email"
                    type="email"
                    name="email"
                    required
                    value={formData.email}
                    onChange={handleChange}
                    placeholder="john@example.com"
                    className="w-full bg-foreground/5 border border-foreground/10 rounded-2xl px-6 py-4 focus:outline-none focus:border-accent/50 transition-colors"
                  />
                </div>
              </div>

              <div className="space-y-2">
                <label htmlFor="subject" className="text-xs font-bold uppercase tracking-widest text-foreground/40 ml-1">
                  Subject / Service
                </label>
                <select
                  id="subject"
                  name="subject"
                  value={formData.subject}
                  onChange={handleChange}
                  className="w-full bg-foreground/5 border border-foreground/10 rounded-2xl px-6 py-4 focus:outline-none focus:border-accent/50 transition-colors appearance-none"
                >
                  <option value="Full-Stack Web Development">Full-Stack Web Development</option>
                  <option value="React & Next.js Frontend">React & Next.js Frontend</option>
                  <option value="Spring Boot Backend">Spring Boot Backend</option>
                  <option value="AWS Cloud & DevOps">AWS Cloud & DevOps</option>
                  <option value="Other">Other Inquiry</option>
                </select>
              </div>

              <div className="space-y-2">
                <label htmlFor="message" className="text-xs font-bold uppercase tracking-widest text-foreground/40 ml-1">
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  required
                  value={formData.message}
                  onChange={handleChange}
                  rows={4}
                  placeholder="Tell us about your project requirements, timeline, and goals..."
                  className="w-full bg-foreground/5 border border-foreground/10 rounded-2xl px-6 py-4 focus:outline-none focus:border-accent/50 transition-colors resize-none"
                />
              </div>

              {error && (
                <div className="text-red-500 text-sm font-medium">{error}</div>
              )}
              {isSuccess && (
                <div className="text-green-500 text-sm font-medium">Message sent successfully! We'll get back to you within 24 hours.</div>
              )}

              <button
                type="submit"
                disabled={isSubmitting}
                className="w-full py-5 bg-accent text-white rounded-2xl font-bold flex items-center justify-center gap-3 transition-all hover:scale-[1.02] active:scale-[0.98] shadow-[0_20px_40px_-10px_rgba(168,85,247,0.3)] group disabled:opacity-70 disabled:cursor-not-allowed cursor-pointer"
              >
                {isSubmitting ? "Sending..." : (
                  <>
                    Send Message
                    <Send className="w-5 h-5 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
                  </>
                )}
              </button>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
