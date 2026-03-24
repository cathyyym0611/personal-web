"use client";

import { motion } from "framer-motion";
import { projects } from "@/data/resume";
import Link from "next/link";

export default function Projects() {
  const projectTimeline = [
    { period: "2025 - Now", project: projects[0] },
    { period: "2025 - Now", project: projects[1] },
    { period: "2025 - Now", project: projects[2] },
    { period: "2025 Spring", project: projects[3] },
    { period: "2024 - 2025", project: projects[4] },
  ];

  return (
    <section id="projects" className="py-24 px-6">
      <div className="max-w-5xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          className="text-center mb-16"
        >
          <p className="section-eyebrow mb-2">Everything I am building</p>
          <h2 className="section-title text-3xl md:text-5xl font-semibold mb-3">
            💡 我在折腾什么
          </h2>
          <p className="text-text-light">
            从 vibe coding 到正经项目，想到就做
          </p>
        </motion.div>

        <div className="relative">
          <div className="absolute left-[92px] top-0 bottom-0 hidden md:block w-px bg-[linear-gradient(180deg,rgba(213,155,40,0.18),rgba(213,155,40,0.45),rgba(213,155,40,0.18))]" />
          <div className="space-y-8">
            {projectTimeline.map(({ period, project }, i) => {
            const detailHref = project.slug ? `/projects/${project.slug}` : null;
            const CardWrapper = detailHref
              ? ({ children, className }: { children: React.ReactNode; className: string }) => (
                  <Link href={detailHref} className={className}>{children}</Link>
                )
              : ({ children, className }: { children: React.ReactNode; className: string }) => (
                  <div className={className}>{children}</div>
                );

            return (
              <motion.div
                key={`${period}-${project.title}`}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="grid md:grid-cols-[120px_1fr] gap-5 md:gap-8 items-start"
              >
                <div className="relative pt-2">
                  <div className="text-sm font-semibold text-sunny-dark md:text-right">
                    {period}
                  </div>
                  <div className="hidden md:block absolute right-[17px] top-2.5 h-3.5 w-3.5 rounded-full border-2 border-[rgba(213,155,40,0.45)] bg-[rgba(255,250,241,0.96)] shadow-[0_0_0_8px_rgba(255,245,224,0.8)]" />
                </div>
                <CardWrapper className={`card-playful overflow-hidden group block ${detailHref ? "hover:-translate-y-1 transition-all duration-200 cursor-pointer" : ""}`}>
                  {/* Card header */}
                  <div
                    className="p-6 relative"
                    style={{ backgroundColor: `${project.color}10` }}
                  >
                    <div className="flex items-start justify-between">
                      <span className="text-3xl">{project.emoji}</span>
                      {project.isVibe && (
                        <span className="tag-pill bg-sunny/20 text-sunny-dark text-xs font-bold">
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
                          className="tag-pill text-text-light text-xs"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>
                    {detailHref ? (
                      <span
                        className="inline-flex items-center gap-1 text-sm font-semibold"
                        style={{ color: project.color }}
                      >
                        了解更多 →
                      </span>
                    ) : project.link ? (
                      <span
                        className="inline-flex items-center gap-1 text-sm font-semibold"
                        style={{ color: project.color }}
                      >
                        去看看 →
                      </span>
                    ) : null}
                  </div>
                </CardWrapper>
              </motion.div>
            );
          })}
          </div>
        </div>
      </div>
    </section>
  );
}
