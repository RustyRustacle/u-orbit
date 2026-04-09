"use client";

import React from "react";
import { motion } from "framer-motion";
import SectionHeading from "../SectionHeading";

const steps = [
  {
    title: "Learn",
    label: "PHASE 01",
    description: "Master the fundamentals of blockchain, smart contracts, and decentralized systems through our curated curriculum.",
    color: "from-orbit-purple to-orbit-blue",
    glow: "shadow-[0_0_30px_rgba(124,58,237,0.3)]",
    icon: (
      <svg className="w-10 h-10 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
      </svg>
    )
  },
  {
    title: "Build",
    label: "PHASE 02",
    description: "Transform theory into reality. Create real MVPs, contribute to open source, and participate in global hackathons.",
    color: "from-orbit-blue to-orbit-cyan",
    glow: "shadow-[0_0_30px_rgba(59,130,246,0.3)]",
    icon: (
      <svg className="w-10 h-10 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M11 4a2 2 0 114 0v1a1 1 0 001 1h3a1 1 0 011 1v3a1 1 0 01-1 1h-1a2 2 0 100 4h1a1 1 0 011 1v3a1 1 0 01-1 1h-3a1 1 0 01-1-1v-1a2 2 0 10-4 0v1a1 1 0 01-1 1H7a1 1 0 01-1-1v-3a1 1 0 011-1h1a2 2 0 100-4H7a1 1 0 01-1-1V7a1 1 0 011-1h3a1 1 0 001-1V4z" />
      </svg>
    )
  },
  {
    title: "Earn",
    label: "PHASE 03",
    description: "Get hired by global Web3 leaders. Unlock opportunities for internships, freelance gigs, and high-impact careers.",
    color: "from-orbit-cyan to-orbit-pink",
    glow: "shadow-[0_0_30px_rgba(6,182,212,0.3)]",
    icon: (
      <svg className="w-10 h-10 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 8c-1.657 0-3 1.343-3 3s1.343 3 3 3 3 1.343 3-3-1.343-3-3-3zM12 2C6.477 2 2 6.477 2 12s4.477 10 10 10 10-4.477 10-10S17.523 2 12 2zm0 18c-4.411 0-8-3.589-8-8s3.589-8 8-8 8 3.589 8 8-3.589 8-8 8z" />
      </svg>
    )
  }
];

export default function SolutionSection() {
  return (
    <section className="py-24 bg-orbit-navy/50 relative overflow-hidden">
      {/* Decorative gradient blob */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-orbit-blue/5 blur-[120px] rounded-full pointer-events-none" />

      <div className="container mx-auto px-6 relative z-10">
        <SectionHeading 
          badge="Our Solution"
          title="The U-ORBIT Ecosystem"
          subtitle="A structured pipeline designed to take you from a curious student to an elite Web3 professional."
        />

        <div className="relative">
          {/* Connecting Line (Desktop) */}
          <div className="absolute top-1/2 left-0 w-full h-1 bg-gradient-to-r from-orbit-purple via-orbit-blue to-orbit-cyan opacity-20 hidden lg:block -translate-y-1/2" />

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
            {steps.map((step, index) => (
              <motion.div
                key={step.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.2 }}
                className="relative"
              >
                <div className="glass-panel p-10 flex flex-col items-center text-center group hover:border-white/20 transition-all duration-500">
                  <div className={`w-20 h-20 rounded-2xl bg-gradient-to-br ${step.color} ${step.glow} flex items-center justify-center mb-8 transform group-hover:rotate-12 transition-transform duration-500`}>
                    {step.icon}
                  </div>
                  <span className="text-orbit-cyan font-bold tracking-widest text-xs mb-2">{step.label}</span>
                  <h3 className="text-3xl font-bold mb-6">{step.title}</h3>
                  <p className="text-text-secondary leading-relaxed">
                    {step.description}
                  </p>
                </div>

                {/* Arrow indicator (Desktop) */}
                {index < steps.length - 1 && (
                  <div className="absolute top-1/2 -right-6 -translate-y-1/2 z-20 hidden lg:block">
                    <svg className="w-12 h-12 text-orbit-blue opacity-50" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                    </svg>
                  </div>
                )}
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
