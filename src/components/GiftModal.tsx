import { useState } from 'react';
import type { Teacher } from '../types';

const giftOptions = [
  { id: 'coffee', name: 'Coffee', cost: 20, detail: 'One campus coffee voucher' },
  { id: 'drink', name: 'Drink', cost: 16, detail: 'A cold drink from the campus store' },
  { id: 'meal', name: 'Canteen coupon', cost: 45, detail: 'One canteen meal voucher' },
  { id: 'snack', name: 'Snack box', cost: 30, detail: 'A small thank-you snack box' },
];

type GiftModalProps = {
  teacher: Teacher | null;
  points: number;
  onClose: () => void;
  onSendGift: (cost: number) => void;
};

export function GiftModal({ teacher, points, onClose, onSendGift }: GiftModalProps) {
  const [selectedGift, setSelectedGift] = useState(giftOptions[0]);

  if (!teacher) {
    return null;
  }

  const canAfford = points >= selectedGift.cost;

  return (
    <div className="fixed inset-0 z-[70] grid place-items-center bg-[#18202f]/45 px-5 backdrop-blur-md" role="dialog" aria-modal="true">
      <div className="relative w-full max-w-xl overflow-hidden rounded-[2rem] border border-[#18202f]/10 bg-[#fffaf0] p-7 shadow-2xl">
        <div className="absolute -right-20 -top-20 size-48 rounded-full bg-gold/20 blur-3xl" />
        <div className="relative">
          <p className="text-sm font-black uppercase tracking-[0.28em] text-gold">Teacher reward</p>
          <h3 className="mt-4 font-display text-3xl font-black text-[#18202f]">Send a thank-you gift</h3>
          <div className="mt-5 flex items-center gap-4 rounded-2xl border border-[#18202f]/10 bg-white/70 p-4">
            <img src={teacher.photo} alt={`${teacher.name} portrait`} className="size-16 rounded-2xl object-cover" />
            <div>
              <p className="font-bold text-[#18202f]">{teacher.name}</p>
              <p className="text-sm text-[#18202f]/55">{teacher.department}</p>
            </div>
            <div className="ml-auto text-right">
              <p className="font-display text-3xl font-black text-[#be7c4d]">{points}</p>
              <p className="text-xs text-[#18202f]/45">student points</p>
            </div>
          </div>
          <p className="mt-4 text-sm leading-6 text-[#18202f]/58">The school gives students points each month. Use them to thank teachers who help the project.</p>
          <div className="mt-5 grid gap-3 sm:grid-cols-2">
            {giftOptions.map((gift) => (
              <button
                key={gift.id}
                type="button"
                onClick={() => setSelectedGift(gift)}
                className={`rounded-2xl border p-4 text-left transition ${
                  selectedGift.id === gift.id
                    ? 'border-[#be7c4d]/50 bg-[#be7c4d]/10'
                    : 'border-[#18202f]/10 bg-white/70 hover:bg-white'
                }`}
              >
                <span className="font-display text-xl font-black text-[#18202f]">{gift.name}</span>
                <span className="mt-2 block text-sm text-[#18202f]/55">{gift.detail}</span>
                <span className="mt-3 block text-sm font-black text-[#be7c4d]">{gift.cost} points</span>
              </button>
            ))}
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
              onClick={() => onSendGift(selectedGift.cost)}
              disabled={!canAfford}
              className="rounded-full bg-[#18202f] px-5 py-4 text-sm font-black uppercase tracking-[0.18em] text-white transition hover:bg-gold disabled:cursor-not-allowed disabled:bg-[#18202f]/35"
            >
              {canAfford ? 'Send Gift' : 'Not Enough Points'}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
