"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";

const skillGroups = [
  {
    category: "Backend",
    emoji: "⚙️",
    skills: [
      "Laravel",
      "PHP",
      "MySQL",
      "SQL",
      "RESTful APIs",
      "WebSockets",
      "Pusher",
      "Event Broadcasting",
      "Laravel Queues",
      "Database Design",
    ],
    color: "blue",
  },
  {
    category: "Frontend",
    emoji: "🎨",
    skills: ["JavaScript", "HTML5", "CSS3", "Bootstrap", "jQuery"],
    color: "indigo",
  },
  {
    category: "DevOps & Tools",
    emoji: "🛠️",
    skills: ["Git", "GitHub", "CI/CD", "Jira", "API Integration", "DevOps"],
    color: "violet",
  },
  {
    category: "Leadership & Agile",
    emoji: "🚀",
    skills: [
      "Team Leadership",
      "Agile",
      "Scrum",
      "Agile Collaboration",
      "Problem-Solving",
    ],
    color: "cyan",
  },
];

const colorMap: Record<string, string> = {
  blue: "border-blue-500/25 bg-blue-500/10 text-blue-300 hover:bg-blue-500/20 hover:border-blue-400/40",
  indigo:
    "border-indigo-500/25 bg-indigo-500/10 text-indigo-300 hover:bg-indigo-500/20 hover:border-indigo-400/40",
  violet:
    "border-violet-500/25 bg-violet-500/10 text-violet-300 hover:bg-violet-500/20 hover:border-violet-400/40",
  cyan: "border-cyan-500/25 bg-cyan-500/10 text-cyan-300 hover:bg-cyan-500/20 hover:border-cyan-400/40",
};

const headerColorMap: Record<string, string> = {
  blue: "text-blue-400 bg-blue-500/10 border-blue-500/20",
  indigo: "text-indigo-400 bg-indigo-500/10 border-indigo-500/20",
  violet: "text-violet-400 bg-violet-500/10 border-violet-500/20",
  cyan: "text-cyan-400 bg-cyan-500/10 border-cyan-500/20",
};

export default function Skills() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section id="skills" ref={ref} className="px-6 py-24 relative">
      <div className="mx-auto max-w-6xl">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <p className="text-xs font-bold uppercase tracking-[0.35em] text-blue-400 mb-3">
            Technical Stack
          </p>
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            Skills & Technologies
          </h2>
          <div className="w-16 h-0.5 bg-gradient-to-r from-blue-500 to-violet-500 mx-auto rounded-full" />
        </motion.div>

        <div className="grid md:grid-cols-2 gap-5">
          {skillGroups.map((group, groupIndex) => (
            <motion.div
              key={group.category}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.1 * groupIndex }}
              className="rounded-2xl border border-white/[0.07] bg-white/[0.025] p-6 backdrop-blur"
            >
              {/* Group header */}
              <div className="flex items-center gap-3 mb-5">
                <span
                  className={`px-3 py-1.5 rounded-xl border text-xs font-bold uppercase tracking-[0.2em] ${headerColorMap[group.color]}`}
                >
                  {group.category}
                </span>
              </div>

              {/* Skills */}
              <div className="flex flex-wrap gap-2">
                {group.skills.map((skill, skillIndex) => (
                  <motion.span
                    key={skill}
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={isInView ? { opacity: 1, scale: 1 } : {}}
                    transition={{
                      duration: 0.3,
                      delay: 0.2 + groupIndex * 0.05 + skillIndex * 0.04,
                    }}
                    whileHover={{ scale: 1.08, y: -2 }}
                    className={`px-3 py-1.5 rounded-full border text-xs font-semibold cursor-default transition-all ${colorMap[group.color]}`}
                  >
                    {skill}
                  </motion.span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>

        {/* Bottom strip */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.5 }}
          className="mt-8 rounded-2xl border border-white/[0.07] bg-white/[0.025] p-6 backdrop-blur text-center"
        >
          <p className="text-sm text-slate-400">
            Passionate about writing{" "}
            <span className="text-white font-medium">clean, maintainable code</span>{" "}
            and building systems that handle real-world complexity at scale.
          </p>
        </motion.div>
      </div>
    </section>
  );
}
