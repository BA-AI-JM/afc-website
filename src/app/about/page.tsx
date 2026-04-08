import Image from 'next/image';
import Link from 'next/link';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'About | Almighty Fighting Championship',
  description: 'The story of Almighty Fighting Championship — from Leeds Town Hall in 2016 to Yorkshire\'s biggest MMA promotion.',
};

const venues = [
  { name: 'TESTBED Leeds', location: 'Leeds', events: 'AFC 40, 42 (current home)', image: '/images/DN4_0944.jpg' },
  { name: 'Deeside Leisure Centre', location: 'Deeside, Wales', events: 'AFC 41', image: '/images/AlmightyMarchDeeside-493.jpg' },
  { name: 'Coventry Sports Connection', location: 'Coventry', events: 'AFC 36, 39', image: '/images/DN4_3688.jpg' },
  { name: 'York Barbican', location: 'York', events: 'AFC 9, 10, 14', image: '/images/DN4_3372.jpg' },
  { name: 'O2 Academy Leeds', location: 'Leeds', events: 'AFC 3', image: '/images/Almighty-August2025--274.jpg' },
  { name: 'Leeds Town Hall', location: 'Leeds', events: 'AFC 1 (founding event)', image: '/images/Almighty-August2025--134.jpg' },
];

const timeline = [
  { year: '2016', event: 'AFC 1 at Leeds Town Hall. The beginning.' },
  { year: '2017', event: 'Expanded to O2 Academy Leeds. Multiple events per year.' },
  { year: '2018', event: 'York Barbican becomes a regular venue. Fighter roster grows past 200.' },
  { year: '2019', event: 'Events across Yorkshire, Liverpool, and Newcastle.' },
  { year: '2020', event: 'Pandemic pause. The fighting spirit stays alive.' },
  { year: '2021', event: 'Return to live events. The comeback.' },
  { year: '2022', event: 'National expansion begins. Coventry added to the circuit.' },
  { year: '2023', event: 'Fighter roster passes 700. Described as "the most exciting amateur fight show in the country."' },
  { year: '2024', event: '6 events in one year. Barnsley, Coventry, and Leeds. Heavyweight and Flyweight titles contested.' },
  { year: '2025', event: 'Multiple shows at TESTBED Leeds. New ownership takes the reins — the next chapter begins.' },
];

export default function AboutPage() {
  return (
    <>
      {/* Hero */}
      <section className="relative h-72 sm:h-96 flex items-end overflow-hidden">
        <Image src="/images/Almighty-August2025--186.jpg" alt="AFC cage wrestling" fill className="object-cover" priority />
        <div className="gradient-overlay-full absolute inset-0" />
        <div className="relative z-10 section-padding pb-12">
          <p className="text-afc-blue font-semibold uppercase tracking-[0.3em] text-sm mb-3">Est. 2016</p>
          <h1 className="heading-xl text-white">About AFC</h1>
        </div>
      </section>

      {/* Story */}
      <section className="py-20">
        <div className="section-padding">
          <div className="max-w-3xl">
            <h2 className="heading-lg text-white mb-8">Yorkshire&apos;s Best MMA Shows</h2>
            <div className="space-y-6 text-afc-text text-lg leading-relaxed">
              <p>
                Almighty Fighting Championship started with one event at Leeds Town Hall on April 2nd, 2016. The idea was simple: give fighters in the North of England a proper platform to compete — one that treated amateur bouts with the same respect as professional ones.
              </p>
              <p>
                Ten years and 43+ events later, AFC has grown into one of the UK&apos;s largest regional MMA promotions. Cards regularly feature up to 30 fights per event, mixing professional and amateur bouts across every weight class. Nearly 1,000 fighters have stepped into the AFC cage.
              </p>
              <p>
                From Leeds Town Hall to the O2 Academy, from York Barbican to Coventry Sports Connection, from Deeside Leisure Centre to TESTBED Leeds — AFC has brought world-class MMA events to cities across the UK. And we&apos;re just getting started.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Timeline */}
      <section className="py-20 bg-afc-dark border-y border-afc-border">
        <div className="section-padding">
          <h2 className="heading-lg text-white mb-12 text-center">The Journey</h2>

          <div className="max-w-2xl mx-auto">
            {timeline.map((item, i) => (
              <div key={item.year} className="flex gap-6 mb-8 last:mb-0">
                <div className="flex flex-col items-center">
                  <div className="w-3 h-3 rounded-full bg-afc-blue shrink-0 mt-2" />
                  {i < timeline.length - 1 && <div className="w-px flex-1 bg-afc-border mt-2" />}
                </div>
                <div className="pb-8">
                  <p className="text-afc-blue font-bold font-[var(--font-heading)] text-xl">{item.year}</p>
                  <p className="text-afc-text mt-1">{item.event}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Venues */}
      <section className="py-20">
        <div className="section-padding">
          <h2 className="heading-lg text-white mb-12">Our Venues</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {venues.map(venue => (
              <div key={venue.name} className="card group">
                <div className="relative h-44 overflow-hidden">
                  <Image
                    src={venue.image}
                    alt={venue.name}
                    fill
                    className="object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                  <div className="gradient-overlay absolute inset-0" />
                </div>
                <div className="p-5">
                  <h3 className="text-white font-semibold">{venue.name}</h3>
                  <p className="text-afc-muted text-sm">{venue.location}</p>
                  <p className="text-afc-blue text-xs mt-2">{venue.events}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 text-center">
        <div className="section-padding">
          <h3 className="heading-md text-white mb-4">Be Part of the Story</h3>
          <p className="text-afc-muted max-w-lg mx-auto mb-8">
            Whether you&apos;re a fighter, a fan, or a sponsor — there&apos;s a place for you in the AFC family.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link href="/contact" className="btn-primary">Get In Touch</Link>
            <Link href="/events" className="btn-outline">View Events</Link>
          </div>
        </div>
      </section>
    </>
  );
}
