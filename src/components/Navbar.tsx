import { useEffect, useState } from "react";

const LINKS = [
  { id: "about", label: "About" },
  { id: "skills", label: "Skills" },
  { id: "experience", label: "Experience" },
  { id: "projects", label: "Projects" },
  { id: "certifications", label: "Certs" },
  { id: "contact", label: "Contact" },
];

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 30);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-all duration-300 ${
        scrolled ? "py-3" : "py-5"
      }`}
    >
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <div
          className={`flex items-center justify-between rounded-2xl px-4 py-3 transition-all duration-300 ${
            scrolled ? "glass" : "bg-transparent"
          }`}
        >
          <a href="#hero" className="flex items-center gap-2">
            <div className="grid h-9 w-9 place-items-center rounded-xl bg-gradient-primary">
              <span className="font-display text-sm font-bold text-primary-foreground">SG</span>
            </div>
            <span className="font-display text-base font-semibold tracking-tight">Suthoju Ganesh</span>
          </a>

          <nav className="hidden items-center gap-1 md:flex">
            {LINKS.map((l) => (
              <a
                key={l.id}
                href={`#${l.id}`}
                className="rounded-lg px-3 py-2 text-sm text-muted-foreground transition-colors hover:bg-white/5 hover:text-foreground"
              >
                {l.label}
              </a>
            ))}
          </nav>

          <div className="flex items-center gap-2">
            <a
              href="#contact"
              className="hidden rounded-xl bg-gradient-primary px-4 py-2 text-sm font-medium text-primary-foreground transition-transform hover:scale-105 sm:inline-block"
            >
              Let's talk
            </a>
            <button
              aria-label="Toggle menu"
              onClick={() => setOpen((v) => !v)}
              className="grid h-10 w-10 place-items-center rounded-xl glass md:hidden"
            >
              <div className="flex flex-col gap-1">
                <span className={`h-0.5 w-5 bg-foreground transition ${open ? "translate-y-1.5 rotate-45" : ""}`} />
                <span className={`h-0.5 w-5 bg-foreground transition ${open ? "opacity-0" : ""}`} />
                <span className={`h-0.5 w-5 bg-foreground transition ${open ? "-translate-y-1.5 -rotate-45" : ""}`} />
              </div>
            </button>
          </div>
        </div>

        {open && (
          <div className="mt-2 rounded-2xl glass p-3 md:hidden">
            <div className="flex flex-col">
              {LINKS.map((l) => (
                <a
                  key={l.id}
                  href={`#${l.id}`}
                  onClick={() => setOpen(false)}
                  className="rounded-lg px-3 py-3 text-sm text-muted-foreground hover:bg-white/5 hover:text-foreground"
                >
                  {l.label}
                </a>
              ))}
            </div>
          </div>
        )}
      </div>
    </header>
  );
}
