"use client";

import { motion, Variants } from "framer-motion";
import { Badge } from "@/components/ui/badge";
import {
  ArrowUpRight,
  Linkedin,
  Mail,
  MapPin,
  Phone,
  Globe,
  Download,
} from "lucide-react";

const socialLinks = [
  {
    label: "LinkedIn",
    handle: "waleed-ishag",
    href: "https://www.linkedin.com/in/waleed-ishag-babb01206",
    icon: Linkedin,
  },
  {
    label: "Website",
    handle: "waleedinfo.com",
    href: "https://waleedinfo.com",
    icon: Globe,
  },
  {
    label: "Email",
    handle: "waleedinfo97@gmail.com",
    href: "mailto:waleedinfo97@gmail.com",
    icon: Mail,
  },
  {
    label: "Phone",
    handle: "+966 558 501 254",
    href: "tel:+966558501254",
    icon: Phone,
  },
];

const highlights = [
  {
    title: "Core Expertise",
    description:
      "Laravel APIs, ERP Systems, WebSockets, Pusher, Event Broadcasting, Payment Gateways, and scalable backend architecture.",
  },
  {
    title: "Notable Projects",
    description:
      "Golden Ultra, Ehtimam, and Batal — production-grade apps across backend, dashboard, and API layers for Emdadat Alatta.",
  },
  {
    title: "Availability",
    description:
      "Open to Senior Backend, Full Stack, or Tech Lead roles. Remote or on-site across Saudi Arabia.",
  },
];

const listVariants: Variants = {
  hidden: { opacity: 0, y: 16 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.5, staggerChildren: 0.08 },
  },
};

const itemVariants: Variants = {
  hidden: { opacity: 0, y: 12 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.35 } },
};

