/**
 * NavbarActions Component
 * Responsibility: Render action buttons (Pricing ghost button + Create Account CTA)
 */

import { NavbarActionsProps } from '@/types/components.types';

export default function NavbarActions({ className = '' }: NavbarActionsProps) {
  return (
    <div className={`flex items-center gap-2 sm:gap-4 ${className}`}>
      {/* Ghost button - quiet/minimal styling */}
      <button
        className="
          hidden sm:block
          text-[#CDD1DE]
          hover:text-white
          text-sm
          font-medium
          transition-colors
          duration-300
        "
      >
        Pricing
      </button>

      {/* Primary gradient CTA with glow */}
      <button
        className="
          rounded-full 
          px-4 sm:px-5 
          py-2 
          font-medium 
          text-white 
          text-xs sm:text-sm
          gradient-primary
          glow-effect
          hover:brightness-110 
          hover:glow-effect-strong
          hover:scale-[1.01]
          transition-all 
          duration-300
          will-change-transform
          whitespace-nowrap
        "
      >
        <span className="hidden sm:inline">Create Account</span>
        <span className="sm:hidden">Sign Up</span>
      </button>
    </div>
  );
}

