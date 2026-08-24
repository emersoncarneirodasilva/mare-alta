import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import aboutImage from "@/public/images/about-home.webp";
import breakfastImage from "@/public/images/breakfast-home.webp";

export default function About() {
  return (
    <section className="py-24 lg:py-32 bg-background overflow-hidden">
      <div className="wrapper mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          {/* Coluna da Esquerda: Textos e Chamada */}
          <div className="lg:col-span-5 flex flex-col gap-6 text-left">
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold leading-[1.2]">
              Uma estadia feita para você aproveitar Natal
            </h2>

            <span className="w-12 h-0.5 bg-secondary inline-block" />

            <p className="text-text-muted text-base md:text-lg font-normal leading-relaxed">
              O Maré Alta Hotel & Suítes oferece uma experiência confortável e
              acolhedora para quem visita Natal a lazer ou a trabalho. Com
              atendimento próximo, estrutura completa e localização estratégica,
              buscamos tornar cada estadia mais tranquila e agradável.
            </p>

            <div className="pt-2">
              <Link
                href="/o-hotel"
                className="inline-flex items-center gap-2 text-primary font-semibold text-sm md:text-base hover:text-primary/80 transition-all group"
              >
                <span>Conheça o hotel</span>
                <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
              </Link>
            </div>
          </div>

          {/* Coluna da Direita: Composição das Imagens */}
          <div className="lg:col-span-7 relative flex justify-center lg:justify-end">
            <div className="relative w-full max-w-2xl">
              {/* Imagem Principal (Grande) */}
              <div className="relative w-full h-95 sm:h-115 lg:h-125 rounded-3xl overflow-hidden shadow-2xl">
                <Image
                  src={aboutImage}
                  alt="Recepção e lobby do Maré Alta Hotel & Suítes"
                  fill
                  sizes="(max-width: 1024px) 100vw, 55vw"
                  className="object-cover object-center hover:scale-105 transition-transform duration-500"
                />
              </div>

              {/* Imagem Secundária (Menor sobreposta) */}
              <div className="absolute -bottom-8 -left-4 sm:-bottom-10 sm:-left-8 w-44 sm:w-60 h-36 sm:h-48 rounded-2xl overflow-hidden shadow-xl border-4 border-background bg-background z-10">
                <Image
                  src={breakfastImage}
                  alt="Café da manhã servido no quarto do hotel"
                  fill
                  sizes="(max-width: 640px) 176px, 240px"
                  className="object-cover object-center hover:scale-105 hover:-rotate-2 transition-transform duration-500"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
