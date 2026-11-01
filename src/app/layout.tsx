import type { Metadata } from "next";
import { Archivo, DM_Serif_Display } from "next/font/google";
import { SITE_URL } from "@/lib/whatsapp";
import "./globals.css";

const archivo = Archivo({
  variable: "--font-archivo",
  subsets: ["latin"],
});

const dmSerif = DM_Serif_Display({
  variable: "--font-dm-serif",
  weight: "400",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    default: "Tanta Móveis — Crediário na promissória",
    template: "%s | Tanta Móveis",
  },
  description:
    "Casa nova sem precisar de cartão de crédito. Escolha seu móvel no catálogo e feche o crediário direto com a gente no WhatsApp.",
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="pt-BR"
      className={`${archivo.variable} ${dmSerif.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col font-sans">{children}</body>
    </html>
  );
}
