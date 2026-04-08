export interface Champion {
  division: string;
  weightClass: string;
  champion: string;
  record?: string;
  wonAt: string;
  wonDate: string;
  method: string;
  defences: number;
  image?: string;
}

export const champions: Champion[] = [
  {
    division: 'Flyweight',
    weightClass: '125 lbs',
    champion: 'Raushan Sandhu',
    wonAt: 'AFC 40',
    wonDate: '2025-04-12',
    method: 'def. Akeem Bhatti via Submission (Triangle Choke)',
    defences: 0,
    image: '/images/raushan-sandhu-champ.jpg',
  },
  {
    division: 'Featherweight',
    weightClass: '145 lbs',
    champion: 'Mickey Leithner',
    wonAt: 'AFC 40',
    wonDate: '2025-04-12',
    method: 'def. Lewis Mackenzie via Unanimous Decision',
    defences: 0,
    image: '/images/mickey-leithner-champ.jpg',
  },
  {
    division: 'Catchweight',
    weightClass: '160 lbs',
    champion: 'Stevie Lee',
    wonAt: 'AFC 42',
    wonDate: '2025-08-02',
    method: 'def. Lucas Carvalho via Split Decision',
    defences: 0,
    image: '/images/Almighty-August2025--507.jpg',
  },
];
