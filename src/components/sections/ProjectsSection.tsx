import { motion } from "framer-motion";
import { useState } from "react";
import { ExternalLink, Github, X, Sparkles } from "lucide-react";
import { SectionHeader } from "./AboutSection";

type Project = {
  title: string;
  tagline: string;
  description: string;
  longDescription: string;
  tech: string[];
  category: string;
  gradient: string;
  highlights: string[];
  demoUrl?: string;
  githubUrl?: string;
};

const PROJECTS: Project[] = [
  {
    title: "Healthcare Appointment Booking",
    tagline: "Real-time doctor scheduling at scale",
    description: "Full-stack platform enabling real-time doctor scheduling and patient management.",
    longDescription: "A production-grade healthcare platform with role-based dashboards for doctors, patients, and admins. Supports real-time appointment booking, calendar sync, secure auth, and patient records management.",
    tech: ["React", "Node.js", "Express", "MongoDB", "JWT"],
    category: "Full Stack",
    gradient: "from-cyan-400/30 to-blue-500/30",
    highlights: ["Role-based dashboards", "Real-time scheduling", "Secure auth & records", "Responsive UI"],
  },
  {
    title: "Learn-Flow AI",
    tagline: "AI-personalized learning paths",
    description: "AI-powered skill development assistant providing personalized learning recommendations.",
    longDescription: "Learn-Flow AI generates adaptive learning roadmaps using LLM-powered analysis of a learner's goals, gaps, and progress — pairing it with curated resources and tracked milestones.",
    tech: ["Python", "OpenAI", "LangChain", "FastAPI"],
    category: "AI / GenAI",
    gradient: "from-violet-400/30 to-fuchsia-500/30",
    highlights: ["LLM-driven roadmaps", "Adaptive milestones", "Resource curation", "Progress analytics"],
  },
  {
    title: "Smart Retail Data Warehouse",
    tagline: "ETL pipelines for retail analytics",
    description: "Data pipeline architecture for retail analytics, transformation, and reporting.",
    longDescription: "A modeled data warehouse with ETL pipelines ingesting POS, inventory, and CRM data. Powers BI dashboards with reliable, query-optimized facts and dimensions.",
    tech: ["PostgreSQL", "Python", "ETL", "Airflow"],
    category: "Data",
    gradient: "from-cyan-400/30 to-emerald-500/30",
    highlights: ["Dimensional modeling", "Batch ETL", "Analytics-ready marts", "BI integration"],
  },
  {
    title: "Core Pay Links",
    tagline: "Decentralized payment links",
    description: "Decentralized payment link generation system for secure digital transactions.",
    longDescription: "Generate shareable, verifiable payment links backed by on-chain settlement — designed for creators and small businesses to receive crypto payments without custodial risk.",
    tech: ["Solidity", "Ethers.js", "React", "Web3"],
    category: "Blockchain",
    gradient: "from-violet-400/30 to-cyan-500/30",
    highlights: ["On-chain settlement", "Shareable links", "Non-custodial", "Wallet integration"],
  },
  {
    title: "AI Chatbot",
    tagline: "Conversational query resolution",
    description: "Intelligent conversational assistant for automated query resolution.",
    longDescription: "An NLP-powered chatbot capable of contextual conversation, intent classification, and integration with knowledge bases for instant query resolution.",
    tech: ["Python", "NLP", "Transformers", "FastAPI"],
    category: "AI",
    gradient: "from-fuchsia-400/30 to-cyan-500/30",
    highlights: ["Intent classification", "Context memory", "KB integration", "Streaming responses"],
  },
  {
    title: "Weather Forecast App",
    tagline: "Real-time global weather",
    description: "Real-time weather forecasting application using external APIs.",
    longDescription: "A clean, responsive weather app with geolocation, hourly + 7-day forecasts, and adaptive theming that reflects local conditions.",
    tech: ["JavaScript", "REST APIs", "HTML", "CSS"],
    category: "Web App",
    gradient: "from-cyan-400/30 to-violet-500/30",
    highlights: ["Geolocation", "Hourly forecasts", "Adaptive theme", "Mobile-first"],
  },
];

