import type { Metadata } from "next";
import SectionHeading from "@/components/SectionHeading";
import ProductCard from "@/components/ProductCard";
import CtaBanner from "@/components/CtaBanner";
import { products } from "@/data/products";

export const metadata: Metadata = {
  title: "Produits spirituels",
  description:
    "Découvrez les produits spirituels proposés en accompagnement : bagues, bracelets, encens, bougies rituelles, talismans, huiles et poudres spirituelles.",
};

export default function ProductsPage() {
  return (
    <>
      <section className="pt-36 pb-20">
        <div className="mx-auto max-w-4xl px-5 text-center md:px-8">
          <SectionHeading
            eyebrow="Produits spirituels"
            title="Des objets symboliques en soutien à votre accompagnement"
            description="Chaque produit s'inscrit dans une tradition spirituelle et symbolique, utilisé en complément d'un accompagnement personnalisé."
          />
        </div>
      </section>

      <section className="pb-24">
        <div className="mx-auto max-w-7xl px-5 md:px-8">
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {products.map((p, i) => (
              <ProductCard key={p.name} product={p} delay={i * 0.06} />
            ))}
          </div>
        </div>
      </section>

      <CtaBanner />
    </>
  );
}
