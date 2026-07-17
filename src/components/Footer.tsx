import Link from "next/link";
import { NAV_LINKS, SITE, whatsappHref } from "@/lib/constants";

export default function Footer() {
  return (
    <footer className="bg-[#0f172a]">
      <div className="mx-auto max-w-6xl px-5 py-14">
        <div className="grid gap-10 md:grid-cols-4">
          {/* Brand */}
          <div className="md:col-span-1">
            <div className="flex items-center gap-2.5">
              <span className="flex h-8 w-8 items-center justify-center rounded-lg bg-orange-500 font-heading text-sm font-extrabold text-white">
                D
              </span>
              <span className="font-heading text-base font-extrabold text-white">
                Mudanzas Dokino
              </span>
            </div>
            <p className="mt-4 text-sm leading-relaxed text-slate-400">
              Mudanzas particulares y de empresa en {SITE.serviceAreaHeadline}. Equipo
              propio, sin subcontratas.
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

          {/* Nav */}
          <div>
            <p className="text-xs font-bold uppercase tracking-widest text-slate-500">
              Navegación
            </p>
            <ul className="mt-4 space-y-2.5">
              {NAV_LINKS.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-sm text-slate-400 transition-colors hover:text-white"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <p className="text-xs font-bold uppercase tracking-widest text-slate-500">
              Contacto
            </p>
            <ul className="mt-4 space-y-2.5">
              <li>
                <a
                  href={`mailto:${SITE.contactEmail}`}
                  className="text-sm text-slate-400 transition-colors hover:text-white"
                >
                  {SITE.contactEmail}
                </a>
              </li>
              {SITE.phoneDisplay !== "PENDIENTE" && (
                <li>
                  <a
                    href={`tel:${SITE.phoneDisplay}`}
                    className="text-sm text-slate-400 transition-colors hover:text-white"
                  >
                    {SITE.phoneDisplay}
                  </a>
                </li>
              )}
              <li className="text-sm text-slate-400">{SITE.availability}</li>
            </ul>
          </div>

          {/* Legal */}
          <div>
            <p className="text-xs font-bold uppercase tracking-widest text-slate-500">
              Legal
            </p>
            <ul className="mt-4 space-y-2.5">
              <li>
                <Link
                  href="/aviso-legal/"
                  className="text-sm text-slate-400 transition-colors hover:text-white"
                >
                  Aviso legal
                </Link>
              </li>
              <li>
                <Link
                  href="/politica-de-privacidad/"
                  className="text-sm text-slate-400 transition-colors hover:text-white"
                >
                  Política de privacidad
                </Link>
              </li>
              <li>
                <Link
                  href="/politica-de-cookies/"
                  className="text-sm text-slate-400 transition-colors hover:text-white"
                >
                  Política de cookies
                </Link>
              </li>
              <li>
                <Link
                  href="/presupuesto/"
                  className="text-sm text-slate-400 transition-colors hover:text-white"
                >
                  Pedir presupuesto
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </div>

      {/* Bottom bar */}
      <div className="border-t border-white/8 px-5 py-5">
        <p className="mx-auto max-w-6xl text-xs text-slate-600">
          © {new Date().getFullYear()} Mudanzas Dokino ·{" "}
          <Link href="/aviso-legal/" className="hover:text-slate-400 transition-colors">Aviso legal</Link>
          {" "}· Web por{" "}
          <span className="text-slate-500">Lucas y Leo Digital</span>
        </p>
      </div>
    </footer>
  );
}
