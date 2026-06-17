"use client";

import { motion } from "framer-motion";
import { MapPin, Phone, Clock, Navigation } from "lucide-react";
import { clinicInfo } from "@/lib/data";

export default function ClinicInfoSection() {
  return (
    <section className="section-pad py-20 lg:py-28 bg-white">
      <div className="mx-auto max-w-7xl grid lg:grid-cols-[0.85fr_1.15fr] gap-12 items-start">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.6 }}
        >
          <span className="text-xs font-semibold tracking-widest text-leaf-600 uppercase">
            Visit the Clinic
          </span>
          <h2 className="mt-3 text-3xl sm:text-4xl font-display font-semibold text-brand-900">
            Find Us &amp; Plan Your Visit
          </h2>

          <div className="mt-8 space-y-5">
            <div className="flex items-start gap-3.5">
              <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-brand-50 text-brand-600">
                <MapPin className="h-5 w-5" />
              </span>
              <div>
                <p className="text-sm font-semibold text-brand-900">Clinic Address</p>
                <p className="text-sm text-ink/65 mt-0.5">{clinicInfo.address}</p>
              </div>
            </div>

            <div className="flex items-start gap-3.5">
              <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-brand-50 text-brand-600">
                <Phone className="h-5 w-5" />
              </span>
              <div>
                <p className="text-sm font-semibold text-brand-900">Phone</p>
                <a href={`tel:${clinicInfo.phone.replace(/\s/g, "")}`} className="text-sm text-ink/65 mt-0.5 hover:text-brand-600">
                  {clinicInfo.phone}
                </a>
              </div>
            </div>

            <div className="flex items-start gap-3.5">
              <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-leaf-100 text-leaf-700">
                <Clock className="h-5 w-5" />
              </span>
              <div>
                <p className="text-sm font-semibold text-brand-900">Working Hours</p>
                {clinicInfo.workingHours.map((h) => (
                  <p key={h.day} className="text-sm text-ink/65 mt-0.5">
                    <span className="font-medium text-ink/80">{h.day}:</span> {h.time}
                  </p>
                ))}
              </div>
            </div>
          </div>

          <a
            href={`https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(clinicInfo.address)}`}
            target="_blank"
            rel="noopener noreferrer"
            className="mt-8 inline-flex items-center gap-2 rounded-full bg-brand-600 px-6 py-3 text-sm font-semibold text-white hover:bg-brand-700 transition-colors"
          >
            <Navigation className="h-4 w-4" />
            Get Directions
          </a>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.97 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.6 }}
          className="rounded-[1.75rem] overflow-hidden border border-brand-100 shadow-card h-[360px] lg:h-[460px]"
        >
          {/* Replace the src below with your clinic's exact Google Maps embed URL */}
          <iframe
            src={clinicInfo.mapsEmbedSrc}
            width="100%"
            height="100%"
            style={{ border: 0 }}
            allowFullScreen
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            title="Clinic location map"
          />
        </motion.div>
      </div>
    </section>
  );
}
