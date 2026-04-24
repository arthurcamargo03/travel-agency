"use client";
import Image from "next/image";
import { trackWhatsApp } from "@/lib/gtag";

const WHATSAPP_NUMBER = "5541987472274";

function whatsappUrl(destino: string) {
  const msg = encodeURIComponent(
    `Olá, vim pelo site e tenho interesse na viagem para ${destino}!`
  );
  return `https://wa.me/${WHATSAPP_NUMBER}?text=${msg}`;
}

function whatsappCruiseUrl(cruzeiro: string, empresa: string) {
  const msg = encodeURIComponent(
    `Olá, vim pelo site e tenho interesse no cruzeiro ${cruzeiro} da ${empresa}!`
  );
  return `https://wa.me/${WHATSAPP_NUMBER}?text=${msg}`;
}

const INTERNATIONAL = [
  {
    name: "Maldivas",
    country: "Oceano Índico",
    description:
      "Bangalôs sobre o mar, recifes de corais e pôr do sol inesquecível.",
    image:
      "https://images.unsplash.com/photo-1514282401047-d79a71a590e8?w=800&q=80",
    tag: "Mais vendido",
  },
  {
    name: "Paris",
    country: "França",
    description:
      "A Cidade Luz com roteiro personalizado: Torre Eiffel, museus e gastronomia.",
    image:
      "https://images.unsplash.com/photo-1502602898657-3e91760cbb34?w=800&q=80",
    tag: null,
  },
  {
    name: "Cancún",
    country: "México",
    description:
      "Mar turquesa, ruínas maias e resorts all-inclusive de alto padrão.",
    image:
      "https://images.unsplash.com/photo-1552074284-5e88ef1aef18?w=800&q=80",
    tag: "Promoção",
  },
  {
    name: "Dubai",
    country: "Emirados Árabes",
    description:
      "Arranha-céus dourados, deserto e luxo absoluto no coração do Oriente Médio.",
    image:
      "https://images.unsplash.com/photo-1512453979798-5ea266f8880c?w=800&q=80",
    tag: null,
  },
  {
    name: "Nova York",
    country: "Estados Unidos",
    description:
      "Times Square, Central Park, Broadway e a energia inigualável da Big Apple.",
    image:
      "https://images.unsplash.com/photo-1496442226666-8d4d0e62e6e9?w=800&q=80",
    tag: null,
  },
  {
    name: "Lisboa",
    country: "Portugal",
    description:
      "Arquitetura histórica, pastéis de nata e o charme único da Europa ibérica.",
    image:
      "https://images.unsplash.com/photo-1555881400-74d7acaacd8b?w=800&q=80",
    tag: null,
  },
  {
    name: "Miami",
    country: "Estados Unidos",
    description:
      "Praias de areia branca, vida noturna vibrante e a icônica Ocean Drive.",
    image: "/images/USA-Florida-Miami-South-Beach.jpg",
    tag: null,
  },
  {
    name: "Alemanha",
    country: "Europa",
    description:
      "Castelos medievais, Oktoberfest, florestas negras e a história viva de Berlim.",
    image:
      "https://images.unsplash.com/photo-1467269204594-9661b134dd2b?w=800&q=80",
    tag: null,
  },
];

const NATIONAL = [
  {
    name: "Fernando de Noronha",
    country: "Pernambuco",
    description:
      "Paraíso preservado com praias paradisíacas, golfinhos e mergulhos únicos.",
    image: "/images/Baía-dos-Porcos-em-Fernando-de-Noronha-rodamundo-1.jpg",
    tag: "Exclusivo",
  },
  {
    name: "Arraial do Cabo",
    country: "Rio de Janeiro",
    description:
      "O Caribe brasileiro: águas azuis-turquesa, mergulho e praias selvagens.",
    image: "/images/75da49c5e8b640a619a0f2fc96633f82334218bc-1600x1066.jpg",
    tag: null,
  },
  {
    name: "Lençóis Maranhenses",
    country: "Maranhão",
    description:
      "Dunas brancas e lagoas de água doce num dos cenários mais surreais do Brasil.",
    image: "/images/Lencois-Maranhenses-4.jpg",
    tag: null,
  },
  {
    name: "Chapada dos Veadeiros",
    country: "Goiás",
    description:
      "Cachoeiras cristalinas, trilhas de tirar o fôlego e energia pura do cerrado.",
    image: "/images/chapada-dos-veadeiros-brasilia-capa1-820x458.jpg",
    tag: null,
  },
  {
    name: "Porto Seguro",
    country: "Bahia",
    description:
      "Berço do Brasil: praias paradisíacas, Arraial d'Ajuda e a famosa Passarela do Álcool.",
    image:
      "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?w=800&q=80",
    tag: "Popular",
  },
  {
    name: "Gramado",
    country: "Rio Grande do Sul",
    description:
      "Inverno europeu no Brasil: chocolates artesanais, arquitetura encantadora e o Natal Luz.",
    image:
      "https://images.unsplash.com/photo-1519817650390-64a93db51149?w=800&q=80",
    tag: null,
  },
];

