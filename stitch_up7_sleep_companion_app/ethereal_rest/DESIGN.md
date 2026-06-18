---
name: Ethereal Rest
colors:
  surface: '#e2fffe'
  surface-dim: '#bee1e0'
  surface-bright: '#e2fffe'
  surface-container-lowest: '#ffffff'
  surface-container-low: '#d7fafa'
  surface-container: '#d2f5f4'
  surface-container-high: '#ccefee'
  surface-container-highest: '#c6e9e9'
  on-surface: '#002020'
  on-surface-variant: '#3f484c'
  inverse-surface: '#143535'
  inverse-on-surface: '#d4f8f7'
  outline: '#6f787d'
  outline-variant: '#bfc8cd'
  surface-tint: '#0c6780'
  primary: '#0c6780'
  on-primary: '#ffffff'
  primary-container: '#87ceeb'
  on-primary-container: '#005870'
  inverse-primary: '#89d0ed'
  secondary: '#366572'
  on-secondary: '#ffffff'
  secondary-container: '#baeafa'
  on-secondary-container: '#3c6b78'
  tertiary: '#5e5f5d'
  on-tertiary: '#ffffff'
  tertiary-container: '#c5c4c1'
  on-tertiary-container: '#50514f'
  error: '#ba1a1a'
  on-error: '#ffffff'
  error-container: '#ffdad6'
  on-error-container: '#93000a'
  primary-fixed: '#baeaff'
  primary-fixed-dim: '#89d0ed'
  on-primary-fixed: '#001f29'
  on-primary-fixed-variant: '#004d62'
  secondary-fixed: '#baeafa'
  secondary-fixed-dim: '#9fcedd'
  on-secondary-fixed: '#001f27'
  on-secondary-fixed-variant: '#1b4d5a'
  tertiary-fixed: '#e3e2e0'
  tertiary-fixed-dim: '#c7c6c4'
  on-tertiary-fixed: '#1a1c1a'
  on-tertiary-fixed-variant: '#464745'
  background: '#e2fffe'
  on-background: '#002020'
  surface-variant: '#c6e9e9'
typography:
  display:
    fontFamily: Plus Jakarta Sans
    fontSize: 40px
    fontWeight: '700'
    lineHeight: 48px
    letterSpacing: -0.02em
  headline-lg:
    fontFamily: Plus Jakarta Sans
    fontSize: 28px
    fontWeight: '600'
    lineHeight: 36px
    letterSpacing: -0.01em
  headline-lg-mobile:
    fontFamily: Plus Jakarta Sans
    fontSize: 24px
    fontWeight: '600'
    lineHeight: 32px
  title-md:
    fontFamily: Plus Jakarta Sans
    fontSize: 20px
    fontWeight: '600'
    lineHeight: 28px
  body-lg:
    fontFamily: Plus Jakarta Sans
    fontSize: 18px
    fontWeight: '400'
    lineHeight: 28px
  body-md:
    fontFamily: Plus Jakarta Sans
    fontSize: 16px
    fontWeight: '400'
    lineHeight: 24px
  label-md:
    fontFamily: Plus Jakarta Sans
    fontSize: 14px
    fontWeight: '500'
    lineHeight: 20px
    letterSpacing: 0.01em
  label-sm:
    fontFamily: Plus Jakarta Sans
    fontSize: 12px
    fontWeight: '600'
    lineHeight: 16px
    letterSpacing: 0.05em
rounded:
  sm: 0.25rem
  DEFAULT: 0.5rem
  md: 0.75rem
  lg: 1rem
  xl: 1.5rem
  full: 9999px
spacing:
  base: 8px
  xs: 4px
  sm: 12px
  md: 20px
  lg: 32px
  xl: 48px
  margin-mobile: 24px
  gutter-mobile: 16px
---

## Brand & Style

The design system is centered on the concept of "Atmospheric Clarity." It targets a high-end wellness demographic that seeks a frictionless, tranquil transition into sleep. The aesthetic is a hybrid of **Minimalism** and **Glassmorphism**, leveraging the "Airy" design trend of 2026. 

The emotional goal is to lower the user's cognitive load and heart rate through high-key color palettes, vast negative space, and organic motion. By avoiding dark, high-contrast modes in favor of a soft, luminous environment, the UI mimics the natural light of a clear dawn or a gentle twilight. Every interaction should feel like it is floating on a cushion of air, utilizing subtle depth to organize information without creating visual noise.

## Colors

