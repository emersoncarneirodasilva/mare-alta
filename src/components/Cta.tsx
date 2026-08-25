import Link from "next/link";
import { MessageSquareText } from "lucide-react";

interface CtaProps {
  title: string;
  description: string;
  buttonText: string;
}

export default function Cta({ title, description, buttonText }: CtaProps) {
  const whatsappNumber =
    process.env.NEXT_PUBLIC_WHATSAPP_NUMBER || "+558499999999";
  const message =
    "Olá,%20gostaria%20de%20saber%20mais%20sobre%20as%20reservas%20no%20Maré%20Alta.";

  return (
    <section className="relative bg-primary text-white py-24 lg:py-32 overflow-hidden flex flex-col items-center justify-center text-center">
      {/* Camada de Fundo com Ondas Animadas em Movimento Infinito */}
      <div className="absolute inset-0 pointer-events-none opacity-20 overflow-hidden">
        <svg
          className="absolute bottom-0 left-0 w-[200%] h-full min-h-100 animate-wave"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 1200 120"
          preserveAspectRatio="none"
        >
          <path
            d="M0,0 C150,90 350,-40 500,50 C650,140 900,10 1200,40 L1200,120 L0,120 Z"
            fill="currentColor"
            className="text-white/30"
          />
          <path
            d="M0,30 C200,110 400,0 600,60 C800,120 1000,20 1200,70 L1200,120 L0,120 Z"
            fill="currentColor"
            className="text-white/10"
          />
        </svg>
      </div>

      {/* Conteúdo Principal da Seção */}
      <div className="relative wrapper mx-auto px-4 sm:px-6 lg:px-8 z-10 max-w-4xl flex flex-col items-center">
        <h2 className="text-4xl sm:text-5xl lg:text-6xl text-white font-bold tracking-tight mb-6 leading-tight">
          {title}
        </h2>

        <p className="text-white/80 text-base sm:text-lg lg:text-xl font-light max-w-2xl mb-10 leading-relaxed">
          {description}
        </p>

        {/* Botão de Ação Ajustado (Bordas arredondadas moderadas e ícone fiel à referência) */}
        <Link
          href={`https://wa.me/${whatsappNumber}?text=${message}`}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-2.5 bg-white text-primary font-medium px-8 py-3.5 rounded-xl shadow-xl hover:scale-105 transition-all duration-300 group"
        >
          <MessageSquareText className="w-5 h-5 text-primary" />
          <span>{buttonText}</span>
        </Link>
      </div>
    </section>
  );
}
