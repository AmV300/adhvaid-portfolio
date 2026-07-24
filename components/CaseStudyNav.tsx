type CaseStudyNavItem = {
  label: string;
  href: string;
};

type CaseStudyNavProps = {
  items: CaseStudyNavItem[];
};

export function CaseStudyNav({ items }: CaseStudyNavProps) {
  return (
    <nav
      aria-label="Case study sections"
      className="sticky top-0 z-20 border-y border-[#111111]/15 bg-[#FAFAF8]"
    >
      <div className="mx-auto flex max-w-7xl items-center gap-6 px-6 py-4 md:px-10">
        <p className="hidden shrink-0 text-xs uppercase tracking-[0.14em] text-[#6B6B6B] sm:block">
          Case Study
        </p>

        <div className="flex min-w-0 gap-5 overflow-x-auto text-sm">
          {items.map((item) => (
            <a
              key={item.href}
              href={item.href}
              className="whitespace-nowrap text-[#6B6B6B] transition-colors hover:text-[#111111]"
            >
              {item.label}
            </a>
          ))}
        </div>
      </div>
    </nav>
  );
}