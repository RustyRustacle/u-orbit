"use client";

import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import SectionHeading from "../SectionHeading";

const traits = [
  { title: "Portfolio-ready", desc: "Showcase real-world contributions." },
  { title: "Industry-connected", desc: "Linked to global Web3 leaders." },
  { title: "Earning-ready", desc: "Equipped to capture global value." },
  { title: "Global-ready", desc: "Fluent in the decentralized economy." }
];

export default function AstroSection() {
  return (
    <section className="py-24 relative overflow-hidden" id="astro">
      {/* Background radial glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full bg-[radial-gradient(circle_at_center,_var(--color-orbit-purple)_0%,_transparent_70%)] opacity-10 pointer-events-none" />

      <div className="container mx-auto px-6 relative z-10">
        <div className="flex flex-col lg:flex-row items-center gap-16">
          {/* Visual Side */}
          <div className="w-full lg:w-1/2 relative">
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 1 }}
              className="relative aspect-square max-w-md mx-auto"
            >
              {/* Image Frame with Glow */}
              <div className="absolute inset-0 bg-gradient-to-b from-orbit-purple to-orbit-blue opacity-20 blur-3xl animate-pulse" />
              <div className="relative z-10 w-full h-full rounded-full border border-white/5 p-4 bg-orbit-deep/40 backdrop-blur-sm overflow-hidden">
                <Image 
                  src="/img/astro_silhouette_v2.png" 
                  alt="ASTRO Identity" 
                  fill 
                  className="object-cover transition-transform duration-10000 hover:scale-110"
                />
              </div>
              
              {/* Orbital Nodes around the visual */}
              <div className="absolute top-0 left-0 w-full h-full animate-orbit pointer-events-none">
                <div className="w-4 h-4 rounded-full bg-orbit-cyan shadow-[0_0_10px_var(--color-orbit-cyan)] absolute top-0 left-1/2 -translate-x-1/2" />
              </div>
              <div className="absolute top-0 left-0 w-full h-full animate-orbit-reverse pointer-events-none" style={{ animationDuration: '15s' }}>
                <div className="w-3 h-3 rounded-full bg-orbit-pink shadow-[0_0_10px_var(--color-orbit-pink)] absolute bottom-0 left-1/2 -translate-x-1/2" />
              </div>
            </motion.div>
          </div>

          {/* Content Side */}
          <div className="w-full lg:w-1/2">
            <SectionHeading 
              badge="Final Evolution"
              title="Become an ASTRO"
              subtitle="ASTRO represents individuals who are not only skilled, but ready to operate, earn, and contribute in the global Web3 ecosystem."
              centered={false}
            />

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-8 mb-12">
              {traits.map((trait, index) => (
                <motion.div
                  key={trait.title}
                  initial={{ opacity: 0, x: 20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  className="flex flex-col gap-2"
                >
                  <h4 className="text-xl font-bold flex items-center gap-3">
                    <div className="w-2 h-2 rounded-full bg-orbit-cyan animate-pulse" />
                    {trait.title}
                  </h4>
                  <p className="text-sm">{trait.desc}</p>
                </motion.div>
              ))}
            </div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="p-8 border-l-2 border-orbit-purple bg-orbit-purple/5 italic text-lg"
            >
              "Not everyone reaches orbit. Only a few become ASTRO."
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}
