import { useEffect, useState } from "react";

const PHRASES = [
  "Full Stack Developer",
  "AI Engineer",
  "Cloud Enthusiast",
  "Problem Solver",
];

export function TypingText() {
  const [index, setIndex] = useState(0);
  const [sub, setSub] = useState("");
  const [deleting, setDeleting] = useState(false);

  useEffect(() => {
    const current = PHRASES[index];
    const speed = deleting ? 40 : 90;
    const timeout = setTimeout(() => {
      if (!deleting) {
        const next = current.slice(0, sub.length + 1);
        setSub(next);
        if (next === current) setTimeout(() => setDeleting(true), 1400);
      } else {
        const next = current.slice(0, sub.length - 1);
        setSub(next);
        if (next === "") {
          setDeleting(false);
          setIndex((i) => (i + 1) % PHRASES.length);
        }
      }
    }, speed);
    return () => clearTimeout(timeout);
  }, [sub, deleting, index]);

  return (
    <span className="text-gradient">
      {sub}
      <span className="ml-0.5 inline-block w-[2px] animate-blink bg-primary align-middle" style={{ height: "0.9em" }} />
    </span>
  );
}
