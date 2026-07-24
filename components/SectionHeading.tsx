type SectionHeadingProps = {
  title: string;
  detail: string;
};

export function SectionHeading({ title, detail }: SectionHeadingProps) {
  return (
    <div className="mb-10 flex items-baseline justify-between border-b border-[#111111]/15 pb-4">
      <h2 className="text-sm uppercase tracking-[0.16em] text-[#6B6B6B]">
        {title}
      </h2>

      <p className="text-sm text-[#6B6B6B]">{detail}</p>
    </div>
  );
}