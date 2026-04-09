"use client";

import React from "react";
import { motion } from "framer-motion";
import SectionHeading from "../SectionHeading";
import GlassCard from "../GlassCard";

const programs = [
  {
    title: "Web3 Bootcamp",
    desc: "Intensive training on the core pillars of Web3, from smart contracts to decentralized application architecture.",
    color: "purple" as const
  },
  {
    title: "Hackathon & Demo Day",
    desc: "Put your skills to the test. Build real-world solutions under pressure and pitch to industry experts.",
    color: "blue" as const
  },
  {
    title: "Career Accelerator",
    desc: "Masterclass on personal branding, interview preparation, and navigating the global Web3 job market.",
    color: "cyan" as const
  },
  {
    title: "Talent Incubation",
    desc: "Long-term mentorship program connecting high-potential students with industry veterans.",
    color: "pink" as const
  }
];

export default function ProgramsSection() {
  return (
    <section className="py-24 relative overflow-hidden" id="programs">
      <div className="container mx-auto px-6">
        <SectionHeading 
          badge="Our Curriculum"
          title="Designed for Impact"
          subtitle="Specific tracks tailored to different stages of your Web3 expertise."
        />

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {programs.map((program, index) => (
            <motion.div
              key={program.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
            >
              <GlassCard glowColor={program.color} className="h-full flex flex-col">
                <div className={`w-12 h-1.5 rounded-full bg-orbit-${program.color} mb-8`} />
                <h3 className="text-xl font-bold mb-4">{program.title}</h3>
                <p className="text-sm text-text-secondary leading-relaxed">
                  {program.desc}
                </p>
              </GlassCard>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
