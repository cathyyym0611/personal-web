"use client";

import { motion } from "framer-motion";
import { projects } from "@/data/resume";

export default function Projects() {
  return (
    <section id="projects" className="py-24 px-6">
      <div className="max-w-5xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-black mb-3">
            💡 我在折腾什么
          </h2>
          <p className="text-text-light">
            从 vibe coding 到正经项目，想到就做
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((project, i) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="card-playful overflow-hidden group"
            >
              {/* Card header */}
              <div
                className="p-6 relative"
                style={{ backgroundColor: `${project.color}10` }}
              >
                <div className="flex items-start justify-between">
                  <span className="text-3xl">{project.emoji}</span>
                  {project.isVibe && (
                    <span className="tag-pill bg-coral/10 text-coral text-xs font-bold">
                      ⚡ Vibe Coding
                    </span>
                  )}
                </div>
                <h3 className="text-lg font-bold mt-3" style={{ color: project.color }}>
                  {project.title}
                </h3>
                <p className="text-sm text-text-muted">{project.subtitle}</p>
              </div>

              {/* Card body */}
              <div className="p-6">
                <p className="text-sm text-text-light leading-relaxed mb-4">
                  {project.description}
                </p>
                <div className="flex flex-wrap gap-1.5 mb-4">
                  {project.tags.map((tag) => (
                    <span
                      key={tag}
                      className="tag-pill bg-cream text-text-light text-xs"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
                {project.link && (
                  <a
                    href={project.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1 text-sm font-semibold transition-colors"
                    style={{ color: project.color }}
                  >
                    去看看 →
                  </a>
                )}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
