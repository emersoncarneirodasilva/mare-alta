import Image from "next/image";
import aboutImage from "@/public/images/about-story.webp";

export default function History() {
  return (
    <section className="py-24 lg:py-32 bg-background overflow-hidden">
      <div className="wrapper mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          {/* Coluna da Esquerda: Textos de História e Filosofia */}
          <div className="lg:col-span-6 flex flex-col gap-10 text-left">
            {/* Bloco 1: Nossa História */}
            <div className="flex flex-col gap-3">
              <span className="text-xs font-semibold uppercase tracking-[0.2em] text-secondary">
                Nossa História
              </span>
              <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold leading-[1.2]">
                Desde 2018, recebendo você como em casa.
              </h2>
              <p className="text-text-muted text-base md:text-lg font-normal leading-relaxed">
                Inaugurado com a missão de oferecer uma alternativa que
                equilibra conforto e preço justo na melhor localização de Natal,
                o Maré Alta Hotel & Suítes construiu sua reputação com base no
                serviço acolhedor. Nossa equipe dedicada trabalha diariamente
                para garantir que cada hóspede sinta a hospitalidade potiguar em
                todos os detalhes de sua estadia.
              </p>
            </div>

            {/* Bloco 2: Nossa Filosofia */}
            <div className="flex flex-col gap-3 pt-4">
              <span className="text-xs font-semibold uppercase tracking-[0.2em] text-secondary">
                Nossa Filosofia
              </span>
              <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold leading-[1.2]">
                Cuidado Personalizado
              </h2>
              <p className="text-text-muted text-base md:text-lg font-normal leading-relaxed">
                Acreditamos que o verdadeiro luxo reside na atenção aos pequenos
                detalhes. Desde o sorriso na recepção até o preparo cuidadoso do
                seu quarto, nossa filosofia é proporcionar um ambiente onde o
                conforto encontra a praticidade, permitindo que você aproveite o
                melhor da nossa região costeira com total tranquilidade.
              </p>
            </div>
          </div>

          {/* Coluna da Direita: Imagem com Card Flutuante de Estatísticas */}
          <div className="lg:col-span-6 relative flex justify-center lg:justify-end">
            <div className="relative w-full max-w-lg">
              {/* Imagem Principal Arredondada */}
              <div className="relative h-120 sm:h-140 rounded-3xl overflow-hidden shadow-2xl">
                <Image
                  src={aboutImage}
                  alt="Quarto aconchegante do Maré Alta Hotel"
                  fill
                  sizes="(max-width: 1024px) 100vw, 50vw"
                  className="object-cover object-center hover:scale-105 transition-transform duration-500 ease-in-out"
                />
              </div>

              {/* Card Flutuante de Estatísticas (Sobreposto) */}
              <div className="absolute -bottom-8 -left-6 sm:-left-10 bg-background-card/95 backdrop-blur-md p-6 sm:p-8 rounded-2xl shadow-2xl border border-border/20 w-55 sm:w-60 flex flex-col gap-6">
                {/* Estatística 1 */}
                <div className="flex flex-col">
                  <span className="text-4xl sm:text-5xl font-serif font-bold text-foreground">
                    8+
                  </span>
                  <span className="text-xs uppercase tracking-widest text-muted-foreground font-medium mt-1">
                    Anos de Tradição
                  </span>
                </div>

                <div className="w-full h-px bg-border/60" />

                {/* Estatística 2 */}
                <div className="flex flex-col">
                  <span className="text-4xl sm:text-5xl font-serif font-bold text-foreground">
                    100%
                  </span>
                  <span className="text-xs uppercase tracking-widest text-muted-foreground font-medium mt-1">
                    Hospitalidade Potiguar
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
