"use client";

import React from "react";
import { motion } from "framer-motion";

interface GlassCardProps {
  children: React.ReactNode;
  className?: string;
  glowColor?: "purple" | "blue" | "cyan" | "pink";
  hover?: boolean;
}

export default function GlassCard({ 
  children, 
  className = "", 
  glowColor = "purple",
  hover = true 
}: GlassCardProps) {
  
  const glowStyles = {
    purple: "group-hover:shadow-[0_0_30px_rgba(124,58,237,0.2)]",
    blue: "group-hover:shadow-[0_0_30px_rgba(59,130,246,0.2)]",
    cyan: "group-hover:shadow-[0_0_30px_rgba(6,182,212,0.2)]",
    pink: "group-hover:shadow-[0_0_30px_rgba(236,72,153,0.2)]",
  };

  return (
    <motion.div
      whileHover={hover ? { y: -10 } : {}}
      className={`glass-panel p-8 relative group transition-all duration-500 ${hover ? glowStyles[glowColor] : ""} ${className}`}
    >
      {/* Accent glow on hover */}
      {hover && (
        <div className={`absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-20 blur-xl transition-opacity duration-500 bg-gradient-to-br from-orbit-${glowColor} to-transparent`} />
      )}
      
      <div className="relative z-10">
        {children}
      </div>
    </motion.div>
  );
}
