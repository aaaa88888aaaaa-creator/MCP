import type { Teacher } from '../types';

type TeacherCardProps = {
  teacher: Teacher;
  compact?: boolean;
  onGiftClick?: (teacher: Teacher) => void;
};

export function TeacherCard({ teacher, compact = false, onGiftClick }: TeacherCardProps) {
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
      <div className="relative mt-6 flex items-center justify-between gap-3">
        <span className="rounded-full border border-[#18202f]/10 px-3 py-1 text-xs font-bold text-[#18202f]/65">
          {teacher.availableSlots.length} open slots
        </span>
        <div className="flex gap-2">
          <button
            type="button"
            onClick={() => onGiftClick?.(teacher)}
            className="rounded-full border border-[#be7c4d]/25 bg-[#be7c4d]/10 px-4 py-2 text-sm font-bold text-[#8a5a2f] transition hover:bg-[#be7c4d] hover:text-white"
          >
            Reward
          </button>
          <a
            href="#reservation"
            className="rounded-full bg-[#18202f] px-4 py-2 text-sm font-bold text-white transition hover:bg-[#be7c4d]"
          >
            Schedule
          </a>
        </div>
      </div>
    </article>
  );
}
