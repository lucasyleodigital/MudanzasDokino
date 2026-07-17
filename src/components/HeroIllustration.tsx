// Cinematic night-scene illustration — fully static SVG, CSS-animated
// No Math.random() — uses deterministic pattern for building windows

const BUILDINGS = [
  { x: 0,   y: 198, w: 50,  h: 92  },
  { x: 55,  y: 172, w: 38,  h: 118 },
  { x: 98,  y: 142, w: 66,  h: 148 },
  { x: 169, y: 194, w: 40,  h: 96  },
  { x: 214, y: 218, w: 30,  h: 72  },
  { x: 249, y: 164, w: 56,  h: 126 },
  { x: 310, y: 186, w: 40,  h: 104 },
  { x: 355, y: 140, w: 70,  h: 150 },
  { x: 430, y: 176, w: 44,  h: 114 },
  { x: 479, y: 154, w: 60,  h: 136 },
  { x: 544, y: 200, w: 36,  h: 90  },
  { x: 585, y: 170, w: 50,  h: 120 },
  { x: 640, y: 144, w: 66,  h: 146 },
  { x: 711, y: 190, w: 40,  h: 100 },
  { x: 756, y: 152, w: 54,  h: 138 },
  { x: 815, y: 174, w: 46,  h: 116 },
  { x: 866, y: 200, w: 54,  h: 90  },
];

const BUILDING_COLORS = ["#070e1e", "#060c1b", "#080f20", "#05091a"];

// Pre-computed at module level → identical string values on server and client
const SPOKE_DATA = [0, 60, 120, 180, 240, 300].map((deg) => {
  const rad = (deg * Math.PI) / 180;
  return {
    x1: (11 * Math.cos(rad)).toFixed(2),
    y1: (11 * Math.sin(rad)).toFixed(2),
    x2: (26 * Math.cos(rad)).toFixed(2),
    y2: (26 * Math.sin(rad)).toFixed(2),
  };
});

function seededRand(seed: number) {
  const x = Math.sin(seed + 1) * 10000;
  return x - Math.floor(x);
}

function buildingWindows(bIdx: number, b: (typeof BUILDINGS)[0]) {
  const cols = Math.floor((b.w - 6) / 11);
  const rows = Math.floor((b.h - 10) / 13);
  const windows = [];
  for (let r = 0; r < rows; r++) {
    for (let c = 0; c < cols; c++) {
      const lit = seededRand(bIdx * 97 + r * 17 + c * 7) > 0.52;
      windows.push({ x: b.x + 4 + c * 11, y: b.y + 8 + r * 13, lit });
    }
  }
  return windows;
}

function Wheel({ cx, cy }: { cx: number; cy: number }) {
  return (
    // translate so all child coords are relative to wheel center → no float issues
    <g transform={`translate(${cx} ${cy})`}>
      <ellipse cx="0" cy="42" rx="44" ry="8" fill="rgba(0,0,0,0.45)" />
      <circle cx="0" cy="0" r="42" fill="#0f172a" />
      <circle cx="0" cy="0" r="42" fill="none" stroke="#1f2937" strokeWidth="7" />
      <circle cx="0" cy="0" r="38" fill="none" stroke="#0d1520" strokeWidth="2" strokeDasharray="9 4.5" />
      <circle cx="0" cy="0" r="27" fill="#1e293b" />
      <g className="svg-wheel-spokes">
        {SPOKE_DATA.map((s, i) => (
          <line key={i} x1={s.x1} y1={s.y1} x2={s.x2} y2={s.y2}
            stroke="#475569" strokeWidth="2.8" strokeLinecap="round" />
        ))}
      </g>
      <circle cx="0" cy="0" r="11" fill="#334155" />
      <circle cx="0" cy="0" r="6"  fill="#4b5563" />
      <circle cx="0" cy="0" r="2.5" fill="#64748b" />
      <ellipse cx="-14" cy="-16" rx="9" ry="5"
        fill="white" opacity="0.04" transform="rotate(-35 -14 -16)" />
    </g>
  );
}

