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
    description: "Bangalôs sobre o mar, recifes de corais e pôr do sol inesquecível.",
    image: "https://images.unsplash.com/photo-1514282401047-d79a71a590e8?w=800&q=80",
    tag: "Mais vendido",
  },
  {
    name: "Paris",
    country: "França",
    description: "A Cidade Luz com roteiro personalizado: Torre Eiffel, museus e gastronomia.",
    image: "https://images.unsplash.com/photo-1502602898657-3e91760cbb34?w=800&q=80",
    tag: null,
  },
  {
    name: "Cancún",
    country: "México",
    description: "Mar turquesa, ruínas maias e resorts all-inclusive de alto padrão.",
    image: "https://images.unsplash.com/photo-1552074284-5e88ef1aef18?w=800&q=80",
    tag: "Promoção",
  },
  {
    name: "Dubai",
    country: "Emirados Árabes",
    description: "Arranha-céus dourados, deserto e luxo absoluto no coração do Oriente Médio.",
    image: "https://images.unsplash.com/photo-1512453979798-5ea266f8880c?w=800&q=80",
    tag: null,
  },
  {
    name: "Nova York",
    country: "Estados Unidos",
    description: "Times Square, Central Park, Broadway e a energia inigualável da Big Apple.",
    image: "https://images.unsplash.com/photo-1496442226666-8d4d0e62e6e9?w=800&q=80",
    tag: null,
  },
  {
    name: "Lisboa",
    country: "Portugal",
    description: "Arquitetura histórica, pastéis de nata e o charme único da Europa ibérica.",
    image: "https://images.unsplash.com/photo-1555881400-74d7acaacd8b?w=800&q=80",
    tag: null,
  },
  {
    name: "Miami",
    country: "Estados Unidos",
    description: "Praias de areia branca, vida noturna vibrante e a icônica Ocean Drive em South Beach.",
    image: "/images/USA-Florida-Miami-South-Beach.jpg",
    tag: null,
  },
  {
    name: "Alemanha",
    country: "Europa",
    description: "Castelos medievais, Oktoberfest, florestas negras e a história viva de Berlim.",
    image: "https://images.unsplash.com/photo-1467269204594-9661b134dd2b?w=800&q=80",
    tag: null,
  },
];

const NATIONAL = [
  {
    name: "Fernando de Noronha",
    country: "Pernambuco",
    description: "Paraíso preservado com praias paradisíacas, golfinhos e mergulhos únicos.",
    image: "/images/Baía-dos-Porcos-em-Fernando-de-Noronha-rodamundo-1.jpg",
    tag: "Exclusivo",
  },
  {
    name: "Arraial do Cabo",
    country: "Rio de Janeiro",
    description: "O Caribe brasileiro: águas azuis-turquesa, mergulho e praias selvagens.",
    image: "/images/75da49c5e8b640a619a0f2fc96633f82334218bc-1600x1066.jpg",
    tag: null,
  },
  {
    name: "Lençóis Maranhenses",
    country: "Maranhão",
    description: "Dunas brancas e lagoas de água doce num dos cenários mais surreais do Brasil.",
    image: "/images/Lencois-Maranhenses-4.jpg",
    tag: null,
  },
  {
    name: "Chapada dos Veadeiros",
    country: "Goiás",
    description: "Cachoeiras cristalinas, trilhas de tirar o fôlego e energia pura do cerrado.",
    image: "/images/chapada-dos-veadeiros-brasilia-capa1-820x458.jpg",
    tag: null,
  },
  {
    name: "Porto Seguro",
    country: "Bahia",
    description: "Berço do Brasil: praias paradisíacas, Arraial d'Ajuda e a famosa Passarela do Álcool.",
    image: "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?w=800&q=80",
    tag: "Popular",
  },
];

