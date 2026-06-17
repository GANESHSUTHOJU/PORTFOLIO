import { motion } from "framer-motion";
import { Award, Trophy, Medal, Star } from "lucide-react";
import { SectionHeader } from "./AboutSection";

const CERTS = [
  { name: "Full Stack Web Development", issuer: "Coursera", year: "2024" },
  { name: "AWS Cloud Practitioner", issuer: "AWS", year: "2024" },
  { name: "Python for Data Science", issuer: "IBM", year: "2024" },
  { name: "Machine Learning Specialization", issuer: "DeepLearning.AI", year: "2025" },
  { name: "Generative AI Fundamentals", issuer: "Google Cloud", year: "2025" },
  { name: "Docker Essentials", issuer: "KodeKloud", year: "2024" },
  { name: "MongoDB Developer", issuer: "MongoDB University", year: "2024" },
  { name: "React Advanced Patterns", issuer: "Frontend Masters", year: "2025" },
  { name: "FastAPI Bootcamp", issuer: "Udemy", year: "2025" },
  { name: "Git & GitHub Mastery", issuer: "Coursera", year: "2024" },
];

const HACKS = [
  { name: "Monad Blitz Hackathon", desc: "Built a decentralized payment experience on Monad.", year: "2025" },
  { name: "Vibe Hack 2.0", desc: "Shipped a vibe-coded full-stack AI app under 24 hours.", year: "2025" },
  { name: "Agentathon 2025", desc: "Designed multi-agent workflows for enterprise productivity.", year: "2025" },
  { name: "Namaste Jupiverse", desc: "Worked on a Jupiter ecosystem project with real impact.", year: "2024" },
];

const ACHIEVEMENTS = [
  { icon: Star, text: "Class Representative", sub: "Leadership across multiple semesters" },
  { icon: Trophy, text: "First Prize — Inter-School Competition", sub: "Recognized for technical excellence" },
  { icon: Medal, text: "University Cultural Event Winner", sub: "Performance & creative arts" },
  { icon: Award, text: "Sports Fest Organizer", sub: "End-to-end event coordination" },
];

export function CertsHacksSection() {
  return (
    <>
      <section id="certifications" className="relative py-24 sm:py-32">
        <div className="mx-auto max-w-6xl px-4 sm:px-6">
          <SectionHeader eyebrow="Certifications" title="Continuously learning." sub="A curated list of programs that sharpen my craft." />
          <div className="mt-14 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {CERTS.map((c, i) => (
              <motion.div
                key={c.name}
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-80px" }}
                transition={{ duration: 0.4, delay: i * 0.03 }}
                className="glass-card group flex items-start gap-3 p-5 hover:border-primary/30"
              >
                <div className="grid h-10 w-10 shrink-0 place-items-center rounded-xl bg-gradient-primary text-primary-foreground">
                  <Award className="h-5 w-5" />
                </div>
                <div className="min-w-0">
                  <div className="font-medium leading-tight">{c.name}</div>
                  <div className="mt-1 text-xs text-muted-foreground">
                    {c.issuer} · <span className="font-mono">{c.year}</span>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <section id="hackathons" className="relative py-24 sm:py-32">
        <div className="mx-auto max-w-6xl px-4 sm:px-6">
          <SectionHeader eyebrow="Hackathons" title="Building under pressure." />
          <div className="mt-14 grid gap-5 md:grid-cols-2">
            {HACKS.map((h, i) => (
              <motion.div
                key={h.name}
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-80px" }}
                transition={{ duration: 0.4, delay: i * 0.05 }}
                className="glass-card group relative overflow-hidden p-6 hover:border-primary/30"
              >
                <div className="pointer-events-none absolute -right-10 -top-10 h-32 w-32 rounded-full bg-gradient-primary opacity-10 blur-2xl" />
                <div className="flex items-center justify-between">
                  <div className="grid h-10 w-10 place-items-center rounded-xl bg-gradient-primary text-primary-foreground">
                    <Trophy className="h-5 w-5" />
                  </div>
                  <span className="font-mono text-xs text-muted-foreground">{h.year}</span>
                </div>
                <h3 className="mt-4 font-display text-lg font-semibold">{h.name}</h3>
                <p className="mt-1 text-sm text-muted-foreground">{h.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <section id="achievements" className="relative py-24 sm:py-32">
        <div className="mx-auto max-w-6xl px-4 sm:px-6">
          <SectionHeader eyebrow="Achievements" title="Beyond the keyboard." />
          <div className="mt-14 grid gap-4 sm:grid-cols-2">
            {ACHIEVEMENTS.map((a, i) => (
              <motion.div
                key={a.text}
                initial={{ opacity: 0, y: 12 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.05 }}
                className="glass-card flex items-start gap-4 p-6 hover:border-primary/30"
              >
                <div className="grid h-11 w-11 shrink-0 place-items-center rounded-xl bg-gradient-primary text-primary-foreground">
                  <a.icon className="h-5 w-5" />
                </div>
                <div className="min-w-0">
                  <div className="font-display font-semibold">{a.text}</div>
                  <div className="text-sm text-muted-foreground">{a.sub}</div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
