"use client";

import React from "react";
import { motion } from "framer-motion";
import SectionHeading from "../SectionHeading";

const outcomes = [
  { label: "Portfolio", val: "100%", sub: "Industry-Ready" },
  { label: "Connection", val: "50+", sub: "Global Partners" },
  { label: "Career", val: "High", sub: "Growth Potential" },
  { label: "Reach", val: "Global", sub: "Web3 Economy" }
];

export default function OutcomeSection() {
  return (
    <section className="py-24 relative overflow-hidden bg-orbit-deep">
      {/* Decorative center glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-orbit-cyan/5 blur-[100px] rounded-full" />

      <div className="container mx-auto px-6 relative z-10 text-center">
        <SectionHeading 
          badge="The Outcome"
          title="From Student to ASTRO"
          subtitle="The transformation is complete. You are now a key node in the global blockchain ecosystem."
        />

        <div className="grid grid-cols-2 lg:grid-cols-4 gap-12 mb-20">
          {outcomes.map((outcome, index) => (
            <motion.div
              key={outcome.label}
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="flex flex-col items-center"
            >
              <div className="text-4xl md:text-6xl font-black text-gradient mb-2">{outcome.val}</div>
              <div className="text-sm font-bold tracking-widest uppercase text-text-primary mb-1">{outcome.label}</div>
              <div className="text-xs text-text-secondary">{outcome.sub}</div>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="max-w-4xl mx-auto glass-panel p-12 text-2xl md:text-3xl font-bold leading-tight"
        >
          “Every <span className="text-orbit-cyan">ASTRO</span> becomes a mentor — sustaining the ecosystem and guiding the next generation of builders.”
        </motion.div>
      </div>
    </section>
  );
}
