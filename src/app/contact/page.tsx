'use client';

import Image from 'next/image';
import { useState } from 'react';

type FormType = 'fighter' | 'general' | 'sponsorship';

export default function ContactPage() {
  const [formType, setFormType] = useState<FormType>('fighter');
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const formData = new FormData(e.currentTarget);
    const entries = Array.from(formData.entries());
    const body = entries
      .map(([key, value]) => `${key}: ${value}`)
      .join('\n');
    const subject = `AFC ${formType.replace('_', ' ')} enquiry`;
    const mailto = `mailto:info@almightyfightingchampionship.com?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
    window.open(mailto, '_blank');
    setSubmitted(true);
  };

  return (
    <>
      {/* Hero */}
      <section className="relative h-56 sm:h-72 flex items-end overflow-hidden">
        <Image src="/images/Almighty-August2025--80.jpg" alt="Contact AFC" fill className="object-cover" priority />
        <div className="gradient-overlay-full absolute inset-0" />
        <div className="relative z-10 section-padding pb-12">
          <p className="text-afc-blue font-semibold uppercase tracking-[0.3em] text-sm mb-3">Get In Touch</p>
          <h1 className="heading-xl text-white">Contact</h1>
        </div>
      </section>

      <section className="py-20">
        <div className="section-padding">
          <div className="max-w-3xl mx-auto">
            {/* Form type selector */}
            <div className="flex flex-col sm:flex-row gap-3 mb-12">
              {[
                { key: 'fighter' as FormType, label: 'Fighter Registration', desc: 'I want to fight on an AFC card' },
                { key: 'sponsorship' as FormType, label: 'Sponsorship', desc: 'I want to sponsor an event' },
                { key: 'general' as FormType, label: 'General Enquiry', desc: 'Something else' },
              ].map(t => (
                <button
                  key={t.key}
                  onClick={() => { setFormType(t.key); setSubmitted(false); }}
                  className={`flex-1 p-4 rounded-sm border text-left transition-all ${
                    formType === t.key
                      ? 'border-afc-blue bg-afc-blue/10'
                      : 'border-afc-border bg-afc-card hover:border-afc-muted'
                  }`}
                >
                  <p className={`font-semibold text-sm ${formType === t.key ? 'text-afc-blue' : 'text-white'}`}>{t.label}</p>
                  <p className="text-afc-muted text-xs mt-1">{t.desc}</p>
                </button>
              ))}
            </div>

            {submitted ? (
              <div className="card p-12 text-center">
                <div className="w-16 h-16 bg-afc-blue/20 rounded-full flex items-center justify-center mx-auto mb-6">
                  <svg className="w-8 h-8 text-afc-blue" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                </div>
                <h3 className="heading-md text-white mb-3">Message Sent</h3>
                <p className="text-afc-muted">We&apos;ll get back to you as soon as possible. Keep training.</p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="card p-8 space-y-6">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-afc-muted text-xs uppercase tracking-wider mb-2">Full Name *</label>
                    <input
                      type="text"
                      name="name"
                      required
                      className="w-full bg-afc-dark border border-afc-border rounded-sm px-4 py-3 text-white placeholder-afc-muted focus:border-afc-blue focus:outline-none transition-colors"
                      placeholder="Your name"
                    />
                  </div>
                  <div>
                    <label className="block text-afc-muted text-xs uppercase tracking-wider mb-2">Email *</label>
                    <input
                      type="email"
                      name="email"
                      required
                      className="w-full bg-afc-dark border border-afc-border rounded-sm px-4 py-3 text-white placeholder-afc-muted focus:border-afc-blue focus:outline-none transition-colors"
                      placeholder="your@email.com"
                    />
                  </div>
                </div>

                {formType === 'fighter' && (
                  <>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                      <div>
                        <label className="block text-afc-muted text-xs uppercase tracking-wider mb-2">Gym / Team</label>
                        <input
                          type="text"
                          name="gym"
                          className="w-full bg-afc-dark border border-afc-border rounded-sm px-4 py-3 text-white placeholder-afc-muted focus:border-afc-blue focus:outline-none transition-colors"
                          placeholder="Your gym or team name"
                        />
                      </div>
                      <div>
                        <label className="block text-afc-muted text-xs uppercase tracking-wider mb-2">Weight Class</label>
                        <select name="weight_class" className="w-full bg-afc-dark border border-afc-border rounded-sm px-4 py-3 text-white focus:border-afc-blue focus:outline-none transition-colors">
                          <option value="">Select weight class</option>
                          <option>Flyweight (125 lbs)</option>
                          <option>Bantamweight (135 lbs)</option>
                          <option>Featherweight (145 lbs)</option>
                          <option>Lightweight (155 lbs)</option>
                          <option>Welterweight (170 lbs)</option>
                          <option>Middleweight (185 lbs)</option>
                          <option>Light Heavyweight (205 lbs)</option>
                          <option>Heavyweight (265 lbs)</option>
                        </select>
                      </div>
                    </div>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                      <div>
                        <label className="block text-afc-muted text-xs uppercase tracking-wider mb-2">Record (W-L-D)</label>
                        <input
                          type="text"
                          name="record"
                          className="w-full bg-afc-dark border border-afc-border rounded-sm px-4 py-3 text-white placeholder-afc-muted focus:border-afc-blue focus:outline-none transition-colors"
                          placeholder="e.g. 3-1-0"
                        />
                      </div>
                      <div>
                        <label className="block text-afc-muted text-xs uppercase tracking-wider mb-2">Pro or Amateur?</label>
                        <select name="level" className="w-full bg-afc-dark border border-afc-border rounded-sm px-4 py-3 text-white focus:border-afc-blue focus:outline-none transition-colors">
                          <option value="">Select</option>
                          <option>Amateur</option>
                          <option>Professional</option>
                          <option>Looking to turn pro</option>
                        </select>
                      </div>
                    </div>
                  </>
                )}

                {formType === 'sponsorship' && (
                  <div>
                    <label className="block text-afc-muted text-xs uppercase tracking-wider mb-2">Company / Brand</label>
                    <input
                      type="text"
                      name="company"
                      className="w-full bg-afc-dark border border-afc-border rounded-sm px-4 py-3 text-white placeholder-afc-muted focus:border-afc-blue focus:outline-none transition-colors"
                      placeholder="Your company name"
                    />
                  </div>
                )}

                <div>
                  <label className="block text-afc-muted text-xs uppercase tracking-wider mb-2">Message *</label>
                  <textarea
                    name="message"
                    required
                    rows={5}
                    className="w-full bg-afc-dark border border-afc-border rounded-sm px-4 py-3 text-white placeholder-afc-muted focus:border-afc-blue focus:outline-none transition-colors resize-none"
                    placeholder={
                      formType === 'fighter' ? 'Tell us about your experience, any fight videos, and which event you\'re interested in...'
                        : formType === 'sponsorship' ? 'Tell us about your brand and what kind of sponsorship you\'re interested in...'
                        : 'How can we help?'
                    }
                  />
                </div>

                <button type="submit" className="btn-primary w-full py-4">
                  {formType === 'fighter' ? 'Submit Fighter Registration' : formType === 'sponsorship' ? 'Submit Sponsorship Enquiry' : 'Send Message'}
                </button>
              </form>
            )}

            {/* Social links */}
            <div className="mt-12 text-center">
              <p className="text-afc-muted text-sm mb-4">Or reach us on social media</p>
              <div className="flex items-center justify-center gap-6">
                <a href="https://facebook.com/almightyfc" target="_blank" rel="noopener noreferrer" className="text-afc-muted hover:text-afc-blue transition-colors text-sm font-semibold uppercase tracking-wider">
                  Facebook
                </a>
                <a href="https://instagram.com/almightyfightin" target="_blank" rel="noopener noreferrer" className="text-afc-muted hover:text-afc-blue transition-colors text-sm font-semibold uppercase tracking-wider">
                  Instagram
                </a>
                <a href="https://twitter.com/AlmightyFightin" target="_blank" rel="noopener noreferrer" className="text-afc-muted hover:text-afc-blue transition-colors text-sm font-semibold uppercase tracking-wider">
                  X / Twitter
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
