import type { Metadata } from "next";
import SectionHeading from "@/components/SectionHeading";

export const metadata: Metadata = {
  title: "Conditions générales",
  description: "Conditions générales d'utilisation et de service du site de Hadj Ismael Bohlaly.",
};

export default function TermsPage() {
  return (
    <section className="pt-36 pb-24">
      <div className="mx-auto max-w-3xl px-5 md:px-8">
        <SectionHeading eyebrow="Informations légales" title="Conditions générales" center={false} />

        <div className="mt-12 space-y-8 text-sm leading-relaxed text-creme/70">
          <div>
            <h2 className="mb-2 font-display text-xl text-creme">1. Nature du service</h2>
            <p>
              Le présent site propose un accompagnement spirituel et traditionnel dans le domaine
              sentimental. Cet accompagnement relève de croyances et de traditions spirituelles et
              ne se substitue en aucun cas à un accompagnement médical, psychologique ou juridique.
            </p>
          </div>
          <div>
            <h2 className="mb-2 font-display text-xl text-creme">2. Absence de garantie de résultat</h2>
            <p>
              Chaque situation étant unique, aucun résultat précis, ni aucun délai, ne peut être
              garanti. L&rsquo;accompagnement proposé vise à soutenir la personne dans son
              cheminement personnel, sans promesse de résultat vérifiable.
            </p>
          </div>
          <div>
            <h2 className="mb-2 font-display text-xl text-creme">3. Prise de rendez-vous</h2>
            <p>
              Les consultations sont proposées sur rendez-vous, en présentiel à Ouagadougou ou à
              distance (WhatsApp, téléphone, visioconférence), selon les disponibilités.
            </p>
          </div>
          <div>
            <h2 className="mb-2 font-display text-xl text-creme">4. Responsabilité</h2>
            <p>
              L&rsquo;utilisateur reste seul responsable des décisions personnelles qu&rsquo;il
              prend à la suite d&rsquo;une consultation. Il est invité à faire preuve de discernement
              et, si nécessaire, à consulter également un professionnel de santé ou du droit compétent.
            </p>
          </div>
          <div>
            <h2 className="mb-2 font-display text-xl text-creme">5. Modification des conditions</h2>
            <p>
              Ces conditions générales peuvent être modifiées à tout moment. La version en vigueur
              est celle publiée sur ce site.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
