"use client";

import { motion } from "framer-motion";
import {
  Code2,
  BrainCircuit,
  Bot,
  FlaskConical,
  Hammer,
  Trophy,
  ArrowUpRight,
} from "lucide-react";

const PROGRAMS = [
  {
    icon: Code2,
    title: "Coding",
    desc: "Structured tracks in Python, web development, and computer science fundamentals for ages 8–18.",
  },
  {
    icon: BrainCircuit,
    title: "Artificial Intelligence",
    desc: "Introductory to advanced AI modules covering neural networks, data, and responsible AI use.",
  },
  {
    icon: Bot,
    title: "Robotics",
    desc: "Build and program physical robots using sensor kits, mechanics, and embedded logic.",
  },
  {
    icon: FlaskConical,
    title: "STEM Education",
    desc: "Cross-disciplinary science, technology, engineering, and math curriculum for classrooms.",
  },
  {
    icon: Hammer,
    title: "Innovation Workshops",
    desc: "Intensive workshops guiding student teams from idea to working prototype.",
  },
  {
    icon: Trophy,
    title: "International Competitions",
    desc: "Access to global competitions, including the International Junior Coding Championship.",
  },
];

export default function Programs() {
  return (
    <section id="programs" className="relative bg-navy-900/40 py-28">
      <div className="mx-auto max-w-7xl px-6 lg:px-10">
        <div className="mx-auto max-w-2xl text-center">
          <span className="font-mono text-xs uppercase tracking-[0.25em] text-gold-400">
            Our Programs
          </span>
          <h2 className="mt-4 text-balance font-display text-4xl font-semibold text-white sm:text-5xl">
            Programs designed for every stage of learning
          </h2>
          <p className="mt-5 text-lg text-white/60">
            Each program is built by educators and industry practitioners,
            then adapted to fit the classroom, the after-school lab, or the
            competition stage.
          </p>
        </div>

        <div className="mt-16 grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {PROGRAMS.map((program, i) => (
            <motion.div
              key={program.title}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.06, duration: 0.5 }}
              whileHover={{ y: -6 }}
              className="group relative overflow-hidden rounded-2xl border border-white/8 bg-navy-950 p-8"
            >
              <div className="absolute -right-8 -top-8 h-32 w-32 rounded-full bg-gold-500/0 blur-2xl transition-all duration-500 group-hover:bg-gold-500/10" />
              <div className="relative">
                <div className="mb-6 flex h-14 w-14 items-center justify-center rounded-2xl border border-gold-500/25 bg-gradient-to-br from-navy-800 to-navy-900">
                  <program.icon
                    className="h-7 w-7 text-gold-400"
                    strokeWidth={1.6}
                  />
                </div>
                <h3 className="font-display text-xl font-semibold text-white">
                  {program.title}
                </h3>
                <p className="mt-3 text-sm leading-relaxed text-white/55">
                  {program.desc}
                </p>
                <div className="mt-6 flex items-center gap-1.5 text-sm font-medium text-gold-400 opacity-0 transition-opacity group-hover:opacity-100">
                  Explore program
                  <ArrowUpRight className="h-4 w-4" />
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
