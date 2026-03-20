"use client";

import { motion } from "framer-motion";
import { personalInfo } from "@/data/resume";
import { ArrowUp } from "lucide-react";
import { useState } from "react";

const showWip = process.env.NEXT_PUBLIC_SHOW_WIP === "true";

export default function Contact() {
  const [copied, setCopied] = useState(false);

  const copyWechat = async () => {
    await navigator.clipboard.writeText("cathyyym_0611");
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <section id="contact" className="py-24 px-6">
      <div className="max-w-4xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-black mb-3">
            💌 和我聊聊
          </h2>
          <p className="text-text-light max-w-lg mx-auto">
            无论是工作机会、项目合作，还是单纯想聊聊 AI 和旅行，都欢迎找我！
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="grid md:grid-cols-3 gap-6"
        >
          {/* 邮箱 */}
          <a
            href={`mailto:${personalInfo.email}`}
            className="card-playful flex flex-col items-center p-8 text-center group"
          >
            <motion.div
              initial={{ scale: 0 }}
              whileInView={{ scale: 1 }}
              viewport={{ once: true }}
              transition={{ type: "spring" }}
              className="text-4xl mb-4 emoji-pulse"
            >
              📧
            </motion.div>
            <p className="text-sm font-semibold mb-1">邮箱</p>
            <p className="text-xs text-text-light">{personalInfo.email}</p>
          </a>

          {/* 电话 */}
          <a
            href={`tel:${personalInfo.phone}`}
            className="card-playful flex flex-col items-center p-8 text-center group"
          >
            <motion.div
              initial={{ scale: 0 }}
              whileInView={{ scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1, type: "spring" }}
              className="text-4xl mb-4 emoji-pulse"
            >
              📱
            </motion.div>
            <p className="text-sm font-semibold mb-1">电话</p>
            <p className="text-xs text-text-light">{personalInfo.phone}</p>
          </a>

          {/* 微信 - 点击复制 */}
          <button
            onClick={copyWechat}
            className="card-playful flex flex-col items-center p-8 text-center group cursor-pointer"
          >
            <motion.div
              initial={{ scale: 0 }}
              whileInView={{ scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2, type: "spring" }}
              className="text-4xl mb-4 emoji-pulse"
            >
              💬
            </motion.div>
            <p className="text-sm font-semibold mb-1">微信</p>
            <p className="text-xs text-text-light">cathyyym_0611</p>
            <p
              className={`text-xs mt-2 font-medium transition-all ${
                copied
                  ? "text-mint opacity-100"
                  : "text-coral opacity-0 group-hover:opacity-100"
              }`}
            >
              {copied ? "✅ 已复制" : "点击复制微信号"}
            </p>
          </button>
        </motion.div>

        {/* Chatbot mention — only in WIP mode */}
        {showWip && (
          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="text-center text-text-muted text-sm mt-10"
          >
            💡 也可以点击右下角和 AI 盈豫 聊天哦！
          </motion.p>
        )}
      </div>

      {/* Footer */}
      <div className="mt-20 text-center">
        <a
          href="#"
          className="inline-flex items-center gap-2 text-sm text-text-muted hover:text-coral transition-colors mb-4"
        >
          <ArrowUp size={14} />
          回到顶部
        </a>
        <p className="text-xs text-text-muted/60">
          © {new Date().getFullYear()} 毛盈豫 | Made with ✨ and a lot of ☕
        </p>
      </div>
    </section>
  );
}