function CardboardBox({
  x, y, w, h,
  label, floatClass, svgTransform,
}: {
  x: number; y: number; w: number; h: number;
  label?: string; floatClass: string; svgTransform?: string;
}) {
  const dp = 7; // depth perspective offset
  return (
    <g className={floatClass} transform={svgTransform}>
      {/* Right side face (darker) */}
      <path
        d={`M ${x+w},${y} L ${x+w+dp},${y-dp} L ${x+w+dp},${y+h-dp} L ${x+w},${y+h} Z`}
        fill="#78350f"
      />
      {/* Top face (lighter) */}
      <path
        d={`M ${x},${y} L ${x+w},${y} L ${x+w+dp},${y-dp} L ${x+dp},${y-dp} Z`}
        fill="#fbbf24"
        opacity="0.9"
      />
      {/* Front face */}
      <rect x={x} y={y} width={w} height={h} rx={2} fill="#b45309" />
      {/* Tape cross */}
      <line x1={x + w / 2} y1={y} x2={x + w / 2} y2={y + h} stroke="#92400e" strokeWidth={5} opacity="0.45" />
      <line x1={x} y1={y + h / 2} x2={x + w} y2={y + h / 2} stroke="#92400e" strokeWidth={4} opacity="0.4" />
      {/* Label */}
      {label && (
        <>
          <rect x={x + 4} y={y + h * 0.18} width={w * 0.55} height={h * 0.28} rx={1.5} fill="white" opacity="0.88" />
          <text
            x={x + 4 + (w * 0.55) / 2} y={y + h * 0.18 + h * 0.28 * 0.68}
            textAnchor="middle" fill="#92400e"
            fontFamily="system-ui, sans-serif" fontSize={Math.max(5, h * 0.14)} fontWeight="800"
          >
            {label}
          </text>
        </>
      )}
    </g>
  );
}