const CRUISES = [
  {
    name: "Icon of the Seas",
    company: "Royal Caribbean",
    description:
      "O maior navio do mundo: 7 piscinas, 40 restaurantes, parque aquático, 20 conveses e entretenimento sem fim para toda a família.",
    image: "/images/icon of the seas.jpg",
    tag: "Maior do mundo",
  },
  {
    name: "Disney Treasure",
    company: "Disney Cruise Line",
    description:
      "Magia Disney no alto mar: personagens icônicos, espetáculos de Broadway, restaurantes temáticos e diversão garantida para todas as idades.",
    image: "/images/2024-dcl-disney-cruise-line-disney-treasure-docking-port-canaveral-florida-3-scaled.jpg",
    tag: "Família",
  },
  {
    name: "MSC World Europa",
    company: "MSC Cruises",
    description:
      "O maior cruzeiro da MSC: propulsão a GNL, sky pool panorâmica, 13 restaurantes e experiências gastronômicas de alto padrão.",
    image: "/images/MSC-World-Europa-capa.jpg",
    tag: null,
  },
  {
    name: "Norwegian Prima",
    company: "Norwegian Cruise Line",
    description:
      "Design revolucionário com piscina de ondas a bordo, tirolesa no mar, varanda privativa e gastronomia de altíssimo nível.",
    image: "/images/norwegianlunaheroimage-rendering-768x576.jpg",
    tag: null,
  },
];

interface Destination {
  name: string;
  country: string;
  description: string;
  image: string;
  tag: string | null;
}

interface Cruise {
  name: string;
  company: string;
  description: string;
  image: string;
  tag: string | null;
}

function DestinationCard({ dest }: { dest: Destination }) {
  return (
    <div className="group relative bg-zinc-900 rounded-2xl overflow-hidden border border-yellow-900/20 hover:border-yellow-500/50 transition-all duration-300 hover:-translate-y-1 hover:shadow-xl hover:shadow-yellow-500/10">
      <div className="relative h-52 overflow-hidden">
        <Image
          src={dest.image}
          alt={dest.name}
          fill
          className="object-cover group-hover:scale-105 transition-transform duration-500"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-zinc-900 via-transparent to-transparent" />
        {dest.tag && (
          <span className="absolute top-3 left-3 bg-yellow-500 text-black text-xs font-bold px-3 py-1 rounded-full">
            {dest.tag}
          </span>
        )}
      </div>
      <div className="p-5">
        <div className="mb-3">
          <h3 className="text-white font-bold text-lg">{dest.name}</h3>
          <p className="text-yellow-500 text-sm font-medium">{dest.country}</p>
        </div>
        <p className="text-gray-400 text-sm leading-relaxed mb-5">{dest.description}</p>
        <a
          href={whatsappUrl(dest.name)}
          target="_blank"
          rel="noopener noreferrer"
          onClick={() => trackWhatsApp(`card_destino_${dest.name}`)}
          className="w-full inline-flex items-center justify-center gap-2 bg-yellow-500 hover:bg-yellow-400 text-black text-sm font-bold px-4 py-2.5 rounded-full transition-colors"
        >
          Quero saber mais
        </a>
      </div>
    </div>
  );
}

function CruiseCard({ cruise }: { cruise: Cruise }) {
  return (
    <div className="group relative bg-zinc-900 rounded-2xl overflow-hidden border border-yellow-900/20 hover:border-yellow-500/50 transition-all duration-300 hover:-translate-y-1 hover:shadow-xl hover:shadow-yellow-500/10">
      <div className="relative h-56 overflow-hidden">
        <Image
          src={cruise.image}
          alt={cruise.name}
          fill
          className="object-cover group-hover:scale-105 transition-transform duration-500"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-zinc-900 via-transparent to-transparent" />
        {cruise.tag && (
          <span className="absolute top-3 left-3 bg-yellow-500 text-black text-xs font-bold px-3 py-1 rounded-full">
            {cruise.tag}
          </span>
        )}
        <span className="absolute top-3 right-3 bg-black/60 text-yellow-400 text-xs font-semibold px-3 py-1 rounded-full backdrop-blur-sm">
          {cruise.company}
        </span>
      </div>
      <div className="p-5">
        <div className="mb-3">
          <h3 className="text-white font-bold text-lg">{cruise.name}</h3>
          <p className="text-yellow-500 text-sm font-medium">{cruise.company}</p>
        </div>
        <p className="text-gray-400 text-sm leading-relaxed mb-5">{cruise.description}</p>
        <a
          href={whatsappCruiseUrl(cruise.name, cruise.company)}
          target="_blank"
          rel="noopener noreferrer"
          onClick={() => trackWhatsApp(`card_cruzeiro_${cruise.name}`)}
          className="w-full inline-flex items-center justify-center gap-2 bg-yellow-500 hover:bg-yellow-400 text-black text-sm font-bold px-4 py-2.5 rounded-full transition-colors"
        >
          Quero saber mais
        </a>
      </div>
    </div>
  );
}

