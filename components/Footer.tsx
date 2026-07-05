import { Globe2, Linkedin, Instagram, Youtube } from "lucide-react";

const FOOTER_LINKS = {
  "Quick Links": [
    { label: "Home", href: "#home" },
    { label: "About", href: "#about" },
    { label: "Contact", href: "#contact" },
  ],
  "Programs": [
    { label: "Coding", href: "#programs" },
    { label: "Artificial Intelligence", href: "#programs" },
    { label: "Robotics", href: "#programs" },
    { label: "STEM Education", href: "#programs" },
  ],
  "Competition": [
    { label: "About IJCC", href: "#ijcc" },
    { label: "Timeline", href: "#ijcc" },
    { label: "Register", href: "#ijcc" },
  ],
};

export default function Footer() {
  return (
    <footer className="border-t border-white/8 bg-navy-950 pt-16">
      <div className="mx-auto max-w-7xl px-6 lg:px-10">
        <div className="grid grid-cols-1 gap-12 pb-12 sm:grid-cols-2 lg:grid-cols-4">
          <div>
            <div className="flex items-center gap-2.5">
              <span className="flex h-9 w-9 items-center justify-center rounded-lg border border-gold-500/40 bg-navy-900">
                <Globe2 className="h-5 w-5 text-gold-400" strokeWidth={1.75} />
              </span>
              <span className="font-display text-lg font-semibold text-white">
                Tech<span className="text-gold-400">Nova</span>
              </span>
            </div>
            <p className="mt-4 text-sm leading-relaxed text-white/50">
              Empowering the next generation of innovators through coding, AI,
              robotics, and international competitions.
            </p>
            <div className="mt-5 flex gap-3">
              {[Linkedin, Instagram, Youtube].map((Icon, i) => (
                <a
                  key={i}
                  href="#"
                  className="flex h-9 w-9 items-center justify-center rounded-lg border border-white/10 text-white/50 transition-colors hover:border-gold-500/30 hover:text-gold-400"
                >
                  <Icon className="h-4 w-4" strokeWidth={1.6} />
                </a>
              ))}
            </div>
          </div>

          {Object.entries(FOOTER_LINKS).map(([title, links]) => (
            <div key={title}>
              <h4 className="font-display text-sm font-semibold uppercase tracking-[0.15em] text-white/40">
                {title}
              </h4>
              <ul className="mt-5 space-y-3">
                {links.map((link) => (
                  <li key={link.label}>
                    <a
                      href={link.href}
                      className="text-sm text-white/60 transition-colors hover:text-gold-400"
                    >
                      {link.label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="flex flex-col items-center justify-between gap-4 border-t border-white/8 py-8 sm:flex-row">
          <p className="text-xs text-white/40">
            &copy; {new Date().getFullYear()} TechNova International. All rights reserved.
          </p>
          <p className="text-xs text-white/40">
            technovainternational.com &middot; info@technovainternational.com
          </p>
        </div>
      </div>
    </footer>
  );
}
