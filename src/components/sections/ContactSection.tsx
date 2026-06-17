import { motion } from "framer-motion";
import { useState } from "react";
import { Mail, MapPin, Send, Github, Linkedin, Check } from "lucide-react";
import { SectionHeader } from "./AboutSection";

export function ContactSection() {
  const [sent, setSent] = useState(false);
  const [data, setData] = useState({ name: "", email: "", message: "" });

  const submit = (e: React.FormEvent) => {
    e.preventDefault();
    const subject = encodeURIComponent(`Portfolio inquiry from ${data.name}`);
    const body = encodeURIComponent(`${data.message}\n\n— ${data.name} (${data.email})`);
    window.location.href = `mailto:suthojuganesh@gmail.com?subject=${subject}&body=${body}`;
    setSent(true);
    setTimeout(() => setSent(false), 3000);
  };

  return (
    <section id="contact" className="relative py-24 sm:py-32">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <SectionHeader eyebrow="Contact" title="Let's build something great." sub="Open to internships, collaborations, and meaningful projects." />

        <div className="mt-14 grid gap-6 lg:grid-cols-5">
          {/* Info */}
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="lg:col-span-2"
          >
            <div className="glass-card p-6">
              <div className="space-y-4">
                <a href="mailto:suthojuganesh@gmail.com" className="group flex items-start gap-3">
                  <div className="grid h-10 w-10 shrink-0 place-items-center rounded-xl bg-gradient-primary text-primary-foreground">
                    <Mail className="h-4 w-4" />
                  </div>
                  <div>
                    <div className="text-xs uppercase tracking-widest text-muted-foreground">Email</div>
                    <div className="font-medium transition-colors group-hover:text-primary">suthojuganesh@gmail.com</div>
                  </div>
                </a>
                <div className="flex items-start gap-3">
                  <div className="grid h-10 w-10 shrink-0 place-items-center rounded-xl bg-gradient-primary text-primary-foreground">
                    <MapPin className="h-4 w-4" />
                  </div>
                  <div>
                    <div className="text-xs uppercase tracking-widest text-muted-foreground">Location</div>
                    <div className="font-medium">Hyderabad, Telangana</div>
                  </div>
                </div>
              </div>

              <div className="mt-6 border-t border-white/5 pt-6">
                <div className="text-xs uppercase tracking-widest text-muted-foreground">Find me on</div>
                <div className="mt-3 flex gap-2">
                  <a href="https://linkedin.com/" className="flex items-center gap-2 rounded-xl glass px-4 py-2 text-sm hover:text-primary">
                    <Linkedin className="h-4 w-4" /> LinkedIn
                  </a>
                  <a href="https://github.com/" className="flex items-center gap-2 rounded-xl glass px-4 py-2 text-sm hover:text-primary">
                    <Github className="h-4 w-4" /> GitHub
                  </a>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Form */}
          <motion.form
            onSubmit={submit}
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="glass-card p-6 lg:col-span-3"
          >
            <div className="grid gap-4 sm:grid-cols-2">
              <Field label="Name">
                <input
                  required
                  value={data.name}
                  onChange={(e) => setData({ ...data, name: e.target.value })}
                  className="w-full rounded-xl border border-white/10 bg-black/30 px-4 py-3 text-sm outline-none transition focus:border-primary/60 focus:ring-2 focus:ring-primary/20"
                  placeholder="Your name"
                />
              </Field>
              <Field label="Email">
                <input
                  required
                  type="email"
                  value={data.email}
                  onChange={(e) => setData({ ...data, email: e.target.value })}
                  className="w-full rounded-xl border border-white/10 bg-black/30 px-4 py-3 text-sm outline-none transition focus:border-primary/60 focus:ring-2 focus:ring-primary/20"
                  placeholder="you@email.com"
                />
              </Field>
            </div>
            <div className="mt-4">
              <Field label="Message">
                <textarea
                  required
                  rows={5}
                  value={data.message}
                  onChange={(e) => setData({ ...data, message: e.target.value })}
                  className="w-full resize-none rounded-xl border border-white/10 bg-black/30 px-4 py-3 text-sm outline-none transition focus:border-primary/60 focus:ring-2 focus:ring-primary/20"
                  placeholder="Tell me about your project, role, or idea…"
                />
              </Field>
            </div>
            <button
              type="submit"
              className="mt-5 inline-flex w-full items-center justify-center gap-2 rounded-xl bg-gradient-primary px-6 py-3 text-sm font-semibold text-primary-foreground transition-transform hover:scale-[1.01] sm:w-auto"
            >
              {sent ? (<><Check className="h-4 w-4" /> Opening your mail app…</>) : (<><Send className="h-4 w-4" /> Send Message</>)}
            </button>
          </motion.form>
        </div>
      </div>
    </section>
  );
}

function Field({ label, children }: { label: string; children: React.ReactNode }) {
  return (
    <label className="block">
      <span className="mb-1.5 block text-xs uppercase tracking-widest text-muted-foreground">{label}</span>
      {children}
    </label>
  );
}

export function Footer() {
  return (
    <footer className="relative border-t border-white/5 py-12">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <div className="grid gap-8 md:grid-cols-3">
          <div>
            <div className="flex items-center gap-2">
              <div className="grid h-9 w-9 place-items-center rounded-xl bg-gradient-primary">
                <span className="font-display text-sm font-bold text-primary-foreground">SG</span>
              </div>
              <span className="font-display text-base font-semibold">Suthoju Ganesh</span>
            </div>
            <p className="mt-3 max-w-xs text-sm text-muted-foreground">
              Full Stack Developer · AI Engineer · Cloud Enthusiast. Building intelligent, scalable products.
            </p>
          </div>
          <div>
            <div className="text-xs uppercase tracking-widest text-muted-foreground">Quick Links</div>
            <ul className="mt-3 grid grid-cols-2 gap-2 text-sm">
              {["about", "skills", "experience", "projects", "certifications", "contact"].map((l) => (
                <li key={l}>
                  <a href={`#${l}`} className="capitalize text-muted-foreground hover:text-primary">{l}</a>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <div className="text-xs uppercase tracking-widest text-muted-foreground">Social</div>
            <div className="mt-3 flex gap-2">
              <a href="https://github.com/" className="rounded-full glass p-2.5 hover:text-primary"><Github className="h-4 w-4" /></a>
              <a href="https://linkedin.com/" className="rounded-full glass p-2.5 hover:text-primary"><Linkedin className="h-4 w-4" /></a>
              <a href="mailto:suthojuganesh@gmail.com" className="rounded-full glass p-2.5 hover:text-primary"><Mail className="h-4 w-4" /></a>
            </div>
          </div>
        </div>
        <div className="mt-10 flex flex-col items-center justify-between gap-3 border-t border-white/5 pt-6 text-xs text-muted-foreground sm:flex-row">
          <div>© {new Date().getFullYear()} Suthoju Ganesh. Crafted with care.</div>
          <div className="font-mono">Hyderabad · India</div>
        </div>
      </div>
    </footer>
  );
}
