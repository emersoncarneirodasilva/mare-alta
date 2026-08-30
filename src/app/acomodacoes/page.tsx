import { Metadata } from "next";
import Hero from "@/src/components/Accommodations/Hero";
import AccommodationsList from "@/src/components/Accommodations/AccommodationsList";
import Cta from "@/src/components/Cta";

export const metadata: Metadata = {
  title: "Acomodações e Suítes",
  description:
    "Conheça as suítes individuais, duplas e familiares do Maré Alta Hotel. Conforto, rouparia premium e climatização perfeita a poucos passos da praia de Ponta Negra, em Natal.",
  openGraph: {
    title: "Acomodações | Maré Alta Hotel em Ponta Negra, Natal",
    description:
      "Explore nossas opções de acomodações projetadas para proporcionar o descanso ideal. Garanta sua estadia com conforto e localização privilegiada.",
    url: "https://mare-alta.pages.dev/acomodacoes",
    siteName: "Maré Alta Hotel",
    locale: "pt_BR",
    type: "website",
  },
};

export default function Accommodations() {
  const ctaTitle = "Pronto para garantir o seu refúgio em Ponta Negra?";
  const ctaDescription =
    "Fale com nossa equipe via WhatsApp para verificar disponibilidade, tirar dúvidas sobre as suítes e garantir condições especiais para a sua estadia.";
  const ctaButtonText = "Reservar Agora via WhatsApp";

  return (
    <>
      <Hero />
      <AccommodationsList />
      <Cta
        title={ctaTitle}
        description={ctaDescription}
        buttonText={ctaButtonText}
      />
    </>
  );
}
