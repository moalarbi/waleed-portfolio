"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { GraduationCap, Calendar, MapPin, BookOpen } from "lucide-react";

const education = [
  {
    degree: "Master of Information Technology",
    school: "Open University of Sudan",
    location: "Khartoum, Sudan",
    period: "2023 – 2026",
    status: "In Progress",
    note: "One course remaining to completion",
    icon: GraduationCap,
  },
  {
    degree: "Bachelor of Information Technology",
    school: "Al-Neelain University",
    location: "Khartoum, Sudan",
    period: "2014 – 2020",
    status: "Completed",
    note: null,
    icon: BookOpen,
  },
];

export default function Education() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section id="education" ref={ref} className="px-6 py-24 relative">
      <div className="mx-auto max-w-4xl">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <p className="text-xs font-bold uppercase tracking-[0.35em] text-blue-400 mb-3">
            Academic Background
          </p>
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            Education
          </h2>
          <div className="w-16 h-0.5 bg-gradient-to-r from-blue-500 to-violet-500 mx-auto rounded-full" />
        </motion.div>

        <div className="grid md:grid-cols-2 gap-5">
          {education.map((edu, index) => {
            const Icon = edu.icon;
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6, delay: 0.15 * index }}
                whileHover={{ y: -5 }}
                className="rounded-2xl border border-white/[0.07] bg-white/[0.025] p-7 backdrop-blur hover:border-blue-500/20 hover:bg-blue-500/[0.03] transition-all"
              >
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-xl bg-blue-500/10 border border-blue-500/20 flex items-center justify-center shrink-0 mt-0.5">
                    <Icon className="w-6 h-6 text-blue-400" />
                  </div>

                  <div className="flex-1 min-w-0">
                    <div className="flex items-start justify-between gap-2 mb-2">
                      <h3 className="font-bold text-white text-sm leading-snug">
                        {edu.degree}
                      </h3>
                      <span
                        className={`shrink-0 px-2.5 py-1 rounded-full text-[10px] font-bold uppercase tracking-wider border ${
                          edu.status === "In Progress"
                            ? "bg-amber-500/10 border-amber-500/25 text-amber-400"
                            : "bg-green-500/10 border-green-500/25 text-green-400"
                        }`}
                      >
                        {edu.status}
                      </span>
                    </div>

                    <p className="text-blue-400 font-semibold text-sm mb-3">
                      {edu.school}
                    </p>

                    <div className="flex flex-wrap gap-x-4 gap-y-1 text-xs text-slate-500">
                      <div className="flex items-center gap-1.5">
                        <Calendar className="w-3 h-3" />
                        {edu.period}
                      </div>
                      <div className="flex items-center gap-1.5">
                        <MapPin className="w-3 h-3" />
                        {edu.location}
                      </div>
                    </div>

                    {edu.note && (
                      <p className="mt-3 text-xs text-slate-500 italic border-t border-white/[0.05] pt-3">
                        {edu.note}
                      </p>
                    )}
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
