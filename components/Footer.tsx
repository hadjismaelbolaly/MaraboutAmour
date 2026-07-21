import Link from "next/link";
import { Youtube, Phone, Mail, MapPin, MessageCircle } from "lucide-react";
import { navLinks, legalLinks, siteConfig } from "@/lib/site-config";

export default function Footer() {
  return (
    <footer className="border-t border-or/20 bg-noir-doux">
      <div className="mx-auto max-w-7xl px-5 py-14 md:px-8">
        <div className="grid gap-10 md:grid-cols-4">
          <div>
            <p className="font-display text-2xl text-or">Hadj Ismael Bohlaly</p>
            <p className="mt-3 text-sm leading-relaxed text-creme/70">
              Accompagnement spirituel confidentiel pour vos difficultés sentimentales.
              Consultations à Ouagadougou et à distance, partout dans le monde.
            </p>
          </div>

          <div>
            <p className="mb-4 font-body text-sm uppercase tracking-widest text-or">Navigation</p>
            <ul className="space-y-2">
              {navLinks.map((l) => (
                <li key={l.href}>
                  <Link href={l.href} className="text-sm text-creme/70 hover:text-or">
                    {l.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <p className="mb-4 font-body text-sm uppercase tracking-widest text-or">Contact</p>
            <ul className="space-y-3 text-sm text-creme/70">
              <li className="flex items-center gap-2">
                <Phone size={16} className="text-or" />
                <a href={siteConfig.phoneHref} className="hover:text-or">{siteConfig.phone}</a>
              </li>
              <li className="flex items-center gap-2">
                <MessageCircle size={16} className="text-or" />
                <a href={siteConfig.whatsapp} target="_blank" rel="noopener noreferrer" className="hover:text-or">
                  WhatsApp
                </a>
              </li>
              <li className="flex items-center gap-2">
                <Mail size={16} className="text-or" />
                <a href={`mailto:${siteConfig.email}`} className="hover:text-or break-all">
                  {siteConfig.email}
                </a>
              </li>
              <li className="flex items-center gap-2">
                <MapPin size={16} className="text-or" />
                <span>{siteConfig.location}</span>
              </li>
              <li className="flex items-center gap-2">
                <Youtube size={16} className="text-or" />
                <a href={siteConfig.youtube} target="_blank" rel="noopener noreferrer" className="hover:text-or">
                  Chaîne YouTube
                </a>
              </li>
            </ul>
          </div>

          <div>
            <p className="mb-4 font-body text-sm uppercase tracking-widest text-or">Informations légales</p>
            <ul className="space-y-2">
              {legalLinks.map((l) => (
                <li key={l.href}>
                  <Link href={l.href} className="text-sm text-creme/70 hover:text-or">
                    {l.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="divider-ornament my-10">
          <span className="text-or">✦</span>
        </div>

        <p className="text-center text-xs text-creme/40">
          © {new Date().getFullYear()} Hadj Ismael Bohlaly — Tous droits réservés.
        </p>
      </div>
    </footer>
  );
}
