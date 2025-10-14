/**
 * NavbarLogo Component
 * Responsibility: Render brand identity (logo icon + text)
 */

import { NavbarLogoProps } from '@/types/components.types';

export default function NavbarLogo({ className = '' }: NavbarLogoProps) {
  return (
    <div className={`flex items-center gap-2 ${className}`}>
      <div className="w-6 h-6 rounded-full border-2 border-white flex items-center justify-center">
        <div className="w-3 h-3 bg-white rounded-full"></div>
      </div>
      <span className="text-lg font-semibold text-white">Logo Ipsum</span>
    </div>
  );
}

