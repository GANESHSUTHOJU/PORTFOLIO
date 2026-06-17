import { useEffect, useState } from "react";

export function LoadingScreen() {
  const [done, setDone] = useState(false);
  useEffect(() => {
    const t = setTimeout(() => setDone(true), 1200);
    return () => clearTimeout(t);
  }, []);
  return (
    <div
      className={`fixed inset-0 z-[200] flex items-center justify-center bg-background transition-opacity duration-700 ${
        done ? "pointer-events-none opacity-0" : "opacity-100"
      }`}
    >
      <div className="flex flex-col items-center gap-6">
        <div className="relative h-16 w-16">
          <div className="absolute inset-0 animate-pulse-glow rounded-2xl bg-gradient-primary" />
          <div className="absolute inset-[3px] flex items-center justify-center rounded-2xl bg-background">
            <span className="font-display text-2xl font-bold text-gradient">SG</span>
          </div>
        </div>
        <div className="h-[2px] w-40 overflow-hidden rounded-full bg-muted">
          <div className="h-full w-full bg-gradient-primary animate-shimmer" />
        </div>
      </div>
    </div>
  );
}
