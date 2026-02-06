# Siimba Brand Identity & Design System

## Brand Essence

**Mission:** Eliminate decision fatigue by transforming administrative chaos into calm, actionable morning moments.

**Personality:** Clean, straightforward, liquid glass aesthetic - clarity without clutter, lightness without frivolity.

**Feeling:** Like having a really competent, thoughtful assistant who organized your day while you slept.

---

## Anti-Patterns: What Siimba Is NOT

**Never use these "AI slop" defaults:**
- ❌ Inter, Roboto, Arial, Open Sans, Lato, system fonts
- ❌ Purple gradients on white backgrounds
- ❌ Generic card shadows (use glassmorphism instead)
- ❌ Predictable three-column layouts
- ❌ Solid color backgrounds (use atmospheric depth)
- ❌ Linear animations (use springs and ease-out)
- ❌ Cookie-cutter component patterns

**Siimba's distinctive approach:**
- ✅ Liquid glass with subtle color tints
- ✅ Thoughtful typography choices
- ✅ Atmospheric backgrounds with depth
- ✅ Smooth, fluid motion with purpose
- ✅ Cohesive aesthetic that feels designed, not generated

---

## Color Palette

### Primary Colors

```
Blush Pink (Social/Relationships)
HEX: #E8B4B8
RGB: 232, 180, 184
Usage: Social cards, relationship reminders, communication tasks

Sage Green (Productivity/Wellness)
HEX: #A8C5B4
RGB: 168, 197, 180
Usage: Calendar items, health/wellness, focus blocks

Warm Beige (Base)
HEX: #F5F1ED
RGB: 245, 241, 237
Usage: Main background, neutral cards
```

### Supporting Colors

```
Off White
HEX: #FEFDFB
RGB: 254, 253, 251
Usage: Card backgrounds, highlights

Soft Charcoal
HEX: #4A5759
RGB: 74, 87, 89
Usage: Primary text, important labels

Light Gray
HEX: #E0DDD9
RGB: 224, 221, 217
Usage: Borders, dividers, disabled states
```

---

## Typography

### Font Philosophy
Typography instantly signals quality. We use distinctive fonts that elevate the experience, never settling for generic defaults.

### Font Stack

**Primary (Headings & UI):**
```
iOS: SF Pro Display (System - acceptable for native iOS)
Web: 'Space Grotesk', 'Inter', system-ui, sans-serif
Alternative: 'Bricolage Grotesque', 'JetBrains Mono'
```

**CRITICAL: When coding for web, actively choose fonts beyond Inter. Rotate between:**
- Space Grotesk (geometric, clean)
- Bricolage Grotesque (distinctive, approachable)
- IBM Plex Sans (technical, refined)
- Source Sans 3 (professional, readable)

**Never default to:** Inter, Roboto, Open Sans, Lato, Arial, system fonts (except on native iOS)

**For special contexts:**
- Code/Technical aesthetic: JetBrains Mono, Fira Code
- Editorial/Content: Crimson Pro, Newsreader
- Monospace accents: Space Mono, JetBrains Mono

**Load fonts efficiently:**
```html
<!-- Google Fonts -->
<link rel="preconnect" href="https://fonts.googleapis.com">
<link href="https://fonts.googleapis.com/css2?family=Space+Grotesk:wght@400;600;700&display=swap" rel="stylesheet">
```

### Type Scale

```
Hero/Greeting: 32px, Weight 600
Card Title: 20px, Weight 600
Card Description: 16px, Weight 400
Body Text: 15px, Weight 400
Caption/Meta: 13px, Weight 500
Button Text: 16px, Weight 600
```

### Text Colors
- Primary Text: #4A5759 (Soft Charcoal)
- Secondary Text: #8A9294 (60% opacity of Charcoal)
- Disabled Text: #C4C7C8 (30% opacity of Charcoal)

---

## Glassmorphism Effects

### Card Styling

