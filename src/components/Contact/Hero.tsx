import Image from "next/image";
import contactHeroBg from "@/public/images/bg-hero-accommodations.webp";

export default function Hero() {
  return (
    <section className="relative py-24 lg:py-32 min-h-[85vh] lg:min-h-[90vh] flex items-center justify-center text-center overflow-hidden">
      {/* Imagem de Fundo de Contato */}
      <div className="absolute inset-0 z-0">
        <Image
          src={contactHeroBg}
          alt="Contato do Maré Alta Hotel"
          fill
          priority
          sizes="100vw"
          className="object-cover object-center"
        />
        {/* Camada de Sobreposição com Gradiente Fade para o Fundo */}
        <div className="absolute inset-0 bg-background/80 backdrop-blur-[2px]" />
        <div className="absolute inset-0 bg-linear-to-t from-background via-background/50 to-transparent" />
      </div>

      {/* Conteúdo Principal */}
      <div className="relative wrapper mx-auto px-4 sm:px-6 lg:px-8 z-10 max-w-4xl flex flex-col items-center">
        <span className="text-xs font-semibold uppercase tracking-[0.2em] text-secondary mb-3 block">
          Fale Conosco
        </span>

        <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold tracking-tight mb-6 leading-[1.28]">
          Entre em contato
        </h1>

        <p className="text-text-muted text-base md:text-lg font-normal max-w-2xl leading-relaxed">
          Estamos prontos para ajudar você a planejar sua estadia em Natal.
          Sinta-se à vontade para nos enviar uma mensagem e retornaremos em
          breve.
        </p>
      </div>
    </section>
  );
}
