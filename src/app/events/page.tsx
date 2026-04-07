import Image from 'next/image';
import Link from 'next/link';
import { upcomingEvents, pastEvents } from '@/data/events';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Events | Almighty Fighting Championship',
  description: 'Upcoming and past AFC events. Get tickets for the next fight night or browse the full 42+ event archive.',
};

export default function EventsPage() {
  return (
    <>
      {/* Hero */}
      <section className="relative h-72 sm:h-96 flex items-end overflow-hidden">
        <Image src="/images/DN4_3372.jpg" alt="AFC Events" fill className="object-cover" priority />
        <div className="gradient-overlay-full absolute inset-0" />
        <div className="relative z-10 section-padding pb-12">
          <p className="text-afc-blue font-semibold uppercase tracking-[0.3em] text-sm mb-3">Fight Calendar</p>
          <h1 className="heading-xl text-white">Events</h1>
        </div>
      </section>

      {/* Upcoming */}
      {upcomingEvents.length > 0 && (
        <section className="py-20">
          <div className="section-padding">
            <h2 className="heading-lg text-white mb-10">Upcoming Events</h2>

            <div className="space-y-6">
              {upcomingEvents.map(event => (
                <div key={event.slug} id={event.slug} className="card flex flex-col lg:flex-row overflow-hidden">
                  <div className="relative w-full lg:w-96 h-56 lg:h-auto shrink-0">
                    <Image src={event.image} alt={event.name} fill className="object-cover" />
                  </div>
                  <div className="p-8 flex-1 flex flex-col justify-between">
                    <div>
                      <div className="flex items-center gap-3 mb-3">
                        <span className="bg-afc-blue text-white text-xs font-bold uppercase tracking-wider px-3 py-1 rounded-sm">
                          Upcoming
                        </span>
                        <span className="text-afc-muted text-sm">
                          {new Date(event.date).toLocaleDateString('en-GB', { weekday: 'long', day: 'numeric', month: 'long', year: 'numeric' })}
                        </span>
                      </div>
                      <h3 className="heading-md text-white mb-2">{event.name}</h3>
                      <p className="text-afc-muted mb-1">{event.venue}, {event.location}</p>
                      <p className="text-afc-muted text-sm">{event.fightCount}+ fights on the card</p>
                      {event.description && (
                        <p className="text-afc-text text-sm mt-4">{event.description}</p>
                      )}
                    </div>
                    <div className="mt-6 flex flex-col sm:flex-row gap-3">
                      <a href={event.ticketUrl || '#'} className="btn-primary text-center">
                        Buy Tickets
                      </a>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* Ticket Info */}
      <section className="py-12 bg-afc-dark border-y border-afc-border">
        <div className="section-padding">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
            {[
              { tier: 'Standing', price: '40', note: 'General admission, great atmosphere' },
              { tier: 'Cage Side', price: '60', note: 'Front row seats, right at the action' },
              { tier: 'VIP Table', price: 'POA', note: 'Premium tables, limited availability' },
            ].map(t => (
              <div key={t.tier} className="card p-8">
                <p className="text-afc-blue font-semibold uppercase tracking-wider text-sm mb-2">{t.tier}</p>
                <p className="text-4xl font-bold text-white font-[var(--font-heading)]">
                  {t.price === 'POA' ? 'POA' : `\u00A3${t.price}`}
                </p>
                <p className="text-afc-muted text-sm mt-2">{t.note}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Past Events */}
      <section className="py-20">
        <div className="section-padding">
          <h2 className="heading-lg text-white mb-10">Past Events</h2>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {pastEvents.map(event => (
              <div key={event.slug} id={event.slug} className="card group">
                <div className="relative h-48 overflow-hidden">
                  <Image
                    src={event.image}
                    alt={event.name}
                    fill
                    className="object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                  <div className="gradient-overlay absolute inset-0" />
                  <div className="absolute top-4 left-4">
                    <span className="bg-white/10 backdrop-blur-sm text-white text-xs font-bold uppercase tracking-wider px-3 py-1 rounded-sm">
                      {event.name}
                    </span>
                  </div>
                </div>
                <div className="p-5">
                  <p className="text-white font-semibold mb-1">{event.venue}</p>
                  <p className="text-afc-muted text-sm">{event.location} &middot; {new Date(event.date).toLocaleDateString('en-GB', { day: 'numeric', month: 'short', year: 'numeric' })}</p>
                  <p className="text-afc-muted text-sm mt-1">{event.fightCount} fights</p>
                  {event.description && (
                    <p className="text-afc-text text-sm mt-3 line-clamp-2">{event.description}</p>
                  )}
                  {event.fights && event.fights.length > 0 && (
                    <div className="mt-4 pt-4 border-t border-afc-border">
                      <p className="text-afc-blue text-xs font-bold uppercase tracking-wider mb-2">Title Fights</p>
                      {event.fights.filter(f => f.isTitle).map((f, i) => (
                        <p key={i} className="text-afc-text text-sm">
                          <span className="text-white font-semibold">{f.fighter1}</span>
                          <span className="text-afc-muted"> vs </span>
                          <span className="text-white font-semibold">{f.fighter2}</span>
                          {f.method && <span className="text-afc-muted text-xs ml-2">({f.method})</span>}
                        </p>
                      ))}
                    </div>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 text-center">
        <div className="section-padding">
          <h3 className="heading-md text-white mb-4">Want to Fight on an AFC Card?</h3>
          <p className="text-afc-muted max-w-lg mx-auto mb-8">
            We&apos;re always looking for talented fighters — amateur and professional. Register your interest and we&apos;ll be in touch.
          </p>
          <Link href="/contact" className="btn-primary">
            Fighter Registration
          </Link>
        </div>
      </section>
    </>
  );
}
