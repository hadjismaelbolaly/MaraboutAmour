import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { Service } from "@/data/services";
import Reveal from "./Reveal";

export default function ServiceCard({ service, delay = 0 }: { service: Service; delay?: number }) {
  return (
    <Reveal delay={delay} className="group h-full">
      <Link
        href={`/services/${service.slug}`}
        className="flex h-full flex-col overflow-hidden rounded-2xl border border-or/15 bg-noir-doux transition-colors duration-300 hover:border-or/50"
      >
        {service.image && (
          <div className="relative h-56 w-full overflow-hidden">
            <Image
              src={service.image}
              alt={service.title}
              fill
              sizes="(max-width: 768px) 100vw, 33vw"
              className="object-cover transition-transform duration-700 group-hover:scale-105"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-noir via-noir/10 to-transparent" />
          </div>
        )}
        <div className="flex flex-1 flex-col p-6">
          <h3 className="font-display text-2xl text-creme">{service.title}</h3>
          <p className="mt-2 flex-1 text-sm leading-relaxed text-creme/60">{service.excerpt}</p>
          <span className="mt-4 inline-flex items-center gap-1 text-xs uppercase tracking-widest text-or">
            En savoir plus
            <ArrowUpRight size={14} />
          </span>
        </div>
      </Link>
    </Reveal>
  );
}
