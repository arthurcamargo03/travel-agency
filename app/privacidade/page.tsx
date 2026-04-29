import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";

export const metadata: Metadata = {
  title: "Política de Privacidade | Exclusive Dreams",
  description:
    "Como a Exclusive Dreams coleta, usa e protege seus dados pessoais — em conformidade com a LGPD.",
  robots: { index: true, follow: true },
};

export default function PrivacidadePage() {
  return (
    <main className="bg-black min-h-screen">
      {/* Header bar */}
      <header className="border-b border-white/[0.06]">
        <div className="max-w-3xl mx-auto px-6 h-20 flex items-center justify-between">
          <Link href="/" className="flex items-center">
            <Image
              src="/images/exclusive-dreams-logo-4k.png"
              alt="Exclusive Dreams"
              width={460}
              height={180}
              className="h-12 w-auto object-contain"
              priority
            />
          </Link>
          <Link
            href="/"
            className="text-[#a1a1a6] hover:text-[#c9a84c] text-sm transition-colors duration-200"
          >
            ← Voltar ao site
          </Link>
        </div>
      </header>

      {/* Content */}
      <article className="max-w-3xl mx-auto px-6 py-20">
        <p className="text-[#c9a84c] text-xs font-semibold uppercase tracking-[0.3em] mb-5">
          Documento legal
        </p>
        <h1 className="text-4xl sm:text-5xl font-bold text-[#f5f5f7] tracking-tight leading-[0.95] mb-4">
          Política de<br />Privacidade
        </h1>
        <p className="text-[#86868b] text-sm mb-12">
          Última atualização: 28 de abril de 2026
        </p>

        <div className="space-y-10 text-[#a1a1a6] text-base leading-relaxed">
          <Section title="1. Quem somos">
            A <strong className="text-[#f5f5f7]">Exclusive Dreams Agência de Viagens</strong>,
            sediada em Curitiba/PR, é a controladora dos dados pessoais
            coletados através deste site. Para qualquer assunto relacionado
            à sua privacidade, fale com a gente pelo WhatsApp{" "}
            <a
              href="https://wa.me/5541987472274"
              target="_blank"
              rel="noopener noreferrer"
              className="text-[#c9a84c] hover:text-[#e8c96a] transition-colors"
            >
              (41) 98747-2274
            </a>
            .
          </Section>

          <Section title="2. Quais dados coletamos">
            <p className="mb-3">Neste site, coletamos:</p>
            <ul className="list-disc pl-6 space-y-2">
              <li>
                <strong className="text-[#f5f5f7]">Dados de navegação:</strong>{" "}
                páginas visitadas, tempo de permanência e origem do acesso, via
                Google Analytics.
              </li>
              <li>
                <strong className="text-[#f5f5f7]">Dados que você envia:</strong>{" "}
                ao clicar em &ldquo;Falar no WhatsApp&rdquo;, você é direcionado
                para o aplicativo do WhatsApp e o conteúdo da conversa fica
                sujeito à política do próprio WhatsApp.
              </li>
            </ul>
            <p className="mt-3">
              Não coletamos CPF, endereço, dados bancários ou qualquer dado
              sensível através deste site.
            </p>
          </Section>

          <Section title="3. Para que usamos seus dados">
            <ul className="list-disc pl-6 space-y-2">
              <li>Entender quais conteúdos do site geram mais interesse.</li>
              <li>
                Melhorar a experiência de navegação e a comunicação com nossos
                clientes.
              </li>
              <li>
                Atender você no WhatsApp quando você nos procura por iniciativa
                própria.
              </li>
            </ul>
          </Section>

          <Section title="4. Cookies">
            Utilizamos cookies do Google Analytics para medir o desempenho do
            site. Você pode bloquear os cookies nas configurações do seu
            navegador a qualquer momento — isso não afeta a sua possibilidade
            de navegar pelo site.
          </Section>

          <Section title="5. Compartilhamento">
            Seus dados de navegação são processados pelo Google Analytics
            (Google LLC). Não vendemos, alugamos ou compartilhamos seus dados
            com terceiros para fins comerciais.
          </Section>

          <Section title="6. Seus direitos (LGPD)">
            <p className="mb-3">A LGPD (Lei 13.709/2018) garante a você:</p>
            <ul className="list-disc pl-6 space-y-2">
              <li>Confirmação de que tratamos seus dados.</li>
              <li>Acesso aos dados que temos sobre você.</li>
              <li>Correção de dados incompletos ou desatualizados.</li>
              <li>Eliminação dos seus dados.</li>
              <li>Revogação de consentimento.</li>
            </ul>
            <p className="mt-3">
              Para exercer qualquer um desses direitos, entre em contato pelo
              WhatsApp{" "}
              <a
                href="https://wa.me/5541987472274"
                target="_blank"
                rel="noopener noreferrer"
                className="text-[#c9a84c] hover:text-[#e8c96a] transition-colors"
              >
                (41) 98747-2274
              </a>
              .
            </p>
          </Section>

          <Section title="7. Segurança">
            Adotamos medidas técnicas razoáveis para proteger as informações
            que circulam por este site. Ainda assim, nenhum sistema é 100%
            seguro — em caso de incidente, nos comprometemos a comunicar você
            e a ANPD conforme exigido pela LGPD.
          </Section>

          <Section title="8. Alterações nesta política">
            Esta política pode ser atualizada periodicamente. A versão
            publicada nesta página é sempre a versão vigente — a data da
            última atualização aparece no topo do documento.
          </Section>
        </div>

        <div className="mt-16 pt-10 border-t border-white/[0.06]">
          <Link
            href="/"
            className="inline-flex items-center gap-2 text-[#c9a84c] hover:text-[#e8c96a] text-sm font-medium transition-colors duration-200"
          >
            ← Voltar ao site
          </Link>
        </div>
      </article>
    </main>
  );
}

function Section({
  title,
  children,
}: {
  title: string;
  children: React.ReactNode;
}) {
  return (
    <section>
      <h2 className="text-[#f5f5f7] text-xl font-semibold tracking-tight mb-4">
        {title}
      </h2>
      <div>{children}</div>
    </section>
  );
}