export default function HeroIllustration({ className = "" }: { className?: string }) {
  const allWindows = BUILDINGS.flatMap((b, i) => buildingWindows(i, b));

  return (
    <svg
      viewBox="0 0 920 520"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
      aria-hidden="true"
      style={{ overflow: "visible" }}
    >
      <defs>
        {/* === Filters === */}
        <filter id="hi-glow-hl" x="-120%" y="-120%" width="340%" height="340%">
          <feGaussianBlur stdDeviation="12" result="b1" />
          <feMerge><feMergeNode in="b1" /><feMergeNode in="b1" /><feMergeNode in="SourceGraphic" /></feMerge>
        </filter>
        <filter id="hi-glow-sm" x="-40%" y="-40%" width="180%" height="180%">
          <feGaussianBlur stdDeviation="5" result="b2" />
          <feMerge><feMergeNode in="b2" /><feMergeNode in="SourceGraphic" /></feMerge>
        </filter>
        <filter id="hi-glow-under" x="-30%" y="-30%" width="160%" height="200%">
          <feGaussianBlur stdDeviation="14" />
        </filter>
        <filter id="hi-city-blur">
          <feGaussianBlur stdDeviation="1.2" />
        </filter>

        {/* === Gradients === */}
        <linearGradient id="hi-truck-shade" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%"   stopColor="white" stopOpacity="0.07" />
          <stop offset="100%" stopColor="black" stopOpacity="0.22" />
        </linearGradient>
        <linearGradient id="hi-truck-top" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%"   stopColor="#2e5ea0" />
          <stop offset="100%" stopColor="#1a3a78" />
        </linearGradient>
        <linearGradient id="hi-orange-stripe" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%"   stopColor="#fb923c" />
          <stop offset="100%" stopColor="#ea580c" />
        </linearGradient>
        <linearGradient id="hi-diamond" x1="0" y1="0" x2="1" y2="1">
          <stop offset="0%"   stopColor="#fbbf24" />
          <stop offset="100%" stopColor="#f97316" />
        </linearGradient>
        <radialGradient id="hi-headlight" cx="35%" cy="35%" r="65%">
          <stop offset="0%"   stopColor="#fffbeb" />
          <stop offset="45%"  stopColor="#fde68a" />
          <stop offset="100%" stopColor="#f97316" stopOpacity="0" />
        </radialGradient>
        <radialGradient id="hi-under-glow" cx="50%" cy="0%" r="75%" fy="0%">
          <stop offset="0%"   stopColor="#f97316" stopOpacity="0.6" />
          <stop offset="100%" stopColor="transparent" />
        </radialGradient>
        <radialGradient id="hi-road-pool" cx="50%" cy="10%" r="80%" fy="0%">
          <stop offset="0%"   stopColor="#f97316" stopOpacity="0.22" />
          <stop offset="100%" stopColor="transparent" />
        </radialGradient>
        <linearGradient id="hi-glass-refl" x1="0" y1="0" x2="1" y2="1">
          <stop offset="0%"   stopColor="white" stopOpacity="0.16" />
          <stop offset="100%" stopColor="transparent" />
        </linearGradient>
        <linearGradient id="hi-cab-body" x1="0" y1="0" x2="1" y2="0">
          <stop offset="0%"   stopColor="#04111f" />
          <stop offset="100%" stopColor="#0a2050" />
        </linearGradient>
        <radialGradient id="hi-wheel-hub" cx="38%" cy="38%" r="62%">
          <stop offset="0%"   stopColor="#64748b" />
          <stop offset="100%" stopColor="#1e293b" />
        </radialGradient>
        <linearGradient id="hi-lamp-cone" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%"   stopColor="#fbbf24" stopOpacity="0.08" />
          <stop offset="100%" stopColor="transparent" />
        </linearGradient>
        <linearGradient id="hi-road-line" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%"   stopColor="#0e1e30" stopOpacity="0" />
          <stop offset="100%" stopColor="#060d1e" stopOpacity="0.5" />
        </linearGradient>
      </defs>

      {/* ═══════════════ CITY SKYLINE ═══════════════ */}
      <g filter="url(#hi-city-blur)">
        {BUILDINGS.map((b, i) => (
          <rect
            key={i} x={b.x} y={b.y} width={b.w} height={b.h}
            fill={BUILDING_COLORS[i % 4]}
          />
        ))}
        {/* Dark windows */}
        {allWindows
          .filter((w) => !w.lit)
          .map((w, i) => (
            <rect key={i} x={w.x} y={w.y} width={6} height={7} rx={0.5} fill="#0d1a2e" opacity="0.85" />
          ))}
        {/* Lit windows */}
        {allWindows
          .filter((w) => w.lit)
          .map((w, i) => (
            <rect key={i} x={w.x} y={w.y} width={6} height={7} rx={0.5} fill="#fcd34d" opacity="0.65" />
          ))}
        {/* Barcelona cathedral spire silhouette */}
        <polygon points="815,152 820,122 825,152" fill="#060c1b" />
        <polygon points="831,155 836,116 841,155" fill="#060c1b" />
        <polygon points="847,157 853,126 859,157" fill="#060c1b" />
        <rect x="808" y="152" width="58" height="42" fill="#060c1b" />
        {/* Moon */}
        <circle cx="880" cy="62" r="20" fill="#1c2a45" />
        <circle cx="888" cy="56" r="16" fill="#060d1e" />
      </g>

      {/* ═══════════════ ROAD ═══════════════ */}
      <rect x="0" y="460" width="920" height="60" fill="#060e1a" />
      <rect x="0" y="460" width="920" height="3"  fill="#0c1c2e" />
      {/* Lane dashes */}
      {Array.from({ length: 12 }, (_, k) => (
        <rect key={k} x={k * 78 + 12} y="478" width={52} height={3} rx={1} fill="#162030" opacity="0.7" />
      ))}
      {/* Orange glow pool from undercarriage */}
      <ellipse cx="495" cy="463" rx="330" ry="18" fill="url(#hi-road-pool)" />
      {/* Road depth gradient */}
      <rect x="0" y="460" width="920" height="60" fill="url(#hi-road-line)" />

      {/* ═══════════════ UNDERCARRIAGE GLOW ═══════════════ */}
      <rect
        x="185" y="444" width="665" height="42" rx={4}
        fill="url(#hi-under-glow)"
        filter="url(#hi-glow-under)"
      />

      {/* ═══════════════ CHASSIS RAIL ═══════════════ */}
      <rect x="108" y="430" width="738" height="12" rx={3} fill="#030b18" />

      {/* ═══════════════ CARGO BOX ═══════════════ */}
      {/* Top face (3‑D effect) */}
      <path d="M 218,264 L 850,264 L 857,249 L 225,249 Z" fill="url(#hi-truck-top)" />
      {/* Main body */}
      <rect x="218" y="264" width="632" height="166" rx={3} fill="#0d2b5e" />
      <rect x="218" y="264" width="632" height="166" rx={3} fill="url(#hi-truck-shade)" />
      {/* Horizontal panel lines */}
      <line x1="218" y1="312" x2="822" y2="312" stroke="#0a2552" strokeWidth="1.2" opacity="0.6" />
      <line x1="218" y1="358" x2="822" y2="358" stroke="#0a2552" strokeWidth="1.2" opacity="0.5" />

      {/* Rear wall */}
      <rect x="824" y="264" width="26" height="166" rx="0 3 3 0" fill="#091d42" />
      <rect x="824" y="264" width="26" height="166" fill="url(#hi-truck-shade)" />
      <line x1="837" y1="264" x2="837" y2="430" stroke="#071535" strokeWidth="1.8" />
      {[278,295,312,329,346,363,380,397,414].map((y) => (
        <line key={y} x1="824" y1={y} x2="850" y2={y} stroke="#071535" strokeWidth="0.9" />
      ))}
      <rect x="844" y="343" width="7" height="30" rx={3.5} fill="#182e58" />

      {/* Orange accent stripe */}
      <rect x="218" y="410" width="632" height="22" fill="url(#hi-orange-stripe)" />
      <rect x="218" y="409" width="632" height="2.5" fill="#fbbf24" opacity="0.55" />

      {/* === BRANDING === */}
      {/* Diamond logo */}
      <polygon points="398,327 414,311 430,327 414,343" fill="url(#hi-diamond)" filter="url(#hi-glow-sm)" />
      <polygon points="404,327 414,317 424,327 414,337" fill="white" opacity="0.9" />
      <text x="414" y="331" textAnchor="middle" fill="#f97316"
        fontFamily="Manrope, system-ui, sans-serif" fontSize="10" fontWeight="900">D</text>
      {/* Company name */}
      <text x="552" y="356" textAnchor="middle" fill="white"
        fontFamily="Manrope, system-ui, sans-serif" fontSize="21" fontWeight="800" letterSpacing="2.5"
        filter="url(#hi-glow-sm)" opacity="0.95">
        MUDANZAS DOKINO
      </text>
      {/* Tagline */}
      <text x="552" y="378" textAnchor="middle" fill="rgba(255,255,255,0.38)"
        fontFamily="system-ui, sans-serif" fontSize="8" letterSpacing="4.5">
        BARCELONA · CATALUÑA · ESPAÑA
      </text>

      {/* ═══════════════ CAB ═══════════════ */}
      {/* Cab 3‑D top */}
      <path d="M 62,318 Q 74,286 144,278 L 230,278 L 237,264 L 150,264 L 67,312 Z" fill="#102040" />
      {/* Cab front face */}
      <path d="M 54,416 L 54,320 Q 65,288 98,283 L 122,282 L 122,440 L 54,440 Z" fill="#040e1e" />
      {/* Cab side */}
      <path d="M 122,282 L 230,278 L 230,440 L 122,440 Z" fill="url(#hi-cab-body)" />
      <path d="M 122,282 L 230,278 L 230,440 L 122,440 Z" fill="url(#hi-truck-shade)" />
      {/* Door divider */}
      <line x1="180" y1="282" x2="180" y2="440" stroke="#07162e" strokeWidth={2} />
      {/* Door handle */}
      <rect x="160" y="366" width="17" height="5" rx={2.5} fill="#152c4e" />

      {/* Window */}
      <path d="M 130,293 L 222,289 L 224,339 L 130,343 Z" fill="#09253d" />
      {/* Window glass reflection */}
      <path d="M 130,293 L 180,291 L 180,302 L 130,304 Z" fill="url(#hi-glass-refl)" />
      <path d="M 130,293 L 222,289 L 224,339 L 130,343 Z"
        fill="none" stroke="#081a30" strokeWidth={2} />

      {/* Side mirror */}
      <rect x="86" y="296" width="24" height="17" rx={2} fill="#0c1a30" />
      <rect x="81" y="301" width="7"  height="11" rx={2} fill="#060f20" />
      <rect x="87" y="297" width="22" height="15" rx={1} fill="#071828" />
      <rect x="87" y="297" width="9"  height={6}  rx={1} fill="rgba(255,255,255,0.05)" />

      {/* Front bumper */}
      <rect x="46" y="424" width="78" height="18" rx={3} fill="#111827" />
      <rect x="46" y="424" width="78" height={5}  rx="3 3 0 0" fill="#1e293b" />

      {/* Grille */}
      <rect x="50" y="378" width={9} height={46} rx={1} fill="#030c18" />
      {[384,393,402,411,420].map((y) => (
        <rect key={y} x="50" y={y} width={9} height={2} rx={1} fill="#152030" />
      ))}

      {/* Headlights */}
      <ellipse cx="60" cy="368" rx="17" ry="12"
        fill="url(#hi-headlight)"
        filter="url(#hi-glow-hl)"
        className="headlight-glow"
      />
      <ellipse cx="60" cy="408" rx="12" ry="8"
        fill="url(#hi-headlight)"
        filter="url(#hi-glow-sm)"
        className="headlight-glow"
      />

      {/* Headlight beam */}
      <path d="M 46,358 L -140,285 L -140,468 L 46,378 Z" fill="white" opacity="0.022" />

      {/* Cab steps */}
      <rect x="192" y="414" width="36" height={8} rx={2} fill="#06101e" />
      <rect x="192" y="426" width="30" height={8} rx={2} fill="#06101e" />

      {/* Fuel tank */}
      <rect x="213" y="388" width="20" height="50" rx={4} fill="#0b1928" />
      <rect x="213" y="388" width="20" height={5}  rx="2 2 0 0" fill="#152438" />
      <rect x="214" y="395" width="18" height="32" rx={2} fill="#05101e" opacity="0.5" />

      {/* ═══════════════ WHEELS ═══════════════ */}
      {/* Mud flap before rear wheels */}
      <rect x="585" y="408" width={6} height={55} rx={2} fill="#030b18" />
      <Wheel cx={134} cy={460} />
      <Wheel cx={638} cy={460} />
      <Wheel cx={736} cy={460} />
      {/* Tandem axle connector bar */}
      <rect x="594" y="446" width="184" height={13} rx={3} fill="#030b18" />

      {/* ═══════════════ FLOATING BOXES ═══════════════ */}
      <CardboardBox x={158} y={194} w={55} h={48} label="FRÁGIL" floatClass="float-box-1" />
      <CardboardBox x={346} y={126} w={48} h={44} label="DOKINO" floatClass="float-box-2" svgTransform="rotate(-8 370 149)" />
      <CardboardBox x={556} y={90}  w={38} h={34} label="FRÁGIL" floatClass="float-box-3" svgTransform="rotate(6 575 108)" />
      <CardboardBox x={80}  y={208} w={44} h={40} floatClass="float-box-4" />

      {/* ═══════════════ MOVER SILHOUETTE ═══════════════ */}
      <g opacity="0.65">
        <circle cx="99" cy="258" r="12" fill="#030b18" />
        <ellipse cx="99" cy="276" rx="11" ry="17" fill="#030b18" />
        {/* Arms up carrying box */}
        <line x1="88" y1="268" x2="74" y2="248" stroke="#030b18" strokeWidth={7} strokeLinecap="round" />
        <line x1="110" y1="268" x2="124" y2="248" stroke="#030b18" strokeWidth={7} strokeLinecap="round" />
        {/* Legs walking */}
        <line x1="93"  y1="293" x2="85"  y2="322" stroke="#030b18" strokeWidth={6} strokeLinecap="round" />
        <line x1="105" y1="293" x2="114" y2="322" stroke="#030b18" strokeWidth={6} strokeLinecap="round" />
      </g>

      {/* ═══════════════ STREET LAMP ═══════════════ */}
      <rect x="878" y="182" width={4} height={278} rx={2} fill="#0a1525" />
      <path d="M 878,182 Q 878,160 900,158 L 900,165 Q 885,167 882,184 Z" fill="#0a1525" />
      <ellipse cx="900" cy="157" rx="13" ry={5} fill="#182840" />
      <ellipse cx="900" cy="162" rx={9}  ry={4}  fill="#fbbf24" filter="url(#hi-glow-sm)" opacity="0.6" />
      {/* Cone of light */}
      <path d="M 890,168 L 845,295 L 950,295 L 910,168 Z" fill="url(#hi-lamp-cone)" />

      {/* ═══════════════ ATMOSPHERIC OVERLAY ═══════════════ */}
      <rect x="0" y="435" width="920" height="85" fill="rgba(6,13,30,0.3)" />
    </svg>
  );
}
