import type { Metadata } from "next";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Chatbot from "@/components/Chatbot";

export const metadata: Metadata = {
  title: "盈豫 | AI × 行为科学 × 永远在折腾",
  description:
    "我是毛盈豫（Cathy Mao），宾大行为科学硕士，对 AI 着迷的折腾家。旅行、Vibe Coding，用自己的方式探索世界。",
  keywords: [
    "毛盈豫",
    "Cathy Mao",
    "AI",
    "行为科学",
    "宾夕法尼亚大学",
    "Vibe Coding",
  ],
};

const showWip = process.env.NEXT_PUBLIC_SHOW_WIP === "true";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="zh-CN">
      <head>
        <link
          href="https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700;800;900&family=Noto+Sans+SC:wght@300;400;500;700;900&display=swap"
          rel="stylesheet"
        />
      </head>
      <body className="antialiased">
        <Navbar />
        {children}
        {showWip && <Chatbot />}
      </body>
    </html>
  );
}
