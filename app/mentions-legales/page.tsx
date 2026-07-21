import type { Metadata } from "next";
import SectionHeading from "@/components/SectionHeading";
import { siteConfig } from "@/lib/site-config";

export const metadata: Metadata = {
  title: "Mentions légales",
  description: "Mentions légales du site de Hadj Ismael Bohlaly, Ouagadougou, Burkina Faso.",
};

export default function LegalPage() {
  return (
    <section className="pt-36 pb-24">
      <div className="mx-auto max-w-3xl px-5 md:px-8">
        <SectionHeading eyebrow="Informations légales" title="Mentions légales" center={false} />

        <div className="mt-12 space-y-8 text-sm leading-relaxed text-creme/70">
          <div>
            <h2 className="mb-2 font-display text-xl text-creme">Éditeur du site</h2>
            <p>
              {siteConfig.name}<br />
              {siteConfig.location}<br />
              Téléphone : {siteConfig.phone}<br />
              Email : {siteConfig.email}
            </p>
          </div>
          <div>
            <h2 className="mb-2 font-display text-xl text-creme">Activité</h2>
            <p>
              Consultation et accompagnement spirituel dans le domaine sentimental, en présentiel
              à Ouagadougou (Burkina Faso) et à distance dans le monde entier.
            </p>
          </div>
          <div>
            <h2 className="mb-2 font-display text-xl text-creme">Hébergement</h2>
            <p>
              Ce site est hébergé par Vercel Inc., 340 S Lemon Ave #4133, Walnut, CA 91789, États-Unis.
            </p>
          </div>
          <div>
            <h2 className="mb-2 font-display text-xl text-creme">Propriété intellectuelle</h2>
            <p>
              L&rsquo;ensemble des contenus (textes, images, identité visuelle) présents sur ce
              site est protégé. Toute reproduction sans autorisation préalable est interdite.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
