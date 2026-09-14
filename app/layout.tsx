import type { Metadata } from 'next';
import { Archivo } from 'next/font/google';
import './globals.css';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { AppStateProvider } from '@/context/AppStateContext';
import { CLUB } from '@/lib/club';

const archivo = Archivo({
  subsets: ['latin'],
  weight: ['400', '500', '600', '700', '800'],
  variable: '--font-archivo',
  display: 'swap',
});

export const metadata: Metadata = {
  metadataBase: new URL('https://ac-billiards-club.vercel.app'),
  title: {
    default: `${CLUB.name} | Pool Hall in Egg Harbor Township, NJ`,
    template: `%s | ${CLUB.shortName}`,
  },
  description: `${CLUB.intro} Snooker, three-cushion, and tight-pocket tables at ${CLUB.address.street}, ${CLUB.address.city}, ${CLUB.address.state}. ${CLUB.rate.display} per hour, per person.`,
  keywords: [
    'pool hall Egg Harbor Township',
    'billiards Atlantic City NJ',
    'snooker table New Jersey',
    'three cushion billiards NJ',
    'tight pocket pool table',
  ],
  openGraph: {
    type: 'website',
    title: `${CLUB.name} | Egg Harbor Township, NJ`,
    description: CLUB.intro,
    locale: 'en_US',
  },
  robots: { index: true, follow: true },
};

/** Rich-result data so the club surfaces properly in local search. */
const jsonLd = {
  '@context': 'https://schema.org',
  '@type': 'SportsActivityLocation',
  name: CLUB.name,
  description: CLUB.intro,
  telephone: CLUB.phone.display,
  email: CLUB.email,
  priceRange: CLUB.priceRange,
  sameAs: [CLUB.facebook],
  address: {
    '@type': 'PostalAddress',
    streetAddress: CLUB.address.street,
    addressLocality: CLUB.address.city,
    addressRegion: CLUB.address.state,
    postalCode: CLUB.address.zip,
    addressCountry: 'US',
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    // The inline script below rewrites data-theme before React hydrates, which
    // is a deliberate mismatch: it is how the saved theme applies without a flash.
    <html lang="en" data-theme="dark" className={archivo.variable} suppressHydrationWarning>
      <head>
        <script
          dangerouslySetInnerHTML={{
            __html: `(function(){try{var t=localStorage.getItem('ac_billiards_theme')||'dark';document.documentElement.setAttribute('data-theme',t);}catch(e){}})();`,
          }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body>
        <AppStateProvider>
          <Navbar />
          {children}
          <Footer />
        </AppStateProvider>
      </body>
    </html>
  );
}
