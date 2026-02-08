type AnalyticsValue = string | number | boolean | null | undefined
type AnalyticsProperties = Record<string, AnalyticsValue>

declare global {
  interface Window {
    siimbaTrack?: (event: string, properties?: AnalyticsProperties) => void
    gtag?: (command: string, ...args: unknown[]) => void
  }
}

export function track(event: string, properties?: AnalyticsProperties) {
  if (typeof window !== 'undefined') {
    if (window.siimbaTrack) {
      window.siimbaTrack(event, properties)
    } else if (window.gtag) {
      window.gtag('event', event, properties || {})
    } else {
      console.log('[Analytics]', event, properties)
    }
  }
}

export const trackEvents = {
  pageView: (page: string) => track('page_view', { page }),
  ctaClick: (location: string) => track('cta_click', { location }),
  demoStarted: () => track('demo_started'),
  demoCompleted: () => track('demo_completed'),
  demoCardAction: (action: 'approve' | 'reject', cardCategory: string, cardIndex: number) =>
    track('demo_card_action', { action, card_category: cardCategory, card_index: cardIndex }),
  demoCardJump: (cardIndex: number) => track('demo_card_jump', { card_index: cardIndex }),
  demoEdited: (cardCategory: string) => track('demo_card_edited', { card_category: cardCategory }),
  cardSwiped: (direction: 'approve' | 'snooze') => track('card_swiped', { direction }),
  sectionViewed: (section: string) => track('section_view', { section }),
  scrollDepth: (percent: number) => track('scroll_depth', { percent }),
  linkClick: (location: string, linkTarget: string) => track('link_click', { location, link_target: linkTarget }),
  waitlistFormStarted: () => track('waitlist_form_started'),
  waitlistUseCaseSelected: (useCase: 'personal' | 'work') => track('waitlist_use_case_selected', { use_case: useCase }),
  waitlistInterviewToggled: (enabled: boolean) => track('waitlist_interview_toggled', { enabled }),
  waitlistSubmitStarted: (useCase: 'personal' | 'work') => track('waitlist_submit_started', { use_case: useCase }),
  waitlistSubmitFailed: (reason: string) => track('waitlist_submit_failed', { reason }),
  waitlistJoined: (category: string) => track('waitlist_joined', { category }),
  generateLead: () => track('generate_lead', { value: 1, currency: 'USD' }),
  betaAccessRequested: () => track('sign_up', { method: 'Waitlist' }),
  faqOpened: (question: string) => track('faq_opened', { question }),
}