const CRUISES = [
  {
    name: "Icon of the Seas",
    company: "Royal Caribbean",
    description:
      "O maior navio do mundo: 7 piscinas, 40 restaurantes, parque aquático e entretenimento sem fim para toda a família.",
    image: "/images/icon of the seas.jpg",
    tag: "Maior do mundo",
  },
  {
    name: "Disney Treasure",
    company: "Disney Cruise Line",
    description:
      "Magia Disney no alto mar: personagens icônicos, espetáculos de Broadway e restaurantes temáticos.",
    image:
      "/images/2024-dcl-disney-cruise-line-disney-treasure-docking-port-canaveral-florida-3-scaled.jpg",
    tag: "Família",
  },
  {
    name: "MSC World Europa",
    company: "MSC Cruises",
    description:
      "O maior cruzeiro da MSC: sky pool panorâmica, 13 restaurantes e experiências gastronômicas de alto padrão.",
    image: "/images/MSC-World-Europa-capa.jpg",
    tag: null,
  },
  {
    name: "Norwegian Prima",
    company: "Norwegian Cruise Line",
    description:
      "Design revolucionário com piscina de ondas a bordo, tirolesa no mar e gastronomia de altíssimo nível.",
    image: "/images/norwegianlunaheroimage-rendering-768x576.jpg",
    tag: null,
  },
];

interface DestinationItem {
  name: string;
  country: string;
  description: string;
  image: string;
  tag: string | null;
}

interface CruiseItem {
  name: string;
  company: string;
  description: string;
  image: string;
  tag: string | null;
}

