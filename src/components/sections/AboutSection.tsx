import { motion, useInView } from "framer-motion";
import { useEffect, useRef, useState } from "react";
import { GraduationCap, Brain, Cloud, Target } from "lucide-react";

const STATS = [
  { value: 3, suffix: "+", label: "Internships" },
  { value: 6, suffix: "+", label: "Projects" },
  { value: 4, suffix: "+", label: "Hackathons" },
  { value: 10, suffix: "+", label: "Certifications" },
];

const HIGHLIGHTS = [
  { icon: GraduationCap, title: "B.Tech CSE", text: "Computer Science student at Aurora University." },
  { icon: Brain, title: "AI & GenAI", text: "Exploring intelligent systems, LLMs, and applied ML." },
  { icon: Cloud, title: "Cloud Native", text: "Designing scalable cloud-first architectures." },
  { icon: Target, title: "Impact First", text: "Solving real-world problems through technology." },
];

const TIMELINE = [
  { year: "2022", title: "Started B.Tech CSE", desc: "Began journey at Aurora University, Hyderabad." },
  { year: "2024", title: "First Internships", desc: "Developer roles at CipherByte & Cognorise Infotech." },
  { year: "2025", title: "AI Engineering", desc: "AI Intern at GenAI Lakes — T-Hub, Hyderabad." },
  { year: "Now", title: "Building & Shipping", desc: "Crafting full-stack AI products and cloud platforms." },
];

function Counter({ value, suffix }: { value: number; suffix: string }) {
  const ref = useRef<HTMLSpanElement>(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });
  const [n, setN] = useState(0);
  useEffect(() => {
    if (!inView) return;
    const dur = 1400;
    const start = performance.now();
    let raf = 0;
    const step = (t: number) => {
      const p = Math.min(1, (t - start) / dur);
      setN(Math.floor(p * value));
      if (p < 1) raf = requestAnimationFrame(step);
    };
    raf = requestAnimationFrame(step);
    return () => cancelAnimationFrame(raf);
  }, [inView, value]);
  return (
    <span ref={ref}>
      {n}
      {suffix}
    </span>
  );
}

export function AboutSection() {
  return (
    <section id="about" className="relative py-24 sm:py-32">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <SectionHeader eyebrow="About" title="A developer who ships with intent." />

        <div className="mt-14 grid gap-10 lg:grid-cols-5">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-3"
          >
            <p className="text-lg leading-relaxed text-muted-foreground">
              I'm <span className="text-foreground font-medium">Suthoju Ganesh</span> — a B.Tech Computer Science student at
              Aurora University, Hyderabad, deeply passionate about{" "}
              <span className="text-foreground">full-stack development</span>, applied{" "}
              <span className="text-foreground">AI</span>, and{" "}
              <span className="text-foreground">cloud computing</span>. I build products
              end-to-end — from elegant UIs to intelligent backends and scalable infrastructure.
            </p>
            <p className="mt-5 text-lg leading-relaxed text-muted-foreground">
              I love the intersection of design, engineering, and AI — turning complex problems into
              focused, beautifully crafted solutions that people actually want to use.
            </p>

            {/* Highlights grid */}
            <div className="mt-8 grid gap-3 sm:grid-cols-2">
              {HIGHLIGHTS.map((h, i) => (
                <motion.div
                  key={h.title}
                  initial={{ opacity: 0, y: 12 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.05 }}
                  className="glass-card group p-4 hover:border-primary/30"
                >
                  <div className="flex items-start gap-3">
                    <div className="grid h-9 w-9 shrink-0 place-items-center rounded-lg bg-gradient-primary text-primary-foreground">
                      <h.icon className="h-4 w-4" />
                    </div>
                    <div className="min-w-0">
                      <div className="font-medium">{h.title}</div>
                      <div className="text-sm text-muted-foreground">{h.text}</div>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Timeline */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="lg:col-span-2"
          >
            <div className="glass-card p-6">
              <div className="text-xs font-mono uppercase tracking-widest text-muted-foreground">Journey</div>
              <ol className="relative mt-5 space-y-6 border-l border-border pl-6">
                {TIMELINE.map((t) => (
                  <li key={t.year} className="relative">
                    <span className="absolute -left-[31px] top-1 grid h-4 w-4 place-items-center rounded-full bg-gradient-primary">
                      <span className="h-1.5 w-1.5 rounded-full bg-background" />
                    </span>
                    <div className="font-mono text-xs text-primary">{t.year}</div>
                    <div className="mt-0.5 font-medium">{t.title}</div>
                    <div className="text-sm text-muted-foreground">{t.desc}</div>
                  </li>
                ))}
              </ol>
            </div>
          </motion.div>
        </div>

        {/* Stats */}
        <div className="mt-16 grid grid-cols-2 gap-3 sm:grid-cols-4 sm:gap-4">
          {STATS.map((s, i) => (
            <motion.div
              key={s.label}
              initial={{ opacity: 0, y: 12 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.08 }}
              className="glass-card p-5 text-center sm:p-7"
            >
              <div className="font-display text-3xl font-bold text-gradient sm:text-5xl">
                <Counter value={s.value} suffix={s.suffix} />
              </div>
              <div className="mt-1 text-xs uppercase tracking-widest text-muted-foreground sm:text-sm">
                {s.label}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

export function SectionHeader({ eyebrow, title, sub }: { eyebrow: string; title: string; sub?: string }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 12 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-100px" }}
      transition={{ duration: 0.5 }}
      className="mx-auto max-w-3xl text-center"
    >
      <div className="inline-flex items-center gap-2 rounded-full glass px-3 py-1 text-xs font-mono uppercase tracking-widest text-primary">
        <span className="h-1 w-1 rounded-full bg-primary" /> {eyebrow}
      </div>
      <h2 className="mt-4 text-balance font-display text-3xl font-bold tracking-tight sm:text-5xl">
        {title}
      </h2>
      {sub && <p className="mt-3 text-muted-foreground">{sub}</p>}
    </motion.div>
  );
}
