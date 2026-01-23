# Quick Start Guide

Get Siimba running in under 2 minutes.

## 1. Install Dependencies

```bash
npm install
```

This will install:
- Next.js 14
- React 18
- TypeScript
- Tailwind CSS
- Framer Motion
- Lucide React icons
- All dependencies

## 2. Run Development Server

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

## 3. Test Key Features

### Interactive Demo
- Scroll to the hero section
- **Swipe cards**: Click and drag left (snooze) or right (approve)
- **Or use buttons**: Click Approve or Snooze below the cards
- Complete all 4 cards to see the completion animation

### Mobile Testing
- Open DevTools (F12)
- Toggle device toolbar (Ctrl+Shift+M or Cmd+Shift+M)
- Test on iPhone 12 Pro viewport
- Swipe gestures work with mouse drag

### Waitlist Form
- Scroll to bottom
- Enter email: `test@example.com`
- Select category
- Submit
- Check browser localStorage: open DevTools → Application → Local Storage → `siimba-waitlist`

## 4. Build for Production

```bash
npm run build
npm start
```

Production build will be optimized and ready to deploy.

## Project Highlights

### What's Included
✅ Fully responsive landing page  
✅ Interactive swipeable card demo  
✅ Smooth scroll navigation  
✅ Waitlist with localStorage  
✅ FAQ accordion  
✅ Privacy and Terms pages  
✅ Analytics tracking hooks  
✅ SEO metadata  
✅ Accessibility features  

### Tech Stack
- **Framework**: Next.js 14 (App Router)
- **Styling**: Tailwind CSS
- **Animation**: Framer Motion
- **Components**: shadcn/ui
- **Icons**: Lucide React

## Next Steps

1. **Customize content**: Edit `app/page.tsx`
2. **Change colors**: Edit `app/globals.css` CSS variables
3. **Add analytics**: Implement `window.siimbaTrack()` in `lib/analytics.ts`
4. **Replace favicon**: Add your `.ico` file to `public/favicon.ico`
5. **Deploy**: Push to GitHub and deploy on Vercel

## Common Issues

### Port already in use
```bash
# Kill the process on port 3000
lsof -ti:3000 | xargs kill -9
# Or run on a different port
npm run dev -- -p 3001
```

### Module not found errors
```bash
# Clear cache and reinstall
rm -rf node_modules .next
npm install
```

### Tailwind styles not loading
```bash
# Restart dev server
# Make sure globals.css is imported in layout.tsx
```

## Development Tips

- **Hot reload**: Changes auto-refresh in the browser
- **TypeScript**: The project has strict mode enabled
- **Linting**: Run `npm run lint` to check for issues
- **Component dev**: Edit files in `components/` folder

## Questions?

Check the main [README.md](./README.md) for full documentation.

---

Happy coding! 🚀
