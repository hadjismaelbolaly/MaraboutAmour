import type { Metadata } from "next";
import Image from "next/image";
import { notFound } from "next/navigation";
import { MessageCircle } from "lucide-react";
import Reveal from "@/components/Reveal";
import CtaBanner from "@/components/CtaBanner";
import Button from "@/components/Button";
import ServiceCard from "@/components/ServiceCard";
import { allServices, featuredServices, getServiceBySlug } from "@/data/services";
import { siteConfig } from "@/lib/site-config";

export function generateStaticParams() {
  return allServices.map((s) => ({ slug: s.slug }));
}

export function generateMetadata({ params }: { params: { slug: string } }): Metadata {
  const service = getServiceBySlug(params.slug);
  if (!service) return {};
  return {
    title: service.title,
    description: service.description.slice(0, 155),
    keywords: service.keywords,
  };
}

export default function ServiceDetailPage({ params }: { params: { slug: string } }) {
  const service = getServiceBySlug(params.slug);
  if (!service) notFound();

  const related = featuredServices.filter((s) => s.slug !== service.slug).slice(0, 3);

  return (
    <>
      <section className="pt-36 pb-20">
        <div className="mx-auto grid max-w-6xl items-start gap-14 px-5 md:px-8 lg:grid-cols-2">
          <Reveal>
            {service.image ? (
              <div className="relative aspect-[4/5] w-full overflow-hidden rounded-[2rem] border border-or/25 shadow-gold">
                <Image src={service.image} alt={service.title} fill sizes="(max-width: 768px) 90vw, 480px" className="object-cover" />
              </div>
            ) : (
              <div className="flex aspect-[4/5] w-full items-center justify-center rounded-[2rem] border border-or/20 bg-noir-doux">
                <span className="font-display text-6xl text-or/40">✦</span>
              </div>
            )}
          </Reveal>

          <Reveal delay={0.1}>
            <p className="mb-3 font-body text-xs uppercase tracking-[0.3em] text-or">Service</p>
            <h1 className="font-display text-4xl leading-tight text-creme md:text-5xl">
              {service.title}
            </h1>
            <p className="mt-6 leading-relaxed text-creme/70">{service.description}</p>

            <div className="mt-6 rounded-xl border border-or/15 bg-noir-doux p-5">
              <p className="text-xs leading-relaxed text-creme/50">
                Cet accompagnement relève d&rsquo;une démarche spirituelle et traditionnelle.
                Aucun résultat précis ne peut être garanti : chaque situation est unique et
                l&rsquo;accompagnement vise à vous soutenir au mieux dans votre cheminement.
              </p>
            </div>

            <div className="mt-8 flex flex-wrap gap-4">
              <Button href="/contact" variant="solid">Prendre rendez-vous</Button>
              <Button href={siteConfig.whatsapp} variant="outline" external icon={<MessageCircle size={16} />}>
                WhatsApp
              </Button>
            </div>
          </Reveal>
        </div>
      </section>

      {related.length > 0 && (
        <section className="bg-noir-doux py-24">
          <div className="mx-auto max-w-7xl px-5 md:px-8">
            <h2 className="mb-10 text-center font-display text-3xl text-creme">Services similaires</h2>
            <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
              {related.map((s, i) => (
                <ServiceCard key={s.slug} service={s} delay={i * 0.08} />
              ))}
            </div>
          </div>
        </section>
      )}

      <CtaBanner />
    </>
  );
}
