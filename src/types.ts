export type AppointmentSlot = {
  id: string;
  day: string;
  date: string;
  time: string;
  room: string;
  capacity: number;
  joined: number;
};

export type Teacher = {
  id: string;
  name: string;
  department: string;
  title: string;
  focus: string;
  avatar: string;
  photo: string;
  accent: string;
  topics: string[];
  availableSlots: AppointmentSlot[];
};
