import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";

const WHATSAPP_URL = `https://wa.me/5541987472274?text=${encodeURIComponent(
  "Olá, vim pelo site e quero saber mais sobre as viagens!"
)}`;

export const metadata: Metadata = {
  title: "Página não encontrada | Exclusive Dreams",
  robots: { index: false, follow: false },
};

export default function NotFound() {
  return (
    <main className="min-h-screen bg-black flex items-center justify-center px-6">
      <div className="text-center max-w-md">
        <Image
          src="/images/no_background.png"
          alt="Exclusive Dreams"
          width={120}
          height={36}
          className="h-9 w-auto object-contain mx-auto mb-10 opacity-90"
        />
        <p className="text-[#c9a84c] text-xs font-semibold uppercase tracking-[0.3em] mb-5">
          Erro 404
        </p>
        <h1 className="text-5xl sm:text-6xl font-bold text-[#f5f5f7] tracking-tight leading-[0.95] mb-5">
          Página não<br />encontrada.
        </h1>
        <p className="text-[#a1a1a6] text-base leading-relaxed mb-10">
          O destino que você procura não existe — mas temos muitos outros
          esperando por você.
        </p>
        <div className="flex flex-col sm:flex-row items-center justify-center gap-3">
          <Link
            href="/"
            className="inline-flex items-center gap-2 bg-[#c9a84c] hover:bg-[#e8c96a] text-black text-sm font-semibold px-7 py-3 rounded-full transition-colors duration-200"
          >
            Voltar ao início
          </Link>
          <a
            href={WHATSAPP_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 border border-white/[0.15] text-[#f5f5f7] hover:border-[#c9a84c]/50 hover:text-[#c9a84c] text-sm font-medium px-7 py-3 rounded-full transition-all duration-200"
          >
            Falar no WhatsApp
          </a>
        </div>
      </div>
    </main>
  );
}
