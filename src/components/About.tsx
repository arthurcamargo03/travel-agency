"use client";
import { trackWhatsApp } from "@/lib/gtag";

const WHATSAPP_NUMBER = "5541987472274";
const WHATSAPP_MSG = encodeURIComponent(
  "Olá Henrique, vim pelo site e quero conversar sobre uma viagem!"
);
const WHATSAPP_URL = `https://wa.me/${WHATSAPP_NUMBER}?text=${WHATSAPP_MSG}`;

const PILLARS = [
  {
    title: "Voos & hotéis",
    text: "Seleção criteriosa das melhores opções, do econômico ao luxo.",
  },
  {
    title: "Roteiro personalizado",
    text: "Cada itinerário pensado no seu ritmo, no seu estilo.",
  },
  {
    title: "Seguro viagem & bagagem",
    text: "Tranquilidade total — você foca em aproveitar.",
  },
  {
    title: "Suporte 24h na viagem",
    text: "Qualquer imprevisto, é só chamar no WhatsApp.",
  },
];

export default function About() {
  return (
    <section id="sobre" className="bg-[#0a0a0a] py-28 px-6 border-t border-white/[0.04]">
      <div className="max-w-6xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-14 lg:gap-20 items-start">
          {/* Left — narrative */}
          <div className="lg:col-span-7">
            <p className="text-[#c9a84c] text-xs font-semibold uppercase tracking-[0.3em] mb-5">
              Quem está por trás
            </p>
            <h2 className="text-4xl sm:text-5xl md:text-6xl font-bold text-[#f5f5f7] tracking-tight leading-[0.95] mb-8">
              Henrique Israel,<br />
              <span className="text-[#c9a84c]">fundador.</span>
            </h2>
            <p className="text-[#a1a1a6] text-lg leading-relaxed mb-6 max-w-xl">
              Curitibano, apaixonado por viagens e obcecado por experiências
              bem feitas. Criou a Exclusive Dreams para entregar viagens
              personalizadas — sem pacotes prontos, sem &ldquo;empacotamento de massa&rdquo;.
            </p>
            <p className="text-[#a1a1a6] text-lg leading-relaxed mb-10 max-w-xl">
              Cada cliente é único. Cada roteiro é montado do zero, com voos,
              hotéis e passeios escolhidos para o seu estilo.
            </p>

            <div className="relative inline-block mb-10">
              <span
                className="absolute -top-3 -left-2 text-6xl leading-none text-[#c9a84c]/15 font-serif pointer-events-none select-none"
                aria-hidden="true"
              >
                &ldquo;
              </span>
              <p className="relative text-[#f5f5f7] text-2xl sm:text-3xl font-bold tracking-tight leading-tight pl-6 pr-2 max-w-xl">
                Nada de perrengue.<br />
                <span className="text-[#c9a84c]">Só experiência.</span>
              </p>
            </div>

            <div>
              <a
                href={WHATSAPP_URL}
                target="_blank"
                rel="noopener noreferrer"
                onClick={() => trackWhatsApp("sobre_falar_henrique")}
                className="inline-flex items-center gap-2 bg-[#c9a84c] hover:bg-[#e8c96a] text-black text-sm font-semibold px-7 py-3 rounded-full transition-all duration-200 shadow-[0_0_30px_rgba(201,168,76,0.25)] hover:shadow-[0_0_50px_rgba(201,168,76,0.45)]"
              >
                Falar direto com o Henrique →
              </a>
            </div>
          </div>

          {/* Right — pillars */}
          <div className="lg:col-span-5">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              {PILLARS.map((p) => (
                <div
                  key={p.title}
                  className="bg-[#1d1d1f] border border-white/[0.06] rounded-xl p-5 hover:border-[#c9a84c]/25 transition-colors duration-300"
                >
                  <p className="text-[#c9a84c] text-xs font-semibold uppercase tracking-wider mb-2">
                    {p.title}
                  </p>
                  <p className="text-[#a1a1a6] text-sm leading-relaxed">
                    {p.text}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
