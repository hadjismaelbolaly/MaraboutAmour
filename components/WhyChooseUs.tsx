import { Lock, Ear, HeartHandshake, ShieldCheck, Clock, MessageSquareHeart } from "lucide-react";
import SectionHeading from "./SectionHeading";
import Reveal from "./Reveal";

const points = [
  { icon: Lock, title: "Confidentialité totale", text: "Chaque échange reste strictement confidentiel." },
  { icon: Ear, title: "Écoute attentive", text: "Votre histoire est entendue sans jugement." },
  { icon: HeartHandshake, title: "Accompagnement personnalisé", text: "Chaque situation est unique et traitée comme telle." },
  { icon: ShieldCheck, title: "Respect de chaque situation", text: "Vos convictions et vos attentes sont respectées." },
  { icon: Clock, title: "Disponibilité", text: "Un accompagnement disponible où que vous soyez." },
  { icon: MessageSquareHeart, title: "Suivi sérieux", text: "Un accompagnement dans la durée, si vous le souhaitez." },
];

export default function WhyChooseUs() {
  return (
    <section className="bg-noir py-24">
      <div className="mx-auto max-w-7xl px-5 md:px-8">
        <SectionHeading
          eyebrow="Pourquoi nous faire confiance"
          title="Un accompagnement sérieux et humain"
          description="Depuis plusieurs années, un accompagnement attentif est proposé aux personnes confrontées à des difficultés sentimentales, dans le respect de chacun."
        />
        <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {points.map((p, i) => (
            <Reveal key={p.title} delay={i * 0.06}>
              <div className="h-full rounded-2xl border border-or/15 bg-noir-doux p-7">
                <p.icon className="mb-4 text-or" size={26} />
                <h3 className="font-display text-xl text-creme">{p.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-creme/60">{p.text}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