The palette is restricted to a high-key range to maintain a "light as air" sensation. 

- **Primary (Sky Blue):** Used for active states, primary actions, and brand moments. It represents the clarity of the sky.
- **Secondary (Light Sky Blue):** Used for subtle backgrounds, secondary accents, and soft gradients.
- **Surface (Off White/White):** The foundation. Off-white is used for the base canvas to reduce eye strain, while pure white is reserved for elevated "floating" cards.
- **Typography (Dark Slate Gray):** Chosen over pure black to maintain softness while ensuring high legibility.

Gradients should be used sparingly, moving from #87CEEB to #BFEFFF at a 135-degree angle with high transparency (10-20%) to create a sense of glowing atmosphere.

## Typography

This design system utilizes **Plus Jakarta Sans** for its modern, friendly, and geometric characteristics. The typeface’s open counters and soft terminals complement the rounded UI elements.

- **Scale:** A generous scale with ample line height is required to ensure the content feels unhurried.
- **Hierarchy:** Use font weight primarily to distinguish hierarchy rather than color. Headlines should feel grounded and confident.
- **Alignment:** Center-aligned typography is encouraged for "hero" sleep stats and onboarding screens to enhance the sense of balance. Left-aligned is the default for list-based data.

## Layout & Spacing

The layout philosophy follows a **Fluid Grid** with an emphasis on "Safe Margins." 

- **Grid:** A 4-column grid for mobile with 24px outer margins to provide significant "breathing room" from the device edges.
- **Vertical Rhythm:** Elements are stacked using a 20px (md) or 32px (lg) spacing gap to prevent the UI from feeling cramped.
- **Soft Breaks:** Use white space rather than horizontal rules (dividers) whenever possible. If a divider is necessary, use a 1px line with 5% Dark Slate Gray opacity.
- **Containment:** Content should be grouped into cards that span the full width of the margins.

## Elevation & Depth

Visual hierarchy is achieved through a combination of **Glassmorphism** and **Ambient Shadows**.

- **Surfaces:** The base layer is Off-White (#FAF9F6). Primary cards are Pure White (#FFFFFF).
- **Glass Effect:** Use a backdrop-filter blur (20px to 40px) with a 60% opaque White fill for overlays, navigation bars, and modal sheets. This creates a "frosted" look that preserves the color of the content underneath.
- **Shadows:** Avoid harsh, dark shadows. Use a "Sky Glow" shadow: `box-shadow: 0 12px 32px rgba(135, 206, 235, 0.15)`. This tinted shadow makes elements appear as if they are floating in a luminous environment.
- **Leveling:** 
    - Level 0: Background.
    - Level 1: Static Cards (Subtle 4px blur shadow).
    - Level 2: Interactive elements and Floating Action Buttons (12px-20px blur shadow).

## Shapes

The design system employs a highly organic and approachable shape language. 

- **Corner Radius:** A standard radius of **24px** is applied to all container elements, cards, and primary buttons. This specific radius matches the curvature of modern high-end smartphone displays, creating a seamless "hardware-to-software" transition.
- **Small Elements:** For smaller components like chips or input fields, a 12px radius is used to maintain proportional consistency.
- **Pill Shapes:** Used exclusively for tags and status indicators to differentiate them from actionable buttons.

## Components

### Buttons
- **Primary:** Sky Blue background with White text. 24px rounded corners. Use a subtle inner glow (1px white stroke at 20% opacity) to add a premium finish.
- **Secondary:** White background with a 1px Sky Blue border. 
- **Ghost:** Transparent background with Dark Slate Gray text for low-priority actions.

### Cards
Cards are the primary container. They must be Pure White (#FFFFFF) with a 24px radius and the "Sky Glow" shadow. Internal padding should be a minimum of 20px.

### Chips & Tags
Used for sleep categories or mood tracking. Use a pill shape with a Light Sky Blue (#BFEFFF) background and 40% opacity. Text should be Dark Slate Gray.

### Input Fields
Soft Off-White fills with a 12px corner radius. On focus, the border transitions to a soft Sky Blue with a 4px outer glow.

### Progress Indicators (Sleep Tracking)
Use thick, rounded bars (12px height). The background track should be 10% Sky Blue, and the active progress should be a gradient from Sky Blue to Light Sky Blue.

### Glass Modals
Full-screen overlays should use the backdrop-blur (30px) effect. Content should appear to "fade in" from the center to emphasize the ethereal nature of the system.