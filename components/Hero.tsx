"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { MessageCircle, Sparkles } from "lucide-react";
import { siteConfig } from "@/lib/site-config";
import Button from "./Button";

export default function Hero() {
  return (
    <section className="relative flex min-h-screen items-center overflow-hidden pt-28">
      {/* Ambient gold glow */}
      <div className="pointer-events-none absolute -top-40 right-0 h-[36rem] w-[36rem] rounded-full bg-or/10 blur-[120px]" />
      <div className="pointer-events-none absolute bottom-0 left-0 h-[26rem] w-[26rem] rounded-full bg-bordeaux/20 blur-[100px]" />

      <div className="mx-auto grid max-w-7xl items-center gap-12 px-5 md:px-8 lg:grid-cols-2">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1] }}
        >
          <p className="mb-5 flex items-center gap-2 font-body text-xs uppercase tracking-[0.35em] text-or">
            <Sparkles size={14} />
            Consultation &amp; accompagnement spirituel
          </p>
          <h1 className="font-display text-5xl leading-[1.05] text-creme md:text-6xl lg:text-7xl">
            Retrouvez l&rsquo;espoir
            <br />
            dans votre <span className="text-or">vie sentimentale</span>
          </h1>
          <p className="mt-6 max-w-lg text-balance text-base leading-relaxed text-creme/70 md:text-lg">
            Chaque histoire d&rsquo;amour est unique. Un accompagnement confidentiel, sérieux et
            respectueux vous est proposé pour traverser les difficultés sentimentales et retrouver
            la sérénité — à Ouagadougou et partout dans le monde.
          </p>

          <div className="mt-10 flex flex-wrap gap-4">
            <Button href="/contact" variant="solid">
              Prendre rendez-vous
            </Button>
            <Button href={siteConfig.whatsapp} variant="outline" external icon={<MessageCircle size={16} />}>
              WhatsApp
            </Button>
          </div>

          <div className="mt-12 flex gap-10 border-t border-or/15 pt-8">
            <div>
              <p className="font-display text-3xl text-or">100%</p>
              <p className="text-xs uppercase tracking-widest text-creme/50">Confidentiel</p>
            </div>
            <div>
              <p className="font-display text-3xl text-or">24/7</p>
              <p className="text-xs uppercase tracking-widest text-creme/50">Disponibilité</p>
            </div>
            <div>
              <p className="font-display text-3xl text-or">∞</p>
              <p className="text-xs uppercase tracking-widest text-creme/50">Partout dans le monde</p>
            </div>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.94 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1, ease: [0.22, 1, 0.36, 1], delay: 0.2 }}
          className="relative"
        >
          <div className="relative mx-auto aspect-[4/5] max-w-md overflow-hidden rounded-[2rem] border border-or/25 shadow-gold">
            <Image
              src="/images/hero-portrait.jpg"
              alt="Hadj Ismael Bohlaly, consultation spirituelle en amour"
              fill
              priority
              sizes="(max-width: 768px) 90vw, 480px"
              className="object-cover object-top"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-noir/70 via-transparent to-transparent" />
          </div>
          <div className="absolute -bottom-6 -left-6 hidden rounded-2xl border border-or/25 bg-noir-doux px-6 py-4 shadow-gold md:block">
            <p className="font-display text-xl text-or">Hadj Ismael Bohlaly</p>
            <p className="text-xs uppercase tracking-widest text-creme/50">Ouagadougou, Burkina Faso</p>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
