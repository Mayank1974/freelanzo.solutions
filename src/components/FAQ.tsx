"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronDown, HelpCircle } from "lucide-react";
import { FAQ_DATA } from "@/lib/constants";
import { FAQPageJsonLd } from "@/components/JsonLd";

export default function FAQ() {
  const [openIdx, setOpenIdx] = useState<number | null>(0);

  const toggle = (idx: number) => {
    setOpenIdx(openIdx === idx ? null : idx);
  };

  return (
    <section id="faq" className="py-24 relative overflow-hidden bg-background">
      <FAQPageJsonLd faqs={FAQ_DATA} />
      <div className="container mx-auto px-6 relative z-10">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <motion.span
            initial={{ opacity: 0, y: -10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-accent font-bold tracking-widest uppercase text-sm"
          >
            Frequently Asked Questions
          </motion.span>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-3xl md:text-5xl font-bold mt-4 mb-6"
          >
            Everything You Need to Know Before Hiring Us
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="text-foreground/60 text-lg"
          >
            Clear answers about our full-stack engineering workflow, technology stack (React, Next.js, Spring Boot, AWS), timelines, and pricing.
          </motion.p>
        </div>

        <div className="max-w-3xl mx-auto space-y-4">
          {FAQ_DATA.map((faq, idx) => {
            const isOpen = openIdx === idx;
            return (
              <motion.div
                key={faq.question}
                initial={{ opacity: 0, y: 15 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.05 }}
                className="glass rounded-2xl border border-foreground/10 overflow-hidden"
              >
                <button
                  onClick={() => toggle(idx)}
                  className="w-full text-left p-6 flex justify-between items-center gap-4 transition-colors hover:bg-foreground/5 cursor-pointer"
                  aria-expanded={isOpen}
                >
                  <div className="flex items-center gap-3">
                    <HelpCircle className="w-5 h-5 text-accent flex-shrink-0" />
                    <h3 className="text-lg font-bold text-foreground">{faq.question}</h3>
                  </div>
                  <ChevronDown
                    className={`w-5 h-5 text-foreground/50 transition-transform duration-300 ${
                      isOpen ? "rotate-180 text-accent" : ""
                    }`}
                  />
                </button>

                <AnimatePresence>
                  {isOpen && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.3 }}
                      className="overflow-hidden"
                    >
                      <div className="px-6 pb-6 pt-2 text-foreground/70 leading-relaxed border-t border-foreground/5 text-base">
                        {faq.answer}
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
