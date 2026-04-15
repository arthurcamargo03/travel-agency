"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";

// ─── Configuração do WhatsApp ───────────────────────────────────────────────
const WHATSAPP_NUMBER = "5541987472274";
const WHATSAPP_MSG = encodeURIComponent(
  "Olá, vim pelo site e quero saber mais sobre as viagens!"
);
const WHATSAPP_URL = `https://wa.me/${WHATSAPP_NUMBER}?text=${WHATSAPP_MSG}`;

const NAV_LINKS = [
  { label: "Destinos", href: "#destinos" },
  { label: "Depoimentos", href: "#depoimentos" },
  { label: "Instagram", href: "#instagram" },
  { label: "Sobre", href: "#sobre" },
];

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-black/95 backdrop-blur-sm border-b border-yellow-800/30">
      <nav className="max-w-6xl mx-auto px-4 sm:px-6 h-16 flex items-center justify-between">
        {/* ── Logo ── */}
        <Link href="/" className="flex items-center">
          <Image
            src="/images/Gemini_Generated_Image_yc2w88yc2w88yc2w.png"
            alt="Exclusive Dreams Agência de Viagens"
            width={160}
            height={48}
            className="h-12 w-auto object-contain mix-blend-screen"
            priority
          />
        </Link>

        {/* ── Links desktop ── */}
        <ul className="hidden md:flex items-center gap-8">
          {NAV_LINKS.map((link) => (
            <li key={link.href}>
              <a
                href={link.href}
                className="text-gray-300 hover:text-yellow-400 font-medium transition-colors text-sm tracking-wide"
              >
                {link.label}
              </a>
            </li>
          ))}
        </ul>

        {/* ── Direita: botão WhatsApp + hambúrguer ── */}
        <div className="flex items-center gap-3">
          <a
            href={WHATSAPP_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="hidden md:inline-flex items-center gap-2 bg-yellow-600 hover:bg-yellow-500 text-black px-4 py-2 rounded-full font-bold text-sm transition-colors"
          >
            <WhatsAppIcon />
            Falar no WhatsApp
          </a>

          <button
            className="md:hidden p-2 text-gray-300 rounded-md hover:bg-white/10 transition-colors"
            onClick={() => setIsOpen(!isOpen)}
            aria-label={isOpen ? "Fechar menu" : "Abrir menu"}
          >
            {isOpen ? <CloseIcon /> : <MenuIcon />}
          </button>
        </div>
      </nav>

      {/* ── Menu mobile ── */}
      {isOpen && (
        <div className="md:hidden bg-black border-t border-yellow-800/30 px-4 py-4 flex flex-col gap-1">
          {NAV_LINKS.map((link) => (
            <a
              key={link.href}
              href={link.href}
              onClick={() => setIsOpen(false)}
              className="text-gray-300 font-medium py-3 px-2 rounded-md hover:bg-yellow-900/30 hover:text-yellow-400 transition-colors"
            >
              {link.label}
            </a>
          ))}
          <a
            href={WHATSAPP_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="mt-3 inline-flex items-center justify-center gap-2 bg-yellow-600 text-black px-4 py-3 rounded-full font-bold transition-colors"
          >
            <WhatsAppIcon />
            Falar no WhatsApp
          </a>
        </div>
      )}
    </header>
  );
}

function WhatsAppIcon() {
  return (
    <svg className="w-4 h-4 shrink-0" fill="currentColor" viewBox="0 0 24 24">
      <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z" />
    </svg>
  );
}

function MenuIcon() {
  return (
    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
    </svg>
  );
}

function CloseIcon() {
  return (
    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
    </svg>
  );
}
