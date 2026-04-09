"use client";

import React from "react";
import { motion } from "framer-motion";
import SectionHeading from "../SectionHeading";
import GlassCard from "../GlassCard";

const problems = [
  {
    title: "No Career Clarity",
    description: "Students often feel lost in the rapidly evolving Web3 landscape without a clear roadmap for their professional journey.",
    icon: (
      <svg className="w-8 h-8 text-orbit-purple" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 20l-5.447-2.724A2 2 0 013 15.483V4.517a2 2 0 011.553-1.943l7.087-1.417a2 2 0 011.72 2.39L12 11m0 0l.236 1.89a2 2 0 001.036 1.518L18 17m-6-6l7.447 3.724a2 2 0 011.053 1.763v1.03a2 2 0 01-1.077 1.78l-6 3a2 2 0 01-1.746 0l-6-3a2 2 0 01-1.077-1.78v-1.03a2 2 0 011.053-1.763L12 11z" />
      </svg>
    ),
    color: "purple" as const
  },
  {
    title: "No Structured Learning",
    description: "Fragmented information on the internet makes it difficult to master complex Web3 concepts systematically.",
    icon: (
      <svg className="w-8 h-8 text-orbit-blue" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
      </svg>
    ),
    color: "blue" as const
  },
  {
    title: "No Industry Bridge",
    description: "A major gap exists between academic knowledge and the practical skills required by global Web3 organizations.",
    icon: (
      <svg className="w-8 h-8 text-orbit-cyan" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M8 14v3m4-3v3m4-3v3M3 21h18M3 10h18M3 7l9-4 9 4M4 10h16v11H4V10z" />
      </svg>
    ),
    color: "cyan" as const
  }
];

export default function ProblemSection() {
  return (
    <section className="pt-48 pb-24 relative overflow-hidden" id="about">
      {/* Broken Orbit Graphic Background */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[1200px] h-px bg-gradient-to-r from-transparent via-white/10 to-transparent rotate-12 -z-10" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[1200px] h-px bg-gradient-to-r from-transparent via-white/5 to-transparent -rotate-12 -z-10" />

      <div className="container mx-auto px-6">
        <SectionHeading 
          badge="The Status Quo"
          title="Students Are Left Behind"
          subtitle="The current education system isn't keeping pace with the decentralized revolution."
        />

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {problems.map((problem, index) => (
            <motion.div
              key={problem.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.2 }}
            >
              <GlassCard glowColor={problem.color}>
                <div className="mb-6 inline-flex p-4 rounded-xl bg-white/5 border border-white/10">
                  {problem.icon}
                </div>
                <h3 className="text-2xl font-bold mb-4">{problem.title}</h3>
                <p>{problem.description}</p>
              </GlassCard>
            </motion.div>
          ))}
        </div>

        {/* Callout */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          className="mt-20 text-center"
        >
          <p className="text-orbit-cyan font-semibold tracking-wider uppercase text-sm">
            We are here to reconnect the nodes.
          </p>
        </motion.div>
      </div>
    </section>
  );
}
