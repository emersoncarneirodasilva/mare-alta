import Image from "next/image";
import {
  Utensils,
  Wifi,
  Car,
  Clock,
  Sparkles,
  ConciergeBell,
  MapPin,
} from "lucide-react";
import breakfastImg from "@/public/images/breakfast-home.webp";
import mapImg from "@/public/images/map-image.webp";

export default function AmenitiesList() {
  return (
    <section className="py-24 lg:py-32 bg-background-alt overflow-hidden">
      <div className="wrapper mx-auto px-4 sm:px-6 lg:px-8">
        {/* Cabeçalho da Seção */}
        <div className="text-center max-w-2xl mx-auto mb-16 lg:mb-20">
          <span className="text-xs font-semibold uppercase tracking-[0.2em] text-secondary mb-3 block">
            Estrutura Completa
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight font-serif">
            Tudo o que você precisa para uma experiência perfeita
          </h2>
        </div>

        {/* Grid Principal */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          {/* 1. Café da Manhã (Ocupa 2 colunas no desktop) */}
          <div className="lg:col-span-2 bg-background rounded-3xl p-8 sm:p-10 shadow-lg border border-border/20 flex flex-col xl:flex-row items-center gap-8 group">
            <div className="flex-1 z-10">
              <div className="w-12 h-12 rounded-2xl bg-secondary/15 flex items-center justify-center text-secondary mb-6 shadow-inner">
                <Utensils className="w-6 h-6" />
              </div>
              <h3 className="text-2xl sm:text-3xl font-bold mb-4 font-serif">
                Café da manhã
              </h3>
              <p className="text-text-muted text-base font-light leading-relaxed">
                Comece o dia com uma seleção impecável de pães artesanais,
                frutas tropicais frescas e iguarias regionais quentinhas,
                servidos em um ambiente banhado por luz natural.
              </p>
            </div>
            <div className="w-full xl:w-56 h-48 sm:h-56 relative rounded-2xl overflow-hidden shadow-md shrink-0">
              <Image
                src={breakfastImg}
                alt="Café da manhã no Maré Alta Hotel"
                fill
                sizes="(max-width: 1280px) 100vw, 224px"
                className="object-cover object-center group-hover:scale-105 transition-transform duration-500"
              />
            </div>
          </div>

          {/* 2. Wi-Fi gratuito - Card Azul (Primary) */}
          <div className="bg-primary rounded-3xl p-8 sm:p-10 shadow-xl border border-border/10 flex flex-col justify-between group">
            <div>
              <div className="w-12 h-12 rounded-2xl bg-white/10 flex items-center justify-center text-white mb-6 backdrop-blur-md">
                <Wifi className="w-6 h-6" />
              </div>
              <h3 className="text-2xl sm:text-3xl font-bold text-white mb-4 font-serif">
                Wi-Fi gratuito
              </h3>
              <p className="text-white/70 text-base font-light leading-relaxed">
                Conexão de altíssima velocidade em todas as áreas do hotel,
                garantindo que você esteja sempre conectado para lazer ou
                trabalho remoto.
              </p>
            </div>
          </div>

          {/* 3. Estacionamento */}
          <div className="bg-background rounded-3xl p-8 sm:p-10 shadow-lg border border-border/20 flex flex-col justify-between group">
            <div>
              <div className="w-12 h-12 rounded-2xl bg-secondary/15 flex items-center justify-center text-secondary mb-6 shadow-inner">
                <Car className="w-6 h-6" />
              </div>
              <h3 className="text-2xl sm:text-3xl font-bold mb-4 font-serif">
                Estacionamento
              </h3>
              <p className="text-text-muted text-base font-light leading-relaxed">
                Vagas amplas, seguras e exclusivas para nossos hóspedes no
                local, proporcionando máxima comodidade e paz de espírito.
              </p>
            </div>
          </div>

          {/* 4. Recepção 24h */}
          <div className="bg-background rounded-3xl p-8 sm:p-10 shadow-lg border border-border/20 flex flex-col justify-between group">
            <div>
              <div className="w-12 h-12 rounded-2xl bg-secondary/15 flex items-center justify-center text-secondary mb-6 shadow-inner">
                <Clock className="w-6 h-6" />
              </div>
              <h3 className="text-2xl sm:text-3xl font-bold mb-4 font-serif">
                Recepção 24h
              </h3>
              <p className="text-text-muted text-base font-light leading-relaxed">
                Nossa equipe multilíngue está sempre à disposição, dia e noite,
                pronta para atender suas solicitações com o caloroso acolhimento
                potiguar.
              </p>
            </div>
          </div>

          {/* 5. Serviço de limpeza */}
          <div className="bg-background rounded-3xl p-8 sm:p-10 shadow-lg border border-border/20 flex flex-col justify-between group">
            <div>
              <div className="w-12 h-12 rounded-2xl bg-secondary/15 flex items-center justify-center text-secondary mb-6 shadow-inner">
                <Sparkles className="w-6 h-6" />
              </div>
              <h3 className="text-2xl sm:text-3xl font-bold mb-4 font-serif">
                Serviço de limpeza
              </h3>
              <p className="text-text-muted text-base font-light leading-relaxed">
                Rotina diária rigorosa de higienização, garantindo que você
                retorne de seus passeios para um ambiente impecável e relaxante.
              </p>
            </div>
          </div>

          {/* 6. Concierge & Atendimento */}
          <div className="bg-primary rounded-3xl p-8 sm:p-10 shadow-lg border border-border/20 flex flex-col justify-between group">
            <div>
              <div className="w-12 h-12 rounded-2xl bg-white/10 flex items-center justify-center text-white mb-6 backdrop-blur-md">
                <ConciergeBell className="w-6 h-6" />
              </div>
              <h3 className="text-2xl sm:text-3xl font-bold mb-4 text-white font-serif">
                Concierge & Atendimento
              </h3>
              <p className="text-white/70 text-base font-light leading-relaxed">
                Consultoria personalizada para agendamento de passeios de buggy,
                reservas em restaurantes exclusivos e dicas locais imperdíveis.
              </p>
            </div>
          </div>

          {/* 7. Localização estratégica (Ocupa 2 colunas no desktop) */}
          <div className="lg:col-span-2 bg-background rounded-3xl p-8 sm:p-10 shadow-lg border border-border/20 flex flex-col xl:flex-row items-center gap-8 group">
            <div className="flex-1 z-10">
              <div className="w-12 h-12 rounded-2xl bg-secondary/15 flex items-center justify-center text-secondary mb-6 shadow-inner">
                <MapPin className="w-6 h-6" />
              </div>
              <h3 className="text-2xl sm:text-3xl font-bold mb-4 font-serif">
                Localização estratégica
              </h3>
              <p className="text-text-muted text-base font-light leading-relaxed">
                A poucos passos das areias douradas e no epicentro gastronômico
                e cultural da cidade. Sinta a pulsação de Natal com o privilégio
                da conveniência.
              </p>
            </div>
            <div className="w-full xl:w-56 h-48 sm:h-56 relative rounded-2xl overflow-hidden shadow-md shrink-0">
              <Image
                src={mapImg}
                alt="Localização do Maré Alta Hotel"
                fill
                sizes="(max-width: 1280px) 100vw, 224px"
                className="object-cover object-center group-hover:scale-105 transition-transform duration-500"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
