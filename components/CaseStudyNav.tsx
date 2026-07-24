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
      className="border-y border-[#111111]/15 py-4 lg:sticky lg:top-8 lg:border-y-0 lg:py-0"
    >
      <p className="mb-3 hidden text-xs uppercase tracking-[0.14em] text-[#6B6B6B] lg:block">
        On this page
      </p>

      <div className="flex gap-5 overflow-x-auto text-sm lg:flex-col lg:gap-3">
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
    </nav>
  );
}