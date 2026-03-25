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
              我是毛盈豫，来自宁波。本科就读于密歇根大学（经济与统计），目前在宾夕法尼亚大学攻读行为与决策科学。
            </p>
            <p className="text-text-light leading-relaxed text-base mb-4">
              相比“我做过什么”，我更关心“我为什么会被这些问题吸引”。我长期关注一个核心问题：为什么人们即使知道更优选择，仍难以付诸行动。也正因如此，我对行为科学、用户研究与 AI 产生了持续兴趣，它们在不同路径下，试图回答同一个命题：如何更真实地理解人，并据此设计更自然、更有效的体验。
            </p>
            <p className="text-text-light leading-relaxed text-base mb-4">
              在实践中，我习惯将模糊问题结构化、将复杂决策拆解为可执行路径；同时也保持快速试验的习惯，把灵感转化为具体项目。从研究 AI 信任，到进行轻量产品开发与自发项目探索，我始终在尝试让好奇心落地为有实际价值的产出。
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
              {["喜欢把想法快速做出来", "对人和 AI 的关系很好奇"].map((item) => (
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
