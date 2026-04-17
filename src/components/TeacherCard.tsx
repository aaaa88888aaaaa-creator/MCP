import type { Teacher } from '../types';

type TeacherCardProps = {
  teacher: Teacher;
  compact?: boolean;
};

export function TeacherCard({ teacher, compact = false }: TeacherCardProps) {
  return (
    <article className="group relative overflow-hidden rounded-[2rem] border border-[#18202f]/10 bg-white/70 p-5 shadow-[0_22px_70px_rgba(24,32,47,0.08)] backdrop-blur-xl transition duration-300 hover:-translate-y-2 hover:border-[#be7c4d]/30 hover:bg-white">
      <div className="absolute -right-14 -top-14 size-36 rounded-full blur-3xl transition group-hover:scale-125" style={{ backgroundColor: `${teacher.accent}30` }} />
      <div className="relative flex items-start gap-4">
        <img
          src={teacher.photo}
          alt={`${teacher.name} portrait`}
          className={`${compact ? 'size-20' : 'size-24'} shrink-0 rounded-3xl border border-[#18202f]/10 object-cover shadow-sm`}
          style={{ boxShadow: `0 0 34px ${teacher.accent}2e` }}
        />
        <div>
          <h3 className="font-display text-xl font-bold text-[#18202f]">{teacher.name}</h3>
          <p className="mt-1 text-sm font-semibold text-[#99723f]">{teacher.title}</p>
          <p className="mt-1 text-sm text-[#18202f]/55">{teacher.department}</p>
        </div>
      </div>
      {!compact && <p className="relative mt-5 min-h-20 leading-7 text-[#18202f]/62">{teacher.focus}</p>}
      <div className="relative mt-5 rounded-2xl border border-[#18202f]/10 bg-[#f7f0df]/80 p-4">
        <p className="text-xs font-black uppercase tracking-[0.18em] text-[#18202f]/45">Service leadership points</p>
        <p className="mt-2 font-display text-3xl font-black text-[#be7c4d]">{teacher.serviceLeadershipPoints}</p>
      </div>
      <div className="relative mt-6 flex items-center justify-between gap-3">
        <span className="rounded-full border border-[#18202f]/10 px-3 py-1 text-xs font-bold text-[#18202f]/65">
          {teacher.availableSlots.length} open slots
        </span>
        <a
          href="#reservation"
          className="rounded-full bg-[#18202f] px-4 py-2 text-sm font-bold text-white transition hover:bg-[#be7c4d]"
        >
          View Schedule
        </a>
      </div>
    </article>
  );
}
