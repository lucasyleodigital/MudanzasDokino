"use client";

import { whatsappHref } from "@/lib/constants";

type Props = {
  message?: string;
};

const DEFAULT_MESSAGE =
  "Hola, he visto vuestra web y me gustaría pedir información sobre una mudanza.";

export default function WhatsAppButton({ message = DEFAULT_MESSAGE }: Props) {
  return (
    <a
      href={whatsappHref(message)}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Contactar por WhatsApp"
      className="whatsapp-pulse fixed bottom-5 right-5 z-50 flex h-14 w-14 items-center justify-center rounded-full bg-[#25ad5a] text-white shadow-lg transition-transform hover:scale-105 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-accent"
    >
      <svg
        width="28"
        height="28"
        viewBox="0 0 24 24"
        fill="currentColor"
        aria-hidden="true"
      >
        <path d="M12.04 2C6.58 2 2.13 6.45 2.13 11.91c0 1.87.5 3.63 1.44 5.17L2 22l5.09-1.53a9.87 9.87 0 0 0 4.95 1.33h.01c5.46 0 9.91-4.45 9.91-9.91S17.5 2 12.04 2Zm0 18.15c-1.55 0-3.05-.42-4.35-1.2l-.31-.18-3.02.91.9-2.94-.2-.31a8.15 8.15 0 0 1-1.26-4.42c0-4.52 3.68-8.2 8.24-8.2 2.2 0 4.27.86 5.83 2.42a8.14 8.14 0 0 1 2.41 5.79c0 4.52-3.68 8.13-8.24 8.13Zm4.51-6.13c-.25-.12-1.47-.72-1.7-.81-.23-.08-.39-.12-.56.13-.17.25-.64.81-.78.97-.14.17-.29.19-.53.06-.25-.12-1.05-.39-2-1.23-.74-.66-1.24-1.47-1.39-1.72-.14-.25-.02-.38.11-.51.11-.11.25-.29.37-.43.12-.14.16-.25.25-.41.08-.17.04-.31-.02-.43-.06-.12-.56-1.35-.77-1.85-.2-.48-.41-.42-.56-.42-.14-.01-.31-.01-.48-.01a.9.9 0 0 0-.66.31c-.23.25-.86.84-.86 2.05 0 1.21.88 2.38 1 2.54.12.17 1.73 2.64 4.2 3.7.59.25 1.05.4 1.4.52.59.19 1.12.16 1.55.1.47-.07 1.47-.6 1.68-1.18.21-.58.21-1.08.15-1.18-.06-.1-.23-.16-.48-.28Z" />
      </svg>
    </a>
  );
}
