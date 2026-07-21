import type { Metadata } from "next";
import Hero from "@/components/Hero";
import SectionHeading from "@/components/SectionHeading";
import ServiceCard from "@/components/ServiceCard";
import ProductCard from "@/components/ProductCard";
import TestimonialCard from "@/components/TestimonialCard";
import WhyChooseUs from "@/components/WhyChooseUs";
import StatsSection from "@/components/StatsSection";
import CtaBanner from "@/components/CtaBanner";
import FaqAccordion from "@/components/FaqAccordion";
import Button from "@/components/Button";
import { featuredServices } from "@/data/services";
import { products } from "@/data/products";
import { testimonials } from "@/data/testimonials";
import { faqItems } from "@/data/faq";

export const metadata: Metadata = {
  title: "Accueil",
  description:
    "Consultation et accompagnement spirituel en amour à Ouagadougou et à distance : réconciliation de couple, retour affectif, protection, mariage. Confidentialité assurée.",
};

export default function HomePage() {
  const topServices = featuredServices.slice(0, 6);
  const popularProducts = products.slice(0, 6);
  const topTestimonials = testimonials.slice(0, 6);

  return (
    <>
      <Hero />

      {/* Présentation */}
      <section className="bg-noir py-24">
        <div className="mx-auto max-w-4xl px-5 text-center md:px-8">
          <SectionHeading
            eyebrow="À propos de l'accompagnement"
            title="Une écoute attentive, une tradition respectée"
          />
          <p className="mt-6 text-balance text-base leading-relaxed text-creme/70 md:text-lg">
            Les difficultés, les séparations, les incompréhensions ou les doutes peuvent être
            difficiles à surmonter seul. Un accompagnement confidentiel, sérieux et respectueux
            vous est proposé afin d&rsquo;échanger sur votre situation et de vous guider selon une
            approche spirituelle traditionnelle, dans le respect de vos convictions et de vos attentes.
          </p>
          <div className="mt-8">
            <Button href="/a-propos" variant="outline">Découvrir le parcours</Button>
          </div>
        </div>
      </section>

      {/* Services les plus demandés */}
      <section className="bg-noir-doux py-24">
        <div className="mx-auto max-w-7xl px-5 md:px-8">
          <SectionHeading
            eyebrow="Nos services"
            title="Les services les plus demandés"
            description="Un accompagnement personnalisé pour chaque étape de votre vie sentimentale."
          />
          <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {topServices.map((s, i) => (
              <ServiceCard key={s.slug} service={s} delay={i * 0.08} />
            ))}
          </div>
          <div className="mt-14 text-center">
            <Button href="/services" variant="outline">Voir tous les services</Button>
          </div>
        </div>
      </section>

      <WhyChooseUs />
      <StatsSection />

      {/* Témoignages */}
      <section className="bg-noir py-24">
        <div className="mx-auto max-w-7xl px-5 md:px-8">
          <SectionHeading
            eyebrow="Témoignages"
            title="Ce qu'ils en disent"
            description="Des retours sincères de personnes accompagnées, en toute confidentialité."
          />
          <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {topTestimonials.map((t, i) => (
              <TestimonialCard key={t.name} t={t} delay={i * 0.08} />
            ))}
          </div>
          <div className="mt-14 text-center">
            <Button href="/temoignages" variant="outline">Lire tous les témoignages</Button>
          </div>
        </div>
      </section>

      {/* Produits populaires */}
      <section className="bg-noir-doux py-24">
        <div className="mx-auto max-w-7xl px-5 md:px-8">
          <SectionHeading
            eyebrow="Produits spirituels"
            title="Produits populaires"
            description="Des objets symboliques associés à la tradition spirituelle, en soutien à votre accompagnement."
          />
          <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {popularProducts.map((p, i) => (
              <ProductCard key={p.name} product={p} delay={i * 0.08} />
            ))}
          </div>
          <div className="mt-14 text-center">
            <Button href="/produits" variant="outline">Voir tous les produits</Button>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="bg-noir py-24">
        <div className="mx-auto max-w-4xl px-5 md:px-8">
          <SectionHeading eyebrow="Questions fréquentes" title="Vous vous posez des questions ?" />
          <div className="mt-14">
            <FaqAccordion items={faqItems.slice(0, 5)} />
          </div>
          <div className="mt-10 text-center">
            <Button href="/faq" variant="outline">Voir toute la FAQ</Button>
          </div>
        </div>
      </section>

      <CtaBanner />
    </>
  );
}
