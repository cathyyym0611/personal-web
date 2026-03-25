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

export default function AmbientIntelligenceDetail() {
  return (
    <section className="py-12 px-6">
      <div className="max-w-3xl mx-auto">
        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="mb-12 card-playful p-8">
          <p className="section-eyebrow mb-3">Michigan Venture Club · 2024.09 - 2024.12</p>
          <div className="flex items-center gap-4 mb-4">
            <span className="text-5xl">🩺</span>
            <div>
              <h1 className="text-3xl md:text-4xl font-black" style={{ color: "#D59B28" }}>
                Ambient Intelligence
              </h1>
              <p className="text-text-light text-lg">Healthcare Market Demand Assessment</p>
            </div>
          </div>
          <div className="flex flex-wrap gap-2 mt-4">
            {["Project Lead", "Market Research", "Healthcare", "GTM Strategy"].map((tag) => (
              <span key={tag} className="tag-pill text-xs" style={{ backgroundColor: "#D59B2815", color: "#D59B28" }}>
                {tag}
              </span>
            ))}
          </div>
        </motion.div>

        <Section>
          <h2 className="text-xl font-bold mb-4">项目背景</h2>
          <div className="prose-custom">
            <p>
              Ambient Intelligence 是一家开发<strong>非接触式患者监测传感器</strong>的医疗科技初创公司。对这类产品而言，技术本身当然重要，但决定它能不能真正进入医疗系统的，往往是市场端对价值、场景和采购逻辑的判断。
            </p>
            <p>
              因此，这个项目的核心任务不是单纯“验证产品好不好”，而是帮助团队更清楚地回答：<strong>谁最需要它、为什么需要它、以及应该怎么进入市场。</strong>
            </p>
          </div>
        </Section>

        <Section delay={0.1}>
          <h2 className="text-xl font-bold mb-4">我的角色</h2>
          <div className="card-playful p-6">
            <p className="text-sm text-text-light leading-relaxed">
              我担任 <strong>Project Leader</strong>，主要负责市场研究部分，包括研究设计、信息收集与洞察整理，并把这些内容转成对 client 有实际价值的 go-to-market 输入。
            </p>
          </div>
        </Section>

        <Section delay={0.2}>
          <h2 className="text-xl font-bold mb-4">我做了什么</h2>
          <div className="space-y-4">
            {[
              {
                title: "设计并执行 Market Demand Assessment",
                desc: "围绕产品的潜在需求、使用场景与市场切入点搭建研究框架，确保后续结论既有用户视角，也对商业决策有帮助。",
              },
              {
                title: "访谈与问卷覆盖多方 stakeholder",
                desc: "面向医院决策者、医护人员以及患者家属 / 照护者开展 interviews 与 surveys，理解不同角色对同一产品价值的判断差异。",
              },
              {
                title: "提炼 use cases 与 adoption drivers",
                desc: "把零散反馈整理成更清晰的使用场景、需求优先级和 adoption driver，帮助团队识别真正值得优先投入的场景。",
              },
              {
                title: "支持 GTM 决策",
                desc: "围绕 target segment 与 messaging 形成面向商业化的建议，为产品定位和市场进入路径提供输入。",
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
              项目最终帮助 client 更明确地识别了关键客户群体及其决策逻辑，也进一步验证了医疗场景中对<strong>实时监测</strong>与<strong>无接触数据采集</strong>的核心需求。
            </p>
            <p>
              这些发现为公司后续 GTM strategy 提供了更扎实的数据支持和用户洞察，也帮助团队更清楚地调整产品定位与市场进入路径。
            </p>
          </div>
        </Section>
      </div>
    </section>
  );
}
