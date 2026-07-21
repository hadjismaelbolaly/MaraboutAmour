import type { Metadata } from "next";
import { Phone, Mail, MapPin, MessageCircle, Youtube } from "lucide-react";
import SectionHeading from "@/components/SectionHeading";
import ContactForm from "@/components/ContactForm";
import Reveal from "@/components/Reveal";
import { siteConfig } from "@/lib/site-config";

export const metadata: Metadata = {
  title: "Contact",
  description:
    "Contactez Hadj Ismael Bohlaly par WhatsApp, téléphone, email ou formulaire pour une consultation spirituelle en amour, à Ouagadougou ou à distance.",
};

const contactPoints = [
  { icon: MessageCircle, label: "WhatsApp", value: "Discuter maintenant", href: siteConfig.whatsapp, external: true },
  { icon: Phone, label: "Téléphone", value: siteConfig.phone, href: siteConfig.phoneHref, external: false },
  { icon: Mail, label: "Email", value: siteConfig.email, href: `mailto:${siteConfig.email}`, external: false },
  { icon: MapPin, label: "Adresse", value: siteConfig.location, href: undefined, external: false },
  { icon: Youtube, label: "YouTube", value: "Chaîne officielle", href: siteConfig.youtube, external: true },
];

export default function ContactPage() {
  return (
    <section className="pt-36 pb-24">
      <div className="mx-auto max-w-4xl px-5 text-center md:px-8">
        <SectionHeading
          eyebrow="Contact"
          title="Prenons contact"
          description="Par WhatsApp, téléphone, email ou via le formulaire ci-dessous — une réponse vous sera apportée dans les meilleurs délais."
        />
      </div>

      <div className="mx-auto mt-16 grid max-w-6xl gap-12 px-5 md:px-8 lg:grid-cols-5">
        <Reveal className="lg:col-span-2">
          <div className="space-y-4">
            {contactPoints.map((c) => {
              const Content = (
                <div className="flex items-center gap-4 rounded-xl border border-or/15 bg-noir-doux p-5 transition-colors hover:border-or/40">
                  <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full border border-or/30 text-or">
                    <c.icon size={18} />
                  </div>
                  <div>
                    <p className="text-xs uppercase tracking-widest text-creme/40">{c.label}</p>
                    <p className="font-display text-lg text-creme">{c.value}</p>
                  </div>
                </div>
              );
              return c.href ? (
                <a
                  key={c.label}
                  href={c.href}
                  target={c.external ? "_blank" : undefined}
                  rel={c.external ? "noopener noreferrer" : undefined}
                  className="block"
                >
                  {Content}
                </a>
              ) : (
                <div key={c.label}>{Content}</div>
              );
            })}
          </div>
        </Reveal>

        <Reveal delay={0.1} className="lg:col-span-3">
          <div className="rounded-2xl border border-or/15 bg-noir-doux p-8">
            <ContactForm />
          </div>
        </Reveal>
      </div>
    </section>
  );
}
