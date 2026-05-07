import { useState } from 'react';

export type DiscussionMessage = {
  name: string;
  text: string;
  meta?: string;
};

type DiscussionBoxProps = {
  title: string;
  placeholder: string;
  comments: DiscussionMessage[];
  onAdd: (text: string) => void;
};

export function DiscussionBox({ title, placeholder, comments, onAdd }: DiscussionBoxProps) {
  const [draft, setDraft] = useState('');

  function submitComment() {
    const text = draft.trim();

    if (!text) {
      return;
    }

    onAdd(text);
    setDraft('');
  }

  return (
    <div className="rounded-[2rem] border border-[#18202f]/10 bg-white/75 p-5 shadow-[0_22px_70px_rgba(24,32,47,0.08)] backdrop-blur-xl">
      <h3 className="font-display text-2xl font-black text-[#18202f]">{title}</h3>
      <div className="mt-5 space-y-3">
        {comments.map((comment, index) => (
          <div key={`${comment.name}-${index}`} className="rounded-2xl border border-[#18202f]/10 bg-[#fffaf0]/75 p-4">
            <div className="flex items-center justify-between gap-3">
              <p className="font-bold text-[#18202f]">{comment.name}</p>
              {comment.meta && <p className="text-xs text-[#18202f]/42">{comment.meta}</p>}
            </div>
            <p className="mt-2 text-sm leading-6 text-[#18202f]/65">{comment.text}</p>
          </div>
        ))}
      </div>
      <div className="mt-5 flex flex-col gap-3 sm:flex-row">
        <textarea
          value={draft}
          onChange={(event) => setDraft(event.target.value)}
          rows={2}
          placeholder={placeholder}
          className="min-h-20 flex-1 resize-none rounded-2xl border border-[#18202f]/10 bg-[#fffaf0] px-4 py-3 text-sm text-[#18202f] outline-none transition placeholder:text-[#18202f]/35 focus:border-[#be7c4d]/45"
        />
        <button
          type="button"
          onClick={submitComment}
          className="rounded-2xl bg-[#18202f] px-6 py-3 text-sm font-black uppercase tracking-[0.16em] text-white transition hover:bg-[#be7c4d] sm:self-stretch"
        >
          Post
        </button>
      </div>
    </div>
  );
}
