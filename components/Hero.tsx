"use client";

import { motion } from "framer-motion";
import { personalInfo } from "@/data/resume";

export default function Hero() {
  const marqueeKeywords = [...personalInfo.keywords, ...personalInfo.keywords];

  return (
    <section className="relative min-h-screen overflow-hidden px-6 pt-28 pb-12">
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute left-[18%] top-16 h-44 w-44 rounded-full bg-[radial-gradient(circle,rgba(235,190,110,0.18)_0%,transparent_72%)] blur-2xl" />
        <div className="absolute right-[24%] top-8 h-44 w-44 rounded-full bg-[radial-gradient(circle,rgba(244,120,146,0.18)_0%,transparent_70%)] blur-3xl" />
        <div className="absolute left-1/2 top-28 h-[620px] w-[620px] -translate-x-1/2 rounded-full bg-[radial-gradient(circle,rgba(243,223,128,0.34)_0%,rgba(243,223,128,0.09)_38%,transparent_74%)] blur-3xl" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto">
        <div className="card-playful page-panel overflow-hidden rounded-[2rem] px-8 pt-10 pb-0 md:px-16 md:pt-14">
          <div className="grid gap-8 md:grid-cols-[1.05fr_0.95fr] md:items-end">
            <div className="pb-10 md:pb-14">
              <motion.p
                initial={{ opacity: 0, y: 16 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                className="text-4xl mb-5"
              >
                👋
              </motion.p>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.7 }}
              >
                <p className="text-[2.8rem] md:text-[5.8rem] leading-none tracking-[-0.07em] text-text">
                  Hello! I&apos;m{" "}
                  <span className="font-black text-text">Cathy</span>
                </p>
              </motion.div>

              <motion.p
                initial={{ opacity: 0, y: 18 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.15, duration: 0.7 }}
                className="mt-6 max-w-2xl text-base md:text-xl leading-relaxed text-text-light"
              >
                我是毛盈豫，正在行为科学、AI 和产品设计的交叉地带持续探索。
                我关心人为什么难以行动，也着迷于把这些理解转成更自然、
                更可用、也更值得被持续使用的系统。
              </motion.p>

              <motion.div
                initial={{ opacity: 0, y: 18 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.28, duration: 0.7 }}
                className="mt-10 space-y-4"
              >
                {[
                  "关注 AI trust、behavior change 与 product strategy",
                  "把模糊问题拆成可以验证的 research questions",
                  "从 vibe coding 到 research-backed interventions，快速把想法做出来",
                ].map((item) => (
                  <div
                    key={item}
                    className="flex items-start gap-3 text-base md:text-[1.1rem] text-text"
                  >
                    <span className="mt-1 font-semibold">✓</span>
                    <span>{item}</span>
                  </div>
                ))}
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 18 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.4, duration: 0.7 }}
                className="mt-10 flex flex-wrap gap-4"
              >
                <a href="#about" className="soft-button soft-button-primary px-9">
                  认识我 →
                </a>
                <a
                  href="#contact"
                  className="inline-flex items-center gap-3 text-lg text-text border-b border-text/70 pb-1 hover:text-sunny-dark hover:border-sunny-dark transition-colors"
                >
                  聊聊
                  <span>↓</span>
                </a>
              </motion.div>
            </div>

            <motion.div
              initial={{ opacity: 0, scale: 0.96 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.2, duration: 0.75 }}
              className="relative flex justify-center md:justify-end md:mt-2"
            >
              <div className="relative h-[390px] w-[340px] md:h-[590px] md:w-[620px] flex items-end justify-center">
                <div className="absolute inset-x-14 bottom-10 h-52 rounded-full bg-[radial-gradient(circle,rgba(243,223,128,0.48)_0%,rgba(243,223,128,0.08)_58%,transparent_78%)] blur-3xl" />
                <div className="absolute inset-x-20 bottom-0 h-16 rounded-full bg-[rgba(255,248,236,0.96)] blur-2xl" />
                <img
                  src={`${process.env.NEXT_PUBLIC_BASE_PATH || ""}/images/hero-balloon.png`}
                  alt="Yingyu portrait"
                  className="relative z-10 h-full w-full object-contain object-bottom"
                  style={{
                    filter:
                      "drop-shadow(0 0 16px rgba(255,248,236,0.95)) drop-shadow(0 16px 38px rgba(255,248,236,0.92)) drop-shadow(0 30px 55px rgba(120,88,39,0.16))",
                  }}
                />
              </div>
            </motion.div>
          </div>

          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6, duration: 0.7 }}
            className="relative left-1/2 w-screen -translate-x-1/2 bg-[#191510] text-[#fff8ec] mt-6"
          >
            <div className="overflow-hidden border-y border-white/10">
              <div className="marquee-track py-4 text-lg md:text-[1.7rem] font-bold uppercase tracking-tight">
                {marqueeKeywords.map((keyword, index) => (
                  <span
                    key={`${keyword}-${index}`}
                    className="marquee-item text-[#fff8ec]"
                  >
                    ✦ {keyword}
                  </span>
                ))}
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
