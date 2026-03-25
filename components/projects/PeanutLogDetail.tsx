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

export default function PeanutLogDetail() {
  return (
    <section className="py-12 px-6">
      <div className="max-w-3xl mx-auto">
        {/* Header */}
        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="mb-12 card-playful p-8">
          <p className="section-eyebrow mb-3">Vibe coding project</p>
          <div className="flex items-center gap-4 mb-4">
            <span className="text-5xl">🥜</span>
            <div>
              <h1 className="text-3xl md:text-4xl font-black" style={{ color: "#FFB347" }}>
                见梨存档
              </h1>
              <p className="text-text-light text-lg">陈楚生粉丝的追星记忆库</p>
            </div>
          </div>
          <div className="flex flex-wrap gap-2 mt-4">
            {["Vibe Coding", "小程序", "粉丝社区"].map((tag) => (
              <span key={tag} className="tag-pill text-xs" style={{ backgroundColor: "#FFB34715", color: "#FFB347" }}>
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

        {/* 为什么做 */}
        <Section>
          <h2 className="text-xl font-bold mb-4">为什么做这个？</h2>
          <div className="prose-custom">
            <p>
              追星的快乐很大一部分来自<strong>记录和回忆</strong>——你去了哪些演唱会、在哪个城市、听了哪些歌、和谁一起去的。但这些记忆散落在朋友圈、相册、聊天记录里，时间久了就模糊了。
            </p>
            <p>
              见梨存档想做的事很简单：给每一次"在场"留一个清晰的印记。不是社交平台，不是打卡工具，而是一本属于你自己的<strong>追星记忆手账</strong>。
            </p>
          </div>
        </Section>

        {/* 核心功能 */}
        <Section delay={0.1}>
          <h2 className="text-xl font-bold mb-4">核心功能</h2>
          <div className="grid md:grid-cols-2 gap-4">
            {[
              {
                emoji: "🎤",
                title: "线下活动记录",
                desc: "记录每一场演唱会、音乐节、见面会——时间、地点、座位、心情，一次都不落下。",
              },
              {
                emoji: "🎵",
                title: "歌曲自动统计",
                desc: "记录活动后系统自动统计你听过的歌，生成个人听歌图谱：哪些歌听了最多次，哪些歌只在特定场合出现过。",
              },
              {
                emoji: "💰",
                title: "追星开销追踪",
                desc: "门票、交通、住宿、周边……追星是快乐的，但也是有成本的。清楚地知道自己花了多少，才能更理性地快乐。",
              },
              {
                emoji: "📊",
                title: "演出热力图",
                desc: "可视化显示各省份演唱会、音乐节的场次数，帮你一眼看清自己追星足迹最密集的地方，也能回看哪些城市和地区留下了最多现场记忆。",
              },
            ].map((item) => (
              <div key={item.title} className="card-playful p-5">
                <span className="text-2xl mb-2 block">{item.emoji}</span>
                <p className="font-semibold text-sm mb-1">{item.title}</p>
                <p className="text-sm text-text-light">{item.desc}</p>
              </div>
            ))}
          </div>
        </Section>

        {/* 设计思考 */}
        <Section delay={0.2}>
          <h2 className="text-xl font-bold mb-4">为什么选择小程序？</h2>
          <div className="prose-custom">
            <p>
              粉丝群体的日常交流几乎都在微信里——群聊、朋友圈、公众号。小程序意味着<strong>零安装成本</strong>，在群里分享一个链接就能打开，和粉丝的使用场景天然贴合。
            </p>
            <p>
              产品设计上，见梨存档追求的是"轻"——不需要每天打开，不推送、不打扰，只在你需要记录的时候出现。一场演唱会结束，打开记录一下，三分钟搞定。但当你某天想回看这些年的追星轨迹时，它都在。
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
