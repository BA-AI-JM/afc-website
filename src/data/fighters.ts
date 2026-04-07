export interface Fighter {
  slug: string;
  name: string;
  nickname?: string;
  weightClass: string;
  record: { wins: number; losses: number; draws: number };
  gym?: string;
  location?: string;
  isChampion?: boolean;
  image?: string;
  afcAppearances: string[];
}

export const fighters: Fighter[] = [
  {
    slug: 'josh-carrick',
    name: 'Josh Carrick',
    weightClass: 'Heavyweight',
    record: { wins: 5, losses: 1, draws: 0 },
    location: 'Yorkshire',
    isChampion: true,
    image: '/images/Almighty-August2025--507.jpg',
    afcAppearances: ['AFC 38'],
  },
  {
    slug: 'lucas-carvalho',
    name: 'Lucas Carvalho',
    weightClass: 'Catchweight',
    record: { wins: 8, losses: 2, draws: 0 },
    location: 'Leeds',
    isChampion: true,
    image: '/images/Almighty-August2025--505.jpg',
    afcAppearances: ['AFC 42'],
  },
  {
    slug: 'shahadot-choudhury',
    name: 'Shahadot Choudhury',
    weightClass: 'Flyweight',
    record: { wins: 4, losses: 0, draws: 0 },
    location: 'UK',
    isChampion: true,
    image: '/images/Almighty-August2025--343.jpg',
    afcAppearances: ['AFC 38'],
  },
  {
    slug: 'stevie-lee',
    name: 'Stevie Lee',
    weightClass: 'Catchweight',
    record: { wins: 6, losses: 3, draws: 0 },
    location: 'UK',
    afcAppearances: ['AFC 42'],
  },
  {
    slug: 'aj-sturge',
    name: 'AJ Sturge',
    weightClass: 'Heavyweight',
    record: { wins: 3, losses: 2, draws: 0 },
    location: 'UK',
    afcAppearances: ['AFC 38'],
  },
  {
    slug: 'shahad-younis',
    name: 'Shahad Younis',
    weightClass: 'Flyweight',
    record: { wins: 3, losses: 1, draws: 0 },
    location: 'UK',
    afcAppearances: ['AFC 38'],
  },
];
