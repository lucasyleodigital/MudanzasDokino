"use client";

import { useState } from "react";

type Props = {
  query?: string;
};

// Google Maps solo se carga tras un clic explícito del usuario (patrón
// click-to-load) para no disparar cookies de terceros sin consentimiento.
export default function MapEmbed({ query = "Barcelona, Cataluña" }: Props) {
  const [loaded, setLoaded] = useState(false);
  const src = `https://www.google.com/maps?q=${encodeURIComponent(query)}&output=embed`;

  if (loaded) {
    return (
      <iframe
        title="Zona de cobertura en el mapa"
        src={src}
        className="h-[420px] w-full rounded-lg border border-line"
        loading="lazy"
        referrerPolicy="no-referrer-when-downgrade"
      />
    );
  }

  return (
    <button
      type="button"
      onClick={() => setLoaded(true)}
      className="flex h-[420px] w-full flex-col items-center justify-center gap-3 rounded-lg border border-dashed border-line bg-accent-soft text-ink transition-colors hover:bg-accent-soft/70"
    >
      <svg width="40" height="40" viewBox="0 0 24 24" fill="none" aria-hidden="true">
        <path
          d="M12 22s7-7.58 7-12.5A7 7 0 0 0 5 9.5C5 14.42 12 22 12 22Z"
          stroke="var(--accent)"
          strokeWidth="1.6"
        />
        <circle cx="12" cy="9.5" r="2.5" stroke="var(--accent)" strokeWidth="1.6" />
      </svg>
      <span className="font-medium">Ver mapa de la zona de cobertura</span>
      <span className="text-xs text-ink-muted">Se carga Google Maps al pulsar</span>
    </button>
  );
}
