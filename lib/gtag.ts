export const GA_ID = "G-NYP3J7Y6W7";

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
