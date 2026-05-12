---
name: SmartClass Vision
colors:
  surface: '#14121b'
  surface-dim: '#14121b'
  surface-bright: '#3a3842'
  surface-container-lowest: '#0e0d16'
  surface-container-low: '#1c1a24'
  surface-container: '#201e28'
  surface-container-high: '#2b2932'
  surface-container-highest: '#35333e'
  on-surface: '#e5e0ee'
  on-surface-variant: '#c9c4d8'
  inverse-surface: '#e5e0ee'
  inverse-on-surface: '#312f39'
  outline: '#928ea1'
  outline-variant: '#484555'
  surface-tint: '#c9bfff'
  primary: '#c9bfff'
  on-primary: '#2e009c'
  primary-container: '#917eff'
  on-primary-container: '#28008a'
  inverse-primary: '#5d3fe0'
  secondary: '#8dd5b2'
  on-secondary: '#003825'
  secondary-container: '#00573b'
  on-secondary-container: '#83caa7'
  tertiary: '#ebc32e'
  on-tertiary: '#3c2f00'
  tertiary-container: '#cda705'
  on-tertiary-container: '#4d3e00'
  error: '#ffb4ab'
  on-error: '#690005'
  error-container: '#93000a'
  on-error-container: '#ffdad6'
  primary-fixed: '#e5deff'
  primary-fixed-dim: '#c9bfff'
  on-primary-fixed: '#1a0063'
  on-primary-fixed-variant: '#441cc8'
  secondary-fixed: '#a9f2cd'
  secondary-fixed-dim: '#8dd5b2'
  on-secondary-fixed: '#002114'
  on-secondary-fixed-variant: '#005137'
  tertiary-fixed: '#ffe082'
  tertiary-fixed-dim: '#ebc32e'
  on-tertiary-fixed: '#231b00'
  on-tertiary-fixed-variant: '#564500'
  background: '#14121b'
  on-background: '#e5e0ee'
  surface-variant: '#35333e'
typography:
  display-lg:
    fontFamily: Inter
    fontSize: 40px
    fontWeight: '700'
    lineHeight: 48px
    letterSpacing: -0.02em
  headline-lg:
    fontFamily: Inter
    fontSize: 32px
    fontWeight: '700'
    lineHeight: 38px
    letterSpacing: -0.01em
  headline-md:
    fontFamily: Inter
    fontSize: 24px
    fontWeight: '600'
    lineHeight: 30px
  body-lg:
    fontFamily: Inter
    fontSize: 18px
    fontWeight: '400'
    lineHeight: 28px
  body-md:
    fontFamily: Inter
    fontSize: 16px
    fontWeight: '400'
    lineHeight: 24px
  label-bold:
    fontFamily: Inter
    fontSize: 14px
    fontWeight: '600'
    lineHeight: 20px
  label-sm:
    fontFamily: Inter
    fontSize: 12px
    fontWeight: '500'
    lineHeight: 16px
rounded:
  sm: 0.25rem
  DEFAULT: 0.5rem
  md: 0.75rem
  lg: 1rem
  xl: 1.5rem
  full: 9999px
spacing:
  container-margin: 20px
  stack-gap-lg: 24px
  stack-gap-md: 16px
  stack-gap-sm: 8px
  inline-gutter: 12px
---

## Brand & Style

This design system is built on a "Futuristic Academic" aesthetic, blending high-contrast digital utility with a playful, energetic spirit. The interface targets a modern learner who values speed, clarity, and innovation.

The visual style is a hybrid of **High-Contrast Dark Mode** and **Glassmorphism**. It utilizes an absolute black canvas to make vibrant educational content pop, while secondary information lives within semi-transparent, blurred layers. The emotional response is intended to be "Smart" and "Premium"—making learning feel less like a chore and more like an immersive digital experience. Key characteristics include massive headlines, oversized interactive zones, and a rhythmic use of rounded containers.

## Colors

