/**
 * HeroBackground Component
 * Responsibility: Render subtle background visual effects
 * Note: Most background effects are now handled by the layered gradient
 *       and horizon arc in HeroSection. This component provides additional
 *       ambient effects if needed.
 */

import { HeroBackgroundProps } from '@/types/components.types';

export default function HeroBackground({ className = '' }: HeroBackgroundProps) {
  return null; // Background is now handled by gradient-background-layered and horizon-arc
}

