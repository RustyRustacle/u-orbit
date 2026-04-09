"use client";

import React from "react";
import Link from "next/link";
import { motion } from "framer-motion";

export default function FinalCTASection() {
  return (
    <section className="py-32 relative overflow-hidden">
      {/* Warp Speed Background Effect */}
      <div className="absolute inset-0 z-0">
        {[...Array(20)].map((_, i) => (
          <motion.div
            key={i}
            initial={{ scaleY: 0, opacity: 0 }}
            animate={{ 
              scaleY: [0, 1, 0], 
              opacity: [0, 0.5, 0],
              y: ["-100%", "100%"] 
            }}
            transition={{ 
              duration: Math.random() * 2 + 1, 
              repeat: Infinity, 
              ease: "linear",
              delay: Math.random() * 2 
            }}
            className="absolute w-px h-[200px] bg-gradient-to-b from-transparent via-orbit-cyan to-transparent"
            style={{ 
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`
            }}
          />
        ))}
      </div>

      {/* Ambient background glow */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-orbit-purple/20 to-orbit-blue/30 z-10" />

      <div className="container mx-auto px-6 relative z-20 text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="glass-panel p-16 md:p-24 border-white/20"
        >
          <motion.h2
            animate={{ scale: [1, 1.02, 1] }}
            transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
            className="text-4xl md:text-6xl lg:text-7xl font-black mb-8 leading-tight tracking-tighter"
          >
            Launch Your Journey Into <br />
            the <span className="text-gradient">Web3 Universe</span>
          </motion.h2>
          
          <p className="text-xl md:text-2xl text-text-secondary max-w-2xl mx-auto mb-12">
            The next generation of global talent is being forged in the orbit. <br />
            Are you ready to join?
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-6">
            <Link 
              href="https://forms.gle/SFC3uWi9pzUBgNLx7" 
              target="_blank" 
              className="btn-primary text-xl px-12 py-5 shadow-[0_0_40px_rgba(124,58,237,0.4)]"
            >
              Join the Orbit Now
            </Link>
            <Link 
              href="https://www.instagram.com/uorbit.bc/?hl=en" 
              target="_blank" 
              className="btn-outline text-lg px-10 py-5"
            >
              Follow our Journey
            </Link>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
