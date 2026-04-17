import type { AppointmentSlot, Teacher } from '../types';

type BookingModalProps = {
  booking: { teacher: Teacher; slot: AppointmentSlot } | null;
  onClose: () => void;
};

export function BookingModal({ booking, onClose }: BookingModalProps) {
  if (!booking) {
    return null;
  }

  return (
    <div className="fixed inset-0 z-[70] grid place-items-center bg-[#18202f]/45 px-5 backdrop-blur-md" role="dialog" aria-modal="true">
      <div className="relative w-full max-w-lg overflow-hidden rounded-[2rem] border border-[#18202f]/10 bg-[#fffaf0] p-7 shadow-2xl">
        <div className="absolute -right-20 -top-20 size-48 rounded-full bg-gold/20 blur-3xl" />
        <div className="absolute -bottom-20 -left-20 size-48 rounded-full bg-cyanline/15 blur-3xl" />
        <div className="relative">
          <p className="text-sm font-black uppercase tracking-[0.28em] text-gold">Booking preview</p>
          <h3 className="mt-4 font-display text-3xl font-black text-[#18202f]">Demo only: booking backend not connected yet</h3>
          <div className="mt-6 flex gap-4 rounded-2xl border border-[#18202f]/10 bg-white/70 p-5">
            <img src={booking.teacher.photo} alt={`${booking.teacher.name} portrait`} className="size-16 rounded-2xl object-cover" />
            <div>
            <p className="font-bold text-[#18202f]">{booking.teacher.name}</p>
            <p className="mt-1 text-sm text-[#18202f]/55">{booking.teacher.department} · {booking.teacher.title}</p>
            <p className="mt-4 text-cyanline">{booking.slot.day}, {booking.slot.date} · {booking.slot.time}</p>
            <p className="mt-1 text-sm text-[#18202f]/55">{booking.slot.room}</p>
            </div>
          </div>
          <button
            type="button"
            onClick={onClose}
            className="mt-7 w-full rounded-full bg-[#18202f] px-5 py-4 text-sm font-black uppercase tracking-[0.18em] text-white transition hover:bg-gold"
          >
            Close
          </button>
        </div>
      </div>
    </div>
  );
}
