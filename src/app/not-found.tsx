import Link from "next/link";

export default function NotFound() {
  return (
    <section className="mx-auto flex max-w-xl flex-col items-center px-5 py-24 text-center">
      <h1 className="font-heading text-4xl font-extrabold text-ink">Página no encontrada</h1>
      <p className="mt-3 text-ink-muted">
        La página que buscas no existe o se ha movido.
      </p>
      <Link
        href="/"
        className="mt-6 rounded-md bg-accent px-6 py-3 text-sm font-semibold text-white hover:bg-accent-dark"
      >
        Volver al inicio
      </Link>
    </section>
  );
}
