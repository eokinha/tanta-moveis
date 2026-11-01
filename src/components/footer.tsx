import { Logo } from "./logo";

const DISCLAIMER = "Imagens ilustrativas. Condições sujeitas a análise de crédito.";

export function SiteFooter({ compact = false }: { compact?: boolean }) {
  if (compact) {
    return (
      <footer className="mt-8 bg-brand-dark px-4 pt-6 pb-25 text-[13px] leading-normal text-on-brand">
        <div className="mx-auto max-w-6xl">{DISCLAIMER}</div>
      </footer>
    );
  }

  return (
    <footer className="bg-brand-dark px-4 pt-7 pb-25 text-sm leading-normal text-on-brand">
      <div className="mx-auto flex max-w-6xl flex-col gap-3.5">
        <Logo size="lg" />
        <span>Loja 100% online: você escolhe aqui e recebe em casa.</span>
        <span>[HORÁRIO DE ATENDIMENTO]</span>
        <a href="#" className="font-bold text-white underline hover:text-on-brand">
          Instagram [@tantamoveis]
        </a>
        <span className="text-xs text-on-brand-muted">{DISCLAIMER}</span>
      </div>
    </footer>
  );
}
