type Props = {
  label?: string;
  title: string;
  highlight?: string;
  subtitle?: string;
  children?: React.ReactNode;
  blobColor?: string;
};

export default function PageHero({ label, title, highlight, subtitle, children, blobColor = "rgba(249,115,22,0.38)" }: Props) {
  return (
    <section className="relative overflow-hidden bg-[#060d1e] noise-overlay pb-20 pt-24 md:pb-28 md:pt-32">
      <div
        className="pointer-events-none absolute -bottom-32 -left-32 h-[500px] w-[500px] rounded-full"
        style={{
          background: `radial-gradient(circle, ${blobColor} 0%, transparent 70%)`,
          filter: "blur(55px)",
          animation: "blob-drift 16s ease-in-out infinite",
        }}
      />
      <div
        className="pointer-events-none absolute -right-24 -top-24 h-[600px] w-[600px] rounded-full"
        style={{
          background: "radial-gradient(circle, rgba(99,102,241,0.42) 0%, transparent 70%)",
          filter: "blur(65px)",
          animation: "blob-drift-alt 12s ease-in-out infinite 1s",
        }}
      />
      <div
        className="pointer-events-none absolute inset-0 grid-pulse"
        style={{
          backgroundImage: "radial-gradient(circle, rgba(255,255,255,0.45) 1px, transparent 1px)",
          backgroundSize: "36px 36px",
        }}
      />
      <div className="scan-line" />

      <div className="relative mx-auto max-w-5xl px-6">
        {label && <p className="section-label text-orange-400">{label}</p>}
        <h1 className="mt-4 font-heading font-extrabold leading-[1.05] text-white">
          <div className="reveal-line">
            <span className="block text-5xl md:text-6xl lg:text-7xl">{title}</span>
          </div>
          {highlight && (
            <div className="reveal-line">
              <span className="block text-5xl text-gradient-orange glow-orange md:text-6xl lg:text-7xl">
                {highlight}
              </span>
            </div>
          )}
        </h1>
        {subtitle && (
          <p
            className="mt-5 max-w-2xl text-lg leading-relaxed text-slate-400"
            style={{ animation: "clip-up 1s cubic-bezier(0.16,1,0.3,1) 0.38s both" }}
          >
            {subtitle}
          </p>
        )}
        {children && (
          <div
            className="mt-8"
            style={{ animation: "clip-up 1s cubic-bezier(0.16,1,0.3,1) 0.54s both" }}
          >
            {children}
          </div>
        )}
      </div>
    </section>
  );
}
