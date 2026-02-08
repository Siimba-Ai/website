# Siimba Design Skill

## Core Identity
Siimba uses a liquid glass aesthetic - translucent, atmospheric, fluid. Think clarity without clutter, lightness without frivolity. The app eliminates decision fatigue through calm, actionable morning moments.

---

## Critical Anti-Patterns (Never Use These)

You tend to converge toward generic "AI slop" aesthetics. Siimba must avoid this at all costs:

**❌ NEVER:**
- Inter, Roboto, Open Sans, Lato, Arial, system fonts (web only - iOS system fonts are fine)
- Purple gradients on white backgrounds
- Solid white (#FFFFFF) backgrounds
- Generic card shadows (use glassmorphism instead)
- Linear animations or ease/ease-in-out
- Cookie-cutter three-column layouts
- Predictable, "safe" design choices

**✅ ALWAYS:**
- Distinctive fonts (Space Grotesk, Bricolage Grotesque, IBM Plex Sans)
- Liquid glass with subtle color tints
- Atmospheric backgrounds with depth
- Spring physics animations (cubic-bezier(0.34, 1.56, 0.64, 1))
- Purposeful, high-impact motion
- Context-specific, intentional designs

---

## Typography

**Philosophy:** Typography signals quality. Use distinctive fonts that elevate the experience.

**Web Primary Choices (rotate between these):**
- Space Grotesk (geometric, clean)
- Bricolage Grotesque (distinctive, warm)
- IBM Plex Sans (technical, refined)
- JetBrains Mono (code aesthetic, when appropriate)

**Load from Google Fonts:**
```html
<link href="https://fonts.googleapis.com/css2?family=Space+Grotesk:wght@400;600;700&display=swap" rel="stylesheet">
```

**Type Scale:**
- Hero/Greeting: 32px, weight 700
- Card Title: 20px, weight 600
- Body: 16px, weight 400
- Caption: 13px, weight 500
- Button: 16px, weight 600

**Pairing Principle:** High contrast creates interest. Use weight extremes (300/700, not 400/600) and size jumps of 3x+.

---

## Color Palette

```css
/* Primary Colors */
--blush-pink: #E8B4B8;      /* Social/relationships */
--sage-green: #A8C5B4;      /* Productivity/wellness */
--warm-beige: #F5F1ED;      /* Base background */

/* Supporting */
--off-white: #FEFDFB;
--soft-charcoal: #4A5759;   /* Primary text */
--light-gray: #E0DDD9;

/* Glass Tints */
--pink-glass: rgba(232, 180, 184, 0.15);
--green-glass: rgba(168, 197, 180, 0.15);
--white-glass: rgba(255, 255, 255, 0.7);
```

**Color Philosophy:** Dominant colors with sharp accents outperform evenly-distributed palettes. Commit to the aesthetic.

---

## Glassmorphism Effects

```css
/* Base Glass Card */
.glass-card {
  background: rgba(255, 255, 255, 0.7);
  backdrop-filter: blur(20px);
  -webkit-backdrop-filter: blur(20px);
  border: 1px solid rgba(255, 255, 255, 0.3);
  border-radius: 24px;
  box-shadow: 0 8px 32px rgba(0, 0, 0, 0.08);
}

/* Pink Tinted (Social) */
.glass-card-pink {
  background: rgba(232, 180, 184, 0.15);
  backdrop-filter: blur(20px);
}

/* Green Tinted (Productivity) */
.glass-card-green {
  background: rgba(168, 197, 180, 0.15);
  backdrop-filter: blur(20px);
}
```

**Critical:** Never use solid backgrounds. Always use glassmorphism with blur.

---

## Backgrounds & Atmosphere

Create depth and atmosphere. Never use flat solid colors.

**Atmospheric Background Pattern:**
```css
background: 
  radial-gradient(at 20% 30%, rgba(232, 180, 184, 0.08) 0px, transparent 50%),
  radial-gradient(at 80% 70%, rgba(168, 197, 180, 0.08) 0px, transparent 50%),
  #F5F1ED;
```

**Alternative: Subtle Geometric Pattern**
```css
background-color: #F5F1ED;
background-image: 
  repeating-linear-gradient(45deg, transparent, transparent 35px, 
    rgba(168, 197, 180, 0.03) 35px, rgba(168, 197, 180, 0.03) 70px);
```

---

## Motion & Animation

**Philosophy:** One well-orchestrated moment beats many scattered effects. Focus on high-impact interactions.

**Critical: Use spring physics, NEVER linear**

```css
/* Preferred Timing Functions */
--spring: cubic-bezier(0.34, 1.56, 0.64, 1);
--smooth-out: cubic-bezier(0.4, 0.0, 1, 1);
--smooth-in: cubic-bezier(0.0, 0.0, 0.2, 1);

/* NEVER use: linear, ease, ease-in-out */
```

**Key Animation Patterns:**

Card Swipe (signature interaction):
```css
.card-approved {
  animation: swipe-out 400ms cubic-bezier(0.34, 1.56, 0.64, 1);
  transform: translateX(120%) rotate(8deg);
}
```

Staggered Reveal (page load):
```css
.card:nth-child(1) { animation-delay: 0ms; }
.card:nth-child(2) { animation-delay: 100ms; }
.card:nth-child(3) { animation-delay: 200ms; }
```

**React/Framer Motion:**
```jsx
<motion.div
  initial={{ opacity: 0, y: 20 }}
  animate={{ opacity: 1, y: 0 }}
  transition={{ type: "spring", stiffness: 300, damping: 30 }}
/>
```

---

## Component Patterns

### Approval Cards

**Structure:**
- Border radius: 24px
- Padding: 24px
- Glass background with color tint
- Category badge (auto-width, 28-32px height, 14px radius)
- Title: 20px, weight 600
- Description: 16px, weight 400
- Buttons: 48px height, 16px radius

**Button Styling:**
```css
/* Primary (Approve) */
.btn-primary {
  background: #A8C5B4;
  color: #FEFDFB;
  padding: 14px 32px;
  border-radius: 16px;
  font-weight: 600;
  transition: all 150ms cubic-bezier(0.34, 1.56, 0.64, 1);
}

.btn-primary:hover {
  transform: scale(1.02);
  box-shadow: 0 8px 24px rgba(168, 197, 180, 0.3);
}
```

### Chat Interface

**Message Bubbles:**
- AI (left): `rgba(255, 255, 255, 0.9)` with blur
- User (right): `rgba(168, 197, 180, 0.25)` with blur
- Max width: 75%
- Padding: 12px 16px
- Border radius: 20px (adjust corners by side)

---

## Spacing Scale

```
4px   - Micro
8px   - XXS
12px  - XS
16px  - SM (default gap)
24px  - MD (card padding, section spacing)
32px  - LG
48px  - XL
64px  - XXL
```

**Principle:** Prefer larger jumps (8px → 24px) over incremental steps for clearer hierarchy.

---

## Design Principles

1. **Think Outside the Box**: Vary your choices. Rotate fonts, themes, and patterns. Never default to the same solution twice.

2. **High Contrast Over Timid**: Use weight extremes, size jumps of 3x+, dominant colors with sharp accents.

3. **Commit to Aesthetics**: Pick a direction and execute fully. Cohesion beats individual perfection.

4. **One Perfect Moment**: Focus animation on signature interactions (card swipe) rather than scattering effects.

5. **Atmosphere Over Flat**: Layer depth through glassmorphism, gradients, and subtle patterns.

---

## Implementation Checklist

When building Siimba interfaces, verify:

- [ ] Using distinctive font (NOT Inter/Roboto)
- [ ] Atmospheric background (NOT solid white)
- [ ] Glassmorphism effects with backdrop-filter blur
- [ ] Spring animations (NOT linear/ease)
- [ ] Color tints at 15% opacity max
- [ ] Staggered reveals for multiple elements
- [ ] High contrast typography (weight 300/700)
- [ ] 24px border radius on cards
- [ ] Purposeful motion on key interactions

---

## React/Web Specific

**CSS Variables Setup:**
```css
:root {
  --color-pink: #E8B4B8;
  --color-sage: #A8C5B4;
  --color-beige: #F5F1ED;
  --color-charcoal: #4A5759;
  
  --glass-white: rgba(255, 255, 255, 0.7);
  --glass-pink: rgba(232, 180, 184, 0.15);
  --glass-sage: rgba(168, 197, 180, 0.15);
  
  --spring: cubic-bezier(0.34, 1.56, 0.64, 1);
  --radius-lg: 24px;
  --radius-md: 16px;
}
```

**Tailwind Config (if using):**
```js
theme: {
  extend: {
    colors: {
      pink: '#E8B4B8',
      sage: '#A8C5B4',
      beige: '#F5F1ED',
    },
    fontFamily: {
      sans: ['Space Grotesk', 'system-ui', 'sans-serif'],
    },
    transitionTimingFunction: {
      'spring': 'cubic-bezier(0.34, 1.56, 0.64, 1)',
    },
  },
}
```

---

## iOS Specific

**SwiftUI Glass Effect:**
```swift
.background(.ultraThinMaterial)
.background(Color.white.opacity(0.7))
.cornerRadius(24)
.shadow(color: Color.black.opacity(0.08), radius: 16, x: 0, y: 8)
```

**Spring Animations:**
```swift
.animation(.spring(response: 0.6, dampingFraction: 0.8), value: isApproved)
```

**Color Assets:** Create adaptive color sets in Assets.xcassets for light/dark mode support.

---

## Final Reminder

**Avoid convergence at all costs.** If you find yourself making the same choices as before, try something different. The goal is consistency in *quality*, not repetition in *execution*. Make unexpected choices that feel genuinely designed for context.

Siimba should never look like it was generated by AI. Every design decision should feel intentional, distinctive, and delightful.
