import Link from 'next/link';
import Image from 'next/image';

export default function Footer() {
  return (
    <footer className="bg-afc-dark border-t border-afc-border mt-24">
      <div className="section-padding py-16">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12">
          {/* Brand */}
          <div className="md:col-span-1">
            <Image
              src="/logos/AFC-WHITE.png"
              alt="AFC"
              width={160}
              height={45}
              className="h-10 w-auto mb-4"
            />
            <p className="text-afc-muted text-sm leading-relaxed">
              Yorkshire&apos;s premier MMA promotion. Professional and amateur bouts since 2016. 43+ events and counting.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-white font-semibold uppercase tracking-wider text-sm mb-4">Navigation</h4>
            <div className="flex flex-col gap-2">
              {['Events', 'Fighters', 'Championships', 'About', 'Contact'].map(link => (
                <Link key={link} href={`/${link.toLowerCase()}`} className="text-afc-muted hover:text-white transition-colors text-sm">
                  {link}
                </Link>
              ))}
            </div>
          </div>

          {/* Social */}
          <div>
            <h4 className="text-white font-semibold uppercase tracking-wider text-sm mb-4">Follow Us</h4>
            <div className="flex flex-col gap-2">
              <a href="https://facebook.com/almightyfc" target="_blank" rel="noopener noreferrer" className="text-afc-muted hover:text-white transition-colors text-sm">
                Facebook
              </a>
              <a href="https://instagram.com/almightyfightin" target="_blank" rel="noopener noreferrer" className="text-afc-muted hover:text-white transition-colors text-sm">
                Instagram
              </a>
              <a href="https://twitter.com/AlmightyFightin" target="_blank" rel="noopener noreferrer" className="text-afc-muted hover:text-white transition-colors text-sm">
                X / Twitter
              </a>
            </div>
          </div>

          {/* Contact */}
          <div>
            <h4 className="text-white font-semibold uppercase tracking-wider text-sm mb-4">Get In Touch</h4>
            <p className="text-afc-muted text-sm mb-4">
              Want to fight on an AFC card? Got a sponsorship enquiry? We want to hear from you.
            </p>
            <Link href="/contact" className="btn-outline text-xs">
              Contact Us
            </Link>
          </div>
        </div>

        <div className="border-t border-afc-border mt-12 pt-8 flex flex-col sm:flex-row justify-between items-center gap-4">
          <p className="text-afc-muted text-xs">
            &copy; {new Date().getFullYear()} Almighty Fighting Championship. All rights reserved.
          </p>
          <p className="text-afc-muted text-xs">
            Est. 2016 &middot; Leeds, Yorkshire
          </p>
        </div>
      </div>
    </footer>
  );
}
