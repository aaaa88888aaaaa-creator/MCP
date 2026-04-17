const studentVoices = [
  {
    name: 'Lina Xu',
    role: 'Year 2 Business student',
    text: 'BNBU MCP helped me find the right mentor before my service leadership pitch. I booked a focused session and left with a clearer project plan.',
  },
  {
    name: 'Aaron Lee',
    role: 'Computer Science student',
    text: 'The MCP schedule made teacher availability easy to understand. I used it to get feedback on my community data dashboard.',
  },
  {
    name: 'Maya Zhang',
    role: 'Design student',
    text: 'I found a design mentor quickly and improved my portfolio presentation for the MCP showcase.',
  },
  {
    name: 'Noah Wang',
    role: 'Engineering student',
    text: 'The platform connected me with a teacher who helped turn my sustainability idea into a realistic service prototype.',
  },
  {
    name: 'Sophia Kim',
    role: 'Media Arts student',
    text: 'MCP AI gave me a fast starting point, then the reservation board helped me book a teacher for storyboarding guidance.',
  },
  {
    name: 'Ethan Zhao',
    role: 'Psychology student',
    text: 'I used BNBU MCP to prepare my wellbeing workshop. The teacher session helped me make the activity more useful for classmates.',
  },
];

function VoiceCard({ voice }: { voice: (typeof studentVoices)[number] }) {
  return (
    <article className="w-[23rem] shrink-0 rounded-[2rem] border border-white/10 bg-[#12151c] p-6 text-white shadow-[0_20px_80px_rgba(0,0,0,0.2)] md:w-[32rem]">
      <div className="flex items-center gap-4">
        <div className="grid size-14 place-items-center rounded-full bg-white font-display text-lg font-black text-[#12151c]">
          {voice.name
            .split(' ')
            .map((part) => part[0])
            .join('')}
        </div>
        <div>
          <h3 className="font-display text-xl font-black">{voice.name}</h3>
          <p className="mt-1 text-sm font-semibold text-white/45">{voice.role}</p>
        </div>
      </div>
      <p className="mt-6 text-lg leading-8 text-white/78">{voice.text}</p>
    </article>
  );
}

export function CommunitySection() {
  const firstRow = [...studentVoices, ...studentVoices];
  const secondRow = [...studentVoices.slice().reverse(), ...studentVoices.slice().reverse()];

  return (
    <section id="community" className="overflow-hidden bg-[#090a0d] px-5 py-24 text-white md:px-8">
      <div className="mx-auto max-w-7xl text-center">
        <p className="text-sm font-black uppercase tracking-[0.28em] text-[#d8b365]">Community</p>
        <h2 className="mt-5 font-display text-5xl font-black tracking-[-0.05em] md:text-7xl">
          Service Leadership Community
        </h2>
        <p className="mx-auto mt-5 max-w-3xl text-lg leading-8 text-white/50">
          Students share how BNBU MCP helped them use the MCP project to find guidance, improve ideas, and move service leadership work forward.
        </p>
      </div>

      <div className="relative mt-16 space-y-6">
        <div className="pointer-events-none absolute inset-y-0 left-0 z-10 w-32 bg-gradient-to-r from-[#090a0d] to-transparent" />
        <div className="pointer-events-none absolute inset-y-0 right-0 z-10 w-32 bg-gradient-to-l from-[#090a0d] to-transparent" />
        <div className="marquee-track marquee-left flex gap-6">
          {firstRow.map((voice, index) => (
            <VoiceCard key={`left-${voice.name}-${index}`} voice={voice} />
          ))}
        </div>
        <div className="marquee-track marquee-right flex gap-6">
          {secondRow.map((voice, index) => (
            <VoiceCard key={`right-${voice.name}-${index}`} voice={voice} />
          ))}
        </div>
      </div>
    </section>
  );
}
