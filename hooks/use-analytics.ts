/**
 * useAnalytics Hook
 * Used to track custom events and user interactions in Google Analytics
 *
 * Usage:
 * const { trackEvent } = useAnalytics();
 * trackEvent('download_resume', { file_name: 'resume.pdf' });
 */

export function useAnalytics() {
  const trackEvent = (eventName: string, eventData?: Record<string, string | number | boolean>) => {
    if (typeof window !== "undefined" && window.gtag) {
      window.gtag("event", eventName, eventData);
    }
  };

  return { trackEvent };
}

// Declare gtag for TypeScript
declare global {
  interface Window {
    gtag: (...args: any[]) => void;
  }
}
