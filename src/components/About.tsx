"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { Code2, Server, Users, Zap } from "lucide-react";

const stats = [
  { value: "5+", label: "Years Experience", icon: Code2 },
  { value: "10+", label: "Projects Delivered", icon: Server },
  { value: "3+", label: "Companies Worked", icon: Users },
  { value: "RT", label: "Real-time Expert", icon: Zap },
];

export default function About() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section id="about" ref={ref} className="px-6 py-24 relative">
      <div className="mx-auto max-w-6xl">
        {/* Section header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <p className="text-xs font-bold uppercase tracking-[0.35em] text-blue-400 mb-3">
            About Me
          </p>
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            Building Systems That Scale
          </h2>
          <div className="w-16 h-0.5 bg-gradient-to-r from-blue-500 to-violet-500 mx-auto rounded-full" />
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-14 items-center">
          {/* Text */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="space-y-5"
          >
            <p className="text-lg leading-relaxed text-slate-300">
              I&apos;m a{" "}
              <span className="text-blue-400 font-semibold">
                Senior Laravel Backend Developer
              </span>{" "}
              with over 5 years of experience crafting scalable backend systems,
              RESTful APIs, ERP solutions, and admin dashboards for real-world
              production environments.
            </p>
            <p className="text-base leading-relaxed text-slate-400">
              I specialize in real-time application features — WebSockets,
              Pusher, event broadcasting, queues, live notifications, and in-app
              support chat. My work spans payment gateway integrations, order
              tracking, third-party APIs, and database optimization.
            </p>
            <p className="text-base leading-relaxed text-slate-400">
              Currently at{" "}
              <span className="text-white font-medium">Emdadat Alatta</span> in
              Riyadh, I support key production apps including{" "}
              <span className="text-blue-400">Golden Ultra</span>,{" "}
              <span className="text-blue-400">Ehtimam</span>, and{" "}
              <span className="text-blue-400">Batal</span> — building the
              backend infrastructure that keeps them fast, secure, and reliable.
            </p>

            {/* Tech tags */}
            <div className="flex flex-wrap gap-2 pt-2">
              {["Laravel", "PHP", "MySQL", "WebSockets", "REST APIs", "CI/CD"].map(
                (tech) => (
                  <span
                    key={tech}
                    className="px-3 py-1 rounded-full text-xs font-semibold border border-blue-500/25 bg-blue-500/10 text-blue-300"
                  >
                    {tech}
                  </span>
                )
              )}
            </div>
          </motion.div>

          {/* Stats grid */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.7, delay: 0.3 }}
            className="grid grid-cols-2 gap-4"
          >
            {stats.map((stat, index) => {
              const Icon = stat.icon;
              return (
                <motion.div
                  key={stat.label}
                  initial={{ opacity: 0, y: 30 }}
                  animate={isInView ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.5, delay: 0.4 + index * 0.1 }}
                  whileHover={{ y: -6, scale: 1.03 }}
                  className="rounded-2xl border border-white/[0.07] bg-white/[0.03] p-6 text-center hover:border-blue-500/25 hover:bg-blue-500/[0.04] transition-all backdrop-blur"
                >
                  <div className="w-11 h-11 rounded-xl bg-blue-500/10 border border-blue-500/20 flex items-center justify-center mx-auto mb-3">
                    <Icon className="w-5 h-5 text-blue-400" />
                  </div>
                  <p className="text-3xl font-bold text-white mb-1">
                    {stat.value}
                  </p>
                  <p className="text-xs text-slate-500 leading-snug">
                    {stat.label}
                  </p>
                </motion.div>
              );
            })}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
