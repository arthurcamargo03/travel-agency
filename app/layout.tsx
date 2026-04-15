import type { Metadata } from "next";
import { Geist } from "next/font/google";
import "./globals.css";

const geist = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Exclusive Dreams | Agência de Viagens",
  description:
    "Transforme seus sonhos em memórias inesquecíveis. Pacotes exclusivos para os destinos mais deslumbrantes do mundo. Atendimento personalizado do início ao fim.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-BR" className={`${geist.variable} antialiased`}>
      <body>{children}</body>
    </html>
  );
}
