"use client";

import { useEffect, useRef, useState } from "react";
import { motion, useInView } from "framer-motion";
import { Users, School, Map, Boxes } from "lucide-react";

const STATS = [
  { icon: Users, value: 1000, suffix: "+", label: "Students" },
  { icon: School, value: 50, suffix: "+", label: "Schools" },
  { icon: Map, value: 10, suffix: "+", label: "Countries" },
  { icon: Boxes, value: 100, suffix: "+", label: "Projects" },
];

function Counter({ value, suffix }: { value: number; suffix: string }) {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });
  const [display, setDisplay] = useState(0);

  useEffect(() => {
    if (!inView) return;
    const duration = 1600;
    const start = performance.now();
    const step = (now: number) => {
      const progress = Math.min((now - start) / duration, 1);
      const eased = 1 - Math.pow(1 - progress, 3);
      setDisplay(Math.floor(eased * value));
      if (progress < 1) requestAnimationFrame(step);
    };
    requestAnimationFrame(step);
  }, [inView, value]);

  return (
    <span ref={ref} className="font-display text-5xl font-semibold text-white sm:text-6xl">
      {display}
      <span className="text-gold-400">{suffix}</span>
    </span>
  );
}

export default function WhyChoose() {
  return (
    <section className="relative bg-navy-900/40 py-28">
      <div className="mx-auto max-w-7xl px-6 lg:px-10">
        <div className="mx-auto max-w-2xl text-center">
          <span className="font-mono text-xs uppercase tracking-[0.25em] text-gold-400">
            Why Choose TechNova
          </span>
          <h2 className="mt-4 text-balance font-display text-4xl font-semibold text-white sm:text-5xl">
            A track record schools trust
          </h2>
          <p className="mt-5 text-lg text-white/60">
            From a single classroom pilot to a multi-country competition, our
            growth reflects the trust schools and families place in us.
          </p>
        </div>

        <div className="mt-16 grid grid-cols-2 gap-6 lg:grid-cols-4">
          {STATS.map((stat, i) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.08 }}
              className="rounded-2xl border border-white/8 bg-navy-950 px-6 py-10 text-center"
            >
              <stat.icon className="mx-auto mb-4 h-7 w-7 text-gold-400" strokeWidth={1.6} />
              <Counter value={stat.value} suffix={stat.suffix} />
              <div className="mt-2 text-sm font-medium uppercase tracking-[0.15em] text-white/45">
                {stat.label}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
