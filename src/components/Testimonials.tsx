"use client";

import { useState } from "react";

const TESTIMONIALS = [
  {
    name: "Ana Paula S.",
    city: "Curitiba, PR",
    destination: "Maldivas",
    rating: 5,
    text: "Minha viagem para as Maldivas foi simplesmente perfeita! O Henrique cuidou de tudo, desde o translado até os passeios de barco. Não precisei me preocupar com absolutamente nada. Já estou planejando a próxima!",
    avatar: "AP",
    color: "bg-yellow-600",
  },
  {
    name: "Rodrigo & Camila",
    city: "São Paulo, SP",
    destination: "Paris",
    rating: 5,
    text: "Lua de mel em Paris dos sonhos! Cada hotel, cada restaurante, cada passeio foi escolhido com muito carinho. A atenção ao detalhe fez toda a diferença. Recomendo de olhos fechados para quem quer uma viagem especial.",
    avatar: "RC",
    color: "bg-rose-600",
  },
  {
    name: "Fernanda L.",
    city: "Londrina, PR",
    destination: "Fernando de Noronha",
    rating: 5,
    text: "Nunca imaginei que Fernando de Noronha seria tão acessível! O pacote que o Henrique montou era completo e com um custo-benefício incrível. As praias são um sonho e o atendimento foi impecável do início ao fim.",
    avatar: "FL",
    color: "bg-blue-600",
  },
  {
    name: "Marcos A.",
    city: "Maringá, PR",
    destination: "Dubai",
    rating: 5,
    text: "Dubai superou todas as expectativas! O roteiro incluiu desde o safári no deserto até o almoço no topo do Burj Khalifa. O Henrique tem um olhar diferenciado para montar experiências únicas. Já indiquei para toda a família.",
    avatar: "MA",
    color: "bg-emerald-600",
  },
  {
    name: "Juliana & Rafael",
    city: "Curitiba, PR",
    destination: "Cancún",
    rating: 5,
    text: "Cancún foi incrível! Resort all-inclusive de primeiro nível, passeios às ruínas maias e mergulho em cenotes. Tudo organizado com antecedência para que chegássemos lá e só aproveitássemos. Nota 10!",
    avatar: "JR",
    color: "bg-purple-600",
  },
  {
    name: "Beatriz C.",
    city: "Ponta Grossa, PR",
    destination: "Lisboa",
    rating: 5,
    text: "Minha primeira viagem internacional e não poderia ter sido melhor! Lisboa é encantadora e o roteiro incluiu as melhores atrações. O Henrique me deixou super segura durante todo o processo. Já quero ir para o próximo destino!",
    avatar: "BC",
    color: "bg-orange-600",
  },
];

function StarIcon({ filled }: { filled: boolean }) {
  return (
    <svg className={`w-4 h-4 ${filled ? "text-yellow-400" : "text-gray-600"}`} fill="currentColor" viewBox="0 0 20 20">
      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
    </svg>
  );
}

export default function Testimonials() {
  const [current, setCurrent] = useState(0);
  const total = TESTIMONIALS.length;

  const prev = () => setCurrent((c) => (c - 1 + total) % total);
  const next = () => setCurrent((c) => (c + 1) % total);

  // Mostra 1 no mobile, 2 no tablet, 3 no desktop
  const visibleCount = 3;
  const visible = Array.from({ length: visibleCount }, (_, i) => TESTIMONIALS[(current + i) % total]);

  return (
    <section id="depoimentos" className="bg-zinc-950 py-24 px-4">
      <div className="max-w-6xl mx-auto">
        {/* Cabeçalho */}
        <div className="text-center mb-16">
          <p className="text-yellow-500 text-xs font-semibold uppercase tracking-[0.3em] mb-3">
            Quem já viajou conta
          </p>
          <h2 className="text-3xl sm:text-5xl font-bold text-white mb-4">
            Mural de{" "}
            <span className="text-yellow-400">Experiências</span>
          </h2>
          <p className="text-gray-400 max-w-xl mx-auto">
            Cada depoimento é uma história real de quem confiou na gente para realizar o sonho de viajar.
          </p>
        </div>

        {/* Carrossel */}
        <div className="relative">
          {/* Cards — grid com 1/2/3 colunas */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 transition-all duration-300">
            {visible.map((t, i) => (
              <div
                key={`${t.name}-${i}`}
                className="bg-zinc-900 border border-yellow-900/20 rounded-2xl p-6 flex flex-col gap-4"
              >
                {/* Estrelas */}
                <div className="flex gap-1">
                  {Array.from({ length: 5 }, (_, i) => (
                    <StarIcon key={i} filled={i < t.rating} />
                  ))}
                </div>

                {/* Destino */}
                <p className="text-yellow-500 text-xs font-semibold uppercase tracking-wider">
                  ✈ {t.destination}
                </p>

                {/* Depoimento */}
                <p className="text-gray-300 text-sm leading-relaxed flex-1">
                  &ldquo;{t.text}&rdquo;
                </p>

                {/* Autor */}
                <div className="flex items-center gap-3 pt-2 border-t border-yellow-900/20">
                  <div className={`${t.color} w-10 h-10 rounded-full flex items-center justify-center text-white font-bold text-sm shrink-0`}>
                    {t.avatar}
                  </div>
                  <div>
                    <p className="text-white font-semibold text-sm">{t.name}</p>
                    <p className="text-gray-500 text-xs">{t.city}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Controles do carrossel */}
          <div className="flex justify-center items-center gap-6 mt-10">
            <button
              onClick={prev}
              className="w-10 h-10 rounded-full border border-yellow-600/50 text-yellow-400 hover:bg-yellow-600 hover:text-black transition-all flex items-center justify-center"
              aria-label="Anterior"
            >
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
              </svg>
            </button>

            {/* Indicadores */}
            <div className="flex gap-2">
              {TESTIMONIALS.map((_, i) => (
                <button
                  key={i}
                  onClick={() => setCurrent(i)}
                  className={`w-2 h-2 rounded-full transition-all ${
                    i === current ? "bg-yellow-400 w-6" : "bg-zinc-600 hover:bg-zinc-400"
                  }`}
                  aria-label={`Ir para depoimento ${i + 1}`}
                />
              ))}
            </div>

            <button
              onClick={next}
              className="w-10 h-10 rounded-full border border-yellow-600/50 text-yellow-400 hover:bg-yellow-600 hover:text-black transition-all flex items-center justify-center"
              aria-label="Próximo"
            >
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
