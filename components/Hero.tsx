"use client";

import { motion } from "framer-motion";
import { ArrowRight, MessageCircle, ChevronDown } from "lucide-react";

const PARTICLES = Array.from({ length: 28 }).map((_, i) => ({
  id: i,
  left: (i * 37) % 100,
  top: (i * 53) % 100,
  size: 1 + (i % 3),
  duration: 6 + (i % 5),
  delay: (i % 7) * 0.6,
}));

const COUNTRIES = [
  "🇺🇸 United States",
  "🇬🇧 United Kingdom",
  "🇦🇪 UAE",
  "🇮🇳 India",
  "🇨🇦 Canada",
  "🇦🇺 Australia",
  "🇸🇬 Singapore",
  "🇿🇦 South Africa",
  "🇩🇪 Germany",
  "🇧🇷 Brazil",
  "🇯🇵 Japan",
  "🇰🇪 Kenya",
];

export default function Hero() {
  return (
    <section
      id="home"
      className="relative flex min-h-screen flex-col justify-center overflow-hidden bg-navy-950 pt-24"
    >
      {/* Animated gradient background */}
      <div className="pointer-events-none absolute inset-0">
        <motion.div
          animate={{ opacity: [0.6, 0.9, 0.6] }}
          transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
          className="absolute -left-40 -top-40 h-[36rem] w-[36rem] rounded-full bg-navy-700/50 blur-[120px]"
        />
        <motion.div
          animate={{ opacity: [0.4, 0.7, 0.4] }}
          transition={{ duration: 10, repeat: Infinity, ease: "easeInOut", delay: 1 }}
          className="absolute -bottom-40 -right-20 h-[30rem] w-[30rem] rounded-full bg-gold-500/10 blur-[130px]"
        />
        <div className="absolute inset-0 bg-grid-lines bg-[size:56px_56px] [mask-image:radial-gradient(ellipse_60%_60%_at_50%_30%,black_10%,transparent_75%)]" />
      </div>

      {/* Particles */}
      <div className="pointer-events-none absolute inset-0">
        {PARTICLES.map((p) => (
          <motion.span
            key={p.id}
            className="absolute rounded-full bg-gold-300/60"
            style={{
              left: `${p.left}%`,
              top: `${p.top}%`,
              width: p.size * 3,
              height: p.size * 3,
            }}
            animate={{ y: [0, -22, 0], opacity: [0.2, 0.8, 0.2] }}
            transition={{
              duration: p.duration,
              delay: p.delay,
              repeat: Infinity,
              ease: "easeInOut",
            }}
          />
        ))}
      </div>

      <div className="relative z-10 mx-auto flex w-full max-w-5xl flex-col items-center px-6 text-center">
        <motion.div
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="mb-8 inline-flex items-center gap-2 rounded-full border border-gold-500/30 bg-navy-900/60 px-4 py-1.5 backdrop-blur-sm"
        >
          <span className="h-1.5 w-1.5 animate-pulseGlow rounded-full bg-gold-400" />
          <span className="font-mono text-xs tracking-wide text-gold-300">
            International Junior Coding Championship 2026
          </span>
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.1 }}
          className="text-balance font-display text-5xl font-semibold leading-[1.05] tracking-tight text-white sm:text-6xl md:text-7xl"
        >
          TechNova <span className="text-gold-400">International</span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.2 }}
          className="mt-6 max-w-2xl text-balance text-lg text-white/60 sm:text-xl"
        >
          Empowering the Next Generation of Innovators
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.3 }}
          className="mt-10 flex flex-col items-center gap-4 sm:flex-row"
        >
          <a
            href="#ijcc"
            className="group inline-flex items-center gap-2 rounded-full bg-gold-500 px-7 py-3.5 text-sm font-semibold text-navy-950 shadow-[0_0_24px_rgba(201,162,39,0.35)] transition-all hover:bg-gold-400 hover:shadow-[0_0_32px_rgba(201,162,39,0.55)]"
          >
            Register Now
            <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
          </a>
          <a
            href="#about"
            className="inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/5 px-7 py-3.5 text-sm font-semibold text-white backdrop-blur-sm transition-all hover:border-white/30 hover:bg-white/10"
          >
            Learn More
          </a>
          <a
            href="https://wa.me/10000000000"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 rounded-full border border-emerald-400/20 bg-emerald-400/5 px-7 py-3.5 text-sm font-semibold text-emerald-300 backdrop-blur-sm transition-all hover:border-emerald-400/40 hover:bg-emerald-400/10"
          >
            <MessageCircle className="h-4 w-4" />
            Join WhatsApp
          </a>
        </motion.div>
      </div>

      {/* Signature element: live scoreboard-style country ticker */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.8, delay: 0.5 }}
        className="relative z-10 mt-16 w-full border-y border-white/5 bg-navy-900/40 py-3 backdrop-blur-sm"
      >
        <div className="mb-1.5 text-center font-mono text-[10px] uppercase tracking-[0.25em] text-white/30">
          Competing Nations — Live Registration Feed
        </div>
        <div className="flex overflow-hidden">
          <div className="flex shrink-0 animate-ticker gap-10 pr-10">
            {[...COUNTRIES, ...COUNTRIES].map((c, i) => (
              <span
                key={i}
                className="whitespace-nowrap font-mono text-sm text-white/50"
              >
                {c}
              </span>
            ))}
          </div>
          <div aria-hidden className="flex shrink-0 animate-ticker gap-10 pr-10">
            {[...COUNTRIES, ...COUNTRIES].map((c, i) => (
              <span
                key={i}
                className="whitespace-nowrap font-mono text-sm text-white/50"
              >
                {c}
              </span>
            ))}
          </div>
        </div>
      </motion.div>

      <motion.a
        href="#about"
        aria-label="Scroll to About section"
        animate={{ y: [0, 8, 0] }}
        transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
        className="absolute bottom-6 left-1/2 z-10 -translate-x-1/2 text-white/30"
      >
        <ChevronDown className="h-6 w-6" />
      </motion.a>
    </section>
  );
}
