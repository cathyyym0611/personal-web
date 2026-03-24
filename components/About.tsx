"use client";

import { motion } from "framer-motion";
import { personalInfo, funFacts, education } from "@/data/resume";
import { useState } from "react";

export default function About() {
  const [flippedCard, setFlippedCard] = useState<number | null>(null);

  return (
    <section id="about" className="py-20 px-6">
      <div className="max-w-4xl mx-auto">
        {/* Intro */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="flex flex-col md:flex-row items-center gap-10 mb-16"
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
              {personalInfo.summary}
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
