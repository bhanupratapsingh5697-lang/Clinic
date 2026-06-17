"use client";

import { motion } from "framer-motion";
import { Phone, MessageCircle } from "lucide-react";
import { clinicInfo } from "@/lib/data";

export default function FloatingActions() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: 1 }}
      className="fixed bottom-5 right-5 z-40 flex flex-col gap-3"
    >
      <a
        href={`https://wa.me/${clinicInfo.whatsapp}`}
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Chat on WhatsApp"
        className="flex h-[52px] w-[52px] items-center justify-center rounded-full bg-leaf-600 text-white shadow-card hover:bg-leaf-700 hover:scale-105 transition-all"
      >
        <MessageCircle className="h-6 w-6" />
      </a>
      <a
        href={`tel:${clinicInfo.phone.replace(/\s/g, "")}`}
        aria-label="Call the clinic"
        className="flex h-[52px] w-[52px] items-center justify-center rounded-full bg-brand-600 text-white shadow-card hover:bg-brand-700 hover:scale-105 transition-all"
      >
        <Phone className="h-6 w-6" />
      </a>
    </motion.div>
  );
}
