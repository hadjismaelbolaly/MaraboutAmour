import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { CalendarDays } from "lucide-react";
import Reveal from "@/components/Reveal";
import CtaBanner from "@/components/CtaBanner";
import { blogPosts } from "@/data/blog";

export function generateStaticParams() {
  return blogPosts.map((p) => ({ slug: p.slug }));
}

export function generateMetadata({ params }: { params: { slug: string } }): Metadata {
  const post = blogPosts.find((p) => p.slug === params.slug);
  if (!post) return {};
  return { title: post.title, description: post.excerpt };
}

function formatDate(d: string) {
  return new Date(d).toLocaleDateString("fr-FR", { day: "numeric", month: "long", year: "numeric" });
}

export default function BlogDetailPage({ params }: { params: { slug: string } }) {
  const post = blogPosts.find((p) => p.slug === params.slug);
  if (!post) notFound();

  return (
    <>
      <article className="pt-36 pb-24">
        <div className="mx-auto max-w-2xl px-5 md:px-8">
          <Reveal>
            <p className="flex items-center gap-2 text-xs uppercase tracking-widest text-creme/40">
              <CalendarDays size={14} />
              {formatDate(post.date)}
            </p>
            <h1 className="mt-3 font-display text-4xl leading-tight text-creme md:text-5xl">
              {post.title}
            </h1>
            <div className="mt-8 space-y-5">
              {post.content.map((p, i) => (
                <p key={i} className="leading-relaxed text-creme/75">{p}</p>
              ))}
            </div>
          </Reveal>
        </div>
      </article>
      <CtaBanner />
    </>
  );
}
