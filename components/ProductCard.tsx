import { Gem } from "lucide-react";
import { Product } from "@/data/products";
import Reveal from "./Reveal";

export default function ProductCard({ product, delay = 0 }: { product: Product; delay?: number }) {
  return (
    <Reveal delay={delay} className="h-full">
      <div className="flex h-full flex-col rounded-2xl border border-or/15 bg-noir-doux p-7 transition-colors hover:border-or/40">
        <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-full border border-or/30 text-or">
          <Gem size={20} />
        </div>
        <h3 className="font-display text-xl text-creme">{product.name}</h3>
        <p className="mt-2 text-sm leading-relaxed text-creme/60">{product.description}</p>
      </div>
    </Reveal>
  );
}
