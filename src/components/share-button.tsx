"use client";

import { headerButtonClass } from "./header";
import { ShareIcon } from "./icons";

export function ShareButton({ title }: { title: string }) {
  async function share() {
    const url = window.location.href;
    if (navigator.share) {
      try {
        await navigator.share({ title, url });
      } catch {
        // Usuário cancelou o compartilhamento.
      }
      return;
    }
    await navigator.clipboard?.writeText(url);
  }

  return (
    <button type="button" aria-label="Compartilhar" onClick={share} className={headerButtonClass}>
      <ShareIcon />
    </button>
  );
}
