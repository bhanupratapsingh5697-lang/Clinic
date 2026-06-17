"use client";

import { motion } from "framer-motion";
import { Star, Quote } from "lucide-react";
import { testimonials } from "@/lib/data";

export default function Testimonials() {
  return (
    <section id="testimonials" className="section-pad py-20 lg:py-28 bg-gradient-to-b from-mist to-white">
      <div className="mx-auto max-w-7xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.6 }}
          className="max-w-2xl"
        >
          <span className="text-xs font-semibold tracking-widest text-leaf-600 uppercase">
            Patient Stories
          </span>
          <h2 className="mt-3 text-3xl sm:text-4xl font-display font-semibold text-brand-900">
            What Our Patients Say
          </h2>
        </motion.div>

        <div className="mt-12 grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {testimonials.map((t, i) => (
            <motion.div
              key={t.name}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.5, delay: i * 0.08 }}
              className="glass-card rounded-2xl p-6 shadow-soft hover:shadow-card transition-shadow flex flex-col"
            >
              <Quote className="h-6 w-6 text-leaf-200 fill-leaf-200" />
              <div className="flex gap-0.5 mt-3">
                {Array.from({ length: 5 }).map((_, idx) => (
                  <Star
                    key={idx}
                    className={`h-3.5 w-3.5 ${
                      idx < t.rating ? "text-leaf-600 fill-leaf-600" : "text-brand-100 fill-brand-100"
                    }`}
                  />
                ))}
              </div>
              <p className="mt-3 text-sm text-ink/75 leading-relaxed flex-1">
                "{t.review}"
              </p>
              <div className="mt-5 pt-4 border-t border-brand-50">
                <p className="text-sm font-semibold text-brand-900">{t.name}</p>
                <p className="text-xs text-ink/50">{t.location}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
