import { Users, Wifi, AirVent, Tv, Maximize2, Bed } from "lucide-react";
import roomSingle from "@/public/images/individual-apartment.webp";
import roomDouble from "@/public/images/double-apartment.webp";
import roomFamily from "@/public/images/family-apartment.webp";
import roomSuite from "@/public/images/suite.webp";

export const ACCOMMODATIONS = [
  {
    tag: "Para viajantes solo",
    id: "individual",
    title: "Apartamento Individual",
    description:
      "O espaço ideal para quem busca foco e descanso. Nosso apartamento individual oferece um ambiente sereno com iluminação natural abundante, projetado para o conforto do viajante independente.",
    image: roomSingle,
    alt: "Apartamento Individual do Maré Alta Hotel",
    features: [
      { icon: Users, label: "1 Hóspede" },
      { icon: Wifi, label: "Wi-Fi Rápido" },
      { icon: AirVent, label: "Ar Condicionado" },
      { icon: Tv, label: "Smart TV" },
    ],
  },
  {
    tag: "Conforto a dois",
    id: "duplo",
    title: "Apartamento Duplo",
    description:
      "Romance e tranquilidade se encontram neste apartamento. Equipado com uma cama Queen incrivelmente confortável e detalhes pensados para criar memórias inesquecíveis durante sua estadia no litoral.",
    image: roomDouble,
    alt: "Apartamento Duplo do Maré Alta Hotel",
    features: [
      { icon: Users, label: "2 Hóspedes" },
      { icon: Bed, label: "Cama Queen" },
      { icon: Wifi, label: "Wi-Fi Rápido" },
      { icon: AirVent, label: "Ar Condicionado" },
    ],
  },
  {
    tag: "Espaço para todos",
    id: "familiar",
    title: "Apartamento Familiar",
    description:
      "Momentos em família exigem mais espaço e versatilidade. Nossos apartamentos familiares oferecem amplitude sem abrir mão da sofisticação, garantindo que todos tenham o seu próprio refúgio de descanso.",
    image: roomFamily,
    alt: "Apartamento Familiar do Maré Alta Hotel",
    features: [
      { icon: Users, label: "Até 4 Hóspedes" },
      { icon: Maximize2, label: "Ambiente Amplo" },
      { icon: Wifi, label: "Wi-Fi Rápido" },
      { icon: AirVent, label: "Ar Condicionado" },
    ],
  },
  {
    tag: "Luxo e Exclusividade",
    id: "suite",
    title: "Suíte Master Maré Alta",
    description:
      "A experiência definitiva em hospedagem à beira-mar. Nossa suíte master combina um design sofisticado com uma vista privilegiada panorâmica, oferecendo ambiente de estar integrado e o máximo em conforto.",
    image: roomSuite,
    alt: "Suíte Master do Maré Alta Hotel",
    features: [
      { icon: Users, label: "Até 3 Hóspedes" },
      { icon: Bed, label: "Cama King Size" },
      { icon: Maximize2, label: "Vista Panorâmica" },
      { icon: AirVent, label: "Ar Condicionado" },
    ],
  },
];
