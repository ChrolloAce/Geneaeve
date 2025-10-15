/**
 * CTAButton Component
 * Responsibility: Reusable button with variant support (primary/secondary)
 * Primary: Gradient with glow effect
 * Secondary: Minimal border with subtle hover
 */

import { CTAButtonProps } from '@/types/components.types';

export default function CTAButton({
  variant,
  children,
  onClick,
  className = '',
}: CTAButtonProps) {
  const baseStyles = `
    px-5 sm:px-6 
    py-2.5 sm:py-3 
    rounded-full
    font-semibold 
    text-white 
    text-sm sm:text-base
    transition-all 
    duration-300
    animate-scale-in
    will-change-transform
    w-full sm:w-auto
  `;

  const variantStyles = {
    primary: `
      gradient-primary 
      glow-effect
      hover:brightness-110
      hover:glow-effect-strong
      hover:scale-[1.01]
    `,
    secondary: `
      border 
      border-[rgba(255,255,255,0.15)]
      bg-transparent
      hover:bg-[rgba(255,255,255,0.05)]
      hover:border-[rgba(255,255,255,0.25)]
    `,
  };

  return (
    <button
      onClick={onClick}
      className={`${baseStyles} ${variantStyles[variant]} ${className}`}
    >
      {children}
    </button>
  );
}

