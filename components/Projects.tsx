"use client";

import { motion } from "framer-motion";
import { projects } from "@/data/resume";
import Link from "next/link";

const monthNames = [
  "January",
  "February",
  "March",
  "April",
  "May",
  "June",
  "July",
  "August",
  "September",
  "October",
  "November",
  "December",
];

function formatTimelinePeriod(period: string) {
  const formatPart = (value: string) => {
    if (value === "Ongoing") return value;

    const [year, month] = value.split(".");
    const monthIndex = Number(month) - 1;

    if (!year || Number.isNaN(monthIndex) || monthIndex < 0 || monthIndex > 11) {
      return value;
    }

    return `${monthNames[monthIndex]} ${year}`;
  };

  const [start, end] = period.split(" - ");

  if (!end) return formatPart(start);

  return `${formatPart(start)} - ${formatPart(end)}`;
}

export default function Projects() {
  const timelineProjects = [
    projects.find((project) => project.slug === "vocabstory"),
    projects.find((project) => project.slug === "job-assistant"),
    projects.find((project) => project.slug === "peanut-log"),
    projects.find((project) => project.slug === "complexchaos"),
    projects.find((project) => project.slug === "ambient-intelligence"),
    projects.find((project) => project.slug === "sonia-health"),
  ].filter((project): project is (typeof projects)[number] => Boolean(project));

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
          <div className="absolute left-[146px] top-0 bottom-0 hidden md:block w-px bg-[linear-gradient(180deg,rgba(213,155,40,0.18),rgba(213,155,40,0.45),rgba(213,155,40,0.18))]" />
          <div className="space-y-8">
            {timelineProjects.map((project, i) => {
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
                key={`${project.period}-${project.title}`}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="grid md:grid-cols-[180px_1fr] gap-5 md:gap-8 items-start"
              >
                <div className="relative pt-2 z-10">
                  <div className="text-sm font-semibold text-sunny-dark md:text-right pr-8 bg-[linear-gradient(90deg,transparent_0%,rgba(247,241,231,0.92)_16%,rgba(247,241,231,1)_100%)]">
                    {formatTimelinePeriod(project.period)}
                  </div>
                  <div className="hidden md:block absolute right-[25px] top-2.5 h-3.5 w-3.5 rounded-full border-2 border-[rgba(213,155,40,0.45)] bg-[rgba(255,250,241,0.96)] shadow-[0_0_0_8px_rgba(255,245,224,0.8)]" />
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
