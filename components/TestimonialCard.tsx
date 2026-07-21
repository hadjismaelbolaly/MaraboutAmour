import { Quote } from "lucide-react";
import { Testimonial } from "@/data/testimonials";
import Reveal from "./Reveal";

export default function TestimonialCard({ t, delay = 0 }: { t: Testimonial; delay?: number }) {
  return (
    <Reveal delay={delay} className="h-full">
      <div className="flex h-full flex-col rounded-2xl border border-or/15 bg-noir-doux p-7">
        <Quote className="mb-3 text-or/60" size={22} />
        <p className="flex-1 text-sm leading-relaxed text-creme/75">&laquo; {t.text} &raquo;</p>
        <div className="mt-5 border-t border-or/10 pt-4">
          <p className="font-display text-lg text-or">{t.name}</p>
          <p className="text-xs uppercase tracking-widest text-creme/40">{t.location}</p>
        </div>
      </div>
    </Reveal>
  );
}
