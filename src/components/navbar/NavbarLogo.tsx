/**
 * NavbarLogo Component
 * Responsibility: Render brand identity (logo icon + text)
 */

import Image from 'next/image';
import { NavbarLogoProps } from '@/types/components.types';

export default function NavbarLogo({ className = '' }: NavbarLogoProps) {
  return (
    <div className={`flex items-center gap-2.5 ${className}`}>
      <Image
        src="/logo.png"
        alt="Geneaeve Logo"
        width={32}
        height={32}
        className="w-7 h-7 sm:w-8 sm:h-8"
        priority
      />
      <span className="text-base sm:text-lg font-semibold text-white">Geneaeve</span>
    </div>
  );
}

