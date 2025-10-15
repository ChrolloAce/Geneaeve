/**
 * CTAButtonGroup Component
 * Responsibility: Layout and orchestration of CTA buttons
 */

import { CTAButtonGroupProps } from '@/types/components.types';
import CTAButton from './CTAButton';

export default function CTAButtonGroup({ className = '' }: CTAButtonGroupProps) {
  return (
    <div className={`flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center mt-6 sm:mt-8 px-4 ${className}`}>
      <CTAButton variant="secondary">
        Learn More
      </CTAButton>
      <CTAButton variant="primary" href="https://cal.com/geneave/intro-call">
        Book a Call
      </CTAButton>
    </div>
  );
}

