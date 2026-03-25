// ===== 个人信息 =====
export const personalInfo = {
  name: "盈豫",
  nameEn: "Cathy Mao",
  fullName: "毛盈豫",
  tagline: "行为科学 × AI × 永远在折腾",
  subtitle: "宾大行为科学硕士 / 密歇根大学经济&统计本科",
  email: "cathymaoyy@gmail.com",
  phone: "+86 15888544398",
  location: "浙江宁波 / 费城",
  wechat: "cathyyym_0611",
  summary:
    `我是盈豫，一个对"人为什么这样做决定"着迷的人。我在宾大学行为科学，研究人和 AI 之间的信任关系；在字节跳动，我把 AI 从"听说过"变成"用得上"；工作之外，我旅行、vibe code，试图让生活和思考都不无聊。`,
  keywords: [
    "AI 探索者 🤖",
    "行为科学研究者 🧠",
    "Vibe Coder 💻",
    "旅行爱好者 ✈️",
    "多邻国 1600 天 🦉",
  ],
};

// ===== Fun Facts =====
export const funFacts = [
  {
    emoji: "🦉",
    label: "多邻国 Streak",
    value: "1600+ 天",
    detail: "可能是意志力，也可能是 sunk cost fallacy 😂",
    color: "#58CC02",
  },
  {
    emoji: "🤖",
    label: "AI Agent",
    value: "独立搭建 & 落地",
    detail: "从 Aily 到 Coze，在字节实际投入使用，300+ 人好评",
    color: "#FF6B6B",
  },
  {
    emoji: "🌍",
    label: "旅行足迹",
    value: "多个国家 & 城市",
    detail: "每个城市都有故事，用脚步丈量世界",
    color: "#4ECDC4",
  },
  {
    emoji: "💻",
    label: "Vibe Coder",
    value: "想到就做",
    detail: `最近做了"词忆"——一个帮你记单词的小工具`,
    color: "#FFB347",
  },
];

// ===== 教育 =====
export const education = [
  {
    school: "宾夕法尼亚大学",
    schoolEn: "University of Pennsylvania",
    degree: "行为与决策科学 硕士",
    period: "2025.08 – 2026.05",
    emoji: "🏛️",
  },
  {
    school: "密歇根大学安娜堡分校",
    schoolEn: "University of Michigan",
    degree: "经济、统计 本科",
    period: "2022.08 – 2025.05",
    emoji: "〽️",
  },
];

// ===== 首页导航卡片 =====
export const exploreCards = [
  {
    title: "思考",
    emoji: "🧠",
    description: "行为科学——人为什么会这样做决定？",
    href: "/behavioral-science",
    color: "#A78BFA",
  },
  {
    title: "足迹",
    emoji: "🚀",
    description: "字节、PwC…在 AI 与互联网里摸爬滚打",
    href: "/experience",
    color: "#3370FF",
  },
  {
    title: "追问",
    emoji: "🔍",
    description: "差分隐私、教育政策——用数据回答重要的问题",
    href: "/research",
    color: "#4ECDC4",
  },
  {
    title: "折腾",
    emoji: "💡",
    description: "Vibe coding、Capstone、创投社团",
    href: "/projects",
    color: "#FF6B6B",
  },
  {
    title: "在路上",
    emoji: "✈️",
    description: "用脚步丈量世界，用照片留住记忆",
    href: "/travel",
    color: "#FFB347",
  },
  {
    title: "手记",
    emoji: "🎨",
    description: "Slide 设计、海报、活动物料",
    href: "/portfolio",
    color: "#E0681D",
  },
];

// ===== 经历 =====
export const experiences = [
  {
    company: "字节跳动",
    companyEn: "ByteDance",
    role: "飞书商业化 · 客户成功实习生",
    period: "2025.05 – 2025.08",
    location: "北京",
    emoji: "🚀",
    color: "#3370FF",
    story:
      `在飞书商业化团队，我以"轻咨询 + 重运营"的方式服务大客户，深度参与了从新客上线到续约增购的全流程。最让我兴奋的是 AI 专项——我独立搭建了 2 个 AI Agent，策划了飞书首场线下 AI 训练营，还帮客户诊断了 20+ 份 AI 落地方案。`,
    highlights: [
      "交付 8 套 RPA & AI 解决方案，沉淀 30+ 可复用服务案例",
      "独立搭建 AI Agent → 发布后获 300+ 人团队好评，成为必用工具",
      "策划首场线下 AI 训练营，150+ 企业用户参与，满意度 98%",
      "推动 3 家新签企业全员上线，直接促成 2 次增购",
    ],
    tags: ["AI Agent", "客户成功", "活动运营", "SaaS"],
  },
  {
    company: "普华永道",
    companyEn: "PwC",
    role: "数字化咨询实习生",
    period: "2024.06 – 2024.08",
    location: "深圳",
    emoji: "💼",
    color: "#E0681D",
    story:
      "在 PwC 的数字化咨询团队，我参与了 4 家跨行业客户的数字化转型项目。从用户访谈到方案交付，第一次体验了用结构化思维拆解复杂业务问题的快感。",
    highlights: [
      "15+ 次用户访谈，拆解 20+ 条业务流程",
      "联合团队交付 6 套定制化方案，效率提升 20-25%",
      "完成 3 份行业竞争与趋势分析简报",
    ],
    tags: ["数字化咨询", "CRM", "用户访谈"],
  },
];

