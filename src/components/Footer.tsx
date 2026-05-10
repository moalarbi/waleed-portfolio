"use client";

import { motion } from "framer-motion";
import { ArrowUpRight, Linkedin, Globe, Mail, Code2 } from "lucide-react";

const links = [
  { label: "LinkedIn", href: "https://www.linkedin.com/in/waleed-ishag-babb01206", icon: Linkedin },
  { label: "Website", href: "https://waleedinfo.com", icon: Globe },
  { label: "Email", href: "mailto:waleedinfo97@gmail.com", icon: Mail },
];

export default function Footer() {
  return (
    <footer className="relative border-t border-white/[0.05] py-12 px-6">
      <div className="mx-auto max-w-6xl">
        <div className="flex flex-col md:flex-row items-center justify-between gap-8">
          {/* Brand */}
          <div className="flex items-center gap-2.5">
            <div className="w-8 h-8 rounded-xl bg-blue-500/15 border border-blue-500/25 flex items-center justify-center">
              <Code2 className="w-4 h-4 text-blue-400" />
            </div>
            <span className="font-bold text-white">
              Waleed<span className="text-blue-400">.dev</span>
            </span>
          </div>

          {/* Social links */}
          <div className="flex items-center gap-3">
            {links.map((link) => {
              const Icon = link.icon;
              return (
                <motion.a
                  key={link.label}
                  href={link.href}
                  target={link.href.startsWith("http") ? "_blank" : undefined}
                  rel="noopener noreferrer"
                  whileHover={{ y: -3, scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="w-9 h-9 rounded-full border border-white/[0.08] bg-white/[0.04] flex items-center justify-center text-slate-400 hover:text-blue-400 hover:border-blue-500/30 hover:bg-blue-500/10 transition-all"
                  aria-label={link.label}
                >
                  <Icon className="w-4 h-4" />
                </motion.a>
              );
            })}
          </div>

          {/* Copyright */}
          <p className="text-slate-600 text-xs text-center">
            © {new Date().getFullYear()} Waleed Ishaq · Senior Laravel Backend Developer
          </p>
        </div>

        {/* Bottom tagline */}
        <div className="mt-8 pt-6 border-t border-white/[0.04] text-center">
          <p className="text-slate-700 text-xs">
            Built with Next.js · TypeScript · Tailwind CSS · Framer Motion
          </p>
        </div>
      </div>
    </footer>
  );
}
