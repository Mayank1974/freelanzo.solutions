import React from "react";
import Link from "next/link";
import { Code2, Github, Linkedin, Twitter, Heart } from "lucide-react";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="py-12 border-t border-white/5 bg-black">
      <div className="container mx-auto px-6">
        <div className="grid md:grid-cols-4 gap-12 mb-16">
          <div className="md:col-span-2">
            <Link href="/" className="flex items-center gap-2 mb-6">
              <div className="p-2 bg-accent/20 rounded-lg">
                <Code2 className="w-6 h-6 text-accent" />
              </div>
              <span className="text-xl font-bold tracking-tight">
                FreeLanzo<span className="text-accent">.</span>Solutions
              </span>
            </Link>
            <p className="text-foreground/40 max-w-sm mb-8 leading-relaxed">
              Crafting premium digital experiences through innovative code and
              strategic design. Let's build something extraordinary together.
            </p>
            <div className="flex gap-4">
              {[Github, Linkedin, Twitter].map((Icon, i) => (
                <a
                  key={i}
                  href="#"
                  className="w-10 h-10 rounded-full glass flex items-center justify-center hover:bg-accent hover:text-white transition-all duration-300"
                >
                  <Icon className="w-5 h-5" />
                </a>
              ))}
            </div>
          </div>

          <div>
            <h4 className="text-sm font-bold uppercase tracking-widest mb-6">
              Quick Links
            </h4>
            <ul className="space-y-4">
              {["Services", "Projects", "About", "Contact"].map((item) => (
                <li key={item}>
                  <Link
                    href={`#${item.toLowerCase()}`}
                    className="text-foreground/60 hover:text-accent transition-colors text-sm"
                  >
                    {item}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="text-sm font-bold uppercase tracking-widest mb-6">
              Services
            </h4>
            <ul className="space-y-4">
              {[
                "Web Development",
                "App Development",
                "UI/UX Design",
                "Digital Strategy",
              ].map((item) => (
                <li key={item}>
                  <Link
                    href="#services"
                    className="text-foreground/60 hover:text-accent transition-colors text-sm"
                  >
                    {item}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="pt-12 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-6">
          <p className="text-foreground/40 text-xs flex items-center gap-1">
            © {currentYear} Mayank Chauhan. All rights reserved.
          </p>
          <p className="text-foreground/40 text-xs flex items-center gap-1.5">
            Crafted with <Heart className="w-3 h-3 text-red-500 fill-current" /> using Next.js & Tailwind
          </p>
        </div>
      </div>
    </footer>
  );
}
