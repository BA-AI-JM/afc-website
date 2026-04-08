import Image from 'next/image';
import { champions } from '@/data/championships';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Championships | Almighty Fighting Championship',
  description: 'AFC title holders across all weight divisions. Current champions, title history, and defence records.',
};

export default function ChampionshipsPage() {
  return (
    <>
      {/* Hero */}
      <section className="relative h-72 sm:h-96 flex items-end overflow-hidden">
        <Image src="/images/Almighty-August2025--507.jpg" alt="AFC Championship" fill className="object-cover object-top" priority />
        <div className="gradient-overlay-full absolute inset-0" />
        <div className="relative z-10 section-padding pb-12">
          <p className="text-afc-blue font-semibold uppercase tracking-[0.3em] text-sm mb-3">Title Holders</p>
          <h1 className="heading-xl text-white">Championships</h1>
        </div>
      </section>

      {/* Current Champions */}
      <section className="py-20">
        <div className="section-padding">
          <h2 className="heading-lg text-white mb-4">Current Champions</h2>
          <p className="text-afc-muted text-lg mb-12 max-w-2xl">
            Championship bouts are scheduled for 5 x 3-minute rounds. Titles are contested at AFC events across the UK.
          </p>

          <div className="space-y-8">
            {champions.map((champ, i) => (
              <div key={champ.division} className={`card flex flex-col ${i % 2 === 0 ? 'lg:flex-row' : 'lg:flex-row-reverse'} overflow-hidden`}>
                <div className="relative w-full lg:w-1/2 h-72 lg:h-auto shrink-0">
                  <Image
                    src={champ.image || '/images/cover.jpg'}
                    alt={champ.champion}
                    fill
                    className="object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-r from-afc-card/60 to-transparent lg:hidden" />
                </div>
                <div className="p-8 lg:p-12 flex flex-col justify-center flex-1">
                  <div className="flex items-center gap-3 mb-4">
                    <svg className="w-6 h-6 text-afc-blue" fill="currentColor" viewBox="0 0 20 20">
                      <path d="M10 1l2.39 4.84 5.34.78-3.87 3.77.91 5.33L10 13.28l-4.77 2.44.91-5.33-3.87-3.77 5.34-.78L10 1z" />
                    </svg>
                    <span className="text-afc-blue font-bold uppercase tracking-[0.2em] text-sm">{champ.division} Championship</span>
                  </div>
                  <h3 className="heading-lg text-white mb-2">{champ.champion}</h3>
                  <p className="text-afc-muted text-lg mb-6">{champ.weightClass}</p>

                  <div className="grid grid-cols-2 gap-6 mb-6">
                    <div>
                      <p className="text-afc-muted text-xs uppercase tracking-wider mb-1">Won At</p>
                      <p className="text-white font-semibold">{champ.wonAt}</p>
                    </div>
                    <div>
                      <p className="text-afc-muted text-xs uppercase tracking-wider mb-1">Date</p>
                      <p className="text-white font-semibold">
                        {new Date(champ.wonDate).toLocaleDateString('en-GB', { day: 'numeric', month: 'long', year: 'numeric' })}
                      </p>
                    </div>
                    <div className="col-span-2">
                      <p className="text-afc-muted text-xs uppercase tracking-wider mb-1">Result</p>
                      <p className="text-white font-semibold">{champ.method}</p>
                    </div>
                  </div>

                  <div className="flex items-center gap-2">
                    <span className="text-afc-muted text-sm">Title Defences:</span>
                    <span className="text-white font-bold">{champ.defences}</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Weight Classes */}
      <section className="py-16 bg-afc-dark border-y border-afc-border">
        <div className="section-padding">
          <h2 className="heading-md text-white mb-8 text-center">AFC Weight Divisions</h2>
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-4 max-w-4xl mx-auto">
            {[
              { name: 'Flyweight', weight: '125 lbs' },
              { name: 'Bantamweight', weight: '135 lbs' },
              { name: 'Featherweight', weight: '145 lbs' },
              { name: 'Lightweight', weight: '155 lbs' },
              { name: 'Welterweight', weight: '170 lbs' },
              { name: 'Middleweight', weight: '185 lbs' },
              { name: 'Light Heavyweight', weight: '205 lbs' },
              { name: 'Heavyweight', weight: '265 lbs' },
              { name: 'Catchweight', weight: 'Varies' },
            ].map(div => (
              <div key={div.name} className="card p-4 text-center">
                <p className="text-white text-sm font-semibold">{div.name}</p>
                <p className="text-afc-muted text-xs mt-1">{div.weight}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
