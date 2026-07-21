"use client";

import { MessageCircle } from "lucide-react";
import { siteConfig } from "@/lib/site-config";

export default function WhatsAppButton() {
  return (
    <a
      href={siteConfig.whatsapp}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Contacter par WhatsApp"
      className="fixed bottom-6 right-6 z-40 flex h-14 w-14 items-center justify-center rounded-full bg-or text-noir shadow-gold transition-transform hover:scale-110 animate-flicker"
    >
      <MessageCircle size={26} />
    </a>
  );
}
