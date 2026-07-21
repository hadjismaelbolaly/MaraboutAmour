import type { Metadata } from "next";
import SectionHeading from "@/components/SectionHeading";
import { siteConfig } from "@/lib/site-config";

export const metadata: Metadata = {
  title: "Politique de confidentialité",
  description: "Politique de confidentialité du site de Hadj Ismael Bohlaly.",
};

export default function PrivacyPage() {
  return (
    <section className="pt-36 pb-24">
      <div className="mx-auto max-w-3xl px-5 md:px-8">
        <SectionHeading eyebrow="Informations légales" title="Politique de confidentialité" center={false} />

        <div className="mt-12 space-y-8 text-sm leading-relaxed text-creme/70">
          <div>
            <h2 className="mb-2 font-display text-xl text-creme">1. Collecte des données</h2>
            <p>
              Les données transmises via le formulaire de contact (nom, email, message) sont
              utilisées uniquement dans le cadre de la prise de contact et du suivi de votre
              demande de consultation. Aucune donnée n&rsquo;est vendue ou transmise à des tiers.
            </p>
          </div>
          <div>
            <h2 className="mb-2 font-display text-xl text-creme">2. Confidentialité des échanges</h2>
            <p>
              Conformément à l&rsquo;engagement de discrétion présenté sur ce site, toutes les
              informations partagées lors d&rsquo;une consultation, quel que soit le canal utilisé
              (WhatsApp, téléphone, visioconférence, présentiel), restent strictement confidentielles.
            </p>
          </div>
          <div>
            <h2 className="mb-2 font-display text-xl text-creme">3. Cookies</h2>
            <p>
              Ce site peut utiliser des cookies techniques nécessaires à son bon fonctionnement.
              Aucun cookie publicitaire tiers n&rsquo;est utilisé à des fins de suivi commercial.
            </p>
          </div>
          <div>
            <h2 className="mb-2 font-display text-xl text-creme">4. Vos droits</h2>
            <p>
              Vous disposez d&rsquo;un droit d&rsquo;accès, de rectification et de suppression des
              données vous concernant. Pour exercer ce droit, contactez-nous à l&rsquo;adresse{" "}
              <a href={`mailto:${siteConfig.email}`} className="text-or underline underline-offset-2">
                {siteConfig.email}
              </a>.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
