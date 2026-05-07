import type { AppointmentSlot, Teacher } from '../types';

type BookingModalProps = {
  booking: { teacher: Teacher; slot: AppointmentSlot } | null;
  onClose: () => void;
  onConfirm: (slotId: string) => void;
};

export function BookingModal({ booking, onClose, onConfirm }: BookingModalProps) {
  if (!booking) {
    return null;
  }

  const seatsLeft = Math.max(booking.slot.capacity - booking.slot.joined, 0);

  return (
    <div className="fixed inset-0 z-[70] grid place-items-center bg-[#18202f]/45 px-5 backdrop-blur-md" role="dialog" aria-modal="true">
      <div className="relative w-full max-w-lg overflow-hidden rounded-[2rem] border border-[#18202f]/10 bg-[#fffaf0] p-7 shadow-2xl">
        <div className="absolute -right-20 -top-20 size-48 rounded-full bg-gold/20 blur-3xl" />
        <div className="absolute -bottom-20 -left-20 size-48 rounded-full bg-cyanline/15 blur-3xl" />
        <div className="relative">
          <p className="text-sm font-black uppercase tracking-[0.28em] text-gold">Join discussion</p>
          <h3 className="mt-4 font-display text-3xl font-black text-[#18202f]">Join this group consultation</h3>
          <div className="mt-6 flex gap-4 rounded-2xl border border-[#18202f]/10 bg-white/70 p-5">
            <img src={booking.teacher.photo} alt={`${booking.teacher.name} portrait`} className="size-16 rounded-2xl object-cover" />
            <div>
              <p className="font-bold text-[#18202f]">{booking.teacher.name}</p>
              <p className="mt-1 text-sm text-[#18202f]/55">{booking.teacher.department} · {booking.teacher.title}</p>
              <p className="mt-4 text-cyanline">{booking.slot.day}, {booking.slot.date} · {booking.slot.time}</p>
              <p className="mt-1 text-sm text-[#18202f]/55">{booking.slot.room}</p>
              <p className="mt-3 text-sm font-bold text-emerald-700">{seatsLeft} seats left</p>
            </div>
          </div>
          <div className="mt-7 grid gap-3 sm:grid-cols-2">
            <button
              type="button"
              onClick={onClose}
              className="rounded-full border border-[#18202f]/10 bg-white/70 px-5 py-4 text-sm font-black uppercase tracking-[0.18em] text-[#18202f] transition hover:bg-white"
            >
              Cancel
            </button>
            <button
              type="button"
              onClick={() => onConfirm(booking.slot.id)}
              disabled={seatsLeft === 0}
              className="rounded-full bg-[#18202f] px-5 py-4 text-sm font-black uppercase tracking-[0.18em] text-white transition hover:bg-gold disabled:cursor-not-allowed disabled:bg-[#18202f]/35"
            >
              Confirm Join
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
