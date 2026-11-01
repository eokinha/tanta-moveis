import type { StaticImageData } from "next/image";

import ambienteCozinha from "@/assets/catalog/ambiente-cozinha.jpg";
import ambienteEletro from "@/assets/catalog/ambiente-eletro.jpg";
import ambienteSala from "@/assets/catalog/ambiente-sala.jpg";
import camaBoxPillow from "@/assets/catalog/cama-box-com-pillow.jpg";
import comodaSapateira from "@/assets/catalog/comoda-com-sapateira.jpg";
import cozinhaJade from "@/assets/catalog/cozinha-compacta-jade.jpg";
import roupeiroBerlim from "@/assets/catalog/roupeiro-berlim-4-portas.jpg";
import roupeiroVerona from "@/assets/catalog/roupeiro-casal-verona.jpg";
import sofaMilla from "@/assets/catalog/sofa-de-canto-milla.jpg";

export type Category = {
  slug: string;
  name: string;
  description: string;
  image: StaticImageData;
  /** "contain" para foto de produto em fundo branco, "cover" para foto de ambiente. */
  imageFit: "contain" | "cover";
  /** Subtipos usados nos filtros da página da categoria. */
  types: string[];
};

export type Product = {
  slug: string;
  name: string;
  /** Título completo usado na página do produto. */
  fullName?: string;
  category: string;
  type: string;
  spec?: string;
  tag?: string;
  images: { src: StaticImageData; alt: string }[];
  eyebrow?: string;
  highlights?: string[];
  measures?: { label: string; value: string }[];
  details?: string[];
  related?: string[];
};

export const DELIVERY_CITIES = [
  "Camaçari",
  "Dias d'Ávila",
  "Mata de São João",
  "Salvador",
];

export const categories: Category[] = [
  {
    slug: "quarto",
    name: "Quarto",
    description: "Roupeiros, cômodas e camas box no crediário.",
    image: roupeiroBerlim,
    imageFit: "contain",
    types: ["Roupeiros", "Cômodas", "Camas box"],
  },
  {
    slug: "cozinha",
    name: "Cozinha",
    description: "Cozinhas compactas e completas no crediário.",
    image: ambienteCozinha,
    imageFit: "cover",
    types: [],
  },
  {
    slug: "sala",
    name: "Sala",
    description: "Sofás e móveis para sala no crediário.",
    image: ambienteSala,
    imageFit: "cover",
    types: [],
  },
  {
    slug: "eletro",
    name: "Eletro",
    description: "Eletrodomésticos no crediário.",
    image: ambienteEletro,
    imageFit: "contain",
    types: [],
  },
];

export const products: Product[] = [
  {
    slug: "roupeiro-berlim-4-portas",
    name: "Roupeiro Berlim 4 portas",
    fullName: "Roupeiro Berlim 4 portas e 3 gavetas",
    category: "quarto",
    type: "Roupeiros",
    spec: "3 gavetas · 100% MDF",
    tag: "Mais vendido",
    images: [
      { src: roupeiroBerlim, alt: "Roupeiro Berlim 4 portas, branco com madeira" },
    ],
    eyebrow: "Roupeiro · 100% MDF",
    highlights: ["Espelho central", "Corrediça telescópica", "Dobradiça 26mm"],
    measures: [
      { label: "Altura", value: "190 cm" },
      { label: "Largura", value: "155 cm" },
      { label: "Profundidade", value: "47 cm" },
      { label: "Peso", value: "95 kg" },
    ],
    details: [
      "Chapas MDF de 12 e 15 mm",
      "3 gavetas externas com corrediças telescópicas",
      "Cabideiros em madeira",
      "Puxadores revestidos em MDF",
      "Espelho na porta central",
      "Pés arredondados",
      "Costas e fundos de gaveta em MDF 3 mm",
    ],
    related: ["comoda-com-sapateira", "cama-box-com-pillow", "roupeiro-casal-verona"],
  },
  {
    slug: "roupeiro-casal-verona",
    name: "Roupeiro Casal Verona",
    category: "quarto",
    type: "Roupeiros",
    spec: "6 portas · 3 gavetas · MDF",
    images: [{ src: roupeiroVerona, alt: "Roupeiro Verona 6 portas" }],
  },
  {
    slug: "comoda-com-sapateira",
    name: "Cômoda com sapateira",
    category: "quarto",
    type: "Cômodas",
    spec: "1 porta · 4 gavetas",
    images: [{ src: comodaSapateira, alt: "Cômoda com sapateira" }],
  },
  {
    slug: "cama-box-com-pillow",
    name: "Cama Box com Pillow",
    category: "quarto",
    type: "Camas box",
    spec: "Solteiro, casal e auxiliar",
    tag: "Novo",
    images: [{ src: camaBoxPillow, alt: "Cama Box com Pillow" }],
  },
  {
    slug: "cozinha-compacta-jade",
    name: "Cozinha Compacta Jade",
    category: "cozinha",
    type: "Cozinhas",
    images: [{ src: cozinhaJade, alt: "Cozinha Compacta Jade" }],
  },
  {
    slug: "sofa-de-canto-milla",
    name: "Sofá de canto Milla",
    category: "sala",
    type: "Sofás",
    images: [{ src: sofaMilla, alt: "Sofá de canto Milla" }],
  },
];

export const HERO_IMAGE = { src: roupeiroVerona, alt: "Roupeiro Verona 6 portas" };

const FEATURED_ORDER = [
  "roupeiro-berlim-4-portas",
  "cozinha-compacta-jade",
  "sofa-de-canto-milla",
  "cama-box-com-pillow",
];

export function getCategory(slug: string) {
  return categories.find((c) => c.slug === slug);
}

export function getProduct(slug: string) {
  return products.find((p) => p.slug === slug);
}

export function getProductsByCategory(slug: string) {
  return products.filter((p) => p.category === slug);
}

export function getFeaturedProducts() {
  return FEATURED_ORDER.map((slug) => getProduct(slug)).filter(
    (p): p is Product => p !== undefined,
  );
}

export function getRelatedProducts(product: Product) {
  return (product.related ?? [])
    .map((slug) => getProduct(slug))
    .filter((p): p is Product => p !== undefined);
}
