import { motion } from "framer-motion";
import { Quote } from "lucide-react";
import { SectionHeader } from "./AboutSection";

const TESTIMONIALS = [
  {
    quote: "Ganesh ships fast, with taste. He blends product thinking with strong engineering — rare to find at this stage.",
    name: "Mentor",
    role: "Senior Engineer, GenAI Lakes",
  },
  {
    quote: "One of the most curious engineers I've worked with. He's always exploring AI, cloud, and design in tandem.",
    name: "Collaborator",
    role: "Hackathon Teammate",
  },
  {
    quote: "Solid full-stack instincts and a sharp eye for UX. The kind of dev you trust to own a feature end-to-end.",
    name: "Project Lead",
    role: "Cognorise Infotech",
  },
];

export function TestimonialsSection() {
  return (
    <section id="testimonials" className="relative py-24 sm:py-32">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <SectionHeader eyebrow="Testimonials" title="What people say." />
        <div className="mt-14 grid gap-5 md:grid-cols-3">
          {TESTIMONIALS.map((t, i) => (
            <motion.figure
              key={t.name + i}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-80px" }}
              transition={{ duration: 0.5, delay: i * 0.05 }}
              className="glass-card relative p-6 hover:border-primary/30"
            >
              <Quote className="h-7 w-7 text-primary/40" />
              <blockquote className="mt-3 text-sm leading-relaxed text-foreground/90">
                "{t.quote}"
              </blockquote>
              <figcaption className="mt-5 flex items-center gap-3 border-t border-white/5 pt-4">
                <div className="grid h-10 w-10 place-items-center rounded-full bg-gradient-primary font-semibold text-primary-foreground">
                  {t.name[0]}
                </div>
                <div className="min-w-0">
                  <div className="text-sm font-medium">{t.name}</div>
                  <div className="text-xs text-muted-foreground">{t.role}</div>
                </div>
              </figcaption>
            </motion.figure>
          ))}
        </div>
      </div>
    </section>
  );
}
