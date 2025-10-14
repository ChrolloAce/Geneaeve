/**
 * HeroSection Component
 * Responsibility: Layout composition for hero section with layered gradients
 * Composes: HeroHeadline, HeroSubtext, CTAButtonGroup, SocialProof, HeroBackground
 */

import { HeroSectionProps } from '@/types/components.types';
import HeroHeadline from './HeroHeadline';
import HeroSubtext from './HeroSubtext';
import CTAButtonGroup from '../cta/CTAButtonGroup';
import SocialProof from '../social-proof/SocialProof';
import HeroBackground from './HeroBackground';

const mockAvatars = [
  { id: '1', alt: 'User 1' },
  { id: '2', alt: 'User 2' },
  { id: '3', alt: 'User 3' },
  { id: '4', alt: 'User 4' },
];

export default function HeroSection({ headline, subtext, className = '' }: HeroSectionProps) {
  return (
    <section
      className={`
        relative
        min-h-screen
        flex
        flex-col
        items-center
        justify-center
        gradient-background-layered
        overflow-hidden
        px-6
        ${className}
      `}
    >
      <div className="text-center mt-24 z-10 relative">
        <HeroHeadline text={headline} />
        <HeroSubtext text={subtext} />
        <CTAButtonGroup />
        <SocialProof
          avatars={mockAvatars}
          statsCount="10,000+"
          statsLabel="Active clients"
        />
      </div>

      {/* Horizon arc effect - dark circle with subtle violet rim */}
      <div
        aria-hidden="true"
        className="
          horizon-arc
          pointer-events-none 
          absolute 
          inset-x-0 
          bottom-[-6%] 
          mx-auto 
          w-[78%] 
          max-w-[980px] 
          aspect-[2/1] 
          overflow-visible
        "
      />

      <HeroBackground />
    </section>
  );
}

