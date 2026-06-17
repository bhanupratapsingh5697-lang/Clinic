"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, Phone, HeartPulse } from "lucide-react";
import { clinicInfo } from "@/lib/data";

const links = [
  { label: "About", href: "#about" },
  { label: "Services", href: "#services" },
  { label: "Why Us", href: "#why-us" },
  { label: "Reviews", href: "#testimonials" },
  { label: "FAQ", href: "#faq" },
  { label: "Contact", href: "#contact" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);
    onScroll();
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 inset-x-0 z-50 transition-all duration-300 ${
        scrolled ? "bg-white/90 backdrop-blur-md shadow-soft" : "bg-transparent"
      }`}
    >
      <nav className="section-pad flex items-center justify-between h-[76px]">
        <a href="#home" className="flex items-center gap-2.5 shrink-0">
          <span className="flex h-10 w-10 items-center justify-center rounded-xl bg-brand-600 text-white">
            <HeartPulse className="h-5 w-5" />
          </span>
          <span className="leading-tight">
            <span className="block font-display font-semibold text-[15px] sm:text-base text-brand-900">
              Dr. Umesh Chahar
            </span>
            <span className="block text-[11px] sm:text-xs text-brand-600 font-medium tracking-wide">
              MD PHYSICIAN
            </span>
          </span>
        </a>

        <div className="hidden lg:flex items-center gap-8">
          {links.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="text-sm font-medium text-ink/70 hover:text-brand-600 transition-colors"
            >
              {link.label}
            </a>
          ))}
        </div>

        <div className="hidden lg:flex items-center gap-3">
          <a
            href={`tel:${clinicInfo.phone.replace(/\s/g, "")}`}
            className="flex items-center gap-2 text-sm font-semibold text-brand-700 hover:text-brand-900 transition-colors"
          >
            <Phone className="h-4 w-4" />
            {clinicInfo.phone}
          </a>
          <a
            href="#appointment"
            className="rounded-full bg-leaf-600 px-5 py-2.5 text-sm font-semibold text-white shadow-soft hover:bg-leaf-700 hover:shadow-card transition-all"
          >
            Book Appointment
          </a>
        </div>

        <button
          aria-label="Toggle menu"
          onClick={() => setOpen((v) => !v)}
          className="lg:hidden flex h-10 w-10 items-center justify-center rounded-lg text-brand-900"
        >
          {open ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
        </button>
      </nav>

      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.25 }}
            className="lg:hidden overflow-hidden bg-white border-t border-brand-100"
          >
            <div className="flex flex-col px-6 py-4 gap-1">
              {links.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  onClick={() => setOpen(false)}
                  className="py-2.5 text-[15px] font-medium text-ink/80 border-b border-brand-50 last:border-none"
                >
                  {link.label}
                </a>
              ))}
              <a
                href="#appointment"
                onClick={() => setOpen(false)}
                className="mt-4 rounded-full bg-leaf-600 px-5 py-3 text-center text-sm font-semibold text-white"
              >
                Book Appointment
              </a>
              <a
                href={`tel:${clinicInfo.phone.replace(/\s/g, "")}`}
                className="mt-2 rounded-full border border-brand-200 px-5 py-3 text-center text-sm font-semibold text-brand-700"
              >
                Call {clinicInfo.phone}
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
