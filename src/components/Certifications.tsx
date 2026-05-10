"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { Award, ExternalLink } from "lucide-react";

const certs = [
  {
    title: "Microservices: Design Patterns",
    platform: "LinkedIn Learning",
    date: "Jul 2025",
    color: "blue",
    link: "https://linkedin.com/learning",
  },
  {
    title: "SOLID Principles",
    platform: "Udemy",
    date: "May 2024",
    color: "indigo",
    link: "https://udemy.com",
  },
  {
    title: "Git and GitHub",
    platform: "Udemy",
    date: "Oct 2023",
    color: "violet",
    link: "https://udemy.com",
  },
];

const colorMap: Record<string, string> = {
  blue: "border-blue-500/20 hover:border-blue-500/35 hover:bg-blue-500/[0.04]",
  indigo: "border-indigo-500/20 hover:border-indigo-500/35 hover:bg-indigo-500/[0.04]",
  violet: "border-violet-500/20 hover:border-violet-500/35 hover:bg-violet-500/[0.04]",
};

const iconColorMap: Record<string, string> = {
  blue: "bg-blue-500/10 border-blue-500/20 text-blue-400",
  indigo: "bg-indigo-500/10 border-indigo-500/20 text-indigo-400",
  violet: "bg-violet-500/10 border-violet-500/20 text-violet-400",
};

const badgeColorMap: Record<string, string> = {
  blue: "text-blue-400",
  indigo: "text-indigo-400",
  violet: "text-violet-400",
};

export default function Certifications() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section id="certifications" ref={ref} className="px-6 py-24 relative">
      <div className="mx-auto max-w-4xl">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <p className="text-xs font-bold uppercase tracking-[0.35em] text-blue-400 mb-3">
            Professional Development
          </p>
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            Certifications
          </h2>
          <div className="w-16 h-0.5 bg-gradient-to-r from-blue-500 to-violet-500 mx-auto rounded-full" />
        </motion.div>

        <div className="grid md:grid-cols-3 gap-5">
          {certs.map((cert, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: 0.1 * index }}
              whileHover={{ y: -6 }}
              className={`group rounded-2xl border bg-white/[0.025] p-6 backdrop-blur transition-all cursor-default ${colorMap[cert.color]}`}
            >
              <div
                className={`w-11 h-11 rounded-xl border flex items-center justify-center mb-5 ${iconColorMap[cert.color]}`}
              >
                <Award className="w-5 h-5" />
              </div>

              <h3 className="font-bold text-white text-sm mb-2 leading-snug">
                {cert.title}
              </h3>

              <p className={`text-xs font-semibold mb-1 ${badgeColorMap[cert.color]}`}>
                {cert.platform}
              </p>

              <p className="text-slate-500 text-xs">{cert.date}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
