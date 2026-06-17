"use client";

import { motion } from "framer-motion";
import {
  Stethoscope,
  ClipboardPlus,
  Droplets,
  HeartPulse,
  Thermometer,
  ShieldCheck,
  ArrowUpRight,
  type LucideIcon,
} from "lucide-react";
import { services } from "@/lib/data";

const icons: Record<string, LucideIcon> = {
  Stethoscope,
  ClipboardPlus,
  Droplets,
  HeartPulse,
  Thermometer,
  ShieldCheck,
};

export default function Services() {
  return (
    <section id="services" className="section-pad py-20 lg:py-28 bg-mist relative overflow-hidden">
      <div className="mx-auto max-w-7xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.6 }}
          className="max-w-2xl"
        >
          <span className="text-xs font-semibold tracking-widest text-leaf-600 uppercase">
            What We Treat
          </span>
          <h2 className="mt-3 text-3xl sm:text-4xl font-display font-semibold text-brand-900">
            Care Designed Around Common, Real Health Needs
          </h2>
          <p className="mt-4 text-ink/70 leading-relaxed">
            From a single fever to ongoing chronic disease management, every
            service is delivered with the same level of attention and clinical
            rigor.
          </p>
        </motion.div>

        <div className="mt-14 grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service, i) => {
            const Icon = icons[service.icon];
            return (
              <motion.div
                key={service.title}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.3 }}
                transition={{ duration: 0.5, delay: (i % 3) * 0.1 }}
                className="group glass-card rounded-2xl p-7 shadow-soft hover:shadow-card hover:-translate-y-1.5 transition-all duration-300"
              >
                <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-brand-50 text-brand-600 group-hover:bg-brand-600 group-hover:text-white transition-colors duration-300">
                  <Icon className="h-6 w-6" />
                </div>
                <h3 className="mt-5 font-display font-semibold text-lg text-brand-900">
                  {service.title}
                </h3>
                <p className="mt-2.5 text-sm text-ink/65 leading-relaxed">
                  {service.description}
                </p>
                <a
                  href="#appointment"
                  className="mt-5 inline-flex items-center gap-1.5 text-sm font-semibold text-leaf-600 group-hover:gap-2.5 transition-all"
                >
                  Book this service
                  <ArrowUpRight className="h-4 w-4" />
                </a>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
