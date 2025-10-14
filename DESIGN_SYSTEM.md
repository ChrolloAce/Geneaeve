# 🎨 Geneaeve Design System

## Overview
**Page Type:** Landing Page (Hero Section)  
**Purpose:** Conversion-focused hero for a fintech/investment platform  
**Aesthetic:** Dark, futuristic, minimal, elegant, trustworthy  
**Visual Language:** Rounded corners, gradients, subtle glows, soft contrasts, generous whitespace

### Emotional Pillars
1. **Trust** → Clean typography and dark background
2. **Modernity** → Gradients, motion potential, and glassy buttons
3. **Clarity** → Central alignment and simple copy hierarchy

---

## Grid System & Spacing

| Property | Value |
|----------|-------|
| Canvas width | 1440px |
| Content max-width | 1180px (center-aligned) |
| Margins (left/right) | 130px padding on large screens |
| Gutter spacing | 24px |
| Vertical rhythm | Base unit = 8px |

### Element Spacing

| Element | Top Margin | Bottom Margin | Notes |
|---------|------------|---------------|-------|
| Navbar | 24px | 24px | Fixed to top, transparent background |
| Hero heading | 96px | 16px | Heavy emphasis |
| Subheading | 0 | 32px | Closer to body text feel |
| CTA group | 0 | 40px | Generous breathing room |
| Avatars + Social Proof | 0 | 60px | Final supporting visual |

---

## Color Palette

| Name | Hex | Usage |
|------|-----|-------|
| Primary Background | `#0B0C10` | Deep black-navy, full background |
| Secondary Background | Radial gradient from `#1A1C29` → `#0B0C10` | Used for depth behind hero text |
| Primary Accent (Start) | `#5A3DF0` | CTA + highlight |
| Secondary Accent (End) | `#7E5EFF` | CTA + hover glow |
| Text Primary | `#FFFFFF` | Headline & buttons |
| Text Secondary | `#AEB2C2` | Paragraphs / subtext |
| Border / Outline | `#2B2E40` | Subtle lines on buttons |
| Glow Highlight | `rgba(90,61,240,0.2)` | Ambient radial behind CTAs |

---

## Typography System

**Font Family:** Inter (fallback: Poppins / Satoshi / Space Grotesk)  
**Font Smoothing:** Antialiased, slight letter spacing (-0.2px)

| Level | Size | Weight | Line Height | Color | Use |
|-------|------|--------|-------------|-------|-----|
| Hero Title (H1) | 48px | 700 | 120% | #FFF | Central headline |
| Subheading (H2) | 18px | 400 | 160% | #AEB2C2 | Descriptive text |
| CTA Buttons | 16px | 600 | 140% | #FFF | Buttons |
| Nav Links | 15px | 500 | 140% | #E8E8E8 | Navbar links |
| Stats Text | 14px | 500 | 150% | #C2C2C2 | Social proof |

---

## Navbar Design

### Layout
- **Height:** 80px
- **Width:** Full (1440px)
- **Background:** Transparent (over hero background)
- **Horizontal Padding:** 80px left/right
- **Vertical Padding:** 24px top/bottom
- **Alignment:** Flex — space-between

### Components

#### Left Section - Logo
- Placeholder circle icon (white ring) + text "Logo Ipsum"
- Font size 18px, bold, white

#### Center Section - Nav Links
- Links: "Home", "About", "Services", "FAQs", "Help"
- Horizontal layout with 24px spacing
- Each link in rounded pill (border-radius: 20px, padding: 8px 16px)
- **Active state (Home):** `rgba(122, 94, 255, 0.1)` background + border `#5A3DF0`
- **Hover:** Subtle violet glow

#### Right Section - Actions
- **Pricing:** Ghost-style text link
- **Create Account:** Primary filled button
  - Background: `linear-gradient(90deg, #5A3DF0, #7E5EFF)`
  - Padding: 10px 20px
  - Border radius: 10px
  - Hover: Gradient shift + subtle outer glow

---

## Hero Section

### Structure
- Vertically centered within viewport
- Container height: 760–820px
- Flex-column layout with centered elements

### Elements

#### Headline
- Text: "Unlock Your Potential With Personalized Investment Strategies."
- Alignment: Center
- Max width: 820px
- Weight: Bold
- Animation: Fade-in + subtle upward motion

#### Subtext
- Width: ~640px
- Centered, muted tone
- Color: `#AEB2C2`
- Top margin: 16px

#### CTA Buttons
- Wrapper: flex row, centered, gap: 16px

**Button 1: Learn More**
- Background: Transparent
- Border: 1px solid `#2B2E40`
- Text: White
- Padding: 12px 30px
- Border-radius: 12px
- Hover: Background `rgba(255,255,255,0.05)`

**Button 2: Get Started**
- Background: `linear-gradient(90deg, #5A3DF0, #7E5EFF)`
- Shadow: `0 0 16px rgba(94, 61, 240, 0.3)`
- Text: White
- Padding: 12px 30px
- Border-radius: 12px
- Hover: Brighten gradient, stronger glow

#### Social Proof Row

**Avatar Group**
- 4 profile photos (circle crops)
- Size: 36px each
- Overlap: -12px
- Border: 2px solid `#0B0C10`
- Hover: Scale up 1.05x

**Text**
- Content: "Over 10,000+ Active clients"
- Font size: 14px
- Color: `#C2C2C2`

#### Background Effect
- Radial gradient: `rgba(122, 94, 255, 0.15)` → transparent
- Position: bottom center
- Shape: circular arc / semi-glow

---

## Responsive Behavior

| Breakpoint | Layout Changes |
|------------|----------------|
| ≥1200px (Desktop) | Full layout as described |
| 992–1199px (Tablet Landscape) | Navbar compresses spacing; CTAs stack tighter |
| 768–991px (Tablet Portrait) | Reduce hero title to 40px; avatars center below CTAs |
| <768px (Mobile) | Stack nav links under hamburger; hero text 32px; buttons full-width |
| <480px (Small Mobile) | Increase top padding; hide glow to save space |

---

## Interaction States

| Component | State | Visual Feedback |
|-----------|-------|-----------------|
| Navbar link | Hover | Text color brightens; subtle glow |
| Navbar link (active) | Active | Background fill + violet border |
| CTA (Get Started) | Hover | Gradient shifts + glow intensifies |
| CTA (Learn More) | Hover | White border brightens |
| Avatar group | Hover | Slight scale & z-index bump |
| Page Scroll | Scroll | Navbar gains semi-transparent backdrop blur |

---

## Micro-Animations

| Element | Animation | Duration | Timing |
|---------|-----------|----------|--------|
| Hero headline | Fade-in + slide-up | 600ms | ease-out |
| Subtext | Fade-in delayed by 150ms | 600ms | ease-out |
| CTAs | Scale-in from 0.95 | 400ms | ease-in-out |
| Glow background | Subtle pulsing opacity (0.8 → 1.0) | 6s loop | linear |

