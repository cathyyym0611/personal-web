"use client";

import { motion } from "framer-motion";
import { experiences, otherExperiences } from "@/data/resume";

export default function Experience() {
  return (
    <section id="experience" className="py-24 px-6">
      <div className="max-w-5xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-black mb-3">
            🚀 我在做什么
          </h2>
          <p className="text-text-light">在 AI 与互联网的世界里摸爬滚打</p>
        </motion.div>

        {/* Main experiences as story cards */}
        <div className="space-y-8 mb-12">
          {experiences.map((exp, index) => (
            <motion.div
              key={exp.company}
              initial={{ opacity: 0, x: index % 2 === 0 ? -30 : 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.5 }}
              className="card-playful p-8 relative overflow-hidden"
            >
              {/* Color accent bar */}
              <div
                className="absolute top-0 left-0 w-1.5 h-full rounded-l-xl"
                style={{ backgroundColor: exp.color }}
              />

              {/* Header */}
              <div className="flex flex-wrap items-start justify-between gap-3 mb-4">
                <div>
                  <h3 className="text-xl font-bold flex items-center gap-2">
                    <span>{exp.emoji}</span>
                    <span style={{ color: exp.color }}>{exp.company}</span>
                    <span className="text-text-muted text-sm font-normal">
                      {exp.companyEn}
                    </span>
                  </h3>
                  <p className="text-sm text-text-light mt-1">{exp.role}</p>
                </div>
                <div className="text-right text-sm text-text-muted">
                  <p>{exp.period}</p>
                  <p>📍 {exp.location}</p>
                </div>
              </div>

              {/* Story */}
              <p className="text-text-light leading-relaxed mb-5 text-sm">
                {exp.story}
              </p>

              {/* Highlights */}
              <div className="space-y-2 mb-4">
                {exp.highlights.map((h, i) => (
                  <div key={i} className="flex items-start gap-2 text-sm">
                    <span className="text-coral mt-0.5">✦</span>
                    <span className="text-text">{h}</span>
                  </div>
                ))}
              </div>

              {/* Tags */}
              <div className="flex flex-wrap gap-2">
                {exp.tags.map((tag) => (
                  <span
                    key={tag}
                    className="tag-pill"
                    style={{
                      backgroundColor: `${exp.color}12`,
                      color: exp.color,
                    }}
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>

        {/* Other experiences - brief */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center"
        >
          <p className="text-sm text-text-muted mb-4">也曾经历过 ——</p>
          <div className="flex flex-wrap justify-center gap-3">
            {otherExperiences.map((exp) => (
              <span
                key={exp.company}
                className="tag-pill bg-card border border-border text-text-light hover:border-coral/30"
              >
                {exp.emoji} {exp.company} · {exp.role}
                <span className="text-text-muted ml-1 text-xs">
                  ({exp.period})
                </span>
              </span>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
