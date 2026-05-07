import { useMemo, useState } from 'react';
import type { DiscussionMessage } from './DiscussionBox';

type InfoTab = 'courses' | 'academic' | 'facilities' | 'career';

type InfoPost = {
  id: string;
  tab: InfoTab;
  community: string;
  title: string;
  intro: string;
  points: string[];
  reviews: DiscussionMessage[];
  votes: number;
  joined: boolean;
};

const tabs: { id: InfoTab; label: string; helper: string }[] = [
  { id: 'courses', label: 'Course Info', helper: 'Basic course introductions' },
  { id: 'academic', label: 'Academic Info', helper: 'Major transfer, withdrawal, add and drop' },
  { id: 'facilities', label: 'Facilities', helper: 'Gym, library, computer rooms' },
  { id: 'career', label: 'Career Planning', helper: 'CV, internships, graduate study' },
];

const posts: InfoPost[] = [
  {
    id: 'course-ai',
    tab: 'courses',
    community: 'r/BNBUCourses',
    title: 'AI and Society: what students should know before choosing it',
    intro: 'This course introduces AI concepts, social impact, ethics, and campus project cases. It is friendly to students who want a broad AI overview before going deeper into technical courses. Expect readings, short response tasks, and a final project that asks you to connect AI tools with a real social or campus problem.',
    points: ['Works well for students who like discussion, reflection, and short applied projects.', 'The final presentation matters because it connects technical ideas with public impact.', 'Basic Python helps with confidence, but the course is not built around heavy coding.'],
    reviews: [
      { name: 'Yuki', text: 'Start the project in the first half of the semester. Our group waited too long and spent the last week rewriting the problem statement, which made the slides weaker than the research.', meta: 'Took it last term' },
      { name: 'Ben', text: 'This is a good course if you want to understand AI before choosing a more technical path. The teacher cares more about clear thinking than fancy tools.', meta: 'Year 2' },
    ],
    votes: 236,
    joined: false,
  },
  {
    id: 'course-business',
    tab: 'courses',
    community: 'r/BNBUCourses',
    title: 'Principles of Management workload and class advice',
    intro: 'The course covers management models, team cases, and basic business decisions. Students usually spend most of their time on case reading and group work. It is suitable for students who want a practical introduction to organizations, leadership, and decision making.',
    points: ['Keep weekly case notes so the final review does not become memorization only.', 'Agree on group roles early because the case presentation needs coordination.', 'Use office hours before the case presentation to test whether your argument is specific enough.'],
    reviews: [
      { name: 'Cathy', text: 'The group case is manageable if roles are clear from the start. The hardest part was not the content, it was keeping everyone aligned on one recommendation.', meta: 'Year 3' },
      { name: 'Leo', text: 'Read the weekly cases before class. If you only read the slides, the examples in discussion will feel disconnected.', meta: 'Year 2' },
    ],
    votes: 184,
    joined: false,
  },
  {
    id: 'course-design',
    tab: 'courses',
    community: 'r/BNBUCourses',
    title: 'Service Design Studio: portfolio value and workload',
    intro: 'This studio focuses on user research, journey maps, prototyping, and critique. It works well for students who want a portfolio-ready project and are comfortable improving the same idea through several rounds of feedback.',
    points: ['Bring sketches or prototypes to every critique instead of only describing an idea.', 'Document research clearly because the final work is judged by process as well as output.', 'The workload is steady throughout the term, so last-minute work is risky.'],
    reviews: [
      { name: 'Mia', text: 'Bring sketches to every critique session. Even rough drawings helped me get better comments than a polished slide with no process behind it.', meta: 'Design student' },
      { name: 'Alan', text: 'The workload is steady, not last-minute friendly. If you miss two checkpoints, the final portfolio becomes much harder to finish.', meta: 'Year 2' },
    ],
    votes: 151,
    joined: false,
  },
  {
    id: 'academic-transfer',
    tab: 'academic',
    community: 'r/BNBUAcademic',
    title: 'Major transfer process checklist',
    intro: 'Students should first confirm target programme requirements, then prepare transcript, study plan, and any supporting materials during the official application period. It is also useful to talk with both your current advisor and the target programme office before submitting.',
    points: ['Check GPA, prerequisite, and quota requirements before writing the study plan.', 'Ask the target programme about credit transfer so you understand graduation impact.', 'Keep the official approval message after the result is released because later registration may depend on it.'],
    reviews: [
      { name: 'Alex', text: 'Ask the target programme about credit transfer early. I only looked at admission requirements first, but later realized one foundation course would not count toward the new plan.', meta: 'Today' },
      { name: 'Iris', text: 'A short study plan helped me explain why I wanted to switch. I wrote about courses I had already taken, what I wanted to study next, and how the new major fit my career plan.', meta: 'Last term' },
    ],
    votes: 312,
    joined: true,
  },
  {
    id: 'academic-withdrawal',
    tab: 'academic',
    community: 'r/BNBUAcademic',
    title: 'Withdrawal: records, tuition, and advisor steps',
    intro: 'Withdrawal can affect student record, tuition, visa status, and course progress. Students should talk to an advisor or programme office before submitting any form, especially if the decision is related to health, finance, or academic pressure.',
    points: ['Confirm academic and financial impact first so there are no surprises after approval.', 'Save approved forms and email records in case you need proof later.', 'Do not rely on informal advice only because deadlines and consequences can change.'],
    reviews: [
      { name: 'Helen', text: 'Make an advisor appointment before submitting anything. My advisor explained options I did not know, including a lighter study plan and temporary support.', meta: 'Last week' },
      { name: 'Jay', text: 'The form is only one part. The follow-up email matters too because it confirms what has been approved and what still needs action.', meta: 'Year 4' },
    ],
    votes: 129,
    joined: false,
  },
  {
    id: 'academic-add-drop',
    tab: 'academic',
    community: 'r/BNBUAcademic',
    title: 'Add and Drop: avoid timetable and prerequisite problems',
    intro: 'Add and Drop is usually handled through the student system inside the official window. Students should check prerequisites, timetable conflicts, waitlist status, credit limits, and approval messages before assuming a course is confirmed.',
    points: ['Check timetable conflicts before submitting because the system may not solve every clash for you.', 'Watch waitlist status daily during the busy period.', 'Keep backup course choices ready in case the first option stays full.'],
    reviews: [
      { name: 'Jay', text: 'Check timetable clashes before pressing submit. I once added a course that looked open, but the tutorial section clashed with a required lab.', meta: 'Today' },
      { name: 'Nina', text: 'Some courses fill up fast, so decide early. It helps to rank your choices before the system opens instead of deciding while seats disappear.', meta: 'Year 2' },
    ],
    votes: 278,
    joined: true,
  },
  {
    id: 'facility-gym',
    tab: 'facilities',
    community: 'r/BNBUFacilities',
    title: 'Gymnasium guide for new students',
    intro: 'The gymnasium supports indoor sports and fitness activities. Some spaces may require booking during busy periods, and students should bring student ID. It is useful for regular exercise, team sports, and informal student activities after class.',
    points: ['Evenings are usually busier because many students go after lectures.', 'Check booking requirements before going, especially for courts.', 'Bring student ID for entry and check whether special events affect opening hours.'],
    reviews: [
      { name: 'Sam', text: 'Evenings are usually busier, especially after dinner. If you want a quieter session, late morning or early afternoon is usually better.', meta: 'Today' },
      { name: 'Evan', text: 'Badminton courts are popular after class. Try to check booking availability before walking over with your group.', meta: 'Yesterday' },
    ],
    votes: 97,
    joined: false,
  },
  {
    id: 'facility-library',
    tab: 'facilities',
    community: 'r/BNBUFacilities',
    title: 'Library study seats, databases, and quiet floors',
    intro: 'The library provides study seats, books, databases, and quiet spaces. It is one of the best places for focused work and research support, especially when you need academic sources rather than general web pages.',
    points: ['Quiet floors are best for deep work and long reading sessions.', 'Ask librarians for database access help if journal links fail.', 'Avoid peak exam-week hours if possible or book a room early.'],
    reviews: [
      { name: 'Luna', text: 'Database login works better on campus Wi-Fi. If you are off campus, check whether remote access needs an extra login step.', meta: 'Yesterday' },
      { name: 'Oscar', text: 'Book a study room early during finals. Rooms disappear quickly when group projects and exams overlap.', meta: 'Year 3' },
    ],
    votes: 203,
    joined: false,
  },
  {
    id: 'facility-lab',
    tab: 'facilities',
    community: 'r/BNBUFacilities',
    title: 'Computer room access and software tips',
    intro: 'Computer rooms support coursework software and lab work. Students should check room schedules and avoid saving important files only on lab machines, because access can change when a class is using the room.',
    points: ['Some rooms close for scheduled classes, so check notices before going.', 'Save files to cloud storage or your own drive after every session.', 'Report software issues early if a required tool is missing or broken.'],
    reviews: [
      { name: 'Owen', text: 'Some rooms close for classes, check the notice board. I lost time once because the room was reserved for an exam setup.', meta: 'Today' },
      { name: 'Grace', text: 'Bring headphones for online lab tutorials. The room is quiet, but not always silent enough for recorded instructions.', meta: 'Last week' },
    ],
    votes: 116,
    joined: false,
  },
  {
    id: 'career-cv',
    tab: 'career',
    community: 'r/BNBUCareer',
    title: 'CV and interview preparation before recruitment season',
    intro: 'Students should prepare one concise CV, a project portfolio link, and practice interview answers before internship deadlines begin. The strongest applications usually connect coursework, projects, and campus experience to a clear role target.',
    points: ['A one-page CV is enough for most internships if every line has a purpose.', 'Book a mock interview early so you can improve before real deadlines.', 'Keep project outcomes measurable with numbers, tools, or user impact.'],
    reviews: [
      { name: 'Bella', text: 'One-page CV is enough for most internships. My first draft was two pages, and the career advisor helped me remove repeated activities.', meta: 'Today' },
      { name: 'Marco', text: 'Show numbers in project descriptions when possible. Even small metrics, like survey responses or users tested, made my project sound more concrete.', meta: 'Graduate' },
    ],
    votes: 224,
    joined: true,
  },
  {
    id: 'career-internship',
    tab: 'career',
    community: 'r/BNBUCareer',
    title: 'Internship search timeline students can actually follow',
    intro: 'Track deadlines in one sheet, ask seniors about company timelines, and start before midterms make everything crowded. A steady application rhythm works better than sending many rushed applications at the end.',
    points: ['Apply before midterm week so coursework pressure does not block you.', 'Ask seniors about interview format and timeline differences by industry.', 'Keep a simple application tracker with status, deadline, and next step.'],
    reviews: [
      { name: 'Evan', text: 'Start applying before midterm week. After exams begin, it becomes much harder to customize cover letters or prepare for interviews.', meta: 'Yesterday' },
      { name: 'Sophie', text: 'Referrals help, but a clean CV still matters. People can introduce you, but the first screening still depends on your materials.', meta: 'Year 4' },
    ],
    votes: 176,
    joined: false,
  },
  {
    id: 'career-grad',
    tab: 'career',
    community: 'r/BNBUCareer',
    title: 'Graduate study planning: tests, references, and fit',
    intro: 'Graduate study planning should balance programme fit, cost, location, deadlines, and reference preparation. Faculty advice is useful before finalizing choices, especially if the programme expects research direction or writing samples.',
    points: ['Ask referees at least a month early and provide your CV and draft statement.', 'Compare programme fit beyond ranking by looking at curriculum and support.', 'Plan tests and documents together because timelines often overlap.'],
    reviews: [
      { name: 'Grace', text: 'Ask referees at least a month early. I sent my CV, transcript, and a short paragraph about each programme, which made the process smoother.', meta: 'Last week' },
      { name: 'Ryan', text: 'Talk to faculty before choosing a research direction. They can tell you whether a programme title actually matches what you want to study.', meta: 'Alumni' },
    ],
    votes: 142,
    joined: false,
  },
];

