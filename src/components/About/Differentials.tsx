import Image from "next/image";
import { Bed, Sparkles, MapPin, HeartHandshake } from "lucide-react";
import roomCardBg from "@/public/images/confort-image.webp";
import receptionCardBg from "@/public/images/service-image.webp";

export default function Differentials() {
  return (
    <section className="py-24 lg:py-32 bg-background-alt overflow-hidden">
      <div className="wrapper mx-auto px-4 sm:px-6 lg:px-8">
        {/* Cabeçalho da Seção */}
        <div className="text-center max-w-2xl mx-auto mb-16 lg:mb-20">
          <span className="text-xs font-semibold uppercase tracking-[0.2em] text-secondary mb-3 block">
            Por que escolher o Maré Alta
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight">
            Diferenciais que fazem a diferença
          </h2>
        </div>

        {/* Bento Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-6 lg:gap-8 items-stretch">
          {/* CARD 1: Conforto Essencial com Imagem (Largo - 7 colunas) */}
          <div className="lg:col-span-7 bg-background rounded-3xl p-8 sm:p-10 shadow-lg border border-border/20 flex flex-col xl:flex-row items-center gap-8 relative overflow-hidden group">
            <div className="flex-1 z-10">
              <div className="w-12 h-12 rounded-2xl bg-secondary/10 flex items-center justify-center text-secondary mb-6">
                <Bed className="w-6 h-6" />
              </div>
              <h3 className="text-2xl sm:text-3xl font-bold mb-4">
                Conforto Essencial
              </h3>
              <p className="text-text-muted text-base sm:text-lg font-light leading-relaxed">
                Acomodações projetadas para proporcionar o descanso ideal após
                um dia explorando as belezas naturais da região. Rouparia
                premium e climatização perfeita.
              </p>
            </div>

            <div className="w-full xl:w-56 h-48 sm:h-56 relative rounded-2xl overflow-hidden shadow-md shrink-0">
              <Image
                src={roomCardBg}
                alt="Conforto Essencial no Maré Alta Hotel"
                fill
                sizes="(max-width: 1280px) 100vw, 250px"
                className="object-cover object-center group-hover:scale-105 transition-transform duration-500"
              />
            </div>
          </div>

          {/* CARD 2: Elegância Litorânea - Fundo Escuro Destacado (5 colunas) */}
          <div className="lg:col-span-5 bg-primary rounded-3xl p-8 sm:p-10 shadow-xl border border-border flex flex-col justify-between relative overflow-hidden">
            <div className="z-10">
              <div className="w-12 h-12 rounded-2xl bg-white/10 flex items-center justify-center text-white/80 mb-6">
                <Sparkles className="w-6 h-6" />
              </div>
              <h3 className="text-2xl sm:text-3xl font-bold text-white mb-4">
                Elegância Litorânea
              </h3>
              <p className="text-white/60 text-base sm:text-lg font-light leading-relaxed">
                Um design que reflete a leveza do litoral nordestino, com toques
                de sofisticação moderna e acabamentos aconchegantes.
              </p>
            </div>
          </div>

          {/* CARD 3: Proximidade à Costa (5 colunas) */}
          <div className="lg:col-span-5 bg-background rounded-3xl p-8 sm:p-10 shadow-lg border border-border/20 flex flex-col justify-between relative overflow-hidden group">
            <div className="z-10">
              <div className="w-12 h-12 rounded-2xl bg-secondary/10 flex items-center justify-center text-secondary mb-6">
                <MapPin className="w-6 h-6" />
              </div>
              <h3 className="text-2xl sm:text-3xl font-bold mb-4">
                Proximidade à Costa
              </h3>
              <p className="text-text-muted text-base sm:text-lg font-light leading-relaxed">
                Localização privilegiada, a poucos passos das principais
                atrações, comodidades e praia de Ponta Negra.
              </p>
            </div>
          </div>

          {/* CARD 4: Atendimento Dedicado com Foto Real (Largo - 7 colunas) */}
          <div className="lg:col-span-7 bg-background rounded-3xl p-8 sm:p-10 shadow-lg border border-border/20 flex flex-col xl:flex-row items-center gap-8 relative overflow-hidden group">
            <div className="flex-1 z-10">
              <div className="w-12 h-12 rounded-2xl bg-secondary/10 flex items-center justify-center text-secondary mb-6">
                <HeartHandshake className="w-6 h-6" />
              </div>
              <h3 className="text-2xl sm:text-3xl font-bold mb-4">
                Atendimento Dedicado
              </h3>
              <p className="text-text-muted text-base sm:text-lg font-light leading-relaxed">
                Nossa equipe está sempre disponível para personalizar sua
                experiência, oferecendo dicas locais valiosas e resolvendo
                qualquer necessidade com rapidez e cortesia.
              </p>
            </div>

            <div className="w-full xl:w-56 h-48 sm:h-56 relative rounded-2xl overflow-hidden shadow-md shrink-0">
              <Image
                src={receptionCardBg}
                alt="Recepção do Maré Alta Hotel"
                fill
                sizes="(max-width: 1280px) 100vw, 250px"
                className="object-cover object-center group-hover:scale-105 transition-transform duration-500"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
