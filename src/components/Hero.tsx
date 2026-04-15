import Image from "next/image";

const WHATSAPP_NUMBER = "5541987472274";
const WHATSAPP_MSG = encodeURIComponent("Olá, vim pelo site e quero viajar!");
const WHATSAPP_URL = `https://wa.me/${WHATSAPP_NUMBER}?text=${WHATSAPP_MSG}`;

export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Imagem de fundo */}
      <Image
        src="https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=1920&q=80"
        alt="Vista panorâmica de montanhas nevadas ao pôr do sol"
        fill
        priority
        className="object-cover"
      />

      {/* Gradiente preto sobre a imagem para o esquema dark/gold */}
      <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-black/50 to-black/80" />

      {/* Linha dourada decorativa no topo */}
      <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-transparent via-yellow-500 to-transparent" />

      {/* Conteúdo central */}
      <div className="relative z-10 text-center text-white px-4 max-w-4xl mx-auto pt-16">
        <p className="text-yellow-400 font-semibold text-xs uppercase tracking-[0.3em] mb-6">
          Exclusive Dreams · Agência de Viagens
        </p>

        <h1 className="text-4xl sm:text-5xl md:text-7xl font-bold leading-tight mb-6">
          Transforme seus{" "}
          <span className="text-yellow-400">sonhos</span>{" "}
          em memórias
        </h1>

        <p className="text-lg sm:text-xl text-gray-300 mb-10 max-w-2xl mx-auto leading-relaxed">
          Pacotes exclusivos para os destinos mais deslumbrantes do mundo.
          Do planejamento à chegada, cuidamos de cada detalhe por você.
        </p>

        {/* CTAs */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <a
            href={WHATSAPP_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center gap-2 bg-yellow-500 hover:bg-yellow-400 text-black px-8 py-4 rounded-full font-bold text-lg transition-all shadow-lg shadow-yellow-500/25 hover:shadow-yellow-400/40"
          >
            ✈ Quero viajar agora
          </a>
          <a
            href="#destinos"
            className="inline-flex items-center justify-center bg-white/10 hover:bg-white/20 text-white border border-yellow-500/50 px-8 py-4 rounded-full font-semibold text-lg backdrop-blur-sm transition-all"
          >
            Ver destinos
          </a>
        </div>

        {/* Estatísticas */}
        <div className="mt-16 flex flex-wrap justify-center gap-8 text-center">
          {[
            { num: "500+", label: "Viagens realizadas" },
            { num: "98%", label: "Clientes satisfeitos" },
            { num: "40+", label: "Destinos exclusivos" },
          ].map((stat) => (
            <div key={stat.label} className="flex flex-col items-center">
              <span className="text-3xl font-bold text-yellow-400">{stat.num}</span>
              <span className="text-gray-400 text-sm mt-1">{stat.label}</span>
            </div>
          ))}
        </div>
      </div>

      {/* Indicador de scroll */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 text-yellow-400/60 animate-bounce">
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
        </svg>
      </div>
    </section>
  );
}
