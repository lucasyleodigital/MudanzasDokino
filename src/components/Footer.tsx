import Link from "next/link";
import { SITE, whatsappHref } from "@/lib/constants";

export default function Footer() {
  return (
    <footer className="border-t border-white/[0.06] bg-[#040e1f]">
      <div className="mx-auto max-w-6xl px-5 py-14">
        <div className="grid gap-10 sm:grid-cols-2 lg:grid-cols-4">

          {/* Brand */}
          <div className="sm:col-span-2 lg:col-span-1">
            <span className="font-heading text-2xl font-extrabold text-orange-400">DOKINO</span>
            <p className="mt-4 max-w-xs text-sm leading-relaxed text-slate-400">
              Mudanzas premium y logística urbana en el área metropolitana de {SITE.serviceAreaHeadline}.
            </p>
            <a
              href={whatsappHref("Hola, quiero información sobre una mudanza.")}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-5 inline-flex items-center gap-2 rounded-lg bg-[#25ad5a] px-4 py-2.5 text-sm font-semibold text-white transition-opacity hover:opacity-90"
            >
              <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
                <path d="M12.04 2C6.58 2 2.13 6.45 2.13 11.91c0 1.87.5 3.63 1.44 5.17L2 22l5.09-1.53a9.87 9.87 0 0 0 4.95 1.33c5.46 0 9.91-4.45 9.91-9.91S17.5 2 12.04 2Zm4.51 13.87c-.25-.12-1.47-.72-1.7-.81-.23-.08-.39-.12-.56.13-.17.25-.64.81-.78.97-.14.17-.29.19-.53.06-.25-.12-1.05-.39-2-1.23-.74-.66-1.24-1.47-1.39-1.72-.14-.25-.02-.38.11-.51.11-.11.25-.29.37-.43.12-.14.16-.25.25-.41.08-.17.04-.31-.02-.43-.06-.12-.56-1.35-.77-1.85-.2-.48-.41-.42-.56-.42-.14-.01-.31-.01-.48-.01a.9.9 0 0 0-.66.31c-.23.25-.86.84-.86 2.05 0 1.21.88 2.38 1 2.54.12.17 1.73 2.64 4.2 3.7.59.25 1.05.4 1.4.52.59.19 1.12.16 1.55.1.47-.07 1.47-.6 1.68-1.18.21-.58.21-1.08.15-1.18-.06-.1-.23-.16-.48-.28Z"/>
              </svg>
              WhatsApp directo
            </a>
          </div>

          {/* Servicios */}
          <div>
            <p className="text-xs font-bold uppercase tracking-widest text-slate-500">Servicios</p>
            <ul className="mt-4 space-y-2.5">
              {[
                { href: "/servicios/particulares/", label: "Particulares" },
                { href: "/servicios/empresas/", label: "Oficinas" },
                { href: "/servicios/plataforma-elevadora/", label: "Embalaje" },
                { href: "/servicios/plataforma-elevadora/", label: "Elevadores" },
                { href: "/servicios/guardamuebles/", label: "Guardamuebles" },
              ].map((link) => (
                <li key={link.label}>
                  <Link href={link.href} className="text-sm text-slate-400 transition-colors hover:text-white">
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Compañía */}
          <div>
            <p className="text-xs font-bold uppercase tracking-widest text-slate-500">Compañía</p>
            <ul className="mt-4 space-y-2.5">
              {[
                { href: "/sobre-nosotros/", label: "Sobre nosotros" },
                { href: "/zona-de-cobertura/", label: "Zona de cobertura" },
                { href: "/blog/", label: "Blog" },
                { href: "/preguntas-frecuentes/", label: "Preguntas frecuentes" },
                { href: "/contacto/", label: "Contacto" },
              ].map((link) => (
                <li key={link.href}>
                  <Link href={link.href} className="text-sm text-slate-400 transition-colors hover:text-white">
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contacto */}
          <div>
            <p className="text-xs font-bold uppercase tracking-widest text-slate-500">Contacto</p>
            <ul className="mt-4 space-y-3">
              {SITE.phoneDisplay !== "PENDIENTE" && (
                <li>
                  <a
                    href={`tel:${SITE.phoneDisplay}`}
                    className="flex items-center gap-2 text-sm text-slate-400 transition-colors hover:text-white"
                  >
                    <svg width="15" height="15" viewBox="0 0 24 24" fill="none" className="text-orange-400 shrink-0" aria-hidden="true">
                      <path d="M6.62 10.79a15.05 15.05 0 0 0 6.59 6.59l2.2-2.2a1 1 0 0 1 1.02-.24 11.36 11.36 0 0 0 3.57.57A1 1 0 0 1 21 18.5V22a1 1 0 0 1-1 1A17 17 0 0 1 3 4a1 1 0 0 1 1-1h3.5a1 1 0 0 1 1 1 11.36 11.36 0 0 0 .57 3.57 1 1 0 0 1-.25 1.02z" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"/>
                    </svg>
                    {SITE.phoneDisplay}
                  </a>
                </li>
              )}
              <li>
                <a
                  href={`mailto:${SITE.contactEmail}`}
                  className="flex items-center gap-2 text-sm text-slate-400 transition-colors hover:text-white"
                >
                  <svg width="15" height="15" viewBox="0 0 24 24" fill="none" className="text-orange-400 shrink-0" aria-hidden="true">
                    <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" stroke="currentColor" strokeWidth="1.8" strokeLinejoin="round"/>
                    <path d="M22 6l-10 7L2 6" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round"/>
                  </svg>
                  {SITE.contactEmail}
                </a>
              </li>
              <li>
                <span className="flex items-center gap-2 text-sm text-slate-400">
                  <svg width="15" height="15" viewBox="0 0 24 24" fill="none" className="text-orange-400 shrink-0" aria-hidden="true">
                    <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z" stroke="currentColor" strokeWidth="1.8" strokeLinejoin="round"/>
                    <circle cx="12" cy="10" r="3" stroke="currentColor" strokeWidth="1.8"/>
                  </svg>
                  Poblenou, Barcelona
                </span>
              </li>
              <li className="text-sm text-slate-500">{SITE.availability}</li>
            </ul>
          </div>

        </div>
      </div>

      {/* Bottom bar */}
      <div className="border-t border-white/[0.05] px-5 py-5">
        <div className="mx-auto flex max-w-6xl flex-col gap-3 md:flex-row md:items-center md:justify-between">
          <p className="text-xs text-slate-600">
            © {new Date().getFullYear()} Mudanzas Dokino · Logística de precisión en Barcelona
          </p>
          <div className="flex flex-wrap gap-4">
            {[
              { href: "/politica-de-privacidad/", label: "Privacidad" },
              { href: "/aviso-legal/", label: "Aviso legal" },
              { href: "/politica-de-cookies/", label: "Cookies" },
              { href: "/presupuesto/", label: "Pedir presupuesto" },
            ].map((link) => (
              <Link key={link.href} href={link.href} className="text-xs text-slate-600 transition-colors hover:text-slate-400">
                {link.label}
              </Link>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}
