import type { Metadata } from "next";
import Image from "next/image";
import { CheckCircle2 } from "lucide-react";
import SectionHeading from "@/components/SectionHeading";
import Reveal from "@/components/Reveal";
import CtaBanner from "@/components/CtaBanner";
import { siteConfig } from "@/lib/site-config";

export const metadata: Metadata = {
  title: "À propos",
  description:
    "Découvrez le parcours de Hadj Ismael Bohlaly, accompagnement spirituel en amour depuis plusieurs années, basé à Ouagadougou et actif dans le monde entier.",
};

const engagements = [
  "Écoute attentive et sans jugement",
  "Analyse personnalisée de chaque situation",
  "Respect des convictions et des attentes de chacun",
  "Confidentialité stricte de tous les échanges",
  "Disponibilité et réponse rapide",
];

export default function AboutPage() {
  return (
    <>
      <section className="pt-36 pb-24">
        <div className="mx-auto grid max-w-7xl items-center gap-14 px-5 md:px-8 lg:grid-cols-2">
          <Reveal>
            <div className="relative mx-auto aspect-[4/5] max-w-md overflow-hidden rounded-[2rem] border border-or/25 shadow-gold">
              <Image
                src="/images/about-portrait.jpg"
                alt={`${siteConfig.name}, accompagnement spirituel en amour`}
                fill
                sizes="(max-width: 768px) 90vw, 480px"
                className="object-cover"
              />
            </div>
          </Reveal>

          <Reveal delay={0.1}>
            <p className="mb-3 font-body text-xs uppercase tracking-[0.3em] text-or">À propos</p>
            <h1 className="font-display text-4xl leading-tight text-creme md:text-5xl">
              {siteConfig.name}
            </h1>
            <p className="mt-6 text-balance leading-relaxed text-creme/70">
              Depuis plusieurs années, un accompagnement est proposé aux personnes confrontées à
              des difficultés sentimentales : séparations, incompréhensions, doutes ou envie de
              renouer avec un être cher. Basé à Ouagadougou, au Burkina Faso, cet accompagnement
              s&rsquo;adresse à une clientèle francophone du monde entier, grâce à des consultations
              en présentiel comme à distance.
            </p>
            <p className="mt-4 text-balance leading-relaxed text-creme/70">
              L&rsquo;objectif est simple : offrir une écoute attentive, une analyse personnalisée
              et un accompagnement adapté à chaque situation, dans le respect des convictions et
              des attentes de chacun. Chaque consultation est réalisée avec sérieux et discrétion.
            </p>

            <ul className="mt-8 space-y-3">
              {engagements.map((e) => (
                <li key={e} className="flex items-start gap-3 text-sm text-creme/80">
                  <CheckCircle2 className="mt-0.5 shrink-0 text-or" size={18} />
                  {e}
                </li>
              ))}
            </ul>
          </Reveal>
        </div>
      </section>

      <section className="bg-noir-doux py-24">
        <div className="mx-auto max-w-4xl px-5 text-center md:px-8">
          <SectionHeading
            eyebrow="Comment se déroule une consultation"
            title="Un accompagnement en quatre étapes"
          />
          <div className="mt-14 grid gap-8 text-left sm:grid-cols-2">
            {[
              { title: "Prise de contact", text: "Vous nous contactez via WhatsApp, téléphone ou le formulaire du site." },
              { title: "Analyse de votre situation", text: "Nous échangeons afin de comprendre votre histoire et vos attentes." },
              { title: "Accompagnement personnalisé", text: "Des conseils et un accompagnement adaptés à votre situation vous sont proposés." },
              { title: "Suivi", text: "Si vous le souhaitez, un suivi peut être assuré après la consultation." },
            ].map((step, i) => (
              <Reveal key={step.title} delay={i * 0.08}>
                <div className="rounded-2xl border border-or/15 bg-noir p-7">
                  <p className="font-display text-3xl text-or">0{i + 1}</p>
                  <h3 className="mt-2 font-display text-xl text-creme">{step.title}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-creme/60">{step.text}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <CtaBanner />
    </>
  );
}
