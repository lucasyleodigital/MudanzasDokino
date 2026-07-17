"use client";

import { useRef } from "react";

export default function TiltCard({
  children,
  className = "",
  intensity = 10,
  glowColor = "249,115,22",
}: {
  children: React.ReactNode;
  className?: string;
  intensity?: number;
  glowColor?: string;
}) {
  const ref = useRef<HTMLDivElement>(null);

  function onMove(e: React.MouseEvent<HTMLDivElement>) {
    const el = ref.current;
    if (!el) return;
    const r = el.getBoundingClientRect();
    const x = (e.clientX - r.left) / r.width - 0.5;
    const y = (e.clientY - r.top) / r.height - 0.5;
    el.style.transition = "box-shadow 0.2s ease";
    el.style.transform = `perspective(700px) rotateY(${x * intensity}deg) rotateX(${-y * intensity}deg) translateZ(8px)`;
    el.style.boxShadow = `${-x * 18}px ${y * 18}px 50px rgba(${glowColor},0.22)`;
  }

  function onLeave() {
    const el = ref.current;
    if (!el) return;
    el.style.transition =
      "transform 0.5s cubic-bezier(0.16,1,0.3,1), box-shadow 0.5s ease";
    el.style.transform =
      "perspective(700px) rotateY(0deg) rotateX(0deg) translateZ(0)";
    el.style.boxShadow = "";
  }

  return (
    <div
      ref={ref}
      onMouseMove={onMove}
      onMouseLeave={onLeave}
      className={`will-change-transform ${className}`}
    >
      {children}
    </div>
  );
}
