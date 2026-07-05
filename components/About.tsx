"use client";

import { motion } from "framer-motion";
import { Code2, BrainCircuit, Bot, Lightbulb, Rocket, Globe } from "lucide-react";

const PILLARS = [
  {
    icon: Code2,
    title: "Coding",
    desc: "Hands-on programming pathways that take students from first line of code to production-ready projects.",
  },
  {
    icon: BrainCircuit,
    title: "Artificial Intelligence",
    desc: "Applied AI curriculum covering machine learning fundamentals, ethics, and real-world problem solving.",
  },
  {
    icon: Bot,
    title: "Robotics",
    desc: "Design, build, and program robots through guided challenges rooted in engineering fundamentals.",
  },
  {
    icon: Lightbulb,
    title: "Innovation",
    desc: "Structured ideation frameworks that turn student curiosity into original, testable inventions.",
  },
  {
    icon: Rocket,
    title: "Future Skills",
    desc: "Critical thinking, collaboration, and computational literacy for careers that don't exist yet.",
  },
  {
    icon: Globe,
    title: "International Opportunities",
    desc: "A global network of schools and partners connecting students across 10+ countries.",
  },
];

export default function About() {
  return (
    <section id="about" className="relative bg-navy-950 py-28">
      <div className="mx-auto max-w-7xl px-6 lg:px-10">
        <div className="mx-auto max-w-2xl text-center">
          <motion.span
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="font-mono text-xs uppercase tracking-[0.25em] text-gold-400"
          >
            About TechNova
          </motion.span>
          <motion.h2
            initial={{ opacity: 0, y: 14 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.05 }}
            className="mt-4 text-balance font-display text-4xl font-semibold text-white sm:text-5xl"
          >
            Building the world's next generation of innovators
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 14 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="mt-5 text-lg leading-relaxed text-white/60"
          >
            TechNova International is a global education organization dedicated
            to preparing students for a technology-driven future. Through
            structured programs in coding, artificial intelligence, and
            robotics, we partner with schools worldwide to build the skills,
            confidence, and international exposure students need to lead
            tomorrow's industries.
          </motion.p>
        </div>

        <div className="mt-16 grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {PILLARS.map((p, i) => (
            <motion.div
              key={p.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.06, duration: 0.5 }}
              className="group rounded-2xl border border-white/8 bg-navy-900/60 p-7 transition-all hover:-translate-y-1 hover:border-gold-500/30 hover:bg-navy-900"
            >
              <div className="mb-5 flex h-12 w-12 items-center justify-center rounded-xl border border-gold-500/25 bg-gold-500/5 transition-colors group-hover:bg-gold-500/10">
                <p.icon className="h-6 w-6 text-gold-400" strokeWidth={1.6} />
              </div>
              <h3 className="font-display text-xl font-semibold text-white">
                {p.title}
              </h3>
              <p className="mt-2.5 text-sm leading-relaxed text-white/55">
                {p.desc}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
