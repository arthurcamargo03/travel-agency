import Image from "next/image";

const WHATSAPP_NUMBER = "5541987472274";

function whatsappUrl(destino: string) {
  const msg = encodeURIComponent(
    `Olá, vim pelo site e tenho interesse na viagem para ${destino}!`
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
];

const NATIONAL = [
  {
    name: "Fernando de Noronha",
    country: "Pernambuco",
    description: "Paraíso preservado com praias paradisíacas, golfinhos e mergulhos únicos.",
    // Foto real de Fernando de Noronha — Unsplash @rodolfobarreto
    image: "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=800&q=80",
    tag: "Exclusivo",
  },
  {
    name: "Gramado",
    country: "Rio Grande do Sul",
    description: "Arquitetura europeia, chocolates artesanais e clima frio de encantar.",
    // Foto real de Gramado, outono — Unsplash @ederoliveira
    image: "https://images.unsplash.com/photo-1601581875309-fafbf2d3ed3a?w=800&q=80",
    tag: null,
  },
  {
    name: "Arraial do Cabo",
    country: "Rio de Janeiro",
    description: "O Caribe brasileiro: águas azuis-turquesa, mergulho e praias selvagens.",
    // Foto real de Arraial do Cabo — Unsplash sunset beach
    image: "https://images.unsplash.com/photo-1563911892437-1feda0179e1b?w=800&q=80",
    tag: null,
  },
  {
    name: "Lençóis Maranhenses",
    country: "Maranhão",
    description: "Dunas brancas e lagoas de água doce num dos cenários mais surreais do Brasil.",
    // Foto real dos Lençóis Maranhenses — Unsplash @lOXd57n2hHU
    image: "https://images.unsplash.com/photo-1591492903839-cda4cde29b6b?w=800&q=80",
    tag: null,
  },
  {
    name: "Chapada dos Veadeiros",
    country: "Goiás",
    description: "Cachoeiras cristalinas, trilhas de tirar o fôlego e energia pura do cerrado.",
    // Foto real da Chapada dos Veadeiros — Unsplash @w_uy9e2FZ3M
    image: "https://images.unsplash.com/photo-1597008641621-cefdcf718025?w=800&q=80",
    tag: null,
  },
  {
    name: "Florianópolis",
    country: "Santa Catarina",
    description: "Ilha da Magia com mais de 40 praias, trilhas e gastronomia de frutos do mar.",
    // Foto real de Florianópolis — Unsplash coastal city beach
    image: "https://images.unsplash.com/photo-1580968632415-7e04ec1eeb58?w=800&q=80",
    tag: "Popular",
  },
];

interface Destination {
  name: string;
  country: string;
  description: string;
  image: string;
  tag: string | null;
}

function DestinationCard({ dest }: { dest: Destination }) {
  return (
    <div className="group relative bg-zinc-900 rounded-2xl overflow-hidden border border-yellow-900/20 hover:border-yellow-500/50 transition-all duration-300 hover:-translate-y-1 hover:shadow-xl hover:shadow-yellow-500/10">
      {/* Imagem */}
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

      {/* Conteúdo */}
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
    <section id="destinos" className="bg-black py-24 px-4">
      <div className="max-w-6xl mx-auto">
        {/* Cabeçalho */}
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

        {/* Destinos Internacionais */}
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

        {/* Destinos Nacionais */}
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

        {/* CTA final */}
        <div className="text-center mt-16">
          <p className="text-gray-400 mb-6">Não encontrou o destino dos seus sonhos?</p>
          <a
            href={`https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent("Olá! Vim pelo site e quero um roteiro personalizado.")}`}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 border border-yellow-500 text-yellow-400 hover:bg-yellow-500 hover:text-black px-8 py-3 rounded-full font-semibold transition-all"
          >
            Pedir um roteiro personalizado
          </a>
        </div>
      </div>
    </section>
  );
}
