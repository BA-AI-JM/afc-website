import type { Metadata } from 'next';
import './globals.css';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';

export const metadata: Metadata = {
  title: 'Almighty Fighting Championship | Yorkshire\'s Premier MMA Promotion',
  description: 'Professional and amateur MMA events across the UK since 2016. 42+ events, 970+ fighters. Get tickets, view fight cards, and follow your favourite fighters.',
  keywords: 'MMA, Mixed Martial Arts, UFC, fighting, Yorkshire, Leeds, amateur MMA, professional MMA, AFC, Almighty Fighting Championship',
  openGraph: {
    title: 'Almighty Fighting Championship',
    description: 'Yorkshire\'s Premier MMA Promotion. Professional and amateur bouts since 2016.',
    type: 'website',
    images: ['/images/DN4_3372.jpg'],
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700&family=Oswald:wght@400;500;600;700&display=swap"
          rel="stylesheet"
        />
        <link rel="icon" href="/logos/AFC-Blue.png" />
      </head>
      <body className="min-h-screen">
        <Navbar />
        <main className="pt-20">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
