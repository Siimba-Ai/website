# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

This is the marketing website for Siimba, an AI assistant that reduces decision fatigue through a review-and-approve model. The site is a production-ready Next.js application featuring an interactive swipeable card demo, waitlist integration, and modern animations.

**Core value proposition**: "You wake up. You swipe yes 4 times. Your day is handled."

## Development Commands

```bash
# Development
npm install              # Install dependencies
npm run dev             # Start dev server (http://localhost:3000)

# Production
npm run build           # Create production build
npm start               # Run production server

# Code Quality
npm run lint            # Run ESLint
```

## Tech Stack & Architecture

### Framework & Rendering
- **Next.js 14** with App Router (app directory structure)
- All pages are React Server Components by default
- Client components explicitly marked with `"use client"` directive
- TypeScript with strict mode enabled

### Styling System
- **Tailwind CSS** with custom design tokens via CSS variables
- Theme uses HSL color format in `app/globals.css` (e.g., `--primary: 221.2 83.2% 53.3%`)
- Dark mode configured in `tailwind.config.ts` with `darkMode: ['class']` (not currently implemented)
- Custom `cn()` utility in `lib/utils.ts` merges Tailwind classes using `clsx` and `tailwind-merge`

### Component Architecture
- **shadcn/ui pattern**: Components in `components/ui/` are customized, not npm packages
- Components use `class-variance-authority` for variant management
- All components consume theme via Tailwind's HSL variable system
- Import paths use `@/*` alias (configured in `tsconfig.json`)

### Animation System
- **Framer Motion** for all animations and interactions
- Key pattern: `useMotionValue` + `useTransform` for drag-based interactions
- Decision cards use drag physics with spring animations and threshold detection
- Confetti uses staggered `animate` props with randomization

## Key Component Patterns

### Decision Stack (`components/decision-stack.tsx`)
The core interactive demo. Architecture:

```typescript
DecisionStack (container)
  ├─ SwipeableCard (active card with Framer Motion drag)
  │   ├─ useMotionValue(x) - tracks horizontal position
  │   ├─ useTransform(x, ...) - derives rotation and opacity
  │   └─ handleDragEnd - triggers approve/snooze on threshold
  ├─ Stack preview (2 cards behind with transform scale)
  ├─ Action buttons (approve/snooze)
  └─ Progress dots
```

**Key behaviors**:
- Drag threshold: 100px triggers action
- Cards have z-index layering for depth effect
- Completion shows confetti via absolute positioned animated divs
- All interactions tracked via `lib/analytics.ts`

### Analytics Integration
- Stub implementation in `lib/analytics.ts` using `window.siimbaTrack`
- Predefined event helpers: `trackEvents.cardSwiped()`, `trackEvents.waitlistJoined()`, etc.
- Falls back to `console.log` in development
- Production integration: implement `window.siimbaTrack` globally

### Styling Conventions
- Mobile-first responsive design (`sm:`, `md:`, `lg:`, `xl:`, `2xl:` breakpoints)
- Consistent spacing scale (padding: 1rem default, escalates per breakpoint in container config)
- Use `cn()` for conditional classes, never string interpolation
- Animations use Framer Motion, not Tailwind animate utilities (except accordion components)

## Page Structure

```
app/
├── layout.tsx          # Root layout: metadata, fonts, global structure
├── page.tsx            # Landing page: hero, features, demo, FAQ, waitlist
├── privacy/page.tsx    # Privacy policy (static content)
└── terms/page.tsx      # Terms of service (static content)
```

### Metadata Pattern
SEO metadata defined in `app/layout.tsx` using Next.js Metadata API:
- Includes OpenGraph, Twitter cards, robots directives
- Viewport configured separately as `export const viewport`
- Favicon referenced via `<link>` in root layout head

## Environment Variables

Optional configuration via `.env.local`:

```env
NEXT_PUBLIC_CALENDLY_URL=https://calendly.com/siimba
```

Used in waitlist form for user interview scheduling link.

## TypeScript Configuration

- Strict mode enabled (`strict: true`)
- Path alias: `@/*` maps to root directory
- Module resolution: `bundler` mode for Next.js compatibility
- All components and pages must use TypeScript

## Component Development Guidelines

### Adding shadcn/ui Components
Components are custom implementations, not npm installed. Pattern:
1. Create component in `components/ui/[name].tsx`
2. Use `cn()` utility for className merging
3. Export both the component and its prop types
4. Use `React.forwardRef` for components that need ref access
5. Implement variants via `class-variance-authority` if needed

### Animation Best Practices
- Use Framer Motion's `motion` components for layout animations
- For drag interactions: `drag`, `dragConstraints`, `onDragEnd`
- For spring physics: rely on defaults or use `transition` prop
- Keep animations under 300ms for perceived performance
- Use `useTransform` for derived values to avoid re-renders

### Form Components
- Use controlled inputs with React state
- Email validation via regex before submission
- Store form data in localStorage for persistence
- Display success states with visual feedback (confetti, check icons)

## Deployment

Configured for Vercel deployment (primary platform):
- Standard Next.js configuration in `next.config.js`
- No custom server required
- Static optimization enabled where possible
- React Strict Mode enabled

Alternative platforms: Any Node.js hosting that supports Next.js (Railway, Fly.io, etc.)

## Git Workflow

Recent commit patterns show:
- Fixes use descriptive messages: "Fix ESLint errors: escape quotes and apostrophes"
- Merges reference remote branch: "Merge remote main branch"
- Configuration changes documented: "Revert to standard Next.js config for Vercel"

Main branch: `main` (use for PRs and deployment)

## Important Notes

- All interactive components must be client components (`"use client"`)
- Never import client-only hooks (useState, useEffect, etc.) in server components
- Images should be optimized (use Next.js Image component when adding new images)
- Accessibility: maintain ARIA labels, keyboard navigation, semantic HTML
- The site uses Inter font via next/font/google (configured in layout.tsx)
- Custom scrollbar styling in globals.css (webkit only, fallback to default)
- Mobile optimizations: tap highlight removal, touch-action, text size adjustment
