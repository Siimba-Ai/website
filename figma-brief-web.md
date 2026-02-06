# Figma Design Brief: Siimba Web App

## Project Overview
Design a web-based morning briefing dashboard that helps users review and approve AI-prepared tasks through a clean, liquid glass aesthetic.

**CRITICAL: This design must avoid "AI slop" aesthetics at all costs.**

### What This Design Is NOT:
❌ Inter font with purple gradients
❌ Generic three-column layout
❌ Solid white backgrounds
❌ Cookie-cutter card components
❌ Predictable, on-distribution design choices

### What This Design IS:
✅ Distinctive typography (Space Grotesk, Bricolage Grotesque, etc.)
✅ Liquid glass with atmospheric backgrounds
✅ Purposeful motion with spring physics
✅ Cohesive aesthetic that feels intentionally designed
✅ Surprising and delightful interactions

---

## Design Specifications

### Canvas Setup
- Frame: Desktop (1440x900)
- Frame: Tablet (768x1024) 
- Frame: Mobile (375x812)

### Layout Structure

**Desktop View (Split Screen):**
```
┌─────────────────────────────────────────┐
│  Header (72px height)                    │
├──────────────┬──────────────────────────┤
│              │                           │
│   Card       │      Chat Interface       │
│   Stack      │                           │
│  (40% width) │       (60% width)         │
│              │                           │
│              │                           │
└──────────────┴──────────────────────────┘
```

**Mobile View (Tabbed):**
```
┌─────────────────────┐
│  Header + Tabs       │
├─────────────────────┤
│                      │
│    Active Tab        │
│    Content           │
│                      │
│                      │
│                      │
└─────────────────────┘
```

---

## Detailed Component Specs

### 1. Approval Card Stack (Left Panel)

**Card Dimensions:**
- Width: Container width - 48px padding
- Min Height: 200px
- Border Radius: 24px
- Padding: 24px
- Gap between stacked cards: 12px overlap

**Card Visual Treatment:**
- Background: rgba(255, 255, 255, 0.7)
- Backdrop filter: blur(20px)
- Border: 1px solid rgba(255, 255, 255, 0.3)
- Shadow: 0 8px 32px rgba(0, 0, 0, 0.08)

**Card Content Structure:**
```
┌──────────────────────────────┐
│ [Category Badge]              │ ← 8px from top
│                               │
│ Card Title (20px, weight 600) │ ← 16px from badge
│                               │
│ Description text (16px)       │ ← 8px from title
│ Multiple lines if needed      │
│                               │
│ Meta info (13px, gray)        │ ← 12px from description
│                               │
│ ┌──────────┐  ┌──────────┐  │ ← 20px from meta
│ │ Approve  │  │ Snooze   │  │
│ └──────────┘  └──────────┘  │
└──────────────────────────────┘
   24px padding all around
```

**Category Badge Variants:**
- Social (Pink): rgba(232, 180, 184, 0.15) background
- Productivity (Green): rgba(168, 197, 180, 0.15) background  
- Neutral: rgba(245, 241, 237, 0.9) background
- Size: auto-width, 32px height
- Border radius: 16px
- Padding: 6px 12px
- Text: 13px, weight 500

**Button Specs:**
- Primary (Approve): #A8C5B4 background, #4A5759 text
- Secondary (Snooze): rgba(255,255,255,0.5) with blur, 1px border
- Height: 44px
- Padding: 0 24px
- Border radius: 16px
- Font: 16px, weight 600
- Gap between buttons: 12px

**Interactive States:**
Design 4 states for each card:
1. Default (resting in stack)
2. Hover (slight lift, enhanced shadow)
3. Swiping preview (5deg rotation)
4. Focus (for keyboard navigation)

---

### 2. Chat Interface (Right Panel)

**Container:**
- Background: #F5F1ED (warm beige)
- Padding: 24px

**Message Bubbles:**

User Message (right-aligned):
- Background: rgba(168, 197, 180, 0.2) with blur
- Max width: 75%
- Padding: 12px 16px
- Border radius: 20px 20px 4px 20px
- Text: 15px, #4A5759
- Margin bottom: 12px
- Align: flex-end

AI Message (left-aligned):
- Background: rgba(255, 255, 255, 0.7) with blur
- Max width: 75%
- Padding: 12px 16px
- Border radius: 20px 20px 20px 4px
- Text: 15px, #4A5759
- Margin bottom: 12px
- Align: flex-start

