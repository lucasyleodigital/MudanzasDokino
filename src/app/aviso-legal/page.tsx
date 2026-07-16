import type { Metadata } from "next";
import { SITE } from "@/lib/constants";

export const metadata: Metadata = {
  title: "Aviso legal",
  robots: { index: true, follow: true },
};

export default function AvisoLegalPage() {
  return (
    <section className="mx-auto max-w-3xl px-5 py-16 prose-sm">
      <h1 className="font-heading text-3xl font-extrabold text-ink">Aviso legal</h1>

      <div className="mt-8 space-y-6 text-sm leading-relaxed text-ink-muted">
        <div>
          <h2 className="font-heading text-lg font-bold text-ink">1. Datos del titular</h2>
          <p className="mt-2">
            En cumplimiento del deber de información recogido en la Ley 34/2002, de 11 de
            julio, de Servicios de la Sociedad de la Información y de Comercio Electrónico,
            se informa de los siguientes datos:
          </p>
          <ul className="mt-2 list-disc space-y-1 pl-5">
            <li>Titular: {SITE.legalName}</li>
            <li>Nombre comercial: {SITE.name}</li>
            <li>CIF: {SITE.cif}</li>
            <li>Domicilio: {SITE.fiscalAddress}</li>
            <li>Email de contacto: {SITE.contactEmail}</li>
            <li>Teléfono de contacto: {SITE.phoneDisplay}</li>
            <li>Dominio: {SITE.domain}</li>
          </ul>
        </div>

        <div>
          <h2 className="font-heading text-lg font-bold text-ink">2. Objeto</h2>
          <p className="mt-2">
            El presente sitio web tiene como finalidad informar sobre los servicios de
            mudanzas ofrecidos por {SITE.name} y facilitar la solicitud de presupuestos y
            el contacto con la empresa.
          </p>
        </div>

        <div>
          <h2 className="font-heading text-lg font-bold text-ink">
            3. Condiciones de uso
          </h2>
          <p className="mt-2">
            El acceso y uso de este sitio web atribuye la condición de usuario e implica
            la aceptación de las condiciones aquí recogidas. El usuario se compromete a
            hacer un uso adecuado de los contenidos y servicios ofrecidos.
          </p>
        </div>

        <div>
          <h2 className="font-heading text-lg font-bold text-ink">
            4. Propiedad intelectual
          </h2>
          <p className="mt-2">
            Los contenidos, textos, imágenes, marcas y demás elementos de este sitio web
            son propiedad de {SITE.legalName} o de terceros que han autorizado su uso, y
            están protegidos por la normativa de propiedad intelectual e industrial.
          </p>
        </div>

        <div>
          <h2 className="font-heading text-lg font-bold text-ink">
            5. Legislación aplicable
          </h2>
          <p className="mt-2">
            Las presentes condiciones se rigen por la legislación española. Para cualquier
            controversia derivada del uso de este sitio web, las partes se someten a los
            juzgados y tribunales que correspondan conforme a derecho.
          </p>
        </div>
      </div>
    </section>
  );
}
