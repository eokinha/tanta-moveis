import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { CategoryProducts } from "@/components/category-products";
import { SiteFooter } from "@/components/footer";
import { headerButtonClass, PageHeader } from "@/components/header";
import { SearchIcon } from "@/components/icons";
import { WhatsAppButton, WhatsAppFab } from "@/components/whatsapp";
import { categories, getCategory, getProductsByCategory } from "@/data/catalog";
import { WHATSAPP_GENERAL, whatsappLink } from "@/lib/whatsapp";

export function generateStaticParams() {
  return categories.map((c) => ({ slug: c.slug }));
}

export async function generateMetadata({
  params,
}: PageProps<"/categoria/[slug]">): Promise<Metadata> {
  const { slug } = await params;
  const category = getCategory(slug);
  if (!category) return {};
  return { title: category.name, description: category.description };
}

export default async function CategoryPage({ params }: PageProps<"/categoria/[slug]">) {
  const { slug } = await params;
  const category = getCategory(slug);
  if (!category) notFound();

  const products = getProductsByCategory(category.slug);
  const helpLink = whatsappLink(
    `Olá! Estou procurando um móvel para ${category.name.toLowerCase()} e não encontrei no site. Podem me ajudar?`,
  );

  return (
    <>
      <PageHeader
        backHref="/"
        backLabel="Voltar para o início"
        action={
          <button type="button" aria-label="Buscar" className={headerButtonClass}>
            <SearchIcon />
          </button>
        }
      />
      <main className="mx-auto w-full max-w-6xl flex-1">
        <section className="flex flex-col gap-1.5 px-4 pt-5 pb-2">
          <nav aria-label="Você está em" className="text-[13px] text-muted">
            <Link href="/">Início</Link> / {category.name}
          </nav>
          <h1 className="text-[30px] font-black">{category.name}</h1>
          <p className="text-[15px] text-muted">{category.description}</p>
        </section>

        <CategoryProducts products={products} types={category.types} />

        <section className="mx-4 mt-6 flex flex-col gap-2.5 rounded-[18px] border-2 border-dashed border-brand bg-white p-5">
          <h2 className="text-[19px] font-black">Não achou o que procura?</h2>
          <p className="text-sm leading-[1.45] text-muted">
            Temos outros modelos e cores na loja. Mande uma mensagem que a gente
            te mostra.
          </p>
          <WhatsAppButton href={helpLink} icon={false} className="sm:self-start sm:px-8">
            Falar com um vendedor
          </WhatsAppButton>
        </section>
      </main>
      <SiteFooter compact />
      <WhatsAppFab href={WHATSAPP_GENERAL} />
    </>
  );
}
