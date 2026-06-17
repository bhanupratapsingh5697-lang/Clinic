"use client";

import { useState, type FormEvent } from "react";
import { motion } from "framer-motion";
import { User, Phone, Mail, Calendar, MessageSquare, Send, CheckCircle2, Loader2 } from "lucide-react";

type Status = "idle" | "submitting" | "success" | "error";

const inputBase =
  "w-full rounded-xl border border-brand-100 bg-white pl-11 pr-4 py-3.5 text-sm text-ink placeholder:text-ink/40 focus:outline-none focus:ring-2 focus:ring-brand-400 focus:border-transparent transition-all";

export default function AppointmentForm() {
  const [status, setStatus] = useState<Status>("idle");
  const [form, setForm] = useState({
    name: "",
    phone: "",
    email: "",
    date: "",
    message: "",
  });

  const update = (field: keyof typeof form) => (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) =>
    setForm((f) => ({ ...f, [field]: e.target.value }));

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    setStatus("submitting");
    try {
      const res = await fetch("/api/appointment", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(form),
      });
      if (!res.ok) throw new Error("Request failed");
      setStatus("success");
      setForm({ name: "", phone: "", email: "", date: "", message: "" });
    } catch {
      setStatus("error");
    }
  };

  return (
    <section id="appointment" className="section-pad py-20 lg:py-28 bg-brand-900 relative overflow-hidden">
      <div className="absolute inset-0 bg-grid-faint [background-size:38px_38px] opacity-[0.06] pointer-events-none" />
      <div className="absolute -bottom-24 -right-24 h-80 w-80 rounded-full bg-leaf-600/20 blur-3xl pointer-events-none" />

      <div className="relative mx-auto max-w-7xl grid lg:grid-cols-[0.8fr_1.2fr] gap-14 items-start">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.6 }}
          className="text-white"
        >
          <span className="text-xs font-semibold tracking-widest text-leaf-300 uppercase">
            Book Your Visit
          </span>
          <h2 className="mt-3 text-3xl sm:text-4xl font-display font-semibold text-balance">
            Schedule a Consultation in Under a Minute
          </h2>
          <p className="mt-4 text-white/70 leading-relaxed max-w-md">
            Share a few details and our team will confirm your slot by phone
            or message shortly. For urgent concerns, please call the clinic
            directly.
          </p>

          <ul className="mt-8 space-y-3 text-sm text-white/80">
            <li className="flex items-center gap-2.5">
              <CheckCircle2 className="h-4 w-4 text-leaf-300" /> Same-day slots often available
            </li>
            <li className="flex items-center gap-2.5">
              <CheckCircle2 className="h-4 w-4 text-leaf-300" /> Confirmation by phone or WhatsApp
            </li>
            <li className="flex items-center gap-2.5">
              <CheckCircle2 className="h-4 w-4 text-leaf-300" /> No charge to reschedule
            </li>
          </ul>
        </motion.div>

        <motion.form
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          onSubmit={handleSubmit}
          className="rounded-[1.75rem] bg-white p-7 sm:p-9 shadow-card"
        >
          <div className="grid sm:grid-cols-2 gap-5">
            <div className="relative">
              <User className="absolute left-4 top-1/2 -translate-y-1/2 h-[18px] w-[18px] text-brand-400" />
              <input
                required
                value={form.name}
                onChange={update("name")}
                type="text"
                placeholder="Full name"
                className={inputBase}
              />
            </div>
            <div className="relative">
              <Phone className="absolute left-4 top-1/2 -translate-y-1/2 h-[18px] w-[18px] text-brand-400" />
              <input
                required
                value={form.phone}
                onChange={update("phone")}
                type="tel"
                placeholder="Phone number"
                className={inputBase}
              />
            </div>
            <div className="relative">
              <Mail className="absolute left-4 top-1/2 -translate-y-1/2 h-[18px] w-[18px] text-brand-400" />
              <input
                value={form.email}
                onChange={update("email")}
                type="email"
                placeholder="Email address"
                className={inputBase}
              />
            </div>
            <div className="relative">
              <Calendar className="absolute left-4 top-1/2 -translate-y-1/2 h-[18px] w-[18px] text-brand-400" />
              <input
                required
                value={form.date}
                onChange={update("date")}
                type="date"
                placeholder="Preferred date"
                className={inputBase}
              />
            </div>
          </div>

          <div className="relative mt-5">
            <MessageSquare className="absolute left-4 top-4 h-[18px] w-[18px] text-brand-400" />
            <textarea
              value={form.message}
              onChange={update("message")}
              rows={4}
              placeholder="Briefly describe your concern (optional)"
              className={`${inputBase} pt-3.5 resize-none`}
            />
          </div>

          <button
            type="submit"
            disabled={status === "submitting"}
            className="mt-6 w-full inline-flex items-center justify-center gap-2 rounded-xl bg-leaf-600 px-6 py-4 text-sm font-semibold text-white hover:bg-leaf-700 transition-colors disabled:opacity-70"
          >
            {status === "submitting" ? (
              <>
                <Loader2 className="h-[18px] w-[18px] animate-spin" /> Sending request...
              </>
            ) : (
              <>
                <Send className="h-[18px] w-[18px]" /> Request Appointment
              </>
            )}
          </button>

          {status === "success" && (
            <p className="mt-4 flex items-center gap-2 text-sm font-medium text-leaf-700">
              <CheckCircle2 className="h-4 w-4" /> Request received — we'll confirm shortly.
            </p>
          )}
          {status === "error" && (
            <p className="mt-4 text-sm font-medium text-red-600">
              Something went wrong. Please call the clinic directly.
            </p>
          )}
        </motion.form>
      </div>
    </section>
  );
}
