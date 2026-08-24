import Image from "next/image";
import breakfastImg from "@/public/images/gallery-01.webp";
import loungeImg from "@/public/images/gallery-02.webp";
import facadeImg from "@/public/images/gallery-03.webp";

export default function Spaces() {
  return (
    <section
      id="galeria"
      className="py-20 sm:py-24 lg:py-32 bg-background overflow-hidden"
    >
      <div className="wrapper mx-auto px-4 sm:px-6 lg:px-8">
        {/* Cabeçalho da Seção (Estilo Assimétrico) */}
        <div className="flex flex-col lg:flex-row lg:items-start justify-between mb-12 sm:mb-16 lg:mb-20 gap-6">
          <div>
            <span className="text-xs font-semibold uppercase tracking-[0.2em] text-secondary mb-2 block">
              Estrutura
            </span>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-foreground">
              Nossos Espaços
            </h2>
          </div>
          <p className="text-text-muted text-base sm:text-lg font-light max-w-md leading-relaxed lg:mt-7">
            Conheça as áreas comuns pensadas para o seu convívio e relaxamento
            durante a estadia no Maré Alta.
          </p>
        </div>

        {/* Grid Assimétrico (Lado Esquerdo Grande / Lado Direito Empilhado) */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-8 items-stretch">
          {/* IMAGEM PRINCIPAL (Esquerda - 7 colunas) - Salão de Café da Manhã */}
          <div className="lg:col-span-7 h-90 sm:h-115 lg:h-140 relative rounded-3xl overflow-hidden shadow-xl group">
            <Image
              src={breakfastImg}
              alt="Salão de Café da Manhã do Maré Alta Hotel"
              fill
              sizes="(max-width: 1024px) 100vw, 60vw"
              className="object-cover object-center group-hover:scale-105 transition-transform duration-700"
              priority
            />
            {/* Gradiente sutil para destacar o badge */}
            <div className="absolute inset-0 bg-linear-to-t from-black/50 via-transparent to-transparent pointer-events-none" />

            {/* Badge flutuante inferior esquerdo */}
            <div className="absolute bottom-5 left-5 sm:bottom-6 sm:left-6 bg-background/90 dark:bg-background/95 backdrop-blur-md px-4 sm:px-5 py-2 sm:py-2.5 rounded-xl shadow-lg border border-border/20">
              <span className="text-xs sm:text-sm font-semibold tracking-wide text-foreground">
                Salão de Café da Manhã
              </span>
            </div>
          </div>

          {/* COLUNA DIREITA (5 colunas) - Lounge e Fachada Empilhados */}
          <div className="lg:col-span-5 flex flex-col gap-6 lg:gap-8 justify-between">
            {/* IMAGEM SUPERIOR DIREITA - Lounge Recepção */}
            <div className="h-65 sm:h-75 lg:h-66 relative rounded-3xl overflow-hidden shadow-xl group">
              <Image
                src={loungeImg}
                alt="Lounge da Recepção do Maré Alta Hotel"
                fill
                sizes="(max-width: 1024px) 100vw, 40vw"
                className="object-cover object-center group-hover:scale-105 transition-transform duration-700"
              />
              <div className="absolute inset-0 bg-linear-to-t from-black/50 via-transparent to-transparent pointer-events-none" />

              {/* Badge flutuante */}
              <div className="absolute bottom-5 left-5 sm:bottom-6 sm:left-6 bg-background/90 dark:bg-background/95 backdrop-blur-md px-4 py-2 rounded-xl shadow-lg border border-border/20">
                <span className="text-xs sm:text-sm font-semibold tracking-wide text-foreground">
                  Lounge Recepção
                </span>
              </div>
            </div>

            {/* IMAGEM INFERIOR DIREITA - Fachada Principal */}
            <div className="h-65 sm:h-75 lg:h-66 relative rounded-3xl overflow-hidden shadow-xl group">
              <Image
                src={facadeImg}
                alt="Fachada Principal do Maré Alta Hotel"
                fill
                sizes="(max-width: 1024px) 100vw, 40vw"
                className="object-cover object-center group-hover:scale-105 transition-transform duration-700"
              />
              <div className="absolute inset-0 bg-linear-to-t from-black/50 via-transparent to-transparent pointer-events-none" />

              {/* Badge flutuante */}
              <div className="absolute bottom-5 left-5 sm:bottom-6 sm:left-6 bg-background/90 dark:bg-background/95 backdrop-blur-md px-4 py-2 rounded-xl shadow-lg border border-border/20">
                <span className="text-xs sm:text-sm font-semibold tracking-wide text-foreground">
                  Fachada Principal
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
