/**
 * Landing Page
 * Main entry point - composes Navbar and HeroSection
 */

import Navbar from '@/components/navbar/Navbar';
import HeroSection from '@/components/hero/HeroSection';

export default function LandingPage() {
  return (
    <main className="relative overflow-hidden">
      <Navbar variant="transparent" />
      <HeroSection
        headline="Unlock Your Potential With Personalized Investment Strategies."
        subtext="We're here to empower you every step of the way. Whether you're managing your personal finances or seeking innovative investment opportunities."
      />
    </main>
  );
}

