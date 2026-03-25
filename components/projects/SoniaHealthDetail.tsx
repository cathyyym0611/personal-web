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

export default function SoniaHealthDetail() {
  return (
    <section className="py-12 px-6">
      <div className="max-w-3xl mx-auto">
        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="mb-12 card-playful p-8">
          <p className="section-eyebrow mb-3">Michigan Venture Club · 2024.01 - 2024.04</p>
          <div className="flex items-center gap-4 mb-4">
            <span className="text-5xl">🚀</span>
            <div>
              <h1 className="text-3xl md:text-4xl font-black" style={{ color: "#A78BFA" }}>
                Sonia Health
              </h1>
              <p className="text-text-light text-lg">Campus Ambassador Program for an AI Mental Health App</p>
            </div>
          </div>
          <div className="flex flex-wrap gap-2 mt-4">
            {["Project Lead", "Campus Growth", "Operations", "User Acquisition"].map((tag) => (
              <span key={tag} className="tag-pill text-xs" style={{ backgroundColor: "#A78BFA15", color: "#A78BFA" }}>
                {tag}
              </span>
            ))}
          </div>
        </motion.div>

        <Section>
          <h2 className="text-xl font-bold mb-4">项目背景</h2>
          <div className="prose-custom">
            <p>
              Sonia Health 是一款心理健康方向的 AI 应用。对这类产品来说，用户增长不仅是“让更多人知道”，更重要的是找到一种既可信、又能在校园环境里真正跑起来的早期扩散方式。
            </p>
            <p>
              我们最终把切入点放在 <strong>campus ambassador program</strong> 上，因为大学校园天然适合做高信任、强社交传播的小规模试点。
            </p>
          </div>
        </Section>

        <Section delay={0.1}>
          <h2 className="text-xl font-bold mb-4">我的角色</h2>
          <div className="card-playful p-6">
            <p className="text-sm text-text-light leading-relaxed">
              作为 <strong>Project Leader</strong>，我负责把这个项目从一个增长想法落到可执行的校园运营方案，包括项目框架、招新物料、运营机制和试点落地。
            </p>
          </div>
        </Section>

        <Section delay={0.2}>
          <h2 className="text-xl font-bold mb-4">我做了什么</h2>
          <div className="space-y-4">
            {[
              {
                title: "搭建 ambassador program 结构",
                desc: "从零设计校园大使项目的招募逻辑、角色定位和执行方式，让团队能够低成本启动早期校园试点。",
              },
              {
                title: "制作招新与沟通材料",
                desc: "设计并制作 6 套招新物料，帮助项目在校园语境里更清晰地讲清楚“为什么加入、加入后做什么、能带来什么影响”。",
              },
              {
                title: "沉淀执行手册",
                desc: "完成 14 页运营手册，把 onboarding、沟通节奏、活动执行和后续跟进流程整理成可复制的 playbook。",
              },
              {
                title: "推动校内试点",
                desc: "在校内完成首轮试点，招募第一批大使，验证项目是否具备继续规模化扩张的基础。",
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
          <h2 className="text-xl font-bold mb-4">结果</h2>
          <div className="prose-custom">
            <p>
              项目最终在校园内成功落地试点，并招募到首批大使。更重要的是，我们不仅完成了一次活动执行，而是验证了一条<strong>可以继续规模化的用户增长路径</strong>。
            </p>
            <p>
              对早期团队来说，这类成果的价值在于：它把“校园增长”从一个模糊方向，变成了有物料、有流程、有试点结果支撑的可执行策略。
            </p>
          </div>
        </Section>
      </div>
    </section>
  );
}
