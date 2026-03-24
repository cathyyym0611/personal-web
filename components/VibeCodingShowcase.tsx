"use client";

import { motion } from "framer-motion";
import Link from "next/link";

const showcaseCards = [
  {
    title: "Michigan Venture Club",
    subtitle: "为早期团队做用户与增长咨询",
    items: [
      {
        label: "Cosmable",
        text: "围绕点评与留存设计增长策略，推动核心互动指标提升。",
      },
      {
        label: "Sonia Health",
        text: "从 0 到 1 搭建校园大使项目，验证早期用户获取路径。",
      },
      {
        label: "Ambient Intelligence",
        text: "梳理目标用户与使用场景，帮助团队聚焦产品切入点。",
      },
    ],
    tags: ["Consulting", "增长策略", "0-1 验证"],
    emoji: "🚀",
    color: "#A78BFA",
    href: "/projects",
    cta: "看更多经历",
  },
  {
    title: "Vibe Coding",
    subtitle: "把想法快速做成能用的产品",
    items: [
      {
        label: "词忆 VocabStory",
        text: "把背单词变成有上下文的故事记忆，让语言学习更自然、更有画面感。",
      },
      {
        label: "AI求职助手",
        text: "把简历分析、JD 匹配、求职信和面试准备串成一条更省力的求职流程。",
      },
      {
        label: "见梨存档",
        text: "为粉丝做追星记忆库，记录线下活动、歌曲足迹和追星开销。",
      },
    ],
    tags: ["AI 产品", "快速原型", "用户需求"],
    emoji: "⚡",
    color: "#F0B429",
    href: "/projects",
    cta: "查看项目",
  },
  {
    title: "ComplexChaos",
    subtitle: "用行为科学优化 AI 问卷体验",
    description:
      "宾大 Capstone 项目，想解决的是传统问卷又长又干、用户说到一半就退出的问题。我们把 survey 做得更像一段被理解的对话：用进度反馈、问题编排和 alignment repair 降低流失率，也让 AI 自动把零散回答整理成结构化洞察与策略建议，让研究者更快看到真正有用的用户信号。",
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
                    {card.items.map((item) => (
                      <p
                        key={item.label}
                        className="text-sm text-text-light leading-relaxed"
                      >
                        <span
                          className="font-semibold"
                          style={{ color: card.color }}
                        >
                          {item.label}
                        </span>
                        ：{item.text}
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
