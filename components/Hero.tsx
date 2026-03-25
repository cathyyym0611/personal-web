"use client";

import { motion } from "framer-motion";
import { personalInfo } from "@/data/resume";
import { useState } from "react";

export default function Hero() {
  const [clicked, setClicked] = useState(false);
  const marqueeKeywords = [...personalInfo.keywords, ...personalInfo.keywords];

  return (
    <section className="relative min-h-screen overflow-hidden px-6 pt-28 pb-16">
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute left-1/2 top-20 h-[520px] w-[520px] -translate-x-1/2 rounded-full bg-[radial-gradient(circle,rgba(243,223,128,0.68)_0%,rgba(243,223,128,0.2)_34%,transparent_72%)] blur-3xl" />
        <div className="absolute left-8 top-28 h-44 w-44 rounded-full bg-[radial-gradient(circle,rgba(235,190,110,0.34)_0%,transparent_74%)] blur-2xl" />
        <div className="absolute bottom-10 right-10 h-56 w-56 rounded-full bg-[radial-gradient(circle,rgba(220,176,92,0.2)_0%,transparent_76%)] blur-2xl" />
      </div>

      <div className="relative z-10 max-w-6xl mx-auto">
        <div className="card-playful page-panel relative overflow-hidden rounded-[2rem] px-8 py-10 md:px-14 md:py-14">
          <div className="flex items-center justify-between mb-10">
            <div className="display-serif text-3xl text-text">Cathy Mao</div>
          </div>

          <div className="text-center max-w-4xl mx-auto">
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="section-eyebrow mb-4"
            >
              AI × Behavioral Science × Product Thinking
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 24 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.75 }}
            >
              <p className="text-4xl md:text-7xl font-semibold tracking-[-0.06em] mb-2">
                Hi I&apos;m <span className="gradient-text">盈豫</span>
              </p>
              <h1 className="display-serif text-[4rem] leading-none md:text-[7.2rem] mb-6 text-text">
                Curious Builder
              </h1>
            </motion.div>

            <motion.p
              initial={{ opacity: 0, y: 18 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1, duration: 0.7 }}
              className="max-w-3xl mx-auto text-lg md:text-2xl text-text-light leading-relaxed"
            >
              我把 <span className="text-text font-semibold">清晰策略</span>、
              <span className="text-text font-semibold"> thoughtful design</span> 和
              <span className="text-text font-semibold"> user empathy</span> 放在一起，
              去做真正有人会想用、也真的能解决问题的东西。
            </motion.p>

            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.35 }}
              className="mt-6 mx-auto max-w-2xl overflow-hidden rounded-full border border-border bg-[rgba(255,251,244,0.7)]"
            >
              <div className="px-5 py-3 text-sm md:text-base whitespace-nowrap">
                <div className="marquee-track">
                  {marqueeKeywords.map((keyword, index) => (
                    <span
                      key={`${keyword}-${index}`}
                      className="marquee-item font-semibold text-sunny-dark"
                    >
                      {keyword}
                    </span>
                  ))}
                </div>
              </div>
            </motion.div>
          </div>

          <div className="mt-10 grid gap-6 md:grid-cols-[1fr_auto_1fr] md:items-end">
            <motion.div
              initial={{ opacity: 0, y: 18 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5 }}
              className="order-2 md:order-1"
            >
              <div className="soft-button w-fit bg-[rgba(255,253,247,0.92)]">
                <span className="inline-flex h-2.5 w-2.5 rounded-full bg-sunny-dark" />
                Available for new opportunities
              </div>
              <p className="mt-5 max-w-xs text-sm leading-relaxed text-text-light">
                宾大行为科学硕士，持续在 AI、用户理解、产品落地和真实世界问题之间来回穿梭。
              </p>
            </motion.div>

            <motion.button
              type="button"
              initial={{ opacity: 0, scale: 0.96 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.25, duration: 0.7 }}
              className="order-1 md:order-2 flex justify-center"
              onClick={() => setClicked(true)}
            >
              <span className="relative h-[320px] w-[250px] md:h-[420px] md:w-[320px] overflow-hidden rounded-[2rem] border border-[rgba(168,136,86,0.18)] bg-[linear-gradient(180deg,rgba(255,250,240,0.3)_0%,rgba(255,250,240,0.92)_68%,rgba(255,250,240,1)_100%)] shadow-[0_28px_70px_rgba(120,88,39,0.12)]">
                <img
                  src={`${process.env.NEXT_PUBLIC_BASE_PATH || ""}/images/yy-profile.jpg`}
                  alt="Yingyu portrait"
                  className="h-full w-full object-cover object-center"
                />
                <div className="absolute inset-x-0 bottom-0 h-24 bg-gradient-to-t from-[#fff8ed] to-transparent" />
              </span>
            </motion.button>

            <motion.div
              initial={{ opacity: 0, y: 18 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6 }}
              className="order-3 flex flex-col items-start md:items-end"
            >
              <p className="max-w-sm text-sm md:text-base leading-relaxed text-text-light md:text-right">
                passionate about turning ambiguity into structure, and making AI products feel warm, useful, and human.
              </p>
              <div className="mt-6 flex flex-wrap gap-3 md:justify-end">
                <a href="#about" className="soft-button soft-button-primary">
                  认识我 →
                </a>
                <a href="#contact" className="soft-button">
                  聊聊
                </a>
              </div>
              {clicked && (
                <p className="mt-4 text-sm font-medium text-sunny-dark">
                  小彩蛋已触发，欢迎继续往下逛。
                </p>
              )}
            </motion.div>
          </div>
        </div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.9 }}
          className="mt-10 flex flex-wrap items-center justify-center gap-x-8 gap-y-3 text-sm text-text-muted"
        >
          <span>Behavioral Science</span>
          <span>AI Product</span>
          <span>User Research</span>
          <span>Strategy</span>
          <span>Vibe Coding</span>
        </motion.div>
      </div>
    </section>
  );
}
