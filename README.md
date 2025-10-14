# 🚀 Geneaeve - Investment Platform Landing Page

A modern, dark-themed landing page for a fintech investment platform built with Next.js, TypeScript, and Tailwind CSS.

## ✨ Features

- **Modern Design**: Dark, futuristic aesthetic with gradients and subtle glows
- **Fully Responsive**: Optimized for all screen sizes
- **Type-Safe**: Built with TypeScript for robust development
- **Modular Architecture**: OOP-first approach with single responsibility components
- **Animated**: Smooth micro-animations and transitions
- **Performance**: Optimized with Next.js 14 App Router

## 🏗️ Architecture

This project follows strict architectural principles:

- **OOP-First**: Every functionality in a dedicated component
- **Single Responsibility**: One component = one concern
- **Modular Design**: Components connect like Lego blocks
- **File Length Limits**: Maximum 500 lines per file
- **Type Safety**: Strict TypeScript with no implicit `any`

See [ARCHITECTURE.md](./ARCHITECTURE.md) for detailed architecture documentation.

## 🎨 Design System

Complete design system documentation including:
- Color palette
- Typography system
- Spacing and grid
- Component specifications
- Responsive breakpoints
- Interaction states

See [DESIGN_SYSTEM.md](./DESIGN_SYSTEM.md) for full design specifications.

## 📁 Project Structure

```
Geneaeve/
├── src/
│   ├── app/                    # Next.js app directory
│   │   ├── layout.tsx         # Root layout
│   │   └── page.tsx           # Landing page
│   │
│   ├── components/            # UI Components
│   │   ├── navbar/           # Navbar components
│   │   ├── hero/             # Hero section components
│   │   ├── cta/              # CTA button components
│   │   └── social-proof/     # Social proof components
│   │
│   ├── config/               # Configuration files
│   │   ├── colors.config.ts
│   │   ├── typography.config.ts
│   │   └── theme.config.ts
│   │
│   ├── styles/               # Global styles
│   │   └── globals.css
│   │
│   └── types/                # TypeScript types
│       └── components.types.ts
│
├── DESIGN_SYSTEM.md          # Design documentation
├── ARCHITECTURE.md           # Architecture documentation
└── README.md                 # This file
```

## 🚀 Getting Started

### Prerequisites

- Node.js 18.x or higher
- npm or yarn

### Installation

1. Clone the repository:
```bash
cd /Users/ernestolopez/Desktop/Geneaeve
```

2. Install dependencies:
```bash
npm install
```

3. Run the development server:
```bash
npm run dev
```

4. Open [http://localhost:3000](http://localhost:3000) in your browser.

## 📦 Build for Production

```bash
npm run build
npm start
```

## 🧩 Component Overview

### Navbar
- `Navbar`: Main navigation container
- `NavbarLogo`: Brand identity
- `NavbarLinks`: Navigation menu
- `NavbarActions`: CTA buttons

### Hero Section
- `HeroSection`: Hero container
- `HeroHeadline`: Main title
- `HeroSubtext`: Description
- `HeroBackground`: Visual effects

### CTA Buttons
- `CTAButton`: Reusable button component
- `CTAButtonGroup`: Button layout manager

### Social Proof
- `SocialProof`: Trust indicator container
- `AvatarGroup`: User avatar display
- `StatsText`: Statistics display

## 🎯 Key Technologies

- **Framework**: Next.js 14 (App Router)
- **Language**: TypeScript 5
- **Styling**: Tailwind CSS 3
- **Font**: Inter (Google Fonts)

## 🎨 Color Palette

| Color | Hex | Usage |
|-------|-----|-------|
| Primary Background | `#0B0C10` | Main background |
| Primary Accent | `#5A3DF0` | CTAs and highlights |
| Secondary Accent | `#7E5EFF` | Gradients |
| Text Primary | `#FFFFFF` | Headlines |
| Text Secondary | `#AEB2C2` | Body text |

## 📱 Responsive Breakpoints

- **Desktop**: ≥1200px
- **Tablet Landscape**: 992-1199px
- **Tablet Portrait**: 768-991px
- **Mobile**: <768px

## 🔧 Development Guidelines

### File Creation Rules
1. Keep files under 400 lines (500 max)
2. One responsibility per component
3. Ensure components are reusable
4. Always add TypeScript types

### Naming Conventions
- Components: PascalCase (`HeroSection`)
- Functions: camelCase (`handleClick`)
- Files: Match component name (`HeroSection.tsx`)
- Types: PascalCase with suffix (`HeroSectionProps`)

## 📄 License

This project is proprietary and confidential.

## 🤝 Contributing

This is a private project. Please contact the maintainers for contribution guidelines.

---

Built with ❤️ using Next.js and TypeScript

