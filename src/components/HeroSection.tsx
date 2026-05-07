import { AnimatedTeacherBackground } from './AnimatedTeacherBackground';

export function HeroSection() {
  return (
    <section id="home" className="relative flex min-h-screen items-center overflow-hidden bg-[#f7f0df] px-5 pt-36 md:px-8 md:pt-24">
      <AnimatedTeacherBackground />
      <div className="relative z-10 mx-auto grid max-w-7xl items-end gap-12 py-20 md:grid-cols-[1.08fr_0.92fr]">
        <div className="max-w-4xl animate-fade-up">
          <div className="mb-8 inline-flex items-center gap-3 rounded-full border border-gold/25 bg-gold/10 px-4 py-2 text-xs font-black uppercase tracking-[0.28em] text-gold shadow-glow">
            Campus support hub
          </div>
          <h1 className="font-display text-[clamp(4.8rem,13vw,12rem)] font-black uppercase leading-[0.78] tracking-[-0.08em] text-[#18202f]">
            BNBU
            <span className="block bg-gradient-to-r from-[#be7c4d] via-[#18202f] to-[#1d7281] bg-clip-text text-transparent">MCP</span>
          </h1>
          <p className="mt-8 max-w-2xl text-xl font-semibold leading-relaxed text-[#18202f]/78 md:text-2xl">
            Teacher discussions, campus information, and quick school answers.
          </p>
          <div className="mt-10 flex flex-col gap-4 sm:flex-row">
            <a
              href="#reservation"
              className="group rounded-full bg-[#18202f] px-7 py-4 text-center text-sm font-black uppercase tracking-[0.18em] text-white transition hover:-translate-y-1 hover:bg-[#be7c4d] hover:shadow-glow"
            >
              Join Discussion
            </a>
            <a
              href="#teachers"
              className="rounded-full border border-[#18202f]/12 bg-white/55 px-7 py-4 text-center text-sm font-black uppercase tracking-[0.18em] text-[#18202f] backdrop-blur-xl transition hover:-translate-y-1 hover:border-cyanline/60 hover:text-[#1d7281]"
            >
              View Teachers
            </a>
          </div>
        </div>
        <div className="hidden animate-float-slow md:block">
          <div className="relative rounded-[2rem] border border-[#18202f]/10 bg-white/60 p-5 shadow-[0_24px_90px_rgba(24,32,47,0.15)] backdrop-blur-2xl">
            <div className="absolute -inset-10 -z-10 rounded-full bg-cyanline/20 blur-3xl" />
            <div className="rounded-[1.5rem] border border-gold/20 bg-white/70 p-6">
              <div className="flex items-center justify-between border-b border-[#18202f]/10 pb-5">
                <span className="text-xs font-black uppercase tracking-[0.24em] text-gold">Live schedule</span>
                <span className="rounded-full bg-emerald-500/15 px-3 py-1 text-xs font-bold text-emerald-700">24 slots</span>
              </div>
              <div className="mt-6 space-y-4">
                {['Computer Science', 'Business', 'Design'].map((item, index) => (
                  <div key={item} className="rounded-2xl border border-[#18202f]/10 bg-[#f7f0df]/70 p-4">
                    <div className="flex items-center justify-between">
                      <span className="font-display text-lg font-bold text-[#18202f]">{item}</span>
                      <span className="text-sm text-cyanline">{index + 3} teachers</span>
                    </div>
                    <div className="mt-3 h-2 overflow-hidden rounded-full bg-white/10">
                      <div className="h-full rounded-full bg-gradient-to-r from-gold to-cyanline" style={{ width: `${72 - index * 13}%` }} />
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
