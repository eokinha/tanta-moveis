const sizes = {
  sm: { word: "text-2xl", sub: "text-[13px] pl-[22px]" },
  md: { word: "text-[28px]", sub: "text-[15px] pl-[26px]" },
  lg: { word: "text-[30px]", sub: "text-base pl-7" },
};

export function Logo({
  size = "md",
  align = "start",
}: {
  size?: keyof typeof sizes;
  align?: "start" | "center";
}) {
  const s = sizes[size];
  return (
    <span
      className={`flex flex-col font-display leading-none ${align === "center" ? "items-center" : "items-start"}`}
    >
      <span className={`${s.word} tracking-[1px] text-white`}>TANTA</span>
      <span className={`${s.sub} -mt-0.5 text-accent`}>Móveis</span>
    </span>
  );
}
