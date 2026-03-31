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

export default function VocabStoryDetail() {
  return (
    <section className="py-12 px-6">
      <div className="max-w-3xl mx-auto">
        {/* Header */}
        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="mb-12 card-playful p-8">
          <p className="section-eyebrow mb-3">Vibe coding project</p>
          <div className="flex items-center gap-4 mb-4">
            <span className="text-5xl">🎵</span>
            <div>
              <h1 className="text-3xl md:text-4xl font-black" style={{ color: "#FF6B6B" }}>
                词忆
              </h1>
              <p className="text-text-light text-lg">让背单词像讲故事一样自然</p>
            </div>
          </div>
          <div className="flex flex-wrap gap-2 mt-4">
            {["Vibe Coding", "AI", "语言学习", "EdTech"].map((tag) => (
              <span key={tag} className="tag-pill text-xs" style={{ backgroundColor: "#FF6B6B15", color: "#FF6B6B" }}>
                {tag}
              </span>
            ))}
          </div>
          <div className="mt-4">
            <a
              href="https://vocabstory.cc/"
              target="_blank"
              rel="noopener noreferrer"
              className="soft-button soft-button-primary text-sm font-semibold"
            >
              访问词忆 →
            </a>
          </div>
        </motion.div>

        {/* 为什么做 */}
        <Section>
          <h2 className="text-xl font-bold mb-4">为什么做这个？</h2>
          <div className="prose-custom">
            <p>
              背单词是语言学习中最枯燥的环节——打开 App，看一个词，记一个意思，划走，再来一个。循环往复，但真正用的时候还是想不起来。
            </p>
            <p>
              问题不在于你记性差，而在于这些词从来没有在你脑子里建立过<strong>有意义的连接</strong>。认知科学告诉我们，记忆的本质是关联——一个词如果只和一个中文释义绑定，它就是脆弱的；但如果它出现在一个你感兴趣的场景里，和其他词、和一段故事发生关系，它就变得牢固。
            </p>
            <p>
              词忆就是基于这个洞察：<strong>不教你背，让你记住。</strong>
            </p>
          </div>
        </Section>

        {/* 怎么做的 */}
        <Section delay={0.1}>
          <h2 className="text-xl font-bold mb-4">产品逻辑</h2>
          <div className="space-y-4">
            {[
              {
                step: "01",
                title: "输入你正在学的词汇",
                desc: "支持手动输入或批量导入词表，不限语言。",
              },
              {
                step: "02",
                title: "AI 即时生成语境故事",
                desc: "根据你的词汇列表，AI 生成自然、有画面感的故事片段，每个目标词都嵌入真实语境中。",
              },
              {
                step: "03",
                title: "在上下文中记忆",
                desc: "阅读故事时自然吸收词汇含义和用法，不需要死记硬背——就像在阅读中学语言一样。",
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

        {/* Vibe Coding 感悟 */}
        <Section delay={0.2}>
          <h2 className="text-xl font-bold mb-4">Vibe Coding 感悟</h2>
          <div className="prose-custom">
            <p>
              词忆是我第一个从零到上线的 vibe coding 项目。没有详细的 PRD，没有团队评审，就是一个想法冒出来，然后用最快的方式把它变成现实。
            </p>
            <p>
              这个过程让我意识到，很多时候阻止你做一件事的不是技术门槛，而是"准备好再开始"的心态。Vibe coding 的哲学是：<strong>先做出来，再做对，最后做好。</strong>
            </p>
          </div>
        </Section>

        {/* Demo */}
        <Section delay={0.3}>
          <div className="card-playful p-6">
            <p className="text-text-muted text-sm mb-4">🎬 产品 Demo</p>
            <div className="rounded-[1.25rem] overflow-hidden border border-border bg-[rgba(255,251,244,0.8)]">
              <video
                controls
                playsInline
                preload="metadata"
                className="w-full h-auto block"
              >
                <source
                  src={`${process.env.NEXT_PUBLIC_BASE_PATH || ""}/videos/vocabstory-demo.MOV`}
                  type="video/quicktime"
                />
                你的浏览器暂不支持视频播放。
              </video>
            </div>
            <p className="text-xs text-text-muted mt-3">
              点击播放即可在当前页面查看 Demo
            </p>
          </div>
        </Section>
      </div>
    </section>
  );
}
