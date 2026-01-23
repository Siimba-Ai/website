// Analytics stub for future integration
// Usage: track('event_name', { prop1: 'value' })

declare global {
  interface Window {
    siimbaTrack?: (event: string, properties?: Record<string, any>) => void;
  }
}

export function track(event: string, properties?: Record<string, any>) {
  if (typeof window !== 'undefined') {
    // Hook for analytics integration
    if (window.siimbaTrack) {
      window.siimbaTrack(event, properties);
    } else {
      // Development logging
      console.log('[Analytics]', event, properties);
    }
  }
}

// Common events
export const trackEvents = {
  pageView: (page: string) => track('page_view', { page }),
  ctaClick: (location: string) => track('cta_click', { location }),
  demoStarted: () => track('demo_started'),
  demoCompleted: () => track('demo_completed'),
  cardSwiped: (direction: 'approve' | 'snooze') => track('card_swiped', { direction }),
  waitlistJoined: (category: string) => track('waitlist_joined', { category }),
  faqOpened: (question: string) => track('faq_opened', { question }),
}
