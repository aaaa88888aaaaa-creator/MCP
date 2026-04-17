const navItems = [
  { label: 'Home', href: '#home' },
  { label: 'Reservation System', href: '#reservation' },
  { label: 'Teachers', href: '#teachers' },
  { label: 'Community', href: '#community' },
  { label: 'MCP AI', href: '#mcp-ai' },
  { label: 'Contact', href: '#contact' },
];

export function Navbar() {
  return (
    <header className="fixed inset-x-0 top-0 z-50 border-b border-[#18202f]/10 bg-[#fffaf0]/75 backdrop-blur-2xl">
      <nav className="mx-auto flex max-w-7xl flex-wrap items-center justify-between px-5 py-4 md:flex-nowrap md:px-8">
        <a href="#home" className="group flex items-center gap-3">
          <span className="grid size-10 place-items-center rounded-full border border-[#be7c4d]/30 bg-[#be7c4d]/10 text-sm font-black text-[#8a5a2f] shadow-glow">
            B
          </span>
          <span className="font-display text-lg font-black tracking-[0.2em] text-[#18202f]">BNBU MCP</span>
        </a>
        <div className="order-3 mt-3 flex w-full items-center gap-2 overflow-x-auto rounded-full border border-[#18202f]/10 bg-white/45 p-1 md:order-none md:mt-0 md:w-auto md:overflow-visible">
          {navItems.map((item) => (
            <a
              key={item.href}
              href={item.href}
              className="rounded-full px-4 py-2 text-sm font-semibold text-[#18202f]/70 transition hover:bg-[#18202f]/10 hover:text-[#18202f]"
            >
              {item.label}
            </a>
          ))}
        </div>
      </nav>
    </header>
  );
}
