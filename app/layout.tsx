import type { Metadata } from "next";
import { Geist } from "next/font/google";
import Script from "next/script";
import { GA_ID } from "@/lib/gtag";
import "./globals.css";

const geist = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin", "latin-ext"],
  display: "swap",
});

const SITE_URL = "https://exclusivedreams.com.br";
const SITE_TITLE = "Exclusive Dreams | Agência de Viagens";
const SITE_DESCRIPTION =
  "Transforme seus sonhos em memórias inesquecíveis. Pacotes exclusivos para os destinos mais deslumbrantes do mundo. Atendimento personalizado do início ao fim.";
const OG_IMAGE = "/images/no_background.png";

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: SITE_TITLE,
  description: SITE_DESCRIPTION,
  keywords: [
    "agência de viagens",
    "pacotes de viagem",
    "viagens personalizadas",
    "cruzeiros",
    "destinos internacionais",
    "Curitiba",
    "Exclusive Dreams",
  ],
  authors: [{ name: "Exclusive Dreams" }],
  robots: { index: true, follow: true },
  openGraph: {
    type: "website",
    locale: "pt_BR",
    url: SITE_URL,
    siteName: "Exclusive Dreams",
    title: SITE_TITLE,
    description: SITE_DESCRIPTION,
    images: [
      {
        url: OG_IMAGE,
        width: 1200,
        height: 630,
        alt: "Exclusive Dreams — Agência de Viagens",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: SITE_TITLE,
    description: SITE_DESCRIPTION,
    images: [OG_IMAGE],
  },
};

export const viewport = {
  themeColor: "#000000",
  width: "device-width",
  initialScale: 1,
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-BR" className={`${geist.variable} antialiased`}>
      <body>{children}</body>
      <Script id="ga-consent-default" strategy="beforeInteractive">
        {`
          window.dataLayer = window.dataLayer || [];
          function gtag(){dataLayer.push(arguments);}
          window.gtag = gtag;
          gtag('consent', 'default', {
            analytics_storage: 'denied',
            ad_storage: 'denied',
            ad_user_data: 'denied',
            ad_personalization: 'denied',
            wait_for_update: 500,
          });
          try {
            if (localStorage.getItem('exclusivedreams_cookie_consent') === 'accepted') {
              gtag('consent', 'update', {
                analytics_storage: 'granted',
                ad_storage: 'granted',
                ad_user_data: 'granted',
                ad_personalization: 'granted',
              });
            }
          } catch (e) {}
        `}
      </Script>
      <Script
        src={`https://www.googletagmanager.com/gtag/js?id=${GA_ID}`}
        strategy="afterInteractive"
      />
      <Script id="google-analytics" strategy="afterInteractive">
        {`
          gtag('js', new Date());
          gtag('config', '${GA_ID}');
        `}
      </Script>
      <Script id="ld-json-travelagency" type="application/ld+json" strategy="afterInteractive">
        {JSON.stringify({
          "@context": "https://schema.org",
          "@type": "TravelAgency",
          name: "Exclusive Dreams Agência de Viagens",
          description: SITE_DESCRIPTION,
          url: SITE_URL,
          telephone: "+5541987472274",
          areaServed: { "@type": "Country", name: "Brasil" },
          address: {
            "@type": "PostalAddress",
            addressLocality: "Curitiba",
            addressRegion: "PR",
            addressCountry: "BR",
          },
          sameAs: ["https://www.instagram.com/exclusive.dreamss/"],
          image: `${SITE_URL}${OG_IMAGE}`,
          priceRange: "$$",
        })}
      </Script>
    </html>
  );
}
