import { MessageCircle, Phone } from "lucide-react";
import { siteConfig } from "@/lib/site-config";
import Button from "./Button";
import Reveal from "./Reveal";

export default function CtaBanner() {
  return (
    <section className="relative overflow-hidden bg-gradient-to-br from-bordeaux via-bordeaux-sombre to-noir py-24">
      <div className="pointer-events-none absolute inset-0 opacity-40 bg-grain [background-size:22px_22px]" />
      <div className="relative mx-auto max-w-3xl px-5 text-center md:px-8">
        <Reveal>
          <p className="mb-4 font-body text-xs uppercase tracking-[0.35em] text-or">
            Un pas vers la sérénité
          </p>
          <h2 className="font-display text-4xl leading-tight text-creme md:text-5xl">
            Prenez rendez-vous dès aujourd&rsquo;hui
            <br /> pour une consultation personnalisée
          </h2>
          <div className="mt-10 flex flex-wrap justify-center gap-4">
            <Button href="/contact" variant="solid">
              Contactez-nous
            </Button>
            <Button href={siteConfig.whatsapp} variant="outline" external icon={<MessageCircle size={16} />}>
              Consultation WhatsApp
            </Button>
            <Button href={siteConfig.phoneHref} variant="outline" external icon={<Phone size={16} />}>
              Appeler
            </Button>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
