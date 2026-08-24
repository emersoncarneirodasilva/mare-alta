import Image from "next/image";
import { ArrowRight } from "lucide-react";
import { ACCOMMODATIONS } from "@/src/constants/accommodationsList";

export default function AccommodationsList() {
  const whatsappNumber = process.env.WHATSAPP_NUMBER || "+558499999999";

  return (
    <section className="py-24 lg:py-32 bg-background overflow-hidden">
      <div className="wrapper mx-auto px-4 sm:px-6 lg:px-8 space-y-28 lg:space-y-40">
        {ACCOMMODATIONS.map((item, index) => {
          const isEven = index % 2 === 0;

          return (
            <div
              id={item.id}
              key={item.title}
              className={`scroll-mt-28 flex flex-col lg:flex-row items-center gap-12 lg:gap-20 ${
                isEven ? "" : "lg:flex-row-reverse"
              }`}
            >
              {/* Bloco da Imagem Mais Alta */}
              <div className="w-full lg:w-7/12 relative h-90 sm:h-120 lg:h-145 rounded-3xl overflow-hidden shadow-2xl group">
                <Image
                  src={item.image}
                  alt={item.alt}
                  fill
                  sizes="(max-width: 1024px) 100vw, 55vw"
                  className="object-cover object-center group-hover:scale-105 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-linear-to-t from-black/30 via-transparent to-transparent pointer-events-none" />
              </div>

              {/* Bloco de Conteúdo */}
              <div className="w-full lg:w-5/12 flex flex-col items-start">
                <span className="text-xs font-semibold uppercase tracking-[0.2em] text-secondary mb-3 block">
                  {item.tag}
                </span>

                <h3 className="text-3xl sm:text-4xl font-bold tracking-tight mb-4">
                  {item.title}
                </h3>

                <p className="text-text-muted text-base sm:text-lg font-light leading-relaxed mb-8">
                  {item.description}
                </p>

                {/* Grid de Ícones / Comodidades (2 colunas) */}
                <div className="grid grid-cols-2 gap-y-3 gap-x-6 w-full mb-8 py-6">
                  {item.features.map((feat, idx) => {
                    const IconComponent = feat.icon;
                    return (
                      <div
                        key={idx}
                        className="flex items-center gap-3 text-sm font-medium"
                      >
                        <IconComponent className="w-4 h-4 text-secondary shrink-0" />
                        <span>{feat.label}</span>
                      </div>
                    );
                  })}
                </div>

                {/* Botão de Ação Estilo Botão Primário */}
                <a
                  href={`https://wa.me/${whatsappNumber}?text=Olá! Tenho interesse em fazer uma reserva na acomodação ${item.title}. Poderia me passar mais detalhes sobre disponibilidade e valores?`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center gap-3 bg-primary hover:bg-primary/90 text-white font-medium px-6 py-3.5 rounded-xl shadow-md transition-all duration-300 group/btn"
                >
                  <span>Consultar disponibilidade</span>
                  <ArrowRight className="w-4 h-4 group-hover/btn:translate-x-1 transition-transform" />
                </a>
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
}
