import Image from 'next/image';
import Link from 'next/link';
import CountdownTimer from '@/components/CountdownTimer';
import { events, upcomingEvents, pastEvents } from '@/data/events';
import { champions } from '@/data/championships';

const nextEvent = upcomingEvents[0];

const galleryImages = [
  { src: '/images/Almighty-August2025--343.jpg', alt: 'AFC cage action' },
  { src: '/images/Almighty-August2025--184.jpg', alt: 'AFC head kick' },
  { src: '/images/AlmightyMarchDeeside-493.jpg', alt: 'AFC Deeside event' },
  { src: '/images/Almighty-August2025--274.jpg', alt: 'AFC striking exchange' },
  { src: '/images/Almighty-August2025--507.jpg', alt: 'AFC champion' },
  { src: '/images/Almighty-August2025--116.jpg', alt: 'AFC victory celebration' },
  { src: '/images/AlmightyMarchDeeside-501.jpg', alt: 'AFC fight night' },
  { src: '/images/Almighty-August2025--80.jpg', alt: 'AFC hand raise' },
  { src: '/images/Almighty-August2025--505.jpg', alt: 'AFC victory' },
];

export default function Home() {
  return (
    <>
      {/* ========== HERO ========== */}
      <section className="relative h-screen min-h-[700px] flex items-center justify-center overflow-hidden">
        <Image
          src="/images/DN4_3372.jpg"
          alt="Almighty Fighting Championship arena"
          fill
          className="object-cover"
          priority
          quality={85}
        />
        <div className="gradient-overlay-full absolute inset-0" />

        <div className="relative z-10 text-center px-4 max-w-4xl mx-auto">
          <Image
            src="/logos/AFC-WHITE.png"
            alt="AFC"
            width={300}
            height={85}
            className="mx-auto mb-8 w-64 sm:w-80 h-auto"
            priority
          />
          <p className="text-afc-blue font-semibold uppercase tracking-[0.3em] text-sm sm:text-base mb-4">
            Yorkshire&apos;s Premier MMA Promotion
          </p>
          <h1 className="heading-xl text-white mb-6">
            Where Fighters<br />Are Made
          </h1>
          <p className="text-afc-muted text-lg sm:text-xl max-w-2xl mx-auto mb-10">
            Professional and amateur MMA events across the UK since 2016. Over {events.length} events. Nearly 1,000 fighters. The most exciting fight shows in the country.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link href="/events" className="btn-primary text-base px-10 py-4">
              View Events
            </Link>
            <Link href="/about" className="btn-outline text-base px-10 py-4">
              Our Story
            </Link>
          </div>
        </div>

        {/* Scroll indicator */}
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 animate-bounce">
          <span className="text-afc-muted text-xs uppercase tracking-widest">Scroll</span>
          <svg className="w-4 h-4 text-afc-muted" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
          </svg>
        </div>
      </section>

      {/* ========== NEXT EVENT ========== */}
      {nextEvent ? (
        <section className="py-24">
          <div className="section-padding">
            <div className="text-center mb-12">
              <p className="text-afc-blue font-semibold uppercase tracking-[0.3em] text-sm mb-3">Next Event</p>
              <h2 className="heading-lg text-white">{nextEvent.name}</h2>
            </div>

            <div className="card max-w-4xl mx-auto overflow-hidden">
              <div className="relative h-64 sm:h-80">
                <Image src={nextEvent.image} alt={nextEvent.name} fill className="object-cover" />
                <div className="gradient-overlay absolute inset-0" />
                <div className="absolute bottom-6 left-6">
                  <p className="text-white font-bold text-2xl font-[var(--font-heading)] uppercase">{nextEvent.name}</p>
                  <p className="text-afc-muted">
                    {new Date(nextEvent.date).toLocaleDateString('en-GB', { weekday: 'long', day: 'numeric', month: 'long', year: 'numeric' })}
                  </p>
                </div>
              </div>

              <div className="p-8 flex flex-col lg:flex-row items-center justify-between gap-8">
                <div className="flex flex-col sm:flex-row items-center gap-6 text-center sm:text-left">
                  <div>
                    <p className="text-afc-muted text-sm uppercase tracking-wider mb-1">Venue</p>
                    <p className="text-white font-semibold">{nextEvent.venue}</p>
                  </div>
                  <div className="hidden sm:block w-px h-8 bg-afc-border" />
                  <div>
                    <p className="text-afc-muted text-sm uppercase tracking-wider mb-1">Location</p>
                    <p className="text-white font-semibold">{nextEvent.location}</p>
                  </div>
                  <div className="hidden sm:block w-px h-8 bg-afc-border" />
                  <div>
                    <p className="text-afc-muted text-sm uppercase tracking-wider mb-1">Fights</p>
                    <p className="text-white font-semibold">{nextEvent.fightCount}+ Bouts</p>
                  </div>
                </div>

                <CountdownTimer targetDate={nextEvent.date} />
              </div>

              <div className="px-8 pb-8">
                <Link href="/events" className="btn-primary w-full text-center">
                  Get Tickets &rarr;
                </Link>
              </div>
            </div>
          </div>
        </section>
      ) : (
        <section className="py-24">
          <div className="section-padding">
            <div className="text-center max-w-2xl mx-auto">
              <p className="text-afc-blue font-semibold uppercase tracking-[0.3em] text-sm mb-3">Coming Soon</p>
              <h2 className="heading-lg text-white mb-6">Stay Tuned</h2>
              <p className="text-afc-muted text-lg mb-8">
                A new chapter is being written. The next AFC event will be announced soon — follow us on social media to be the first to know.
              </p>
              <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
                <a href="https://instagram.com/almightyfightin" target="_blank" rel="noopener noreferrer" className="btn-primary text-base px-8 py-3">
                  Follow on Instagram
                </a>
                <Link href="/contact" className="btn-outline text-base px-8 py-3">
                  Register Interest
                </Link>
              </div>
            </div>
          </div>
        </section>
      )}

      {/* ========== STATS BAR ========== */}
      <section className="py-16 border-y border-afc-border bg-afc-dark">
        <div className="section-padding">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 text-center">
            {[
              { value: `${events.length}`, label: 'Events' },
              { value: '973', label: 'Fighters' },
              { value: '10', label: 'Years Running' },
              { value: '30+', label: 'Fights Per Show' },
            ].map(stat => (
              <div key={stat.label}>
                <p className="text-4xl sm:text-5xl font-bold text-afc-blue font-[var(--font-heading)]">{stat.value}</p>
                <p className="text-afc-muted uppercase tracking-wider text-sm mt-2">{stat.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ========== RECENT EVENTS ========== */}
      <section className="py-24">
        <div className="section-padding">
          <div className="flex items-end justify-between mb-12">
            <div>
              <p className="text-afc-blue font-semibold uppercase tracking-[0.3em] text-sm mb-3">Fight History</p>
              <h2 className="heading-lg text-white">Recent Events</h2>
            </div>
            <Link href="/events" className="hidden sm:inline-flex btn-outline text-xs">
              View All Events
            </Link>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {pastEvents.slice(0, 6).map(event => (
              <Link key={event.slug} href={`/events#${event.slug}`} className="card group cursor-pointer">
                <div className="relative h-48 overflow-hidden">
                  <Image
                    src={event.image}
                    alt={event.name}
                    fill
                    className="object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                  <div className="gradient-overlay absolute inset-0" />
                  <div className="absolute top-4 left-4">
                    <span className="bg-afc-blue text-white text-xs font-bold uppercase tracking-wider px-3 py-1 rounded-sm">
                      {event.name}
                    </span>
                  </div>
                </div>
                <div className="p-5">
                  <p className="text-white font-semibold mb-1">{event.venue}</p>
                  <p className="text-afc-muted text-sm">{event.location} &middot; {new Date(event.date).toLocaleDateString('en-GB', { day: 'numeric', month: 'short', year: 'numeric' })}</p>
                  <p className="text-afc-muted text-sm mt-2">{event.fightCount} fights</p>
                </div>
              </Link>
            ))}
          </div>

          <div className="sm:hidden mt-8 text-center">
            <Link href="/events" className="btn-outline">View All Events</Link>
          </div>
        </div>
      </section>

      {/* ========== CHAMPIONS ========== */}
      <section className="py-24 bg-afc-dark border-y border-afc-border">
        <div className="section-padding">
          <div className="text-center mb-12">
            <p className="text-afc-blue font-semibold uppercase tracking-[0.3em] text-sm mb-3">Title Holders</p>
            <h2 className="heading-lg text-white">Current Champions</h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {champions.map(champ => (
              <div key={champ.division} className="card group text-center">
                <div className="relative h-64 overflow-hidden">
                  <Image
                    src={champ.image || '/images/cover.jpg'}
                    alt={champ.champion}
                    fill
                    className="object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                  <div className="gradient-overlay absolute inset-0" />
                  <div className="absolute bottom-4 left-0 right-0">
                    <p className="text-afc-blue text-xs font-bold uppercase tracking-[0.2em]">{champ.division} Champion</p>
                  </div>
                </div>
                <div className="p-6">
                  <h3 className="heading-md text-white mb-1">{champ.champion}</h3>
                  <p className="text-afc-muted text-sm">{champ.weightClass}</p>
                  <p className="text-afc-muted text-xs mt-3">Won at {champ.wonAt} &middot; {champ.defences} defences</p>
                </div>
              </div>
            ))}
          </div>

          <div className="text-center mt-10">
            <Link href="/championships" className="btn-outline">Full Title History</Link>
          </div>
        </div>
      </section>

      {/* ========== GALLERY ========== */}
      <section className="py-24">
        <div className="section-padding">
          <div className="text-center mb-12">
            <p className="text-afc-blue font-semibold uppercase tracking-[0.3em] text-sm mb-3">Gallery</p>
            <h2 className="heading-lg text-white">Fight Night</h2>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-3 gap-3">
            {galleryImages.map((img, i) => (
              <div key={i} className={`relative overflow-hidden rounded-sm ${i === 0 ? 'md:col-span-2 md:row-span-2 h-64 md:h-full' : i === 5 ? 'md:col-span-2 h-48 md:h-56' : 'h-48 md:h-56'}`}>
                <Image
                  src={img.src}
                  alt={img.alt}
                  fill
                  className="object-cover hover:scale-105 transition-transform duration-700"
                />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ========== CTA ========== */}
      <section className="relative py-24 overflow-hidden">
        <Image
          src="/images/Almighty-August2025--134.jpg"
          alt="AFC takedown action"
          fill
          className="object-cover"
        />
        <div className="gradient-overlay-full absolute inset-0" />
        <div className="relative z-10 text-center section-padding">
          <h2 className="heading-lg text-white mb-4">Ready to Fight?</h2>
          <p className="text-afc-muted text-lg max-w-xl mx-auto mb-8">
            Whether you&apos;re a seasoned pro or stepping into the cage for the first time, AFC is the platform to prove yourself.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link href="/contact" className="btn-primary px-10 py-4">
              Fighter Registration
            </Link>
            <Link href="/events" className="btn-outline px-10 py-4">
              Buy Tickets
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
