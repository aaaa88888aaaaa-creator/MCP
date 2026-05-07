const features = [
  {
    title: 'Group discussion',
    text: 'Join teacher slots with classmates.',
  },
  {
    title: 'Campus information',
    text: 'Find courses, academic steps, facilities, and career tips.',
  },
  {
    title: 'Quick AI answers',
    text: 'Solve common school questions first.',
  },
];

export function IntroSection() {
  return (
    <section className="relative bg-[#f7f0df] px-5 py-24 md:px-8">
      <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-gold/50 to-transparent" />
      <div className="mx-auto max-w-7xl">
        <div className="max-w-3xl">
          <h2 className="mt-4 font-display text-4xl font-black tracking-[-0.04em] text-[#18202f] md:text-6xl">
            One place for daily student support.
          </h2>
        </div>
        <div className="mt-12 grid gap-5 md:grid-cols-3">
          {features.map((feature, index) => (
            <article
              key={feature.title}
              className="scroll-reveal rounded-[2rem] border border-[#18202f]/10 bg-white/70 p-7 shadow-[0_22px_70px_rgba(24,32,47,0.08)] backdrop-blur-xl transition hover:-translate-y-2 hover:border-gold/35 hover:bg-white"
              style={{ transitionDelay: `${index * 80}ms` }}
            >
              <span className="font-display text-5xl font-black text-gold/35">0{index + 1}</span>
              <h3 className="mt-8 font-display text-2xl font-bold text-[#18202f]">{feature.title}</h3>
              <p className="mt-4 leading-7 text-[#18202f]/58">{feature.text}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
