import { useEffect, useState } from "react";
import { Sun, Moon } from "lucide-react";

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
  const [theme, setTheme] = useState<"light" | "dark">("dark");

  useEffect(() => {
    try {
      const savedTheme = localStorage.getItem("theme") as "light" | "dark" | null;
      const initialTheme = savedTheme || (document.documentElement.classList.contains("light") ? "light" : "dark");
      setTheme(initialTheme);
    } catch (e) {}
  }, []);

  const toggleTheme = () => {
    const nextTheme = theme === "dark" ? "light" : "dark";
    setTheme(nextTheme);
    try {
      localStorage.setItem("theme", nextTheme);
    } catch (e) {}
    
    if (nextTheme === "light") {
      document.documentElement.classList.remove("dark");
      document.documentElement.classList.add("light");
    } else {
      document.documentElement.classList.remove("light");
      document.documentElement.classList.add("dark");
    }
  };

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
            <img src="/logo.png" alt="Suthoju Ganesh Logo" className="h-9 w-9 rounded-xl object-contain bg-white p-0.5 shadow-sm" />
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
            <button
              onClick={toggleTheme}
              aria-label="Toggle theme"
              className="grid h-10 w-10 place-items-center rounded-xl glass text-muted-foreground transition-all hover:scale-105 hover:text-foreground"
            >
              {theme === "dark" ? (
                <Sun className="h-4.5 w-4.5 text-primary" />
              ) : (
                <Moon className="h-4.5 w-4.5 text-secondary" />
              )}
            </button>
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
