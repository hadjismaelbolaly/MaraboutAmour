import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight, CalendarDays } from "lucide-react";
import SectionHeading from "@/components/SectionHeading";
import Reveal from "@/components/Reveal";
import CtaBanner from "@/components/CtaBanner";
import { blogPosts } from "@/data/blog";

export const metadata: Metadata = {
  title: "Blog",
  description:
    "Articles et conseils sur la vie sentimentale, les relations de couple, la préparation au mariage et l'accompagnement spirituel en amour.",
};

function formatDate(d: string) {
  return new Date(d).toLocaleDateString("fr-FR", { day: "numeric", month: "long", year: "numeric" });
}

export default function BlogPage() {
  return (
    <>
      <section className="pt-36 pb-20">
        <div className="mx-auto max-w-4xl px-5 text-center md:px-8">
          <SectionHeading
            eyebrow="Blog"
            title="Conseils et réflexions sur la vie sentimentale"
            description="Des articles pour mieux comprendre les difficultés de couple et avancer sereinement."
          />
        </div>
      </section>

      <section className="pb-24">
        <div className="mx-auto max-w-4xl px-5 md:px-8">
          <div className="space-y-6">
            {blogPosts.map((post, i) => (
              <Reveal key={post.slug} delay={i * 0.06}>
                <Link
                  href={`/blog/${post.slug}`}
                  className="group block rounded-2xl border border-or/15 bg-noir-doux p-7 transition-colors hover:border-or/40"
                >
                  <p className="flex items-center gap-2 text-xs uppercase tracking-widest text-creme/40">
                    <CalendarDays size={14} />
                    {formatDate(post.date)}
                  </p>
                  <h2 className="mt-3 font-display text-2xl text-creme md:text-3xl">{post.title}</h2>
                  <p className="mt-2 text-sm leading-relaxed text-creme/60">{post.excerpt}</p>
                  <span className="mt-4 inline-flex items-center gap-1 text-xs uppercase tracking-widest text-or">
                    Lire l&rsquo;article
                    <ArrowRight size={14} className="transition-transform group-hover:translate-x-1" />
                  </span>
                </Link>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <CtaBanner />
    </>
  );
}
