import Image from "next/image";
import Link from "next/link";
import { SiteFooter } from "@/components/footer";
import { HomeHeader } from "@/components/header";
import { NoCardIcon, TruckIcon, WhatsAppIcon } from "@/components/icons";
import { ProductCard } from "@/components/product-card";
import { WhatsAppButton, WhatsAppFab } from "@/components/whatsapp";
import {
  categories,
  DELIVERY_CITIES,
  getFeaturedProducts,
  HERO_IMAGE,
} from "@/data/catalog";
import { WHATSAPP_CREDIARIO, WHATSAPP_GENERAL } from "@/lib/whatsapp";

const BENEFITS = [
  { icon: NoCardIcon, label: "Sem cartão de crédito" },
  { icon: TruckIcon, label: "Entrega em Camaçari e região" },
  { icon: WhatsAppIcon, label: "Atendimento no WhatsApp" },
];

const STEPS = [
  {
    title: "Escolha no catálogo",
    text: "Veja fotos, medidas e detalhes de cada móvel.",
  },
  {
    title: "Chame no WhatsApp",
    text: "A gente passa as condições e tira suas dúvidas.",
  },
  {
    title: "Feche na promissória",
    text: "Leve comprovante de residência e de renda. Simples assim.",
  },
];

export default function Home() {
  const featured = getFeaturedProducts();

  return (
    <>
      <HomeHeader />
      <main className="flex-1">
        <section className="relative overflow-hidden bg-brand px-4 pt-5 pb-8">
          <div
            aria-hidden="true"
            className="absolute -top-10 -right-[70px] h-[420px] w-[220px] rotate-[28deg] bg-cyan opacity-90 md:right-[10%] md:h-[640px] md:w-[320px]"
          />
          <div className="relative mx-auto grid max-w-6xl gap-3.5 md:grid-cols-2 md:items-center md:gap-10 md:py-8">
            <div className="flex flex-col gap-3.5">
              <span className="self-start rounded-md bg-accent px-2.5 py-1.5 text-xs font-extrabold tracking-[0.6px] text-ink uppercase">
                Crediário na promissória
              </span>
              <h1 className="max-w-[300px] text-[34px] leading-[1.05] font-black text-white md:max-w-md md:text-5xl">
                Casa nova sem precisar de cartão de crédito.
              </h1>
              <p className="max-w-[290px] text-base leading-[1.45] text-on-brand md:max-w-md md:text-lg">
                Escolha seu móvel no catálogo e feche o crediário direto com a
                gente no WhatsApp.
              </p>
              <div className="mt-1.5 hidden flex-col gap-3.5 md:flex md:max-w-sm">
                <HeroActions />
              </div>
            </div>
            <Image
              src={HERO_IMAGE.src}
              alt={HERO_IMAGE.alt}
              priority
              sizes="(min-width: 768px) 50vw, 100vw"
              className="mt-1.5 h-[220px] w-full rounded-2xl bg-white object-contain md:mt-0 md:h-[360px]"
            />
            <div className="flex flex-col gap-3.5 md:hidden">
              <HeroActions />
            </div>
          </div>
        </section>

        <section className="border-b border-line bg-white px-4 py-[18px]">
          <ul className="mx-auto grid max-w-6xl grid-cols-3 gap-2">
            {BENEFITS.map(({ icon: BenefitIcon, label }) => (
              <li key={label} className="flex flex-col items-center gap-1.5 text-center">
                <BenefitIcon size={26} className="text-brand" />
                <span className="text-xs leading-tight font-bold">{label}</span>
              </li>
            ))}
          </ul>
        </section>

        <div className="mx-auto max-w-6xl">
          <section className="flex flex-col gap-3.5 px-4 pt-7 pb-2">
            <h2 className="text-[22px] font-black">Navegue por ambiente</h2>
            <div className="grid grid-cols-2 gap-3 md:grid-cols-4">
              {categories.map((category) => (
                <Link
                  key={category.slug}
                  href={`/categoria/${category.slug}`}
                  className="overflow-hidden rounded-2xl border border-line bg-white text-ink no-underline"
                >
                  <Image
                    src={category.image}
                    alt=""
                    sizes="(min-width: 768px) 25vw, 50vw"
                    className={`block h-[120px] w-full bg-white md:h-40 ${category.imageFit === "cover" ? "object-cover" : "object-contain"}`}
                  />
                  <div className="bg-brand px-3 py-2.5 text-base font-extrabold text-white">
                    {category.name}
                  </div>
                </Link>
              ))}
            </div>
          </section>

          <section className="flex flex-col gap-3.5 px-4 pt-6 pb-2">
            <div className="flex items-baseline justify-between">
              <h2 className="text-[22px] font-black">Mais procurados</h2>
              <Link href="/categoria/quarto" className="py-3 text-sm font-bold">
                Ver todos
              </Link>
            </div>
            <div className="grid grid-cols-2 gap-3 md:grid-cols-4">
              {featured.map((product) => (
                <ProductCard key={product.slug} product={product} variant="home" />
              ))}
            </div>
          </section>

          <section className="mx-4 mt-7 flex flex-col gap-[18px] rounded-[20px] bg-brand px-5 py-6 text-white md:px-8 md:py-8">
            <h2 className="text-[22px] font-black">Como funciona o crediário</h2>
            <ol className="flex flex-col gap-[18px] md:grid md:grid-cols-3 md:gap-6">
              {STEPS.map((step, i) => (
                <li key={step.title} className="flex items-start gap-3.5">
                  <span className="flex size-9 flex-none items-center justify-center rounded-full bg-accent font-black text-ink">
                    {i + 1}
                  </span>
                  <div>
                    <strong className="text-base">{step.title}</strong>
                    <p className="mt-1 text-sm leading-[1.4] text-on-brand">{step.text}</p>
                  </div>
                </li>
              ))}
            </ol>
            <WhatsAppButton
              href={WHATSAPP_CREDIARIO}
              icon={false}
              className="h-[52px] rounded-[14px] text-base md:self-start md:px-8"
            >
              Quero fazer meu crediário
            </WhatsAppButton>
          </section>

          <section className="flex flex-col gap-3 px-4 py-7">
            <h2 className="text-[22px] font-black">Onde entregamos</h2>
            <p className="text-[15px] leading-[1.45] text-muted">
              Levamos seu móvel até sua casa em:
            </p>
            <ul className="flex flex-wrap gap-2">
              {[...DELIVERY_CITIES, "e região"].map((city) => (
                <li
                  key={city}
                  className="rounded-full border border-line-strong bg-white px-3.5 py-2.5 text-sm font-bold"
                >
                  {city}
                </li>
              ))}
            </ul>
          </section>
        </div>
      </main>
      <SiteFooter />
      <WhatsAppFab href={WHATSAPP_GENERAL} />
    </>
  );
}

function HeroActions() {
  return (
    <>
      <WhatsAppButton href={WHATSAPP_GENERAL} size="lg">
        Chamar no WhatsApp
      </WhatsAppButton>
      <Link
        href="/categoria/quarto"
        className="flex h-[52px] items-center justify-center rounded-[14px] border-2 border-white text-base font-bold text-white no-underline hover:bg-white/10 hover:text-white"
      >
        Ver catálogo completo
      </Link>
    </>
  );
}
