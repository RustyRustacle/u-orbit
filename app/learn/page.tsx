"use client";

import React from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import { curriculum } from "@/data/curriculum";
import WalletGate from "@/components/WalletGate";

const container = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: { staggerChildren: 0.08 },
  },
};

const item = {
  hidden: { opacity: 0, y: 20 },
  show: { opacity: 1, y: 0 },
};

export default function LearnPage() {
  return (
    <WalletGate>
      <div className="min-h-screen pt-32 pb-20 px-6 relative">
        {/* Background effects */}
        <div className="absolute top-0 left-0 w-full h-[500px] bg-gradient-to-b from-orbit-purple/5 to-transparent pointer-events-none" />
        <div className="absolute top-1/4 -right-20 w-[600px] h-[600px] bg-orbit-blue/10 blur-[150px] rounded-full pointer-events-none" />
        <div className="absolute bottom-1/4 -left-20 w-[400px] h-[400px] bg-orbit-purple/10 blur-[120px] rounded-full pointer-events-none" />

        <div className="container mx-auto max-w-6xl relative z-10">
          {/* Header */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <span className="inline-block px-4 py-1.5 rounded-full bg-orbit-purple/10 border border-orbit-purple/20 text-orbit-purple text-xs font-semibold tracking-widest uppercase mb-6">
              Web3 Academy
            </span>

            <h1 className="font-serif text-4xl md:text-6xl font-bold text-text-primary mb-6 not-italic normal-case tracking-tight">
              Web3 Learning Path
            </h1>

            <p className="text-text-secondary text-lg md:text-xl max-w-3xl mx-auto leading-relaxed">
              A comprehensive, structured curriculum taking you from blockchain fundamentals
              to advanced DeFi development. Designed by blockchain educators with
              hands-on coding challenges at every step.
            </p>
          </motion.div>

          {/* Progress bar */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.3 }}
            className="glass-panel p-6 mb-12 flex flex-col sm:flex-row items-center gap-4"
          >
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-full bg-gradient-to-br from-orbit-cyan to-orbit-blue flex items-center justify-center text-lg">
                📚
              </div>
              <div>
                <p className="text-text-primary font-semibold text-sm">{curriculum.length} Modules</p>
                <p className="text-text-secondary text-xs">
                  {curriculum.reduce((acc, m) => acc + m.lessons.length, 0)} Lessons &middot; {curriculum.length} Challenges
                </p>
              </div>
            </div>

            <div className="flex-1 hidden sm:block" />

            <div className="flex items-center gap-2 text-sm text-text-secondary">
              <span className="inline-block w-3 h-3 rounded-full bg-gradient-to-r from-orbit-purple to-orbit-cyan" />
              Start from Module 1 — EVM Fundamentals first
            </div>
          </motion.div>

          {/* Module Grid */}
          <motion.div
            variants={container}
            initial="hidden"
            animate="show"
            className="space-y-6"
          >
            {curriculum.map((mod, idx) => (
              <motion.div key={mod.id} variants={item}>
                <Link href={`/learn/${mod.id}`} className="block group">
                  <div className="glass-panel p-6 md:p-8 hover:bg-white/[0.08] transition-all duration-300 hover:border-white/20">
                    <div className="flex items-start gap-6">
                      {/* Module number */}
                      <div
                        className="hidden md:flex w-16 h-16 rounded-2xl items-center justify-center text-3xl shrink-0 border border-white/10 group-hover:scale-110 transition-transform duration-300"
                        style={{ background: `${mod.color}15` }}
                      >
                        {mod.icon}
                      </div>

                      <div className="flex-1 min-w-0">
                        {/* Title row */}
                        <div className="flex items-center gap-3 mb-1">
                          <span
                            className="text-xs font-bold tracking-widest uppercase"
                            style={{ color: mod.color }}
                          >
                            Module {mod.number}
                          </span>
                          <span className="text-text-secondary/40 text-xs">•</span>
                          <span className="text-text-secondary/60 text-xs">
                            {mod.lessons.length} lessons
                          </span>
                        </div>

                        <h3 className="font-serif text-xl md:text-2xl font-bold text-text-primary not-italic normal-case tracking-normal mb-2 group-hover:text-orbit-cyan transition-colors">
                          {mod.title}
                        </h3>

                        <p className="text-text-secondary text-sm leading-relaxed line-clamp-2">
                          {mod.description}
                        </p>

                        {/* Lesson pills */}
                        <div className="flex flex-wrap gap-2 mt-4">
                          {mod.lessons.slice(0, 4).map((lesson) => (
                            <span
                              key={lesson.id}
                              className="text-xs px-3 py-1 rounded-full bg-white/5 text-text-secondary border border-white/5"
                            >
                              {lesson.title}
                            </span>
                          ))}
                          {mod.lessons.length > 4 && (
                            <span className="text-xs px-3 py-1 rounded-full bg-white/5 text-text-secondary border border-white/5">
                              +{mod.lessons.length - 4} more
                            </span>
                          )}
                          <span className="text-xs px-3 py-1 rounded-full bg-orbit-purple/10 text-orbit-purple border border-orbit-purple/20 font-medium">
                            🏆 Challenge
                          </span>
                        </div>
                      </div>

                      {/* Arrow */}
                      <div className="hidden md:flex items-center justify-center w-10 h-10 rounded-full bg-white/5 group-hover:bg-orbit-cyan/10 transition-colors shrink-0 self-center">
                        <svg
                          className="w-5 h-5 text-text-secondary group-hover:text-orbit-cyan transition-colors group-hover:translate-x-1 duration-300"
                          fill="none"
                          stroke="currentColor"
                          viewBox="0 0 24 24"
                        >
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                        </svg>
                      </div>
                    </div>

                    {/* Connector line */}
                    {idx < curriculum.length - 1 && (
                      <div className="hidden md:block absolute -bottom-6 left-[3.5rem] w-px h-6 bg-gradient-to-b from-white/10 to-transparent" />
                    )}
                  </div>
                </Link>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </WalletGate>
  );
}
