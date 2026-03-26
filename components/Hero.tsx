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

          <div className="mt-10 grid gap-8 md:grid-cols-[280px_auto_300px] md:items-center">
            <motion.div
              initial={{ opacity: 0, y: 18 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5 }}
              className="order-2 md:order-1 flex flex-col items-start"
            >
              <div className="soft-button w-fit bg-[rgba(255,253,247,0.92)]">
                <span className="inline-flex h-2.5 w-2.5 rounded-full bg-sunny-dark" />
                Available for new opportunities
              </div>
              <div className="card-playful mt-5 p-5 max-w-[280px]">
                <p className="text-sm leading-relaxed text-text-light">
                  关注行为科学、AI 和产品设计之间的交叉地带，也在持续把研究兴趣变成真实可用的项目。重点在看 AI trust、 behavior change 和 product strategy，想理解什么样的系统会让人真正愿意持续使用。
                </p>
              </div>
            </motion.div>

            <motion.button
              type="button"
              initial={{ opacity: 0, scale: 0.96 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.25, duration: 0.7 }}
              className="order-1 md:order-2 flex justify-center"
              onClick={() => setClicked(true)}
            >
              <span className="relative h-[380px] w-[320px] md:h-[560px] md:w-[470px] flex items-end justify-center">
                <span className="absolute inset-x-10 bottom-14 h-52 rounded-full bg-[radial-gradient(circle,rgba(243,223,128,0.52)_0%,rgba(243,223,128,0.12)_56%,transparent_78%)] blur-3xl" />
                <span className="absolute inset-x-16 bottom-2 h-16 rounded-full bg-[rgba(255,248,236,0.95)] blur-2xl" />
                <img
                  src={`${process.env.NEXT_PUBLIC_BASE_PATH || ""}/images/hero-balloon.png`}
                  alt="Yingyu portrait"
                  className="relative z-10 h-full w-full object-contain object-bottom"
                  style={{
                    filter:
                      "drop-shadow(0 0 16px rgba(255,248,236,0.95)) drop-shadow(0 12px 36px rgba(255,248,236,0.88)) drop-shadow(0 28px 55px rgba(120,88,39,0.16))",
                  }}
                />
                <span className="absolute inset-x-10 bottom-0 h-20 bg-gradient-to-t from-[#fff8ed] via-[#fff8ed]/80 to-transparent blur-xl" />
              </span>
            </motion.button>

            <motion.div
              initial={{ opacity: 0, y: 18 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6 }}
              className="order-3"
            >
              <div className="card-playful p-6 max-w-[300px] ml-auto">
                <p className="text-sm leading-relaxed text-text-light">
                  从 <span className="font-semibold text-sunny-dark">vibe coding</span> 小产品，到
                  <span className="font-semibold text-sunny-dark"> research-backed interventions</span>，
                  我喜欢把想法快速变成可以被验证、被使用、也能继续迭代的东西。
                </p>
                <div className="mt-6 flex flex-wrap gap-3">
                  <a href="#about" className="soft-button soft-button-primary">
                    认识我 →
                  </a>
                  <a href="#contact" className="soft-button">
                    聊聊
                  </a>
                </div>
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
