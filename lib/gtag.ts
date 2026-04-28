export const GA_ID = "G-NYP3J7Y6W7";
export const CONSENT_STORAGE_KEY = "exclusivedreams_cookie_consent";

declare global {
  interface Window {
    gtag: (...args: unknown[]) => void;
  }
}

export function trackWhatsApp(origem: string) {
  if (typeof window !== "undefined" && typeof window.gtag === "function") {
    window.gtag("event", "click_whatsapp", {
      event_category: "whatsapp",
      event_label: origem,
    });
  }
}

export function grantConsent() {
  if (typeof window !== "undefined" && typeof window.gtag === "function") {
    window.gtag("consent", "update", {
      analytics_storage: "granted",
      ad_storage: "granted",
      ad_user_data: "granted",
      ad_personalization: "granted",
    });
  }
}
