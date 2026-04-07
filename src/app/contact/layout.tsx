import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Contact | Almighty Fighting Championship',
  description: 'Get in touch with AFC. Fighter registration, sponsorship enquiries, and general contact.',
};

export default function ContactLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
