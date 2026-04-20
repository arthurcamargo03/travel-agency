"use client";
import Image from "next/image";
import { trackWhatsApp } from "@/lib/gtag";

const WHATSAPP_NUMBER = "5541987472274";
const WHATSAPP_MSG = encodeURIComponent("Olá, vim pelo site e quero viajar!");
const WHATSAPP_URL = `https://wa.me/${WHATSAPP_NUMBER}?text=${WHATSAPP_MSG}`;

const STATS = [
  { number: "50+", label: "Viagens realizadas" },
  { number: "100%", label: "Clientes satisfeitos" },
  { number: "40+", label: "Destinos exclusivos" },
];

export default function Hero() {
  return (
    <section className="relative h-screen flex flex-col items-center justify-center overflow-hidden">
      <Image
        src="https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=1920&q=80"
        alt="Vista panorâmica de montanhas nevadas ao pôr do sol"
        fill
        priority
        className="object-cover"
      />

      {/* Cinematic gradient — dark top, open middle, fades to solid black at bottom */}
      <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-black/15 to-black" />
      {/* Edge vignette for depth */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,transparent_50%,rgba(0,0,0,0.55)_100%)]" />

      {/* Main content */}
      <div className="relative z-10 flex flex-col items-center text-center px-6 max-w-5xl mx-auto pt-16 pb-36">

        <div className="anim-fade-in delay-1 mb-8">
          <Image
            src="/images/no_background.png"
            alt="Exclusive Dreams Agência de Viagens"
            width={480}
            height={136}
            priority
            className="w-64 sm:w-80 md:w-[440px] h-auto object-contain drop-shadow-[0_0_60px_rgba(201,168,76,0.18)]"
          />
        </div>

        <div className="anim-fade-up delay-2 mb-6 flex items-center gap-3">
          <span className="w-8 h-px bg-[#c9a84c]/50" />
          <span className="text-[#c9a84c] text-xs font-semibold uppercase tracking-[0.28em]">
            Agência de Viagens Premium
          </span>
          <span className="w-8 h-px bg-[#c9a84c]/50" />
        </div>

        <h1 className="anim-fade-up delay-3 text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-bold text-white tracking-tight leading-[0.92] mb-6">
          O mundo está<br />esperando<br />
          <span className="text-[#c9a84c]">por você.</span>
        </h1>

        <p className="anim-fade-up delay-4 text-[#a1a1a6] text-lg sm:text-xl max-w-lg mx-auto mb-10 leading-relaxed">
          Viagens exclusivas com atendimento personalizado do início ao fim.
        </p>

        <div className="anim-fade-up delay-5 flex flex-col sm:flex-row items-center gap-4">
          <a
            href={WHATSAPP_URL}
            target="_blank"
            rel="noopener noreferrer"
            onClick={() => trackWhatsApp("hero_quero_viajar")}
            className="inline-flex items-center gap-2 bg-[#c9a84c] hover:bg-[#e8c96a] text-black text-sm font-semibold px-8 py-3.5 rounded-full transition-all duration-200 shadow-[0_0_40px_rgba(201,168,76,0.35)] hover:shadow-[0_0_60px_rgba(201,168,76,0.55)]"
          >
            Planejar minha viagem →
          </a>
          <a
            href="#destinos"
            className="inline-flex items-center gap-2 text-[#f5f5f7]/70 text-sm font-medium hover:text-[#c9a84c] transition-colors duration-200"
          >
            Ver destinos ↓
          </a>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute z-10 left-1/2 -translate-x-1/2 bottom-[88px] flex flex-col items-center gap-2 anim-fade-in delay-6 pointer-events-none">
        <span className="text-white/25 text-[9px] uppercase tracking-[0.22em]">scroll</span>
        <div className="w-px h-8 bg-gradient-to-b from-white/30 to-transparent anim-scroll" />
      </div>

      {/* Stats bar */}
      <div className="absolute bottom-0 left-0 right-0 bg-black/60 backdrop-blur-2xl">
        <div className="h-px bg-gradient-to-r from-transparent via-[#c9a84c]/30 to-transparent" />
        <div className="max-w-3xl mx-auto px-6 py-5 flex items-center">
          {STATS.map((stat, i) => (
            <div
              key={stat.label}
              className={`flex-1 text-center ${
                i < STATS.length - 1 ? "border-r border-white/[0.08]" : ""
              }`}
            >
              <p className="text-2xl font-bold text-[#c9a84c] tracking-tight">{stat.number}</p>
              <p className="text-[#86868b] text-xs mt-0.5 tracking-wide">{stat.label}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
