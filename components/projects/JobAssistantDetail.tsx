"use client";

import { motion } from "framer-motion";

function Section({ children, delay = 0 }: { children: React.ReactNode; delay?: number }) {
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

export default function JobAssistantDetail() {
  return (
    <section className="py-12 px-6">
      <div className="max-w-3xl mx-auto">
        {/* Header */}
        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="mb-12 card-playful p-8">
          <p className="section-eyebrow mb-3">Vibe coding project</p>
          <div className="flex items-center gap-4 mb-4">
            <span className="text-5xl">🎯</span>
            <div>
              <h1 className="text-3xl md:text-4xl font-black" style={{ color: "#3370FF" }}>
                AI求职助手
              </h1>
              <p className="text-text-light text-lg">从简历到 offer 的全流程 AI 陪伴</p>
            </div>
          </div>
          <div className="flex flex-wrap gap-2 mt-4">
            {["Vibe Coding", "AI", "求职", "产品设计"].map((tag) => (
              <span key={tag} className="tag-pill text-xs" style={{ backgroundColor: "#3370FF15", color: "#3370FF" }}>
                {tag}
              </span>
            ))}
          </div>
          <div className="mt-4">
            <span className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full text-sm font-semibold border border-border text-text-muted">
              🚧 开发中，即将上线
            </span>
          </div>
        </motion.div>

        {/* 痛点 */}
        <Section>
          <h2 className="text-xl font-bold mb-4">解决什么问题？</h2>
          <div className="prose-custom">
            <p>
              求职过程中最消耗精力的不是面试本身，而是<strong>投递前的大量重复劳动</strong>：每投一个岗位，就要改一次简历、写一封求职信、研究一遍公司、准备一套面试答案。内容大同小异，但又不能完全复用。
            </p>
            <p>
              AI 求职助手的核心思路是：你只需要维护一份"真实的自己"，剩下的匹配、包装、准备工作，交给 AI 来做——但不是那种泛泛的生成，而是基于你的真实经历、针对每一个具体岗位的定制化输出。
            </p>
          </div>
        </Section>

        {/* 产品流程 */}
        <Section delay={0.1}>
          <h2 className="text-xl font-bold mb-4">产品流程</h2>
          <div className="space-y-4">
            {[
              {
                step: "01",
                title: "上传简历，生成个人档案",
                desc: "AI 解析你的简历，提取经历、技能、项目等信息，构建结构化的个人档案。只需做一次，后续所有投递都基于此。",
              },
              {
                step: "02",
                title: "输入目标岗位信息",
                desc: "填写公司名称、岗位名、JD，可选填公司特点和你的投递动机。信息越丰富，输出越精准。",
              },
              {
                step: "03",
                title: "匹配度分析",
                desc: "AI 对比你的档案和 JD，给出匹配度评估：哪些经历是强匹配、哪些需要重新 framing、哪些是短板需要规避。帮你在投递前做出理性判断。",
              },
              {
                step: "04",
                title: "一键生成全套材料",
                desc: "决定投递后，AI 根据匹配分析结果，生成经历描述优化、定制化求职信、自我评价，以及面试准备（业务面问题 + HR 面问题 + 公司及业务介绍）。",
              },
            ].map((item) => (
              <div key={item.step} className="card-playful p-5 flex gap-4">
                <span className="text-2xl font-black text-text-muted/30">{item.step}</span>
                <div>
                  <p className="font-semibold text-sm mb-1">{item.title}</p>
                  <p className="text-sm text-text-light">{item.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </Section>

        {/* 产品思考 */}
        <Section delay={0.2}>
          <h2 className="text-xl font-bold mb-4">设计思考</h2>
          <div className="prose-custom">
            <p>
              市面上的 AI 求职工具大多是"一键优化简历"——把你的内容润色一遍就完了。但真正的求职痛点不是简历写得不好，而是<strong>每一份投递都需要重新思考"怎么讲自己的故事"</strong>。
            </p>
            <p>
              所以 AI 求职助手的设计逻辑不是"帮你写"，而是"帮你想"：先理解你是谁（个人档案），再理解他们要什么（JD 解析），然后在两者之间找到最佳的叙事角度。这其实就是行为科学中 framing effect 的实际应用——同样的经历，换一种讲法，效果可能完全不同。
            </p>
          </div>
        </Section>

        {/* Demo 占位 */}
        <Section delay={0.3}>
          <div className="card-playful p-8 text-center">
            <p className="text-text-muted text-sm mb-2">📸 产品截图 / Demo 视频</p>
            <p className="text-xs text-text-muted">上传后将展示在这里</p>
          </div>
        </Section>
      </div>
    </section>
  );
}
