import type { Metadata } from "next";
import SectionHeading from "@/components/SectionHeading";
import TestimonialCard from "@/components/TestimonialCard";
import CtaBanner from "@/components/CtaBanner";
import { testimonials } from "@/data/testimonials";

export const metadata: Metadata = {
  title: "Témoignages",
  description:
    "Découvrez les témoignages de personnes accompagnées : réconciliation, retour affectif, préparation au mariage. Des retours sincères, en toute confidentialité.",
};

export default function TestimonialsPage() {
  return (
    <>
      <section className="pt-36 pb-20">
        <div className="mx-auto max-w-4xl px-5 text-center md:px-8">
          <SectionHeading
            eyebrow="Témoignages"
            title="Des retours sincères, en toute confidentialité"
            description="Les prénoms sont volontairement partiels afin de préserver la discrétion de chacun."
          />
        </div>
      </section>

      <section className="pb-24">
        <div className="mx-auto max-w-7xl px-5 md:px-8">
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {testimonials.map((t, i) => (
              <TestimonialCard key={t.name} t={t} delay={(i % 6) * 0.06} />
            ))}
          </div>
        </div>
      </section>

      <CtaBanner />
    </>
  );
}
