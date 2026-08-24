import Link from "next/link";
import {
  FileCheck,
  Calendar,
  CreditCard,
  AlertCircle,
  HelpCircle,
  ArrowLeft,
} from "lucide-react";

export default function TermsOfUse() {
  return (
    <div className="w-full py-16 md:py-24 bg-background text-text-main transition-colors duration-300">
      <div className="wrapper max-w-7xl flex flex-col gap-12">
        {/* Cabeçalho da Página */}
        <div className="flex flex-col gap-4 border-b border-text-muted/10 pb-8">
          {/* Topo do cabeçalho responsivo */}
          <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
            <div className="flex items-center gap-2 text-primary font-medium text-sm">
              <FileCheck className="w-5 h-5 shrink-0" />
              <span>Condições Gerais</span>
            </div>

            <Link
              href="/"
              className="inline-flex items-center gap-2 text-sm font-medium text-secondary hover:underline w-fit bg-background-alt/50 px-3 py-1.5 rounded-lg border border-text-muted/10 md:bg-transparent md:p-0 md:border-0"
            >
              <ArrowLeft className="w-4 h-4" />
              <span>Voltar para a página inicial</span>
            </Link>
          </div>

          <h1 className="font-serif text-3xl md:text-5xl font-bold tracking-tight text-text-main">
            Termos de Uso
          </h1>
          <p className="text-text-muted text-sm md:text-base">
            Última atualização:{" "}
            {new Date().toLocaleDateString("pt-BR", {
              month: "long",
              year: "numeric",
            })}
          </p>
        </div>

        {/* Introdução */}
        <div className="flex flex-col gap-4 text-text-muted text-base leading-relaxed">
          <p>
            Bem-vindo ao{" "}
            <strong className="text-text-main">Maré Alta Hotel & Suítes</strong>
            . Ao acessar nosso site, efetuar reservas ou utilizar nossos
            serviços em Natal/RN, você concorda expressamente com os Termos de
            Uso descritos abaixo.
          </p>
          <p>
            Estes termos regulam a relação entre o hotel e os
            hóspedes/visitantes. Pedimos que leia atentamente antes de
            prosseguir com qualquer transação ou agendamento de estadia.
          </p>
        </div>

        {/* Seções de Conteúdo */}
        <div className="flex flex-col gap-10">
          {/* Seção 1 */}
          <section className="flex flex-col gap-4">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-xl bg-background-alt border border-text-muted/20 flex items-center justify-center text-primary">
                <Calendar className="w-5 h-5" />
              </div>
              <h2 className="font-serif text-xl md:text-2xl font-bold text-text-main">
                1. Reservas, Check-in e Check-out
              </h2>
            </div>
            <p className="text-text-muted text-base leading-relaxed">
              As diretrizes referentes à ocupação das acomodações seguem os
              padrões da indústria hoteleira:
            </p>
            <ul className="list-disc list-inside flex flex-col gap-2 text-text-muted text-base pl-2">
              <li>
                <strong className="text-text-main">Horários padrão:</strong> O
                horário de check-in inicia-se às 14:00, e o check-out deve ser
                efetuado até às 12:00.
              </li>
              <li>
                <strong className="text-text-main">Confirmação:</strong> Toda
                reserva solicitada está sujeita à confirmação de disponibilidade
                e validação do pagamento correspondente.
              </li>
              <li>
                <strong className="text-text-main">Documentação:</strong> No
                momento do check-in, é obrigatória a apresentação de documento
                de identificação oficial com foto de todos os hóspedes.
              </li>
            </ul>
          </section>

          {/* Seção 2 */}
          <section className="flex flex-col gap-4">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-xl bg-background-alt border border-text-muted/20 flex items-center justify-center text-primary">
                <CreditCard className="w-5 h-5" />
              </div>
              <h2 className="font-serif text-xl md:text-2xl font-bold text-text-main">
                2. Políticas de Cancelamento e Reembolso
              </h2>
            </div>
            <p className="text-text-muted text-base leading-relaxed">
              Entendemos que imprevistos podem acontecer. Nossas regras de
              cancelamento visam equilibrar flexibilidade e segurança para ambas
              as partes:
            </p>
            <ul className="list-disc list-inside flex flex-col gap-2 text-text-muted text-base pl-2">
              <li>
                Cancelamentos solicitados com até 7 dias de antecedência da data
                de check-in dão direito ao reembolso integral.
              </li>
              <li>
                Para cancelamentos efetuados após esse prazo, taxas ou retenções
                parciais poderão ser aplicadas conforme a tarifa escolhida no
                momento da reserva.
              </li>
              <li>
                Em caso de no-show (não comparecimento sem aviso prévio), a
                primeira diária ou o valor total estipulado poderá ser cobrado.
              </li>
            </ul>
          </section>

          {/* Seção 3 */}
          <section className="flex flex-col gap-4">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-xl bg-background-alt border border-text-muted/20 flex items-center justify-center text-primary">
                <AlertCircle className="w-5 h-5" />
              </div>
              <h2 className="font-serif text-xl md:text-2xl font-bold text-text-main">
                3. Conduta e Responsabilidades
              </h2>
            </div>
            <p className="text-text-muted text-base leading-relaxed">
              Para garantir o conforto, a segurança e a boa convivência de todos
              os nossos hóspedes e colaboradores, o Maré Alta Hotel & Suítes
              reserva-se o direito de recusar atendimento ou solicitar a
              desocupação imediata do quarto em casos de conduta antidesportiva,
              danos intencionais ao patrimônio ou desrespeito às normas de
              convivência interna (incluindo diretrizes sobre áreas de fumantes
              e silêncio após as 22h).
            </p>
          </section>

          {/* Seção 4 */}
          <section className="flex flex-col gap-4">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-xl bg-background-alt border border-text-muted/20 flex items-center justify-center text-primary">
                <HelpCircle className="w-5 h-5" />
              </div>
              <h2 className="font-serif text-xl md:text-2xl font-bold text-text-main">
                4. Modificações nos Termos
              </h2>
            </div>
            <p className="text-text-muted text-base leading-relaxed">
              O Maré Alta Hotel & Suítes poderá atualizar estes Termos de Uso
              periodicamente para refletir melhorias no site, mudanças
              operacionais ou exigências legais. Recomendamos que você revise
              esta página regularmente.
            </p>
            <p className="text-text-muted text-base leading-relaxed">
              Se tiver qualquer dúvida sobre estes termos, entre em contato
              através da nossa página de{" "}
              <Link
                href="/contato"
                className="text-secondary font-medium hover:underline"
              >
                Contato
              </Link>{" "}
              ou pelo telefone{" "}
              <strong className="text-text-main">+55 (84) 9999-9999</strong>.
            </p>
          </section>
        </div>
      </div>
    </div>
  );
}
