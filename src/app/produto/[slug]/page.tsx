import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { PageHeader } from "@/components/header";
import { CheckIcon, HeartIcon } from "@/components/icons";
import { ProductGallery } from "@/components/product-gallery";
import { ShareButton } from "@/components/share-button";
import { WhatsAppButton } from "@/components/whatsapp";
import {
  DELIVERY_CITIES,
  getCategory,
  getProduct,
  getRelatedProducts,
  products,
} from "@/data/catalog";
import { productWhatsappLink } from "@/lib/whatsapp";

export function generateStaticParams() {
  return products.map((p) => ({ slug: p.slug }));
}

export async function generateMetadata({
  params,
}: PageProps<"/produto/[slug]">): Promise<Metadata> {
  const { slug } = await params;
  const product = getProduct(slug);
  if (!product) return {};
  return {
    title: product.fullName ?? product.name,
    description: `${product.fullName ?? product.name} no crediário na promissória, sem cartão de crédito.`,
  };
}

export default async function ProductPage({ params }: PageProps<"/produto/[slug]">) {
  const { slug } = await params;
  const product = getProduct(slug);
  if (!product) notFound();

  const category = getCategory(product.category);
  const related = getRelatedProducts(product);
  const title = product.fullName ?? product.name;
  const categoryHref = category ? `/categoria/${category.slug}` : "/";

  return (
    <>
      <PageHeader
        backHref={categoryHref}
        backLabel={category ? `Voltar para ${category.name}` : "Voltar para o início"}
        action={<ShareButton title={title} />}
      />
      <main className="mx-auto w-full max-w-6xl flex-1 pb-[140px] md:grid md:grid-cols-2 md:gap-8 md:px-4 md:pt-6">
        <section className="relative bg-white px-4 pt-3 pb-4 md:self-start md:rounded-2xl md:border md:border-line">
          <nav aria-label="Você está em" className="pb-2 text-[13px] text-muted">
            <Link href="/">Início</Link>
            {category && (
              <>
                {" / "}
                <Link href={categoryHref}>{category.name}</Link>
              </>
            )}
            {" / "}
            {product.type}
          </nav>
          {product.tag && (
            <span className="absolute top-11 left-4 z-[1] rounded-md bg-accent px-2 py-1 text-[11px] font-extrabold text-ink uppercase">
              {product.tag}
            </span>
          )}
          <ProductGallery images={product.images} />
        </section>

        <div>
          <section className="flex flex-col gap-2.5 px-4 py-5 md:px-0 md:pt-0">
            {product.eyebrow && (
              <span className="text-xs font-bold tracking-[0.6px] text-muted uppercase">
                {product.eyebrow}
              </span>
            )}
            <h1 className="text-[28px] leading-[1.1] font-black">{title}</h1>
            {product.highlights && (
              <ul className="mt-1 flex flex-wrap gap-2">
                {product.highlights.map((h) => (
                  <li
                    key={h}
                    className="rounded-full bg-brand-soft px-3 py-2 text-[13px] font-bold text-brand"
                  >
                    {h}
                  </li>
                ))}
              </ul>
            )}
          </section>

          <section className="mx-4 flex flex-col gap-3 rounded-[18px] bg-brand p-5 text-white md:mx-0">
            <span className="self-start rounded-md bg-accent px-2.5 py-1.5 text-xs font-extrabold tracking-[0.6px] text-ink uppercase">
              Crediário na promissória
            </span>
            <h2 className="text-[21px] leading-[1.2] font-black">
              Leve para casa sem cartão de crédito
            </h2>
            <p className="text-sm leading-[1.45] text-on-brand">
              Chame no WhatsApp e receba as condições de pagamento deste móvel.
            </p>
            <ul className="flex flex-col gap-2 text-sm">
              {["Comprovante de residência", "Comprovante de renda"].map((doc) => (
                <li key={doc} className="flex items-center gap-2">
                  <CheckIcon size={18} className="text-accent" />
                  {doc}
                </li>
              ))}
            </ul>
          </section>

          {product.measures && (
            <section className="flex flex-col gap-3 px-4 pt-6 md:px-0">
              <h2 className="text-xl font-black">Medidas</h2>
              <dl className="grid grid-cols-2 gap-2.5">
                {product.measures.map((m) => (
                  <div key={m.label} className="rounded-[14px] border border-line bg-white p-3.5">
                    <dt className="text-xs font-bold text-muted uppercase">{m.label}</dt>
                    <dd className="text-xl font-bold">{m.value}</dd>
                  </div>
                ))}
              </dl>
            </section>
          )}

          {product.details && (
            <section className="flex flex-col gap-2.5 px-4 pt-6 md:px-0">
              <h2 className="text-xl font-black">Detalhes do produto</h2>
              <ul className="list-disc rounded-[14px] border border-line bg-white py-4 pr-4 pl-[34px] text-[15px] leading-[1.6]">
                {product.details.map((d) => (
                  <li key={d}>{d}</li>
                ))}
              </ul>
            </section>
          )}

          <section className="flex flex-col gap-2.5 px-4 pt-6 md:px-0">
            <h2 className="text-xl font-black">Entrega</h2>
            <p className="text-[15px] leading-normal text-muted">
              Loja 100% online, com entrega direto na sua casa em{" "}
              {DELIVERY_CITIES.join(", ")} e região. Consulte prazo e frete para o
              seu bairro.
            </p>
          </section>
        </div>

        {related.length > 0 && (
          <section className="flex flex-col gap-3 pt-7 md:col-span-2">
            <h2 className="px-4 text-xl font-black md:px-0">Combina com</h2>
            <div className="flex gap-3 overflow-x-auto px-4 pb-1 md:px-0">
              {related.map((p) => (
                <Link
                  key={p.slug}
                  href={`/produto/${p.slug}`}
                  className="w-[150px] flex-none overflow-hidden rounded-[14px] border border-line bg-white text-ink no-underline md:w-[200px]"
                >
                  <Image
                    src={p.images[0].src}
                    alt=""
                    sizes="200px"
                    className="block h-[120px] w-full bg-white object-contain"
                  />
                  <div className="flex flex-col gap-1 p-2.5">
                    <strong className="text-sm leading-tight">{p.name}</strong>
                    <span className="text-xs font-bold text-brand">Consulte as condições</span>
                  </div>
                </Link>
              ))}
            </div>
          </section>
        )}
      </main>

      <div className="fixed inset-x-0 bottom-0 z-20 border-t border-line bg-white px-4 pt-3 pb-5 shadow-[0_-6px_18px_rgba(7,42,122,0.08)]">
        <div className="mx-auto flex max-w-6xl gap-2.5">
          <button
            type="button"
            aria-label="Salvar nos favoritos"
            className="flex h-14 w-[52px] flex-none items-center justify-center rounded-[14px] border border-line-strong bg-white text-brand"
          >
            <HeartIcon />
          </button>
          <WhatsAppButton href={productWhatsappLink(product)} size="lg" className="flex-auto text-base">
            Consultar no WhatsApp
          </WhatsAppButton>
        </div>
      </div>
    </>
  );
}
