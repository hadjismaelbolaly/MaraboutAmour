import Reveal from "./Reveal";

const stats = [
  { value: "15+", label: "Années d'expérience" },
  { value: "50+", label: "Services proposés" },
  { value: "22+", label: "Témoignages recueillis" },
  { value: "100%", label: "Confidentialité" },
];

export default function StatsSection() {
  return (
    <section className="border-y border-or/15 bg-bordeaux-sombre py-16">
      <div className="mx-auto grid max-w-6xl grid-cols-2 gap-8 px-5 md:grid-cols-4 md:px-8">
        {stats.map((s, i) => (
          <Reveal key={s.label} delay={i * 0.08} className="text-center">
            <p className="font-display text-4xl text-or md:text-5xl">{s.value}</p>
            <p className="mt-2 text-xs uppercase tracking-widest text-creme/60">{s.label}</p>
          </Reveal>
        ))}
      </div>
    </section>
  );
}
