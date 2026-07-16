import type { Metadata } from "next";
import { Manrope } from "next/font/google";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import WhatsAppButton from "@/components/WhatsAppButton";
import CookieConsent from "@/components/CookieConsent";
import JsonLd from "@/components/JsonLd";
import { SITE } from "@/lib/constants";

const manrope = Manrope({
  variable: "--font-manrope",
  subsets: ["latin"],
  weight: ["500", "700", "800"],
});

export const metadata: Metadata = {
  metadataBase: new URL(SITE.url),
  title: {
    default: `${SITE.name} — Mudanzas particulares y de empresa en ${SITE.serviceAreaHeadline}`,
    template: `%s · ${SITE.name}`,
  },
  description:
    "Empresa de mudanzas con furgonetas propias y plataforma elevadora. Presupuesto sin compromiso para particulares y empresas.",
  openGraph: {
    type: "website",
    locale: "es_ES",
    siteName: SITE.name,
    // [PENDIENTE] añadir una imagen og:image en JPG/PNG (1200x630) una vez
    // haya fotografía real o renders Higgsfield — los rastreadores de
    // redes sociales no soportan bien SVG como og:image.
  },
  twitter: {
    card: "summary_large_image",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es" className={`${manrope.variable} h-full`}>
      <body className="flex min-h-full flex-col font-sans antialiased">
        <JsonLd />
        <Header />
        <main className="flex-1">{children}</main>
        <Footer />
        <WhatsAppButton />
        <CookieConsent />
      </body>
    </html>
  );
}
