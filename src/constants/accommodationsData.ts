import accommodationImage01 from "@/public/images/apartament-home-01.webp";
import accommodationImage02 from "@/public/images/apartament-home-02.webp";
import accommodationImage03 from "@/public/images/apartament-home-03.webp";

export const ACCOMMODATIONS_DATA = [
  {
    title: "Apartamento Individual",
    description:
      "Ambientes projetados para o seu descanso, combinando praticidade e aconchego.",
    image: accommodationImage01,
    tags: ["1 Cama Queen", "Ar-condicionado", 'TV 43"'],
    href: "/acomodacoes#individual",
  },
  {
    title: "Apartamento Duplo",
    description:
      "Espaço ideal para casais ou duplas que buscam conforto e vista privilegiada.",
    image: accommodationImage02,
    tags: ["2 Camas Casal", "Ar-condicionado", "Frigobar"],
    href: "/acomodacoes#duplo",
  },
  {
    title: "Apartamento Familiar",
    description:
      "Conforto total com ambientes amplos para acomodar toda a família com comodidade.",
    image: accommodationImage03,
    tags: ["Até 4 Pessoas", "Cama King + Sofá", "Varanda"],
    href: "/acomodacoes#familiar",
  },
];
