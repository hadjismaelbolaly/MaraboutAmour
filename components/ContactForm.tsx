"use client";

import { FormEvent, useState } from "react";
import { Send } from "lucide-react";
import { siteConfig } from "@/lib/site-config";

export default function ContactForm() {
  const [sent, setSent] = useState(false);

  function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const form = e.currentTarget;
    const data = new FormData(form);
    const name = data.get("name");
    const email = data.get("email");
    const subject = data.get("subject") || "Demande de consultation";
    const message = data.get("message");

    const body = `Nom : ${name}\nEmail : ${email}\n\nMessage :\n${message}`;
    const mailto = `mailto:${siteConfig.email}?subject=${encodeURIComponent(
      String(subject)
    )}&body=${encodeURIComponent(body)}`;

    window.location.href = mailto;
    setSent(true);
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-5">
      <div className="grid gap-5 sm:grid-cols-2">
        <div>
          <label htmlFor="name" className="mb-2 block text-xs uppercase tracking-widest text-creme/60">
            Nom complet
          </label>
          <input
            id="name"
            name="name"
            required
            type="text"
            className="w-full rounded-lg border border-or/20 bg-noir-doux px-4 py-3 text-creme placeholder:text-creme/30 focus:border-or focus:outline-none"
            placeholder="Votre nom"
          />
        </div>
        <div>
          <label htmlFor="email" className="mb-2 block text-xs uppercase tracking-widest text-creme/60">
            Email
          </label>
          <input
            id="email"
            name="email"
            required
            type="email"
            className="w-full rounded-lg border border-or/20 bg-noir-doux px-4 py-3 text-creme placeholder:text-creme/30 focus:border-or focus:outline-none"
            placeholder="vous@email.com"
          />
        </div>
      </div>

      <div>
        <label htmlFor="subject" className="mb-2 block text-xs uppercase tracking-widest text-creme/60">
          Sujet
        </label>
        <input
          id="subject"
          name="subject"
          type="text"
          className="w-full rounded-lg border border-or/20 bg-noir-doux px-4 py-3 text-creme placeholder:text-creme/30 focus:border-or focus:outline-none"
          placeholder="Ex : Retour affectif"
        />
      </div>

      <div>
        <label htmlFor="message" className="mb-2 block text-xs uppercase tracking-widest text-creme/60">
          Votre message
        </label>
        <textarea
          id="message"
          name="message"
          required
          rows={6}
          className="w-full rounded-lg border border-or/20 bg-noir-doux px-4 py-3 text-creme placeholder:text-creme/30 focus:border-or focus:outline-none"
          placeholder="Décrivez brièvement votre situation..."
        />
      </div>

      <button
        type="submit"
        className="inline-flex items-center gap-2 rounded-full bg-or px-7 py-3.5 text-sm font-medium uppercase tracking-wider text-noir transition-colors hover:bg-or-clair"
      >
        Envoyer le message
        <Send size={16} />
      </button>

      {sent && (
        <p className="text-sm text-or">
          Votre messagerie va s&rsquo;ouvrir pour finaliser l&rsquo;envoi. À défaut, contactez-nous directement par WhatsApp.
        </p>
      )}
    </form>
  );
}
