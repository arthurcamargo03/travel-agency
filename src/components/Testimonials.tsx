const TESTIMONIALS = [
  {
    name: "Ana Paula S.",
    city: "Curitiba, PR",
    destination: "Maldivas",
    text: "Minha viagem para as Maldivas foi simplesmente perfeita! O Henrique cuidou de tudo, desde o translado até os passeios de barco. Não precisei me preocupar com absolutamente nada. Já estou planejando a próxima!",
    avatar: "AP",
  },
  {
    name: "Rodrigo & Camila",
    city: "São Paulo, SP",
    destination: "Paris",
    text: "Lua de mel em Paris dos sonhos! Cada hotel, cada restaurante, cada passeio foi escolhido com muito carinho. A atenção ao detalhe fez toda a diferença. Recomendo de olhos fechados para quem quer uma viagem especial.",
    avatar: "RC",
  },
  {
    name: "Fernanda L.",
    city: "Londrina, PR",
    destination: "Fernando de Noronha",
    text: "Nunca imaginei que Fernando de Noronha seria tão acessível! O pacote que o Henrique montou era completo e com um custo-benefício incrível. As praias são um sonho e o atendimento foi impecável do início ao fim.",
    avatar: "FL",
  },
  {
    name: "Marcos A.",
    city: "Maringá, PR",
    destination: "Dubai",
    text: "Dubai superou todas as expectativas! O roteiro incluiu desde o safári no deserto até o almoço no topo do Burj Khalifa. O Henrique tem um olhar diferenciado para montar experiências únicas. Já indiquei para toda a família.",
    avatar: "MA",
  },
  {
    name: "Juliana & Rafael",
    city: "Curitiba, PR",
    destination: "Cancún",
    text: "Cancún foi incrível! Resort all-inclusive de primeiro nível, passeios às ruínas maias e mergulho em cenotes. Tudo organizado com antecedência para que chegássemos lá e só aproveitássemos. Nota 10!",
    avatar: "JR",
  },
  {
    name: "Beatriz C.",
    city: "Ponta Grossa, PR",
    destination: "Lisboa",
    text: "Minha primeira viagem internacional e não poderia ter sido melhor! Lisboa é encantadora e o roteiro incluiu as melhores atrações. O Henrique me deixou super segura durante todo o processo.",
    avatar: "BC",
  },
];

export default function Testimonials() {
  return (
    <section id="depoimentos" className="bg-black py-28 px-6">
      <div className="max-w-7xl mx-auto">
        <div className="mb-20">
          <p className="text-[#c9a84c] text-xs font-semibold uppercase tracking-[0.3em] mb-5">
            O que dizem nossos clientes
          </p>
          <h2 className="text-5xl sm:text-6xl md:text-7xl font-bold text-[#f5f5f7] tracking-tight leading-[0.95] mb-6">
            Histórias<br />reais.
          </h2>
          <p className="text-[#86868b] text-lg max-w-md leading-relaxed">
            Cada depoimento é uma viagem que aconteceu de verdade.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {TESTIMONIALS.map((t) => (
            <div
              key={t.name}
              className="bg-[#1d1d1f] border border-white/[0.06] hover:border-white/[0.1] rounded-2xl p-7 flex flex-col transition-colors duration-300"
            >
              {/* Stars */}
              <div className="flex gap-1 mb-5">
                {[...Array(5)].map((_, i) => (
                  <svg
                    key={i}
                    className="w-4 h-4 text-[#c9a84c]"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                  >
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                  </svg>
                ))}
              </div>

              {/* Destination */}
              <p className="text-[#c9a84c] text-xs font-medium uppercase tracking-wider mb-4">
                {t.destination}
              </p>

              {/* Quote */}
              <div className="relative flex-1 mb-7">
                <span
                  className="absolute -top-1 -left-1 text-7xl leading-none text-[#c9a84c]/12 font-serif pointer-events-none select-none"
                  aria-hidden="true"
                >
                  &ldquo;
                </span>
                <p className="text-[#a1a1a6] text-sm leading-relaxed pt-5">
                  {t.text}
                </p>
              </div>

              {/* Author */}
              <div className="flex items-center gap-3 pt-5 border-t border-white/[0.06]">
                <div className="w-9 h-9 rounded-full bg-[#c9a84c]/10 border border-[#c9a84c]/20 flex items-center justify-center shrink-0">
                  <span className="text-[#c9a84c] text-xs font-semibold">
                    {t.avatar}
                  </span>
                </div>
                <div>
                  <p className="text-[#f5f5f7] text-sm font-medium">{t.name}</p>
                  <p className="text-[#6e6e73] text-xs">{t.city}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
