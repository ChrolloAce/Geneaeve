/**
 * Centralized color palette configuration
 * Based on the Geneaeve Design System
 */

export const colors = {
  background: {
    primary: '#0B0C10',
    secondary: '#1A1C29',
    overlay: '#161B22',
  },
  accent: {
    primary: '#5A3DF0',
    secondary: '#7E5EFF',
    glow: 'rgba(90, 61, 240, 0.2)',
    glowStrong: 'rgba(94, 61, 240, 0.3)',
  },
  text: {
    primary: '#FFFFFF',
    secondary: '#AEB2C2',
    muted: '#C2C2C2',
    nav: '#E8E8E8',
  },
  border: {
    default: '#2B2E40',
    active: '#5A3DF0',
  },
  hover: {
    light: 'rgba(255, 255, 255, 0.05)',
    accent: 'rgba(122, 94, 255, 0.1)',
  },
} as const;

export type ColorConfig = typeof colors;

