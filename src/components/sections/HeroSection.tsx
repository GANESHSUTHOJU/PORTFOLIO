import { motion } from "framer-motion";
import { ArrowRight, Download, Mail, Github, Linkedin, MapPin, Sparkles } from "lucide-react";
import { TypingText } from "../TypingText";

const TECH_BADGES = [
  { label: "React", x: "8%", y: "20%", d: 0 },
  { label: "Node", x: "85%", y: "18%", d: 0.4 },
  { label: "Python", x: "12%", y: "70%", d: 0.8 },
  { label: "AWS", x: "88%", y: "65%", d: 1.2 },
  { label: "AI/ML", x: "5%", y: "45%", d: 1.6 },
  { label: "Docker", x: "90%", y: "42%", d: 2.0 },
];

export function HeroSection() {
  return (
    <section id="hero" className="relative flex min-h-screen items-center overflow-hidden pt-28 pb-20">
      {/* Background layers */}
      <div className="pointer-events-none absolute inset-0 -z-10 bg-mesh" aria-hidden />
      <div className="pointer-events-none absolute inset-0 -z-10 grid-bg" aria-hidden />

      {/* Floating tech badges */}
      {TECH_BADGES.map((t) => (
        <motion.div
          key={t.label}
          className="pointer-events-none absolute hidden md:block"
          style={{ left: t.x, top: t.y }}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6 + t.d * 0.1, duration: 0.6 }}
        >
          <div
            className="rounded-full glass px-4 py-2 text-xs font-mono text-muted-foreground animate-float"
            style={{ animationDelay: `${t.d}s` }}
          >
            {t.label}
          </div>
        </motion.div>
      ))}

      <div className="mx-auto w-full max-w-6xl px-4 sm:px-6">
        <motion.div
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="mx-auto flex max-w-4xl flex-col items-center text-center"
        >
          {/* Status pill */}
          <div className="inline-flex items-center gap-2 rounded-full glass px-4 py-1.5 text-xs">
            <span className="relative flex h-2 w-2">
              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-primary opacity-75" />
              <span className="relative inline-flex h-2 w-2 rounded-full bg-primary" />
            </span>
            <span className="text-muted-foreground">Available for opportunities</span>
            <span className="text-foreground/40">·</span>
            <span className="inline-flex items-center gap-1 text-muted-foreground">
              <MapPin className="h-3 w-3" /> Hyderabad
            </span>
          </div>

          <h1 className="mt-8 text-balance font-display text-5xl font-bold leading-[1.05] tracking-tight sm:text-6xl md:text-7xl lg:text-8xl">
            Hi, I'm{" "}
            <span className="relative inline-block">
              <span className="text-gradient animate-gradient">Suthoju Ganesh</span>
              <span className="absolute -inset-x-2 -inset-y-1 -z-10 rounded-2xl bg-primary/10 blur-2xl" />
            </span>
          </h1>

          <div className="mt-6 text-xl font-medium text-muted-foreground sm:text-2xl">
            <span className="text-foreground/80">I'm a </span>
            <TypingText />
          </div>

          <p className="mt-6 max-w-2xl text-base text-muted-foreground sm:text-lg">
            Building intelligent web applications, AI-powered solutions, and scalable cloud
            systems — engineered with craft, designed with intent.
          </p>

          <div className="mt-10 flex flex-wrap items-center justify-center gap-3">
            <a
              href="#projects"
              className="group inline-flex items-center gap-2 rounded-xl bg-gradient-primary px-6 py-3 text-sm font-semibold text-primary-foreground shadow-[0_10px_40px_-10px_rgba(0,229,255,0.6)] transition-transform hover:scale-[1.03]"
            >
              View Projects
              <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5" />
            </a>
            <a
              href="/resume.pdf"
              className="inline-flex items-center gap-2 rounded-xl glass px-6 py-3 text-sm font-semibold transition-colors hover:bg-white/5"
            >
              <Download className="h-4 w-4" /> Download Resume
            </a>
            <a
              href="#contact"
              className="inline-flex items-center gap-2 rounded-xl border border-white/10 px-6 py-3 text-sm font-semibold text-muted-foreground transition-colors hover:border-primary/40 hover:text-foreground"
            >
              <Mail className="h-4 w-4" /> Contact Me
            </a>
          </div>

          {/* Social row */}
          <div className="mt-10 flex items-center gap-4 text-muted-foreground">
            <a href="https://github.com/" aria-label="GitHub" className="rounded-full glass p-2.5 transition-colors hover:text-primary">
              <Github className="h-4 w-4" />
            </a>
            <a href="https://linkedin.com/" aria-label="LinkedIn" className="rounded-full glass p-2.5 transition-colors hover:text-primary">
              <Linkedin className="h-4 w-4" />
            </a>
            <a href="mailto:suthojuganesh@gmail.com" aria-label="Email" className="rounded-full glass p-2.5 transition-colors hover:text-primary">
              <Mail className="h-4 w-4" />
            </a>
            <span className="ml-2 inline-flex items-center gap-1.5 text-xs">
              <Sparkles className="h-3 w-3 text-primary" />
              <span className="font-mono">v2026</span>
            </span>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
