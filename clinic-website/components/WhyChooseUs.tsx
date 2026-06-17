"use client";

import { motion } from "framer-motion";
import {
  GraduationCap,
  HeartHandshake,
  Activity,
  IndianRupee,
  CalendarCheck,
  type LucideIcon,
} from "lucide-react";
import { whyChooseUs } from "@/lib/data";
import PulseLine from "./PulseLine";

const icons: Record<string, LucideIcon> = {
  GraduationCap,
  HeartHandshake,
  Activity,
  IndianRupee,
  CalendarCheck,
};

export default function WhyChooseUs() {
  return (
    <section id="why-us" className="section-pad py-20 lg:py-28 bg-white">
      <div className="mx-auto max-w-7xl">
        <div className="grid lg:grid-cols-[0.9fr_1.1fr] gap-14 items-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.6 }}
          >
            <span className="text-xs font-semibold tracking-widest text-leaf-600 uppercase">
              Why Patients Choose Us
            </span>
            <h2 className="mt-3 text-3xl sm:text-4xl font-display font-semibold text-brand-900 text-balance">
              Healthcare That Respects Your Time and Your Trust
            </h2>
            <p className="mt-4 text-ink/70 leading-relaxed max-w-md">
              A clinic built around accessibility and follow-through — not
              just a single appointment, but ongoing care you can rely on.
            </p>
            <PulseLine className="w-44 mt-8" height={28} stroke="#176FA8" />
          </motion.div>

          <div className="grid sm:grid-cols-2 gap-5">
            {whyChooseUs.map((item, i) => {
              const Icon = icons[item.icon];
              return (
                <motion.div
                  key={item.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, amount: 0.3 }}
                  transition={{ duration: 0.5, delay: i * 0.08 }}
                  className={`rounded-2xl border border-brand-50 bg-mist p-6 hover:bg-white hover:shadow-card hover:border-leaf-100 transition-all duration-300 ${
                    i === whyChooseUs.length - 1 ? "sm:col-span-2" : ""
                  }`}
                >
                  <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-leaf-100 text-leaf-700">
                    <Icon className="h-[22px] w-[22px]" />
                  </div>
                  <h3 className="mt-4 font-display font-semibold text-brand-900">
                    {item.title}
                  </h3>
                  <p className="mt-2 text-sm text-ink/65 leading-relaxed">
                    {item.description}
                  </p>
                </motion.div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
