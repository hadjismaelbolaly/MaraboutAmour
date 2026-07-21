import Button from "@/components/Button";

export default function NotFound() {
  return (
    <section className="flex min-h-screen flex-col items-center justify-center px-5 text-center">
      <p className="font-display text-8xl text-or">404</p>
      <h1 className="mt-4 font-display text-3xl text-creme">Page introuvable</h1>
      <p className="mt-3 max-w-md text-creme/60">
        La page que vous recherchez n&rsquo;existe pas ou a été déplacée.
      </p>
      <div className="mt-8">
        <Button href="/">Retour à l&rsquo;accueil</Button>
      </div>
    </section>
  );
}
