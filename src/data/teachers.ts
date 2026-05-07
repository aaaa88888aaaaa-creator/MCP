import type { Teacher } from '../types';

function portrait(initials: string, accent: string, suit: string) {
  const svg = `
    <svg xmlns="http://www.w3.org/2000/svg" width="640" height="760" viewBox="0 0 640 760">
      <defs>
        <linearGradient id="bg" x1="0" y1="0" x2="1" y2="1">
          <stop offset="0" stop-color="${accent}" stop-opacity="0.72"/>
          <stop offset="0.48" stop-color="#fff6df"/>
          <stop offset="1" stop-color="#76e4f7" stop-opacity="0.42"/>
        </linearGradient>
        <linearGradient id="suit" x1="0" y1="0" x2="1" y2="1">
          <stop offset="0" stop-color="${suit}"/>
          <stop offset="1" stop-color="#111827"/>
        </linearGradient>
      </defs>
      <rect width="640" height="760" rx="56" fill="url(#bg)"/>
      <circle cx="320" cy="238" r="112" fill="#f1c9a5"/>
      <path d="M204 420c22-78 64-118 116-118s94 40 116 118l52 238H152l52-238z" fill="url(#suit)"/>
      <path d="M258 388h124l-38 92h-48l-38-92z" fill="#fffaf0"/>
      <path d="M302 458h36l18 150h-72l18-150z" fill="${accent}"/>
      <rect x="238" y="222" width="164" height="18" rx="9" fill="#111827" opacity="0.18"/>
      <circle cx="280" cy="254" r="10" fill="#111827" opacity="0.54"/>
      <circle cx="360" cy="254" r="10" fill="#111827" opacity="0.54"/>
      <path d="M278 306c30 24 58 24 84 0" stroke="#7a4d36" stroke-width="12" stroke-linecap="round" fill="none"/>
      <text x="320" y="704" text-anchor="middle" font-family="Arial, sans-serif" font-size="58" font-weight="800" fill="#18202f" opacity="0.82">${initials}</text>
    </svg>
  `;

  return `data:image/svg+xml;utf8,${encodeURIComponent(svg)}`;
}