export function InformationSection() {
  const [activeTab, setActiveTab] = useState<InfoTab>('courses');
  const [activePostId, setActivePostId] = useState('course-ai');
  const [votes, setVotes] = useState<Record<string, number>>({});
  const [comments, setComments] = useState<Record<string, DiscussionMessage[]>>(() => {
    return posts.reduce<Record<string, DiscussionMessage[]>>((record, post) => {
      record[post.id] = post.reviews;
      return record;
    }, {});
  });
  const [drafts, setDrafts] = useState<Record<string, string>>({});

  const visiblePosts = useMemo(() => posts.filter((post) => post.tab === activeTab), [activeTab]);
  const activePost = posts.find((post) => post.id === activePostId) ?? visiblePosts[0];

  function chooseTab(tab: InfoTab) {
    setActiveTab(tab);
    setActivePostId(posts.find((post) => post.tab === tab)?.id ?? posts[0].id);
  }

  function addComment(postId: string) {
    const text = drafts[postId]?.trim();

    if (!text) {
      return;
    }

    setComments((current) => ({
      ...current,
      [postId]: [{ name: 'You', text, meta: 'Just now' }, ...(current[postId] ?? [])],
    }));
    setDrafts((current) => ({ ...current, [postId]: '' }));
  }

  return (
    <section id="information" className="relative min-h-screen overflow-hidden bg-[#f7f0df] px-5 pb-24 pt-28 md:px-8 lg:pl-80">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_12%_20%,rgba(118,228,247,0.16),transparent_28%),radial-gradient(circle_at_82%_18%,rgba(216,179,101,0.22),transparent_30%)]" />
      <aside className="relative z-10 mb-6 border-[#18202f]/10 bg-white/55 p-5 backdrop-blur-xl lg:fixed lg:bottom-0 lg:left-0 lg:top-20 lg:mb-0 lg:w-80 lg:overflow-y-auto lg:border-r">
        <div className="flex min-h-full flex-col">
          <div>
            <p className="px-4 text-xs font-black uppercase tracking-[0.28em] text-[#18202f]/48">Information</p>
            <h2 className="mt-3 px-4 font-display text-3xl font-black tracking-[-0.04em] text-[#18202f]">Campus Guide</h2>
            <div className="mt-6 grid gap-2">
            {tabs.map((tab) => (
              <button
                key={tab.id}
                type="button"
                onClick={() => chooseTab(tab.id)}
                className={`mb-2 w-full rounded-2xl px-4 py-3 text-left transition ${
                  activeTab === tab.id
                    ? 'bg-white text-[#18202f] shadow-sm'
                    : 'text-[#18202f]/68 hover:bg-white/65'
                }`}
              >
                <span className="block text-base font-black">{tab.label}</span>
                <span className="mt-1 block text-xs leading-5 text-[#18202f]/45">{tab.helper}</span>
              </button>
            ))}
            </div>
          </div>

          <div className="mt-auto rounded-3xl border border-[#18202f]/10 bg-[#fffaf0]/75 p-5">
            <p className="font-display text-3xl font-black text-[#be7c4d]">{visiblePosts.length}</p>
            <p className="mt-1 text-sm font-semibold text-[#18202f]/55">posts in this section</p>
          </div>
        </div>
      </aside>

      <div className="relative z-10 mx-auto max-w-5xl">
          <div className="mb-4 rounded-[2rem] border border-[#18202f]/10 bg-white/60 p-3 backdrop-blur-xl">
            <div className="mx-auto flex max-w-3xl items-center gap-4 rounded-full border border-[#18202f]/10 bg-[linear-gradient(135deg,rgba(255,255,255,0.94),rgba(247,240,223,0.88),rgba(118,228,247,0.14))] px-5 py-3 shadow-[0_12px_40px_rgba(24,32,47,0.06)]">
              <span className="grid size-10 place-items-center rounded-full border border-[#18202f]/10 bg-white/75 text-lg font-black text-[#1d7281]">B</span>
              <input
                aria-label="Search campus information"
                placeholder="Find anything"
                className="min-w-0 flex-1 bg-transparent text-lg font-semibold text-[#18202f] outline-none placeholder:text-[#18202f]/52"
              />
              <button type="button" className="rounded-full bg-[#18202f] px-5 py-2 text-sm font-black uppercase tracking-[0.14em] text-white transition hover:bg-[#be7c4d]">
                Ask
              </button>
            </div>
          </div>

          <div className="grid gap-4">
            {visiblePosts.map((post) => {
              const postComments = comments[post.id] ?? [];
              const postVotes = votes[post.id] ?? post.votes;
              const isActive = activePost.id === post.id;

              return (
                <article
                  key={post.id}
                  className={`rounded-[2rem] border p-5 transition ${
                    isActive
                      ? 'border-[#be7c4d]/35 bg-white/80 shadow-[0_22px_70px_rgba(24,32,47,0.08)]'
                      : 'border-[#18202f]/10 bg-white/55 hover:bg-white/75'
                  }`}
                >
                  <button type="button" onClick={() => setActivePostId(post.id)} className="block w-full text-left">
                    <div className="flex flex-wrap items-center gap-3">
                      <span className="grid size-10 place-items-center rounded-full bg-[#18202f] text-sm font-black text-white">{post.community.slice(2, 4).toUpperCase()}</span>
                      <p className="font-black text-[#18202f]">{post.community}</p>
                      <span className="text-sm font-semibold text-[#18202f]/48">12 hr. ago</span>
                      <span className="ml-auto rounded-full bg-[#174ea6] px-5 py-2 text-sm font-black text-white">{post.joined ? 'Joined' : 'Join'}</span>
                      <span className="text-xl font-black text-[#18202f]/50">...</span>
                    </div>
                    <h3 className="mt-5 font-display text-3xl font-black tracking-[-0.03em] text-[#18202f]">{post.title}</h3>
                    <p className="mt-4 text-lg leading-8 text-[#18202f]/72">{post.intro}</p>
                  </button>

                  {isActive && (
                    <div className="mt-5 grid gap-3">
                      {post.points.map((point) => (
                        <div key={point} className="rounded-2xl bg-[#f7f0df]/80 px-4 py-3 text-sm font-semibold text-[#18202f]/68">
                          {point}
                        </div>
                      ))}
                    </div>
                  )}

                  <div className="mt-5 flex flex-wrap gap-3">
                    <button
                      type="button"
                      onClick={() => setVotes((current) => ({ ...current, [post.id]: postVotes + 1 }))}
                      className="rounded-full bg-[#18202f]/8 px-4 py-2 text-sm font-black text-[#18202f] transition hover:bg-[#18202f]/12"
                    >
                      Upvote {postVotes}
                    </button>
                    <button type="button" className="rounded-full bg-[#18202f]/8 px-4 py-2 text-sm font-black text-[#18202f] transition hover:bg-[#18202f]/12">
                      Share
                    </button>
                  </div>

                  {isActive && (
                    <div className="mt-5 border-t border-[#18202f]/10 pt-5">
                      <div className="grid gap-3">
                        {postComments.map((comment, index) => (
                          <div key={`${comment.name}-${index}`} className="rounded-2xl bg-[#f7f0df]/75 p-4">
                            <div className="flex items-center justify-between gap-3">
                              <p className="font-black text-[#18202f]">{comment.name}</p>
                              {comment.meta && <p className="text-xs text-[#18202f]/42">{comment.meta}</p>}
                            </div>
                            <p className="mt-2 text-sm leading-6 text-[#18202f]/65">{comment.text}</p>
                          </div>
                        ))}
                      </div>
                      <div className="mt-4 flex flex-col gap-3 sm:flex-row">
                        <textarea
                          value={drafts[post.id] ?? ''}
                          onChange={(event) => setDrafts((current) => ({ ...current, [post.id]: event.target.value }))}
                          rows={2}
                          placeholder="Join the discussion..."
                          className="min-h-20 flex-1 resize-none rounded-2xl border border-[#18202f]/10 bg-[#fffaf0] px-4 py-3 text-sm text-[#18202f] outline-none transition placeholder:text-[#18202f]/35 focus:border-[#be7c4d]/45"
                        />
                        <button
                          type="button"
                          onClick={() => addComment(post.id)}
                          className="rounded-2xl bg-[#18202f] px-6 py-3 text-sm font-black uppercase tracking-[0.16em] text-white transition hover:bg-[#be7c4d] sm:self-stretch"
                        >
                          Comment
                        </button>
                      </div>
                    </div>
                  )}
                </article>
              );
            })}
          </div>
      </div>
    </section>
  );
}
