// Número no formato internacional, só dígitos (ex.: 5571999999999).
export const WHATSAPP_NUMBER =
  process.env.NEXT_PUBLIC_WHATSAPP_NUMBER ?? "55XXXXXXXXXXX";

export const SITE_URL =
  process.env.NEXT_PUBLIC_SITE_URL ?? "https://tantamoveis.com.br";

export function whatsappLink(text: string) {
  return `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(text)}`;
}

export function productWhatsappLink(product: { name: string; slug: string }) {
  return whatsappLink(
    `Olá! Tenho interesse no ${product.name}. Quero saber as condições do crediário.\n${SITE_URL}/produto/${product.slug}`,
  );
}

export const WHATSAPP_GENERAL = whatsappLink(
  "Olá! Vim pelo site da Tanta Móveis e quero saber mais sobre o crediário.",
);

export const WHATSAPP_CREDIARIO = whatsappLink(
  "Olá! Quero fazer meu crediário na Tanta Móveis. Como funciona?",
);