// 简略提及的其他经历
export const otherExperiences = [
  { company: "科尔尼", role: "咨询实习生", period: "2025.01–05", emoji: "📊" },
  {
    company: "中信建投证券",
    role: "行研实习生",
    period: "2024.02–05",
    emoji: "📈",
  },
];

// ===== Research =====
export const research = [
  {
    title: "Privacy-Protected Linear Regression",
    subtitle: "差分隐私 × 因果推断",
    role: "Research Assistant",
    advisor: "Prof. Johann Gagnon-Bartsch · UMich Statistics",
    emoji: "🔐",
    color: "#4ECDC4",
    description:
      "在保护数据隐私（加入噪声）的情况下，我们还能不能做可靠的因果推断？这个项目探索了隐私保护与统计效用之间的 trade-off。",
    details: [
      "评估了三种差分隐私算法（ridge regression approximation、Wishart、inverse-Wishart）在不同 ε/δ 下的表现",
      "发现 Wishart 分布在大多数场景下产生最低 MSE",
      "隐私保护 vs 数据可用性的 trade-off，和后来对 AI 信任的研究隐约相连",
    ],
    hasPoster: true,
    tags: ["Differential Privacy", "Causal Inference", "R"],
  },
  {
    title: "Education Stabilization Fund 政策效果评估",
    subtitle: "Econ Honors Thesis",
    role: "独立研究",
    advisor: "UMich Economics · 高等荣誉毕业",
    emoji: "📚",
    color: "#A78BFA",
    description:
      "疫情期间美国投入大量教育救助资金（ESF），但这些钱真的改善了学生的教育结果吗？我的论文从毕业率、SAT 成绩、AP 参与率等维度做了政策效果评估。",
    details: [
      "把资金投入作为 treatment，评估对教育产出的因果影响",
      "这是宏观层面的 policy evaluation——和现在做的微观行为干预设计，是同一条线的不同层级",
    ],
    hasPoster: false,
    tags: ["Policy Evaluation", "Causal Inference", "Stata"],
  },
];

// ===== 项目 =====
export const projects = [
  {
    title: "词忆",
    subtitle: "让背单词像讲故事一样自然",
    description:
      "把枯燥的单词表变成有上下文的记忆场景——AI 根据你正在学的词汇，即时生成故事和语境，让每个词都有画面感。不教你背，让你记住。",
    tags: ["Vibe Coding", "AI", "语言学习", "EdTech"],
    emoji: "🎵",
    color: "#FF6B6B",
    link: "https://vocabstory.cc/",
    isVibe: true,
    slug: "vocabstory",
    period: "2026.03 - Ongoing",
  },
  {
    title: "AI求职助手",
    subtitle: "从简历到 offer 的全流程 AI 陪伴",
    description:
      "上传一次简历，AI 解析生成你的专属档案。每次投递时输入 JD，自动生成匹配度分析、经历优化、求职信、面试准备，把原本碎片化又高重复的求职准备流程串成一条更省力的工作流。",
    tags: ["Vibe Coding", "AI", "求职", "产品设计"],
    emoji: "🎯",
    color: "#3370FF",
    link: null,
    isVibe: true,
    slug: "job-assistant",
    period: "2026.03 - Ongoing",
  },
  {
    title: "见梨存档",
    subtitle: "陈楚生粉丝的追星记忆库",
    description:
      "为粉丝设计的追星记录小程序：记录每一场演唱会和音乐节，自动统计听过的歌，追踪追星开销，把零散回忆整理成一份可以反复翻看的个人追星档案。",
    tags: ["Vibe Coding", "小程序", "粉丝社区"],
    emoji: "🥜",
    color: "#FFB347",
    link: null,
    isVibe: true,
    slug: "peanut-log",
    period: "2026.03 - Ongoing",
  },
  {
    title: "ComplexChaos",
    subtitle: "Behavioral Science × Conversational AI",
    description:
      "为 ComplexChaos 设计行为科学驱动的解决方案，目标是降低员工在使用 conversational AI 进行协作时的流失率。项目聚焦 misalignment、continuity 与 trust 等关键 friction，并产出可落地的 intervention 设计。",
    tags: ["行为科学", "AI", "用户研究", "Capstone"],
    emoji: "🧪",
    color: "#4ECDC4",
    link: null,
    isVibe: false,
    slug: "complexchaos",
    period: "2025.09 - 2026.05",
  },
  {
    title: "Sonia Health",
    subtitle: "Campus Ambassador Program",
    description:
      "为心理健康类 AI 应用 Sonia Health 从 0 到 1 搭建校园大使项目，设计招募物料与运营手册，在校内完成试点并验证早期规模化增长路径。",
    tags: ["用户增长", "Campus Strategy", "Project Lead"],
    emoji: "🚀",
    color: "#A78BFA",
    link: null,
    isVibe: false,
    slug: "sonia-health",
    period: "2024.01 - 2024.04",
  },
  {
    title: "Ambient Intelligence",
    subtitle: "Healthcare Market Demand Assessment",
    description:
      "为开发非接触式患者监测传感器的医疗科技初创公司做市场需求评估，通过 stakeholder interviews、surveys 与 use case 分析支持其 target segment 与 GTM 决策。",
    tags: ["Market Research", "Healthcare", "Project Lead"],
    emoji: "🩺",
    color: "#D59B28",
    link: null,
    isVibe: false,
    slug: "ambient-intelligence",
    period: "2024.09 - 2024.12",
  },
];

