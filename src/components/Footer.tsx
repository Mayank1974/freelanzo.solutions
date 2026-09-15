import React from "react";
import Link from "next/link";
import Image from "next/image";
import { Github, Linkedin, Twitter } from "lucide-react";
import { SITE_CONFIG } from "@/lib/constants";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="py-12 border-t border-foreground/5 bg-background">
      <div className="container mx-auto px-6">
        <div className="grid md:grid-cols-4 gap-12 mb-16">
          <div className="md:col-span-2">
            <Link href="/" className="flex items-center gap-3 mb-6" title="Freelanzo Solutions Homepage">
              <div className="bg-white/90 p-1.5 rounded-lg">
                <Image
                  src="/images/logo.png"
                  alt="Freelanzo Solutions Logo - Full Stack Web & Software Development Agency"
                  width={160}
                  height={40}
                  className="h-8 w-auto object-contain"
                />
              </div>
            </Link>
            <p className="text-foreground/60 max-w-sm mb-8 leading-relaxed text-sm">
              Scalable Software Engineering. Secure Cloud Infrastructure. Modern User Experience.
              Empowering tech startups and companies with expert freelance React, Next.js, Spring Boot, and AWS solutions.
            </p>
            <div className="flex gap-4">
              {[
                { Icon: Github, href: SITE_CONFIG.social.github, label: "GitHub" },
                { Icon: Linkedin, href: SITE_CONFIG.social.linkedin, label: "LinkedIn" },
                { Icon: Twitter, href: SITE_CONFIG.social.twitter, label: "Twitter" }
              ].map(({ Icon, href, label }, i) => (
                <a
                  key={i}
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={label}
                  className="w-10 h-10 rounded-full glass flex items-center justify-center hover:bg-accent hover:text-white transition-all duration-300"
                >
                  <Icon className="w-5 h-5" />
                </a>
              ))}
            </div>
          </div>

          <div>
            <h3 className="text-sm font-bold uppercase tracking-widest mb-6">
              Quick Links
            </h3>
            <ul className="space-y-4">
              {[
                { name: "Services", href: "/services" },
                { name: "Projects", href: "/#projects" },
                { name: "Blog", href: "/blog" },
                { name: "FAQ", href: "/faq" },
                { name: "Contact Us", href: "/contact" },
              ].map((item) => (
                <li key={item.name}>
                  <Link
                    href={item.href}
                    className="text-foreground/60 hover:text-accent transition-colors text-sm"
                  >
                    {item.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="text-sm font-bold uppercase tracking-widest mb-6">
              Specialized Services
            </h3>
            <ul className="space-y-4">
              {[
                { name: "Full-Stack SaaS Realization", href: "/services/full-stack-development" },
                { name: "React & Next.js Frontend", href: "/services/web-development" },
                { name: "Spring Boot & Backend APIs", href: "/services/backend-engineering" },
                { name: "AWS Cloud & DevOps", href: "/services/cloud-devops" },
              ].map((item) => (
                <li key={item.name}>
                  <Link
                    href={item.href}
                    className="text-foreground/60 hover:text-accent transition-colors text-sm"
                  >
                    {item.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="pt-12 border-t border-foreground/5 flex flex-col md:flex-row justify-between items-center gap-6">
          <p className="text-foreground/50 text-xs flex items-center gap-1">
            © {currentYear} Freelanzo Solutions. All rights reserved.
          </p>
          <div className="flex gap-6 text-xs text-foreground/50">
            <Link href="/privacy" className="hover:text-foreground transition-colors">
              Privacy Policy
            </Link>
            <Link href="/terms" className="hover:text-foreground transition-colors">
              Terms of Service
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
