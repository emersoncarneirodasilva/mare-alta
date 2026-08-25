import Image from "next/image";
import Link from "next/link";
import { MessageSquare, ChevronRight } from "lucide-react";
import heroImage from "@/public/images/hero-home.webp";
import WeatherBadge from "./WeatherBadge";

export default function Hero() {
  const whatsappNumber =
    process.env.NEXT_PUBLIC_WHATSAPP_NUMBER || "+558499999999";
  const message =
    "Olá,%20gostaria%20de%20saber%20mais%20sobre%20as%20reservas.";

  return (
    <section className="relative w-full min-h-[85vh] lg:min-h-[90vh] flex items-center overflow-hidden bg-background">
      {/* Imagem de Fundo com Overlay Escuro para Contraste */}
      <div className="absolute inset-0 z-0">
        <Image
          src={heroImage}
          alt="Maré Alta Hotel & Suítes - Vista interna de uma suíte luxuosa"
          fill
          priority
          className="object-cover object-center"
        />
        {/* Gradiente escuro para garantir legibilidade perfeita do texto sobre a foto */}
        <div className="absolute inset-0 bg-linear-to-r from-blue-950/60 via-slate-950/20 to-slate-950/5" />
      </div>

      {/* Conteúdo Principal */}
      <div className="wrapper relative z-10 w-full py-20 flex flex-col justify-between min-h-[85vh] lg:min-h-[90vh]">
        {/* Espaçador superior se necessário ou conteúdo do topo da hero */}
        <div className="flex items-center gap-2 text-white/80 text-xs md:text-sm font-medium tracking-widest uppercase">
          <span className="w-6 h-0.5 bg-secondary inline-block" />
          <span>Natal • Rio Grande do Norte</span>
        </div>

        {/* Bloco Central de Títulos e Ações */}
        <div className="max-w-2xl flex flex-col gap-6 my-auto py-8">
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold tracking-tight text-white leading-[1.28]">
            Seu descanso começa em Natal.
          </h1>

          <p className="text-white/90 text-base md:text-lg font-normal leading-relaxed max-w-xl">
            Conforto, acolhimento e uma localização privilegiada para você
            aproveitar o melhor da Cidade do Sol.
          </p>

          {/* Botões de Ação */}
          <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-4 pt-2">
            <Link
              href="/acomodacoes"
              className="inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-xl bg-primary text-white font-medium text-sm hover:bg-primary/95 transition-all shadow-lg hover:scale-[1.02]"
            >
              <span>Conheça nossas acomodações</span>
              <ChevronRight className="w-4 h-4" />
            </Link>

            <a
              href={`https://wa.me/${whatsappNumber}?text=${message}`}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-xl bg-white/10 hover:bg-white/25 backdrop-blur-md text-white border border-white/20 font-medium text-sm transition-all"
            >
              <MessageSquare className="w-4 h-4" />
              <span>Fale pelo WhatsApp</span>
            </a>
          </div>
        </div>

        {/* Rodapé da Hero (Badge de Clima Dinâmico Isolado) */}
        <div className="flex items-center justify-end w-full">
          <WeatherBadge />
        </div>
      </div>
    </section>
  );
}
