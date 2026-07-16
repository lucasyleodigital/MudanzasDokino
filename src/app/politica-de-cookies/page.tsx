import type { Metadata } from "next";
import { SITE } from "@/lib/constants";

export const metadata: Metadata = {
  title: "Política de cookies",
};

export default function PoliticaCookiesPage() {
  return (
    <section className="mx-auto max-w-3xl px-5 py-16">
      <h1 className="font-heading text-3xl font-extrabold text-ink">
        Política de cookies
      </h1>

      <div className="mt-8 space-y-6 text-sm leading-relaxed text-ink-muted">
        <p>
          {SITE.name} utiliza el mínimo de cookies necesario para el funcionamiento del
          sitio.
        </p>

        <div>
          <h2 className="font-heading text-lg font-bold text-ink">Cookies técnicas</h2>
          <p className="mt-2">
            Usamos una cookie técnica (almacenamiento local del navegador) para recordar tu
            elección sobre este propio aviso de cookies. No requiere consentimiento por ser
            estrictamente necesaria.
          </p>
        </div>

        <div>
          <h2 className="font-heading text-lg font-bold text-ink">
            Cookies de terceros — Google Maps
          </h2>
          <p className="mt-2">
            En la página de zona de cobertura y contacto se puede cargar un mapa de Google
            Maps. Por defecto el mapa **no se carga automáticamente**: solo se incrusta si
            pulsas el botón &quot;Ver mapa&quot;, momento en el que Google puede establecer
            sus propias cookies según su política de privacidad.
          </p>
        </div>

        <div>
          <h2 className="font-heading text-lg font-bold text-ink">Gestión de cookies</h2>
          <p className="mt-2">
            Puedes eliminar las cookies almacenadas por este sitio desde la configuración
            de tu navegador en cualquier momento.
          </p>
        </div>
      </div>
    </section>
  );
}
