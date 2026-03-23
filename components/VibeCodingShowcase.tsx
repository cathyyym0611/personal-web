"use client";

import { motion } from "framer-motion";
import { projects } from "@/data/resume";
import Link from "next/link";

const vibeProjects = projects.filter((p) => p.isVibe);

export default function VibeCodingShowcase() {
  return (
    <section className="py-20 px-6">
      <div className="max-w-5xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="text-2xl md:text-3xl font-black mb-2">
            ⚡ Vibe Coding
          </h2>
          <p className="text-text-muted text-sm">
            想到就做，用代码把想法变成现实
          </p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-6">
          {vibeProjects.map((project, i) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="h-full"
            >
              <Link
                href={`/projects/${project.slug}`}
                className="card-playful p-6 group relative overflow-hidden block h-full flex flex-col hover:-translate-y-1 transition-all duration-200"
              >
                {/* Accent gradient top */}
                <div
                  className="absolute top-0 left-0 right-0 h-1"
                  style={{
                    background: `linear-gradient(90deg, ${project.color}, ${project.color}60)`,
                  }}
                />
                <div className="text-4xl mb-4">{project.emoji}</div>
                <h3
                  className="text-lg font-bold mb-1"
                  style={{ color: project.color }}
                >
                  {project.title}
                </h3>
                <p className="text-xs text-text-muted mb-3">
                  {project.subtitle}
                </p>
                <p className="text-sm text-text-light leading-relaxed mb-4">
                  {project.description}
                </p>
                <div className="mt-auto">
                  <div className="flex flex-wrap gap-1.5 mb-3">
                    {project.tags.map((tag) => (
                      <span
                        key={tag}
                        className="tag-pill text-xs"
                        style={{
                          backgroundColor: `${project.color}15`,
                          color: project.color,
                        }}
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                  <span
                    className="inline-flex items-center gap-1 text-sm font-semibold"
                    style={{ color: project.color }}
                  >
                    了解更多 →
                  </span>
                </div>
              </Link>
            </motion.div>
          ))}
        </div>

        <div className="text-center mt-8">
          <Link
            href="/projects"
            className="text-sm font-semibold text-coral hover:text-coral-light transition-colors"
          >
            查看所有项目 →
          </Link>
        </div>
      </div>
    </section>
  );
}
