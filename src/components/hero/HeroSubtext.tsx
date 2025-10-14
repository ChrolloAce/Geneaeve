/**
 * HeroSubtext Component
 * Responsibility: Render descriptive subtitle text
 */

import { HeroSubtextProps } from '@/types/components.types';

export default function HeroSubtext({ text, className = '' }: HeroSubtextProps) {
  return (
    <p
      className={`
        text-subheading
        text-text-secondary
        text-center
        max-w-2xl
        mx-auto
        mt-4
        leading-[160%]
        animate-fade-in
        animation-delay-150
        ${className}
      `}
    >
      {text}
    </p>
  );
}

