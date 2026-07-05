"use client";

import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import {
  Globe,
  Puzzle,
  Award,
  Star,
  Megaphone,
  TrendingUp,
  ArrowRight,
} from "lucide-react";

const HIGHLIGHTS = [
  {
    icon: Globe,
    title: "International Participation",
    desc: "Student teams from more than 10 countries compete on one shared platform.",
  },
  {
    icon: Puzzle,
    title: "Coding Challenges",
    desc: "Progressive rounds covering algorithms, logic, and applied problem-solving.",
  },
  {
    icon: Award,
    title: "Certificates",
    desc: "Every participant receives an internationally recognized certificate.",
  },
  {
    icon: Star,
    title: "Awards",
    desc: "Gold, silver, and bronze honors awarded across age divisions.",
  },
  {
    icon: Megaphone,
    title: "Recognition",
    desc: "Winning teams are featured across TechNova's global partner network.",
  },
  {
    icon: TrendingUp,
    title: "Future Opportunities",
    desc: "Pathways to scholarships, mentorships, and advanced TechNova programs.",
  },
];

const TIMELINE = [
  { label: "Registration Opens", detail: "Schools and individual students enroll online." },
  { label: "Qualifying Round", detail: "Online coding assessment across all age divisions." },
  { label: "National Finals", detail: "Top teams from each country compete regionally." },
  { label: "Global Championship", detail: "Finalists compete live for the international title." },
];

function useCountdown(target: string) {
  const [timeLeft, setTimeLeft] = useState({ d: 0, h: 0, m: 0, s: 0 });

  useEffect(() => {
    const targetDate = new Date(target).getTime();
    const tick = () => {
      const diff = Math.max(targetDate - Date.now(), 0);
      setTimeLeft({
        d: Math.floor(diff / 86400000),
        h: Math.floor((diff / 3600000) % 24),
        m: Math.floor((diff / 60000) % 60),
        s: Math.floor((diff / 1000) % 60),
      });
    };
    tick();
    const id = setInterval(tick, 1000);
    return () => clearInterval(id);
  }, [target]);

  return timeLeft;
}

export default function Competition() {
  const { d, h, m, s } = useCountdown("2026-03-15T09:00:00");

  return (
    <section
      id="ijcc"
      className="relative overflow-hidden bg-navy-950 py-28"
    >
      <div className="pointer-events-none absolute inset-0 bg-grid-lines bg-[size:64px_64px] [mask-image:radial-gradient(ellipse_50%_50%_at_50%_0%,black_0%,transparent_70%)]" />

      <div className="relative mx-auto max-w-7xl px-6 lg:px-10">
        <div className="mx-auto max-w-3xl text-center">
          <span className="font-mono text-xs uppercase tracking-[0.25em] text-gold-400">
            Flagship Event
          </span>
          <h2 className="mt-4 text-balance font-display text-4xl font-semibold text-white sm:text-5xl">
            International Junior Coding Championship
          </h2>
          <p className="mt-5 text-lg leading-relaxed text-white/60">
            IJCC brings together the brightest young coders from around the
            world to solve real problems, showcase original projects, and
            represent their schools on an international stage.
          </p>
        </div>

        {/* Countdown */}
        <div className="mt-12 flex justify-center">
          <div className="grid grid-cols-4 gap-3 rounded-2xl border border-gold-500/20 bg-navy-900/60 px-6 py-6 backdrop-blur-sm sm:gap-6 sm:px-10">
            {[
              { label: "Days", value: d },
              { label: "Hours", value: h },
              { label: "Minutes", value: m },
              { label: "Seconds", value: s },
            ].map((unit) => (
              <div key={unit.label} className="text-center">
                <div className="font-mono text-3xl font-semibold text-gold-400 sm:text-4xl">
                  {String(unit.value).padStart(2, "0")}
                </div>
                <div className="mt-1 text-[10px] uppercase tracking-[0.2em] text-white/40">
                  {unit.label}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Highlights */}
        <div className="mt-20 grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {HIGHLIGHTS.map((item, i) => (
            <motion.div
              key={item.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.06 }}
              className="rounded-2xl border border-white/8 bg-navy-900/50 p-7"
            >
              <item.icon className="h-6 w-6 text-gold-400" strokeWidth={1.6} />
              <h3 className="mt-4 font-display text-lg font-semibold text-white">
                {item.title}
              </h3>
              <p className="mt-2 text-sm leading-relaxed text-white/55">
                {item.desc}
              </p>
            </motion.div>
          ))}
        </div>

        {/* Timeline */}
        <div className="mt-24">
          <h3 className="text-center font-display text-2xl font-semibold text-white">
            Championship Timeline
          </h3>
          <div className="mt-12 grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-4">
            {TIMELINE.map((step, i) => (
              <motion.div
                key={step.label}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.08 }}
                className="relative pl-8"
              >
                <div className="absolute left-0 top-1 h-2.5 w-2.5 rounded-full bg-gold-400" />
                {i < TIMELINE.length - 1 && (
                  <div className="absolute left-[4.5px] top-4 h-full w-px bg-gradient-to-b from-gold-500/40 to-transparent sm:hidden" />
                )}
                <div className="font-mono text-xs uppercase tracking-[0.2em] text-gold-400/70">
                  Stage {String(i + 1).padStart(2, "0")}
                </div>
                <div className="mt-2 font-display text-lg font-semibold text-white">
                  {step.label}
                </div>
                <p className="mt-1.5 text-sm text-white/55">{step.detail}</p>
              </motion.div>
            ))}
          </div>
        </div>

        <div className="mt-16 flex justify-center">
          <a
            href="#contact"
            className="group inline-flex items-center gap-2 rounded-full bg-gold-500 px-8 py-4 text-base font-semibold text-navy-950 shadow-[0_0_28px_rgba(201,162,39,0.35)] transition-all hover:bg-gold-400 hover:shadow-[0_0_36px_rgba(201,162,39,0.55)]"
          >
            Register for IJCC 2026
            <ArrowRight className="h-5 w-5 transition-transform group-hover:translate-x-1" />
          </a>
        </div>
      </div>
    </section>
  );
}
