/**
 * StatsText Component
 * Responsibility: Display statistics text (client count, etc.)
 */

import { StatsTextProps } from '@/types/components.types';

export default function StatsText({ count, label, className = '' }: StatsTextProps) {
  return (
    <p className={`text-xs sm:text-sm md:text-stats text-text-muted mt-2 sm:mt-3 ${className}`}>
      <span className="font-semibold">Over {count}</span> {label}
    </p>
  );
}