export default function Hero() {
  return (
    <section
      id="home"
      className="relative min-h-screen overflow-hidden px-6 py-28 lg:py-36 flex items-center"
    >
      {/* Animated background blobs */}
      <div className="fixed inset-0 -z-10 overflow-hidden">
        <div className="absolute top-[-10%] left-[20%] w-[500px] h-[500px] bg-blue-600/[0.12] rounded-full blur-[120px] animate-blob" />
        <div className="absolute top-[30%] right-[15%] w-[400px] h-[400px] bg-indigo-600/[0.10] rounded-full blur-[120px] animate-blob-delayed" />
        <div className="absolute bottom-[20%] left-[30%] w-[350px] h-[350px] bg-violet-600/[0.08] rounded-full blur-[100px] animate-blob-slow" />
      </div>

      <div className="mx-auto max-w-6xl w-full">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="relative overflow-hidden rounded-3xl border border-white/[0.08] bg-white/[0.025] p-8 backdrop-blur-2xl md:p-12 blue-glow"
        >
          {/* Inner gradient overlay */}
          <div className="absolute inset-0 bg-gradient-to-br from-blue-600/[0.06] via-transparent to-violet-600/[0.04] pointer-events-none rounded-3xl" />

          <div className="relative grid gap-10 lg:grid-cols-2 lg:gap-16">
            {/* ─── Left Column ─── */}
            <div className="space-y-8 order-2 lg:order-1">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.2 }}
              >
                <Badge
                  variant="outline"
                  className="inline-flex items-center gap-2 rounded-full border-green-500/30 bg-green-500/10 px-4 py-1.5 text-xs uppercase tracking-[0.3em] text-green-300"
                >
                  <span className="w-2 h-2 rounded-full bg-green-400 animate-pulse" />
                  Available for Work
                </Badge>
              </motion.div>

              <div className="space-y-3">
                <motion.h1
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.3 }}
                  className="text-4xl md:text-5xl font-bold tracking-tight text-white"
                >
                  Waleed Ishaq
                </motion.h1>

                <motion.p
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.4 }}
                  className="text-xl font-semibold gradient-text"
                >
                  Senior Laravel Backend Developer
                </motion.p>

                <motion.p
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.45 }}
                  className="text-base text-slate-400 font-medium"
                >
                  Full Stack Developer · ERP & Real-time Systems
                </motion.p>

                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.5 }}
                  className="flex items-center gap-2 text-slate-500 text-sm"
                >
                  <MapPin className="w-4 h-4 text-blue-400" />
                  Saudi Arabia
                </motion.div>
              </div>

              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.55 }}
                className="text-base leading-relaxed text-slate-400 max-w-lg"
              >
                5+ years building scalable backend systems, RESTful APIs, and
                real-time features with WebSockets, queues, and event
                broadcasting. Turning complex business requirements into
                reliable, high-performance solutions.
              </motion.p>

              {/* Highlights */}
              <div className="grid gap-3">
                {highlights.map((item, index) => (
                  <motion.div
                    key={item.title}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: 0.6 + index * 0.1 }}
                    whileHover={{ y: -3, scale: 1.01 }}
                    className="group relative overflow-hidden rounded-2xl border border-white/[0.06] bg-white/[0.02] p-4 backdrop-blur transition-all hover:border-blue-500/20 hover:bg-blue-500/[0.04]"
                  >
                    <p className="text-[10px] font-bold uppercase tracking-[0.3em] text-blue-400/70 mb-1">
                      {item.title}
                    </p>
                    <p className="text-sm leading-relaxed text-slate-400">
                      {item.description}
                    </p>
                  </motion.div>
                ))}
              </div>

              {/* CTA Buttons */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.9 }}
                className="flex flex-wrap gap-3"
              >
                <a
                  href="mailto:waleedinfo97@gmail.com"
                  className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-blue-500 hover:bg-blue-600 text-white text-sm font-semibold transition-all duration-200 hover:shadow-xl hover:shadow-blue-500/30 hover:-translate-y-0.5"
                >
                  <Mail className="w-4 h-4" />
                  Hire Me
                </a>
                <a
                  href="#experience"
                  className="inline-flex items-center gap-2 px-6 py-3 rounded-full border border-white/[0.12] bg-white/[0.04] hover:bg-white/[0.08] text-white text-sm font-semibold transition-all duration-200 hover:-translate-y-0.5"
                >
                  View Experience
                  <ArrowUpRight className="w-4 h-4" />
                </a>
              </motion.div>
            </div>

            {/* ─── Right Column – Profile Card ─── */}
            <div className="relative order-1 lg:order-2">
              <div className="absolute inset-0 rounded-[28px] bg-gradient-to-b from-blue-500/20 via-transparent to-transparent blur-3xl" />
              <div className="relative flex h-full flex-col justify-between overflow-hidden rounded-[24px] border border-white/[0.08] bg-white/[0.03] p-8 backdrop-blur-xl">
                {/* Avatar */}
                <div className="flex flex-col items-center text-center">
                  <motion.div
                    initial={{ opacity: 0, scale: 0.7 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.7, delay: 0.4, type: "spring", stiffness: 100 }}
                    className="relative mb-5"
                  >
                    <div className="absolute inset-0 rounded-full bg-blue-500/30 blur-2xl scale-150" />
                    <div className="relative w-36 h-36 rounded-full border-2 border-blue-500/30 overflow-hidden shadow-2xl shadow-blue-500/20">
                      <img
                        src="/waleed.png"
                        alt="Waleed Ishaq"
                        className="w-full h-full object-cover object-top"
                        onError={(e) => {
                          (e.target as HTMLImageElement).src =
                            "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&q=80&auto=format&fit=crop";
                        }}
                      />
                    </div>
                    {/* Status dot */}
                    <span className="absolute bottom-2 right-2 w-4 h-4 rounded-full bg-green-400 border-2 border-[#020817]" />
                  </motion.div>

                  <motion.div
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: 0.6 }}
                    className="space-y-1 mb-4"
                  >
                    <h3 className="text-2xl font-bold text-white">Waleed Ishaq</h3>
                    <p className="text-xs font-semibold uppercase tracking-[0.3em] text-blue-400/70">
                      Full Stack Developer
                    </p>
                  </motion.div>

                  {/* Stats */}
                  <motion.div
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: 0.7 }}
                    className="flex gap-6 py-4 border-y border-white/[0.06] w-full justify-center mb-2"
                  >
                    {[
                      { value: "5+", label: "Years" },
                      { value: "10+", label: "Projects" },
                      { value: "3+", label: "Companies" },
                    ].map((stat) => (
                      <div key={stat.label} className="text-center">
                        <p className="text-2xl font-bold text-blue-400">{stat.value}</p>
                        <p className="text-xs text-slate-500 mt-0.5">{stat.label}</p>
                      </div>
                    ))}
                  </motion.div>
                </div>

                {/* Social Links */}
                <motion.div
                  variants={listVariants}
                  initial="hidden"
                  animate="visible"
                  className="mt-4 flex flex-col gap-2.5"
                >
                  {socialLinks.map((social) => {
                    const Icon = social.icon;
                    return (
                      <motion.a
                        key={social.label}
                        variants={itemVariants}
                        href={social.href}
                        target={social.href.startsWith("http") ? "_blank" : undefined}
                        rel="noopener noreferrer"
                        className="group flex items-center justify-between rounded-2xl border border-white/[0.06] bg-white/[0.02] px-4 py-3 transition-all hover:-translate-y-0.5 hover:border-blue-500/25 hover:bg-blue-500/[0.05]"
                        whileHover={{ scale: 1.01 }}
                        whileTap={{ scale: 0.99 }}
                      >
                        <div className="flex items-center gap-3">
                          <span className="flex h-9 w-9 items-center justify-center rounded-full border border-white/[0.08] bg-white/[0.04] text-slate-400 group-hover:text-blue-400 group-hover:border-blue-500/30 transition-colors">
                            <Icon className="h-4 w-4" />
                          </span>
                          <div>
                            <p className="text-sm font-semibold text-white">{social.label}</p>
                            <p className="text-xs text-slate-500 truncate max-w-[140px]">{social.handle}</p>
                          </div>
                        </div>
                        <ArrowUpRight className="h-4 w-4 text-slate-600 transition-all group-hover:translate-x-0.5 group-hover:-translate-y-0.5 group-hover:text-blue-400" />
                      </motion.a>
                    );
                  })}
                </motion.div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