**Input Field:**
- Position: Fixed to bottom of chat container
- Height: 56px
- Background: rgba(255, 255, 255, 0.9) with blur
- Border: 1px solid rgba(74, 87, 89, 0.1)
- Border radius: 28px
- Padding: 0 20px
- Placeholder: "Ask me anything..." (#8A9294)
- Send button: Circular, 40px, sage green

---

### 3. Header

**Desktop Header:**
```
┌────────────────────────────────────────────┐
│ Logo     Good morning, Vrinda!    [⚙️ Icon] │
│ (32px)   (20px, weight 600)      (24px)    │
└────────────────────────────────────────────┘
   72px total height, 32px padding sides
```

**Components:**
- Logo: Wordmark or icon, left-aligned
- Greeting: Center-aligned, personalized
- Settings icon: Right-aligned, 24x24px

---

### 4. Empty States

**No Cards Available:**
```
      ┌─────────────┐
      │             │
      │  [✨ Icon]  │  ← 64px, sage green tint
      │             │
      │ All caught  │  ← 24px, weight 600
      │     up!     │
      │             │
      │ Check back  │  ← 15px, gray
      │  tomorrow   │
      └─────────────┘
```

**Loading State:**
- Skeleton cards with subtle pulse animation
- Same dimensions as real cards
- Lighter opacity (0.5)
- Pulsing: 1.5s duration, ease-in-out

---

### 5. Mobile Tabs (Mobile View)

**Tab Bar:**
- Position: Below header
- Height: 48px
- Background: rgba(255, 255, 255, 0.8) with blur
- 2 tabs: "Cards" and "Chat"

**Tab Specs:**
- Width: 50%
- Height: 48px
- Active background: rgba(168, 197, 180, 0.15)
- Inactive: transparent
- Text: 15px, weight 600
- Active indicator: 3px bottom border, sage green

---

## Color Palette

```
Primary Colors:
Blush Pink: #E8B4B8
Sage Green: #A8C5B4
Warm Beige: #F5F1ED

Supporting:
Off White: #FEFDFB
Soft Charcoal: #4A5759
Light Gray: #E0DDD9

Transparency Tints:
Pink Glass: rgba(232, 180, 184, 0.15)
Green Glass: rgba(168, 197, 180, 0.15)
White Glass: rgba(255, 255, 255, 0.7)
```

---

## Typography

**Font:** Space Grotesk or Bricolage Grotesque (load from Google Fonts)

**NEVER use:** Inter, Roboto, Open Sans, Lato, system fonts

**Alternative options for variety:**
- Code aesthetic: JetBrains Mono, Fira Code
- Editorial: Crimson Pro, Newsreader  
- Technical: IBM Plex Sans, Source Sans 3

**Type Styles:**
- H1 (Greeting): 32px, weight 700, #4A5759
- H2 (Card Title): 20px, weight 600, #4A5759
- Body: 16px, weight 400, #4A5759
- Body Small: 15px, weight 400, #4A5759
- Caption: 13px, weight 500, #8A9294
- Button: 16px, weight 600

**Font pairing principle:** High contrast creates interest. Pair a geometric sans (Space Grotesk) with monospace accents for code elements.

---

## Effects Library

Create these as reusable styles:

**Glass Effect:**
- Fill: rgba(255, 255, 255, 0.7)
- Effects: Layer Blur 20px
- Stroke: 1px, rgba(255, 255, 255, 0.3)
- Shadow: 0 8px 32px rgba(0, 0, 0, 0.08)

**Elevated Glass:**
- Fill: rgba(255, 255, 255, 0.8)
- Effects: Layer Blur 24px
- Stroke: 1px, rgba(255, 255, 255, 0.4)
- Shadow: 0 12px 48px rgba(0, 0, 0, 0.12)

**Pink Tint:**
- Fill: rgba(232, 180, 184, 0.15)
- Effects: Layer Blur 20px

**Green Tint:**
- Fill: rgba(168, 197, 180, 0.15)
- Effects: Layer Blur 20px

**Motion Effects:**
- Use Smart Animate with Spring (stiffness: 300, damping: 30)
- Never use Linear easing
- Prefer cubic-bezier(0.34, 1.56, 0.64, 1) for bouncy effects
- Card swipes: 400ms spring
- Fades: 300ms ease-out
- Staggered reveals: 100ms delay between elements

---

## Interaction Examples to Design

Create separate frames showing:

1. Card Stack (3 cards overlapping)
2. Card being hovered
3. Card mid-swipe (rotated)
4. Card approved (fading right)
5. Card rejected (fading left)
6. Empty stack state
7. Chat with 4-5 message examples
8. Loading skeleton state
9. Mobile view (both tabs)
10. Settings panel (modal)

---

## Auto-Layout Tips

- Use Auto Layout for all cards (allows dynamic content)
- Set button groups to "Packed" with 12px gap
- Card stack container: "Packed" vertical, 12px gap
- Message list: "Packed" vertical, 12px gap, scroll

---

## Export Guidelines

When complete, export:
- Desktop flow (5-7 screens)
- Mobile flow (5-7 screens)
- Component library (buttons, cards, badges)
- All as PNG @2x for developer handoff

---

## Design Principles

1. **Clarity**: Every interaction should be obvious
2. **Lightweight**: Glass effect should feel airy, not heavy
3. **Fluid**: Smooth transitions between states
4. **Respectful**: Don't overwhelm with info
5. **Personal**: Feels like it knows the user

---

## Example Card Contents

**Financial Card:**
```
[💰 Badge]

Pay Rent

$2,400 due today via Zelle
Balance after: $600

Due today • Auto-drafted

[Approve] [Edit]
```

**Social Card:**
```
[💌 Badge]

Sarah's Birthday Friday

Workshop booking found
Ceramic painting class • $65

Suggested by AI • 2 days away

[Book & Send] [Browse Other]
```

**Productivity Card:**
```
[📧 Badge]

Reply to Client X

3 emails about Launch Project
Draft prepared using your tone

High priority • 12 hours old

[Review Draft] [Snooze]
```

