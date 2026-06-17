"use client";

import { motion } from "framer-motion";
import { GraduationCap, Award, Stethoscope, CheckCircle2 } from "lucide-react";
import { clinicInfo, qualifications, specializations, achievements } from "@/lib/data";
import DoctorIllustration from "./DoctorIllustration";
import PulseLine from "./PulseLine";

const fadeUp = {
  initial: { opacity: 0, y: 24 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, amount: 0.3 },
};

export default function AboutDoctor() {
  return (
    <section id="about" className="section-pad py-20 lg:py-28 bg-white">
      <div className="mx-auto max-w-7xl grid lg:grid-cols-[0.85fr_1.15fr] gap-16 items-start">
        <motion.div {...fadeUp} transition={{ duration: 0.6 }} className="relative mx-auto lg:mx-0 max-w-sm">
          <div className="rounded-[2rem] overflow-hidden border border-brand-100 shadow-card bg-mist">
            <DoctorIllustration className="w-full h-auto" />
          </div>
          <div className="absolute -bottom-6 left-1/2 -translate-x-1/2 lg:left-8 lg:translate-x-0 glass-card rounded-2xl px-5 py-3 shadow-glass flex items-center gap-2 whitespace-nowrap">
            <Stethoscope className="h-4 w-4 text-brand-600" />
            <span className="text-sm font-semibold text-brand-900">{clinicInfo.credentials}</span>
          </div>
        </motion.div>

        <div>
          <motion.div {...fadeUp} transition={{ duration: 0.6 }}>
            <span className="text-xs font-semibold tracking-widest text-leaf-600 uppercase">
              About the Doctor
            </span>
            <h2 className="mt-3 text-3xl sm:text-4xl font-display font-semibold text-brand-900">
              Meet {clinicInfo.doctorName}
            </h2>
            <p className="mt-5 text-ink/70 leading-relaxed max-w-2xl">
              With over 15 years of clinical experience, {clinicInfo.doctorName}{" "}
              has built a practice on careful diagnosis, clear explanations,
              and consistent follow-up — treating patients as partners in
              their own long-term health rather than rushing through a single
              visit.
            </p>
          </motion.div>

          <PulseLine className="w-40 mt-6" height={26} stroke="#2EA86E" />

          <div className="mt-10 grid sm:grid-cols-2 gap-10">
            <motion.div {...fadeUp} transition={{ duration: 0.6, delay: 0.1 }}>
              <h3 className="flex items-center gap-2 font-display font-semibold text-brand-900 text-lg">
                <GraduationCap className="h-5 w-5 text-brand-600" />
                Qualifications
              </h3>
              <ul className="mt-4 space-y-3">
                {qualifications.map((q) => (
                  <li key={q} className="flex items-start gap-2.5 text-sm text-ink/75">
                    <CheckCircle2 className="h-4 w-4 mt-0.5 text-leaf-600 shrink-0" />
                    {q}
                  </li>
                ))}
              </ul>
            </motion.div>

            <motion.div {...fadeUp} transition={{ duration: 0.6, delay: 0.18 }}>
              <h3 className="flex items-center gap-2 font-display font-semibold text-brand-900 text-lg">
                <Award className="h-5 w-5 text-brand-600" />
                Specializations
              </h3>
              <ul className="mt-4 space-y-3">
                {specializations.map((s) => (
                  <li key={s} className="flex items-start gap-2.5 text-sm text-ink/75">
                    <CheckCircle2 className="h-4 w-4 mt-0.5 text-leaf-600 shrink-0" />
                    {s}
                  </li>
                ))}
              </ul>
            </motion.div>
          </div>

          <motion.div
            {...fadeUp}
            transition={{ duration: 0.6, delay: 0.24 }}
            className="mt-12 grid grid-cols-2 sm:grid-cols-4 gap-4"
          >
            {achievements.map((a) => (
              <div
                key={a.label}
                className="rounded-2xl bg-mist border border-brand-50 px-4 py-5 text-center hover:shadow-soft transition-shadow"
              >
                <p className="text-xl sm:text-2xl font-display font-bold text-brand-700">{a.value}</p>
                <p className="text-[11px] sm:text-xs text-ink/60 mt-1 leading-snug">{a.label}</p>
              </div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
