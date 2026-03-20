"use client";

import { motion } from "framer-motion";
import { personalInfo } from "@/data/resume";
import { useEffect, useState } from "react";

/* ───────── Hero Component — Dark Flat Design ───────── */

export default function Hero() {
  const [currentKeyword, setCurrentKeyword] = useState(0);
  const [clicked, setClicked] = useState(false);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentKeyword((prev) => (prev + 1) % personalInfo.keywords.length);
    }, 2500);
    return () => clearInterval(interval);
  }, []);

  return (
    <section className="hero-section relative min-h-screen flex flex-col items-center justify-center overflow-hidden">
      {/* Deep gradient background */}
      <div className="absolute inset-0 bg-gradient-to-b from-[#0a0a18] via-[#0f0f1a] to-[#1a1a2e]" />

      {/* Ambient glow orbs */}
      <div className="absolute top-1/4 left-1/4 w-[500px] h-[500px] bg-[radial-gradient(circle,rgba(240,180,41,0.06)_0%,transparent_70%)] pointer-events-none" />
      <div className="absolute bottom-1/4 right-1/4 w-[400px] h-[400px] bg-[radial-gradient(circle,rgba(56,178,172,0.05)_0%,transparent_70%)] pointer-events-none" />

      {/* Subtle grid pattern */}
      <div className="absolute inset-0 opacity-[0.03] pointer-events-none" style={{
        backgroundImage: 'linear-gradient(rgba(240,180,41,0.3) 1px, transparent 1px), linear-gradient(90deg, rgba(240,180,41,0.3) 1px, transparent 1px)',
        backgroundSize: '60px 60px'
      }} />

      {/* Content */}
      <div className="relative z-10 text-center px-6 max-w-3xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, type: "spring" }}
        >
          <motion.p
            className="text-5xl md:text-7xl mb-6 cursor-pointer select-none"
            whileTap={{ scale: 1.3, rotate: [0, -10, 10, 0] }}
            onClick={() => setClicked(true)}
          >
            👋
          </motion.p>

          {clicked && (
            <motion.p
              initial={{ opacity: 0, scale: 0 }}
              animate={{ opacity: 1, scale: 1 }}
              className="text-sm text-coral mb-2 font-medium"
            >
              你发现了一个彩蛋！🎉
            </motion.p>
          )}

          <h1 className="text-4xl md:text-6xl font-black mb-4 leading-tight tracking-tight">
            Hey, 我是
            <span className="gradient-text"> 盈豫</span>
          </h1>

          <p className="text-lg md:text-xl text-text-light mb-2 leading-relaxed">
            {personalInfo.tagline}
          </p>
          <p className="text-sm text-text-muted mb-8">
            {personalInfo.subtitle}
          </p>
        </motion.div>

        {/* Rotating keywords */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5 }}
          className="h-10 mb-10 flex items-center justify-center"
        >
          <span className="text-text-muted mr-2">#</span>
          <motion.span
            key={currentKeyword}
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -15 }}
            transition={{ duration: 0.4 }}
            className="text-coral font-bold text-lg"
          >
            {personalInfo.keywords[currentKeyword]}
          </motion.span>
        </motion.div>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.8 }}
          className="flex gap-4 justify-center flex-wrap mb-24"
        >
          <a
            href="#about"
            className="px-8 py-3 bg-coral text-[#0f0f1a] rounded-full font-semibold hover:bg-coral-light transition-all hover:-translate-y-0.5"
          >
            了解我 →
          </a>
          <a
            href="#contact"
            className="px-8 py-3 border border-coral/30 text-coral rounded-full font-semibold hover:bg-coral/10 transition-all"
          >
            💌 聊聊
          </a>
        </motion.div>
      </div>

      {/* Scroll hint */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5 }}
        className="absolute bottom-10 left-1/2 -translate-x-1/2 z-30"
      >
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ duration: 1.5, repeat: Infinity }}
          className="text-text-muted text-sm"
        >
          ↓ 往下看看
        </motion.div>
      </motion.div>
    </section>
  );
}
