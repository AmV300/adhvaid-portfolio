type ProcessTimelineProps = {
  steps: string[];
};

export function ProcessTimeline({ steps }: ProcessTimelineProps) {
  return (
    <ol className="grid gap-4 sm:grid-cols-5">
      {steps.map((step, index) => (
        <li
          key={step}
          className="border-t border-[#111111]/20 pt-3 sm:first:border-[#111111]"
        >
          <p className="text-xs text-[#6B6B6B]">0{index + 1}</p>
          <p className="mt-2 text-sm font-medium">{step}</p>
        </li>
      ))}
    </ol>
  );
}