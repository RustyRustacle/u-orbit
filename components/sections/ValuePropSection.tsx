"use client";

import React from "react";
import { motion } from "framer-motion";
import SectionHeading from "../SectionHeading";

const studentBenefits = [
  "Structured Web3 learning path",
  "Proof-of-work portfolio",
  "Direct global industry links",
  "Early-stage earning pathways"
];

const campusBenefits = [
  "Pioneer Web3 ecosystem branding",
  "Exclusive industry partnerships",
  "Innovation & Research hub",
  "Elite Web3 alumni network"
];

export default function ValuePropSection() {
  return (
    <section className="py-24 relative overflow-hidden bg-white/[0.02]">
      <div className="container mx-auto px-6">
        <SectionHeading 
          badge="Why U-ORBIT"
          title="Value Proposition"
          subtitle="Creating a symbiotic ecosystem for both students and the university."
        />

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Students */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="glass-panel p-10 border-l-4 border-l-orbit-purple"
          >
            <h3 className="text-3xl font-bold mb-8">For Students</h3>
            <ul className="space-y-6">
              {studentBenefits.map((benefit) => (
                <li key={benefit} className="flex items-start gap-4">
                  <div className="mt-1 w-5 h-5 rounded-full bg-orbit-purple/20 border border-orbit-purple/50 flex items-center justify-center flex-shrink-0">
                    <svg className="w-3 h-3 text-orbit-purple" fill="currentColor" viewBox="0 0 20 20">
                      <path d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" />
                    </svg>
                  </div>
                  <span className="text-xl">{benefit}</span>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Campus */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="glass-panel p-10 border-l-4 border-l-orbit-cyan"
          >
            <h3 className="text-3xl font-bold mb-8">For Campus</h3>
            <ul className="space-y-6">
              {campusBenefits.map((benefit) => (
                <li key={benefit} className="flex items-start gap-4">
                  <div className="mt-1 w-5 h-5 rounded-full bg-orbit-cyan/20 border border-orbit-cyan/50 flex items-center justify-center flex-shrink-0">
                    <svg className="w-3 h-3 text-orbit-cyan" fill="currentColor" viewBox="0 0 20 20">
                      <path d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" />
                    </svg>
                  </div>
                  <span className="text-xl">{benefit}</span>
                </li>
              ))}
            </ul>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
