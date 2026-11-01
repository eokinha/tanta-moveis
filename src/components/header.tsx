import Link from "next/link";
import type { ReactNode } from "react";
import { ChevronLeftIcon, MenuIcon, SearchIcon } from "./icons";
import { Logo } from "./logo";

export const headerButtonClass =
  "flex size-11 items-center justify-center rounded-xl border border-white/30 bg-transparent text-white hover:bg-white/10 hover:text-white";

export function HomeHeader() {
  return (
    <header className="bg-brand">
      <div className="mx-auto flex max-w-6xl items-center justify-between px-4 py-3">
        <Link href="/" aria-label="Tanta Móveis, início" className="no-underline">
          <Logo />
        </Link>
        <div className="flex gap-2">
          <button type="button" aria-label="Buscar" className={headerButtonClass}>
            <SearchIcon />
          </button>
          <button type="button" aria-label="Menu" className={headerButtonClass}>
            <MenuIcon />
          </button>
        </div>
      </div>
    </header>
  );
}

export function PageHeader({
  backHref,
  backLabel,
  action,
}: {
  backHref: string;
  backLabel: string;
  action: ReactNode;
}) {
  return (
    <header className="bg-brand">
      <div className="mx-auto flex max-w-6xl items-center justify-between px-4 py-3">
        <Link href={backHref} aria-label={backLabel} className={headerButtonClass}>
          <ChevronLeftIcon />
        </Link>
        <Link href="/" aria-label="Tanta Móveis, início" className="no-underline">
          <Logo size="sm" align="center" />
        </Link>
        {action}
      </div>
    </header>
  );
}
