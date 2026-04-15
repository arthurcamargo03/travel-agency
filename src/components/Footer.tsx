import Image from "next/image";

const WHATSAPP_NUMBER = "5541987472274";
const WHATSAPP_MSG = encodeURIComponent(
  "Olá, vim pelo site e quero saber mais sobre as viagens!"
);
const WHATSAPP_URL = `https://wa.me/${WHATSAPP_NUMBER}?text=${WHATSAPP_MSG}`;

export default function Footer() {
  return (
    <footer id="sobre" className="bg-zinc-950 border-t border-yellow-900/20">
      {/* CTA de encerramento */}
      <div className="bg-gradient-to-r from-yellow-600 to-yellow-500 py-12 px-4 text-center">
        <h2 className="text-2xl sm:text-3xl font-bold text-black mb-3">
          Pronto para realizar o sonho?
        </h2>
        <p className="text-black/70 mb-6 max-w-md mx-auto">
          Fale agora mesmo e receba um orçamento personalizado sem compromisso.
        </p>
        <a
          href={WHATSAPP_URL}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-2 bg-black hover:bg-zinc-800 text-yellow-400 px-8 py-4 rounded-full font-bold text-lg transition-all shadow-lg"
        >
          <WhatsAppIcon />
          Falar agora no WhatsApp
        </a>
      </div>

      {/* Corpo do footer */}
      <div className="max-w-6xl mx-auto px-4 py-12 grid grid-cols-1 md:grid-cols-3 gap-10">
        {/* Logo e descrição */}
        <div>
          <Image
            src="/images/Gemini_Generated_Image_yc2w88yc2w88yc2w.png"
            alt="Exclusive Dreams Agência de Viagens"
            width={160}
            height={50}
            className="h-12 w-auto object-contain mb-4 mix-blend-screen"
          />
          <p className="text-gray-400 text-sm leading-relaxed">
            Transformamos sonhos em experiências inesquecíveis. Viagens exclusivas,
            atendimento personalizado e cuidado em cada detalhe.
          </p>
        </div>

        {/* Links rápidos */}
        <div>
          <h3 className="text-yellow-400 font-semibold text-sm uppercase tracking-widest mb-4">
            Navegação
          </h3>
          <ul className="space-y-2 text-gray-400 text-sm">
            {[
              ["Destinos Internacionais", "#destinos"],
              ["Destinos Nacionais", "#destinos"],
              ["Depoimentos", "#depoimentos"],
              ["Instagram", "#instagram"],
            ].map(([label, href]) => (
              <li key={label}>
                <a href={href} className="hover:text-yellow-400 transition-colors">
                  {label}
                </a>
              </li>
            ))}
          </ul>
        </div>

        {/* Contato */}
        <div>
          <h3 className="text-yellow-400 font-semibold text-sm uppercase tracking-widest mb-4">
            Contato
          </h3>
          <div className="space-y-3 text-gray-400 text-sm">
            <p className="flex items-center gap-2">
              <span className="text-yellow-500">📱</span>
              (41) 98747-2274
            </p>
            <p className="flex items-center gap-2">
              <span className="text-yellow-500">📍</span>
              Curitiba, PR — Atendimento online
            </p>
            <a
              href={WHATSAPP_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 mt-2 text-green-400 hover:text-green-300 transition-colors"
            >
              <WhatsAppIcon />
              Chamar no WhatsApp
            </a>
          </div>
        </div>
      </div>

      {/* Barra inferior */}
      <div className="border-t border-yellow-900/10 py-5 px-4 text-center text-gray-600 text-xs">
        © {new Date().getFullYear()} Exclusive Dreams Agência de Viagens. Todos os direitos reservados.
      </div>
    </footer>
  );
}

function WhatsAppIcon() {
  return (
    <svg className="w-5 h-5 shrink-0" fill="currentColor" viewBox="0 0 24 24">
      <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z" />
    </svg>
  );
}
