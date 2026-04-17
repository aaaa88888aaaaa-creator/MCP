import { useMemo, useState } from 'react';
import { teachers } from '../data/teachers';
import type { AppointmentSlot, Teacher } from '../types';
import { BookingModal } from './BookingModal';
import { ReservationFilters } from './ReservationFilters';

export function ReservationBoard() {
  const [selectedDepartment, setSelectedDepartment] = useState('All Departments');
  const [selectedDay, setSelectedDay] = useState('All Days');
  const [booking, setBooking] = useState<{ teacher: Teacher; slot: AppointmentSlot } | null>(null);

  const filteredTeachers = useMemo(() => {
    return teachers
      .filter((teacher) => selectedDepartment === 'All Departments' || teacher.department === selectedDepartment)
      .map((teacher) => ({
        ...teacher,
        availableSlots: teacher.availableSlots.filter((slot) => selectedDay === 'All Days' || slot.day === selectedDay),
      }))
      .filter((teacher) => teacher.availableSlots.length > 0);
  }, [selectedDepartment, selectedDay]);

  return (
    <section id="reservation" className="relative overflow-hidden bg-[#fffaf0] px-5 py-24 md:px-8">
      <div className="absolute inset-0 bg-[linear-gradient(120deg,rgba(216,179,101,0.2),transparent_36%),radial-gradient(circle_at_80%_20%,rgba(118,228,247,0.16),transparent_30%)]" />
      <div className="relative mx-auto max-w-7xl">
        <div className="flex flex-col gap-10">
          <div>
            <p className="text-sm font-black uppercase tracking-[0.28em] text-cyanline">Reservation system</p>
            <div className="mt-4 grid gap-8 lg:grid-cols-[1fr_28rem] lg:items-end">
              <div>
                <h2 className="font-display text-4xl font-black tracking-[-0.04em] text-[#18202f] md:text-6xl">
                  Browse appointments with clarity.
                </h2>
                <p className="mt-5 max-w-3xl leading-8 text-[#18202f]/62">
                  This dashboard uses mock data only. Filters, teacher browsing, and booking feedback are fully interactive on the frontend.
                </p>
              </div>
              <ReservationFilters
                selectedDepartment={selectedDepartment}
                selectedDay={selectedDay}
                onDepartmentChange={setSelectedDepartment}
                onDayChange={setSelectedDay}
              />
            </div>
            <div className="mt-6 grid gap-3 sm:grid-cols-3">
              <div className="rounded-2xl border border-[#18202f]/10 bg-white/65 p-4">
                <p className="font-display text-2xl font-black text-[#18202f]">{filteredTeachers.length}</p>
                <p className="text-xs text-[#18202f]/45">Teachers</p>
              </div>
              <div className="rounded-2xl border border-[#18202f]/10 bg-white/65 p-4">
                <p className="font-display text-2xl font-black text-[#18202f]">
                  {filteredTeachers.reduce((total, teacher) => total + teacher.availableSlots.length, 0)}
                </p>
                <p className="text-xs text-[#18202f]/45">Slots</p>
              </div>
              <div className="rounded-2xl border border-[#18202f]/10 bg-white/65 p-4">
                <p className="font-display text-2xl font-black text-gold">Demo</p>
                <p className="text-xs text-[#18202f]/45">Mode</p>
              </div>
            </div>
          </div>
          <div className="space-y-6">
            {filteredTeachers.length === 0 && (
              <div className="rounded-[2rem] border border-[#18202f]/10 bg-white/70 p-8 text-[#18202f]/70">
                No available slots match these filters.
              </div>
            )}
            {filteredTeachers.map((teacher) => (
              <article key={teacher.id} className="overflow-hidden rounded-[2rem] border border-[#18202f]/10 bg-white/75 p-4 shadow-[0_22px_70px_rgba(24,32,47,0.08)] backdrop-blur-xl md:p-5">
                <div className="flex flex-col gap-5 xl:flex-row xl:items-stretch">
                  <div className="relative flex min-w-0 gap-5 rounded-[1.5rem] border border-[#18202f]/10 bg-[#f7f0df]/70 p-5 xl:w-80 xl:shrink-0">
                    <img src={teacher.photo} alt={`${teacher.name} portrait`} className="h-28 w-24 shrink-0 rounded-3xl border border-[#18202f]/10 object-cover shadow-sm" />
                    <div className="min-w-0">
                      <h3 className="font-display text-2xl font-black text-[#18202f]">{teacher.name}</h3>
                      <p className="mt-1 text-sm font-bold text-[#99723f]">{teacher.title}</p>
                      <p className="mt-1 text-sm text-[#18202f]/55">{teacher.department}</p>
                      <div className="mt-4 rounded-2xl border border-[#18202f]/10 bg-white/60 px-4 py-3">
                        <p className="text-[0.65rem] font-black uppercase tracking-[0.16em] text-[#18202f]/42">Service leadership points</p>
                        <p className="mt-1 font-display text-2xl font-black text-[#be7c4d]">{teacher.serviceLeadershipPoints}</p>
                      </div>
                    </div>
                  </div>
                  <div className="grid min-w-0 flex-1 gap-3 md:grid-cols-3">
                    {teacher.availableSlots.map((slot) => (
                      <div key={slot.id} className="rounded-3xl border border-[#18202f]/10 bg-[#f7f0df]/70 p-5 transition hover:border-[#be7c4d]/40 hover:bg-white">
                        <div className="flex items-start justify-between gap-3">
                          <div>
                            <p className="font-display text-xl font-bold text-[#18202f]">{slot.day}</p>
                            <p className="text-sm font-semibold text-gold">{slot.date}</p>
                          </div>
                          <span className={`rounded-full px-3 py-1 text-xs font-bold ${slot.status === 'available' ? 'bg-emerald-500/15 text-emerald-700' : 'bg-amber-500/18 text-amber-700'}`}>
                            {slot.status}
                          </span>
                        </div>
                        <p className="mt-5 text-lg font-black text-cyanline">{slot.time}</p>
                        <p className="mt-1 text-sm text-[#18202f]/50">{slot.room}</p>
                        <button
                          type="button"
                          onClick={() => setBooking({ teacher, slot })}
                          className="mt-5 w-full rounded-full border border-[#18202f]/10 bg-[#18202f] px-4 py-3 text-sm font-black uppercase tracking-[0.16em] text-white transition hover:border-cyanline/40 hover:bg-[#be7c4d]"
                        >
                          Book Now
                        </button>
                      </div>
                    ))}
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>
      </div>
      <BookingModal booking={booking} onClose={() => setBooking(null)} />
    </section>
  );
}
