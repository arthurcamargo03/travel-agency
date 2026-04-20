"use client";
import Image from "next/image";
import { trackWhatsApp } from "@/lib/gtag";

const WHATSAPP_NUMBER = "5541987472274";
const WHATSAPP_MSG = encodeURIComponent(
  "Olá, vim pelo site e quero saber mais sobre as viagens!"
);
const WHATSAPP_URL = `https://wa.me/${WHATSAPP_NUMBER}?text=${WHATSAPP_MSG}`;

const NAV_LINKS = [
  ["Destinos Internacionais", "#destinos"],
  ["Destinos Nacionais", "#destinos"],
  ["Cruzeiros", "#cruzeiros"],
  ["Depoimentos", "#depoimentos"],
  ["Instagram", "#instagram"],
];

export default function Footer() {
  return (
    <footer id="sobre" className="bg-[#1d1d1f] border-t border-white/[0.06]">
      {/* CTA section */}
      <div className="relative text-center py-28 px-6 border-b border-white/[0.06] overflow-hidden">
        {/* Subtle gold ambient glow */}
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_70%_60%_at_50%_110%,rgba(201,168,76,0.07),transparent)]" />
        <div className="relative z-10">
          <h2 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-[#f5f5f7] tracking-tight leading-[0.92] mb-5">
            Pronto para a<br />próxima aventura?
          </h2>
          <p className="text-[#86868b] text-lg mb-10 max-w-md mx-auto leading-relaxed">
            Fale com nossa equipe e planeje a viagem dos seus sonhos.
          </p>
          <a
            href={WHATSAPP_URL}
            target="_blank"
            rel="noopener noreferrer"
            onClick={() => trackWhatsApp("footer_cta_principal")}
            className="inline-flex items-center gap-2 bg-[#c9a84c] hover:bg-[#e8c96a] text-black text-sm font-semibold px-8 py-3.5 rounded-full transition-all duration-200 shadow-[0_0_40px_rgba(201,168,76,0.25)] hover:shadow-[0_0_56px_rgba(201,168,76,0.45)]"
          >
            <WhatsAppIcon />
            Falar agora no WhatsApp
          </a>
        </div>
      </div>

      {/* Links */}
      <div className="max-w-7xl mx-auto px-6 py-16 grid grid-cols-1 md:grid-cols-3 gap-12">
        {/* Brand */}
        <div>
          <Image
            src="/images/no_background.png"
            alt="Exclusive Dreams Agência de Viagens"
            width={140}
            height={40}
            className="h-9 w-auto object-contain mb-5 opacity-65"
          />
          <p className="text-[#6e6e73] text-sm leading-relaxed max-w-xs">
            Transformamos sonhos em experiências inesquecíveis. Atendimento
            personalizado, do início ao fim.
          </p>
        </div>

        {/* Navigation */}
        <div>
          <p className="text-[#f5f5f7] text-xs font-semibold uppercase tracking-widest mb-6">
            Navegação
          </p>
          <ul className="space-y-3">
            {NAV_LINKS.map(([label, href]) => (
              <li key={label}>
                <a
                  href={href}
                  className="text-[#6e6e73] text-sm hover:text-[#a1a1a6] transition-colors duration-200"
                >
                  {label}
                </a>
              </li>
            ))}
          </ul>
        </div>

        {/* Contact */}
        <div>
          <p className="text-[#f5f5f7] text-xs font-semibold uppercase tracking-widest mb-6">
            Contato
          </p>
          <div className="space-y-3">
            <p className="text-[#6e6e73] text-sm">(41) 98747-2274</p>
            <p className="text-[#6e6e73] text-sm">
              Curitiba, PR — Atendimento online
            </p>
            <a
              href={WHATSAPP_URL}
              target="_blank"
              rel="noopener noreferrer"
              onClick={() => trackWhatsApp("footer_contato")}
              className="inline-flex items-center gap-2 text-[#c9a84c] text-sm hover:text-[#e8c96a] transition-colors duration-200 mt-1"
            >
              <WhatsAppIcon />
              Chamar no WhatsApp →
            </a>
          </div>
        </div>
      </div>

      {/* Bottom */}
      <div className="border-t border-white/[0.05] py-6 px-6">
        <p className="text-[#3a3a3c] text-xs text-center">
          © {new Date().getFullYear()} Exclusive Dreams Agência de Viagens.
          Todos os direitos reservados.
        </p>
      </div>
    </footer>
  );
}

function WhatsAppIcon() {
  return (
    <svg className="w-4 h-4 shrink-0" fill="currentColor" viewBox="0 0 24 24">
      <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z" />
    </svg>
  );
}
