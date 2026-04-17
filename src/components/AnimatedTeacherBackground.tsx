import type { CSSProperties } from 'react';

type Figure = {
  id: number;
  initials: string;
  lane: string;
  delay: string;
  duration: string;
  scale: string;
  opacity: string;
  blur: string;
  accent: string;
};

type FigureStyle = CSSProperties & {
  '--figure-scale': string;
};

const figures: Figure[] = [
  { id: 1, initials: 'AC', lane: '12%', delay: '-4s', duration: '22s', scale: '1.2', opacity: '0.30', blur: '1px', accent: '#76e4f7' },
  { id: 2, initials: 'MH', lane: '24%', delay: '-12s', duration: '28s', scale: '0.86', opacity: '0.18', blur: '4px', accent: '#d8b365' },
  { id: 3, initials: 'SL', lane: '38%', delay: '-8s', duration: '18s', scale: '1.06', opacity: '0.26', blur: '2px', accent: '#be7c4d' },
  { id: 4, initials: 'NB', lane: '52%', delay: '-19s', duration: '32s', scale: '0.72', opacity: '0.14', blur: '7px', accent: '#a7f3d0' },
  { id: 5, initials: 'PR', lane: '66%', delay: '-2s', duration: '25s', scale: '1', opacity: '0.22', blur: '3px', accent: '#f0abfc' },
  { id: 6, initials: 'EN', lane: '78%', delay: '-15s', duration: '20s', scale: '1.18', opacity: '0.28', blur: '1.5px', accent: '#fda4af' },
  { id: 7, initials: 'HS', lane: '18%', delay: '-23s', duration: '34s', scale: '0.66', opacity: '0.12', blur: '8px', accent: '#fde68a' },
  { id: 8, initials: 'IM', lane: '44%', delay: '-27s', duration: '26s', scale: '0.9', opacity: '0.16', blur: '5px', accent: '#93c5fd' },
  { id: 9, initials: 'KR', lane: '70%', delay: '-31s', duration: '30s', scale: '0.78', opacity: '0.14', blur: '6px', accent: '#f9a8d4' },
];

function TeacherFigure({ figure }: { figure: Figure }) {
  return (
    <div
      className="teacher-figure absolute -left-44 top-0"
      style={{
        top: figure.lane,
        animationDelay: figure.delay,
        animationDuration: figure.duration,
        opacity: figure.opacity,
        filter: `blur(${figure.blur})`,
        '--figure-scale': figure.scale,
      } as FigureStyle}
    >
      <div className="relative h-56 w-32 md:h-72 md:w-40">
        <div
          className="absolute left-1/2 top-0 size-16 -translate-x-1/2 rounded-full border border-[#18202f]/10 bg-gradient-to-br from-white/80 to-white/25 backdrop-blur-xl md:size-20"
          style={{ boxShadow: `0 0 34px ${figure.accent}55` }}
        >
          <span className="grid h-full place-items-center font-display text-lg font-black text-[#18202f]/75">
            {figure.initials}
          </span>
        </div>
        <div className="absolute left-1/2 top-16 h-32 w-24 -translate-x-1/2 rounded-t-[3rem] border border-[#18202f]/10 bg-gradient-to-b from-white/65 via-slate-300/45 to-slate-700/60 shadow-2xl md:top-20 md:h-44 md:w-32">
          <div className="absolute inset-x-4 top-5 h-10 rounded-b-full border-b border-white/40 bg-white/30" />
          <div className="absolute left-1/2 top-4 h-20 w-px -translate-x-1/2 bg-white/50" />
          <div
            className="absolute bottom-5 left-1/2 h-1 w-14 -translate-x-1/2 rounded-full"
            style={{ backgroundColor: figure.accent }}
          />
        </div>
      </div>
    </div>
  );
}

export function AnimatedTeacherBackground() {
  return (
    <div className="pointer-events-none absolute inset-0 overflow-hidden">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_18%_18%,rgba(216,179,101,0.34),transparent_28%),radial-gradient(circle_at_78%_24%,rgba(118,228,247,0.24),transparent_30%),radial-gradient(circle_at_50%_92%,rgba(190,124,77,0.18),transparent_34%)]" />
      <div className="absolute left-1/2 top-1/2 h-[34rem] w-[34rem] -translate-x-1/2 -translate-y-1/2 rounded-full border border-gold/20 animate-pulse-ring" />
      <div className="absolute left-1/2 top-1/2 h-[46rem] w-[46rem] -translate-x-1/2 -translate-y-1/2 rounded-full border border-cyanline/10 animate-pulse-ring [animation-delay:1.5s]" />
      {figures.map((figure) => (
        <TeacherFigure key={figure.id} figure={figure} />
      ))}
      <div className="absolute inset-0 bg-[linear-gradient(90deg,#f7f0df_0%,rgba(247,240,223,0.28)_28%,rgba(255,255,255,0.12)_55%,#f7f0df_100%)]" />
      <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(255,250,240,0.35)_0%,rgba(255,250,240,0.08)_42%,#f7f0df_100%)]" />
      <div className="scanline absolute inset-0 opacity-[0.12]" />
    </div>
  );
}
