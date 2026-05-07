import { useState } from 'react';

const starterPrompts = [
  'What is the major transfer process?',
  'How does Add and Drop work?',
  'What should I know before withdrawal?',
];

function campusAnswer(question: string) {
  const normalizedQuestion = question.toLowerCase();

  if (normalizedQuestion.includes('major transfer')) {
    return 'The major transfer process usually starts with checking the target programme requirements, including GPA, prerequisites, and available places. Then prepare your transcript, study plan, and any required forms during the official application period. The school or programme office reviews the application, and some programmes may require an interview or course matching check. Always follow the official notice and confirm deadlines with the target programme office.';
  }

  if (normalizedQuestion.includes('add') || normalizedQuestion.includes('drop')) {
    return 'Add and Drop is usually completed through the student system during the official window. Before submitting, check prerequisites, timetable conflicts, credit limits, and waitlist status. After submitting, watch the system or email for approval results.';
  }

  if (normalizedQuestion.includes('withdrawal')) {
    return 'Before withdrawal, contact your advisor or programme office and confirm the impact on your student record, tuition, visa status, and course progress. After submitting the request, keep approved forms and email records.';
  }

  return 'This is a campus FAQ demo answer. You can ask about major transfer, Add and Drop, withdrawal, course selection, or campus facilities.';
}

export function McpAiSection() {
  const [prompt, setPrompt] = useState('');
  const [messages, setMessages] = useState([
    {
      role: 'assistant',
      text: 'Ask a basic school question. MCP AI can answer without booking a teacher.',
    },
  ]);

  function submitPrompt(value = prompt) {
    const trimmed = value.trim();

    if (!trimmed) {
      return;
    }

    setMessages((current) => [
      ...current,
      { role: 'user', text: trimmed },
      {
        role: 'assistant',
        text: campusAnswer(trimmed),
      },
    ]);
    setPrompt('');
  }

  return (
    <section id="mcp-ai" className="relative min-h-screen overflow-hidden bg-[#f7f0df] px-5 pb-24 pt-32 md:px-8">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_12%_20%,rgba(216,179,101,0.28),transparent_28%),radial-gradient(circle_at_82%_12%,rgba(118,228,247,0.22),transparent_30%),linear-gradient(180deg,rgba(255,255,255,0.78),rgba(247,240,223,0.94))]" />
      <div className="absolute left-1/2 top-24 h-64 w-64 -translate-x-1/2 rounded-full border border-[#be7c4d]/20 bg-white/40 blur-3xl" />
      <div className="relative mx-auto flex min-h-[calc(100vh-12rem)] max-w-5xl flex-col">
        <div className="mx-auto max-w-3xl text-center">
          <p className="text-sm font-black uppercase tracking-[0.28em] text-[#99723f]">MCP AI</p>
          <h2 className="mt-4 font-display text-5xl font-black tracking-[-0.06em] text-[#18202f] md:text-7xl">
            Ask school basics.
          </h2>
        </div>

        <div className="mx-auto mt-10 w-full max-w-3xl flex-1 space-y-4 pb-10">
          {messages.map((message, index) => (
            <div key={`${message.role}-${index}`} className={`flex ${message.role === 'user' ? 'justify-end' : 'justify-start'}`}>
              <div
                className={`max-w-[85%] rounded-[1.5rem] px-5 py-4 shadow-sm ${
                  message.role === 'user'
                    ? 'bg-[#18202f] text-white'
                    : 'border border-[#18202f]/10 bg-white/75 text-[#18202f] backdrop-blur-xl'
                }`}
              >
                <p className="text-sm leading-7">{message.text}</p>
              </div>
            </div>
          ))}
          <div className="grid gap-3 pt-4 sm:grid-cols-3">
            {starterPrompts.map((item) => (
              <button
                key={item}
                type="button"
                onClick={() => submitPrompt(item)}
                className="rounded-2xl border border-[#18202f]/10 bg-white/60 p-4 text-left text-sm font-semibold leading-6 text-[#18202f]/72 backdrop-blur-xl transition hover:-translate-y-1 hover:border-[#be7c4d]/30 hover:bg-white"
              >
                {item}
              </button>
            ))}
          </div>
        </div>

        <div className="sticky bottom-5 z-40 px-0">
          <form
            onSubmit={(event) => {
              event.preventDefault();
              submitPrompt();
            }}
            className="mx-auto flex max-w-3xl items-end gap-3 rounded-[2rem] border border-[#18202f]/10 bg-white/85 p-3 shadow-[0_24px_80px_rgba(24,32,47,0.18)] backdrop-blur-2xl"
          >
            <textarea
              value={prompt}
              onChange={(event) => setPrompt(event.target.value)}
              onKeyDown={(event) => {
                if (event.key === 'Enter' && !event.shiftKey) {
                  event.preventDefault();
                  submitPrompt();
                }
              }}
              rows={1}
              placeholder="Ask about major transfer, Add and Drop, Withdrawal..."
              className="max-h-36 min-h-12 flex-1 resize-none rounded-[1.35rem] bg-transparent px-4 py-3 text-[#18202f] outline-none placeholder:text-[#18202f]/38"
            />
            <button
              type="submit"
              className="grid size-12 shrink-0 place-items-center rounded-full bg-[#18202f] font-black text-white transition hover:-translate-y-0.5 hover:bg-[#be7c4d]"
              aria-label="Send prompt"
            >
              ↑
            </button>
          </form>
        </div>
      </div>
    </section>
  );
}
