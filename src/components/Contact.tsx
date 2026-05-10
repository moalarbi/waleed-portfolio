"use client";

import { useRef, useState } from "react";
import { motion, useInView } from "framer-motion";
import { Mail, Phone, MapPin, Linkedin, Globe, Send, CheckCircle } from "lucide-react";

const contactInfo = [
  {
    icon: Mail,
    label: "Email",
    value: "waleedinfo97@gmail.com",
    href: "mailto:waleedinfo97@gmail.com",
  },
  {
    icon: Phone,
    label: "Phone",
    value: "+966 558 501 254",
    href: "tel:+966558501254",
  },
  {
    icon: MapPin,
    label: "Location",
    value: "Saudi Arabia",
    href: null,
  },
  {
    icon: Linkedin,
    label: "LinkedIn",
    value: "waleed-ishag-babb01206",
    href: "https://www.linkedin.com/in/waleed-ishag-babb01206",
  },
  {
    icon: Globe,
    label: "Website",
    value: "waleedinfo.com",
    href: "https://waleedinfo.com",
  },
];

export default function Contact() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-80px" });

  const [form, setForm] = useState({ name: "", email: "", subject: "", message: "" });
  const [sent, setSent] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const mailtoLink = `mailto:waleedinfo97@gmail.com?subject=${encodeURIComponent(
      form.subject || "Portfolio Contact"
    )}&body=${encodeURIComponent(
      `Name: ${form.name}\nEmail: ${form.email}\n\n${form.message}`
    )}`;
    window.open(mailtoLink, "_blank");
    setSent(true);
    setTimeout(() => setSent(false), 4000);
  };

  return (
    <section id="contact" ref={ref} className="px-6 py-24 relative">
      <div className="mx-auto max-w-5xl">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <p className="text-xs font-bold uppercase tracking-[0.35em] text-blue-400 mb-3">
            Get In Touch
          </p>
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            Let&apos;s Work Together
          </h2>
          <div className="w-16 h-0.5 bg-gradient-to-r from-blue-500 to-violet-500 mx-auto rounded-full mb-6" />
          <p className="text-slate-400 max-w-lg mx-auto text-sm leading-relaxed">
            Open to Senior Backend, Full Stack, or Tech Lead roles. Remote or
            on-site in Saudi Arabia. Let&apos;s build something great together.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-8">
          {/* Contact info cards */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="space-y-3"
          >
            <h3 className="text-white font-bold text-base mb-5">
              Contact Information
            </h3>
            {contactInfo.map((item, index) => {
              const Icon = item.icon;
              const Inner = (
                <div className="flex items-center gap-4 p-4 rounded-2xl border border-white/[0.07] bg-white/[0.025] hover:border-blue-500/20 hover:bg-blue-500/[0.04] transition-all group">
                  <div className="w-10 h-10 rounded-xl bg-blue-500/10 border border-blue-500/20 flex items-center justify-center shrink-0 group-hover:bg-blue-500/15 transition-colors">
                    <Icon className="w-4 h-4 text-blue-400" />
                  </div>
                  <div className="min-w-0">
                    <p className="text-[10px] text-slate-500 font-semibold uppercase tracking-wider mb-0.5">
                      {item.label}
                    </p>
                    <p className="text-sm text-white font-medium truncate">{item.value}</p>
                  </div>
                </div>
              );
              return item.href ? (
                <motion.a
                  key={index}
                  href={item.href}
                  target={item.href.startsWith("http") ? "_blank" : undefined}
                  rel="noopener noreferrer"
                  initial={{ opacity: 0, x: -20 }}
                  animate={isInView ? { opacity: 1, x: 0 } : {}}
                  transition={{ duration: 0.4, delay: 0.3 + index * 0.08 }}
                  className="block"
                >
                  {Inner}
                </motion.a>
              ) : (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: -20 }}
                  animate={isInView ? { opacity: 1, x: 0 } : {}}
                  transition={{ duration: 0.4, delay: 0.3 + index * 0.08 }}
                >
                  {Inner}
                </motion.div>
              );
            })}
          </motion.div>

          {/* Form */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.7, delay: 0.3 }}
          >
            <div className="rounded-2xl border border-white/[0.07] bg-white/[0.025] p-7 backdrop-blur">
              <h3 className="text-white font-bold text-base mb-6">
                Send a Message
              </h3>

              {sent ? (
                <motion.div
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  className="flex flex-col items-center justify-center py-12 gap-3"
                >
                  <CheckCircle className="w-12 h-12 text-green-400" />
                  <p className="text-white font-semibold">Email client opened!</p>
                  <p className="text-slate-500 text-sm text-center">
                    Your message is ready to send in your email client.
                  </p>
                </motion.div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-4">
                  <div className="grid sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs text-slate-500 mb-1.5 font-semibold uppercase tracking-wider">
                        Name
                      </label>
                      <input
                        type="text"
                        required
                        value={form.name}
                        onChange={(e) => setForm({ ...form, name: e.target.value })}
                        className="w-full px-4 py-3 rounded-xl border border-white/[0.07] bg-white/[0.03] text-white text-sm placeholder:text-slate-600 focus:outline-none focus:border-blue-500/40 focus:bg-blue-500/[0.04] transition-all"
                        placeholder="Your name"
                      />
                    </div>
                    <div>
                      <label className="block text-xs text-slate-500 mb-1.5 font-semibold uppercase tracking-wider">
                        Email
                      </label>
                      <input
                        type="email"
                        required
                        value={form.email}
                        onChange={(e) => setForm({ ...form, email: e.target.value })}
                        className="w-full px-4 py-3 rounded-xl border border-white/[0.07] bg-white/[0.03] text-white text-sm placeholder:text-slate-600 focus:outline-none focus:border-blue-500/40 focus:bg-blue-500/[0.04] transition-all"
                        placeholder="your@email.com"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-xs text-slate-500 mb-1.5 font-semibold uppercase tracking-wider">
                      Subject
                    </label>
                    <input
                      type="text"
                      value={form.subject}
                      onChange={(e) => setForm({ ...form, subject: e.target.value })}
                      className="w-full px-4 py-3 rounded-xl border border-white/[0.07] bg-white/[0.03] text-white text-sm placeholder:text-slate-600 focus:outline-none focus:border-blue-500/40 focus:bg-blue-500/[0.04] transition-all"
                      placeholder="Job opportunity / Project inquiry"
                    />
                  </div>

                  <div>
                    <label className="block text-xs text-slate-500 mb-1.5 font-semibold uppercase tracking-wider">
                      Message
                    </label>
                    <textarea
                      required
                      rows={5}
                      value={form.message}
                      onChange={(e) => setForm({ ...form, message: e.target.value })}
                      className="w-full px-4 py-3 rounded-xl border border-white/[0.07] bg-white/[0.03] text-white text-sm placeholder:text-slate-600 focus:outline-none focus:border-blue-500/40 focus:bg-blue-500/[0.04] transition-all resize-none"
                      placeholder="Tell me about your project or role..."
                    />
                  </div>

                  <motion.button
                    type="submit"
                    whileHover={{ scale: 1.02, y: -2 }}
                    whileTap={{ scale: 0.98 }}
                    className="w-full flex items-center justify-center gap-2 px-6 py-3.5 rounded-xl bg-blue-500 hover:bg-blue-600 text-white text-sm font-semibold transition-all hover:shadow-xl hover:shadow-blue-500/25"
                  >
                    <Send className="w-4 h-4" />
                    Send Message
                  </motion.button>
                </form>
              )}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