export function ProjectsSection() {
  const [active, setActive] = useState<Project | null>(null);

  return (
    <section id="projects" className="relative py-24 sm:py-32">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <SectionHeader eyebrow="Projects" title="Selected work." sub="A taste of what I've shipped — full-stack apps, AI systems, and infra." />

        <div className="mt-14 grid gap-5 md:grid-cols-2 lg:grid-cols-3">
          {PROJECTS.map((p, i) => (
            <motion.button
              key={p.title}
              onClick={() => setActive(p)}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-80px" }}
              transition={{ duration: 0.5, delay: i * 0.05 }}
              className="glass-card group relative overflow-hidden p-0 text-left transition-all hover:-translate-y-1 hover:border-primary/30"
              data-cursor="hover"
            >
              {/* Visual */}
              <div className={`relative h-40 overflow-hidden bg-gradient-to-br ${p.gradient}`}>
                <div className="absolute inset-0 grid-bg opacity-50" />
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="font-display text-4xl font-bold text-white/20 transition-transform duration-500 group-hover:scale-110">
                    {p.title.split(" ").map((w) => w[0]).join("").slice(0, 3)}
                  </div>
                </div>
                <span className="absolute left-3 top-3 rounded-full bg-black/40 px-2.5 py-1 font-mono text-[10px] uppercase tracking-widest text-white backdrop-blur">
                  {p.category}
                </span>
              </div>

              <div className="p-5">
                <h3 className="font-display text-lg font-semibold transition-colors group-hover:text-primary">
                  {p.title}
                </h3>
                <p className="mt-1 text-xs text-muted-foreground">{p.tagline}</p>
                <p className="mt-3 text-sm text-muted-foreground line-clamp-2">{p.description}</p>

                <div className="mt-4 flex flex-wrap gap-1.5">
                  {p.tech.slice(0, 4).map((t) => (
                    <span key={t} className="rounded-md border border-white/10 bg-white/5 px-2 py-0.5 font-mono text-[10px] text-muted-foreground">
                      {t}
                    </span>
                  ))}
                </div>

                <div className="mt-4 flex items-center justify-between text-xs">
                  <span className="inline-flex items-center gap-1 text-primary">
                    Case study <Sparkles className="h-3 w-3" />
                  </span>
                  <div className="flex items-center gap-2 text-muted-foreground">
                    <ExternalLink className="h-3.5 w-3.5" />
                    <Github className="h-3.5 w-3.5" />
                  </div>
                </div>
              </div>
            </motion.button>
          ))}
        </div>
      </div>

      {/* Modal */}
      {active && (
        <div
          className="fixed inset-0 z-[80] flex items-center justify-center bg-black/70 p-4 backdrop-blur-md"
          onClick={() => setActive(null)}
        >
          <motion.div
            initial={{ opacity: 0, y: 20, scale: 0.98 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            transition={{ duration: 0.3 }}
            className="relative w-full max-w-2xl rounded-2xl glass p-6 sm:p-8"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              onClick={() => setActive(null)}
              className="absolute right-4 top-4 grid h-9 w-9 place-items-center rounded-full glass hover:bg-white/5"
              aria-label="Close"
            >
              <X className="h-4 w-4" />
            </button>
            <div className={`h-32 -mx-6 -mt-6 sm:-mx-8 sm:-mt-8 rounded-t-2xl bg-gradient-to-br ${active.gradient}`} />
            <span className="mt-5 inline-block rounded-full bg-white/5 px-2.5 py-1 font-mono text-[10px] uppercase tracking-widest text-primary">
              {active.category}
            </span>
            <h3 className="mt-3 font-display text-2xl font-bold">{active.title}</h3>
            <p className="mt-1 text-sm text-primary">{active.tagline}</p>
            <p className="mt-4 text-sm leading-relaxed text-muted-foreground">{active.longDescription}</p>

            <div className="mt-5">
              <div className="text-xs font-mono uppercase tracking-widest text-muted-foreground">Highlights</div>
              <ul className="mt-2 grid gap-1.5 sm:grid-cols-2">
                {active.highlights.map((h) => (
                  <li key={h} className="flex items-start gap-2 text-sm text-muted-foreground">
                    <span className="mt-1.5 h-1 w-1 shrink-0 rounded-full bg-primary" /> {h}
                  </li>
                ))}
              </ul>
            </div>

            <div className="mt-5 flex flex-wrap gap-1.5">
              {active.tech.map((t) => (
                <span key={t} className="rounded-md border border-white/10 bg-white/5 px-2 py-0.5 font-mono text-[10px] text-muted-foreground">
                  {t}
                </span>
              ))}
            </div>

            <div className="mt-6 flex flex-wrap gap-2">
              <a href={active.demoUrl ?? "#"} className="inline-flex items-center gap-2 rounded-xl bg-gradient-primary px-4 py-2 text-sm font-semibold text-primary-foreground">
                <ExternalLink className="h-4 w-4" /> Live Demo
              </a>
              <a href={active.githubUrl ?? "#"} className="inline-flex items-center gap-2 rounded-xl glass px-4 py-2 text-sm font-semibold">
                <Github className="h-4 w-4" /> GitHub
              </a>
            </div>
          </motion.div>
        </div>
      )}
    </section>
  );
}
