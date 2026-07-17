import type { ReactNode } from "react";

type Props = {
  name: string;
  className?: string;
};

const ICONS: Record<string, ReactNode> = {
  particulares: (
    <>
      <path d="M3 9.5L12 3l9 6.5V20a1 1 0 01-1 1H5a1 1 0 01-1-1V9.5z" stroke="currentColor" strokeWidth="1.7" strokeLinejoin="round"/>
      <path d="M9 21V13h6v8" stroke="currentColor" strokeWidth="1.7" strokeLinejoin="round"/>
    </>
  ),
  empresas: (
    <>
      <rect x="2" y="7" width="9" height="14" rx="1" stroke="currentColor" strokeWidth="1.7"/>
      <path d="M11 3h9a1 1 0 011 1v17H11V3z" stroke="currentColor" strokeWidth="1.7"/>
      <path d="M5 11h2M5 14h2M5 17h2M14 7h2M14 11h2M14 15h2M18 7h1M18 11h1M18 15h1" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round"/>
    </>
  ),
  guardamuebles: (
    <>
      <rect x="2" y="3" width="20" height="7" rx="1" stroke="currentColor" strokeWidth="1.7"/>
      <rect x="2" y="14" width="20" height="7" rx="1" stroke="currentColor" strokeWidth="1.7"/>
      <path d="M6 10v4M12 10v4M18 10v4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
      <circle cx="12" cy="6.5" r="1" fill="currentColor"/>
      <circle cx="12" cy="17.5" r="1" fill="currentColor"/>
    </>
  ),
  "plataforma-elevadora": (
    <>
      <rect x="8" y="2" width="8" height="8" rx="1" stroke="currentColor" strokeWidth="1.7"/>
      <path d="M12 10v5" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round"/>
      <rect x="2" y="15" width="20" height="4" rx="1" stroke="currentColor" strokeWidth="1.7"/>
      <path d="M5 19v2M19 19v2M2 21h20" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
      <path d="M10 6h4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
    </>
  ),
  "larga-distancia": (
    <>
      <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7z" stroke="currentColor" strokeWidth="1.7" strokeLinejoin="round"/>
      <circle cx="12" cy="9" r="2.5" stroke="currentColor" strokeWidth="1.5"/>
    </>
  ),
  paqueteria: (
    <>
      <path d="M21 16V8a2 2 0 00-1-1.73l-7-4a2 2 0 00-2 0l-7 4A2 2 0 002 8v8a2 2 0 001 1.73l7 4a2 2 0 002 0l7-4A2 2 0 0021 16z" stroke="currentColor" strokeWidth="1.7" strokeLinejoin="round"/>
      <path d="M3.27 6.96L12 12.01l8.73-5.05M12 22.08V12" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round"/>
      <path d="M7.5 4.21l9 5.16" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round"/>
    </>
  ),
  transporte: (
    <>
      <rect x="1" y="3" width="15" height="13" rx="1" stroke="currentColor" strokeWidth="1.7"/>
      <path d="M16 8h4l3 3v5h-7V8z" stroke="currentColor" strokeWidth="1.7" strokeLinejoin="round"/>
      <circle cx="5.5" cy="18.5" r="2.5" stroke="currentColor" strokeWidth="1.7"/>
      <circle cx="18.5" cy="18.5" r="2.5" stroke="currentColor" strokeWidth="1.7"/>
    </>
  ),
};

export default function ServiceIcon({ name, className = "h-8 w-8" }: Props) {
  return (
    <svg
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      className={className}
      aria-hidden="true"
    >
      {ICONS[name] ?? ICONS.particulares}
    </svg>
  );
}
