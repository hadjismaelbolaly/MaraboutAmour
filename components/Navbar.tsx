"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import { usePathname } from "next/navigation";
import { Menu, X, MessageCircle } from "lucide-react";
import { navLinks, siteConfig } from "@/lib/site-config";

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);
    onScroll();
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    setOpen(false);
  }, [pathname]);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-colors duration-300 ${
        scrolled ? "bg-noir/95 backdrop-blur-sm shadow-[0_1px_0_0_rgba(212,175,55,0.25)]" : "bg-noir/40 backdrop-blur-sm"
      }`}
    >
      <nav className="mx-auto flex max-w-7xl items-center justify-between px-5 py-4 md:px-8">
        <Link href="/" className="font-display text-2xl tracking-wide text-or">
          Hadj Ismael <span className="text-creme">Bohlaly</span>
        </Link>

        <ul className="hidden items-center gap-8 lg:flex">
          {navLinks.map((link) => (
            <li key={link.href}>
              <Link
                href={link.href}
                className={`font-body text-sm uppercase tracking-wider transition-colors hover:text-or ${
                  pathname === link.href ? "text-or" : "text-creme/85"
                }`}
              >
                {link.label}
              </Link>
            </li>
          ))}
        </ul>

        <div className="hidden lg:block">
          <a
            href={siteConfig.whatsapp}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 rounded-full border border-or px-5 py-2 text-sm uppercase tracking-wider text-or transition-colors hover:bg-or hover:text-noir"
          >
            <MessageCircle size={16} />
            WhatsApp
          </a>
        </div>

        <button
          aria-label={open ? "Fermer le menu" : "Ouvrir le menu"}
          aria-expanded={open}
          onClick={() => setOpen((v) => !v)}
          className="text-or lg:hidden"
        >
          {open ? <X size={28} /> : <Menu size={28} />}
        </button>
      </nav>

      {open && (
        <div className="border-t border-or/20 bg-noir px-5 pb-6 pt-2 lg:hidden">
          <ul className="flex flex-col gap-1">
            {navLinks.map((link) => (
              <li key={link.href}>
                <Link
                  href={link.href}
                  className={`block py-3 text-base ${
                    pathname === link.href ? "text-or" : "text-creme/85"
                  }`}
                >
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
          <a
            href={siteConfig.whatsapp}
            target="_blank"
            rel="noopener noreferrer"
            className="mt-4 flex items-center justify-center gap-2 rounded-full bg-or px-5 py-3 text-sm font-medium uppercase tracking-wider text-noir"
          >
            <MessageCircle size={16} />
            Consultation WhatsApp
          </a>
        </div>
      )}
    </header>
  );
}
