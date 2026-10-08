/** Decorative section break; headings carry the document structure. */
export function SectionDivider({ symbol = "ψ" }: { symbol?: "ψ" | "∇" | "ℏ" }) {
  return (
    <div aria-hidden="true" className="flex w-full items-center justify-center gap-4 py-1 text-primary/65 sm:gap-6">
      <span className="h-px min-w-0 flex-1 bg-gradient-to-r from-transparent to-primary/35" />
      <span className="select-none font-serif text-2xl italic leading-none">{symbol}</span>
      <span className="h-px min-w-0 flex-1 bg-gradient-to-l from-transparent to-primary/35" />
    </div>
  );
}