export const teachers: Teacher[] = [
  {
    id: 't-001',
    name: 'Dr. Amelia Chen',
    department: 'Computer Science',
    title: 'Associate Professor',
    focus: 'Human-centered AI and intelligent learning systems',
    avatar: 'AC',
    photo: portrait('AC', '#76e4f7', '#26344f'),
    accent: '#76e4f7',
    topics: ['AI tools', 'Course planning', 'Project feedback', 'Major transfer'],
    availableSlots: [
      { id: 'ac-1', day: 'Monday', date: 'Apr 20', time: '09:30 - 10:00', room: 'MCP Studio A', capacity: 8, joined: 3 },
      { id: 'ac-2', day: 'Wednesday', date: 'Apr 22', time: '14:00 - 14:30', room: 'MCP Studio A', capacity: 6, joined: 6 },
      { id: 'ac-3', day: 'Friday', date: 'Apr 24', time: '11:00 - 11:30', room: 'Online', capacity: 10, joined: 5 },
    ],
  },
  {
    id: 't-002',
    name: 'Prof. Marcus Hale',
    department: 'Business',
    title: 'Program Director',
    focus: 'Strategic management and venture design',
    avatar: 'MH',
    photo: portrait('MH', '#d8b365', '#1f2937'),
    accent: '#d8b365',
    topics: ['Career planning', 'Course planning', 'Startup idea', 'Presentation'],
    availableSlots: [
      { id: 'mh-1', day: 'Tuesday', date: 'Apr 21', time: '10:00 - 10:30', room: 'Innovation Lounge', capacity: 8, joined: 4 },
      { id: 'mh-2', day: 'Thursday', date: 'Apr 23', time: '15:30 - 16:00', room: 'Innovation Lounge', capacity: 8, joined: 8 },
      { id: 'mh-3', day: 'Friday', date: 'Apr 24', time: '16:20 - 16:50', room: 'Online', capacity: 12, joined: 7 },
    ],
  },
  {
    id: 't-003',
    name: 'Dr. Sofia Laurent',
    department: 'Media Arts',
    title: 'Senior Lecturer',
    focus: 'Digital storytelling, immersive media, and visual culture',
    avatar: 'SL',
    photo: portrait('SL', '#be7c4d', '#3b2f2f'),
    accent: '#be7c4d',
    topics: ['Portfolio feedback', 'Project feedback', 'Presentation'],
    availableSlots: [
      { id: 'sl-1', day: 'Monday', date: 'Apr 20', time: '13:00 - 13:30', room: 'Media Lab 2', capacity: 6, joined: 2 },
      { id: 'sl-2', day: 'Wednesday', date: 'Apr 22', time: '09:00 - 09:30', room: 'Media Lab 2', capacity: 6, joined: 5 },
      { id: 'sl-3', day: 'Thursday', date: 'Apr 23', time: '11:20 - 11:50', room: 'Online', capacity: 10, joined: 10 },
    ],
  },
  {
    id: 't-004',
    name: 'Prof. Nathan Brooks',
    department: 'Mathematics',
    title: 'Professor',
    focus: 'Applied optimization and quantitative modeling',
    avatar: 'NB',
    photo: portrait('NB', '#a7f3d0', '#233876'),
    accent: '#a7f3d0',
    topics: ['Course planning', 'Major transfer', 'Project feedback'],
    availableSlots: [
      { id: 'nb-1', day: 'Tuesday', date: 'Apr 21', time: '08:40 - 09:10', room: 'North Hall 508', capacity: 8, joined: 1 },
      { id: 'nb-2', day: 'Wednesday', date: 'Apr 22', time: '16:00 - 16:30', room: 'North Hall 508', capacity: 6, joined: 6 },
      { id: 'nb-3', day: 'Friday', date: 'Apr 24', time: '10:00 - 10:30', room: 'Online', capacity: 10, joined: 4 },
    ],
  },
  {
    id: 't-005',
    name: 'Dr. Priya Raman',
    department: 'Psychology',
    title: 'Assistant Professor',
    focus: 'Learning behavior, student wellbeing, and motivation',
    avatar: 'PR',
    photo: portrait('PR', '#f0abfc', '#3b2756'),
    accent: '#f0abfc',
    topics: ['Wellbeing', 'Course planning', 'Presentation'],
    availableSlots: [
      { id: 'pr-1', day: 'Monday', date: 'Apr 20', time: '15:00 - 15:30', room: 'Wellbeing Suite', capacity: 8, joined: 5 },
      { id: 'pr-2', day: 'Thursday', date: 'Apr 23', time: '09:30 - 10:00', room: 'Wellbeing Suite', capacity: 8, joined: 2 },
      { id: 'pr-3', day: 'Friday', date: 'Apr 24', time: '13:40 - 14:10', room: 'Online', capacity: 10, joined: 10 },
    ],
  },
  {
    id: 't-006',
    name: 'Prof. Elias Novak',
    department: 'Engineering',
    title: 'Lab Chair',
    focus: 'Sustainable systems and design prototyping',
    avatar: 'EN',
    photo: portrait('EN', '#fda4af', '#2f3b35'),
    accent: '#fda4af',
    topics: ['Career planning', 'Project feedback', 'Major transfer', 'Sustainability'],
    availableSlots: [
      { id: 'en-1', day: 'Tuesday', date: 'Apr 21', time: '13:30 - 14:00', room: 'Prototype Bay', capacity: 6, joined: 3 },
      { id: 'en-2', day: 'Wednesday', date: 'Apr 22', time: '10:40 - 11:10', room: 'Prototype Bay', capacity: 6, joined: 6 },
      { id: 'en-3', day: 'Thursday', date: 'Apr 23', time: '16:10 - 16:40', room: 'Online', capacity: 10, joined: 6 },
    ],
  },
  {
    id: 't-007',
    name: 'Dr. Helena Stone',
    department: 'Language Studies',
    title: 'Senior Fellow',
    focus: 'Academic communication and multilingual research writing',
    avatar: 'HS',
    photo: portrait('HS', '#fde68a', '#3d3528'),
    accent: '#fde68a',
    topics: ['Writing support', 'Presentation', 'Course planning'],
    availableSlots: [
      { id: 'hs-1', day: 'Monday', date: 'Apr 20', time: '10:40 - 11:10', room: 'Language Forum', capacity: 8, joined: 8 },
      { id: 'hs-2', day: 'Tuesday', date: 'Apr 21', time: '15:00 - 15:30', room: 'Language Forum', capacity: 8, joined: 4 },
      { id: 'hs-3', day: 'Thursday', date: 'Apr 23', time: '13:00 - 13:30', room: 'Online', capacity: 10, joined: 3 },
    ],
  },
  {
    id: 't-008',
    name: 'Prof. Isaac Morgan',
    department: 'Design',
    title: 'Creative Director',
    focus: 'Service design, brand systems, and portfolio critique',
    avatar: 'IM',
    photo: portrait('IM', '#93c5fd', '#1e3a5f'),
    accent: '#93c5fd',
    topics: ['Portfolio feedback', 'Project feedback', 'Career planning'],
    availableSlots: [
      { id: 'im-1', day: 'Wednesday', date: 'Apr 22', time: '13:20 - 13:50', room: 'Design Crit Room', capacity: 6, joined: 2 },
      { id: 'im-2', day: 'Thursday', date: 'Apr 23', time: '10:30 - 11:00', room: 'Design Crit Room', capacity: 6, joined: 6 },
      { id: 'im-3', day: 'Friday', date: 'Apr 24', time: '15:20 - 15:50', room: 'Online', capacity: 10, joined: 4 },
    ],
  },
];

export const departments = ['All Subjects', ...Array.from(new Set(teachers.map((teacher) => teacher.department)))];
export const consultationTopics = [
  'All Topics',
  'Course planning',
  'Major transfer',
  'Project feedback',
  'Career planning',
  'Portfolio feedback',
  'Presentation',
  'Wellbeing',
  'Writing support',
  'AI tools',
  'Startup idea',
  'Sustainability',
];
export const days = ['All Days', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday'];
