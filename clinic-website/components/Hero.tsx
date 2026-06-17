"use client";

import { motion } from "framer-motion";
import { Phone, CalendarCheck, ShieldCheck, Star } from "lucide-react";
import { clinicInfo, achievements } from "@/lib/data";
import DoctorIllustration from "./DoctorIllustration";
import PulseLine from "./PulseLine";

export default function Hero() {
  return (
    <section
      id="home"
      className="relative overflow-hidden bg-mist pt-[120px] pb-20 lg:pt-[150px] lg:pb-28 section-pad"
    >
      {/* faint grid + pulse backdrop */}
      <div className="absolute inset-0 bg-grid-faint [background-size:42px_42px] opacity-60 pointer-events-none" />
      <div className="absolute -top-10 right-0 w-[60%] opacity-[0.06] pointer-events-none">
        <PulseLine stroke="#0B3A57" height={140} />
      </div>

      <div className="relative mx-auto max-w-7xl grid lg:grid-cols-2 gap-14 lg:gap-10 items-center">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease: "easeOut" }}
        >
          <span className="inline-flex items-center gap-2 rounded-full bg-leaf-100 px-4 py-1.5 text-xs font-semibold tracking-wide text-leaf-700 uppercase">
            <ShieldCheck className="h-3.5 w-3.5" />
            MD &middot; 15+ Years of Trusted Practice
          </span>

          <h1 className="mt-6 text-balance text-4xl sm:text-5xl lg:text-[3.4rem] font-display font-semibold leading-[1.12] text-brand-900">
            Attentive, Modern Physician Care for{" "}
            <span className="text-leaf-600">Your Whole Family</span>
          </h1>

          <p className="mt-6 max-w-xl text-base sm:text-lg text-ink/70 leading-relaxed">
            {clinicInfo.doctorName} ({clinicInfo.credentials}) provides
            unhurried general consultations, chronic disease management, and
            preventive care — built around clear communication and real
            follow-through.
          </p>

          <div className="mt-9 flex flex-wrap items-center gap-4">
            <a
              href="#appointment"
              className="group inline-flex items-center gap-2 rounded-full bg-brand-600 px-7 py-3.5 text-sm font-semibold text-white shadow-card hover:bg-brand-700 transition-all hover:-translate-y-0.5"
            >
              <CalendarCheck className="h-[18px] w-[18px]" />
              Book Appointment
            </a>
            <a
              href={`tel:${clinicInfo.phone.replace(/\s/g, "")}`}
              className="inline-flex items-center gap-2 rounded-full border-2 border-leaf-600 px-7 py-3.5 text-sm font-semibold text-leaf-700 hover:bg-leaf-50 transition-all hover:-translate-y-0.5"
            >
              <Phone className="h-[18px] w-[18px]" />
              {clinicInfo.phone}
            </a>
          </div>

          <div className="mt-12 grid grid-cols-2 sm:grid-cols-4 gap-6 max-w-xl">
            {achievements.map((item, i) => (
              <motion.div
                key={item.label}
                initial={{ opacity: 0, y: 12 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.15 + i * 0.08 }}
              >
                <p className="text-2xl font-display font-bold text-brand-700">
                  {item.value}
                </p>
                <p className="text-xs text-ink/60 mt-1 leading-snug">{item.label}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.94 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, ease: "easeOut", delay: 0.1 }}
          className="relative mx-auto w-full max-w-md"
        >
          <div className="absolute -inset-6 rounded-[2.5rem] bg-gradient-to-br from-brand-100 to-leaf-100 -z-10 animate-float" />
          <div className="relative rounded-[2rem] overflow-hidden border border-white shadow-card bg-white">
            <DoctorIllustration className="w-full h-auto" />
          </div>

          <motion.div
            initial={{ opacity: 0, x: -16 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.5 }}
            className="glass-card absolute -left-6 top-10 rounded-2xl px-4 py-3 shadow-glass flex items-center gap-2.5"
          >
            <Star className="h-4 w-4 text-leaf-600 fill-leaf-600" />
            <div>
              <p className="text-sm font-bold text-brand-900 leading-none">4.9/5</p>
              <p className="text-[11px] text-ink/60">Patient Rating</p>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 16 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.65 }}
            className="glass-card absolute -right-4 bottom-10 rounded-2xl px-4 py-3 shadow-glass"
          >
            <p className="text-sm font-bold text-brand-900 leading-none">15+ Years</p>
            <p className="text-[11px] text-ink/60 mt-1">Clinical Experience</p>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
