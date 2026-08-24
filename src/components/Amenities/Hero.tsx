import Image from "next/image";
import { Palmtree } from "lucide-react";
import amenitiesHeroImg from "@/public/images/bg-hero-amenities.webp";

export default function Hero() {
  return (
    <section className="relative py-24 lg:py-32 bg-background overflow-hidden">
      <div className="wrapper mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col lg:flex-row items-center justify-between gap-12 lg:gap-16">
          {/* Lado Esquerdo: Textos */}
          <div className="w-full lg:w-1/2 flex flex-col items-start">
            {/* Tag Superior */}
            <div className="flex items-center gap-3 mb-4">
              <span className="w-8 h-px bg-secondary" />
              <span className="text-xs font-semibold uppercase tracking-[0.2em] text-secondary">
                Conforto em cada detalhe
              </span>
            </div>

            {/* Título Principal */}
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight leading-[1.1] mb-6">
              Tudo para uma <br />
              estadia tranquila
            </h1>

            {/* Descrição */}
            <p className="text-text-muted text-base sm:text-lg font-light leading-relaxed max-w-xl">
              Desenhamos nossa estrutura e serviços para que você possa
              desconectar, relaxar e aproveitar o melhor do litoral nordestino
              com absoluto requinte e conforto.
            </p>
          </div>

          {/* Lado Direito: Imagem com Largura Perfeita e Card Flutuante Ajustado */}
          <div className="w-full lg:w-1/2 relative flex justify-center lg:justify-end pb-12 lg:pb-0">
            {/* Container da Imagem Principal */}
            <div className="relative w-full max-w-145 h-110 sm:h-130 lg:h-140 rounded-3xl overflow-hidden shadow-2xl">
              <Image
                src={amenitiesHeroImg}
                alt="Comodidades e suíte do Maré Alta Hotel"
                fill
                priority
                sizes="(max-width: 1024px) 100vw, 50vw"
                className="object-cover object-center hover:scale-105 transition-transform duration-500 ease-in-out"
              />
              <div className="absolute inset-0 bg-linear-to-t from-black/20 via-transparent to-transparent pointer-events-none" />
            </div>

            {/* Card Flutuante Alinhado Exatamente na Borda Inferior Esquerda */}
            <div className="absolute bottom-4 lg:-bottom-6 -left-4 lg:-left-8 bg-background-card border border-border/15 p-5 sm:p-6 rounded-2xl shadow-2xl flex items-center gap-4 min-w-52.5 backdrop-blur-md">
              <div className="w-12 h-12 rounded-xl bg-secondary/15 flex items-center justify-center text-secondary shrink-0">
                <Palmtree className="w-6 h-6" />
              </div>
              <div>
                <h4 className="font-bold tracking-wide font-serif">
                  Paz costeira
                </h4>
                <p className="text-xs text-text-muted font-light mt-0.5">
                  Sinta a brisa
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
