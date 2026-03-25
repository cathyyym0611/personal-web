"use client";

import { motion } from "framer-motion";

function Section({
  children,
  delay = 0,
}: {
  children: React.ReactNode;
  delay?: number;
}) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ delay }}
      className="mb-12"
    >
      {children}
    </motion.div>
  );
}

export default function ComplexChaosDetail() {
  return (
    <section className="py-12 px-6">
      <div className="max-w-3xl mx-auto">
        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="mb-12 card-playful p-8">
          <p className="section-eyebrow mb-3">Capstone project · 2025.09 - 2026.05</p>
          <div className="flex items-center gap-4 mb-4">
            <span className="text-5xl">🧪</span>
            <div>
              <h1 className="text-3xl md:text-4xl font-black" style={{ color: "#4ECDC4" }}>
                ComplexChaos
              </h1>
              <p className="text-text-light text-lg">Behavioral Science × Conversational AI</p>
            </div>
          </div>
          <div className="flex flex-wrap gap-2 mt-4">
            {["Behavioral Science", "Conversational AI", "Capstone", "Intervention Design"].map((tag) => (
              <span key={tag} className="tag-pill text-xs" style={{ backgroundColor: "#4ECDC415", color: "#4ECDC4" }}>
                {tag}
              </span>
            ))}
          </div>
        </motion.div>

        <Section>
          <h2 className="text-xl font-bold mb-4">项目在解决什么问题？</h2>
          <div className="prose-custom">
            <p>
              ComplexChaos 的目标是 <strong>help humanity cooperate at scale</strong>。在我们的 capstone 里，具体聚焦的是一个很现实的问题：当员工开始用 conversational AI 进行协作时，为什么常常在 setup 之后、真正形成长期使用之前就流失了？
            </p>
            <p>
              这不是“AI 不够强”那么简单。很多时候，问题出在使用过程里的细小 friction：对话一旦跑偏，用户就觉得自己没有被理解；缺乏连续性时，前一次的上下文像没留下来；一旦涉及工作信息，信任和隐私顾虑也会被迅速放大。
            </p>
          </div>
        </Section>

        <Section delay={0.1}>
          <h2 className="text-xl font-bold mb-4">我的角色</h2>
          <div className="card-playful p-6">
            <p className="text-sm text-text-light leading-relaxed">
              作为 <strong>Behavioral Science Consultant / Capstone Project Member</strong>，我主要负责把“用户为什么掉队”拆解成可诊断、可干预、可验证的行为问题，并把这些洞察转化成 client 后续可继续推进的产品优化方向。
            </p>
          </div>
        </Section>

        <Section delay={0.2}>
          <h2 className="text-xl font-bold mb-4">我做了什么</h2>
          <div className="space-y-4">
            {[
              {
                title: "定义 drop-off 问题",
                desc: "把“AI 协作使用流失”作为核心研究对象，明确从 setup、interaction 到 outcomes 的完整用户路径。",
              },
              {
                title: "设计并优化 Qualtrics 问卷",
                desc: "围绕完整 AI 使用流程搭建研究问卷，让后续数据能更系统地捕捉 friction、trust 和 adoption signal。",
              },
              {
                title: "做行为诊断",
                desc: "基于 COM-B、EAST 和 CMT（Capability, Motivation, Trust）框架，分析用户为什么开始使用、为什么中途退出、以及什么条件会让他们坚持下去。",
              },
              {
                title: "识别关键 friction",
                desc: "聚焦 misalignment、lack of continuity，以及 trust / privacy concerns 三类最核心阻碍，作为 intervention 的优先切入点。",
              },
              {
                title: "提出 intervention 方向",
                desc: "围绕 trust signals、continuity design 和 cueing 机制设计行为干预思路，并参与 LinkedIn 招募、数据收集和分析。",
              },
            ].map((item) => (
              <div key={item.title} className="card-playful p-5">
                <p className="font-semibold text-sm mb-2">{item.title}</p>
                <p className="text-sm text-text-light leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>
        </Section>

        <Section delay={0.3}>
          <h2 className="text-xl font-bold mb-4">项目输出与洞察</h2>
          <div className="prose-custom">
            <p>
              研究结果显示，AI 在<strong>短期任务</strong>中往往表现不错，但要支持<strong>长期协作</strong>时，连续性与对齐问题会迅速成为 adoption 的瓶颈。换句话说，用户不是不愿意用 AI，而是不愿意在一个总要重新解释自己的系统上持续投入。
            </p>
            <p>
              同时，我们也看到用户对解决这些问题的工具表现出较高采用意愿。这意味着 client 后续并不一定需要“更强的模型”才能提升 retention，很多时候更值得优先做的是 <strong>更稳定的 continuity、更明确的 trust signal，以及更少打断感的协作体验</strong>。
            </p>
            <p>
              最终，我们产出了可落地的 intervention 设计与评估思路，帮助 client 在后续产品优化中，把行为科学洞察转成真正可执行的产品决策。
            </p>
          </div>
        </Section>
      </div>
    </section>
  );
}
