"use client";

import { useState } from "react";
import type { Product } from "@/data/catalog";
import { SortIcon } from "./icons";
import { ProductCard } from "./product-card";

const ALL = "Todos";

export function CategoryProducts({
  products,
  types,
}: {
  products: Product[];
  types: string[];
}) {
  const [selected, setSelected] = useState(ALL);
  const items = selected === ALL ? products : products.filter((p) => p.type === selected);
  const chips = types.length > 0 ? [ALL, ...types] : [];

  return (
    <>
      {chips.length > 0 && (
        <div className="flex gap-2 overflow-x-auto px-4 py-3" role="group" aria-label="Filtrar por tipo">
          {chips.map((label) => {
            const active = label === selected;
            return (
              <button
                key={label}
                type="button"
                aria-pressed={active}
                onClick={() => setSelected(label)}
                className={`h-11 flex-none rounded-full border px-4 text-sm font-bold ${
                  active
                    ? "border-brand bg-brand text-white"
                    : "border-line-strong bg-white text-ink hover:border-brand"
                }`}
              >
                {label}
              </button>
            );
          })}
        </div>
      )}

      <div className="flex items-center justify-between px-4 pt-1 pb-3">
        <span className="text-sm text-muted" aria-live="polite">
          {items.length} {items.length === 1 ? "produto" : "produtos"}
        </span>
        <button
          type="button"
          className="flex h-11 items-center gap-2 rounded-[10px] border border-line-strong bg-white px-3.5 text-sm font-bold text-ink"
        >
          <SortIcon size={18} />
          Ordenar
        </button>
      </div>

      <section className="grid grid-cols-2 gap-3 px-4 sm:grid-cols-3 lg:grid-cols-4">
        {items.map((product) => (
          <ProductCard key={product.slug} product={product} />
        ))}
      </section>
    </>
  );
}
