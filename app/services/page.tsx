import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import SectionHeading from "@/components/SectionHeading";
import ServiceCard from "@/components/ServiceCard";
import Reveal from "@/components/Reveal";
import CtaBanner from "@/components/CtaBanner";
import { featuredServices, additionalServices } from "@/data/services";

export const metadata: Metadata = {
  title: "Tous les services",
  description:
    "Découvrez tous les services d'accompagnement spirituel en amour : réconciliation de couple, retour affectif, protection, mariage, guidance amoureuse et bien plus.",
};

export default function ServicesPage() {
  return (
    <>
      <section className="pt-36 pb-20">
        <div className="mx-auto max-w-4xl px-5 text-center md:px-8">
          <SectionHeading
            eyebrow="Nos services"
            title="Un accompagnement pour chaque situation sentimentale"
            description="Chaque histoire est unique. Voici l'ensemble des accompagnements proposés, avec une approche confidentielle et respectueuse."
          />
        </div>
      </section>

      <section className="pb-24">
        <div className="mx-auto max-w-7xl px-5 md:px-8">
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {featuredServices.map((s, i) => (
              <ServiceCard key={s.slug} service={s} delay={i * 0.05} />
            ))}
          </div>
        </div>
      </section>

      <section className="bg-noir-doux py-24">
        <div className="mx-auto max-w-5xl px-5 md:px-8">
          <SectionHeading
            eyebrow="Et bien plus encore"
            title="Autres accompagnements proposés"
            description="Une liste complète des situations pour lesquelles un accompagnement spirituel personnalisé peut être proposé."
          />
          <div className="mt-14 grid gap-3 sm:grid-cols-2">
            {additionalServices.map((s, i) => (
              <Reveal key={s.slug} delay={i * 0.02}>
                <Link
                  href={`/services/${s.slug}`}
                  className="group flex items-center justify-between gap-3 rounded-xl border border-or/10 bg-noir px-5 py-4 transition-colors hover:border-or/40"
                >
                  <div>
                    <p className="font-display text-lg text-creme">{s.title}</p>
                    <p className="text-xs text-creme/50">{s.excerpt}</p>
                  </div>
                  <ArrowRight
                    size={16}
                    className="shrink-0 text-or opacity-0 transition-opacity group-hover:opacity-100"
                  />
                </Link>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <CtaBanner />
    </>
  );
}
