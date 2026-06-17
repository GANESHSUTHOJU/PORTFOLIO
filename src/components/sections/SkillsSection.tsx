import { motion } from "framer-motion";
import { SectionHeader } from "./AboutSection";
import {
  Code2, Server, Database, Terminal, Wrench,
} from "lucide-react";

const GROUPS = [
  {
    icon: Code2,
    title: "Frontend",
    color: "from-[#00E5FF] to-[#22D3EE]",
    items: [
      { name: "React.js", level: 92 },
      { name: "JavaScript", level: 95 },
      { name: "Tailwind CSS", level: 95 },
      { name: "HTML", level: 98 },
      { name: "CSS", level: 95 },
    ],
  },
  {
    icon: Server,
    title: "Backend",
    color: "from-[#7B61FF] to-[#A78BFA]",
    items: [
      { name: "Node.js", level: 88 },
      { name: "Express.js", level: 86 },
      { name: "Flask", level: 80 },
      { name: "FastAPI", level: 82 },
    ],
  },
  {
    icon: Database,
    title: "Databases",
    color: "from-[#00E5FF] to-[#7B61FF]",
    items: [
      { name: "MongoDB", level: 88 },
      { name: "PostgreSQL", level: 84 },
    ],
  },
  {
    icon: Terminal,
    title: "Languages",
    color: "from-[#7B61FF] to-[#00E5FF]",
    items: [
      { name: "Python", level: 90 },
      { name: "JavaScript", level: 95 },
      { name: "SQL", level: 85 },
      { name: "C++", level: 80 },
    ],
  },
  {
    icon: Wrench,
    title: "Tools",
    color: "from-[#00E5FF] to-[#7B61FF]",
    items: [
      { name: "Git", level: 90 },
      { name: "Docker", level: 80 },
      { name: "VS Code", level: 98 },
    ],
  },
];

export function SkillsSection() {
  return (
    <section id="skills" className="relative py-24 sm:py-32">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <SectionHeader
          eyebrow="Skills"
          title="The stack I build with."
          sub="A modern, opinionated toolkit chosen for speed, scale, and craft."
        />

        <div className="mt-14 grid gap-5 md:grid-cols-2 lg:grid-cols-3">
          {GROUPS.map((g, gi) => (
            <motion.div
              key={g.title}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-80px" }}
              transition={{ duration: 0.5, delay: gi * 0.05 }}
              className="glass-card group relative overflow-hidden p-6 hover:-translate-y-1 hover:border-primary/30"
            >
              <div className="pointer-events-none absolute -right-12 -top-12 h-32 w-32 rounded-full bg-gradient-to-br opacity-20 blur-2xl transition-opacity group-hover:opacity-40"
                style={{ backgroundImage: "var(--gradient-primary)" }} />
              <div className="flex items-center gap-3">
                <div className={`grid h-10 w-10 place-items-center rounded-xl bg-gradient-to-br ${g.color}`}>
                  <g.icon className="h-5 w-5 text-background" />
                </div>
                <h3 className="font-display text-lg font-semibold">{g.title}</h3>
              </div>

              <div className="mt-5 space-y-4">
                {g.items.map((it, i) => (
                  <div key={it.name}>
                    <div className="flex items-center justify-between text-sm">
                      <span className="text-foreground/90">{it.name}</span>
                      <span className="font-mono text-xs text-muted-foreground">{it.level}%</span>
                    </div>
                    <div className="mt-1.5 h-1.5 overflow-hidden rounded-full bg-white/5">
                      <motion.div
                        initial={{ width: 0 }}
                        whileInView={{ width: `${it.level}%` }}
                        viewport={{ once: true }}
                        transition={{ duration: 1, delay: 0.2 + i * 0.05, ease: [0.16, 1, 0.3, 1] }}
                        className="h-full rounded-full bg-gradient-primary"
                      />
                    </div>
                  </div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>

        {/* Marquee */}
        <div className="mt-14 overflow-hidden">
          <div className="flex w-max animate-scroll-x gap-3 opacity-70">
            {[...Array(2)].flatMap((_, k) =>
              ["React", "Next.js", "TypeScript", "Node.js", "Python", "FastAPI", "MongoDB", "PostgreSQL", "Docker", "AWS", "Tailwind", "Framer Motion", "Three.js", "GenAI", "LangChain"].map((t) => (
                <span key={`${k}-${t}`} className="rounded-full border border-white/10 px-4 py-1.5 font-mono text-xs text-muted-foreground">
                  {t}
                </span>
              ))
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