// ===== 旅行 =====
export const travelRegions = [
  {
    region: "北美",
    emoji: "🗽",
    places: [
      { name: "Ann Arbor", tag: "大学四年的家", color: "#FFE66D" },
      { name: "Philadelphia", tag: "研究生新篇章", color: "#4ECDC4" },
      { name: "New York", tag: "永远的大苹果", color: "#FF6B6B" },
    ],
  },
  {
    region: "中国",
    emoji: "🏮",
    places: [
      { name: "宁波", tag: "家乡", color: "#A78BFA" },
      { name: "北京", tag: "字节的夏天", color: "#FF6B6B" },
      { name: "上海", tag: "实习与探索", color: "#4ECDC4" },
      { name: "深圳", tag: "PwC 的日子", color: "#FFE66D" },
    ],
  },
  {
    region: "更多足迹",
    emoji: "✈️",
    places: [{ name: "待解锁", tag: "下一站是哪里？", color: "#74B9FF" }],
  },
];

// ===== 作品集 =====
export const portfolioItems = [
  {
    title: "AI 训练营活动物料",
    category: "活动设计",
    description: "飞书首场线下 AI 训练营的活动策划 slide 与宣传物料",
    emoji: "🎯",
    color: "#3370FF",
  },
  {
    title: "社团活动设计",
    category: "平面设计",
    description: "社团活动中的海报、宣传材料设计",
    emoji: "🎨",
    color: "#FF6B6B",
  },
  {
    title: "Michigan Venture Club",
    category: "商业分析",
    description: "创投社团中为初创公司准备的分析 deck 与策略方案",
    emoji: "📊",
    color: "#A78BFA",
  },
  {
    title: "面试准备材料",
    category: "Slide 设计",
    description: "求职过程中准备的 case study 展示与个人介绍 deck",
    emoji: "💼",
    color: "#E0681D",
  },
  {
    title: "Canvas 海报设计",
    category: "视觉设计",
    description: "用 Canva 制作的各类海报和信息图",
    emoji: "✨",
    color: "#4ECDC4",
  },
];

// ===== 技能标签 =====
export const skillTags = [
  { name: "Python", emoji: "🐍" },
  { name: "R", emoji: "📊" },
  { name: "SQL", emoji: "🗃️" },
  { name: "AI Agent (Aily/Coze)", emoji: "🤖" },
  { name: "NLP / LLM / RAG", emoji: "🧠" },
  { name: "英语 (托福111)", emoji: "🇺🇸" },
  { name: "德语 (入门)", emoji: "🇩🇪" },
];

// ===== Chatbot 配置 =====
export const chatbotConfig = {
  name: "AI 盈豫",
  avatar: "🤖",
  greeting:
    "Hey！我是 AI 版的盈豫～ 你可以问我关于盈豫的经历、项目、兴趣，或者随便聊聊都行！",
  systemPrompt: `你是毛盈豫（Cathy Mao）的 AI 分身，部署在她的个人网站上。你的任务是以她的风格和口吻与访客互动。

关于盈豫的背景：
- 宾夕法尼亚大学行为与决策科学硕士，密歇根大学安娜堡分校经济&统计本科
- 行为科学核心关注：人为什么不按最优决策行动？如何通过设计环境来改善决策？
- 目前在研究 AI 信任（2×2实验：AI披露方式 × 规范性framing）
- 在字节跳动飞书做过 AI 落地和客户成功，独立搭建 AI Agent，策划 AI 训练营
- 在普华永道做过数字化咨询
- 做过差分隐私与因果推断的研究（Prof. Johann Gagnon-Bartsch）
- Econ Honors Thesis 关于 ESF 教育政策评估
- 喜欢旅行、vibe coding、学语言（多邻国 streak 1600+ 天）
- 做了"词忆"vibe coding 项目
- 宾大 Capstone 项目 ComplexChaos：用行为科学降低 AI 问卷流失率

你的语气风格：
- 亲切自然，像朋友聊天一样
- 中文为主，偶尔夹杂英文术语
- 有条理但不死板，偶尔用 emoji
- 对 AI 和行为科学话题有热情
- 诚实谦虚，不夸大成就
- 不了解的问题建议直接联系盈豫本人

注意：保持回复简洁（2-4 句），不编造经历，可以推荐访客去看网页上的具体板块。`,
};
