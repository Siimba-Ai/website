# Siimba Marketing Website

> You wake up. You swipe yes 4 times. Your day is handled.

A production-ready marketing website for Siimba, an AI assistant that reduces decision fatigue through a simple review and approve model.

## Features

- **Interactive Decision Cards**: Swipeable card stack with drag detection (mouse and touch)
- **Modern Stack**: Next.js 14 App Router, TypeScript, Tailwind CSS, Framer Motion
- **shadcn/ui Components**: Button, Card, Badge, Accordion, Tabs, Input, Dialog
- **Mobile First Design**: Responsive and optimized for all devices
- **Smooth Animations**: Framer Motion with floating gradients and confetti
- **Waitlist Integration**: Email capture with localStorage and validation
- **Analytics Ready**: Analytics tracking stub with `window.siimbaTrack()`
- **SEO Optimized**: Meta tags, Open Graph, Twitter cards
- **Accessibility**: ARIA labels, keyboard navigation, semantic HTML

## Tech Stack

- **Framework**: Next.js 14 (App Router)
- **Language**: TypeScript
- **Styling**: Tailwind CSS
- **Animation**: Framer Motion
- **Icons**: Lucide React
- **Components**: shadcn/ui (custom implementation)

## Getting Started

### Prerequisites

- Node.js 18+ and npm/yarn/pnpm
- Modern web browser

### Installation

1. **Install dependencies**:

```bash
npm install
```

2. **Run the development server**:

```bash
npm run dev
```

3. **Open your browser**:

Navigate to [http://localhost:3000](http://localhost:3000)

### Build for Production

```bash
npm run build
npm start
```

The optimized production build will be created in the `.next` folder.

## Project Structure

```
siimba website/
├── app/
│   ├── layout.tsx          # Root layout with metadata
│   ├── page.tsx            # Main landing page
│   ├── globals.css         # Global styles
│   ├── privacy/
│   │   └── page.tsx        # Privacy policy
│   └── terms/
│       └── page.tsx        # Terms of service
├── components/
│   ├── ui/                 # shadcn/ui components
│   │   ├── button.tsx
│   │   ├── card.tsx
│   │   ├── badge.tsx
│   │   ├── input.tsx
│   │   ├── accordion.tsx
│   │   ├── tabs.tsx
│   │   └── dialog.tsx
│   ├── decision-stack.tsx  # Interactive card stack
│   ├── navigation.tsx      # Sticky nav bar
│   ├── footer.tsx          # Footer component
│   └── waitlist-form.tsx   # Email capture form
├── lib/
│   ├── utils.ts            # Utility functions (cn)
│   └── analytics.ts        # Analytics stub
└── public/                 # Static assets
```

## Key Components

### Decision Card Stack

The core interactive demo that showcases swipe to approve UX:

- Drag left or right to snooze or approve
- Spring animations with threshold detection
- Progress indicators and completion state
- Accessibility buttons for keyboard users
- Lightweight confetti on completion

### Waitlist Form

Captures emails with validation and stores in localStorage:

- Email validation
- Category selection (Personal, Work, Creator, Student, Other)
- User interview opt-in checkbox
- Success state with confetti
- Configurable Calendly link via environment variable

### Navigation

Sticky top nav with smooth scrolling:

- Logo and section links
- Mobile hamburger menu
- CTA button
- Scroll based transparency

## Environment Variables

Create a `.env.local` file for optional configuration:

```env
NEXT_PUBLIC_CALENDLY_URL=https://calendly.com/siimba
RESEND_API_KEY=your_resend_api_key
# Use a verified sender in production:
# RESEND_FROM_EMAIL=Siimba <hello@siimba.ai>
# Optional if you want to use a Resend template for welcome emails:
# RESEND_WELCOME_TEMPLATE_ID=your_template_id
```

## Analytics Integration

The site includes analytics tracking hooks via `lib/analytics.ts`:

```typescript
window.siimbaTrack('event_name', { prop: 'value' })
```

Events tracked:
- Page views
- CTA clicks
- Demo interactions
- Card swipes
- Waitlist submissions
- FAQ opens

Integrate with your analytics provider by implementing the `window.siimbaTrack` function.

## Customization

### Colors

Edit Tailwind CSS variables in `app/globals.css`:

```css
:root {
  --primary: 221.2 83.2% 53.3%;
  --background: 0 0% 100%;
  /* ... */
}
```

### Content

Main copy is in `app/page.tsx`. Edit sections:
- Hero tagline
- Feature cards
- FAQ items
- Decision card examples

### Fonts

The site uses Inter (Google Font). Change in `app/layout.tsx`:

```typescript
import { YourFont } from 'next/font/google'
```

## Performance

- Lighthouse score 95+ (Performance, Accessibility, Best Practices, SEO)
- Optimized images and fonts
- Minimal JavaScript bundle
- Smooth 60fps animations

## Browser Support

- Chrome/Edge (latest)
- Firefox (latest)
- Safari 14+
- Mobile browsers (iOS Safari, Chrome Mobile)

## Deployment

### Vercel (Recommended)

1. Push to GitHub
2. Import to Vercel
3. Deploy automatically

### Other Platforms

Build and deploy the `.next` folder:

```bash
npm run build
```

Compatible with any Node.js hosting platform (Railway, Fly.io, DigitalOcean, etc.).

## License

All rights reserved. This is proprietary software for Siimba.

## Contact

Questions? Email [hello@siimba.ai](mailto:hello@siimba.ai)

---

Built with ❤️ for people with busy brains.
