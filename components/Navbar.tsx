"use client";

import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, Globe2 } from "lucide-react";

const NAV_LINKS = [
  { label: "Home", href: "#home" },
  { label: "About", href: "#about" },
  { label: "Programs", href: "#programs" },
  { label: "IJCC", href: "#ijcc" },
  { label: "Contact", href: "#contact" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 z-50 w-full transition-all duration-300 ${
        scrolled
          ? "border-b border-gold-500/10 bg-navy-950/80 backdrop-blur-xl"
          : "bg-transparent"
      }`}
    >
      <nav className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4 lg:px-10">
        <a href="#home" className="flex items-center gap-2.5 group">
          <span className="relative flex h-9 w-9 items-center justify-center rounded-lg border border-gold-500/40 bg-navy-900">
            <Globe2 className="h-5 w-5 text-gold-400" strokeWidth={1.75} />
          </span>
          <span className="font-display text-lg font-semibold tracking-tight text-white">
            Tech<span className="text-gold-400">Nova</span>
            <span className="ml-1 hidden text-sm font-medium text-white/50 sm:inline">
              International
            </span>
          </span>
        </a>

        <div className="hidden items-center gap-9 lg:flex">
          {NAV_LINKS.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="text-sm font-medium text-white/70 transition-colors hover:text-gold-400"
            >
              {link.label}
            </a>
          ))}
        </div>

        <div className="hidden lg:block">
          <a
            href="#ijcc"
            className="rounded-full bg-gold-500 px-6 py-2.5 text-sm font-semibold text-navy-950 shadow-[0_0_20px_rgba(201,162,39,0.35)] transition-all hover:bg-gold-400 hover:shadow-[0_0_28px_rgba(201,162,39,0.5)]"
          >
            Register
          </a>
        </div>

        <button
          aria-label={open ? "Close menu" : "Open menu"}
          onClick={() => setOpen((v) => !v)}
          className="flex h-10 w-10 items-center justify-center rounded-lg border border-white/10 text-white lg:hidden"
        >
          {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
        </button>
      </nav>

      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.25, ease: "easeInOut" }}
            className="overflow-hidden border-t border-white/10 bg-navy-950 lg:hidden"
          >
            <div className="flex flex-col gap-1 px-6 py-4">
              {NAV_LINKS.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  onClick={() => setOpen(false)}
                  className="rounded-lg px-3 py-3 text-base font-medium text-white/80 hover:bg-white/5 hover:text-gold-400"
                >
                  {link.label}
                </a>
              ))}
              <a
                href="#ijcc"
                onClick={() => setOpen(false)}
                className="mt-2 rounded-full bg-gold-500 px-6 py-3 text-center text-sm font-semibold text-navy-950"
              >
                Register
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
