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
  title: 'Geneaeve - Launch Your Custom Software or App in 7 Days',
  description: 'Design, Backend, and Frontend — We deliver complete solutions from concept to launch, empowering your vision with expert development at lightning speed.',
  keywords: 'software development, app development, custom software, web development, backend, frontend, design',
  icons: {
    icon: '/favicon.png',
    shortcut: '/favicon.png',
    apple: '/favicon.png',
  },
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

