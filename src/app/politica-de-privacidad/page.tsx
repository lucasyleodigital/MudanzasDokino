import type { Metadata } from "next";
import { SITE } from "@/lib/constants";

export const metadata: Metadata = {
  title: "Política de privacidad",
};

export default function PoliticaPrivacidadPage() {
  return (
    <section className="mx-auto max-w-3xl px-5 py-16">
      <h1 className="font-heading text-3xl font-extrabold text-ink">
        Política de privacidad
      </h1>

      <div className="mt-8 space-y-6 text-sm leading-relaxed text-ink-muted">
        <div>
          <h2 className="font-heading text-lg font-bold text-ink">
            Responsable del tratamiento
          </h2>
          <p className="mt-2">
            {SITE.legalName} ({SITE.name}), CIF {SITE.cif}, con domicilio en{" "}
            {SITE.fiscalAddress}. Email de contacto: {SITE.contactEmail}.
          </p>
        </div>

        <div>
          <h2 className="font-heading text-lg font-bold text-ink">Finalidad</h2>
          <p className="mt-2">
            Los datos facilitados a través de los formularios de presupuesto y contacto se
            utilizan exclusivamente para gestionar tu solicitud: elaborar un presupuesto de
            mudanza o responder a tu consulta.
          </p>
        </div>

        <div>
          <h2 className="font-heading text-lg font-bold text-ink">Base legal</h2>
          <p className="mt-2">
            El consentimiento del interesado, prestado al enviar voluntariamente el
            formulario correspondiente.
          </p>
        </div>

        <div>
          <h2 className="font-heading text-lg font-bold text-ink">Conservación</h2>
          <p className="mt-2">
            Los datos se conservan únicamente durante el tiempo necesario para gestionar tu
            solicitud y, en su caso, durante los plazos legalmente exigibles.
          </p>
        </div>

        <div>
          <h2 className="font-heading text-lg font-bold text-ink">
            Terceros que intervienen en el tratamiento
          </h2>
          <p className="mt-2">
            Para el envío de los emails generados por los formularios utilizamos Resend
            (Resend Inc.), que actúa como encargado del tratamiento. Si cargas el mapa de
            la zona de cobertura, Google puede establecer sus propias cookies — más detalle
            en la política de cookies.
          </p>
        </div>

        <div>
          <h2 className="font-heading text-lg font-bold text-ink">Derechos</h2>
          <p className="mt-2">
            Puedes ejercer tus derechos de acceso, rectificación, supresión, oposición,
            limitación del tratamiento y portabilidad escribiendo a {SITE.contactEmail}.
          </p>
        </div>

        <div>
          <h2 className="font-heading text-lg font-bold text-ink">
            Medidas de seguridad
          </h2>
          <p className="mt-2">
            Aplicamos medidas técnicas y organizativas razonables para proteger los datos
            personales frente a accesos no autorizados, pérdida o alteración, incluyendo
            envío cifrado (HTTPS), validación y limitación de las solicitudes recibidas por
            los formularios.
          </p>
        </div>
      </div>
    </section>
  );
}
