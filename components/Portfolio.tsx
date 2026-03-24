"use client";

import { motion } from "framer-motion";
import { portfolioItems } from "@/data/resume";

export default function Portfolio() {
  return (
    <section id="portfolio" className="py-24 px-6">
      <div className="max-w-5xl mx-auto">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="mb-16"
        >
          <p className="section-eyebrow mb-2">Visual work</p>
          <h1 className="section-title text-3xl md:text-5xl font-semibold mb-3">🎨 作品集</h1>
          <p className="text-text-light">
            Slide 设计、海报、活动物料——工作和社团中的视觉产出
          </p>
        </motion.div>

        {/* Gallery grid */}
        <div className="grid grid-cols-2 md:grid-cols-3 gap-5">
          {portfolioItems.map((item, i) => (
            <motion.div
              key={item.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.08 }}
              className="card-playful overflow-hidden group"
            >
              {/* Image placeholder */}
              <div
                className="aspect-[4/3] flex flex-col items-center justify-center relative"
                style={{ backgroundColor: `${item.color}12` }}
              >
                <span className="text-4xl mb-2 opacity-40">
                  {item.emoji}
                </span>
                <span className="text-xs text-text-muted">
                  上传作品后显示
                </span>
                {/* Hover overlay */}
                <div className="absolute inset-0 bg-white/0 group-hover:bg-white/10 transition-colors" />
              </div>

              {/* Info */}
              <div className="p-4">
                <span
                  className="text-xs font-semibold"
                  style={{ color: item.color }}
                >
                  {item.category}
                </span>
                <h3 className="text-sm font-bold mt-1 mb-1">{item.title}</h3>
                <p className="text-xs text-text-muted leading-relaxed">
                  {item.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Placeholder note */}
        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="text-center text-text-muted text-sm mt-12"
        >
          📎 作品持续上传中，敬请期待～
        </motion.p>
      </div>
    </section>
  );
}
