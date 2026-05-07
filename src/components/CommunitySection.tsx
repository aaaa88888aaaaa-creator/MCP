import { useState } from 'react';
import { DiscussionBox, type DiscussionMessage } from './DiscussionBox';

const studentVoices = [
  {
    name: 'Lina Xu',
    role: 'Year 2 Business student',
    text: 'The group slot helped me prepare faster.',
  },
  {
    name: 'Aaron Lee',
    role: 'Computer Science student',
    text: 'I found classmates asking similar questions.',
  },
  {
    name: 'Maya Zhang',
    role: 'Design student',
    text: 'The teacher feedback was clear and useful.',
  },
  {
    name: 'Noah Wang',
    role: 'Engineering student',
    text: 'Shared consultation made the topic easier.',
  },
  {
    name: 'Sophia Kim',
    role: 'Media Arts student',
    text: 'MCP AI solved my basic school question first.',
  },
  {
    name: 'Ethan Zhao',
    role: 'Psychology student',
    text: 'The discussion board saved time.',
  },
];

const initialCommunityComments: DiscussionMessage[] = [
  { name: 'Jasmine', text: 'Does anyone want to join a course planning discussion this Friday?', meta: 'Today' },
  { name: 'Kevin', text: 'I can share notes about Add and Drop timing.', meta: 'Yesterday' },
];

function VoiceCard({ voice }: { voice: (typeof studentVoices)[number] }) {
  return (
    <article className="w-[23rem] shrink-0 rounded-[2rem] border border-[#18202f]/10 bg-white/75 p-6 text-[#18202f] shadow-[0_20px_80px_rgba(24,32,47,0.08)] md:w-[32rem]">
      <div className="flex items-center gap-4">
        <div className="grid size-14 place-items-center rounded-full bg-[#18202f] font-display text-lg font-black text-white">
          {voice.name
            .split(' ')
            .map((part) => part[0])
            .join('')}
        </div>
        <div>
          <h3 className="font-display text-xl font-black">{voice.name}</h3>
          <p className="mt-1 text-sm font-semibold text-[#18202f]/45">{voice.role}</p>
        </div>
      </div>
      <p className="mt-6 text-lg leading-8 text-[#18202f]/68">{voice.text}</p>
    </article>
  );
}

export function CommunitySection() {
  const [comments, setComments] = useState(initialCommunityComments);
  const firstRow = [...studentVoices, ...studentVoices];
  const secondRow = [...studentVoices.slice().reverse(), ...studentVoices.slice().reverse()];

  return (
    <section id="community" className="relative min-h-screen overflow-hidden bg-[#f7f0df] px-5 pb-24 pt-32 text-[#18202f] md:px-8">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_12%_20%,rgba(118,228,247,0.16),transparent_28%),radial-gradient(circle_at_82%_18%,rgba(216,179,101,0.22),transparent_30%)]" />
      <div className="mx-auto max-w-7xl text-center">
        <p className="text-sm font-black uppercase tracking-[0.28em] text-[#be7c4d]">Community</p>
        <h2 className="mt-5 font-display text-5xl font-black tracking-[-0.05em] md:text-7xl">
          Student Community
        </h2>
      </div>

      <div className="relative mt-16 space-y-6">
        <div className="pointer-events-none absolute inset-y-0 left-0 z-10 w-32 bg-gradient-to-r from-[#f7f0df] to-transparent" />
        <div className="pointer-events-none absolute inset-y-0 right-0 z-10 w-32 bg-gradient-to-l from-[#f7f0df] to-transparent" />
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

      <div className="mx-auto mt-16 max-w-4xl text-[#18202f]">
        <DiscussionBox
          title="Leave a message"
          placeholder="Ask a question or share useful campus advice..."
          comments={comments}
          onAdd={(text) => setComments((current) => [{ name: 'You', text, meta: 'Just now' }, ...current])}
        />
      </div>
    </section>
  );
}
