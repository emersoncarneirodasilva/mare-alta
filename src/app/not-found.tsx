import Link from "next/link";
import { Home, Compass } from "lucide-react";

export default function NotFound() {
  return (
    <main className="min-h-screen bg-background flex items-center justify-center px-6 py-12 transition-colors duration-300">
      <div className="max-w-md w-full text-center space-y-6">
        {/* Identificação do Erro */}
        <div className="space-y-3">
          <span className="text-xs uppercase tracking-widest text-secondary font-semibold bg-background-alt px-3 py-1 rounded-full border border-border/30">
            Página não encontrada
          </span>
          <h1 className="text-7xl font-serif font-bold text-text-main">404</h1>
        </div>

        {/* Mensagem principal */}
        <div className="space-y-2 text-text-muted">
          <h2 className="text-xl font-medium text-text-main">
            Parece que você navegou para águas desconhecidas.
          </h2>
          <p className="text-sm leading-relaxed">
            O quarto ou página que você está procurando pode ter sido movido,
            desativado ou o endereço digitado está incorreto.
          </p>
        </div>

        {/* Botões de Ação utilizando as cores do design system */}
        <div className="pt-4 flex flex-col sm:flex-row items-center justify-center gap-3">
          <Link
            href="/"
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2 bg-primary hover:opacity-90 text-white font-medium px-6 py-3 rounded-xl transition-all duration-200 shadow-sm"
          >
            <Home className="w-4 h-4" />
            Voltar ao Início
          </Link>

          <Link
            href="/acomodacoes"
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2 bg-background-card hover:bg-background-alt text-text-main border border-border/40 font-medium px-6 py-3 rounded-xl transition-all duration-200"
          >
            <Compass className="w-4 h-4 text-secondary" />
            Ver Acomodações
          </Link>
        </div>
      </div>
    </main>
  );
}
