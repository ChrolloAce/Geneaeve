/**
 * HeroSubtext Component
 * Responsibility: Render descriptive subtitle text
 */

import { HeroSubtextProps } from '@/types/components.types';

export default function HeroSubtext({ text, className = '' }: HeroSubtextProps) {
  return (
    <p
      className={`
        text-sm sm:text-base md:text-lg lg:text-subheading
        text-text-secondary
        text-center
        max-w-[90%] sm:max-w-xl md:max-w-2xl
        mx-auto
        mt-4 sm:mt-5 md:mt-6
        leading-[160%]
        animate-fade-in
        animation-delay-150
        px-4
        ${className}
      `}
    >
      {text}
    </p>
  );
}

