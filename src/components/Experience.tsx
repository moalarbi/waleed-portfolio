"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { Briefcase, Calendar, MapPin } from "lucide-react";

const experiences = [
  {
    title: "Full Stack Developer",
    company: "Emdadat Alatta",
    location: "Riyadh, Saudi Arabia",
    period: "Oct 2024 – Present",
    type: "Full-time",
    current: true,
    bullets: [
      "Developed scalable Laravel APIs and backend services for ERP systems and production mobile applications.",
      "Built admin dashboards for managing bookings, payments, users, services, reports, and operational workflows.",
      "Supported key applications: Golden Ultra, Ehtimam, and Batal across backend, dashboard, and API layers.",
      "Integrated payment gateways, order tracking systems, WebSockets, real-time notifications, and in-app support chat.",
      "Optimized database queries, reports, file handling, and dashboard performance to improve speed and reliability.",
      "Enhanced inventory, finance, reporting, and service management modules with secure backend practices.",
    ],
  },
  {
    title: "Back End Developer",
    company: "Mask Information Technology Company",
    location: "Jeddah, Saudi Arabia",
    period: "Mar 2024 – Sep 2024",
    type: "Hybrid",
    current: false,
    bullets: [
      "Built and maintained Laravel-based RESTful APIs for business applications.",
      "Collaborated with frontend and operations teams in a hybrid work model.",
      "Implemented reusable backend components and database optimization practices.",
    ],
  },
  {
    title: "IT Manager & Software Engineering Manager",
    company: "Online Auction",
    location: "Jeddah, Saudi Arabia",
    period: "Mar 2022 – Feb 2024",
    type: "Full-time",
    current: false,
    bullets: [
      "Led the software development team managing backend systems for logistics platforms including mobile app, admin dashboard, and client portal.",
      "Collaborated with stakeholders and product teams to gather requirements and write user stories.",
      "Managed development sprints using Jira and directed technical delivery, DevOps, CI/CD, and version control.",
      "Supported marketing and operations with feature integration and analytics tools.",
    ],
  },
  {
    title: "Teaching Assistant",
    company: "Al-Neelain University — Faculty of CS & IT",
    location: "Khartoum, Sudan",
    period: "Nov 2021 – Mar 2022",
    type: "Part-time",
    current: false,
    bullets: [
      "Assisted in teaching programming, web development, and database courses.",
      "Led practical labs in PHP, HTML5, CSS, and JavaScript.",
      "Helped design curriculum materials and supported student projects.",
    ],
  },
  {
    title: "Full Stack Developer",
    company: "UNESCO",
    location: "Khartoum, Sudan",
    period: "Jan 2020 – May 2021",
    type: "Contract",
    current: false,
    bullets: [
      "Designed and developed a full-stack news publishing system with role-based access for journalists and admins.",
      "Built Laravel backend, Bootstrap/jQuery frontend, and multilingual content support.",
    ],
  },
];

export default function Experience() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section id="experience" ref={ref} className="px-6 py-24 relative">
      <div className="mx-auto max-w-4xl">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <p className="text-xs font-bold uppercase tracking-[0.35em] text-blue-400 mb-3">
            Work History
          </p>
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            Experience
          </h2>
          <div className="w-16 h-0.5 bg-gradient-to-r from-blue-500 to-violet-500 mx-auto rounded-full" />
        </motion.div>

        <div className="relative">
          {/* Vertical timeline line */}
          <div className="absolute left-7 top-2 bottom-2 w-px bg-gradient-to-b from-blue-500/60 via-blue-500/20 to-transparent" />

          <div className="space-y-6">
            {experiences.map((exp, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: -30 }}
                animate={isInView ? { opacity: 1, x: 0 } : {}}
                transition={{ duration: 0.6, delay: 0.1 * index }}
                className="relative pl-20"
              >
                {/* Timeline dot */}
                <div
                  className={`absolute left-[22px] top-6 w-4 h-4 rounded-full border-2 transition-all ${
                    exp.current
                      ? "bg-blue-500 border-blue-300 shadow-lg shadow-blue-500/60"
                      : "bg-slate-800 border-slate-600"
                  }`}
                />

                {/* Card */}
                <motion.div
                  whileHover={{ y: -3 }}
                  className="rounded-2xl border border-white/[0.07] bg-white/[0.03] p-6 backdrop-blur hover:border-blue-500/20 hover:bg-blue-500/[0.02] transition-all"
                >
                  <div className="flex flex-wrap items-start justify-between gap-3 mb-4">
                    <div>
                      <div className="flex items-center gap-2 mb-1.5">
                        <h3 className="text-base font-bold text-white">
                          {exp.title}
                        </h3>
                        {exp.current && (
                          <span className="px-2 py-0.5 rounded-full bg-green-500/15 border border-green-500/30 text-green-400 text-[10px] font-bold uppercase tracking-wider">
                            Current
                          </span>
                        )}
                      </div>
                      <div className="flex items-center gap-1.5 text-blue-400 font-semibold text-sm">
                        <Briefcase className="w-3.5 h-3.5" />
                        {exp.company}
                      </div>
                    </div>

                    <div className="text-right space-y-1 shrink-0">
                      <div className="flex items-center gap-1.5 text-slate-500 text-xs justify-end">
                        <Calendar className="w-3 h-3" />
                        {exp.period}
                      </div>
                      <div className="flex items-center gap-1.5 text-slate-500 text-xs justify-end">
                        <MapPin className="w-3 h-3" />
                        {exp.location}
                      </div>
                      <span className="inline-block px-2 py-0.5 rounded-full bg-slate-800/80 border border-slate-700 text-slate-400 text-[10px] font-medium">
                        {exp.type}
                      </span>
                    </div>
                  </div>

                  <ul className="space-y-2">
                    {exp.bullets.map((bullet, i) => (
                      <li
                        key={i}
                        className="flex items-start gap-2.5 text-sm text-slate-400 leading-relaxed"
                      >
                        <span className="w-1.5 h-1.5 rounded-full bg-blue-500/50 mt-2 shrink-0" />
                        {bullet}
                      </li>
                    ))}
                  </ul>
                </motion.div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