function DestinationCard({ dest }: { dest: DestinationItem }) {
  return (
    <div className="group rounded-xl overflow-hidden bg-[#1d1d1f] border border-white/[0.06] hover:border-[#c9a84c]/25 hover:shadow-[0_8px_40px_-8px_rgba(201,168,76,0.14)] transition-all duration-300">
      <div className="relative h-52 overflow-hidden">
        <Image
          src={dest.image}
          alt={dest.name}
          fill
          sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, (max-width: 1280px) 33vw, 25vw"
          className="object-cover group-hover:scale-105 transition-transform duration-500"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-[#1d1d1f] via-transparent to-transparent" />
        {dest.tag && (
          <span className="absolute top-3 left-3 bg-black/65 backdrop-blur-sm text-[#c9a84c] text-xs font-medium px-3 py-1 rounded-full border border-[#c9a84c]/25">
            {dest.tag}
          </span>
        )}
      </div>
      <div className="p-5">
        <p className="text-[#86868b] text-xs mb-1 tracking-wide">{dest.country}</p>
        <h3 className="text-[#f5f5f7] font-semibold text-base mb-2">
          {dest.name}
        </h3>
        <p className="text-[#a1a1a6] text-sm leading-relaxed mb-5">
          {dest.description}
        </p>
        <a
          href={whatsappUrl(dest.name)}
          target="_blank"
          rel="noopener noreferrer"
          onClick={() => trackWhatsApp(`card_destino_${dest.name}`)}
          className="inline-flex items-center gap-1 text-[#c9a84c] text-sm font-medium hover:text-[#e8c96a] transition-colors duration-200 group/link"
        >
          Quero ir
          <span className="transition-transform duration-200 group-hover/link:translate-x-0.5">→</span>
        </a>
      </div>
    </div>
  );
}

function CruiseCard({ cruise }: { cruise: CruiseItem }) {
  return (
    <div className="group rounded-xl overflow-hidden bg-[#000000] border border-white/[0.06] hover:border-[#c9a84c]/25 hover:shadow-[0_8px_40px_-8px_rgba(201,168,76,0.14)] transition-all duration-300">
      <div className="relative h-56 overflow-hidden">
        <Image
          src={cruise.image}
          alt={cruise.name}
          fill
          sizes="(max-width: 640px) 100vw, 50vw"
          className="object-cover group-hover:scale-105 transition-transform duration-500"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent" />
        {cruise.tag && (
          <span className="absolute top-3 left-3 bg-black/65 backdrop-blur-sm text-[#c9a84c] text-xs font-medium px-3 py-1 rounded-full border border-[#c9a84c]/25">
            {cruise.tag}
          </span>
        )}
        <span className="absolute top-3 right-3 bg-black/65 backdrop-blur-sm text-[#a1a1a6] text-xs px-3 py-1 rounded-full border border-white/[0.08]">
          {cruise.company}
        </span>
      </div>
      <div className="p-6">
        <p className="text-[#86868b] text-xs mb-1 tracking-wide">{cruise.company}</p>
        <h3 className="text-[#f5f5f7] font-semibold text-lg mb-2">
          {cruise.name}
        </h3>
        <p className="text-[#a1a1a6] text-sm leading-relaxed mb-5">
          {cruise.description}
        </p>
        <a
          href={whatsappCruiseUrl(cruise.name, cruise.company)}
          target="_blank"
          rel="noopener noreferrer"
          onClick={() => trackWhatsApp(`card_cruzeiro_${cruise.name}`)}
          className="inline-flex items-center gap-1 text-[#c9a84c] text-sm font-medium hover:text-[#e8c96a] transition-colors duration-200 group/link"
        >
          Quero embarcar
          <span className="transition-transform duration-200 group-hover/link:translate-x-0.5">→</span>
        </a>
      </div>
    </div>
  );
}

function SectionDivider({ label }: { label: string }) {
  return (
    <div className="flex items-center gap-5 mb-10">
      <p className="text-[#86868b] text-xs font-semibold uppercase tracking-widest whitespace-nowrap">
        {label}
      </p>
      <div className="flex-1 h-px bg-gradient-to-r from-white/[0.07] to-transparent" />
    </div>
  );
}

export default function Destinations() {
  return (
    <>
      {/* ── Destinos ── */}
      <section id="destinos" className="bg-black py-28 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="mb-20">
            <p className="text-[#c9a84c] text-xs font-semibold uppercase tracking-[0.3em] mb-5">
              Destinos selecionados
            </p>
            <h2 className="text-5xl sm:text-6xl md:text-7xl font-bold text-[#f5f5f7] tracking-tight leading-[0.95] mb-6">
              Onde você<br />quer ir?
            </h2>
            <p className="text-[#86868b] text-lg max-w-md leading-relaxed">
              Cada roteiro pensado nos mínimos detalhes para que você só se
              preocupe em aproveitar.
            </p>
          </div>

          <div className="mb-20">
            <SectionDivider label="Internacional" />
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
              {INTERNATIONAL.map((dest) => (
                <DestinationCard key={dest.name} dest={dest} />
              ))}
            </div>
          </div>

          <div className="mb-16">
            <SectionDivider label="Brasil" />
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
              {NATIONAL.map((dest) => (
                <DestinationCard key={dest.name} dest={dest} />
              ))}
            </div>
          </div>

          <div className="pt-4">
            <p className="text-[#86868b] text-sm mb-5">
              Não encontrou o destino dos seus sonhos?
            </p>
            <a
              href={`https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent("Olá! Vim pelo site e quero um roteiro personalizado.")}`}
              target="_blank"
              rel="noopener noreferrer"
              onClick={() => trackWhatsApp("destinos_roteiro_personalizado")}
              className="inline-flex items-center gap-2 border border-white/[0.15] text-[#f5f5f7] hover:border-[#c9a84c]/50 hover:text-[#c9a84c] px-7 py-3 rounded-full text-sm font-medium transition-all duration-200"
            >
              Pedir um roteiro personalizado →
            </a>
          </div>
        </div>
      </section>

      {/* ── Cruzeiros ── */}
      <section id="cruzeiros" className="bg-[#1d1d1f] py-28 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="mb-20">
            <p className="text-[#c9a84c] text-xs font-semibold uppercase tracking-[0.3em] mb-5">
              Cruzeiros internacionais
            </p>
            <h2 className="text-5xl sm:text-6xl md:text-7xl font-bold text-[#f5f5f7] tracking-tight leading-[0.95] mb-6">
              Navegue pelo<br />mundo.
            </h2>
            <p className="text-[#86868b] text-lg max-w-md leading-relaxed">
              Os maiores e mais luxuosos navios do mundo, com experiências
              únicas em alto mar.
            </p>
          </div>

          <SectionDivider label="Cruzeiros disponíveis" />

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {CRUISES.map((cruise) => (
              <CruiseCard key={cruise.name} cruise={cruise} />
            ))}
          </div>

          <div className="mt-16">
            <p className="text-[#86868b] text-sm mb-5">
              Quer montar um pacote completo com cruzeiro?
            </p>
            <a
              href={`https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent("Olá! Vim pelo site e quero um pacote de cruzeiro personalizado.")}`}
              target="_blank"
              rel="noopener noreferrer"
              onClick={() => trackWhatsApp("cruzeiros_pacote_personalizado")}
              className="inline-flex items-center gap-2 border border-white/[0.15] text-[#f5f5f7] hover:border-[#c9a84c]/50 hover:text-[#c9a84c] px-7 py-3 rounded-full text-sm font-medium transition-all duration-200"
            >
              Montar meu pacote de cruzeiro →
            </a>
          </div>
        </div>
      </section>
    </>
  );
}
