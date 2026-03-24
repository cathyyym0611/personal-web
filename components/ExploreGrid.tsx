"use client";

import { motion } from "framer-motion";
import { exploreCards } from "@/data/resume";
import Link from "next/link";

const wipHrefs = ["/travel", "/portfolio"];

export default function ExploreGrid() {
  const showWip = process.env.NEXT_PUBLIC_SHOW_WIP === "true";
  const visibleCards = showWip
    ? exploreCards
    : exploreCards.filter((c) => !wipHrefs.includes(c.href));

  return (
    <section className="py-20 px-6">
      <div className="max-w-5xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <p className="section-eyebrow mb-2">Explore more</p>
          <h2 className="section-title text-3xl md:text-5xl font-semibold mb-2">
            想了解更多？
          </h2>
          <p className="text-text-muted text-sm">
            点击任意卡片，看看我的不同面
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {visibleCards.map((card, i) => (
            <motion.div
              key={card.href}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.08 }}
              className="h-full"
            >
              <Link
                href={card.href}
                className="card-playful p-6 block group h-full hover:-translate-y-1 transition-all duration-200"
              >
                <span className="text-3xl mb-3 block group-hover:scale-110 transition-transform">
                  {card.emoji}
                </span>
                <h3
                  className="font-bold text-sm mb-1"
                  style={{ color: card.color }}
                >
                  {card.title}
                </h3>
                <p className="text-xs text-text-muted leading-relaxed">
                  {card.description}
                </p>
              </Link>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
