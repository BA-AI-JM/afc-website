import Image from 'next/image';
import { fighters } from '@/data/fighters';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Fighters | Almighty Fighting Championship',
  description: 'AFC fighter roster — champions, records, and weight classes. 973+ fighters have competed across 42+ events since 2016.',
};

export default function FightersPage() {
  const champFighters = fighters.filter(f => f.isChampion);
  const otherFighters = fighters.filter(f => !f.isChampion);

  return (
    <>
      {/* Hero */}
      <section className="relative h-72 sm:h-96 flex items-end overflow-hidden">
        <Image src="/images/Almighty-August2025--116.jpg" alt="AFC Fighters" fill className="object-cover" priority />
        <div className="gradient-overlay-full absolute inset-0" />
        <div className="relative z-10 section-padding pb-12">
          <p className="text-afc-blue font-semibold uppercase tracking-[0.3em] text-sm mb-3">Fighter Roster</p>
          <h1 className="heading-xl text-white">Fighters</h1>
          <p className="text-afc-muted text-lg mt-3">973+ fighters have competed in AFC events since 2016.</p>
        </div>
      </section>

      {/* Champions */}
      <section className="py-20">
        <div className="section-padding">
          <h2 className="heading-lg text-white mb-10">Champions</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {champFighters.map(fighter => (
              <div key={fighter.slug} className="card group">
                <div className="relative h-72 overflow-hidden">
                  {fighter.image ? (
                    <Image
                      src={fighter.image}
                      alt={fighter.name}
                      fill
                      className="object-cover transition-transform duration-500 group-hover:scale-105"
                    />
                  ) : (
                    <div className="w-full h-full bg-afc-dark flex items-center justify-center">
                      <span className="text-afc-muted text-6xl font-bold font-[var(--font-heading)]">{fighter.name[0]}</span>
                    </div>
                  )}
                  <div className="gradient-overlay absolute inset-0" />
                  <div className="absolute top-4 right-4">
                    <span className="bg-afc-blue text-white text-xs font-bold uppercase tracking-wider px-3 py-1 rounded-sm flex items-center gap-1">
                      <svg className="w-3 h-3" fill="currentColor" viewBox="0 0 20 20">
                        <path d="M10 1l2.39 4.84 5.34.78-3.87 3.77.91 5.33L10 13.28l-4.77 2.44.91-5.33-3.87-3.77 5.34-.78L10 1z" />
                      </svg>
                      Champion
                    </span>
                  </div>
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-bold text-white font-[var(--font-heading)] uppercase">{fighter.name}</h3>
                  {fighter.nickname && <p className="text-afc-blue text-sm">&quot;{fighter.nickname}&quot;</p>}
                  <div className="flex items-center gap-4 mt-3 text-sm">
                    <span className="text-afc-muted">{fighter.weightClass}</span>
                    <span className="text-white font-semibold">
                      {fighter.record.wins}-{fighter.record.losses}-{fighter.record.draws}
                    </span>
                  </div>
                  {fighter.location && <p className="text-afc-muted text-sm mt-1">{fighter.location}</p>}
                  <div className="mt-3 flex flex-wrap gap-1">
                    {fighter.afcAppearances.map(app => (
                      <span key={app} className="text-xs bg-afc-dark text-afc-muted px-2 py-0.5 rounded-sm">{app}</span>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* All Fighters */}
      <section className="py-16">
        <div className="section-padding">
          <h2 className="heading-lg text-white mb-10">All Fighters</h2>

          <div className="card overflow-hidden">
            <table className="w-full">
              <thead>
                <tr className="border-b border-afc-border text-left">
                  <th className="px-6 py-4 text-afc-muted text-xs uppercase tracking-wider font-semibold">Fighter</th>
                  <th className="px-6 py-4 text-afc-muted text-xs uppercase tracking-wider font-semibold hidden sm:table-cell">Weight Class</th>
                  <th className="px-6 py-4 text-afc-muted text-xs uppercase tracking-wider font-semibold">Record</th>
                  <th className="px-6 py-4 text-afc-muted text-xs uppercase tracking-wider font-semibold hidden md:table-cell">Location</th>
                  <th className="px-6 py-4 text-afc-muted text-xs uppercase tracking-wider font-semibold hidden lg:table-cell">AFC Events</th>
                </tr>
              </thead>
              <tbody>
                {[...champFighters, ...otherFighters].map(fighter => (
                  <tr key={fighter.slug} className="border-b border-afc-border/50 hover:bg-afc-dark/50 transition-colors">
                    <td className="px-6 py-4">
                      <div className="flex items-center gap-3">
                        <span className="text-white font-semibold">{fighter.name}</span>
                        {fighter.isChampion && (
                          <span className="bg-afc-blue/20 text-afc-blue text-[10px] font-bold uppercase tracking-wider px-2 py-0.5 rounded-sm">
                            Champ
                          </span>
                        )}
                      </div>
                    </td>
                    <td className="px-6 py-4 text-afc-muted text-sm hidden sm:table-cell">{fighter.weightClass}</td>
                    <td className="px-6 py-4 text-white font-semibold text-sm">
                      {fighter.record.wins}-{fighter.record.losses}-{fighter.record.draws}
                    </td>
                    <td className="px-6 py-4 text-afc-muted text-sm hidden md:table-cell">{fighter.location || '—'}</td>
                    <td className="px-6 py-4 hidden lg:table-cell">
                      <div className="flex flex-wrap gap-1">
                        {fighter.afcAppearances.map(app => (
                          <span key={app} className="text-xs bg-afc-dark text-afc-muted px-2 py-0.5 rounded-sm">{app}</span>
                        ))}
                      </div>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          <div className="mt-8 card p-8 text-center">
            <p className="text-afc-muted">
              This is a sample of the AFC fighter roster. The full database contains <span className="text-white font-semibold">973+ fighters</span> across all 42+ events.
            </p>
            <p className="text-afc-muted text-sm mt-2">
              Historical records available via{' '}
              <a href="https://www.tapology.com/fightcenter/promotions/1646-almighty-fighting-championship-afc" target="_blank" rel="noopener noreferrer" className="text-afc-blue hover:underline">
                Tapology
              </a>{' '}
              and{' '}
              <a href="https://www.sherdog.com/organizations/Almighty-Fighting-Championship-10877" target="_blank" rel="noopener noreferrer" className="text-afc-blue hover:underline">
                Sherdog
              </a>.
            </p>
          </div>
        </div>
      </section>
    </>
  );
}
