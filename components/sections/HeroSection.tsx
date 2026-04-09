"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";

export default function HeroSection() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20">
      {/* Background Orbital Rings */}
      <div className="absolute inset-0 z-0 pointer-events-none">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] border border-white/5 rounded-full animate-orbit opacity-20" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] border border-white/10 rounded-full animate-orbit-reverse opacity-30" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[1000px] h-[1000px] border border-white/[0.02] rounded-full animate-orbit opacity-10" />
      </div>

      {/* Ambient Glows */}
      <div className="absolute top-1/4 -left-20 w-[600px] h-[600px] bg-orbit-purple/20 blur-[120px] rounded-full animate-glow" />
      <div className="absolute bottom-1/4 -right-20 w-[600px] h-[600px] bg-orbit-blue/20 blur-[120px] rounded-full animate-glow" style={{ animationDelay: "1.5s" }} />

      <div className="container mx-auto px-6 relative z-10 text-center">
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1 }}
          className="mb-12 relative inline-block"
        >
          {/* Main Logo Cover */}
          <div className="relative w-72 h-72 md:w-96 md:h-96 mx-auto z-10">
            <Image
              src="/img/uorbit_logo_only.png"
              alt="U-ORBIT Logo"
              fill
              className="object-contain filter drop-shadow-[0_0_30px_rgba(255,255,255,0.2)]"
            />
          </div>
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-orbit-purple/10 blur-3xl -z-10" />
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.1 }}
          className="mb-4"
        >
          <span className="text-orbit-cyan font-bold uppercase tracking-[0.3em] text-sm md:text-base">
            UNTAR Organization for Blockchain Innovation & Technology
          </span>
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="text-5xl md:text-7xl lg:text-8xl font-black mb-8 tracking-tighter"
        >
          Explore the <span className="text-gradient">Web3 Universe</span>. <br />
          Become Global Talent.
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="text-lg md:text-2xl text-text-secondary max-w-4xl mx-auto mb-12 leading-relaxed"
        >
          U-ORBIT is a student-led ecosystem transforming students into <span className="text-text-primary font-bold">ASTRO</span> global ready Web3 talent through a structured pipeline: Learn, Build, and Earn.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="flex flex-col sm:flex-row items-center justify-center gap-6"
        >
          <Link href="https://forms.gle/SFC3uWi9pzUBgNLx7" target="_blank" className="btn-primary">
            Join the Orbit
          </Link>
          <Link href="#programs" className="btn-outline">
            Explore Programs
          </Link>
        </motion.div>
      </div>

      {/* Decorative Spheres */}
      <motion.div
        animate={{ y: [0, -20, 0] }}
        transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
        className="absolute top-1/4 right-[10%] w-12 h-12 bg-gradient-to-br from-orbit-purple to-orbit-blue rounded-full blur-[2px] opacity-60 hidden md:block shadow-[0_0_20px_rgba(124,58,237,0.5)]"
      />
      <motion.div
        animate={{ y: [0, 20, 0] }}
        transition={{ duration: 6, repeat: Infinity, ease: "easeInOut", delay: 1 }}
        className="absolute bottom-1/4 left-[15%] w-8 h-8 bg-gradient-to-tr from-orbit-cyan to-orbit-blue rounded-full blur-[1px] opacity-40 hidden md:block shadow-[0_0_15px_rgba(6,182,212,0.4)]"
      />
    </section>
  );
}
