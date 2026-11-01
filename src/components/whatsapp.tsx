import type { ReactNode } from "react";
import { WhatsAppIcon } from "./icons";

const sizes = {
  sm: "h-11 gap-1.5 rounded-[10px] text-sm",
  md: "h-[50px] gap-2.5 rounded-xl text-[15px]",
  lg: "h-14 gap-2.5 rounded-[14px] text-[17px]",
};

export function WhatsAppButton({
  href,
  size = "md",
  icon = true,
  className = "",
  children,
}: {
  href: string;
  size?: keyof typeof sizes;
  icon?: boolean;
  className?: string;
  children: ReactNode;
}) {
  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className={`flex items-center justify-center bg-whatsapp px-3 font-extrabold text-white no-underline hover:bg-[#0c6635] hover:text-white ${sizes[size]} ${className}`}
    >
      {icon && <WhatsAppIcon size={size === "sm" ? 18 : 22} strokeWidth={size === "sm" ? 2.2 : 2} />}
      {children}
    </a>
  );
}

export function WhatsAppFab({ href }: { href: string }) {
  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Chamar no WhatsApp"
      className="fixed right-4 bottom-6 z-20 flex size-15 items-center justify-center rounded-full bg-whatsapp text-white shadow-[0_6px_18px_rgba(7,42,122,0.35)] hover:bg-[#0c6635] hover:text-white"
    >
      <WhatsAppIcon size={28} />
    </a>
  );
}
