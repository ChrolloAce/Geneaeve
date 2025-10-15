/**
 * HeroHeadline Component
 * Responsibility: Render main headline with animation
 */

import { HeroHeadlineProps } from '@/types/components.types';

export default function HeroHeadline({ text, className = '' }: HeroHeadlineProps) {
  return (
    <h1
      className={`
        text-3xl sm:text-4xl md:text-5xl lg:text-hero
        font-bold
        text-white
        text-center
        max-w-[90%] sm:max-w-2xl md:max-w-3xl
        mx-auto
        leading-[120%]
        animate-fade-in-up
        px-4
        ${className}
      `}
    >
      {text}
    </h1>
  );
}

