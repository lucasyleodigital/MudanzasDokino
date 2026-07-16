"use client";

import { useEffect, useRef } from "react";

declare global {
  interface Window {
    turnstile?: {
      render: (
        container: HTMLElement,
        options: {
          sitekey: string;
          callback: (token: string) => void;
          "expired-callback"?: () => void;
        }
      ) => string;
      reset: (widgetId?: string) => void;
    };
    onTurnstileLoad?: () => void;
  }
}

// [PENDIENTE] sustituir por la site key real de Cloudflare Turnstile una vez
// dada de alta la propiedad del dominio en el panel de Cloudflare.
const TURNSTILE_SITE_KEY =
  process.env.NEXT_PUBLIC_TURNSTILE_SITE_KEY || "1x00000000000000000000AA";

type Props = {
  onVerify: (token: string) => void;
};

export default function Turnstile({ onVerify }: Props) {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const SCRIPT_ID = "cf-turnstile-script";

    function render() {
      if (ref.current && window.turnstile) {
        window.turnstile.render(ref.current, {
          sitekey: TURNSTILE_SITE_KEY,
          callback: onVerify,
        });
      }
    }

    if (window.turnstile) {
      render();
      return;
    }

    if (!document.getElementById(SCRIPT_ID)) {
      const script = document.createElement("script");
      script.id = SCRIPT_ID;
      script.src =
        "https://challenges.cloudflare.com/turnstile/v0/api.js?onload=onTurnstileLoad";
      script.async = true;
      script.defer = true;
      window.onTurnstileLoad = render;
      document.body.appendChild(script);
    } else {
      window.onTurnstileLoad = render;
    }
  }, [onVerify]);

  return <div ref={ref} />;
}
