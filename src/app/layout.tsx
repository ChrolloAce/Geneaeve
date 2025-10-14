/**
 * Root Layout
 * Next.js App Router root layout
 */

import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import '@/styles/globals.css';
import ScrollHandler from '@/components/common/ScrollHandler';

const inter = Inter({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-inter',
});

export const metadata: Metadata = {
  title: 'Geneaeve - Personalized Investment Strategies',
  description: 'Unlock your potential with personalized investment strategies. Empowering you every step of the way.',
  keywords: 'investment, finance, personalized strategies, wealth management',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={inter.variable}>
      <body className={inter.className}>
        <ScrollHandler />
        {children}
      </body>
    </html>
  );
}

