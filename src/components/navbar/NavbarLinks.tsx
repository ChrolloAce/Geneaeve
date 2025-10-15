/**
 * NavbarLinks Component
 * Responsibility: Render navigation menu items with pill chip styling
 */

import { NavbarLinksProps } from '@/types/components.types';

export default function NavbarLinks({ links, className = '' }: NavbarLinksProps) {
  return (
    <ul className={`hidden lg:flex gap-2 ${className}`}>
      {links.map((link) => (
        <li key={link.label}>
          <a
            href={link.href}
            className={`
              block
              px-4 py-2 
              rounded-full 
              text-sm
              font-medium
              transition-all 
              duration-300
              ${
                link.isActive
                  ? 'text-white bg-[rgba(122,94,255,0.10)] border border-[rgba(122,94,255,0.50)] shadow-[inset_0_0_0_1px_rgba(122,94,255,0.50)]'
                  : 'text-[#E7E9F3] hover:text-white hover:bg-[rgba(122,94,255,0.10)] hover:border hover:border-[rgba(122,94,255,0.35)]'
              }
            `}
          >
            {link.label}
          </a>
        </li>
      ))}
    </ul>
  );
}

