import type { Metadata } from "next";
import Image from "next/image";
import { notFound } from "next/navigation";
import { CalendarDays } from "lucide-react";
import Reveal from "@/components/Reveal";
import CtaBanner from "@/components/CtaBanner";
import { getAllPosts, getPostBySlug } from "@/lib/blog";

export function generateStaticParams() {
  return getAllPosts().map((p) => ({ slug: p.slug }));
}

export function generateMetadata({ params }: { params: { slug: string } }): Metadata {
  const post = getPostBySlug(params.slug);
  if (!post) return {};
  return { title: post.title, description: post.excerpt };
}

function formatDate(d: string) {
  return new Date(d).toLocaleDateString("fr-FR", { day: "numeric", month: "long", year: "numeric" });
}

export default function BlogDetailPage({ params }: { params: { slug: string } }) {
  const post = getPostBySlug(params.slug);
  if (!post) notFound();

  const paragraphs = post.content.split(/\n\s*\n/).filter(Boolean);

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

            {post.image && (
              <div className="relative mt-8 aspect-video w-full overflow-hidden rounded-2xl border border-or/20">
                <Image src={post.image} alt={post.title} fill className="object-cover" />
              </div>
            )}

            <div className="mt-8 space-y-5">
              {paragraphs.map((p, i) => (
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