```css
/* Base Glass Card */
background: rgba(255, 255, 255, 0.7);
backdrop-filter: blur(20px);
-webkit-backdrop-filter: blur(20px);
border: 1px solid rgba(255, 255, 255, 0.3);
border-radius: 24px;
box-shadow: 0 8px 32px rgba(0, 0, 0, 0.08);
```

### Color Tinted Cards

```css
/* Pink Tinted (Social) */
background: rgba(232, 180, 184, 0.15);
backdrop-filter: blur(20px);

/* Green Tinted (Productivity) */
background: rgba(168, 197, 180, 0.15);
backdrop-filter: blur(20px);
```

### Depth Layers

```
Layer 1 (Background): blur(0px), no shadow
Layer 2 (Content): blur(20px), shadow: 0 8px 32px rgba(0,0,0,0.08)
Layer 3 (Floating): blur(24px), shadow: 0 12px 48px rgba(0,0,0,0.12)
```

---

## Backgrounds & Atmosphere

### Philosophy
Create depth and atmosphere, never settle for flat solid colors. Backgrounds should enhance the liquid glass aesthetic by providing subtle context and visual interest.

### Primary Background Approach
**Warm Beige base (#F5F1ED) with atmospheric enhancements:**

**Option 1: Subtle Gradient Mesh**
```css
background: 
  radial-gradient(at 20% 30%, rgba(232, 180, 184, 0.08) 0px, transparent 50%),
  radial-gradient(at 80% 70%, rgba(168, 197, 180, 0.08) 0px, transparent 50%),
  #F5F1ED;
```

**Option 2: Geometric Pattern Overlay**
```css
background-color: #F5F1ED;
background-image: 
  repeating-linear-gradient(45deg, transparent, transparent 35px, rgba(168, 197, 180, 0.03) 35px, rgba(168, 197, 180, 0.03) 70px);
```

**Option 3: Noise Texture (subtle grain)**
```css
background: #F5F1ED;
&::after {
  content: '';
  position: absolute;
  inset: 0;
  background-image: url('data:image/svg+xml,...'); /* noise pattern */
  opacity: 0.015;
  mix-blend-mode: overlay;
}
```

### Card Backgrounds
Cards should feel like they're floating in atmosphere:
- Base glass: `rgba(255, 255, 255, 0.7)` with `backdrop-filter: blur(20px)`
- Never use solid white backgrounds
- Tinted variants use color at 15% opacity max

### Dark Mode Backgrounds
```css
/* Dark mode atmosphere */
background:
  radial-gradient(at 30% 20%, rgba(168, 197, 180, 0.06) 0px, transparent 50%),
  radial-gradient(at 70% 80%, rgba(232, 180, 184, 0.06) 0px, transparent 50%),
  #1C1C1E;
```

### Anti-patterns
❌ Solid white (#FFFFFF) backgrounds
❌ Harsh gradients with high contrast
❌ Busy patterns that compete with content
❌ Generic mesh gradients (purple/blue)

✅ Subtle atmospheric depth
✅ Layered transparency
✅ Contextual color hints
✅ Soft, organic gradients

---

## Spacing System

```
4px   - Micro (icon padding, tight spacing)
8px   - XXS (button padding, small gaps)
12px  - XS (form field padding)
16px  - SM (card padding, default gap)
24px  - MD (section spacing, card margins)
32px  - LG (major section breaks)
48px  - XL (page margins)
64px  - XXL (hero spacing)
```

**Spacing Philosophy:**
Use the scale consistently. Prefer larger jumps (8px → 24px) over incremental steps (8px → 12px → 16px). This creates clearer visual hierarchy.

---

## Components

### Approval Cards

**Structure:**
- Width: Full width - 32px margins (mobile), max 420px (web)
- Height: Auto, min 160px
- Padding: 24px
- Border Radius: 24px
- Stack: Overlap by 12px when in deck view

**States:**
- Default: 100% opacity, full shadow
- Active (on swipe): Scale 1.02, enhanced shadow
- Swiping Left: Rotate -5deg, opacity 0.8
- Swiping Right: Rotate 5deg, opacity 0.8
- Approved: Fade out right, 300ms ease-out
- Rejected: Fade out left, 300ms ease-out

### Buttons

**Primary Action (Approve):**
```
Background: Sage Green (#A8C5B4)
Text: Soft Charcoal (#4A5759)
Padding: 14px 32px
Border Radius: 16px
Font: 16px, Weight 600
```

**Secondary Action (Snooze/Edit):**
```
Background: rgba(255,255,255,0.5) with blur
Border: 1px solid rgba(74,87,89,0.2)
Text: Soft Charcoal (#4A5759)
Padding: 14px 32px
Border Radius: 16px
```

**Destructive (Reject):**
```
Background: rgba(232,180,184,0.3) with blur
Text: #C85A6E (darker pink)
Padding: 14px 32px
Border Radius: 16px
```

### Chat Interface

**Message Bubbles:**
- User: Sage Green tint, right aligned
- AI: White with glass blur, left aligned
- Padding: 12px 16px
- Border Radius: 20px (rounded on appropriate corners)
- Max Width: 75% of container

---

## Motion & Animation

### Principles
- Fluid and purposeful, never jarring
- Spring physics over linear transitions
- Respect reduced motion preferences
- High-impact moments over scattered micro-interactions

### Animation Philosophy
**One well-orchestrated moment > many scattered effects**

Focus animations on high-impact moments:
- Page load with staggered reveals
- Card approval/rejection
- Pull-to-refresh
- Modal entrance/exit

Don't animate everything - strategic motion creates delight.

### Timing Functions
```css
/* Prefer these */
--spring: cubic-bezier(0.34, 1.56, 0.64, 1);
--smooth-out: cubic-bezier(0.4, 0.0, 1, 1);
--smooth-in: cubic-bezier(0.0, 0.0, 0.2, 1);
--default: cubic-bezier(0.4, 0.0, 0.2, 1);

/* Never use */
linear, ease, ease-in-out (too robotic)
```

### Durations
- Micro interactions: 150ms (hover states)
- Default transitions: 300ms (buttons, cards)
- Major transitions: 500ms (page changes)
- Orchestrated sequences: 600-800ms with staggered delays

### Key Animation Patterns

**Card Swipe (signature interaction):**
```css
.card-exit {
  animation: swipe-out 400ms cubic-bezier(0.34, 1.56, 0.64, 1);
  transform: translateX(120%) rotate(8deg);
}
```

**Staggered Reveal (page load):**
```css
.card:nth-child(1) { animation-delay: 0ms; }
.card:nth-child(2) { animation-delay: 100ms; }
.card:nth-child(3) { animation-delay: 200ms; }
```

**Glass Blur Transition:**
```css
backdrop-filter: blur(0px);
transition: backdrop-filter 200ms linear;

&.active {
  backdrop-filter: blur(20px);
}
```

### React Motion
For React components, use Framer Motion:
```jsx
import { motion } from 'framer-motion'

<motion.div
  initial={{ opacity: 0, y: 20 }}
  animate={{ opacity: 1, y: 0 }}
  exit={{ opacity: 0, x: 100 }}
  transition={{ type: "spring", stiffness: 300, damping: 30 }}
/>
```

---

## iOS Specific Guidelines

### SwiftUI Components

**Glass Effect Modifier:**
```swift
.background(.ultraThinMaterial)
.background(Color.white.opacity(0.7))
.cornerRadius(24)
.shadow(color: Color.black.opacity(0.08), radius: 16, x: 0, y: 8)
```

**Color Assets:**
- Create color sets in Assets.xcassets for light/dark mode
- Use adaptive colors that work in both modes
- Base colors should have 95% opacity minimum for accessibility

### Native Interactions
- Use SF Symbols for icons (maintain system consistency)
- Haptic feedback on approval/rejection
- Native swipe gestures (respect system swipe-back)
- Support Dynamic Type (accessibility)

---

## Web Specific Guidelines

### Responsive Breakpoints

```
Mobile: < 640px
Tablet: 640px - 1024px
Desktop: > 1024px
```

### Mobile-First Approach
- Cards full width on mobile (minus margins)
- Stack vertically on mobile
- Side-by-side (dashboard + chat) on desktop

### Performance
- Lazy load card images
- Optimize blur effects (use will-change: transform)
- Preload next 2 cards in stack
- Debounce swipe gestures

---

## Accessibility

### Contrast Ratios
- Text on Beige background: 4.5:1 minimum
- Text on tinted cards: 4.5:1 minimum
- Button text: 4.5:1 minimum

### Touch Targets
- Minimum: 44x44px (iOS), 48x48px (Android)
- Preferred: 56x56px for primary actions

### Screen Reader Support
- Descriptive labels for all interactive elements
- Announce card category changes
- Swipe gesture alternatives (tap approve/reject buttons)

---

## Voice & Tone

### Copy Guidelines

**Do:**
- Use natural, conversational language
- Be concise but warm
- Lead with the action, then context
- Example: "Pay rent ($2,400) - Due today"

**Don't:**
- Use jargon or corporate speak
- Be overly casual or use slang
- Create anxiety with urgent language
- Example: ❌ "URGENT: Payment Required Immediately!"

### Notification Copy
- Morning greeting: "Good morning! 7 things to review"
- Empty state: "All clear for now ✨"
- Completion: "Done! 5 approved, 2 snoozed"

---

## Brand Applications

### App Icon
- Simple, recognizable at small sizes
- Liquid glass effect as metaphor
- Sage green primary color
- Minimal, geometric

### Loading States
- Soft pulsing blur effect
- No harsh spinners
- Skeleton screens with glass effect

### Empty States
- Warm, encouraging
- "You're all caught up" vibes
- Subtle illustration or icon
- Maintain glass aesthetic

---

## Design Principles

### Core Tenets

1. **Clarity First**: Every element should reduce cognitive load, not add to it
   - Information hierarchy is obvious at a glance
   - Interactive elements are immediately recognizable
   - No hunting for what to do next

2. **Fluid Motion**: Transitions should feel liquid and natural
   - Spring physics, not linear easing
   - Staggered reveals create rhythm
   - Motion reinforces interaction, doesn't distract

3. **Respectful Defaults**: Don't interrupt, enhance
   - Proactive but not pushy
   - Notifications add value, don't nag
   - User stays in control

4. **Progressive Disclosure**: Show what's needed, hide complexity
   - Start simple, reveal depth on demand
   - Empty states guide next actions
   - Advanced features don't crowd beginners

5. **Honest Transparency**: Be clear about what the AI is doing
   - Never pretend to be human
   - Show confidence levels when uncertain
   - Explain automated actions before executing

### Distinctive Design Philosophy

**Think outside the box**: Siimba should never look like it was generated by AI. Every design decision should feel intentional and context-specific.

**Vary your choices**: Even within our brand guidelines, rotate between:
- Different font pairings (Space Grotesk vs Bricolage Grotesque)
- Light vs dark themes contextually
- Different atmospheric background treatments
- Varied animation patterns for different interactions

**Avoid convergence**: If you find yourself defaulting to the same pattern twice, try something new. The goal is consistency in quality, not repetition in execution.

**High contrast > timid**: 
- Font weights: Use 300/700, not 400/600
- Size jumps: 3x differences, not 1.5x
- Color usage: Dominant palette with sharp accents

**Commit to aesthetics**: 
- Don't hedge with "safe" choices
- Pick a direction and execute fully
- Cohesion matters more than individual perfect choices

---

## File Naming Conventions

```
Components: component-name.tsx / ComponentName.swift
Colors: color-primary-pink, color-accent-sage
Icons: icon-approve, icon-snooze, icon-chat
Images: img-empty-state, img-onboarding-1
```

