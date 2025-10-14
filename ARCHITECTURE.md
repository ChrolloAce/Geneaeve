# 🏗️ Geneaeve Architecture Overview

## Project Structure Philosophy

This project follows strict **OOP-first**, **modular design**, and **single responsibility** principles.

### Core Principles

1. **File Length Limits**
   - Maximum 500 lines per file
   - Target: Keep files under 400 lines
   - 1000 lines is unacceptable

2. **OOP-First Approach**
   - Every functionality in a dedicated class/component
   - Favor composition over inheritance
   - Built for reuse, not just "make it work"

3. **Single Responsibility Principle**
   - One file = one concern
   - One class = one responsibility
   - One function = one task

4. **Modular Design**
   - Components connect like Lego blocks
   - Interchangeable, testable, isolated
   - Minimal coupling between components

5. **Manager & Coordinator Patterns**
   - UI logic → ViewModel/Component
   - Business logic → Manager
   - Navigation/state flow → Coordinator

---

## Directory Structure

```
Geneaeve/
├── src/
│   ├── app/                    # Next.js app directory
│   │   ├── layout.tsx         # Root layout
│   │   └── page.tsx           # Landing page
│   │
│   ├── components/            # UI Components
│   │   ├── navbar/
│   │   │   ├── Navbar.tsx
│   │   │   ├── NavbarLogo.tsx
│   │   │   ├── NavbarLinks.tsx
│   │   │   └── NavbarActions.tsx
│   │   │
│   │   ├── hero/
│   │   │   ├── HeroSection.tsx
│   │   │   ├── HeroHeadline.tsx
│   │   │   ├── HeroSubtext.tsx
│   │   │   └── HeroBackground.tsx
│   │   │
│   │   ├── cta/
│   │   │   ├── CTAButton.tsx
│   │   │   └── CTAButtonGroup.tsx
│   │   │
│   │   └── social-proof/
│   │       ├── SocialProof.tsx
│   │       ├── AvatarGroup.tsx
│   │       └── StatsText.tsx
│   │
│   ├── config/                # Configuration files
│   │   ├── theme.config.ts    # Theme configuration
│   │   ├── colors.config.ts   # Color palette
│   │   └── typography.config.ts
│   │
│   ├── styles/                # Global styles
│   │   └── globals.css
│   │
│   └── types/                 # TypeScript types
│       └── components.types.ts
│
├── public/                    # Static assets
│   └── images/
│
├── DESIGN_SYSTEM.md          # Design documentation
├── ARCHITECTURE.md           # This file
├── package.json
├── tsconfig.json
├── tailwind.config.ts
└── next.config.js
```

---

## Component Architecture

### Navbar Hierarchy
```
Navbar (Container)
├── NavbarLogo (Brand identity)
├── NavbarLinks (Navigation items)
└── NavbarActions (CTA buttons)
```

**Responsibilities:**
- `Navbar`: Layout orchestration, responsive behavior
- `NavbarLogo`: Brand rendering
- `NavbarLinks`: Navigation state management
- `NavbarActions`: Action button rendering

### Hero Section Hierarchy
```
HeroSection (Container)
├── HeroHeadline (Main title)
├── HeroSubtext (Description)
├── CTAButtonGroup (Call-to-actions)
├── SocialProof (Trust indicators)
└── HeroBackground (Visual effects)
```

**Responsibilities:**
- `HeroSection`: Layout composition
- `HeroHeadline`: Title rendering with animations
- `HeroSubtext`: Subtitle rendering
- `CTAButtonGroup`: CTA orchestration
- `SocialProof`: Trust badge rendering
- `HeroBackground`: Visual effects (gradients, glows)

### Button Components
```
CTAButtonGroup
├── CTAButton (Primary)
└── CTAButton (Secondary)
```

**Responsibilities:**
- `CTAButton`: Reusable button with variant support
- `CTAButtonGroup`: Button layout and spacing

### Social Proof Components
```
SocialProof
├── AvatarGroup (User avatars)
└── StatsText (Client count)
```

**Responsibilities:**
- `AvatarGroup`: Avatar rendering and overlap
- `StatsText`: Statistics display

---

## Styling Strategy

### Tailwind + Custom Theme
- Use Tailwind for utility-first styling
- Custom theme configuration in `tailwind.config.ts`
- Design tokens stored in config files
- No inline style objects (use Tailwind classes)

### Configuration Files
- `colors.config.ts`: Centralized color palette
- `typography.config.ts`: Font sizes, weights, line heights
- `theme.config.ts`: Spacing, breakpoints, animations

---

## TypeScript Strategy

### Type Safety
- Strict TypeScript mode enabled
- Interface for every component prop
- Centralized type definitions
- No implicit `any` types

### Type Files
```typescript
// components.types.ts
export interface NavbarProps {
  variant?: 'transparent' | 'solid';
}

export interface CTAButtonProps {
  variant: 'primary' | 'secondary';
  children: React.ReactNode;
  onClick?: () => void;
}

export interface HeroSectionProps {
  headline: string;
  subtext: string;
}
```

---

## Testing Strategy (Future)

### Component Testing
- Each component has dedicated test file
- Test files co-located with components
- Unit tests for logic
- Integration tests for interactions

### File Naming
```
Component.tsx
Component.test.tsx
Component.types.ts
```

---

## Performance Optimization

### Code Splitting
- Dynamic imports for heavy components
- Route-based splitting via Next.js
- Lazy loading for below-fold content

### Image Optimization
- Next.js Image component for avatars
- WebP format with fallbacks
- Responsive image loading

### CSS Optimization
- Tailwind CSS purging
- Critical CSS inlining
- Minimal custom CSS

---

## Scalability Considerations

### Extension Points
1. **Theme Switching**: Dark/light mode support ready
2. **Internationalization**: String externalization prepared
3. **Analytics**: Event tracking hooks
4. **A/B Testing**: Component variant system

### Dependency Injection
- Props for external dependencies
- No hard-coded API calls in components
- Manager pattern for business logic

---

## Development Workflow

### File Creation Rules
1. Check if file exceeds 400 lines → split immediately
2. Assess single responsibility → refactor if violated
3. Ensure component is reusable → extract if too specific
4. Add TypeScript types → no implicit types allowed

### Refactoring Triggers
- File reaches 350 lines
- Component has multiple responsibilities
- Tight coupling detected
- Code duplication found

---

## Naming Conventions

### Components
- PascalCase: `HeroSection`, `CTAButton`
- Descriptive: `NavbarActions` not `NavActions`
- Noun-based: What it IS, not what it DOES

### Functions
- camelCase: `handleClick`, `formatText`
- Verb-based: What it DOES
- Clear intent: `calculateTotalPrice` not `calc`

### Files
- Match component name: `HeroSection.tsx`
- Types suffix: `components.types.ts`
- Config suffix: `theme.config.ts`

---

## Dependencies

### Core
- Next.js 14+ (App Router)
- React 18+
- TypeScript 5+
- Tailwind CSS 3+

### Development
- ESLint (strict rules)
- Prettier (code formatting)
- Husky (git hooks)

---

## Future Enhancements

1. **Animation Library**: Framer Motion for advanced animations
2. **State Management**: Zustand if global state needed
3. **Form Handling**: React Hook Form for lead capture
4. **Analytics**: Segment or Mixpanel integration
5. **Testing**: Jest + React Testing Library

