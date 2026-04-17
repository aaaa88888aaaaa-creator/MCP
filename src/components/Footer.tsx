export function Footer() {
  const socialIcons = ['in', 'f', '◎', '𝕏', '▶', 'r', '♪'];

  return (
    <footer id="contact" className="border-t border-[#18202f]/10 bg-[#050505] px-5 py-12 text-white md:px-8">
      <div className="mx-auto flex max-w-7xl flex-col justify-between gap-8 md:flex-row md:items-center">
        <div>
          <p className="font-display text-2xl font-black tracking-[0.18em]">BNBU MCP</p>
          <p className="mt-2 text-sm text-white/50">Frontend-only teacher appointment prototype.</p>
        </div>
        <div className="flex flex-wrap gap-3 text-sm font-semibold text-white/55">
          <a className="transition hover:text-gold" href="#home">Home</a>
          <a className="transition hover:text-gold" href="#reservation">Reservation System</a>
          <a className="transition hover:text-gold" href="#teachers">Teachers</a>
          <a className="transition hover:text-gold" href="#community">Community</a>
          <a className="transition hover:text-gold" href="#mcp-ai">MCP AI</a>
        </div>
        <div className="flex flex-wrap gap-5">
          {socialIcons.map((icon) => (
            <a
              key={icon}
              href="#contact"
              aria-label={`BNBU MCP social ${icon}`}
              className="grid size-10 place-items-center rounded-xl bg-white text-lg font-black leading-none text-black transition hover:-translate-y-1 hover:bg-[#d8b365]"
            >
              {icon}
            </a>
          ))}
        </div>
      </div>
    </footer>
  );
}
