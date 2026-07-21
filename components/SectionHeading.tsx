import Reveal from "./Reveal";

export default function SectionHeading({
  eyebrow,
  title,
  description,
  light = false,
  center = true,
}: {
  eyebrow?: string;
  title: string;
  description?: string;
  light?: boolean;
  center?: boolean;
}) {
  return (
    <Reveal className={center ? "mx-auto max-w-2xl text-center" : "max-w-2xl"}>
      {eyebrow && (
        <p className={`mb-3 font-body text-xs uppercase tracking-[0.3em] ${light ? "text-bordeaux" : "text-or"}`}>
          {eyebrow}
        </p>
      )}
      <h2
        className={`font-display text-4xl leading-tight md:text-5xl ${
          light ? "text-noir" : "text-creme"
        }`}
      >
        {title}
      </h2>
      {description && (
        <p className={`mt-4 text-balance text-base leading-relaxed ${light ? "text-noir/70" : "text-creme/70"}`}>
          {description}
        </p>
      )}
      <div className="divider-ornament mt-6">
        <span className={light ? "text-bordeaux" : "text-or"}>✦</span>
      </div>
    </Reveal>
  );
}