export default function Destinations() {
  return (
    <>
      {/* ── Destinos ── */}
      <section id="destinos" className="bg-black py-24 px-4">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <p className="text-yellow-500 text-xs font-semibold uppercase tracking-[0.3em] mb-3">
              Destinos selecionados
            </p>
            <h2 className="text-3xl sm:text-5xl font-bold text-white mb-4">
              Onde você quer{" "}
              <span className="text-yellow-400">ir primeiro?</span>
            </h2>
            <p className="text-gray-400 max-w-xl mx-auto">
              Cada roteiro é pensado nos mínimos detalhes para que você só precise se preocupar em aproveitar.
            </p>
          </div>

          {/* Internacionais */}
          <div className="mb-16">
            <div className="flex items-center gap-4 mb-8">
              <span className="text-yellow-400 text-2xl">✈</span>
              <h3 className="text-xl font-bold text-white">Destinos Internacionais</h3>
              <div className="flex-1 h-px bg-yellow-900/40" />
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {INTERNATIONAL.map((dest) => (
                <DestinationCard key={dest.name} dest={dest} />
              ))}
            </div>
          </div>

          {/* Nacionais */}
          <div>
            <div className="flex items-center gap-4 mb-8">
              <span className="text-yellow-400 text-2xl">🇧🇷</span>
              <h3 className="text-xl font-bold text-white">Destinos Nacionais</h3>
              <div className="flex-1 h-px bg-yellow-900/40" />
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {NATIONAL.map((dest) => (
                <DestinationCard key={dest.name} dest={dest} />
              ))}
            </div>
          </div>

          {/* CTA */}
          <div className="text-center mt-16">
            <p className="text-gray-400 mb-6">Não encontrou o destino dos seus sonhos?</p>
            <a
              href={`https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent("Olá! Vim pelo site e quero um roteiro personalizado.")}`}
              target="_blank"
              rel="noopener noreferrer"
              onClick={() => trackWhatsApp("destinos_roteiro_personalizado")}
              className="inline-flex items-center gap-2 border border-yellow-500 text-yellow-400 hover:bg-yellow-500 hover:text-black px-8 py-3 rounded-full font-semibold transition-all"
            >
              Pedir um roteiro personalizado
            </a>
          </div>
        </div>
      </section>

      {/* ── Cruzeiros ── */}
      <section id="cruzeiros" className="bg-zinc-950 py-24 px-4">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <p className="text-yellow-500 text-xs font-semibold uppercase tracking-[0.3em] mb-3">
              Cruzeiros disponíveis
            </p>
            <h2 className="text-3xl sm:text-5xl font-bold text-white mb-4">
              Navegue pelo{" "}
              <span className="text-yellow-400">mundo com estilo</span>
            </h2>
            <p className="text-gray-400 max-w-xl mx-auto">
              Os maiores e mais luxuosos navios do mundo, com experiências únicas em alto mar.
            </p>
          </div>

          <div className="flex items-center gap-4 mb-8">
            <span className="text-yellow-400 text-2xl">🚢</span>
            <h3 className="text-xl font-bold text-white">Cruzeiros Internacionais</h3>
            <div className="flex-1 h-px bg-yellow-900/40" />
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 gap-6">
            {CRUISES.map((cruise) => (
              <CruiseCard key={cruise.name} cruise={cruise} />
            ))}
          </div>

          <div className="text-center mt-16">
            <p className="text-gray-400 mb-6">Quer montar um pacote completo com cruzeiro?</p>
            <a
              href={`https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent("Olá! Vim pelo site e quero um pacote de cruzeiro personalizado.")}`}
              target="_blank"
              rel="noopener noreferrer"
              onClick={() => trackWhatsApp("cruzeiros_pacote_personalizado")}
              className="inline-flex items-center gap-2 border border-yellow-500 text-yellow-400 hover:bg-yellow-500 hover:text-black px-8 py-3 rounded-full font-semibold transition-all"
            >
              Montar meu pacote de cruzeiro
            </a>
          </div>
        </div>
      </section>
    </>
  );
}
