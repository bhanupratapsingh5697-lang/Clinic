"use client";

import { useState, type FormEvent } from "react";
import { motion } from "framer-motion";
import { Phone, MessageCircle, Mail, Send, CheckCircle2, Loader2, User } from "lucide-react";
import { clinicInfo } from "@/lib/data";

type Status = "idle" | "submitting" | "success" | "error";

export default function Contact() {
  const [status, setStatus] = useState<Status>("idle");
  const [form, setForm] = useState({ name: "", email: "", message: "" });

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    setStatus("submitting");
    try {
      const res = await fetch("/api/appointment", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ ...form, phone: "n/a", date: "n/a" }),
      });
      if (!res.ok) throw new Error("failed");
      setStatus("success");
      setForm({ name: "", email: "", message: "" });
    } catch {
      setStatus("error");
    }
  };

  return (
    <section id="contact" className="section-pad py-20 lg:py-28 bg-white">
      <div className="mx-auto max-w-7xl grid lg:grid-cols-[0.85fr_1.15fr] gap-12">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.6 }}
        >
          <span className="text-xs font-semibold tracking-widest text-leaf-600 uppercase">Get in Touch</span>
          <h2 className="mt-3 text-3xl sm:text-4xl font-display font-semibold text-brand-900">
            Have a Question Before You Visit?
          </h2>
          <p className="mt-4 text-ink/70 leading-relaxed max-w-md">
            Reach out directly via call or WhatsApp for a fast response, or
            send a message using the form.
          </p>

          <div className="mt-8 flex flex-wrap gap-4">
            <a
              href={`https://wa.me/${clinicInfo.whatsapp}`}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 rounded-full bg-leaf-600 px-6 py-3.5 text-sm font-semibold text-white shadow-soft hover:bg-leaf-700 hover:-translate-y-0.5 transition-all"
            >
              <MessageCircle className="h-[18px] w-[18px]" />
              WhatsApp Us
            </a>
            <a
              href={`tel:${clinicInfo.phone.replace(/\s/g, "")}`}
              className="inline-flex items-center gap-2 rounded-full border-2 border-brand-600 px-6 py-3.5 text-sm font-semibold text-brand-700 hover:bg-brand-50 hover:-translate-y-0.5 transition-all"
            >
              <Phone className="h-[18px] w-[18px]" />
              Call Now
            </a>
          </div>

          <div className="mt-8 flex items-center gap-3 text-sm text-ink/65">
            <Mail className="h-[18px] w-[18px] text-brand-600" />
            {clinicInfo.email}
          </div>
        </motion.div>

        <motion.form
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          onSubmit={handleSubmit}
          className="rounded-[1.75rem] bg-mist p-7 sm:p-9 border border-brand-50"
        >
          <div className="grid sm:grid-cols-2 gap-5">
            <div className="relative">
              <User className="absolute left-4 top-1/2 -translate-y-1/2 h-[18px] w-[18px] text-brand-400" />
              <input
                required
                value={form.name}
                onChange={(e) => setForm((f) => ({ ...f, name: e.target.value }))}
                type="text"
                placeholder="Your name"
                className="w-full rounded-xl border border-brand-100 bg-white pl-11 pr-4 py-3.5 text-sm focus:outline-none focus:ring-2 focus:ring-brand-400"
              />
            </div>
            <div className="relative">
              <Mail className="absolute left-4 top-1/2 -translate-y-1/2 h-[18px] w-[18px] text-brand-400" />
              <input
                required
                value={form.email}
                onChange={(e) => setForm((f) => ({ ...f, email: e.target.value }))}
                type="email"
                placeholder="Email address"
                className="w-full rounded-xl border border-brand-100 bg-white pl-11 pr-4 py-3.5 text-sm focus:outline-none focus:ring-2 focus:ring-brand-400"
              />
            </div>
          </div>
          <textarea
            required
            value={form.message}
            onChange={(e) => setForm((f) => ({ ...f, message: e.target.value }))}
            rows={4}
            placeholder="How can we help?"
            className="mt-5 w-full rounded-xl border border-brand-100 bg-white px-4 py-3.5 text-sm resize-none focus:outline-none focus:ring-2 focus:ring-brand-400"
          />
          <button
            type="submit"
            disabled={status === "submitting"}
            className="mt-5 w-full inline-flex items-center justify-center gap-2 rounded-xl bg-brand-600 px-6 py-4 text-sm font-semibold text-white hover:bg-brand-700 transition-colors disabled:opacity-70"
          >
            {status === "submitting" ? (
              <>
                <Loader2 className="h-[18px] w-[18px] animate-spin" /> Sending...
              </>
            ) : (
              <>
                <Send className="h-[18px] w-[18px]" /> Send Message
              </>
            )}
          </button>
          {status === "success" && (
            <p className="mt-4 flex items-center gap-2 text-sm font-medium text-leaf-700">
              <CheckCircle2 className="h-4 w-4" /> Message sent — we'll get back to you soon.
            </p>
          )}
          {status === "error" && (
            <p className="mt-4 text-sm font-medium text-red-600">
              Something went wrong. Please try calling instead.
            </p>
          )}
        </motion.form>
      </div>
    </section>
  );
}
