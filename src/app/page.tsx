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
        headline="Launch Your Custom Software or App in Just 7 Days"
        subtext="Design, Backend, and Frontend — We deliver complete solutions from concept to launch, empowering your vision with expert development at lightning speed."
      />
    </main>
  );
}

