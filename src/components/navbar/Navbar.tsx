/**
 * Navbar Component
 * Responsibility: Layout orchestration for glassy sticky navigation bar
 * Composes: NavbarLogo, NavbarActions
 */

import { NavbarProps } from '@/types/components.types';
import NavbarLogo from './NavbarLogo';
import NavbarActions from './NavbarActions';

export default function Navbar({ variant = 'transparent', className = '' }: NavbarProps) {
  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 ${className}`}>
      <div
        className="
          glass-nav
          mx-auto 
          mt-4 
          w-[95%] sm:w-[92%]
          max-w-[1200px]
          rounded-full
          px-4 sm:px-6 md:px-8 
          h-[64px] sm:h-[72px]
          flex 
          items-center 
          justify-between 
          transition-colors 
          duration-300
        "
        id="glassNav"
      >
        <NavbarLogo />
        <NavbarActions />
      </div>
    </nav>
  );
}