The palette is centered on a "Deep Space" black foundation. 

- **Primary Brand:** A saturated, electric purple (#7B61FF) used for primary actions, progress indicators, and hero brand elements.
- **Success/Mint:** A soft, high-visibility mint green (#B5FFD9) reserved for completed lessons, correct answers, and achievement states.
- **Highlight/Yellow:** A warm, energetic yellow (#FFD541) used sparingly for notifications, streaks, or to draw attention to new curriculum items.
- **Neutrals:** Text utilizes pure white for maximum legibility against the #000000 background, with secondary metadata in a medium gray. Surface containers use a subtle dark gray (#1A1A1A) to provide depth without breaking the high-contrast aesthetic.

## Typography

This design system uses **Inter** for its neutral, highly legible, and modern characteristics. 

The type hierarchy is "Top-Heavy," meaning headlines are significantly larger and bolder than standard utility text to create a clear sense of place. **Display-lg** is reserved for onboarding and hero section headers. **Body text** utilizes a generous 1.5x line height to ensure reading long-form educational content is comfortable. All labels and secondary information should maintain a medium weight to prevent them from disappearing against the black background.

## Layout & Spacing

The layout philosophy follows a **Card-Based Fluid Grid**. Elements are grouped into distinct modules that span the full width of the screen (minus margins) or sit side-by-side in a 2-column configuration.

- **Margins:** A consistent 20px horizontal margin is applied to the main screen container.
- **Vertical Rhythm:** Use 24px gaps between major sections/cards and 16px gaps for related items within a section.
- **Padding:** Internal card padding should be a minimum of 20px to allow the "Smart" aesthetic to breathe. 
- **Reflow:** On larger tablet screens, the layout transitions from a single-column stack to a multi-column masonry-style grid to prevent lines of text from becoming too long.

## Elevation & Depth

Hierarchy in this design system is achieved through **Tonal Stacking** and **Glassmorphism** rather than traditional drop shadows.

1.  **Level 0 (Base):** Pure #000000 background.
2.  **Level 1 (Primary Cards):** Opaque dark gray (#1A1A1A) surfaces.
3.  **Level 2 (Secondary Overlays):** Glassmorphic surfaces with a 20% white opacity and a 16px backdrop blur. These are used for floating menus, navigation bars, and chip backgrounds.
4.  **Accent Depth:** Primary actions use the Brand Purple without shadows, relying on the high contrast against black to indicate interactivity.

Stroke is used as a primary "depth" indicator—a subtle 1px border (#FFFFFF with 10% opacity) helps define the edges of glassmorphic elements.

## Shapes

The shape language is ultra-rounded and friendly, moving away from the "boxy" feel of traditional corporate educational tools.

- **Main Cards:** 24px corner radius.
- **Buttons & Inputs:** 16px corner radius to match the inner rhythm of the cards.
- **Small Elements (Chips/Badges):** Fully pill-shaped (rounded-full).

The "playful" aspect of the system is reinforced by these large radii, making the interface feel soft and touch-friendly.

## Components

- **Buttons:** Primary buttons are large (56px height) and solid Purple (#7B61FF) with white bold text. Secondary buttons use the Glassmorphic style with a subtle white border.
- **Cards:** Cards are the core organizational unit. They should use the 24px radius and often feature a background image or a gradient mesh to provide visual energy.
- **Input Fields:** Search bars and text inputs use a 16px radius and a dark gray fill (#1A1A1A). The active state is indicated by a 2px purple border.
- **Chips:** Used for categories or tags (e.g., "Art Class," "Video"). They are pill-shaped and utilize the glassmorphic background to remain secondary to main card headlines.
- **Floating Action Button (FAB):** A circular purple button with a white icon, positioned in the bottom right, used for "Ask a Question" or "Start New Lesson."
- **Iconography:** Icons should be thick-stroked (2px or 3px) and slightly playful/rounded, avoiding razor-sharp edges.