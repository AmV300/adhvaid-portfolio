export function SiteHeader() {
  return (
    <header className="mx-auto max-w-7xl px-6 py-6 md:px-10">
      <nav className="flex items-center justify-between">
        <a href="/" className="text-sm font-semibold tracking-[-0.03em]">
          AM.
        </a>

        <a
          href="/#contact"
          className="text-sm text-[#6B6B6B] transition-colors hover:text-[#111111]"
        >
          Let&apos;s talk
        </a>
      </nav>
    </header>
  );
}