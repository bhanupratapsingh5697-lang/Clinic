"use client";

import { motion } from "framer-motion";

type PulseLineProps = {
  className?: string;
  stroke?: string;
  height?: number;
};

// A heartbeat / vitals pulse line — the visual signature used throughout
// the site to tie every section back to the clinical, "we monitor your
// health" idea without leaning on stock photography or generic icons.
export default function PulseLine({
  className = "",
  stroke = "#176FA8",
  height = 40,
}: PulseLineProps) {
  return (
    <svg
      viewBox="0 0 600 60"
      className={className}
      style={{ height }}
      preserveAspectRatio="none"
      fill="none"
    >
      <motion.path
        d="M0 30 H120 L150 30 L165 8 L185 52 L205 18 L220 30 H600"
        stroke={stroke}
        strokeWidth={3}
        strokeLinecap="round"
        strokeLinejoin="round"
        initial={{ pathLength: 0, opacity: 0 }}
        whileInView={{ pathLength: 1, opacity: 1 }}
        viewport={{ once: true, amount: 0.6 }}
        transition={{ duration: 1.4, ease: "easeInOut" }}
      />
    </svg>
  );
}
