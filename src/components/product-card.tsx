import Image from "next/image";
import Link from "next/link";
import { getCategory, type Product } from "@/data/catalog";
import { productWhatsappLink } from "@/lib/whatsapp";
import { WhatsAppButton } from "./whatsapp";

export function ProductCard({
  product,
  variant = "category",
}: {
  product: Product;
  /** "home" mostra a categoria acima do nome; "category" mostra selo e especificação. */
  variant?: "home" | "category";
}) {
  const href = `/produto/${product.slug}`;
  const image = product.images[0];

  return (
    <article className="flex flex-col overflow-hidden rounded-2xl border border-line bg-white">
      <Link href={href} className="relative block" tabIndex={-1} aria-hidden="true">
        <Image
          src={image.src}
          alt={image.alt}
          sizes="(min-width: 1024px) 25vw, (min-width: 640px) 33vw, 50vw"
          className={`block w-full bg-white object-contain ${variant === "home" ? "h-[150px]" : "h-40"}`}
        />
        {variant === "category" && product.tag && (
          <span className="absolute top-2 left-2 rounded-md bg-accent px-2 py-1 text-[11px] font-extrabold text-ink uppercase">
            {product.tag}
          </span>
        )}
      </Link>
      <div className="flex grow flex-col gap-1.5 px-3 pt-2.5 pb-3">
        {variant === "home" && (
          <span className="text-[11px] font-bold tracking-[0.5px] text-muted uppercase">
            {getCategory(product.category)?.name}
          </span>
        )}
        <Link
          href={href}
          className="text-[15px] leading-tight font-extrabold text-ink no-underline hover:text-brand"
        >
          {product.name}
        </Link>
        {variant === "category" && product.spec && (
          <span className="text-xs text-muted">{product.spec}</span>
        )}
        <span className="text-[13px] font-bold text-brand">Consulte as condições</span>
        <WhatsAppButton href={productWhatsappLink(product)} size="sm" className="mt-auto">
          Quero este
        </WhatsAppButton>
      </div>
    </article>
  );
}
