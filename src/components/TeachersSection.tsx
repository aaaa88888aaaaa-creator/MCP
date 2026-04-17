import { teachers } from '../data/teachers';
import { TeacherCard } from './TeacherCard';

export function TeachersSection() {
  return (
    <section id="teachers" className="relative bg-[#f7f0df] px-5 py-24 md:px-8">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_12%_18%,rgba(118,228,247,0.18),transparent_28%),radial-gradient(circle_at_88%_68%,rgba(216,179,101,0.24),transparent_28%)]" />
      <div className="relative mx-auto max-w-7xl">
        <div className="flex flex-col justify-between gap-6 md:flex-row md:items-end">
          <div className="max-w-3xl">
            <p className="text-sm font-black uppercase tracking-[0.28em] text-gold">Teacher showcase</p>
            <h2 className="mt-4 font-display text-4xl font-black tracking-[-0.04em] text-[#18202f] md:text-6xl">
              Meet the appointment faculty.
            </h2>
          </div>
          <a href="#reservation" className="w-fit rounded-full border border-cyanline/30 px-5 py-3 font-bold text-[#1d7281] transition hover:bg-cyanline/10">
            Open full schedule
          </a>
        </div>
        <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {teachers.map((teacher) => (
            <TeacherCard key={teacher.id} teacher={teacher} />
          ))}
        </div>
      </div>
    </section>
  );
}
