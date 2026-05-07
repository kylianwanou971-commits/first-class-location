import Link from "next/link";

export default function NotFound() {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center text-center px-4">
      <p
        className="font-heading text-8xl text-gold/20 mb-4"
        style={{ fontFamily: "var(--font-heading)" }}
      >
        404
      </p>
      <h1
        className="font-heading text-3xl text-text-primary mb-4"
        style={{ fontFamily: "var(--font-heading)" }}
      >
        Page introuvable
      </h1>
      <p
        className="text-text-secondary text-sm mb-8 max-w-sm"
        style={{ fontFamily: "var(--font-body)" }}
      >
        La page que vous recherchez n&apos;existe pas ou a été déplacée.
      </p>
      <Link href="/" className="btn-gold">
        Retour à l&apos;accueil
      </Link>
    </div>
  );
}
