import type { Metadata } from 'next';
import './globals.css';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';

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
    <html lang="en">
      <body>
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  );
}
