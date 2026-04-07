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
    division: 'Heavyweight',
    weightClass: '265 lbs',
    champion: 'Josh Carrick',
    wonAt: 'AFC 38',
    wonDate: '2024-09-28',
    method: 'def. AJ Sturge via Unanimous Decision',
    defences: 0,
    // TODO: replace with actual Josh Carrick photo
  },
  {
    division: 'Catchweight',
    weightClass: '160 lbs',
    champion: 'Stevie Lee',
    wonAt: 'AFC 42',
    wonDate: '2025-08-02',
    method: 'def. Lucas Carvalho via Split Decision',
    defences: 0,
    // TODO: replace with actual Stevie Lee photo
  },
  {
    division: 'Flyweight',
    weightClass: '125 lbs',
    champion: 'Shahadot Choudhury',
    wonAt: 'AFC 38',
    wonDate: '2024-09-28',
    method: 'def. Shahad Younis via Unanimous Decision',
    defences: 0,
    // TODO: replace with actual Shahadot Choudhury photo
  },
];
