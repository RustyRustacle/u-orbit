"use client";

import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import SectionHeading from "../SectionHeading";
import GlassCard from "../GlassCard";

const stages = [
  {
    id: "nova",
    name: "NOVA",
    image: "/img/nova.png",
    tagline: "The Awakening",
    description: "Enter the orbit. Your journey begins with foundational knowledge and community immersion.",
    items: ["Web3 Fundamentals", "Digital Identity & Wallets", "Governance & DAOs"],
    color: "purple" as const
  },
  {
    id: "nexa",
    name: "NEXA",
    image: "/img/nexa.png",
    tagline: "The Builder Phase",
    description: "Deep dive into your chosen specialization. Build real-world applications and join elite squads.",
    items: ["Dev / Business / UI-UX Tracks", "Hackathon Sprints", "MVP Incubation"],
    color: "blue" as const
  },
  {
    id: "nexus",
    name: "NEXUS",
    image: "/img/nexus.png",
    tagline: "The Ultimate Convergence",
    description: "Connect with the global industry. Accelerate your career and join the professional talent pool.",
    items: ["Career Accelerator", "Global Partner Matching", "Elite Talent Pool"],
    color: "cyan" as const
  }
];

export default function PipelineSection() {
  return (
    <section className="py-24 relative overflow-hidden" id="pipeline">
      <div className="container mx-auto px-6">
        <SectionHeading 
          badge="The Journey"
          title="Your Journey Through the Orbit"
          subtitle="A three-stage evolution designed to transform your potential into professional excellence."
        />

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-stretch pt-12">
          {stages.map((stage, index) => (
            <motion.div
              key={stage.id}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.2 }}
              className="flex"
            >
              <GlassCard glowColor={stage.color} className="flex-grow flex flex-col items-center text-center">
                <div className="relative w-full h-16 mb-8 group-hover:scale-110 transition-transform duration-500">
                  <Image 
                    src={stage.image} 
                    alt={stage.name} 
                    fill 
                    className="object-contain filter drop-shadow-[0_0_10px_rgba(255,255,255,0.3)]"
                  />
                </div>
                
                <p className="text-orbit-cyan font-bold tracking-[0.2em] text-xs uppercase mb-4">{stage.tagline}</p>
                <p className="mb-8">{stage.description}</p>
                
                <ul className="space-y-3 w-full border-t border-white/5 pt-8">
                  {stage.items.map((item) => (
                    <li key={item} className="flex items-center gap-3 text-sm text-text-secondary">
                      <div className={`w-1.5 h-1.5 rounded-full bg-orbit-${stage.color}`} />
                      {item}
                    </li>
                  ))}
                </ul>
              </GlassCard>
            </motion.div>
          ))}
        </div>

        {/* Orbit Visualization Path */}
        <div className="absolute top-1/2 left-0 w-full h-[600px] border border-white/5 rounded-[100%] -translate-y-1/2 scale-x-150 rotate-12 -z-10 pointer-events-none" />
      </div>
    </section>
  );
}
