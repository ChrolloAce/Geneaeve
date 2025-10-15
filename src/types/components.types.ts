/**
 * Centralized TypeScript type definitions for components
 */

import { ReactNode } from 'react';

// ============================================================================
// Navbar Types
// ============================================================================

export interface NavbarProps {
  variant?: 'transparent' | 'solid';
  className?: string;
}

export interface NavbarLogoProps {
  className?: string;
}

export interface NavLink {
  label: string;
  href: string;
  isActive?: boolean;
}

export interface NavbarLinksProps {
  links: NavLink[];
  className?: string;
}

export interface NavbarActionsProps {
  className?: string;
}

// ============================================================================
// Hero Section Types
// ============================================================================

export interface HeroSectionProps {
  headline: string;
  subtext: string;
  className?: string;
}

export interface HeroHeadlineProps {
  text: string;
  className?: string;
}

export interface HeroSubtextProps {
  text: string;
  className?: string;
}

export interface HeroBackgroundProps {
  className?: string;
}

// ============================================================================
// CTA Button Types
// ============================================================================

export type CTAButtonVariant = 'primary' | 'secondary';

export interface CTAButtonProps {
  variant: CTAButtonVariant;
  children: ReactNode;
  onClick?: () => void;
  href?: string;
  className?: string;
}

export interface CTAButtonGroupProps {
  className?: string;
}

// ============================================================================
// Social Proof Types
// ============================================================================

export interface Avatar {
  id: string;
  imageUrl?: string;
  alt: string;
}

export interface AvatarGroupProps {
  avatars: Avatar[];
  maxVisible?: number;
  className?: string;
}

export interface StatsTextProps {
  count: string;
  label: string;
  className?: string;
}

export interface SocialProofProps {
  avatars: Avatar[];
  statsCount: string;
  statsLabel: string;
  className?: string;
}

