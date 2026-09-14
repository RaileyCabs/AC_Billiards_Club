import type { Metadata } from 'next';
import './globals.css';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { AppStateProvider } from '@/context/AppStateContext';

export const metadata: Metadata = {
  title: 'Atlantic City Billiard Club | Premier Pool Hall & Tournament Hub in Egg Harbor Township, NJ',
  description: 'Atlantic City Billiard Club in Egg Harbor Township, NJ. 9ft pro tables, Snooker, 3-Cushion Carom, weekly tournaments, leagues, kitchen, bar & pro shop. Minutes from AC casinos.',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" data-theme="light">
      <head>
        <script
          dangerouslySetInnerHTML={{
            __html: `
              (function() {
                try {
                  var theme = localStorage.getItem('ac_billiards_theme') || 'light';
                  document.documentElement.setAttribute('data-theme', theme);
                } catch (e) {}
              })();
            `,
          }}
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
