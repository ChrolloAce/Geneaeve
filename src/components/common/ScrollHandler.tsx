/**
 * ScrollHandler Component
 * Responsibility: Handle scroll events to add/remove body classes
 * Used to darken the glassy navbar on scroll
 */

'use client';

import { useEffect } from 'react';

export default function ScrollHandler() {
  useEffect(() => {
    const onScroll = () => {
      if (window.scrollY > 1) {
        document.body.classList.add('is-scrolled');
      } else {
        document.body.classList.remove('is-scrolled');
      }
    };

    // Initial check
    onScroll();

    // Add scroll listener
    window.addEventListener('scroll', onScroll, { passive: true });

    // Cleanup
    return () => {
      window.removeEventListener('scroll', onScroll);
    };
  }, []);

  return null; // This component doesn't render anything
}

