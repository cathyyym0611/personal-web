"use client";

import { motion } from "framer-motion";
import { funFacts, education } from "@/data/resume";
import { useState } from "react";

export default function About() {
  const [flippedCard, setFlippedCard] = useState<number | null>(null);

  return (
    <section id="about" className="py-20 px-6">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-12">
          <p className="section-eyebrow mb-2">A short introduction</p>
          <h2 className="section-title text-3xl md:text-5xl font-semibold">
            More about me
          </h2>
        </div>

        {/* Intro */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="card-playful p-8 flex flex-col md:flex-row items-center gap-10 mb-16"
        >
          {/* Photo placeholder */}
          <div className="flex-shrink-0">
            <div className="w-44 h-44 rounded-3xl overflow-hidden border border-border bg-card">
              <img
                src={`${process.env.NEXT_PUBLIC_BASE_PATH || ""}/images/yy-profile.jpg`}
                alt="Yingyu portrait"
                className="w-full h-full object-cover"
              />
            </div>
          </div>
          {/* Summary */}
          <div>
            <p className="text-text-light leading-relaxed text-base mb-4">
              我是毛盈豫，宁波人，本科在密歇根大学读经济和统计，现在在宾夕法尼亚大学读行为与决策科学。相比“我做过什么”，我更在意的是“我为什么会对这些事着迷”。
            </p>
            <p className="text-text-light leading-relaxed text-base mb-4">
              我一直特别想搞明白一件事：<strong>人为什么明明知道更好的选择，却还是不会那样做？</strong> 这也是我后来会同时被行为科学、用户研究和 AI 吸引的原因。它们看起来分属不同领域，但本质上都在回答同一个问题：怎么更好地理解人，然后设计出更自然、更有效的体验。
            </p>
            <p className="text-text-light leading-relaxed text-base mb-4">
              工作里，我喜欢把模糊的问题拆成清晰结构；生活里，我又是那种会因为一个念头就立刻开做的人。所以你会看到我一边研究 AI trust，一边做 vibe coding、小产品、旅行记录，也一直在试着把“好奇心”变成真正落地的东西。
            </p>
            <div className="flex flex-wrap gap-2">
              {education.map((edu) => (
                <span
                  key={edu.school}
                  className="tag-pill bg-lavender/10 text-lavender text-xs"
                >
                  {edu.emoji} {edu.school} · {edu.degree}
                </span>
              ))}
            </div>
            <div className="mt-4 flex flex-wrap gap-2">
              {["宁波长大", "费城读研", "喜欢把想法快速做出来", "对人和 AI 的关系很好奇"].map((item) => (
                <span key={item} className="tag-pill text-xs text-text-light">
                  {item}
                </span>
              ))}
            </div>
          </div>
        </motion.div>

        {/* Fun Facts */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
        >
          <p className="text-sm text-text-muted text-center mb-6">
            ✨ 点击卡片看更多
          </p>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {funFacts.map((fact, i) => (
              <motion.div
                key={fact.label}
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.08 }}
                className="card-playful p-5 text-center cursor-pointer group"
                onClick={() =>
                  setFlippedCard(flippedCard === i ? null : i)
                }
              >
                <div className="text-3xl mb-2 emoji-pulse">{fact.emoji}</div>
                {flippedCard === i ? (
                  <motion.div
                    initial={{ rotateY: 90 }}
                    animate={{ rotateY: 0 }}
                    className="text-xs text-text-light leading-relaxed"
                  >
                    {fact.detail}
                  </motion.div>
                ) : (
                  <>
                    <p className="text-xs text-text-muted mb-1">
                      {fact.label}
                    </p>
                    <p
                      className="font-bold text-sm"
                      style={{ color: fact.color }}
                    >
                      {fact.value}
                    </p>
                  </>
                )}
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
