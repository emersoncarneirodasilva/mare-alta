import Image from "next/image";
import { CheckCircle2 } from "lucide-react";
import exploreImage from "@/public/images/ponta-negra.webp";
import { HIGHLIGHTS } from "@/src/constants/hightlights";

export default function Explore() {
  return (
    <section className="py-24 lg:py-32 bg-background-alt overflow-hidden">
      <div className="wrapper mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          {/* Coluna da Esquerda: Imagem com Card Imersivo */}
          <div className="lg:col-span-6 relative flex justify-center lg:justify-start">
            <div className="relative w-full max-w-lg h-120 sm:h-140 rounded-3xl overflow-hidden shadow-2xl group">
              {/* Imagem de Fundo */}
              <Image
                src={exploreImage}
                alt="Praia de Ponta Negra e Morro do Careca em Natal"
                fill
                sizes="(max-width: 1024px) 100vw, 50vw"
                className="object-cover object-center group-hover:scale-105 transition-transform duration-700 ease-out"
              />

              {/* Gradiente para Legibilidade da Tag Inferior */}
              <div className="absolute inset-0 bg-linear-to-t from-black/80 via-transparent to-transparent opacity-90" />

              {/* Informações Flutuantes sobre a Imagem */}
              <div className="absolute inset-0 p-8 flex flex-col justify-end text-white z-10">
                <span className="text-xs uppercase tracking-widest text-white/80 font-medium mb-1">
                  A 15 minutos do hotel
                </span>
                <h3 className="text-3xl font-bold text-[#739ac5]">
                  Praia de Ponta Negra
                </h3>
              </div>
            </div>
          </div>

          {/* Coluna da Direita: Textos, Detalhes e Lista */}
          <div className="lg:col-span-6 flex flex-col gap-6 text-left">
            {/* Etiqueta Superior */}
            <div className="flex items-center gap-3">
              <span className="w-8 h-0.5 bg-secondary inline-block" />
              <span className="text-xs font-semibold uppercase tracking-widest text-secondary">
                Explorar
              </span>
            </div>

            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold leading-[1.2]">
              Descubra Natal além do hotel
            </h2>

            <p className="text-text-muted text-base md:text-lg font-normal leading-relaxed">
              Nossa localização privilegiada permite fácil acesso aos principais
              pontos turísticos. Do famoso Morro do Careca em Ponta Negra à rica
              cultura do Centro Histórico, mergulhe no melhor que a cidade tem a
              oferecer.
            </p>

            {/* Lista de Destaques com Ícones */}
            <div className="flex flex-col gap-3.5 pt-2">
              {HIGHLIGHTS.map((item, index) => (
                <div key={index} className="flex items-center gap-3">
                  <CheckCircle2 className="w-5 h-5 text-primary shrink-0" />
                  <span className="text-foreground font-medium text-base">
                    {item}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
