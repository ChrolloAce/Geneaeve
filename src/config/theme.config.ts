/**
 * Theme configuration
 * Spacing, breakpoints, animations, and other design tokens
 */

export const theme = {
  spacing: {
    base: '8px',
    navbarHeight: '80px',
    navbarPadding: {
      horizontal: '80px',
      vertical: '24px',
    },
    heroSection: {
      minHeight: '760px',
      maxHeight: '820px',
    },
    contentMaxWidth: '1180px',
    margins: {
      desktop: '130px',
      tablet: '60px',
      mobile: '24px',
    },
  },
  breakpoints: {
    mobile: '480px',
    tablet: '768px',
    tabletLandscape: '992px',
    desktop: '1200px',
    wide: '1440px',
  },
  borderRadius: {
    small: '10px',
    medium: '12px',
    large: '20px',
    full: '9999px',
  },
  animations: {
    duration: {
      fast: '400ms',
      normal: '600ms',
      slow: '6s',
    },
    timing: {
      easeOut: 'ease-out',
      easeInOut: 'ease-in-out',
      linear: 'linear',
    },
  },
} as const;

export type ThemeConfig = typeof theme;

