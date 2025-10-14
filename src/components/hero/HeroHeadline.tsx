/**
 * HeroHeadline Component
 * Responsibility: Render main headline with animation
 */

import { HeroHeadlineProps } from '@/types/components.types';

export default function HeroHeadline({ text, className = '' }: HeroHeadlineProps) {
  return (
    <h1
      className={`
        text-5xl md:text-hero
        font-bold
        text-white
        text-center
        max-w-3xl
        mx-auto
        leading-[120%]
        animate-fade-in-up
        ${className}
      `}
    >
      {text}
    </h1>
  );
}

