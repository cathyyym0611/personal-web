"use client";

import { motion } from "framer-motion";
import { useState } from "react";

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
      className="mb-14"
    >
      {children}
    </motion.div>
  );
}

function Kw({ children }: { children: React.ReactNode }) {
  return <span className="kw">{children}</span>;
}

export default function BehavioralScience() {
  const [expandedPractice, setExpandedPractice] = useState<number | null>(null);

  const practiceExamples = [
    {
      title: "飞书 AI 训练营",
      content: (
        <p className="text-sm text-text-light leading-[1.8]">
          在字节做 AI 训练营的时候，我发现企业客户的问题从来不是<Kw>不知道 AI</Kw>。他们听过无数次 AI 的故事，但就是不用。不敢用，不习惯用，或者更微妙的一种——不觉得和自己有关。所以我做的不是教他们用 AI，而是降低那个看不见的心理门槛：用他们自己的业务场景做演示，而不是讲通用案例；让他们在现场就上手操作，而不是回去再试——因为<Kw>回去再说</Kw>基本等于<Kw>永远不会开始</Kw>。这本质上就是在制造 self-efficacy：让人体验一次"我也可以"，后面的事就自然发生了。
        </p>
      ),
    },
    {
      title: "客户成功中的流程改造",
      content: (
        <p className="text-sm text-text-light leading-[1.8]">
          帮客户做 RPA 和 AI 方案的时候，我习惯先画出他们现有的工作流程，然后找那些<Kw>卡点</Kw>——不是系统卡，而是人卡。比如某个审批环节，系统支持一键通过，但大家还是习惯打印出来签字。这不是技术问题，是行为惯性。我做的事情其实很简单：把<Kw>正确的行为</Kw>变成<Kw>最容易的行为</Kw>。重新设计默认路径，减少用户需要主动做决策的次数。听起来像 UX，但底层其实是 choice architecture。
        </p>
      ),
    },
    {
      title: "ComplexChaos · AI 问卷",
      content: (
        <p className="text-sm text-text-light leading-[1.8]">
          我们的 Capstone 项目在做一个 AI 驱动的问卷系统，遇到的核心问题是：用户做到一半就走了。拆开来看原因其实很清晰：他们不知道还要多久（不确定性产生焦虑）、觉得某些问题跟自己无关（motivation 下降）、或者 AI 对话突然跑偏了（信任崩塌）。我们用了 goal gradient effect——<Kw>你已经完成 60%，还剩大约 2 分钟</Kw>——来利用人越接近终点越愿意坚持的心理。更有意思的是 alignment repair：让 AI 主动说"我理解你刚才提到的是……接下来我会问几个相关问题"，修复对话中断裂的信任。
        </p>
      ),
    },
  ];

  return (
    <section id="behavioral-science" className="py-24 px-6">
      <div className="max-w-3xl mx-auto">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="mb-16"
        >
          <h1 className="text-3xl md:text-4xl font-black mb-4">
            🧠 行为科学是什么？
          </h1>
          <p className="text-text-light text-lg">
            我在学的领域，可能和你想的不太一样。
          </p>
        </motion.div>

        {/* Opening essay */}
        <Section>
          <div className="prose-custom">
            <p>
              我第一次真正理解<Kw>行为科学</Kw>，是在一堂关于 present bias
              的课上。教授问了一个看似简单的问题：为什么你明明知道应该早睡、存钱、准备面试，却总是做不到？
            </p>
            <p>
              答案不是"你不够自律"。是人类的决策系统本身就有 bug——我们天生更在意当下的舒适，而低估未来的代价。这不是个人缺陷，是物种特征。
            </p>
            <p>
              这个领域研究的不是"人应该怎么理性决策"，而是先承认人的不理性，然后问一个更有意思的问题：
              <strong>
                我们能不能通过设计环境，让人更容易做出对自己更好的选择？
              </strong>
            </p>
            <p>
              一个经典的例子是默认选项——把器官捐献从<Kw>主动勾选</Kw>改成<Kw>默认勾选</Kw>，捐献率从不到
              30% 飙升到 90%
              以上。没有人被强迫，没有人被说教，只是默认路径变了。
            </p>
            <p>
              我觉得这就是行为科学最迷人的地方：它不说教，不灌输，而是悄悄地把<Kw>好的选择</Kw>变成<Kw>容易的选择</Kw>。
            </p>
          </div>
          <div className="flex flex-wrap gap-2 mt-6">
            <span className="tag-pill bg-lavender/10 text-lavender text-xs">
              Nudge Theory
            </span>
            <span className="tag-pill bg-lavender/10 text-lavender text-xs">
              Choice Architecture
            </span>
            <span className="tag-pill bg-lavender/10 text-lavender text-xs">
              Present Bias
            </span>
          </div>
        </Section>

        {/* How I think about it */}
        <Section>
          <h2 className="text-xl font-bold mb-5">
            我怎么看待这个领域
          </h2>
          <div className="prose-custom">
            <p>
              学行为科学最大的变化，不是记住了多少个 bias 的名字，而是看问题的方式不一样了。
            </p>
            <p>
              以前遇到<Kw>用户不买单</Kw>、<Kw>客户不配合</Kw>这类问题，我的第一反应是：是不是产品不够好？是不是需要更多培训？现在我会先问一个不同的问题——
              <em>
                是能力不够，还是动机不足，还是环境没有给他机会？
              </em>
            </p>
            <p>
              这来自一个叫 COM-B 的框架：Capability, Opportunity,
              Motivation → Behavior。听起来很学术，但用起来特别实在。大部分时候人不行动，不是不想，是太麻烦了。一个额外的点击、一次多余的跳转、一句让人犹豫的提示语，就足以让人放弃。
            </p>
            <p>
              我对这种<Kw>隐形成本</Kw>特别敏感——那些不会出现在任何数据报表里，但每天都在静悄悄地杀死转化率的东西。
            </p>
          </div>

          {/* COM-B Framework diagram */}
          <div className="my-8 rounded-2xl overflow-hidden border border-border bg-card p-4">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src={`${process.env.NEXT_PUBLIC_BASE_PATH || ""}/images/com-b-model.jpg`}
              alt="COM-B Model: Capability, Opportunity, Motivation → Behavior"
              className="w-full max-w-lg mx-auto rounded-lg"
            />
            <p className="text-xs text-text-muted text-center mt-3">
              COM-B Framework — Michie, van Stralen &amp; West (2011)
            </p>
          </div>

          <div className="flex flex-wrap gap-2 mt-6">
            <span className="tag-pill bg-mint/10 text-mint text-xs">
              COM-B Model
            </span>
            <span className="tag-pill bg-mint/10 text-mint text-xs">
              EAST Framework
            </span>
            <span className="tag-pill bg-mint/10 text-mint text-xs">
              Friction / Sludge
            </span>
          </div>
        </Section>

        {/* Current research direction */}
        <Section>
          <h2 className="text-xl font-bold mb-5">
            我现在最着迷的方向
          </h2>
          <div className="prose-custom">
            <p>
              如果要选一个我现在最想深入的方向，是<strong>人和 AI 之间的信任</strong>。
            </p>
            <p>
              传统行为科学研究的是人和人之间的互动——但当对面坐着的不是人，而是一个算法、一个聊天机器人、一个 AI
              助手，信任的构建方式完全不同。人会用什么线索去判断一个 AI
              是否可信？一句话的措辞变化，会不会让人更愿意接受 AI
              的建议？这种信任一旦建立，又会怎样影响后续的使用行为？
            </p>
            <p>
              我目前在做的实验是一个 2×2 设计：<Kw>AI 披露方式</Kw> × <Kw>规范性 framing</Kw>。简单来说，就是研究"告诉你这是
              AI 说的"这件事本身，配合不同的语言框架，如何改变人对建议的信任度和采纳率。
            </p>
            <p>
              有意思的是，这不只是一个学术问题——每一个正在部署 AI
              产品的公司，都在面对同样的挑战：怎么让用户信任 AI，但又不过度信任？
            </p>
          </div>
          <div className="flex flex-wrap gap-2 mt-6">
            <span className="tag-pill bg-coral/10 text-coral text-xs">
              AI Trust
            </span>
            <span className="tag-pill bg-coral/10 text-coral text-xs">
              Disclosure × Framing
            </span>
            <span className="tag-pill bg-coral/10 text-coral text-xs">
              Human-AI Interaction
            </span>
          </div>
        </Section>

        {/* In practice - expandable */}
        <Section>
          <h2 className="text-xl font-bold mb-2">
            这些理论在工作中长什么样？
          </h2>
          <p className="text-sm text-text-muted mb-6">
            回头看我的实习经历，其实一直在无意识地用行为科学
          </p>
          <div className="space-y-3">
            {practiceExamples.map((item, i) => (
              <div
                key={item.title}
                className="card-playful overflow-hidden cursor-pointer"
                onClick={() =>
                  setExpandedPractice(expandedPractice === i ? null : i)
                }
              >
                <div className="p-5 flex items-center justify-between">
                  <span className="text-sm font-semibold">{item.title}</span>
                  <motion.span
                    animate={{ rotate: expandedPractice === i ? 180 : 0 }}
                    className="text-text-muted text-xs"
                  >
                    ▼
                  </motion.span>
                </div>
                {expandedPractice === i && (
                  <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    className="px-5 pb-5"
                  >
                    <div className="border-t border-border pt-4">
                      {item.content}
                    </div>
                  </motion.div>
                )}
              </div>
            ))}
          </div>
        </Section>
      </div>
    </section>
  );
}
