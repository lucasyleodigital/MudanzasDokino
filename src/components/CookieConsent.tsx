"use client";

import Link from "next/link";
import { useEffect, useState } from "react";

const STORAGE_KEY = "dokino-cookie-consent";

export default function CookieConsent() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    // localStorage no existe en el render estático — solo se puede leer tras
    // montar en el navegador, de ahí el setState en el efecto.
    // eslint-disable-next-line react-hooks/set-state-in-effect
    setVisible(!window.localStorage.getItem(STORAGE_KEY));
  }, []);

  function decide(value: "accepted" | "rejected") {
    window.localStorage.setItem(STORAGE_KEY, value);
    setVisible(false);
  }

  if (!visible) return null;

  return (
    <div
      role="dialog"
      aria-label="Aviso de cookies"
      className="fixed inset-x-0 bottom-0 z-50 border-t border-line bg-paper-raised px-5 py-4 shadow-[0_-4px_20px_rgba(0,0,0,0.08)]"
    >
      <div className="mx-auto flex max-w-6xl flex-col items-start gap-3 sm:flex-row sm:items-center sm:justify-between">
        <p className="text-sm text-ink-muted">
          Usamos únicamente cookies técnicas necesarias. Al cargar el mapa de la zona de
          cobertura, Google puede establecer cookies propias — puedes ver el detalle en la{" "}
          <Link href="/politica-de-cookies/" className="underline hover:text-ink">
            política de cookies
          </Link>
          .
        </p>
        <div className="flex shrink-0 gap-2">
          <button
            type="button"
            onClick={() => decide("rejected")}
            className="rounded-md border border-line px-4 py-2 text-sm font-medium text-ink hover:bg-paper"
          >
            Rechazar
          </button>
          <button
            type="button"
            onClick={() => decide("accepted")}
            className="rounded-md bg-accent px-4 py-2 text-sm font-medium text-white hover:bg-accent-dark"
          >
            Aceptar
          </button>
        </div>
      </div>
    </div>
  );
}
