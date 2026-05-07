import { useState } from 'react';
import { teachers } from '../data/teachers';
import type { Teacher } from '../types';
import { GiftModal } from './GiftModal';
import { TeacherCard } from './TeacherCard';

export function TeachersSection() {
  const [selectedTeacher, setSelectedTeacher] = useState<Teacher | null>(null);
  const [studentPoints, setStudentPoints] = useState(120);

  function sendGift(cost: number) {
    setStudentPoints((points) => Math.max(points - cost, 0));
    setSelectedTeacher(null);
  }

  return (
    <section id="teachers" className="relative min-h-screen bg-[#f7f0df] px-5 pb-24 pt-32 md:px-8">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_12%_18%,rgba(118,228,247,0.18),transparent_28%),radial-gradient(circle_at_88%_68%,rgba(216,179,101,0.24),transparent_28%)]" />
      <div className="relative mx-auto max-w-7xl">
        <div className="flex flex-col justify-between gap-6 md:flex-row md:items-end">
          <div className="max-w-3xl">
            <p className="text-sm font-black uppercase tracking-[0.28em] text-gold">Teacher showcase</p>
            <h2 className="mt-4 font-display text-4xl font-black tracking-[-0.04em] text-[#18202f] md:text-6xl">
              Meet the faculty.
            </h2>
          </div>
          <div className="w-fit rounded-2xl border border-[#18202f]/10 bg-white/70 px-5 py-4">
            <p className="font-display text-3xl font-black text-[#be7c4d]">{studentPoints}</p>
            <p className="text-xs text-[#18202f]/45">monthly student points</p>
          </div>
        </div>
        <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {teachers.map((teacher) => (
            <TeacherCard key={teacher.id} teacher={teacher} onGiftClick={setSelectedTeacher} />
          ))}
        </div>
      </div>
      <GiftModal
        teacher={selectedTeacher}
        points={studentPoints}
        onClose={() => setSelectedTeacher(null)}
        onSendGift={sendGift}
      />
    </section>
  );
}
