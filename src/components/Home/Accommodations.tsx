import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { ACCOMMODATIONS_DATA } from "@/src/constants/accommodationsData";

export default function Accommodations() {
  return (
    <section className="py-24 lg:py-32 bg-background overflow-hidden">
      <div className="wrapper mx-auto px-4 sm:px-6 lg:px-8">
        {/* Cabeçalho da Seção */}
        <div className="flex flex-col lg:flex-row lg:items-end justify-between mb-16 gap-6">
          <div className="max-w-2xl flex flex-col items-start gap-6 text-left">
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold leading-[1.2]">
              Conforto para cada tipo de viagem
            </h2>

            <span className="w-12 h-0.5 bg-secondary inline-block" />

            <p className="text-text-muted text-base md:text-lg font-normal leading-relaxed">
              Ambientes projetados para o seu descanso, com decoração
              minimalista e todas as comodidades necessárias para uma estada
              perfeita.
            </p>
          </div>

          <Link
            href="/acomodacoes"
            className="inline-flex items-center gap-2 text-primary font-semibold text-sm md:text-base hover:text-primary/80 transition-all group"
          >
            <span>Ver todas as acomodações</span>
            <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
          </Link>
        </div>

        {/* Grid de Cards Coloridos */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {ACCOMMODATIONS_DATA.map((item, index) => (
            <Link
              key={index}
              href={item.href}
              className="group relative h-120 sm:h-130 rounded-3xl overflow-hidden block shadow-lg hover:shadow-2xl transition-all duration-500"
            >
              {/* Imagem Colorida com Zoom Suave */}
              <Image
                src={item.image}
                alt={item.title}
                fill
                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                className="object-cover object-center group-hover:scale-110 transition-transform duration-700 ease-out"
              />

              {/* Gradiente refinado para dar destaque ao texto sem escurecer demais a foto */}
              <div className="absolute inset-0 bg-linear-to-t from-black/90 via-black/30 to-transparent opacity-85 group-hover:opacity-90 transition-opacity duration-300" />

              {/* Conteúdo Flutuante */}
              <div className="absolute inset-0 p-6 sm:p-8 flex flex-col justify-end text-white z-10">
                {/* Tags */}
                <div className="flex flex-wrap gap-2 mb-4">
                  {item.tags.map((tag, tagIndex) => (
                    <span
                      key={tagIndex}
                      className="text-xs uppercase tracking-wider px-3 py-1.5 rounded-lg bg-black/50 backdrop-blur-md text-white/95 border border-white/15 font-medium shadow-sm"
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                {/* Título com cor clara garantida (branco puro) */}
                <h3 className="font-serif text-2xl sm:text-3xl font-bold mb-2 text-white group-hover:text-[#739ac5] transition-colors drop-shadow-sm">
                  {item.title}
                </h3>

                {/* Descrição em tom claro (branco com leve opacidade) */}
                <p className="text-white/90 text-sm sm:text-base line-clamp-2 mb-6 font-normal leading-relaxed drop-shadow-sm">
                  {item.description}
                </p>

                {/* Link de Ação */}
                <div className="inline-flex items-center gap-2 text-secondary font-semibold text-sm group-hover:translate-x-1 transition-transform w-fit">
                  <span>Conhecer acomodação</span>
                  <ArrowRight className="w-4 h-4" />
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
