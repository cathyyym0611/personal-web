"use client";

import { motion } from "framer-motion";
import Link from "next/link";

const showcaseCards = [
  {
    title: "Vibe Coding",
    subtitle: "把想法快速做成能用的产品",
    description:
      "做了词忆、AI求职助手、见梨存档 3 个小产品：从语言学习、求职陪伴到粉丝记忆库，都是从真实需求出发，快速验证、边做边迭代。",
    tags: ["AI 产品", "快速原型", "用户需求"],
    emoji: "⚡",
    color: "#F0B429",
    href: "/projects",
    cta: "查看项目",
  },
  {
    title: "Michigan Venture Club",
    subtitle: "为早期团队做用户与增长咨询",
    bullets: [
      "Cosmable：围绕点评与留存设计增长策略，推动核心互动指标提升。",
      "Sonia Health：从 0 到 1 搭建校园大使项目，验证早期用户获取路径。",
      "Ambient Intelligence：梳理目标用户与使用场景，帮助团队聚焦产品切入点。",
    ],
    tags: ["Consulting", "增长策略", "0-1 验证"],
    emoji: "🚀",
    color: "#A78BFA",
    href: "/projects",
    cta: "看更多经历",
  },
  {
    title: "ComplexChaos",
    subtitle: "用行为科学优化 AI 问卷体验",
    description:
      "宾大 Capstone 项目，研究如何降低 AI 问卷流失率、提升表达意愿，并把用户输入整理成结构化洞察与策略建议。",
    tags: ["行为科学", "AI", "Capstone"],
    emoji: "🧪",
    color: "#4ECDC4",
    href: "/behavioral-science",
    cta: "了解项目",
  },
];

export default function VibeCodingShowcase() {
  return (
    <section className="py-20 px-6">
      <div className="max-w-5xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="text-2xl md:text-3xl font-black mb-2">
            ⚡ 项目精选
          </h2>
          <p className="text-text-muted text-sm">
            从快速产品实验到咨询与研究，我在不同场景里持续把想法落地
          </p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-6">
          {showcaseCards.map((card, i) => (
            <motion.div
              key={card.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="h-full"
            >
              <Link
                href={card.href}
                className="card-playful p-6 group relative overflow-hidden block h-full flex flex-col hover:-translate-y-1 transition-all duration-200"
              >
                <div
                  className="absolute top-0 left-0 right-0 h-1"
                  style={{
                    background: `linear-gradient(90deg, ${card.color}, ${card.color}60)`,
                  }}
                />
                <div className="text-4xl mb-4">{card.emoji}</div>
                <h3
                  className="text-lg font-bold mb-1"
                  style={{ color: card.color }}
                >
                  {card.title}
                </h3>
                <p className="text-xs text-text-muted mb-3">
                  {card.subtitle}
                </p>

                {"description" in card ? (
                  <p className="text-sm text-text-light leading-relaxed mb-4">
                    {card.description}
                  </p>
                ) : (
                  <div className="space-y-3 mb-4">
                    {card.bullets.map((bullet) => (
                      <p
                        key={bullet}
                        className="text-sm text-text-light leading-relaxed"
                      >
                        {bullet}
                      </p>
                    ))}
                  </div>
                )}

                <div className="mt-auto">
                  <div className="flex flex-wrap gap-1.5 mb-3">
                    {card.tags.map((tag) => (
                      <span
                        key={tag}
                        className="tag-pill text-xs"
                        style={{
                          backgroundColor: `${card.color}15`,
                          color: card.color,
                        }}
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                  <span
                    className="inline-flex items-center gap-1 text-sm font-semibold"
                    style={{ color: card.color }}
                  >
                    {card.cta} →
                  </span>
                </div>
              </Link>
            </motion.div>
          ))}
        </div>

        <div className="text-center mt-8">
          <Link
            href="/projects"
            className="text-sm font-semibold text-coral hover:text-coral-light transition-colors"
          >
            查看所有项目 →
          </Link>
        </div>
      </div>
    </section>
  );
}
