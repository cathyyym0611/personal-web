"use client";

import { motion } from "framer-motion";
import { research } from "@/data/resume";

export default function Research() {
  return (
    <section id="research" className="py-24 px-6">
      <div className="max-w-4xl mx-auto">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-black mb-3">
            🔍 研究经历
          </h2>
          <p className="text-text-light max-w-xl mx-auto">
            从差分隐私到教育政策——用数据回答重要的问题
          </p>
        </motion.div>

        <div className="space-y-8">
          {research.map((item, i) => (
            <motion.div
              key={item.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.15 }}
              className="card-playful overflow-hidden"
            >
              {/* Header bar */}
              <div
                className="p-6"
                style={{ backgroundColor: `${item.color}08` }}
              >
                <div className="flex items-start gap-4">
                  <span className="text-3xl flex-shrink-0">{item.emoji}</span>
                  <div className="flex-1 min-w-0">
                    <h3
                      className="text-lg font-bold mb-1"
                      style={{ color: item.color }}
                    >
                      {item.title}
                    </h3>
                    <p className="text-sm text-text-muted">{item.subtitle}</p>
                    <p className="text-xs text-text-muted mt-1">
                      {item.role} · {item.advisor}
                    </p>
                  </div>
                </div>
              </div>

              {/* Body */}
              <div className="p-6">
                <p className="text-sm text-text-light leading-relaxed mb-4">
                  {item.description}
                </p>

                <ul className="space-y-2 mb-4">
                  {item.details.map((detail, j) => (
                    <li
                      key={j}
                      className="flex items-start gap-2 text-sm text-text-light"
                    >
                      <span
                        className="mt-1 flex-shrink-0"
                        style={{ color: item.color }}
                      >
                        ✦
                      </span>
                      <span>{detail}</span>
                    </li>
                  ))}
                </ul>

                {/* Poster image for DP research */}
                {item.hasPoster && (
                  <div className="mb-4 rounded-xl overflow-hidden border border-border bg-card">
                    {/* eslint-disable-next-line @next/next/no-img-element */}
                    <img
                      src="/images/dp-poster.png"
                      alt="Privacy-Protected Linear Regression Research Poster"
                      className="w-full cursor-pointer hover:scale-[1.02] transition-transform"
                      onClick={() => window.open("/images/dp-poster.png", "_blank")}
                    />
                    <p className="text-xs text-text-muted text-center py-2">
                      点击查看大图
                    </p>
                  </div>
                )}

                <div className="flex flex-wrap items-center gap-2">
                  {item.tags.map((tag) => (
                    <span
                      key={tag}
                      className="tag-pill bg-cream text-text-light text-xs"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
