"use client";

import { motion } from "framer-motion";
import { Mail, MessageCircle, Globe2 } from "lucide-react";

export default function Contact() {
  return (
    <section id="contact" className="relative bg-navy-950 py-28">
      <div className="mx-auto max-w-5xl px-6 lg:px-10">
        <div className="mx-auto max-w-2xl text-center">
          <span className="font-mono text-xs uppercase tracking-[0.25em] text-gold-400">
            Get in Touch
          </span>
          <h2 className="mt-4 text-balance font-display text-4xl font-semibold text-white sm:text-5xl">
            Let's bring TechNova to your school
          </h2>
          <p className="mt-5 text-lg text-white/60">
            Whether you're a principal, parent, sponsor, or partner, our team
            is ready to help you get started.
          </p>
        </div>

        <div className="mt-16 grid grid-cols-1 gap-5 sm:grid-cols-3">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="rounded-2xl border border-white/8 bg-navy-900/60 p-8 text-center"
          >
            <Mail className="mx-auto h-7 w-7 text-gold-400" strokeWidth={1.6} />
            <h3 className="mt-4 font-display text-lg font-semibold text-white">
              Email Us
            </h3>
            <p className="mt-2 text-sm text-white/55">info@technovainternational.com</p>
            <a
              href="mailto:info@technovainternational.com"
              className="mt-5 inline-block rounded-full border border-gold-500/30 px-5 py-2.5 text-sm font-semibold text-gold-400 transition-colors hover:bg-gold-500/10"
            >
              Send Email
            </a>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.08 }}
            className="rounded-2xl border border-white/8 bg-navy-900/60 p-8 text-center"
          >
            <MessageCircle className="mx-auto h-7 w-7 text-gold-400" strokeWidth={1.6} />
            <h3 className="mt-4 font-display text-lg font-semibold text-white">
              WhatsApp
            </h3>
            <p className="mt-2 text-sm text-white/55">Chat with our admissions team</p>
            <a
              href="https://wa.me/10000000000"
              target="_blank"
              rel="noopener noreferrer"
              className="mt-5 inline-block rounded-full border border-gold-500/30 px-5 py-2.5 text-sm font-semibold text-gold-400 transition-colors hover:bg-gold-500/10"
            >
              Open WhatsApp
            </a>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.16 }}
            className="rounded-2xl border border-white/8 bg-navy-900/60 p-8 text-center"
          >
            <Globe2 className="mx-auto h-7 w-7 text-gold-400" strokeWidth={1.6} />
            <h3 className="mt-4 font-display text-lg font-semibold text-white">
              Website
            </h3>
            <p className="mt-2 text-sm text-white/55">technovainternational.com</p>
            <a
              href="https://technovainternational.com"
              target="_blank"
              rel="noopener noreferrer"
              className="mt-5 inline-block rounded-full border border-gold-500/30 px-5 py-2.5 text-sm font-semibold text-gold-400 transition-colors hover:bg-gold-500/10"
            >
              Visit Site
            </a>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
