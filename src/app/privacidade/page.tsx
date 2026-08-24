import Link from "next/link";
import {
  ShieldCheck,
  Lock,
  Eye,
  FileText,
  Mail,
  ArrowLeft,
} from "lucide-react";

export default function PrivacyPolicy() {
  return (
    <div className="w-full py-16 md:py-24 bg-background text-text-main transition-colors duration-300">
      <div className="wrapper max-w-7xl flex flex-col gap-12">
        {/* Cabeçalho da Página */}
        <div className="flex flex-col gap-4 border-b border-text-muted/10 pb-8">
          {/* Topo do cabeçalho responsivo */}
          <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
            <div className="flex items-center gap-2 text-primary font-medium text-sm">
              <ShieldCheck className="w-5 h-5 shrink-0" />
              <span>Transparência e Segurança</span>
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
            Política de Privacidade
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
            O{" "}
            <strong className="text-text-main">Maré Alta Hotel & Suítes</strong>{" "}
            está comprometido em proteger a sua privacidade. Esta Política de
            Privacidade descreve como coletamos, usamos, armazenamos e
            protegemos as suas informações pessoais quando você utiliza o nosso
            site, realiza reservas ou interage com os nossos serviços em
            Natal/RN.
          </p>
          <p>
            Ao utilizar nossos serviços, você concorda com as práticas descritas
            neste documento. Recomendamos a leitura atenta desta política.
          </p>
        </div>

        {/* Seções de Conteúdo */}
        <div className="flex flex-col gap-10">
          {/* Seção 1 */}
          <section className="flex flex-col gap-4">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-xl bg-background-alt border border-text-muted/20 flex items-center justify-center text-primary">
                <Eye className="w-5 h-5" />
              </div>
              <h2 className="font-serif text-xl md:text-2xl font-bold text-text-main">
                1. Informações que Coletamos
              </h2>
            </div>
            <p className="text-text-muted text-base leading-relaxed">
              Para proporcionar a melhor experiência de hospedagem e
              atendimento, podemos coletar os seguintes tipos de dados:
            </p>
            <ul className="list-disc list-inside flex flex-col gap-2 text-text-muted text-base pl-2">
              <li>
                <strong className="text-text-main">Dados cadastrais:</strong>{" "}
                Nome completo, e-mail, telefone/WhatsApp e endereço.
              </li>
              <li>
                <strong className="text-text-main">Dados de reserva:</strong>{" "}
                Datas de entrada (check-in) e saída (check-out), preferências de
                acomodação e histórico de estadias.
              </li>
              <li>
                <strong className="text-text-main">Dados de navegação:</strong>{" "}
                Endereço IP, tipo de navegador, páginas visitadas e tempo de
                permanência no site, coletados por meio de cookies.
              </li>
            </ul>
          </section>

          {/* Seção 2 */}
          <section className="flex flex-col gap-4">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-xl bg-background-alt border border-text-muted/20 flex items-center justify-center text-primary">
                <FileText className="w-5 h-5" />
              </div>
              <h2 className="font-serif text-xl md:text-2xl font-bold text-text-main">
                2. Como Utilizamos Seus Dados
              </h2>
            </div>
            <p className="text-text-muted text-base leading-relaxed">
              As informações coletadas são utilizadas estritamente para os
              seguintes propósitos:
            </p>
            <ul className="list-disc list-inside flex flex-col gap-2 text-text-muted text-base pl-2">
              <li>Processamento e confirmação de reservas de hospedagem.</li>
              <li>
                Comunicação sobre o status da sua reserva, atendimento pré e
                pós-estadia.
              </li>
              <li>
                Envio de ofertas especiais, novidades e promoções (apenas se
                você autorizar expressamente).
              </li>
              <li>
                Cumprimento de obrigações legais e fiscais exigidas pelos órgãos
                competentes.
              </li>
            </ul>
          </section>

          {/* Seção 3 */}
          <section className="flex flex-col gap-4">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-xl bg-background-alt border border-text-muted/20 flex items-center justify-center text-primary">
                <Lock className="w-5 h-5" />
              </div>
              <h2 className="font-serif text-xl md:text-2xl font-bold text-text-main">
                3. Proteção e Armazenamento de Dados
              </h2>
            </div>
            <p className="text-text-muted text-base leading-relaxed">
              Adotamos medidas de segurança técnicas e administrativas rigorosas
              para proteger os seus dados pessoais contra acessos não
              autorizados, perda, destruição ou alteração indevida. O acesso a
              essas informações é restrito apenas aos colaboradores autorizados
              que necessitam delas para a prestação do serviço.
            </p>
          </section>

          {/* Seção 4 */}
          <section className="flex flex-col gap-4">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-xl bg-background-alt border border-text-muted/20 flex items-center justify-center text-primary">
                <Mail className="w-5 h-5" />
              </div>
              <h2 className="font-serif text-xl md:text-2xl font-bold text-text-main">
                4. Seus Direitos e Contato
              </h2>
            </div>
            <p className="text-text-muted text-base leading-relaxed">
              Você tem o direito de solicitar a confirmação da existência de
              tratamento, acesso, correção ou exclusão dos seus dados pessoais a
              qualquer momento.
            </p>
            <p className="text-text-muted text-base leading-relaxed">
              Caso tenha dúvidas sobre esta Política de Privacidade ou sobre
              como tratamos suas informações, entre em contato conosco através
              da nossa página de{" "}
              <Link
                href="/contato"
                className="text-secondary font-medium hover:underline"
              >
                Contato
              </Link>{" "}
              ou diretamente pelo telefone{" "}
              <strong className="text-text-main">+55 (84) 9999-9999</strong>.
            </p>
          </section>
        </div>
      </div>
    </div>
  );
}
