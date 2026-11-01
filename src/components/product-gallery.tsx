"use client";

import Image from "next/image";
import { useState } from "react";
import type { Product } from "@/data/catalog";

export function ProductGallery({ images }: { images: Product["images"] }) {
  const [index, setIndex] = useState(0);
  const current = images[index];

  return (
    <div>
      <Image
        src={current.src}
        alt={current.alt}
        priority
        sizes="(min-width: 768px) 50vw, 100vw"
        className="block h-[340px] w-full object-contain md:h-[440px]"
      />
      {images.length > 1 && (
        <div className="flex justify-center gap-1.5 pt-2.5">
          {images.map((image, i) => (
            <button
              key={i}
              type="button"
              aria-label={`Foto ${i + 1} de ${images.length}`}
              aria-current={i === index}
              onClick={() => setIndex(i)}
              className="flex h-6 items-center"
            >
              <span
                className={`block h-1.5 rounded-[3px] ${i === index ? "w-[22px] bg-brand" : "w-1.5 bg-line-strong"}`}
              />
            </button>
          ))}
        </div>
      )}
    </div>
  );
}
