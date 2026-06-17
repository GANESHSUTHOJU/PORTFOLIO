import { motion } from "framer-motion";
import { Github, GitBranch, Star, GitCommit, Code } from "lucide-react";
import { SectionHeader } from "./AboutSection";

const STATS = [
  { icon: GitCommit, label: "Contributions", value: "850+" },
  { icon: GitBranch, label: "Repositories", value: "30+" },
  { icon: Star, label: "Stars Earned", value: "120+" },
  { icon: Code, label: "Languages", value: "8+" },
];

const LANGS = [
  { name: "JavaScript", pct: 32, color: "#F7DF1E" },
  { name: "Python", pct: 28, color: "#3776AB" },
  { name: "TypeScript", pct: 18, color: "#3178C6" },
  { name: "C++", pct: 10, color: "#00599C" },
  { name: "HTML/CSS", pct: 8, color: "#E34F26" },
  { name: "Other", pct: 4, color: "#7B61FF" },
];

function ContribGrid() {
  // 7 x 26 grid (~half year of pseudo data)
  const cells = Array.from({ length: 7 * 26 }, (_, i) => {
    const seed = (i * 9301 + 49297) % 233280;
    const v = (seed / 233280);
    if (v < 0.4) return 0;
    if (v < 0.65) return 1;
    if (v < 0.85) return 2;
    if (v < 0.95) return 3;
    return 4;
  });
  const colors = ["rgba(255,255,255,0.04)", "rgba(0,229,255,0.18)", "rgba(0,229,255,0.4)", "rgba(0,229,255,0.65)", "rgba(0,229,255,0.95)"];
  return (
    <div className="overflow-x-auto">
      <div className="grid grid-rows-7 grid-flow-col gap-[3px] min-w-max">
        {cells.map((v, i) => (
          <div
            key={i}
            className="h-2.5 w-2.5 rounded-[3px]"
            style={{ background: colors[v], boxShadow: v >= 3 ? "0 0 6px rgba(0,229,255,0.6)" : undefined }}
          />
        ))}
      </div>
    </div>
  );
}

export function GithubSection() {
  return (
    <section id="github" className="relative py-24 sm:py-32">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <SectionHeader eyebrow="GitHub" title="Open source & activity." />

        <div className="mt-14 grid gap-5 lg:grid-cols-3">
          {/* Contributions */}
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="glass-card p-6 lg:col-span-2"
          >
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-2">
                <Github className="h-5 w-5 text-primary" />
                <span className="font-display font-semibold">Contribution Graph</span>
              </div>
              <a href="https://github.com/" className="text-xs text-muted-foreground hover:text-primary">
                @suthojuganesh
              </a>
            </div>
            <div className="mt-6">
              <ContribGrid />
            </div>
            <div className="mt-4 flex items-center justify-end gap-1.5 text-[10px] text-muted-foreground">
              <span>Less</span>
              {[0, 1, 2, 3, 4].map((v) => (
                <span key={v} className="h-2.5 w-2.5 rounded-[3px]" style={{ background: ["rgba(255,255,255,0.04)", "rgba(0,229,255,0.18)", "rgba(0,229,255,0.4)", "rgba(0,229,255,0.65)", "rgba(0,229,255,0.95)"][v] }} />
              ))}
              <span>More</span>
            </div>
          </motion.div>

          {/* Stats */}
          <div className="grid grid-cols-2 gap-3">
            {STATS.map((s, i) => (
              <motion.div
                key={s.label}
                initial={{ opacity: 0, y: 12 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.05 }}
                className="glass-card p-5"
              >
                <s.icon className="h-4 w-4 text-primary" />
                <div className="mt-3 font-display text-2xl font-bold">{s.value}</div>
                <div className="text-xs text-muted-foreground">{s.label}</div>
              </motion.div>
            ))}
          </div>

          {/* Languages */}
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="glass-card p-6 lg:col-span-3"
          >
            <div className="text-xs font-mono uppercase tracking-widest text-muted-foreground">Languages Used</div>
            <div className="mt-4 flex h-3 overflow-hidden rounded-full">
              {LANGS.map((l) => (
                <div key={l.name} style={{ width: `${l.pct}%`, background: l.color }} />
              ))}
            </div>
            <div className="mt-4 flex flex-wrap gap-x-5 gap-y-2 text-sm">
              {LANGS.map((l) => (
                <div key={l.name} className="flex items-center gap-2">
                  <span className="h-2 w-2 rounded-full" style={{ background: l.color }} />
                  <span>{l.name}</span>
                  <span className="font-mono text-xs text-muted-foreground">{l.pct}%</span>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
