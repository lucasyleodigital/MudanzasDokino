"use client";
import { useEffect, useRef } from "react";

export default function CursorGlow() {
  const ref = useRef<HTMLDivElement>(null);
  const target = useRef({ x: -600, y: -600 });
  const current = useRef({ x: -600, y: -600 });

  useEffect(() => {
    function onMove(e: MouseEvent) {
      target.current = { x: e.clientX, y: e.clientY };
    }
    window.addEventListener("mousemove", onMove, { passive: true });

    let animId: number;
    function tick() {
      current.current.x += (target.current.x - current.current.x) * 0.07;
      current.current.y += (target.current.y - current.current.y) * 0.07;
      if (ref.current) {
        ref.current.style.transform = `translate(${current.current.x - 300}px, ${current.current.y - 300}px)`;
      }
      animId = requestAnimationFrame(tick);
    }
    tick();

    return () => {
      window.removeEventListener("mousemove", onMove);
      cancelAnimationFrame(animId);
    };
  }, []);

  return (
    <div
      ref={ref}
      className="pointer-events-none fixed top-0 left-0 z-[5] h-[600px] w-[600px] rounded-full will-change-transform"
      style={{
        background:
          "radial-gradient(circle, rgba(249,115,22,0.07) 0%, rgba(139,92,246,0.04) 45%, transparent 70%)",
        filter: "blur(60px)",
      }}
    />
  );
}
