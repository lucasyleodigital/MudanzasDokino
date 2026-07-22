export default function TruckIllustration({ className }: { className?: string }) {
  return (
    <div className={className}>
      <svg
        viewBox="0 0 500 300"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="h-full w-full"
        aria-hidden="true"
      >
        <defs>
          <linearGradient id="trk-body" x1="0" y1="0" x2="0" y2="1">
            <stop offset="0%" stopColor="#1e293b" />
            <stop offset="100%" stopColor="#0f172a" />
          </linearGradient>
          <linearGradient id="trk-cab" x1="0" y1="0" x2="1" y2="1">
            <stop offset="0%" stopColor="#334155" />
            <stop offset="100%" stopColor="#1e293b" />
          </linearGradient>
        </defs>

        {/* Ground shadow */}
        <ellipse cx="245" cy="256" rx="218" ry="7" fill="rgba(0,0,0,0.28)" />

        {/* ── CARGO BOX ─────────────────────────── */}
        <rect x="28" y="78" width="278" height="152" rx="6" fill="url(#trk-body)" stroke="rgba(255,255,255,0.05)" strokeWidth="1" />
        {/* Top highlight */}
        <rect x="28" y="78" width="278" height="2" rx="1" fill="rgba(255,255,255,0.07)" />
        {/* Orange brand stripe */}
        <rect x="28" y="110" width="278" height="5" fill="#f97316" />
        {/* Brand panel */}
        <rect x="56" y="127" width="223" height="66" rx="4" fill="rgba(0,0,0,0.18)" />
        {/* Door seam */}
        <line x1="173" y1="80" x2="173" y2="230" stroke="rgba(255,255,255,0.04)" strokeWidth="1" />
        {/* Back latch */}
        <circle cx="32" cy="156" r="3.5" fill="rgba(255,255,255,0.1)" />
        {/* Door handles */}
        <rect x="90" y="172" width="55" height="3" rx="1.5" fill="rgba(255,255,255,0.08)" />
        <rect x="195" y="172" width="52" height="3" rx="1.5" fill="rgba(255,255,255,0.08)" />

        {/* Brand text */}
        <text
          x="167"
          y="167"
          textAnchor="middle"
          fontFamily="system-ui, -apple-system, sans-serif"
          fontWeight="800"
          fontSize="17"
          fill="rgba(255,255,255,0.88)"
          letterSpacing="4"
        >
          DOKINO
        </text>
        <text
          x="167"
          y="184"
          textAnchor="middle"
          fontFamily="system-ui, -apple-system, sans-serif"
          fontSize="8"
          fill="rgba(249,115,22,0.78)"
          letterSpacing="5"
        >
          MUDANZAS BCN
        </text>

        {/* ── CAB ───────────────────────────────── */}
        <path d="M306 145 L348 87 L421 87 L445 115 L445 230 L306 230 Z" fill="url(#trk-cab)" />
        <path d="M306 145 L348 87 L421 87 L445 115" stroke="rgba(255,255,255,0.07)" strokeWidth="1" fill="none" />
        {/* Windshield */}
        <path d="M317 142 L354 92 L414 92 L431 114 L431 142 Z" fill="rgba(148,163,184,0.13)" stroke="rgba(148,163,184,0.06)" strokeWidth="1" />
        {/* Windshield reflection */}
        <path d="M324 136 L358 97 L379 97 L361 136 Z" fill="rgba(255,255,255,0.04)" />
        {/* Side window */}
        <rect x="315" y="152" width="52" height="38" rx="3" fill="rgba(148,163,184,0.09)" stroke="rgba(255,255,255,0.04)" strokeWidth="0.5" />
        {/* Door handle */}
        <rect x="357" y="192" width="18" height="3.5" rx="1.5" fill="rgba(255,255,255,0.17)" />
        {/* Mirror */}
        <rect x="443" y="119" width="10" height="8" rx="2" fill="#334155" />
        {/* Grille */}
        <rect x="439" y="140" width="8" height="24" rx="2" fill="rgba(0,0,0,0.22)" />
        <line x1="440" y1="145" x2="447" y2="145" stroke="rgba(255,255,255,0.07)" strokeWidth="1" />
        <line x1="440" y1="150" x2="447" y2="150" stroke="rgba(255,255,255,0.07)" strokeWidth="1" />
        <line x1="440" y1="155" x2="447" y2="155" stroke="rgba(255,255,255,0.07)" strokeWidth="1" />
        <line x1="440" y1="160" x2="447" y2="160" stroke="rgba(255,255,255,0.07)" strokeWidth="1" />
        {/* Headlight */}
        <rect x="439" y="167" width="10" height="20" rx="3" fill="#f97316" opacity="0.92" />
        <rect x="441" y="169" width="6" height="16" rx="2" fill="white" opacity="0.32" className="headlight-glow" />
        {/* Bumper */}
        <rect x="441" y="222" width="9" height="8" rx="2" fill="#334155" />
        {/* Chassis */}
        <rect x="26" y="228" width="280" height="5" rx="2.5" fill="#0f172a" />
        <rect x="306" y="228" width="143" height="5" rx="2.5" fill="#0f172a" />

        {/* ── REAR WHEEL ─────────────────────────── */}
        <g className="svg-wheel-spokes">
          <circle cx="148" cy="244" r="32" fill="#0f172a" stroke="#334155" strokeWidth="2.5" />
          <circle cx="148" cy="244" r="21" fill="#1e293b" />
          <circle cx="148" cy="244" r="6" fill="#475569" />
          <line x1="148" y1="227" x2="148" y2="261" stroke="#475569" strokeWidth="2.2" />
          <line x1="131" y1="244" x2="165" y2="244" stroke="#475569" strokeWidth="2.2" />
          <line x1="136" y1="232" x2="160" y2="256" stroke="#475569" strokeWidth="1.6" />
          <line x1="160" y1="232" x2="136" y2="256" stroke="#475569" strokeWidth="1.6" />
        </g>

        {/* ── FRONT WHEEL ────────────────────────── */}
        <g className="svg-wheel-spokes">
          <circle cx="385" cy="244" r="32" fill="#0f172a" stroke="#334155" strokeWidth="2.5" />
          <circle cx="385" cy="244" r="21" fill="#1e293b" />
          <circle cx="385" cy="244" r="6" fill="#475569" />
          <line x1="385" y1="227" x2="385" y2="261" stroke="#475569" strokeWidth="2.2" />
          <line x1="368" y1="244" x2="402" y2="244" stroke="#475569" strokeWidth="2.2" />
          <line x1="373" y1="232" x2="397" y2="256" stroke="#475569" strokeWidth="1.6" />
          <line x1="397" y1="232" x2="373" y2="256" stroke="#475569" strokeWidth="1.6" />
        </g>

        {/* ── FLOATING BOXES ─────────────────────── */}
        <g className="float-box-1">
          <rect x="0" y="30" width="44" height="44" rx="6" fill="#f97316" opacity="0.88" />
          <line x1="0" y1="52" x2="44" y2="52" stroke="rgba(0,0,0,0.15)" strokeWidth="1" />
          <line x1="22" y1="30" x2="22" y2="74" stroke="rgba(0,0,0,0.12)" strokeWidth="1" />
        </g>
        <g className="float-box-2">
          <rect x="461" y="62" width="35" height="35" rx="5" fill="#f97316" opacity="0.65" />
          <line x1="461" y1="79" x2="496" y2="79" stroke="rgba(0,0,0,0.12)" strokeWidth="1" />
        </g>
        <g className="float-box-3">
          <rect x="468" y="152" width="26" height="26" rx="4" fill="#f97316" opacity="0.44" />
        </g>
        <g className="float-box-4">
          <rect x="8" y="120" width="20" height="20" rx="3" fill="#f97316" opacity="0.28" />
        </g>

        {/* ── SPEED LINES ────────────────────────── */}
        <line x1="4" y1="150" x2="24" y2="150" stroke="#f97316" strokeWidth="2.5" strokeLinecap="round" opacity="0.5" />
        <line x1="4" y1="164" x2="17" y2="164" stroke="#f97316" strokeWidth="1.5" strokeLinecap="round" opacity="0.3" />
        <line x1="4" y1="178" x2="27" y2="178" stroke="#f97316" strokeWidth="1" strokeLinecap="round" opacity="0.2" />
      </svg>
    </div>
  );
}
