/**
 * Typography configuration
 * Font sizes, weights, line heights for the design system
 */

export const typography = {
  fontFamily: {
    primary: ['Inter', 'system-ui', 'sans-serif'],
  },
  fontSize: {
    hero: '48px',
    subheading: '18px',
    button: '16px',
    nav: '15px',
    stats: '14px',
    logo: '18px',
  },
  fontWeight: {
    regular: 400,
    medium: 500,
    semibold: 600,
    bold: 700,
  },
  lineHeight: {
    hero: '120%',
    subheading: '160%',
    button: '140%',
    nav: '140%',
    stats: '150%',
  },
  letterSpacing: {
    tight: '-0.2px',
  },
} as const;

export type TypographyConfig = typeof typography;

