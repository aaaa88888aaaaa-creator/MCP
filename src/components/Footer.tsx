export function Footer() {
  const socialIcons = [
    { label: 'X', icon: <span className="text-base font-black">X</span> },
    { label: 'Facebook', icon: <span className="text-xl font-black">f</span> },
    {
      label: 'Instagram',
      icon: (
        <svg viewBox="0 0 24 24" aria-hidden="true" className="size-5">
          <rect x="5" y="5" width="14" height="14" rx="4" fill="none" stroke="currentColor" strokeWidth="2" />
          <circle cx="12" cy="12" r="3.2" fill="none" stroke="currentColor" strokeWidth="2" />
          <circle cx="16.8" cy="7.3" r="1.1" fill="currentColor" />
        </svg>
      ),
    },
    {
      label: 'WeChat',
      icon: (
        <svg viewBox="0 0 28 24" aria-hidden="true" className="size-6">
          <path d="M11.2 4.2c-4.7 0-8.5 2.9-8.5 6.5 0 2 1.2 3.8 3.1 5l-.7 2.4 2.8-1.4c1 .3 2.1.5 3.3.5 4.7 0 8.5-2.9 8.5-6.5s-3.8-6.5-8.5-6.5Z" fill="none" stroke="currentColor" strokeWidth="1.8" />
          <path d="M17.4 10.4c4.2 0 7.6 2.6 7.6 5.7 0 1.8-1.1 3.4-2.9 4.5l.6 2.1-2.5-1.2c-.9.3-1.8.4-2.8.4-4.2 0-7.6-2.6-7.6-5.8 0-3.1 3.4-5.7 7.6-5.7Z" fill="none" stroke="currentColor" strokeWidth="1.8" />
          <circle cx="8.4" cy="10.1" r="1" fill="currentColor" />
          <circle cx="13.7" cy="10.1" r="1" fill="currentColor" />
        </svg>
      ),
    },
  ];

  return (
    <footer id="contact" className="border-t border-[#18202f]/10 bg-[#fffaf0] px-5 py-14 text-[#18202f] md:px-8">
      <div className="mx-auto grid max-w-7xl gap-8 lg:grid-cols-[1.1fr_1fr_0.7fr] lg:items-start">
        <div>
          <p className="font-display text-4xl font-black tracking-[-0.04em]">BNBU MCP</p>
          <div className="mt-6 grid gap-3 text-sm text-[#18202f]/62">
            <p><span className="font-black text-[#18202f]">Telephone:</span> 14750832534</p>
            <p><span className="font-black text-[#18202f]">WeChat:</span> l1yqqqq</p>
            <p><span className="font-black text-[#18202f]">Email:</span> sylvester.leo01@outlook.com</p>
            <p>
              <span className="font-black text-[#18202f]">Address:</span> Beijing Normal-Hong Kong Baptist University, 2000 Jintong Road, Tangjiawan, Zhuhai, Guangdong Province, China, 519087
            </p>
          </div>
        </div>
        <div className="flex flex-wrap gap-3 text-sm font-semibold text-[#18202f]/55">
          <a className="transition hover:text-gold" href="#home">Home</a>
          <a className="transition hover:text-gold" href="#reservation">Reservation</a>
          <a className="transition hover:text-gold" href="#teachers">Teachers</a>
          <a className="transition hover:text-gold" href="#information">Information</a>
          <a className="transition hover:text-gold" href="#community">Community</a>
          <a className="transition hover:text-gold" href="#mcp-ai">MCP AI</a>
        </div>
        <div className="flex flex-wrap gap-3">
          {socialIcons.map((social) => (
            <a
              key={social.label}
              href="#contact"
              aria-label={`BNBU MCP social ${social.label}`}
              className="grid min-h-11 min-w-11 place-items-center rounded-xl bg-[#18202f] px-3 text-sm font-black leading-none text-white transition hover:-translate-y-1 hover:bg-[#d8b365]"
            >
              {social.icon}
            </a>
          ))}
        </div>
      </div>
    </footer>
  );
}
