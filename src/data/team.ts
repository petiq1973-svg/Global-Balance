export interface TeamMember {
  id: string;
  name: string;
  role: string;
  bio: string;
}

export interface Office {
  id: string;
  city: string;
  address: string;
  phone: string;
  email: string;
  workingHours: string;
}

export const teamMembers: TeamMember[] = [];

export const offices: Office[] = [
  {
    id: '1',
    city: 'Монтана',
    address: 'булевард Трети Март 78, ет. 0, офис 12',
    phone: '+359886390499',
    email: 'globallbalance@gmail.com',
    workingHours: 'Понеделник–Събота',
  },
];

export const certificates: string[] = [];
