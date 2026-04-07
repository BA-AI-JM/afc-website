export interface Fight {
  weightClass: string;
  fighter1: string;
  fighter2: string;
  result?: string;
  method?: string;
  round?: number;
  time?: string;
  isTitle?: boolean;
}

export interface Event {
  slug: string;
  number: number;
  name: string;
  date: string;
  venue: string;
  location: string;
  image: string;
  fightCount: number;
  isUpcoming: boolean;
  ticketUrl?: string;
  fights?: Fight[];
  description?: string;
}

export const events: Event[] = [
  {
    slug: 'afc-42',
    number: 42,
    name: 'AFC 42',
    date: '2025-08-02',
    venue: 'TESTBED Leeds',
    location: 'Leeds',
    image: '/images/Almighty-August2025--343.jpg',
    fightCount: 22,
    isUpcoming: false,
    description: 'Catchweight title main event — Stevie Lee def. Lucas Carvalho via Split Decision.',
    fights: [
      { weightClass: 'Catchweight 160lbs', fighter1: 'Stevie Lee', fighter2: 'Lucas Carvalho', result: 'Stevie Lee wins', method: 'Split Decision', round: 5, isTitle: true },
      { weightClass: 'Lightweight', fighter1: 'Fighter A', fighter2: 'Fighter B', result: 'TBD', method: 'Decision' },
    ],
  },
  {
    slug: 'afc-41',
    number: 41,
    name: 'AFC 41',
    date: '2025-05-31',
    venue: 'Deeside Leisure Centre',
    location: 'Deeside, Wales',
    image: '/images/AlmightyMarchDeeside-493.jpg',
    fightCount: 18,
    isUpcoming: false,
  },
  {
    slug: 'afc-40',
    number: 40,
    name: 'AFC 40',
    date: '2025-04-12',
    venue: 'TESTBED Leeds',
    location: 'Leeds',
    image: '/images/AlmightyMarchDeeside-501.jpg',
    fightCount: 17,
    isUpcoming: false,
  },
  {
    slug: 'afc-39',
    number: 39,
    name: 'AFC 39',
    date: '2024-12-14',
    venue: 'Coventry Sports Connection',
    location: 'Coventry',
    image: '/images/DN4_3688.jpg',
    fightCount: 26,
    isUpcoming: false,
    description: '26 fights on the card — one of the biggest AFC events to date.',
  },
  {
    slug: 'afc-38',
    number: 38,
    name: 'AFC 38',
    date: '2024-09-28',
    venue: 'Barnsley Metrodome',
    location: 'Barnsley',
    image: '/images/DN4_0944.jpg',
    fightCount: 20,
    isUpcoming: false,
    description: 'Heavyweight title fight — Josh Carrick def. AJ Sturge via unanimous decision.',
    fights: [
      { weightClass: 'Heavyweight', fighter1: 'Josh Carrick', fighter2: 'AJ Sturge', result: 'Josh Carrick wins', method: 'Unanimous Decision', round: 5, isTitle: true },
      { weightClass: 'Flyweight', fighter1: 'Shahadot Choudhury', fighter2: 'Shahad Younis', result: 'Shahadot Choudhury wins', method: 'Unanimous Decision', round: 5, isTitle: true },
    ],
  },
  {
    slug: 'afc-36',
    number: 36,
    name: 'AFC 36',
    date: '2024-05-18',
    venue: 'Coventry Sports Connection',
    location: 'Coventry',
    image: '/images/Copy of DN4_3642.jpg',
    fightCount: 22,
    isUpcoming: false,
  },
  {
    slug: 'afc-14',
    number: 14,
    name: 'AFC 14',
    date: '2019-06-15',
    venue: 'York Barbican',
    location: 'York',
    image: '/images/DN4_3372.jpg',
    fightCount: 20,
    isUpcoming: false,
  },
  {
    slug: 'afc-1',
    number: 1,
    name: 'AFC 1',
    date: '2016-04-02',
    venue: 'Leeds Town Hall',
    location: 'Leeds',
    image: '/images/cover.jpg',
    fightCount: 12,
    isUpcoming: false,
    description: 'Where it all began. The first ever Almighty Fighting Championship event at Leeds Town Hall.',
  },
];

export const upcomingEvents = events.filter(e => e.isUpcoming);
export const pastEvents = events.filter(e => !e.isUpcoming);
