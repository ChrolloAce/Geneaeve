/**
 * CTAButtonGroup Component
 * Responsibility: Layout and orchestration of CTA buttons
 */

import { CTAButtonGroupProps } from '@/types/components.types';
import CTAButton from './CTAButton';

export default function CTAButtonGroup({ className = '' }: CTAButtonGroupProps) {
  return (
    <div className={`flex gap-4 justify-center mt-8 ${className}`}>
      <CTAButton variant="secondary">
        Learn More
      </CTAButton>
      <CTAButton variant="primary">
        Get Started
      </CTAButton>
    </div>
  );
}

