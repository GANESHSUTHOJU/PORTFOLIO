import { useEffect, useState } from "react";

export function CustomCursor() {
  const [pos, setPos] = useState({ x: -100, y: -100 });
  const [hover, setHover] = useState(false);
  const [enabled, setEnabled] = useState(false);

  useEffect(() => {
    // Disable on touch devices
    if (window.matchMedia("(pointer: coarse)").matches) return;
    setEnabled(true);

    const move = (e: MouseEvent) => setPos({ x: e.clientX, y: e.clientY });
    const over = (e: MouseEvent) => {
      const t = e.target as HTMLElement;
      setHover(!!t.closest("a, button, [data-cursor='hover']"));
    };
    window.addEventListener("mousemove", move);
    window.addEventListener("mouseover", over);
    return () => {
      window.removeEventListener("mousemove", move);
      window.removeEventListener("mouseover", over);
    };
  }, []);

  if (!enabled) return null;
  return (
    <>
      <div
        className="pointer-events-none fixed left-0 top-0 z-[100] h-2 w-2 rounded-full bg-primary mix-blend-difference transition-transform duration-75"
        style={{ transform: `translate(${pos.x - 4}px, ${pos.y - 4}px)` }}
      />
      <div
        className="pointer-events-none fixed left-0 top-0 z-[100] rounded-full border border-primary/60 transition-all duration-200 ease-out"
        style={{
          width: hover ? 56 : 32,
          height: hover ? 56 : 32,
          transform: `translate(${pos.x - (hover ? 28 : 16)}px, ${pos.y - (hover ? 28 : 16)}px)`,
          opacity: 0.7,
        }}
      />
    </>
  );
}
