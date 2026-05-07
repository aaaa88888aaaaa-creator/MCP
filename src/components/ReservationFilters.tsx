import { consultationTopics, days, departments } from '../data/teachers';

type ReservationFiltersProps = {
  selectedSubject: string;
  selectedTopic: string;
  selectedDay: string;
  onSubjectChange: (subject: string) => void;
  onTopicChange: (topic: string) => void;
  onDayChange: (day: string) => void;
};

export function ReservationFilters({
  selectedSubject,
  selectedTopic,
  selectedDay,
  onSubjectChange,
  onTopicChange,
  onDayChange,
}: ReservationFiltersProps) {
  return (
    <div className="grid gap-4 rounded-[2rem] border border-[#18202f]/10 bg-white/80 p-4 shadow-[0_22px_70px_rgba(24,32,47,0.08)] backdrop-blur-xl md:grid-cols-3">
      <label className="block">
        <span className="mb-2 block text-xs font-black uppercase tracking-[0.22em] text-[#18202f]/45">Subject</span>
        <select
          value={selectedSubject}
          onChange={(event) => onSubjectChange(event.target.value)}
          className="w-full rounded-2xl border border-[#18202f]/10 bg-[#fffaf0] px-4 py-3 font-semibold text-[#18202f] outline-none transition focus:border-gold/60"
        >
          {departments.map((department) => (
            <option key={department}>{department}</option>
          ))}
        </select>
      </label>
      <label className="block">
        <span className="mb-2 block text-xs font-black uppercase tracking-[0.22em] text-[#18202f]/45">Topic</span>
        <select
          value={selectedTopic}
          onChange={(event) => onTopicChange(event.target.value)}
          className="w-full rounded-2xl border border-[#18202f]/10 bg-[#fffaf0] px-4 py-3 font-semibold text-[#18202f] outline-none transition focus:border-gold/60"
        >
          {consultationTopics.map((topic) => (
            <option key={topic}>{topic}</option>
          ))}
        </select>
      </label>
      <label className="block">
        <span className="mb-2 block text-xs font-black uppercase tracking-[0.22em] text-[#18202f]/45">Day</span>
        <select
          value={selectedDay}
          onChange={(event) => onDayChange(event.target.value)}
          className="w-full rounded-2xl border border-[#18202f]/10 bg-[#fffaf0] px-4 py-3 font-semibold text-[#18202f] outline-none transition focus:border-cyanline/60"
        >
          {days.map((day) => (
            <option key={day}>{day}</option>
          ))}
        </select>
      </label>
    </div>
  );
}
