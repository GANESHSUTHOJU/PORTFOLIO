import { motion } from "framer-motion";
import { Briefcase, Calendar, MapPin } from "lucide-react";
import { SectionHeader } from "./AboutSection";

const EXP = [
  {
    role: "AI Intern",
    company: "GenAI Lakes Pvt Ltd",
    location: "T-Hub, Hyderabad",
    period: "May 2025 – Jul 2025",
    bullets: [
      "Developed an Enterprise AI Search System with semantic retrieval.",
      "Integrated Google Drive APIs for unified knowledge ingestion.",
      "Designed metadata extraction pipelines for document intelligence.",
      "Built Streamlit dashboards and the FastJob99 resume aggregation platform.",
      "Stack: Node.js · React · MongoDB · Python.",
    ],
    tags: ["AI", "Streamlit", "Node.js", "React", "MongoDB"],
  },
  {
    role: "Developer Intern (C++)",
    company: "CipherByte Technologies",
    location: "Remote",
    period: "Jun 2024 – Aug 2024",
    bullets: [
      "Implemented object-oriented C++ modules and algorithmic solutions.",
      "Designed and optimized core data structures for performance.",
      "Improved runtime efficiency across critical legacy paths.",
    ],
    tags: ["C++", "OOP", "DSA"],
  },
  {
    role: "Web Development Intern",
    company: "Cognorise Infotech",
    location: "Remote",
    period: "Jun 2024 – Aug 2024",
    bullets: [
      "Built responsive frontends and integrated REST APIs.",
      "Developed backend services and database schemas.",
      "Shipped end-to-end features across multiple internal tools.",
    ],
    tags: ["Frontend", "Backend", "APIs"],
  },
];

export function ExperienceSection() {
  return (
    <section id="experience" className="relative py-24 sm:py-32">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <SectionHeader eyebrow="Experience" title="Where I've shipped." />

        <div className="relative mt-14">
          {/* Spine line */}
          <div className="pointer-events-none absolute left-4 top-0 hidden h-full w-px bg-gradient-to-b from-primary/60 via-secondary/40 to-transparent md:left-1/2 md:block" />

          <div className="space-y-10">
            {EXP.map((e, i) => {
              const left = i % 2 === 0;
              return (
                <motion.div
                  key={e.role + e.company}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-100px" }}
                  transition={{ duration: 0.5 }}
                  className="relative md:grid md:grid-cols-2 md:gap-10"
                >
                  {/* Dot */}
                  <div className="pointer-events-none absolute left-4 top-6 hidden md:left-1/2 md:block md:-translate-x-1/2">
                    <div className="grid h-4 w-4 place-items-center rounded-full bg-gradient-primary glow-primary">
                      <span className="h-1.5 w-1.5 rounded-full bg-background" />
                    </div>
                  </div>

                  <div className={left ? "md:pr-10 md:text-right" : "md:col-start-2 md:pl-10"}>
                    <div className="glass-card group p-6 transition-all hover:-translate-y-1 hover:border-primary/30">
                      <div className={`flex flex-wrap items-center gap-2 text-xs text-muted-foreground ${left ? "md:justify-end" : ""}`}>
                        <span className="inline-flex items-center gap-1 font-mono"><Calendar className="h-3 w-3" /> {e.period}</span>
                        <span className="text-foreground/30">·</span>
                        <span className="inline-flex items-center gap-1"><MapPin className="h-3 w-3" /> {e.location}</span>
                      </div>
                      <div className={`mt-2 flex items-center gap-2 ${left ? "md:justify-end" : ""}`}>
                        <div className="grid h-8 w-8 place-items-center rounded-lg bg-gradient-primary text-primary-foreground">
                          <Briefcase className="h-4 w-4" />
                        </div>
                        <h3 className="font-display text-lg font-semibold">{e.role}</h3>
                      </div>
                      <div className={`mt-1 text-sm text-primary ${left ? "md:text-right" : ""}`}>{e.company}</div>

                      <ul className={`mt-4 space-y-2 text-sm text-muted-foreground ${left ? "md:text-right" : ""}`}>
                        {e.bullets.map((b) => (
                          <li key={b} className={`flex gap-2 ${left ? "md:flex-row-reverse" : ""}`}>
                            <span className="mt-1.5 h-1 w-1 shrink-0 rounded-full bg-primary" />
                            <span>{b}</span>
                          </li>
                        ))}
                      </ul>

                      <div className={`mt-4 flex flex-wrap gap-2 ${left ? "md:justify-end" : ""}`}>
                        {e.tags.map((t) => (
                          <span key={t} className="rounded-full border border-border bg-muted/50 px-2.5 py-0.5 font-mono text-[10px] text-muted-foreground">
                            {t}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
