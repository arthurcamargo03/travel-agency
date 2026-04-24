import type { Metadata } from "next";
import { Geist } from "next/font/google";
import Script from "next/script";
import { GA_ID } from "@/lib/gtag";
import "./globals.css";

const geist = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
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
      <Script
        src={`https://www.googletagmanager.com/gtag/js?id=${GA_ID}`}
        strategy="afterInteractive"
      />
      <Script id="google-analytics" strategy="afterInteractive">
        {`
          window.dataLayer = window.dataLayer || [];
          function gtag(){dataLayer.push(arguments);}
          gtag('js', new Date());
          gtag('config', '${GA_ID}');
        `}
      </Script>
    </html>
  );
}
