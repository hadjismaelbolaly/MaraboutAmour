import type { Metadata } from "next";
import SectionHeading from "@/components/SectionHeading";
import FaqAccordion from "@/components/FaqAccordion";
import CtaBanner from "@/components/CtaBanner";
import { faqItems } from "@/data/faq";

export const metadata: Metadata = {
  title: "Questions fréquentes",
  description:
    "Toutes les réponses à vos questions sur la consultation spirituelle en amour : confidentialité, prise de rendez-vous, consultations à distance et en présentiel.",
};

export default function FaqPage() {
  return (
    <>
      <section className="pt-36 pb-20">
        <div className="mx-auto max-w-4xl px-5 text-center md:px-8">
          <SectionHeading eyebrow="FAQ" title="Questions fréquentes" />
        </div>
      </section>

      <section className="pb-24">
        <div className="mx-auto max-w-4xl px-5 md:px-8">
          <FaqAccordion items={faqItems} />
        </div>
      </section>

      <CtaBanner />
    </>
  );
}
